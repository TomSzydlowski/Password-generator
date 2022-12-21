const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateBtn = document.getElementById("generator")
let generatedBtnOne = document.getElementById("generated1")
let generatedBtnTwo = document.getElementById("generated2")
let copyText = document.getElementById("copyText")
let isGenerated = false
let password = [] 



generateBtn.addEventListener("click", () => {
    startGenerateOne()
    startGenerateTwo()
    copyText.textContent = 'click password to copy'
});


generatedBtnOne.addEventListener("click", (event) => {
    const content = generatedBtnOne.textContent
    navigator.clipboard.writeText(content)
})

generatedBtnTwo.addEventListener("click", (event) => {
    const content = generatedBtnTwo.textContent
    navigator.clipboard.writeText(content)
})

function generateRandomElement () {
    let chLenght = characters.length
    let randomNumber = (Math.floor( Math.random()*chLenght))
    let randomElement = characters[randomNumber]
    return randomElement
}

function startGenerateOne() {
    isGenerated = true
    let one = generateRandomElement()
    let two = generateRandomElement()
    let three = generateRandomElement()
    let four = generateRandomElement()
    let five = generateRandomElement()
    let six = generateRandomElement()
    let seven = generateRandomElement()
    let eight = generateRandomElement()
    let nine = generateRandomElement()
    let ten = generateRandomElement()
    let eleven = generateRandomElement()
    let twelve = generateRandomElement()
    let thirteen = generateRandomElement()
    let fourteen= generateRandomElement()
    let fiveteen = generateRandomElement()
    password = [one, two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fiveteen]
    let withoutCommas = password.join('');
    generatedBtnOne.textContent = withoutCommas
}

function startGenerateTwo() {
    isGenerated = true
    let one = generateRandomElement()
    let two = generateRandomElement()
    let three = generateRandomElement()
    let four = generateRandomElement()
    let five = generateRandomElement()
    let six = generateRandomElement()
    let seven = generateRandomElement()
    let eight = generateRandomElement()
    let nine = generateRandomElement()
    let ten = generateRandomElement()
    let eleven = generateRandomElement()
    let twelve = generateRandomElement()
    let thirteen = generateRandomElement()
    let fourteen= generateRandomElement()
    let fiveteen = generateRandomElement()
    password = [one, two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fiveteen]
    let withoutCommas = password.join('');
    generatedBtnTwo.textContent = withoutCommas
}











