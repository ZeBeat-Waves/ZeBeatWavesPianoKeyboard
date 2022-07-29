$(document).ready(function () {

    $("#keyboard").mousemove(function(e) {
        mouseId = $(e.target).attr("id");
        console.log(mouseId);
    })

  });

var svgns = "http://www.w3.org/2000/svg";
let timerId;
var octaveKeyboardGlobal = 4;
var inputNoteGlobal = null;
var notesQueueGlobal = [];
var timertrigger = 0;
var mouseId = 0;

function createKeyWhite(position, id)
{
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('x', position);
    rect.setAttribute('y', '0');
    rect.setAttribute('height', '110');
    rect.setAttribute('width', '20');
    rect.setAttribute('rx', '5');
    rect.setAttribute('ry', '5');
    rect.setAttribute('class', 'keysWhite');
    rect.setAttribute('id', id);
    document.getElementById('keyboard').appendChild(rect);
}

function createKeyBlack(position, id)
{
    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttribute('x', position);
    rect.setAttribute('y', '0');
    rect.setAttribute('height', '65');
    rect.setAttribute('width', '15');
    rect.setAttribute('fill', '#000000');
    rect.setAttribute('stroke', '#000000');
    rect.setAttribute('rx', '5');
    rect.setAttribute('ry', '5');
    rect.setAttribute('class', 'keysBlack');
    rect.setAttribute('id', id);
    document.getElementById('keyboard').appendChild(rect);
}

function createKeyboard(){
    document.getElementById('keyboard').setAttribute('width', '1050px');
    for (let index = 0; index < 88; index++) {
        var noteName = keysListGlobal[index].nameNotes;
        if (!noteName.includes('#')) {
            createKeyWhite(keysListGlobal[index].position, keysListGlobal[index].nameNotes);
        }
    }
    for (let index = 0; index < 88; index++) {
        var noteName = keysListGlobal[index].nameNotes;
        if (noteName.includes('#')) {
            createKeyBlack(keysListGlobal[index].position, keysListGlobal[index].nameNotes);
        }
    }
}

function activeKeys(notesArray){
    if (Array.isArray(notesArray) == true) {
        for (let index = 0 ; index < notesArray.length; index++) {
            var key = document.getElementById(notesArray[index]);
            key.style.fill = '#d9114a';
        }
    }
    else{
        let notes = notesArray.split(',');
        for (let index = 0; index <  notes.length; index++) {
            var key = document.getElementById(notes[index]);
            key.style.fill = '#d9114a';
        }
    }
}

document.addEventListener('keydown', function(event) {
    switch (event.code) {
        case "KeyA":
            var key = document.getElementById('C' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyW":
            var key = document.getElementById('C#' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyS":
            var key = document.getElementById('D' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyE":
            var key = document.getElementById('D#' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyD":
            var key = document.getElementById('E' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyF":
            var key = document.getElementById('F' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyT":
            var key = document.getElementById('F#' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyG":
            var key = document.getElementById('G' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyY":
            var key = document.getElementById('G#' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyH":
            var key = document.getElementById('A' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyU":
            var key = document.getElementById('A#' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyJ":
            var key = document.getElementById('B' + octaveKeyboardGlobal);
            key.style.fill = '#d9114a';
            document.getElementById('activeNote').innerHTML = key.id;
            inputNoteGlobal = key.id;
            inputNoteShow();
            actKbOn(key.id);
            break;
        case "KeyZ":
            octDown();
            break;
        case "KeyX":
            octUp();
            break;
    
        default:
            break;
    }
  });
  
  document.addEventListener('keyup', function(event) {
    switch (event.code) {
        case "KeyA":
            var key = document.getElementById('C' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyW":
            var key = document.getElementById('C#' + octaveKeyboardGlobal);
            key.style.fill = '#000000';
            actKbOff(key.id);
            break;
        case "KeyS":
            var key = document.getElementById('D' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyE":
            var key = document.getElementById('D#' + octaveKeyboardGlobal);
            key.style.fill = '#000000';
            actKbOff(key.id);
            break;
        case "KeyD":
            var key = document.getElementById('E' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyF":
            var key = document.getElementById('F' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyT":
            var key = document.getElementById('F#' + octaveKeyboardGlobal);
            key.style.fill = '#000000';
            actKbOff(key.id);
            break;
        case "KeyG":
            var key = document.getElementById('G' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyY":
            var key = document.getElementById('G#' + octaveKeyboardGlobal);
            key.style.fill = '#000000';
            actKbOff(key.id);
            break;
        case "KeyH":
            var key = document.getElementById('A' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        case "KeyU":
            var key = document.getElementById('A#' + octaveKeyboardGlobal);
            key.style.fill = '#000000';
            actKbOff(key.id);
            break;
        case "KeyJ":
            var key = document.getElementById('B' + octaveKeyboardGlobal);
            key.style.fill = '#ffffff';
            actKbOff(key.id);
            break;
        default:
            break;
    }
  });

  function octShow(label){
    document.getElementById(label).innerHTML = octaveKeyboardGlobal;
  }

  function inputNoteShow(){
    document.getElementById('inputNote').innerHTML = inputNoteGlobal;
  }

  function octUp(){
    octaveKeyboardGlobal += 1;
    octShow("octaveLabel");
  }

  function octDown(){
    octaveKeyboardGlobal -= 1;
    octShow("octaveLabel");
  }

  function actKbOn(noteId){
    var note = document.getElementById('activeKeyboard');
    note.style.background = "#00ad6f";
  }

  function actKbOff(noteId){
    var note = document.getElementById('activeKeyboard');
    note.style.background = "#243160";
  }