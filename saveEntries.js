function SaveTable(){

  var fs = require('fs');
  fs.writeFile("database.txt", jsonData, function(err) {
  if (err) {
      console.log(err);
    }
  });

    // const fs = require('fs');
    // let data = "Learning how to write in a file.";
    // fs.writeFile('database.txt', data, (err) => {if (err) throw err;})

    // var oTable = document.getElementById("Spendings");
    //
    // var rowLength = oTable.rows.length;

    // for (i = 0; i < rowLength; i++){
    //   var oCells = oTable.rows.item(i).cells;
    //   var cellLength = oCells.length;
    //
    //   for(var j = 0; j < cellLength; j++){
    //     var cellVal = oCells.item(j).innerHTML;
    //     // fsLibrary.writeFile('database.txt', cellVal, (error) => {
    //     //   if (error) throw err;
    //     // })
    //     console.log(cellVal);
    //     fs.writeFile('database.txt', cellVal, (err) => { if (err) throw err; })
    //   }
    // }
}

// const fs = require('fs')
//
// // Data which will write in a file.
// let data = "Learning how to write in a file."
//
// // Write data in 'Output.txt' .
// fs.writeFile('Output.txt', data, (err) => {
//
//     // In case of a error throw err.
//     if (err) throw err;
// })
