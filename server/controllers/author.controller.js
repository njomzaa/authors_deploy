const Author = require('mongoose').model('Author');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response) {
        Author.find({})
            .then(authors => response.json(authors))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    create(request, response) {
        Author.create(request.body)
            .then(author => response.json(author))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    show(request, response) {
        const { author_id: authorId} = request.params;
        Author.findById(authorId)
            .then(author => response.json(author))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error));
    },
    update(request, response) {
        const { author_id: authorId} = request.params;
        Author.findByIdAndUpdate(authorId, request.body, {new:true})
            .then(author => response.json(author))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })

    },
    destroy(request, response) {
        const {author_id: authorId} = request.params;
        Author.findByIdAndRemove(authorId)
            .then(author => response.json(author))
            .catch(error => response.status(Http.ResetContent).json(error));
    },
};