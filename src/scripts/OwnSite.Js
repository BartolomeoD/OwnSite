let $ = require('jquery');
export default class OwnSite {
    constructor () {
        console.log("site initialisated");
        $("#fullpage-wrapper").fullpage();
    }
}