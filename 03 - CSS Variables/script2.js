//grabbing inputs and css root element
const inputs = document.querySelectorAll('.controls input');
const cssRoot = document.documentElement;
cssRoot.style.setProperty('--base', `${inputs[2].value}`) //matching --base to default value

//declaring function to update CSS vars depeding on specific input changes, use function declaration to avoid issues with this.name
function handleChange(e) {
    console.log(e.target.value);
    const suffix = this.dataset.sizing || ''; //.dataset accesses the unique info from data attribute in html (cool!)
    cssRoot.style.setProperty(`--${this.name}`, `${e.target.value}${suffix}`) 
}

//Add eventListeners for each input using forEach. Used 'input' as event to update as you change the input (slider or color)
inputs.forEach(input => input.addEventListener('input', handleChange));

