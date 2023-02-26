class GuessingGame {
    constructor() {
        this.max = 0
        this.min = 0
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return Math.round(this.min + ((this.max - this.min) / 2))
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
