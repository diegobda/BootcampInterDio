const pess = {
    firstName: "Diego",
    lastName: "Santos",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
      },
    getId: function() {
        return this.id;
    }
};

pess.fullName();
// "Diego Santos"

pess.getId();
//1

(function () {
    console.log(this);
})();


const pesso2 = {
    firstName: "Diego",
    lastName: "Goncalves",
    id: 2,
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
}

pesso2.getFullName();