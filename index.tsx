document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks?.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Gooey cursor effect
    const bubble1 = document.getElementById('bubble1');
    const bubble2 = document.getElementById('bubble2');
    const bubble3 = document.getElementById('bubble3');

    if (!bubble1 || !bubble2 || !bubble3) return;

    // A simple lerp function for smooth animation
    const lerp = (start: number, end: number, amt: number) => {
        return (1 - amt) * start + amt * end;
    };

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    const bubble1State = { x: mouse.x, y: mouse.y };
    const bubble2State = { x: mouse.x, y: mouse.y };
    const bubble3State = { x: mouse.x, y: mouse.y };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    const animate = () => {
        // Bubble 1 follows the mouse
        bubble1State.x = lerp(bubble1State.x, mouse.x, 0.15);
        bubble1State.y = lerp(bubble1State.y, mouse.y, 0.15);
        bubble1.style.left = `${bubble1State.x}px`;
        bubble1.style.top = `${bubble1State.y}px`;

        // Bubble 2 follows bubble 1
        bubble2State.x = lerp(bubble2State.x, bubble1State.x, 0.1);
        bubble2State.y = lerp(bubble2State.y, bubble1State.y, 0.1);
        bubble2.style.left = `${bubble2State.x}px`;
        bubble2.style.top = `${bubble2State.y}px`;
        
        // Bubble 3 follows bubble 2
        bubble3State.x = lerp(bubble3State.x, bubble2State.x, 0.05);
        bubble3State.y = lerp(bubble3State.y, bubble2State.y, 0.05);
        bubble3.style.left = `${bubble3State.x}px`;
        bubble3.style.top = `${bubble3State.y}px`;

        requestAnimationFrame(animate);
    };

    animate();
});