const player1 = document.getElementById("player1");

const SPRITE_SIZE = 128; // each frame = 512 / 4
const SPRITES_PER_ROW = 4;

let frame = 0;
let maxFrames = 4;
let animSpeed = 200;
let currentAnim = "idle";
let punchToggle = false;
let direction = 1;
let posX = 0;
let keys = {};

const animations = {
  idle: { start: 0, length: 4, speed: 200 },
  punch1: { start: 4, length: 3, speed: 100 },
  punch2: { start: 7, length: 3, speed: 100 },
  blockIdle: { start: 10, length: 1, speed: 200 },
  blockHit: { start: 11, length: 2, speed: 150 },
  walk: { start: 13, length: 2, speed: 150 },
};

document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

function setAnimation(name) {
  if (currentAnim !== name) {
    currentAnim = name;
    frame = 0;
  }
}

function updatePosition() {
  let moving = false;
  const speed = 5;

  if (keys["a"]) {
    direction = -1;
    posX -= speed;
    moving = true;
  } else if (keys["d"]) {
    direction = 1;
    posX += speed;
    moving = true;
  }

  if (keys["e"]) {
    setAnimation(punchToggle ? "punch2" : "punch1");
    punchToggle = !punchToggle;
    keys["e"] = false;
  }

  if (keys["q"]) {
    setAnimation("blockIdle");
  } else if (!moving && !keys["e"]) {
    setAnimation("idle");
  } else if (moving) {
    setAnimation("walk");
  }

  player1.style.transform = `scaleX(${direction})`;
  player1.style.left = `${posX}px`;
}

function updateFrame() {
  const anim = animations[currentAnim];
  maxFrames = anim.length;
  animSpeed = anim.speed;
  const currentFrame = anim.start + frame;

  const row = Math.floor(currentFrame / SPRITES_PER_ROW);
  const col = currentFrame % SPRITES_PER_ROW;

  const offsetX = col * SPRITE_SIZE;
  const offsetY = row * SPRITE_SIZE;

  player1.style.backgroundPosition = `-${offsetX}px -${offsetY}px`;

  frame = (frame + 1) % maxFrames;
}

function gameLoop() {
  updatePosition();
  updateFrame();
  setTimeout(gameLoop, animSpeed);
}

gameLoop();
