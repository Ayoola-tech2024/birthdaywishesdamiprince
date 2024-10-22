const wishes = [
    "Wishing you a day filled with love ❤😍, laughter, and all your favorite things!🎉",
    "Happy 20th Birthday, Damiprince Romeo!🎉🎉 May your dreams come true!🎉🎉",
    "May this year bring you endless happiness🎉🎉, success, and joy!🎉🎉",
    "To the coolest 20-year-old,🎉🎉 wishing you a day as special as you are!",
    "May you have all the love your heart can hold,🎉🎉 all the happiness a day can bring,🎉🎉 and all the blessings a life can unfold", 
    "On your birthday may your spirit be enriched in light,🎉🎉 love, and hope for a prosperous year ahead.🎉🎉",
    "Warmest wishes to you on your very special day.🎉🎉!"
];

function generateWish() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    const wishText = document.getElementById('wish-text');
    wishText.style.display = 'block';
    wishText.innerHTML = wishes[randomIndex];
}
