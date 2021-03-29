const title = `
<h1 class="Title">Trouvez votre hébergement pour des vacances de rêve</h1>
<p class="Subtitle">En plein centre ville ou en pleine nature</p>
`;

function renderTitle() {
    const titleElements = document.getElementsByClassName("TitleSection");
    if (!titleElements || titleElements.length !== 1) {
        throw new Error("Failed to render title: TitleSection count must be 1");
    }

    let html = ejs.render(title);
    titleElements[0].innerHTML = html;
}
