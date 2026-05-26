let titulo = document.getElementById("titulo");
let frases = document.getElementById("frases");

const botonInicio = document.getElementById("botonInicio");


async function cambioDeFrases(){
    const frasesArr = [
  "Distance means so little when someone means so much.",
  "I fell in love with you, not with your zip code.",
  "The miles between us are just numbers.",
  "Absence sharpens love, presence strengthens it.",
  "Every goodbye makes the next hello sweeter.",
  "I carry your heart with me wherever I go.",
  "Loving you from afar is the hardest beautiful thing.",
  "Time zones can't change what I feel for you.",
  "Distance is temporary, but what we have is forever.",
  "I miss you more than words can express.",
  "We are a thousand miles apart but one heart.",
  "The waiting is painful, but you're worth every second.",
  "No map can measure the distance between our hearts.",
  "I close my eyes and suddenly you're not far at all.",
  "Missing you is a full-time occupation.",
  "Someday, the miles between us will only be a memory.",
  "I would cross any ocean just to hold you.",
  "Every road between us is a road worth taking.",
  "Your voice is the only distance cure I know.",
  "In another life, we'd never be this far apart.",
  "Distance is just a test of how far love can travel.",
  "I count the days until the space between us disappears.",
  "You are worth every sleepless late-night call.",
  "Loving you from here makes me brave.",
  "We may be apart, but our hearts beat in sync.",
  "Distance gave us the chance to love deeper.",
  "I look at the same stars and feel less alone.",
  "No ocean is wide enough to keep me from you.",
  "The best things in life are worth waiting for.",
  "Missing you is my heart's way of loving you.",
  "Every message from you feels like coming home.",
  "We built something too strong for miles to break.",
  "One day we'll wake up and never say goodbye again.",
  "You are my home, no matter where I am.",
  "Every minute apart is a minute closer to forever.",
  "Our love doesn't need the same time zone.",
  "The hardest part is sleeping without you nearby.",
  "Your laugh is the soundtrack of my every day.",
  "Distance taught me how much I truly need you.",
  "I love you more with every mile between us.",
  "Thinking of you is how I survive the distance.",
  "Long distance is a chapter, not the whole story.",
  "The next time I see you, I'll never let go.",
  "We are proof that love doesn't need proximity.",
  "Every flight booked is a promise kept.",
  "Your love reaches me no matter the distance.",
  "I am homesick for a person, not a place.",
  "We are writing a love story worth every mile.",
  "Distance is nothing when love is everything.",
  "You are my favorite hello and my hardest goodbye."
];
    const indiceAleatorio = Math.floor(Math.random() * frasesArr.length);
    
    frases.textContent = frasesArr[indiceAleatorio];
}

let intervalo = setInterval(cambioDeFrases, 5000);