const footer = `
<section class="FooterSection">
    <h3>A propos</h3>
    <ul class="FooterSectionList">
        <li class="FooterSectionItem">Fonctionnement du site</li>
        <li class="FooterSectionItem">Conditions générales de vente</li>
        <li class="FooterSectionItem">Données et confidentialité</li>
    </ul>
</section>
<section class="FooterSection">
    <h3>Nos hébergements</h3>
    <ul class="FooterSectionList">
        <li class="FooterSectionItem">Charte qualité</li>
        <li class="FooterSectionItem">Soumettre votre hôtel</li>
    </ul>
</section>
<section class="FooterSection">
    <h3>Assistance</h3>
    <ul class="FooterSectionList">
        <li class="FooterSectionItem">Centre d'aide</li>
        <li class="FooterSectionItem">Nous contacter</li>
    </ul>
</section>
`;

function renderFooter() {
    const footerElements = document.getElementsByClassName("Footer");
    if (!footerElements || footerElements.length !== 1) {
        throw new Error("Failed to render foote: Footer count must be 1");
    }

    let html = ejs.render(footer);
    footerElements[0].innerHTML = html;
}
