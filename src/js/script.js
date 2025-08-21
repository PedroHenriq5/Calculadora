function MathCalculation() {
  this.display = document.querySelector(".visor");

  this.inicia = () => {
    this.capturaCliques();
    this.enter();
  };

  this.enter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.key === "enter") {
        return this.equal();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("number")) {
        this.addNumDisplay(el);
      }
      if (el.classList.contains("clear")) {
        this.clear();
      }
      if (el.classList.contains("equal")) {
        this.equal();
      }
      if (el.classList.contains("operation")) {
        this.addNumDisplay(el);
      }
    });
  };

  this.equal = () => {
    try {
      const conta = eval(this.display.innerHTML);

      if (conta === undefined || conta === null) {
        alert("conta inválida");
        return;
      }

      this.display.innerHTML = conta;
    } catch (e) {
      alert("conta invalida");
    }
  };

  this.clear = () => {
    this.display.innerHTML = "";
  };

  this.addNumDisplay = (el) => {
    if (this.display.innerHTML === "" && el.classList.contains("operation")) {
      alert("Primeiro informe um número");
      return;
    }
    const lastOperation = this.display.innerHTML.slice(-1);
    const operations = ["+", "-", "/", "*"];

    if (operations.includes(lastOperation) && el.classList.contains("operation")) {
      alert("Não é permitido dois operadores seguidos");
      return;
    }

    this.display.innerHTML += el.innerText;
  };
}

const calc = new MathCalculation();
calc.inicia();
