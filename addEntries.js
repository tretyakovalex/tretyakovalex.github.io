function Test(){
  var para = document.createElement("p");
  var node = document.createTextNode("This is just a simple test");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
}

function InsertRow(){
  var table = document.getElementById("Spendings");
  var totalRowCount = table.rows.length;
  var row = table.insertRow(totalRowCount);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  var inputCategory = document.getElementById("inputCategoryField").value;
  var inputAmount = document.getElementById("inputAmountField").value;
  var inputDate = document.getElementById("inputDateField").value;

  cell1.innerHTML = inputCategory;
  cell2.innerHTML = inputAmount;
  cell3.innerHTML = inputDate;
}

function SaveTable(){
    const fs = require('fs');
    let data = "Learning how to write in a file.";
    fs.writeFile('database.txt', data, (err) => { if (err) throw err; })

    var oTable = document.getElementById("Spendings");

    var rowLength = oTable.rows.length;

    for (i = 0; i < rowLength; i++){
      var oCells = oTable.rows.item(i).cells;
      var cellLength = oCells.length;

      for(var j = 0; j < cellLength; j++){
        var cellVal = oCells.item(j).innerHTML;
        // fsLibrary.writeFile('database.txt', cellVal, (error) => {
        //   if (error) throw err;
        // })
        console.log(cellVal);

      }
    }
}
