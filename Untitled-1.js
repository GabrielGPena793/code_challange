let readline = require('readline');
let resp = "";

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Indique o tamanho da ampulheita?\n", function(answer) {
    let resp = Number(answer);
    design(resp);
    leitor.close();
});


function design(number) {
  let figureTop = "";

  for (let line = 0; line < number; line++) {
    for (let colum = 0; colum < number; colum++) {
      figureTop = addHashes(line, number).join("");
    }

    console.log(figureTop);
  }
}

function addHashes(line, colum) {
  let spacesStart = 0 + line;
  let spacesEnd = 1 + line;
  let response = [];
  let count = colum

  for (let index = 0; index < colum; index++) {
    const deleteEndToMiddle = index > colum - spacesEnd && index < colum - 2;
    const deleteStartToMiddle = index > 1 && spacesStart > index && index != 0;
    const jumpFirstsLines = 1

    if (line <= jumpFirstsLines) {
      response.push("#");
    }

    if (line < colum / 2 && line > jumpFirstsLines) {
      if (index === 1 || index === colum - 2) {
        response.push(" ");
        continue;
      }
      if (deleteStartToMiddle || deleteEndToMiddle) {
        response.push(" ");
        continue;
      }

      response.push("#");
    } 
 
    if (line >= (colum / 2)) {

      if (line + 1 === colum) {
        response.push("#");
        continue
      }

      if (line == colum / 2 && index === line - 1) {
        response.push("#");
        continue;
      }

      if (index === 0 || index === colum - 1) {
        response.push("#");
        continue;
      }

     
      if ( index >= colum / 2 && index === line ) {
        response.push("#");
        continue
      }

      if (index <= colum / 2 && count - 2 === line) {
        response.push("#");
        count--
        continue
      }

      response.push(" ");
    }
    count--
  }

  return response;
}
