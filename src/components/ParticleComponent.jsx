import React, { useEffect } from 'react';

const ParticleComponent = () => {
  useEffect(() => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 10 + 5; // Ukuran partikel yang lebih besar
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    function createParticles() {
      for (let i = 0; i < 5; i++) { // Menghasilkan 5 partikel setiap kali dipanggil
        const particle = new Particle();
        particles.push(particle);
      }
    }

    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.1;
    };

    Particle.prototype.draw = function () {
      ctx.fillStyle = '#ff4d4d'; // Warna merah muda sesuai dengan tema Valentine
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(this.x, this.y - this.size / 2);
      ctx.quadraticCurveTo(this.x, this.y - this.size, this.x + this.size / 2, this.y - this.size);
      ctx.quadraticCurveTo(this.x + this.size, this.y - this.size, this.x + this.size, this.y - this.size / 2);
      ctx.quadraticCurveTo(this.x + this.size, this.y, this.x + this.size / 2, this.y + this.size / 2);
      ctx.quadraticCurveTo(this.x, this.y + this.size, this.x - this.size / 2, this.y + this.size / 2);
      ctx.quadraticCurveTo(this.x - this.size, this.y, this.x - this.size / 2, this.y - this.size / 2);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
    };

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }

      if (Math.random() > 0.9) {
        createParticles();
      }

      requestAnimationFrame(animateParticles);
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    createParticles();
    animateParticles();
    handleResize();

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      particles = [];
      createParticles();
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas id="particleCanvas" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} />
  );
};

export default ParticleComponent;
