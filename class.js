class Developer {
    name;
    address = 'Dhaka'
    phone = '015151522545'
    designaton = 'Web-Developer'
    constructor(name) {
        this.name = name;
    }
    startSetion() {
        console.log(this.name, 'start a web conference');
    }
}
const jamal = new Developer('jamal');
// console.log(jamal);
jamal.startSetion();