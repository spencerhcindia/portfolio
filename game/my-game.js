const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#87CEFA',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let player;
let cursors;
let enemies;
let score = 0;
let scoreText;
let lives = 3;
let livesText;
let isPaused = false;

function preload() {
    this.load.image('player', 'jet2.png');
    this.load.image('enemy', 'bullet.png');
    this.load.image('cloud', '/clound.png');
    this.load.image('heart', 'heart.png');
}

function create() {
    player = this.physics.add.sprite(400, 400, 'player').setScale(0.075);
    player.setCollideWorldBounds(true);

    const spriteWidth = player.width;
    const spriteHeight = player.height;

    // Define the desired smaller collision box size
    const collisionWidth = spriteWidth * 0.2;  // 60% of the sprite width
    const collisionHeight = spriteHeight * 0.2;  // 60% of the sprite height

    // Calculate offsets to center the collision box within the sprite
    const offsetX = (spriteWidth - collisionWidth) / 2;
    const offsetY = (spriteHeight - collisionHeight) / 2;

    // Adjust collision bounds
    player.body.setSize(collisionWidth, collisionHeight);
    player.body.setOffset(offsetX, offsetY);

    cursors = this.input.keyboard.createCursorKeys();

    enemies = this.physics.add.group();

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
    livesText = this.add.text(16, 48, 'Lives: 3', { fontSize: '32px', fill: '#fff' });

    this.physics.add.collider(player, enemies, hitEnemy, null, this);

    this.time.addEvent({
        delay: 750,
        callback: addEnemy,
        callbackScope: this,
        loop: true
    });

    // Create input for restart and pause
    this.input.keyboard.on('keydown-ENTER', restartGame, this);
    this.input.keyboard.on('keydown-P', togglePause, this);
}

function update() {
    if (cursors.up.isDown) {
        player.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        player.setVelocityY(200);
    } else {
        player.setVelocityY(0);
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    } else {
        player.setVelocityX(0);
    }

    scoreText.setText('Score: ' + score);
    livesText.setText('Lives: ' + lives);
}

function addEnemy() {
    const x = Phaser.Math.Between(800, 1600);
    const y = Phaser.Math.Between(50, 750);
    const enemy = enemies.create(x, y, 'enemy').setScale(0.03);
    enemy.setVelocityX(-200);

    enemy.checkWorldBounds = true;
    enemy.outOfBoundsKill = true;

    enemy.body.onWorldBounds = true;
    this.physics.world.on('worldbounds', () => {
        enemy.destroy();
    });
}

function hitEnemy(player, enemy) {
    enemy.destroy();
    lives -= 1;
    if (lives <= 0) {
        this.physics.pause();
        player.setTint(0xff0000);
        this.add.text(400, 400, 'Game Over', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);
        this.input.keyboard.once('keydown-ENTER', () => {
            this.scene.restart();
            score = 0;
            lives = 3;
        });
    }
}

function restartGame() {
    if (lives <= 0) {
        this.scene.restart();
        score = 0;
        lives = 3;
    }
}

function togglePause() {
    if (!isPaused) {
        this.physics.pause();
        isPaused = true;
        this.add.text(400, 400, 'Paused', { fontSize: '64px', fill: '#fff' }).setOrigin(0.5).setName('PausedText');
    } else {
        this.physics.resume();
        isPaused = false;
        this.children.getByName('PausedText').destroy();
    }
}
