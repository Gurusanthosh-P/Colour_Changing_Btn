
let btn = document.getElementById("btn")
let container = document.getElementById("container")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const audioArray = ['Ak47.mp3','pistol.mp3']


btn.addEventListener('click',change)


function change(){    
    let frnd = '#'
    for(i=1;i<=6;i++)
    {
        let color = hexRandom()
        frnd+=color
    }
    let a = new Audio(playAudio())
    a.play()
    container.style.backgroundColor=frnd
    btn.style.color=frnd
    

}

function playAudio()
{
    let audioIndex = Math.floor(Math.random()*audioArray.length) 
    return audioArray[audioIndex]

}

function hexRandom()
{
    let randomIndex = Math.floor(Math.random()*hex.length)
    return hex[randomIndex]
}


