import Axios from "axios";

Axios({
    method : 'get',
    url: 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed',
    data: {
        url : "https://yandex.ru",
        key: "AIzaSyAQK0s1ozw5UigUlIJPma4URA-3-_0DgNc"
    }
}).then(function(response) {
    console.log(response.data);
})