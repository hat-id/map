class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p style="display: flex;"> 
        <link rel = "stylesheet" href="/HintergrundVorlage/headerCss.css">
            <div class="Leiste"></div>
            <h1 class="Überschrift"> hat.id </h1>
            <a class="home" href="/MAP/index.html">Home</a>
            <a class="page1" href="/MAP/Todo-Liste.html">Todo-Liste</a>
            <a class="Spiel1" href="/MAP/Spiel/Spiel1.html">Spiedwdwl</a>
        </p>
        `
    }
}
customElements.define('special-header', SpecialHeader);