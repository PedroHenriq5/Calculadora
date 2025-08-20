    function mathCalculation() {
    this.display = document.querySelector('.visor');
    
    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('number')) {
                this.addNumDisplay(el);
            }
            if (el.classList.contains('clear')) {
                this.clear();
            }
            if (el.classList.contains('equal')) {
                this.equal(el);
            }
        });
    }

    this.equal = () => {
        // ainda vai implementar
    }

    this.clear = () => {
        this.display.value = '';
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
    } 

    this.inicia = () => {
        this.capturaCliques();
    }
}

const calc = new mathCalculation();
calc.inicia();
