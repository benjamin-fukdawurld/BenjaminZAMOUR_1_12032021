let navLogo = `
<div class="Logo">
    <picture>
        <source srcset="./images/logo/Reservia.svg" type="image/svg+xml">
        <img
            src="./images/logo/Reservia@3x.png"
            alt="Reservia logo"
            title="Accueil"
        />
    </picture>
</div>
`;

let navTabs = `
<div class="TabContainer">
    <button class="TabButton" data-selected>Hébergements</button>
    <button class="TabButton">Activités</button>
</div>
`;

let navSubscribeButton = `
<button class="SubscribeButton">S'inscrire</button>
`;

const nav = `
${navLogo}
${navTabs}
${navSubscribeButton}
`;

function renderNav() {
    const navElements = document.getElementsByClassName("NavContainer");
    if (!navElements || navElements.length !== 1) {
        throw new Error("Failed to render nav: NavContainer count must be 1");
    }

    let html = ejs.render(nav);
    navElements[0].innerHTML = html;
}
