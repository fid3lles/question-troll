const renderCfg = {
    question: "",
    colorHex: ""
};

let encodedCfg = '';

const form = document.getElementById('render-configuration');
const generatedUrlInput = document.getElementById('generated-url');
const regexUrlHandler = /.\/$/;
const currentUrl = window.location.href;


form.addEventListener('submit', async (event) => {
    event.preventDefault();

    renderCfg.question = form.elements['pergunta'].value;
    renderCfg.colorHex = form.elements['color'].value;

    encodedCfg = btoa(JSON.stringify(renderCfg));

    await generateUrl();
    copyGeneratedUrl();
});

const generateUrl = () => {
    let resolvedUrl = regexUrlHandler.test(currentUrl) ? currentUrl : `${currentUrl}/`;
    let redirect = new URL(`${resolvedUrl}queerio.html`);
    redirect.searchParams.set('cfg', encodedCfg);
    generatedUrlInput.value = redirect.toString();
};

const copyGeneratedUrl = () => {
    document.getElementById("temp-div").style.display = 'block';
    navigator.clipboard.writeText(generatedUrlInput.value)
        .then(() => {
            alert("O link do Queerio foi copiado para a área de transferência!");
        })
        .catch((err) => {
            alert("Parece que houve um erro ao tentar copiar o link do seu Queerio, mas isso não foi culpa sua. Por favor, tente novamente mais tarde! Erro: ", err)
        });
}