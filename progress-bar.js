class ProgressBar {

    constructor(container, options = {}){
        this.container = container
        this.state = {
            value: options.value || 0,
            min: options.min || 0,
            max: options.max || 100,
            isAnimated: false,
            isHidden: false
        }

        this.init()
    }

    init(){
        this.container.innerHTML = `
            <div class="progress-bar">
                <progress value="${this.state.value}" min="${this.state.min}" max="${this.state.max}" style="visibility: hidden; height: 0; width: 0;"></progress>
            </div>
        `;
        this.bar = this.container.querySelector('.progress-bar')
        this.elem = this.container.querySelector("progress")

        this.render()
    }

    decrement(){
        this.state.value--
        this.render()
    }

    increment(){
        this.state.value++
        this.render()
    }

    render(){

        this.bar.style.background = ''

        this.elem.value = this.state.value
        this.bar.style.background = `
        radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(#005cff ${this.state.value}%, #eaf0f6 0)
        `;
    }

    animationDisplay(){
        if (!this.state.isAnimated){
            this.bar.classList.remove('animate');
            this.bar.style.background = ''

            this.bar.classList.add('animate');
            this.state.isAnimated = true;
        }
        else{
            this.bar.classList.remove('animate');
            this.render()
            this.state.isAnimated = false;
        }
    }

    changeValue(value){
        if (value < 0 || !value){
            value = 0
            document.querySelector(".value-input").value = null
        }
        if (value > 100){
            value = 100 
            document.querySelector(".value-input").value = 100
        }
        this.state.value = value
        this.render()
    }

    progressHide(){
        if (!this.state.isHidden){
            this.bar.style.visibility = "hidden"
            this.state.isHidden = true
        }
        else{
            this.bar.style.visibility = ""
            this.state.isHidden = false
        }
    }
}