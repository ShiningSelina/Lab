var tableName = new Array();
function create() {
    if (document.getElementById("1").selected) {
        document.getElementById("com").style.display="none";

        document.getElementById("12").addEventListener("change", function () {
            document.getElementById("com").style.display="block";
            n = document.getElementById("12").value;
            document.getElementById("div2").innerHTML = null;
            if (n > 0) {
                for (var dt = 1; dt <= n; dt++) {
                    var in2 = document.createElement("input");
                    in2.type = "text";
                    in2.placeholder = "Table Name";
                    in2.id = "in" + dt;
                    document.getElementById("div2").appendChild(in2);
                }
            }

            document.getElementById("com").addEventListener("click", function () {
                document.getElementById("table").innerHTML = null;
                if (n > 0) {
                    const tr = document.createElement("tr");
                    document.getElementById("table").appendChild(tr);

                    for (var dt = 1; dt <= n; dt++) {
                        const th = document.createElement("th");
                        th.innerHTML = document.getElementById("in" + dt).value;
                        tr.appendChild(th);
                    }
                }

                    var tabName = new Object();
                    tabName.mainMame = document.getElementById("11").value;
                    const opt = document.createElement("option");
                    opt.innerText=document.getElementById("11").value;
                    document.getElementById("sec").appendChild(opt);
                    opt.selected=true;

                    if (n > 0) {
                        var title = new Array(n);
                        for (var g = 1; g <= n; g++) {
                            title[g] = document.getElementById("in" + g);
                        }
                        tabName.theTitle = title;
                    }

                    tableName.push(tabName);

            });

        });
    }

    if (document.getElementById("2").selected) {
        document.getElementById("11").style.display = "none";
        document.getElementById("12").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div21").style.display = "block";
        if (n > 0) {
            for (var dt = 1; dt <= n; dt++) {
                var input = document.createElement("input");
                input.type = "text";
                input.placeholder = document.getElementById("in" + dt).value;
                input.id = "input" + dt;
                document.getElementById("div21").appendChild(input);
                const tr = document.createElement("tr");

                document.getElementById("com").addEventListener("click",function () {
                    for (var d = 1; d <= n; d++) {
                        const td = document.createElement("td");
                        td.innerHTML = document.getElementById("input" + d).value;
                        tr.appendChild(td);

                    }
                });

                document.getElementById("table").appendChild(tr);
            }
        }




    }
}