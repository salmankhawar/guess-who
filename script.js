function toggleEliminated(element) {
    return element.classList.toggle('eliminated')
}


let cards = [
    {
        name: 'Sakura',
        image: 'characters_01.jpg'
    },
    {
        name: 'Kaede',
        image: 'characters_02.jpg'
    },
    {
        name: 'Aya',
        image: 'characters_03.jpg'
    },
    {
        name: 'Yuuki',
        image: 'characters_04.jpg'
    },
    {
        name: 'Mikoto',
        image: 'characters_05.jpg'
    },
    {
        name: 'Ren',
        image: 'characters_06.jpg'
    },
    {
        name: 'Ryo',
        image: 'characters_07.jpg'
    },
    {
        name: 'Yori',
        image: 'characters_08.jpg'
    },
    {
        name: 'Hana',
        image: 'characters_09.jpg'
    },
    {
        name: 'Tatsuya',
        image: 'characters_10.jpg'
    },
    {
        name: 'Taro',
        image: 'characters_11.jpg'
    },
    {
        name: 'Mai',
        image: 'characters_12.jpg'
    },
    {
        name: 'Ayumi',
        image: 'characters_14.jpg'
    },
    {
        name: 'Hotaru',
        image: 'characters_15.jpg'
    },
    {
        name: 'Haru',
        image: 'characters_16.jpg'
    },
    {
        name: 'Kazuya',
        image: 'characters_17.jpg'
    },
    {
        name: 'Akira',
        image: 'characters_18.jpg'
    },
    {
        name: 'Saki',
        image: 'characters_19.jpg'
    },
    {
        name: 'Kazuo',
        image: 'characters_20.jpg' 
    }
]

function selectRandomCard() {
let i = Math.floor(Math.random()*19) 
let mysteryCardName = document.querySelector('.Mystery-Card span')
let mysteryImage = document.querySelector('img.Mystery')
mysteryCardName.innerHTML = cards[i].name  
mysteryImage.src = 'images/' + cards[i].image  

} 
console.log(selectRandomCard())


