const activity = `
<a href="#" class="ActivityImageContainer">
    <picture>
        <source srcset="images/activites/1_xlarge/<%= img_src %>" media="(min-width: 1200px)">
        <source srcset="images/activites/2_large/<%= img_src %>" media="(min-width: 992px)">
        <source srcset="images/activites/3_medium/<%= img_src %>" media="(min-width: 768px)">
        <img
            src="images/activites/4_small/<%= img_src %>"
            alt="<%= img_alt %>"
            class="ActivityImage"
        />
    </picture>
</a>
<h2 class="ActivityName"><%= activity_name %></h2>
`;

function renderActivity(activities) {
    const activityListElements = document.getElementsByClassName("ActivityGrid");
    if (!activityListElements || activityListElements.length !== 1) {
        throw new Error("Failed to render activityList: ActivityGrid count must be 1");
    }

    let i = 0;
    for (activityData of activities) {
        let articleElm = document.createElement("article");
        articleElm.classList.add("Activity");
        articleElm.setAttribute("data-index", i);
        i++;
        let html = ejs.render(activity, {
            img_src: activityData.image,
            img_alt: activityData.name,
            activity_name: activityData.name
        });

        articleElm.innerHTML = html;
        activityListElements[0].append(articleElm);
    }
}
