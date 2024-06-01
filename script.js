//your JS code here. If required.
function removeColor() {
    const selectElement = document.getElementById("colorSelect");
    const selectedColor = selectElement.value; // Get the selected color

    // Remove the selected color option
    for (let i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedColor) {
            selectElement.remove(i);
            break; // Exit the loop after removal
        }
    }
}