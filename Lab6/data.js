const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
function o() {
    const main = document.createElement("div");
    main.className = "flex-container justify";
    document.body.appendChild(main);

    for (var i = 0;i < 4;i++) {
        const item = document.createElement("div");
        item.className = "item";

        main.appendChild(item);
        const h21 = document.createElement("h2");
        const H21 = document.createTextNode(countries[i].name);
        h21.appendChild(H21);
        item.appendChild(h21);

        const p11 = document.createElement("p");
        const P1 = document.createTextNode(countries[i].continent);
        p11.appendChild(P1);
        item.appendChild(p11);

        const box11 = document.createElement("div");
        box11.className = "inner-box";
        item.appendChild(box11);

        const h31 = document.createElement("h3");
        const H31 = document.createTextNode("Cities");
        h31.appendChild(H31);
        box11.appendChild(h31);

        const ul = document.createElement("ul");

        for (var n = 0;n < countries[i].cities.length;n++) {
            const li = document.createElement("p");
            const LI = document.createTextNode(countries[i].cities[n]);
            li.appendChild(LI);
            ul.appendChild(li);
        }
        box11.appendChild(ul);

        const box12 = document.createElement("div");
        box12.className = "inner-box";
        item.appendChild(box12);

        const h310 = document.createElement("h3");
        const H310 = document.createTextNode("Popular Photos");
        h310.appendChild(H310);
        box12.appendChild(h310);

        for (var m = 0;m < countries[i].photos.length;m++) {
            const pic = document.createElement("img");
            pic.src = "images/" + countries[i].photos[m];
            pic.className = "photo";
            box12.appendChild(pic);
        }

        const button = document.createElement("button");
        const bt = document.createElement("p");
        const BT = document.createTextNode("Visit");
        bt.appendChild(BT);
        button.appendChild(bt);
        item.appendChild(button);
    }
}