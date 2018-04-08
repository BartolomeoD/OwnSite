let $ = require('jquery');
export default class OwnSite {

    getSectionsList() {
        return [
            'intro',
            'history',
            'frontend-stack',
            'backend-stack',
            'administration',
            'some-stats'
        ];
    }

    constructor () {
        console.log(this);
        $("#fullpage-wrapper").fullpage({
            anchors: this.getSectionsList()
        });
        console.log("site initialisated");
    }
}