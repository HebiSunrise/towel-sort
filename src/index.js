
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let lr = true
    for (let i = 0; i<matrix.length; i++){
        let t = matrix[i];
        if (lr){
            for (let j = 0; j<r.length; j++){
                arr.push(t[j]);
            }
            lr =false;
            continue
        }
        if (!lr){
            for (let j = r.length-1; j>=0; j--){
                arr.push(t[j]);
            }
            lr =true;
        }
    }
    return arr
}

