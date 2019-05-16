const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    const { password, email } = request.body;
    // const { body: { password, email} } = request;

    User.findOne({ email })
      .then(user => {
        return User.validatePassword(password, user.password).then(valid => {
          if (!valid) throw new Error();

          completeLogin(request, response, user);
        });
      })
      .catch(error => {
        response.status(Http.Unauthorized).json('credentials not found');
      });
  },
  register(request, response) {
    User.create(request.body)
      .then(user => {
        // login
        completeLogin(request, response, user);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  logout(request, response) {
    console.log('completing logout');

    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('expiration');
    response.json(true);
  },
};

function completeLogin(request, response, user) {
  console.log('completing login');
  const data = user.toObject();

  delete data.password;

  request.session.user = data;

  response.cookie('userID', data._id);
  response.cookie('expiration', Date.now() + 86400 * 1000);
  response.json(user);
}