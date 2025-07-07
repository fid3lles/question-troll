const renderCfg = {
    question: "",
    colorHex: ""
};

const form = document.getElementById("render-configuration");

let encodedCfg = '';
const currentUrl = window.location.href;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderCfg.question = form.elements['pergunta'].value;
    renderCfg.colorHex = form.elements['color'].value;

    encodedCfg = btoa(JSON.stringify(renderCfg));

    generateUrl();
});

const generateUrl = () => {
    let redirect = new URL(currentUrl + '/queerio.html');
    redirect.searchParams.set('cfg', encodedCfg);
    alert(redirect.toString());
};