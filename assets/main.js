/* Variables */
let wordList = ['PRINCIPALEMENT', 'INTERNATIONALE', 'ADMINISTRATEUR', 'VOLONTAIREMENT', 'INTERNATIONAUX'];
let word = wordList[Math.floor(Math.random() * wordList.length)];
const wordLetters = word.split('')
const emptyLetters = new Array(word.length)
let turn = 10;
const lettersAlredyUsed = [];
const selectedLetterButton = document.getElementById('selectedLetterButton');
let message = document.getElementById('message');
let hangManSkin = document.getElementById('hangManSkin');

/* Function */

function guestWordRender(emptyLetters) {
	const display = []
	for (let index = 0; index < emptyLetters.length; index++) {
		if (emptyLetters[index]) {
			display.push(emptyLetters[index])
		} else {
			display.push('_')
		}

	}

	document.getElementById('emptyLetters').innerHTML = display.join(' ')

}


function render() {

	document.getElementById('turn').innerHTML = 'Tour : ' + turn
	document.getElementById('lettersAlredyUsed').innerHTML = 'Lettre(s) utilisée(s) : ' + lettersAlredyUsed.join(',')
	guestWordRender(emptyLetters)


}

function getAllIndex(myWord, mySelectedLetter) {
	const indexes = []
	for (let index = 0; index < myWord.length; index++) {
		const element = myWord[index];
		const temp = getAllIndex
		if (element == mySelectedLetter) {
			indexes.push(index)
		}
	}
	return indexes
}

function selectedLetter() {
	let letter = document.getElementById('selectedLetter').value
	letter = letter.trim()
	const mySelectedLetter = letter[0].toUpperCase()
	lettersAlredyUsed.push(mySelectedLetter)
	const temp = getAllIndex(wordLetters, mySelectedLetter)
	if (temp.length === 0) {
		turn--

	} else {
		for (let index = 0; index < temp.length; index++) {
			emptyLetters[temp[index]] = wordLetters[temp[index]]
			wordLetters[temp[index]] = ''

		}
	}
	render()


	if (wordLetters.every((el) => el === "")) {
		message.innerHTML = 'Vous avez gagnez ! Le mot été ' + word + '.'
		message.style.color = 'green'
		replayButton.disabled = false
		selectedLetterButton.disabled = true


	}

	if (turn === 9) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/1.png'  width=\'250px\' height=\'auto'>";
		letter.value = ''
	}

	if (turn === 8) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/2.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 7) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/3.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 6) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/4.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 5) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/5.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 4) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/6.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 3) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/7.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 2) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/8.png' width=\'250px\' height=\'auto'>";
	}
	if (turn === 1) {
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/9.png' width=\'250px\' height=\'auto'>";
	}

	if (turn === 0) {
		message.innerHTML = 'Vous avez perdu ! Le mot été ' + word + '.'
		message.style.color = 'red'
		hangManSkin.innerHTML = "<img src=\'assets/img/hangManSkin/10.png' width=\'250px\' height=\'auto'>";
		replayButton.disabled = false
		selectedLetterButton.disabled = true
	}
}

function refreshPage() {
	window.location.reload();
}


/* Execution */
console.log(word)
render()
selectedLetterButton.onclick = selectedLetter;
replayButton.addEventListener('click', refreshPage)
replayButton.disabled = true