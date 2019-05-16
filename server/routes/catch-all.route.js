const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', function(request,response){
    console.log(`Catching route for ${request.url}`);

    response.sendFile(path.join(__dirname, '../../dist/authors/index.html'));
});