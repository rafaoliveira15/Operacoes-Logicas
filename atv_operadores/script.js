function processarOperadores() {

    let a = Number(document.getElementById ('numA').value);
    let b = Number(document.getElementById ('numB').value);
    let painel = document.getElementById('painel');

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    painel.innerHTML = `
    <section>

         <h4>A. Aritméticos</h4>
         <p>Soma (+): <span class="destaque">${a + b}</span></p>
         <p>Subtração (-): <span class="destaque">${a - b}</span></p>
         <p>Multiplicação (*): <span class="destaque">${a * b}</span></p>
         <p>Divisão (/): <span class="destaque">${(a / b).toFixed(2)}</span></p>
         <p>Resto (%): <span class="destaque">${a % b}</span></p>
         <p>Potência (**): <span class="destaque">${a ** b}</span></p>
    </section>

    <section>
         <h4>B. Atribuição</h4>
         <p>Simples (=): <span class="destaque">${a}</span></p>
         <p>Soma (+=): <span class="destaque">${a + b}</span></p>
         <p>Subtr. (-=): <span class="destaque">${a - b}</span></p>
         <p>Multip. (*=): <span class="destaque">${a * b}</span></p>
    </section>

    <section>
         <h4>C. Comparação</h4>
         <p>Igual (==): <span class="destaque">${a == b}</span></p>
         <p>Idêntico (===): <span class="destaque">${a === b}</span></p>
         <p>Diferente (!=): <span class="destaque">${a != b}</span></p>
         <p>Maior (>): <span class="destaque">${a > b}</span></p>
         <p>Menor ou Igual (<=): <span class="destaque">${a <= b}</span></p>
    </section>

    <section>
         <h4>D. Lógicos</h4>
         <p>E (&&): <span class="destaque">${(a > 0 && b > 0)}</span> (Ambos > 0?)</p>
         <p>OU (||): <span class="destaque">${(a > 0 || b > 0)}</span> (Algum > 0?)</p>
         <p>NÃO (!): <span class="destaque">${!(a > b)}</span> (! A > B)</p>
    </section>

    <section>
          <h4>E. Incr / Decr</h4>
          <p>Incremento (++): <span class="destaque">${a + 1}</span> (A + 1)</p>
          <p>Decremento (--): <span class="destaque">${b - 1}</span> (B - 1)</p>
   </section>

   <section>
         <h4>F. Ternário (Status)</h4>
         <p>A > B? <span class="destaque">${a > b ? "Sim" : "Não"}</span></p>
         <p>Igualdade: <span class="destaque">${a === b ? "Gêmeos" : "Diferentes"}</span></p>
    </section>
    `;
}

    
