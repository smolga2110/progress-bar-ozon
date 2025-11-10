class ProgressBar {

    constructor(options = {}){
        this.state = {
            value: options.value || 0,
            min: options.min || 0,
            max: options.max || 100,
            isAnimated: false,
            isHidden: false
        }
    }

    decrement(){
        this.state.value--
    }

    increment(){
        this.state.value++
    }
}

let prog = new ProgressBar();

function displayBar(){

    const bar = document.querySelector('.progress-bar')
    const elem = document.querySelector("progress")

    bar.style.background = ''

    elem.value = prog.state.value
    bar.style.background = `
      radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(#005cff ${prog.state.value}%, #eaf0f6 0)
    `;

}

function animationDisplay(){
    const bar = document.querySelector('.progress-bar')
    if (!prog.state.isAnimated){
        bar.classList.remove('animate');
        bar.style.background = ''

        bar.classList.add('animate');
        prog.state.isAnimated = true;
    }
    else{
        bar.classList.remove('animate');
        displayBar()
        prog.state.isAnimated = false;
    }
}

function incrementValue(){
    prog.increment()
    displayBar()
}

function decrementValue(){
    prog.decrement()
    displayBar()
}

function changeValue(value){
    if (value < 0 || !value){
        value = 0
    }
    if (value > 100){
        value = 100 
    }
    prog.state.value = value
    displayBar()
}

function progressHide(){
    const bar = document.querySelector('.progress-bar')
    if (!prog.state.isHidden){
        bar.style.visibility = "hidden"
        prog.state.isHidden = true
    }
    else{
        bar.style.visibility = ""
        prog.state.isHidden = false
    }
}

window.onload = displayBar;