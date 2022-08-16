let marks = {
    nalr: -40,
    pa: 16,
    fnd: 39,
    total: function() {
        console.log(this);
        // let total = marks.nalr + marks.pa + marks.fnd;
        let total = this.nalr + this.pa + this.fnd;
        return total;
    }
}

console.log(marks.total());