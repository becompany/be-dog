import BeMedia from 'be-media';

class BeDog extends BeMedia {
    constructor() {
        super();
        this.refresh();
    }

    'click::event'() {
        this.refresh();
    }

    refresh() {
        axios.get('https://random.dog/woof.json')
            .then(response => this.src = response.data.url)
            .catch(error => console.error(error));
    }

}

var beDog = xtag.create('be-dog', BeDog);

export default beDog;