const fighter = document.getElementById("fighter");

const SPRITE_SIZE = 1024;
const SPRITES_PER_ROW = 4;
let frame = 0;
let maxFrames = 4;
let animSpeed = 100;
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

document.addEventListener("keydown", (e) => (keys[e.key.toLowerCase()] = true));
document.addEventListener("keyup", (e) => (keys[e.key.toLowerCase()] = false));

function setAnimation(name) {
  if (currentAnim === name) return;
  currentAnim = name;
  frame = 0;
}

function updatePosition() {
  if (keys["a"]) {
    direction = -1;
    posX -= 10;
    setAnimation("walk");
  } else if (keys["d"]) {
    direction = 1;
    posX += 10;
    setAnimation("walk");
  } else if (!keys["q"] && !keys["e"]) {
    setAnimation("idle");
  }

  if (keys["e"]) {
    setAnimation(punchToggle ? "punch2" : "punch1");
    punchToggle = !punchToggle;
    keys["e"] = false;
  }

  if (keys["q"]) {
    setAnimation("blockIdle");
  }

  fighter.style.transform = `scaleX(${direction})`;
  fighter.style.left = `${posX}px`;
}

function updateFrame() {
  const anim = animations[currentAnim];
  maxFrames = anim.length;
  animSpeed = anim.speed;
  const currentFrame = anim.start + frame;

  const row = Math.floor(currentFrame / SPRITES_PER_ROW);
  const col = currentFrame % SPRITES_PER_ROW;

  fighter.style.backgroundPosition = `-${col * SPRITE_SIZE}px -${row * SPRITE_SIZE}px`;

  frame = (frame + 1) % maxFrames;
}

function gameLoop() {
  updatePosition();
  updateFrame();
  setTimeout(gameLoop, animSpeed);
}

gameLoop();
