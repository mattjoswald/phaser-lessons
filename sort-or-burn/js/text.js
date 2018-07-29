export default class Text {
    constructor(config, scene) {
        this.config = config;
        this.scene = scene;
        this.numSorted = this.numBurned = 0;
    }

    create() {
        const textLeft = this.config.width / 2;
        this.scene.add.text(textLeft, 50, "Sort or Burn", {font: "50px sans-serif", color: "black"}).setOrigin(0, 0.5);
        this.scene.add.text(textLeft, 120,
            "Rescue library books by sorting them\nbefore they burn. Use mouse/touch\nor number keys.",
            {font: "20px sans-serif", color: "black"}).setOrigin(0, 0.5);
        this.sortedText = this.scene.add.text(textLeft, 200, "",
            {font: "30px sans-serif", color: "black"}).setOrigin(0, 0.5);
    }

    addSorted() {
        ++this.numSorted;
        this.update();
    }

    addBurned() {
        ++this.numBurned;
        this.update();
    }

    update() {
        this.sortedText.setText(`Sorted: ${this.numSorted}\nBurned: ${this.numBurned}`);
    }

}