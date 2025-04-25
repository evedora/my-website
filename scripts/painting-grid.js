

const paintings = [ 
    {
        name: 'Squarepants',
        material: 'Oil on Canvas',
        dimensions:
        year: 2024,
        filePath: 'Squarepants-NEWEST.jpg'
    },        
    {
        name: 'St. Luke in the Fields',
        material: 'Oil on Canvas',
        dimensions: '24 x 30”,
        year: 2024,
        filePath: 'Eve-OShea-StLukeInTheFields.jpg'
    },    
    {
        name: 'East Street',
        material: 'Oil on Canvas',
        dimensions: '46 x 36”,
        year: 2024,
        filePath: 'Eve-OShea-EastSt.jpg'
    },
    {
        name: 'Bayou St. John',
        material: 'Oil on Canvas',
        dimensions: '36.5 x 48.5”,
        year: 2023,
        filePath: '231022-Eve-OShea-painting-documentation--IMG_8993--Sm.jpg'
    },
    {
        name: 'City Park',
        material: 'Oil on Canvas',
        dimensions: '16 x 20',
        year: 2020,
        filePath: '241101 IMG_5396-2.jpg'
    },
    {
        name: 'Claire and Miles playing poker',
        material: 'Oil on Canvas',
        dimensions: '24 x 24',
        year: 2021,
        filePath: 'ClaireMilesPoker_NEWEST.jpg'
    },
    {
        name: 'Castelnou',
        material: 'Oil on Canvas',
        dimensions: '72 x 48',
        year: 2020,
        filePath: 'Castelnou-NEWEST.jpg'
    },
    {
        name: 'Flowered Scene',
        material: 'Oil on Canvas',
        dimensions: '60 x 60',
        year: 2018,
        filePath: 'floweredscene.jpg'
    },
    {
        name: 'Lise Peron',
        material: 'Oil on Canvas',
        dimensions: '48 x 48',
        year: 2020,
        filePath: 'OSheaEve_LisePeron.jpeg'
    },
    {
        name: 'Pathway',
        material: 'Oil on Canvas',
        dimensions: '16 x 20',
        year: 2020,
        filePath: 'pathway.jpg'
    },
    {
        name: 'Power Street',
        material: 'Oil on Canvas',
        dimensions: '16 x 20',
        year: 2020, 
        filePath: 'Power St_NEWEST.jpg'
    },
    {
        name: 'Swimmer',
        material: 'Oil on Canvas',
        dimensions: '6 x 12',
        year: 2019,
        filePath:  'Swimmer-NEWEST.jpg',
    },
    {
        name: 'Rockaway',
        material: 'Oil on Canvas',
        dimensions: '16 x 20',
        year:2018,
        filePath: 'Rockaway.jpg',
    },
    {
        name: 'The Aquarium',
        material: 'Oil on Canvas',
        dimensions: '36 x 24',
        year: 2020,
        filePath: 'the-aquarium-NEWEST.jpg',
    },
    {
        name: 'Winter Walk',
        material: 'Oil on Canvas',
        dimensions: '60 x 60',
        year: 2020, 
        filePath:  'Winter-Walk-NEWEST.jpg',
    },
 ]



const paintingGrid = document.getElementById("painting-grid")

paintings.forEach((painting) => {

    const thumbnailDiv = document.createElement('div')
    thumbnailDiv.classList.add('thumbnail-container')
    //thumbnailDiv.style.width = '300px'
    const image = document.createElement('img')
    image.classList.add('thumbnail')
    image.src = `painting/${painting.filePath}`
    image.alt = painting.name
    
    const text = document.createElement('div')
    text.classList.add('caption-text')
    //text.innerHTML = `<p>${painting.name}</p> <p> ${painting.year}</p> <p> ${painting.material}</p> <p>${painting.dimensions} "</p>`
    text.innerHTML = `${painting.name} <br/>  ${painting.year} <br/> ${painting.material} <br/> ${painting.dimensions}"`
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
