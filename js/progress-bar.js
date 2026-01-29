class ProgressBar {
    constructor(container, options = {}){
        this.container = container,
        this.state = {
            value: options.value || 0,
            isAnimated: options.animated || false,
            isHidden: options.hidden || false
        }

        this.SIZE = 150
        this.RADIUS = 70
        this.STROKE = 10
        this.DASH = 2 * Math.PI * this.RADIUS

        this.init()
    }

    init(){
        this.container.innerHTML = `
            <svg width="${this.SIZE}" height="${this.SIZE}" viewBox="0 0 ${this.SIZE} ${this.SIZE}">
                <circle class="progress"
                    cx="75"
                    cy="75"
                    r="${this.RADIUS}"
                    fill="none"
                    stroke="#dae6ec"
                    stroke-width="${this.STROKE}"
                ></circle>
                <circle
                    class="progress-circle"
                    cx="75"
                    cy="75"
                    r="${this.RADIUS}"
                    fill="none"
                    stroke="#005cff"
                    stroke-width="${this.STROKE}"
                    stroke-dasharray="${this.DASH}"
                    stroke-dashoffset="${this.DASH}"
                ></circle>
                <progress value="${this.state.value}" style="display: none;"></progress>
            </svg>
        `

        this.progressCircle = this.container.querySelector(".progress-circle")
        this.flatCircle = this.container.querySelector(".progress")
    }

    animate(){
        if (!this.state.isAnimated){
            this.progressCircle.classList.add("spinning")
            this.state.isAnimated = true
        }
        else{
            this.progressCircle.classList.remove("spinning")
            this.state.isAnimated = false
        }
    }

    changeValue(value){
        if ((value <= 0 && value != "") || (value[0] === "0" && value.length > 1)) {
            this.state.value = 0;
            document.querySelector(".value-input").value = 0;
        } else if (value > 100) {
            this.state.value = 100;
            document.querySelector(".value-input").value = 100;
        } else {
            this.state.value = value;
        }
        
        this.render()
    }

    hide(){
        if(!this.state.isHidden){
            this.progressCircle.style.display = "none"
            this.flatCircle.style.display = "none"
            this.state.isHidden = true
        }
        else{
            this.progressCircle.style.display = "block"
            this.flatCircle.style.display = "block"
            this.state.isHidden = false
        }
    }

    render(){
        const dashOffset = this.DASH * (1 - (this.state.value / 100))
        this.progressCircle.style.strokeDashoffset = dashOffset
    }
}