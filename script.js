document.addEventListener('DOMContentLoaded', function() {
    // Gift button animation
    const giftButton = document.getElementById('giftButton');
    const giftReveal = document.getElementById('giftReveal');
    
    if (giftButton && giftReveal) {
        giftButton.addEventListener('click', function() {
            giftReveal.classList.add('active');
            createConfetti();
            giftButton.style.display = 'none';
        });
    }
    
    // Create confetti effect
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        const colors = ['#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#ff9800', '#ffeb3b'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.position = 'absolute';
            confetti.style.top = '-10px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.opacity = Math.random() + 0.5;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            // Animation properties
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation completes
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
        
        // Add falling animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                to {
                    transform: translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add hover effects to photo frames and wish cards
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        frame.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add floating animation to elements
    function addFloatingAnimation() {
        const elements = document.querySelectorAll('.title, .subtitle, .message-card, .wish-card');
        
        elements.forEach((element, index) => {
            // Create a slight delay between each element
            const delay = index * 0.2;
            element.style.animation = `floating 3s ease-in-out ${delay}s infinite`;
        });
        
        // Add floating keyframes
        const floatingStyle = document.createElement('style');
        floatingStyle.innerHTML = `
            @keyframes floating {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
        `;
        document.head.appendChild(floatingStyle);
    }
    
    // Call floating animation after a short delay
    setTimeout(addFloatingAnimation, 2000);
    
    // Add page load animation
    function pageLoadAnimation() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 500 + (index * 300));
        });
    }
    
    // Call page load animation
    pageLoadAnimation();
});

