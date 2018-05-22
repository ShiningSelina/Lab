var tableName = new Array();
function begin() {
    document.getElementById("div1").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div21").style.display = "none";
    document.getElementById("div22").style.display = "none";
    document.getElementById("div4").style.display = "none";
}
function create() {
    if (document.getElementById("1").selected) {
        document.getElementById("div4").style.display = "block";
        document.getElementById("div1").style.display = "block";
    }
    else if (document.getElementById("2").selected) {
        document.getElementById("11").style.display = "none";
        document.getElementById("12").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div21").style.display = "block";
        if (document.getElementById("12").value > 0) {
            for (var dt1 = 1; dt1 <= document.getElementById("12").value; dt1++) {
                var input = document.createElement("input");
                input.type = "text";
                input.placeholder = document.getElementById("in" + dt1).value;
                input.id = "input" + dt1;
                document.getElementById("div21").appendChild(input);
            }
        }
    }
    else if (document.getElementById("3").selected) {
        document.getElementById("11").style.display = "none";
        document.getElementById("12").style.display = "none";
        document.getElementById("div2").style.display = "none";

        document.getElementById("div21").style.display = "none";
        document.getElementById("div22").style.display = "block";
        if (document.getElementById("12").value > 0) {
            for (var dt12 = 1; dt12 <= document.getElementById("12").value; dt12++) {
                var input2 = document.createElement("input");
                input2.type = "text";
                input2.placeholder = document.getElementById("in" + dt12).value;
                input2.id = "input1" + dt12;
                document.getElementById("div22").appendChild(input2);
            }
        }
    }
    else if(document.getElementById("4").selected){
        document.getElementById("11").style.display = "none";
        document.getElementById("12").style.display = "none";
        document.getElementById("div2").style.display = "none";
        document.getElementById("div21").style.display = "none";
        document.getElementById("div22").style.display = "none";
        window.alert("You cannot undo this action!");
    }

}

function change() {
    document.getElementById("div3").style.display="block";
    document.getElementById("div2").innerHTML = null;
    if (document.getElementById("12").value > 0) {
        for (var dt = 1; dt <= document.getElementById("12").value; dt++) {
            var in2 = document.createElement("input");
            in2.type = "text";
            in2.placeholder = "Table Name";
            in2.id = "in" + dt;
            document.getElementById("div2").appendChild(in2);
        }
    }
}

function commit() {
    if (document.getElementById("1").selected) {
        document.getElementById("table").innerHTML = null;
        if (document.getElementById("12").value > 0) {
            const tr = document.createElement("tr");
            document.getElementById("table").appendChild(tr);

            for (var dt = 1; dt <= document.getElementById("12").value; dt++) {
                const th = document.createElement("th");
                th.innerHTML = document.getElementById("in" + dt).value;
                tr.appendChild(th);
            }
        }

        var tabName = new Object();
        tabName.mainMame = document.getElementById("11").value;
        const opt = document.createElement("option");
        opt.innerText = document.getElementById("11").value;
        document.getElementById("sec").appendChild(opt);
        opt.selected = true;

        if (document.getElementById("12").value > 0) {
            var title = new Array(document.getElementById("12").value);
            for (var g = 1; g <= document.getElementById("12").value; g++) {
                title[g-1] = document.getElementById("in" + g);
            }
            tabName.theTitle = title;
            tabName.theContent=new Array();
            tableName.push(tabName);
        }
    }

    else if (document.getElementById("2").selected) {
        for (var i = 0; i < tableName.length; i++) {
            if (tableName[i].mainMame === document.getElementById("sec").value) {
                var content = new Array(tableName[i].theTitle.length);
                const tr = document.createElement("tr");
                for (var d = 1; d <= tableName[i].theTitle.length; d++) {
                    const td = document.createElement("td");
                    td.innerHTML = document.getElementById("input" + d).value;
                    tr.appendChild(td);
                    document.getElementById("table").appendChild(tr);
                    content[d]=document.getElementById("input" + d).value;
                    tabName.theContent=content;
                }
                tableName.splice(i,1,tabName);
            }
        }
    }

    else if (document.getElementById("3").selected) {
        for (var i1 = 0; i1 < tableName.length; i1++) {
            if (tableName[i1].mainMame === document.getElementById("sec").value) {
                var deleteOrNot = true;
                //for (var u=0;u<tableName[i1].theTitle.length;u++){
                // if (tableName[i1].theContent[n+u]!==document.getElementById("input1"+(u+1))){
                //   deleteOrNot = false;
                // }
                //}
                /*for (var n=0;n<tableName[i1].theContent.length;n+=tableName[i1].theTitle.length){
                    for (var u=0;u<tableName[i1].theTitle.length;u++){
                        if (tableName[i1].theContent[n+u]!==document.getElementById("input1"+(u+1))){
                            deleteOrNot = false;
                        }
                    }
                }*/
                if (deleteOrNot === true) {
                    //document.getElementById("table").style.display = "none";
                    document.getElementById("table").innerText=String(i1);
                }

            }
        }
    }

    else if(document.getElementById("4").selected){
        document.getElementById("table").style.display="none";
        for (var i2 = 0; i2 < tableName.length; i2++) {
            if (tableName[i2].mainMame === document.getElementById("sec").value) {
                var length =document.getElementById("sec").options.length-1;
                for (var i3=length;i3>=1;i3--){
                    if(document.getElementById("sec").options[i3].selected===true){
                        document.getElementById("sec")[i3]=null;
                    }
                }
                document.getElementById("sec")[length-1].selected=true;

            }
        }
    }
}
function change2() {
    if (document.getElementById("1").selected) {
        var length = document.getElementById("sec").options.length - 1;
        for (var i3 = length; i3 >= 1; i3--) {
            if (document.getElementById("sec").options[i3].selected === true) {
                document.getElementById("11").value = tableName[i3 - 1].mainMame;
                document.getElementById("div2").innerHTML = null;
                document.getElementById("table").innerHTML = null;
                const tr = document.createElement("tr");
                document.getElementById("table").appendChild(tr);
                for (var dt1 = 0; dt1 < tableName[i3 - 1].theTitle.length; dt1++) {
                    var in2 = document.createElement("input");
                    in2.type = "text";
                    in2.placeholder = "Table Name";
                    in2.id = "in" + (dt1 + 1);
                    in2.value = tableName[i3 - 1].theTitle[dt1].value;
                    document.getElementById("div2").appendChild(in2);

                    const th = document.createElement("th");
                    th.innerHTML = tableName[i3 - 1].theTitle[dt1].value;
                    tr.appendChild(th);
                }

            }

        }
    }
}
