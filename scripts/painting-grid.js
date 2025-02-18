

const paintings = [ 
    {
        name: 'Unknown',
        year: 2020,
        filePath: '241101 IMG_5396-2.jpg'
    },
    {
        name: 'Claire and Miles playing poker',
        year: 2021,
        filePath: 'Claire+Miles.jpg'
    },
    {
        name: 'Castelnou',
        year: 2020,
        filePath: 'EveOShea_2.jpeg'
    },
    {
        name: 'Flowered Scene',
        year: 2018,
        filePath: 'floweredscene.jpg'
    },
    {
        name: 'Lise Peron',
        year: 2020,
        filePath: 'OSheaEve_LisePeron.jpeg'
    },
    {
        name: 'Pathway',
        year: 2020,
        filePath: 'pathway.jpg'
    },
    {
        name: 'Power Street',
        year: 2020, 
        filePath: 'PowerStreet.jpg'
    },
    
    {
        name: 'Swimmer',
        year:2019,
        filePath:  'swimmer.jpg',
    },
    {
        name: 'Rockaway',
        year:2018,
        filePath: 'Rockaway.jpg',
    },
    {
        name: 'The Aquarium',
        year: 2020,
        filePath: 'Theaquarium.jpg',
    },
    {
        name: 'Winter Walk',
        year: 2020, 
        filePath:  'winterwalk.jpg',
    },
 ]



const paintingGrid = document.getElementById("painting-grid")

paintings.forEach((painting) => {

    const thumbnailDiv = document.createElement('div')
    thumbnailDiv.classList.add('thumbnail-container')
    const image = document.createElement('img')
    image.classList.add('thumbnail')
    image.src = `painting/${painting.filePath}`
    image.alt = painting.name
    
    const text = document.createElement('div')
    text.classList.add('caption-text')
    text.textContent = `${painting.name} ${painting.year}`
    text.hidden = true

    thumbnailDiv.addEventListener('mouseenter', () => {
        console.log("hovering")
        console.log(text.textContent)
        text.hidden = false
    })

    thumbnailDiv.addEventListener('mouseleave', () => {
        text.hidden= true
    })

    thumbnailDiv.appendChild(image)
    thumbnailDiv.appendChild(text)
    paintingGrid.appendChild(thumbnailDiv)

})


const dialog = document.querySelector('.dialog')
const dialogImg = dialog.querySelector('img')

const closeButton = document.querySelector('.close-button')

paintingGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumbnail')) {

        dialogImg.src = e.target.src;
        dialogImg.alt = e.target.alt;
        dialog.classList.add('open')
    }
})

closeButton.addEventListener('click', () => {
    dialog.classList.remove('open');
});

dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
        dialog.classList.remove('open');
    }
});
