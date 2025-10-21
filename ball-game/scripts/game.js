import ballTypes from './balls' with { type: "json" };

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let balls = [];
const BALL_RADIUS = 15;

class Ball {
    constructor(x, y, dx, dy, type) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.type = type;
        this.radius = BALL_RADIUS;
        this.hp = type.stats.hp;
        this.maxHp = type.stats.hp;
        this.damage = type.stats.damage;
        this.color = type.color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        // Draw HP bar
        this.drawHpBar();
    }

    drawHpBar() {
        const hpBarWidth = 30;
        const hpBarHeight = 5;
        const hpRatio = this.hp / this.maxHp;

        // Background
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x - hpBarWidth / 2, this.y - this.radius - 10, hpBarWidth, hpBarHeight);

        // Foreground
        ctx.fillStyle = hpRatio > 0.5 ? 'green' : hpRatio > 0.2 ? 'yellow' : 'red';
        ctx.fillRect(this.x - hpBarWidth / 2, this.y - this.radius - 10, hpBarWidth * hpRatio, hpBarHeight);
    }

    update() {
        // Bounce off walls
        if (this.x + this.dx > canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }

        // Move ball
        this.x += this.dx;
        this.y += this.dy;
    }

    checkCollision(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.radius + otherBall.radius) {
            // Simple collision response: reverse direction
            this.dx = -this.dx;
            this.dy = -this.dy;
            otherBall.dx = -otherBall.dx;
            otherBall.dy = -otherBall.dy;

            // Apply damage
            this.takeDamage(otherBall.damage);
            otherBall.takeDamage(this.damage);
        }
    }

    takeDamage(damage) {
        this.hp -= damage;
    }
}

function init() {
    // Create some balls based on the data in balls.json
    for (let i = 0; i < 15; i++) {
        const randomType = ballTypes[Math.floor(Math.random() * ballTypes.length)];
        const speed = randomType.stats.speed;
        const x = Math.random() * (canvas.width - 2 * BALL_RADIUS) + BALL_RADIUS;
        const y = Math.random() * (canvas.height - 2 * BALL_RADIUS) + BALL_RADIUS;
        const dx = (Math.random() - 0.5) * speed;
        const dy = (Math.random() - 0.5) * speed;
        balls.push(new Ball(x, y, dx, dy, randomType));
    }
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw balls
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();

        // Check for collisions with other balls
        for (let j = i + 1; j < balls.length; j++) {
            balls[i].checkCollision(balls[j]);
        }
    }

    // Filter out balls with no health
    balls = balls.filter(ball => ball.hp > 0);
}

init();
