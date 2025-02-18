// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "E",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Para ti",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🍓', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', ' 🐧']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Te gusta la nieve?",                                    // First interaction
            yesBtn: "Sí",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "No me gusta, me encanta ❤️"           // Secret hover message
        },
        second: {
            text: "¡Qué tanto?",                          // For the love meter
            startText: "!Esto!",                                   // Text before the percentage
            nextBtn: "Siguiente ❤️"                                         // Text for the next button
        },
        third: {
            text: "¿Quieres ir a este lugar de Andamar donde hay nieve que no sé como se llama este sábado conmigo? 🌹", // The big question!
            yesBtn: "Sí",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "☺️",  // Shows when they go past 5000%
        high: "😇",              // Shows when they go past 1000%
        normal: "😪"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "¡Yupi! 🎉💝💖💓",
        message: "¡Primero dime si puedes ir! 🙏",
        emojis: "💓 💗 🍓 "  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FC9FB1",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FC5A8D",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#4F6D3A",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dsehs8on3/video/upload/v1739754057/mmmrbvdazniivpkya4p3.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
