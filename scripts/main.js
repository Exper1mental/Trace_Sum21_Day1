// Thomas Delvaux
// Date: 27/07/2021

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = new Array("Willy the Goblin", "Big Daddy", "Father Christmas");
var insertY = new Array("the soup kitchen", "Disneyland", "the White House");
var insertZ = new Array("spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away");

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var randomX = randomValueFromArray(insertX);
    var randomY = randomValueFromArray(insertY);
    var randomZ = randomValueFromArray(insertZ);

    
    newStory = newStory.replace(/:insertx:/g, randomX);
    newStory = newStory.replace(/:inserty:/g, randomY);
    newStory = newStory.replace(/:insertz:/g, randomZ);
    
    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked) {
        // create a variable parsing the variable "storyText" for the string "xx fahrenheit"
        
        // Stone to lb
        // 1 st = 14 lb
        // 1 lb = 0.07142857 st

        // Fahrenheit to Celsius
        // 1 C = (F-32)*5/9

        let weight = Math.round(300*14) + ' stone';
        let temperature =  Math.round((94-32)*5/9) + ' centigrade';
        
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}