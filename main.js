const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Функция для генерации рандомного числа. Примнимает два числа и возврощает случайное число в диапазоне между ними.

// function random(min, max) {
//   const num = Math.floor(Math.random() * (max - min + 1)) + min;
//   return num;
// }

// переписываю функцию random в стрелочную
let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Объект для генерации шаров

// function Ball(x, y, velX, velY, color, size) {
//     this.x = x;
//     this.y = y;
//     this.velX = velX;
//     this.velY = velY;
//     this.color = color;
//     this.size = size;
//   }

// Добовляем метод для отрисовки шаров

//   Ball.prototype.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fill();
//   }

// Переписываем объект Ball в class

class Ball {
    constructor(x, y, velX, velY, color, size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
      // Функция обновления 
    update(){
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
          }
        
          if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
          }
        
          if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
          }
        
          if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
          }
        
          this.x += this.velX;
          this.y += this.velY; 
    }
        //Добовляем обнаружение столкновений
    collisionDetect(){
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
              let dx = this.x - balls[j].x;
              let dy = this.y - balls[j].y;
              let distance = Math.sqrt(dx * dx + dy * dy);
        
              if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
              }
            }
          }
    }

}

// Создем новый экземпляр шара

  let testBall = new Ball(50, 100, 4, 4, 'blue', 10);

  testBall.x
  testBall.size
  testBall.color
  testBall.draw()

  // Функция обновления 

//   Ball.prototype.update = function() {
//     if ((this.x + this.size) >= width) {
//       this.velX = -(this.velX);
//     }
  
//     if ((this.x - this.size) <= 0) {
//       this.velX = -(this.velX);
//     }
  
//     if ((this.y + this.size) >= height) {
//       this.velY = -(this.velY);
//     }
  
//     if ((this.y - this.size) <= 0) {
//       this.velY = -(this.velY);
//     }
  
//     this.x += this.velX;
//     this.y += this.velY;
//   }
    //Добовляем обнаружение столкновений
    
    // Ball.prototype.collisionDetect = function() {
    //     for (let j = 0; j < balls.length; j++) {
    //       if (!(this === balls[j])) {
    //         let dx = this.x - balls[j].x;
    //         let dy = this.y - balls[j].y;
    //         let distance = Math.sqrt(dx * dx + dy * dy);
      
    //         if (distance < this.size + balls[j].size) {
    //           balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
    //         }
    //       }
    //     }
    //   }

  //Добавляем массив с шарами (переписал в IIFE)

  const balls = [];

  (function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      let ball = new Ball(
        random(0,width),
        random(0,height),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        random(10,20)
      );
      balls.push(ball);
    }
  
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  
    requestAnimationFrame(loop);
  })()


//   loop()
