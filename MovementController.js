class MovementController {
  constructor() {
    this.direction = {
      x: [],
      y: [],
    };

    this.directionValue = {
      w: -1,
      s: 1,
      a: -1,
      d: 1,
    };

    this.init();
  }

  get directions() {
    let x = 0;
    let y = 0;

    if (this.direction.x.length > 0) {
      x = this.direction.x[0];
    }

    if (this.direction.y.length > 0) {
      y = this.direction.y[0];
    }

    // Handle diagonal movement (45-degree angle)
    if (x !== 0 && y !== 0) {
      // Adjust the values based on your requirements
      x *= Math.sqrt(0.5);
      y *= Math.sqrt(0.5);
    }

    return [x, y];
  }

  handleKeyDown(key, directionArray) {
    if (directionArray.indexOf(this.directionValue[key]) === -1) {
      directionArray.push(this.directionValue[key]);
    }
  }

  handleKeyUp(key, directionArray) {
    const index = directionArray.indexOf(this.directionValue[key]);
    if (index > -1) {
      directionArray.splice(index, 1);
    }
  }

  handleKeyDownEvent(e) {
    switch (e.key) {
      case "w":
        this.handleKeyDown(e.key, this.direction.y);
        break;
      case "s":
        this.handleKeyDown(e.key, this.direction.y);
        break;
      case "a":
        this.handleKeyDown(e.key, this.direction.x);
        break;
      case "d":
        this.handleKeyDown(e.key, this.direction.x);
        break;
    }
  }

  handleKeyUpEvent(e) {
    switch (e.key) {
      case "w":
        this.handleKeyUp(e.key, this.direction.y);
        break;
      case "s":
        this.handleKeyUp(e.key, this.direction.y);
        break;
      case "a":
        this.handleKeyUp(e.key, this.direction.x);
        break;
      case "d":
        this.handleKeyUp(e.key, this.direction.x);
        break;
    }
  }

  init() {
    document.addEventListener("keydown", (e) => this.handleKeyDownEvent(e));
    document.addEventListener("keyup", (e) => this.handleKeyUpEvent(e));
  }
}
