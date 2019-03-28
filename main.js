window.onload = init;

function init () {
    const searchButton = document.querySelector('#search');
    searchButton.addEventListener('click', search);

    const displayAllButton = document.querySelector('#display-all');
    displayAllButton.addEventListener('click', displayAll);
}

function search(event) {
    event.preventDefault();
    userInput = document.querySelector('#search-input').value; 
    clearHTML();
    for(let i = 0; i < alphabetAerobic.length; i++) {

        if(alphabetAerobic[i].letter.includes(userInput)) {
            createHTML(alphabetAerobic[i]);
        }

    }
}

function displayAll(event) {
    event.preventDefault();
    clearHTML();

    for(let i = 0; i < alphabetAerobic.length; i++) {
        const data = alphabetAerobic[i]
        createHTML(data);
    }
}

function clearHTML() {
    document.querySelector('#list').innerText = '';
    document.querySelector('#search-input').value = '';
}

function createHTML(data) {
    const objectLi = document.createElement('li');
    appendElement = document.querySelector('#list');
    appendElement.appendChild(objectLi);

    const createObjectUl = document.createElement('ul');
    objectLi.appendChild(createObjectUl);

    const letter = document.createElement('h3');
    letter.innerText = 'Letter: ' + data.letter;
    createObjectUl.appendChild(letter);

    const position = document.createElement('p');
    position.innerText = 'Position: ' + data.position;
    createObjectUl.appendChild(position);

    const lyricString = document.createElement('h3');
    lyricString.innerText = 'Lyrics: '
    createObjectUl.appendChild(lyricString);

    const lyricsUl = document.createElement('ul');
    createObjectUl.appendChild(lyricsUl);

    for(let i = 0; i < data.lyrics.length; i++) {
        const lyrics = document.createElement('li');
        lyrics.innerText = data.lyrics[i];
        lyricsUl.appendChild(lyrics);

    }

    
}