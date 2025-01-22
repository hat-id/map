class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p style="display: flex;"> 
            <div class="Leiste"></div>
            <h1 class="Überschrift"> hat.id </h1>
            <a class="home" href="/map/index.html">Home</a>
            <a class="page1" href="/map/Todo-Liste.html">Todo-Liste</a>
            <a class="Spiel1" href="/map/Spiel/Spiel1.html">Spiedwdwl</a>
        </p>
        `
    }
}
customElements.define('special-header', SpecialHeader);