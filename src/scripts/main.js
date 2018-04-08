let $ = require('jquery');
import OwnSite from './OwnSite.js';
import FullPage from 'fullpage.js';


let app = new OwnSite();
// $.ajax({
//     method: 'GET',
//     url: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
//     data: {
//         url : "https://yandex.ru",
//         key: "AIzaSyAQK0s1ozw5UigUlIJPma4URA-3-_0DgNc"
//     }
// }).done(function(response) {
//     console.log(response);
// })