const array = [['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']];

for (let i = 0; i < array.length; i++){
    let row = '';
    for (let j = 0; j < array[i].length; j++){
        row += array[i][j];
        if (j < array[i].length-1){
            row += ' ';
        }
    }
    console.log(row);
}