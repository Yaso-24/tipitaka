
document.getElementById('loaddata').addEventListener('touchend', (event)=>{
 getClickedWord(event)

  // extendSelectionToWholeWord(event)
})


function getClickedWord(event){
    const selection = window.getSelection()
    let word1 = selection.modify('extend', 'backward', 'word')
    word1 = selection.toString()
   
    
    let word2 = selection.modify('extend', 'forward', 'word')
    word2 = selection.toString()


    selection.modify('move', 'backward', 'word')
    console.log(word1+word2)

    console.log(selection)
    // sl(event.target.id)
    console.log(event.target.getAttribute('class'))
   // sl(event.target.getAttribute('class'))

}


// Function to extend selection to whole word when clicked
function extendSelectionToWholeWord(event) {
    const selection = window.getSelection();
    const range = document.createRange();

    
    // Get the element (usually a text node) that was clicked
    const clickedElement = event.target;

    console.log(clickedElement)

    // Check if the clicked element is a text node
    if (clickedElement.nodeType === Node.TEXT_NODE) {
        // Get the text content of the clicked element
        const textContent = clickedElement.textContent;

        // Get the index of the word that was clicked within the text content
        const wordIndex = textContent.indexOf(event.target.data);

        // Find the start and end indices of the word
        let wordStart = textContent.lastIndexOf(' ', wordIndex) + 1;
        let wordEnd = textContent.indexOf(' ', wordIndex);
        if (wordEnd === -1) {
            wordEnd = textContent.length;
        }

        // Set the range to select the whole word
        range.setStart(clickedElement, wordStart);
        range.setEnd(clickedElement, wordEnd);

        // Remove any existing selection and select the new range
        selection.removeAllRanges();
        selection.addRange(range);

       // console.log(selection.toString())
    }
    console.log(selection.toString())
}

// Add event listener to the document to detect clicks
// document.addEventListener('click', );



function sl(nodeEl){
    function extendSelection(node, offset = 0) {
        const selection = window.getSelection();
        selection.removeAllRanges();
    
        const range = document.createRange();
        range.setStart(node, offset);
        selection.addRange(range);
    }
    
    // Example usage:
    // Extend selection from a given node
    const node = document.querySelector(`.${nodeEl}`); // Replace 'exampleNode' with the ID of your desired node
    //extendSelection(node);
    
    // Extend selection from a given node and offset
   // const node = document.getElementById(nodeEl); // Replace 'exampleNode' with the ID of your desired node
    const offset = 5; // Replace 5 with your desired offset
    extendSelection(node, offset);
    
}


