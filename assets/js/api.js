const scriptUrls = {
  segunda: 'https://script.google.com/macros/s/AKfycbxe-JdhRsK7tLIsWzV04bAGzyzJ9_hPFhSwoAZ3qq-WXQERCzpnOy82o4x5IHOltjd7/exec',
  terca: 'https://script.google.com/macros/s/AKfycbxWpVVjp_KIWstAY6UVZ4UMMP42ytlVagiA8GTIIIPIa6KATuwombbah_U4WwMarpWm/exec',
  quarta: 'https://script.google.com/macros/s/AKfycbzL8BzaeQjkN7MUi3Uf9cUkJKNgpcDbWEmyRdMPwSE3wLPz-NLFCHvQ0sjplCk3eoPm/exec',
  quinta: 'https://script.google.com/macros/s/AKfycbxxq2wKq5TbFaPhQEvs6-jVGaacpepnkQi2uLsbbCbxAStM0hK0_Iq2sw_o986pYg/exec',
  sexta: 'https://script.google.com/macros/s/AKfycbwDaKlECl3ZOtbnJ8HP-q03LOGVK-YFwRfARRwTbxOixf-zwCiigiEHF5ZA0nRDclZP/exec',
  sabado: 'https://script.google.com/macros/s/AKfycbxkqCjkd30PsnPOvGxkS-Lzfnj8XW3kh8Z1Us-2EHFwFuR6d41dyv5a0IY7E1hfKIAf/exec'
};

// Selecionar o URL do script com base no dia da semana atual
const diaAtualElemento = document.getElementById("diaAtual");
const diaAtual = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });

let scriptUrl;
console.log(diaAtual);
switch (diaAtual.toLowerCase()) {
  case "segunda-feira":
    scriptUrl = scriptUrls.segunda;
    break;
  case "terça-feira":
    scriptUrl = scriptUrls.terca;
    break;
  case "quarta-feira":
    scriptUrl = scriptUrls.quarta;
    break;
  case "quinta-feira":
    scriptUrl = scriptUrls.quinta;
    break;
  case "sexta-feira":
    scriptUrl = scriptUrls.sexta;
    break;
  case "sábado":
    scriptUrl = scriptUrls.sabado;
    break;
  default:
    scriptUrl = "URL padrão";
}


var dayOfWeek = new Date().getDay();
var radio5 = document.getElementById("Turma5"); // Corrigido para "Turma5"
var radio6 = document.getElementById("ultimohorario"); // Corrigido para "ultimohorario"
var radio3 = document.getElementById("turma3");
var radio4 = document.getElementById("turma4");

if (dayOfWeek == 3) { // Quarta-feira
  if (radio5) {
    radio5.innerHTML = `
      <label for="turma5">
        <input type="radio" name="Turma" id="turma5" value="17H ÀS 19H">
        <span>17H ÀS 19H</span>
      </label>
    `;
  }
  if (radio6) {
    radio6.innerHTML = `
      <label for="turma6">
        <input type="radio" name="Turma" id="turma6" value="18H ÀS 20H">
        <span>18H ÀS 20H</span>
      </label>
    `;
  }
} else if (dayOfWeek == 4 || dayOfWeek == 5) { // Quinta ou Sexta-feira
  if (radio5) {
    radio5.innerHTML = `
      <label for="turma5">
        <input type="radio" name="Turma" id="turma5" value="17H ÀS 19H">
        <span>17H ÀS 19H</span>
      </label>
    `;
  }
} else if (dayOfWeek == 6) { // Sábado
  if (radio3) {
    radio3.value = "12H ÀS 14H";
    radio3.nextElementSibling.innerText = "12H ÀS 14H";
  }

  if (radio4) {
    radio4.value = "14H ÀS 16H";
    radio4.nextElementSibling.innerText = "14H ÀS 16H";
  }

  if (radio5) {
    radio5.innerHTML = `
      <label for="turma5">
        <input type="radio" name="Turma" id="turma5" value="16H à 18H">
        <span>16H à 18H</span>
      </label>
    `;
  }
}



  const reloadDiv = document.createElement("div");
  reloadDiv.classList.add("reload");
  reloadDiv.innerHTML = `
  <div class="reload__content">
    <p>Aguarde, os dados estão sendo enviados...</p>
  </div>
`;
  document.body.appendChild(reloadDiv);
  reloadDiv.style.display = "none";

  // Função para criar um elemento de alerta personalizado
  function showAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert");
    alertDiv.innerHTML = `
    <div class="alert__content">
      <p>${message}</p>
    </div>
  `;
    document.body.appendChild(alertDiv);
    alertDiv.style.display = "flex";
    setTimeout(() => {
      alertDiv.style.display = "none";
      alertDiv.remove();
    }, 3000); // Esconder o alerta depois de 5 segundos
  }

  const formElemento = document.querySelector(".formEntrada");
  formElemento.addEventListener("submit", (event) => {
    event.preventDefault();

    const nomeInput = formElemento.querySelector("#nomeInput");
    const codigoInput = formElemento.querySelector("#codigoInput");
    const turmaInput = formElemento.querySelector('input[type="radio"][name="Turma"]:checked');
    const reposicaoInput = formElemento.querySelector('input[type="radio"][name="Reposição"]:checked');

    if (!nomeInput.value.trim()) {
      showAlert("Por favor, preencha o campo Nome");
      return;
    }

    if (!codigoInput.value.trim()) {
      showAlert("Por favor, preencha o campo Código");
      return;
    }

    if (!turmaInput) {
      showAlert("Por favor, selecione a Turma");
      return;
    }

    if (!reposicaoInput) {
      showAlert("Por favor, selecione a opção de Reposição");
      return;
    }

    const formData = new FormData(formElemento);
    reloadDiv.style.display = "flex";

    fetch(scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        console.log(`Dados enviados com sucesso para ${scriptUrl}`);
        window.location.href = "./assets/html/sucesso.html";
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao enviar os dados:", error);
        window.location.href = "./assets/html/found404.html";
      })
      .finally(() => {
        if (["./assets/html/sucesso.html", "./assets/html/found404.html"].includes(window.location.href)) {
          reloadDiv.style.display = "none";
        }
      });
  });
