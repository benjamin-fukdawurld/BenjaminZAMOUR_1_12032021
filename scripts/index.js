const lodges = [
    {
        name: "Auberge la Cannebière",
        image: "marcus-loke-WQJvWU_HZFo-unsplash.jpg",
        cost: 25,
        score: 4
    },
    {
        name: "Hôtel du port",
        image: "fred-kleber-gTbaxaVLvsg-unsplash.jpg",
        cost: 52,
        score: 5
    },
    {
        name: "Hôtel les mouettes",
        image: "reisetopia-B8WIgxA_PFU-unsplash.jpg",
        cost: 76,
        score: 4
    },
    {
        name: "Hôtel de la mer",
        image: "annie-spratt-Eg1qcIitAuA-unsplash.jpg",
        cost: 25,
        score: 3
    },
    {
        name: "Auberge le Panier",
        image: "nicate-lee-kT-ZyaiwBe0-unsplash.jpg",
        cost: 25,
        score: 4
    },
    {
        name: "Hôtel chez Amina",
        image: "febrian-zakaria-M6S1WvfW68A-unsplash.jpg",
        cost: 25,
        score: 5
    }
];

const famousLodges = [
    {
        name: "Hôtel le soleil du matin",
        image: "emile-guillemot-Bj_rcSC5XfE-unsplash.jpg",
        cost: 128,
        score: 5
    },
    {
        name: "Au cœur de l'eau Chambres d'hôtes",
        image: "aw-creative-VGs8z60yT2c-unsplash.jpg",
        cost: 71,
        score: 4
    },
    {
        name: "Hôtel Tout bleu et Blanc",
        image: "febrian-zakaria-sjvU0THccQA-unsplash.jpg",
        cost: 68,
        score: 4
    }
];

const activities = [
    {
        name: "Vieux Port",
        image: "reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
    },
    {
        name: "Fort de Pomègues",
        image: "paul-hermann-QFTrLdQIRhI-unsplash.jpg"
    },
    {
        name: "Île du Frioul",
        image: "kevin-hikari-rV_Qd1l-VXg-unsplash.jpg"
    },
    {
        name: "Parc National des Calanques",
        image: "kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg"
    },
    {
        name: "Notre-Dame-de-la-Garde",
        image: "florian-wehde-xW9e8gdotxI-unsplash.jpg"
    },
    {
        name: "Parc Longchamp",
        image: "lena-paulin-wH2-EJoDcV0-unsplash.jpg"
    }
];

renderNav();
renderTitle();
renderSearchBar();
renderFilterList();
renderResultCount();
renderLodges(lodges);
renderFamousLodges(famousLodges);
renderActivity(activities);
renderFooter();

window.addEventListener("keyup", (event) => {
    const overlay = document.getElementById("overlay");
    console.log(event.key);
    if (event.key === "Enter") {
        if (overlay.style.display === "none") {
            overlay.style.display = "block";
        } else {
            overlay.style.display = "none";
        }
    } else if (event.key === "+") {
        let opacity = overlay.style.opacity !== "" ? parseFloat(overlay.style.opacity) : 0;
        if (opacity < 1.0) {
            overlay.style.opacity = Math.min(opacity + 0.1, 1.0).toString();
        }
    } else if (event.key === "-") {
        let opacity = overlay.style.opacity !== "" ? parseFloat(overlay.style.opacity) : 0;
        if (opacity > 0.0) {
            overlay.style.opacity = Math.max(opacity - 0.1, 0.0).toString();
        }
    } else if (event.key === "*") {
        let zIndex = parseFloat(overlay.style.zIndex);
        if (zIndex < 0) {
            overlay.style.zIndex = "1";
        } else {
            overlay.style.zIndex = "-1";
        }
    }
});
