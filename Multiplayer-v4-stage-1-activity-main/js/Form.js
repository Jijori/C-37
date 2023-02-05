class Form {
 constructor() {
  //creating an input with a placeholder
   this.input = createInput("").attribute("placeholder", "Enter your name: ");
   //Play button
   this.playButton = createButton("Play");
   //title Image
   this.titleImg = createImg("./assets/title.png", "game title");
   //greeting message
   this.greeting = createElement("h2");
}

setElementsPosition() {
  //their position on the screen
  this.titleImg.position(120, 100);
  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 90, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
}

 /* setElementsStyle() {
  this.titleImg.class("gameTitle");
  this.input.class("customInput");
  this.playButton.class("customButton");
  this.greeting.class("greeting");
  } */

hide() {
  //to hide these elements when called
  this.greeting.hide();
  this.playButton.hide();
  this.input.hide();
}

handleMousePressed() {
  //arrow function is used when the function doesn't belong to the button but to the class Form
  this.playButton.mousePressed(() => {
  this.input.hide();
  this.playButton.hide();
  var message = `
  Hello ${this.input.value()}
  </br>Waiting for another player to join...`;
  this.greeting.html(message);
  player.name = this.input.value();
  player.index = 1;
  //player.addPlayer();
  });
}

display() {
  this.setElementsPosition();
  //this.setElementsStyle();
  this.handleMousePressed();
  }
}