function SelectionSort(arr: number[], order: string): number[] {
    order = order.toUpperCase();

    let start = performance.now();
    let n = arr.length;
    console.log("Length is: ", n);


    if (order.startsWith('D')) {

        for (let i = 0; i < n; i++) {
            let minimum = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] > arr[minimum]) {
                    minimum = j;
                }
            }
            if (minimum !== i) {
                let temp = arr[i];
                arr[i] = arr[minimum];
                arr[minimum] = temp;
            }
        }
        let end = performance.now();
        let total = end-start;
        console.log(Number(total.toFixed(2)), 'ms');
        return arr;
    } 
    
    else {
        for (let i = 0; i < n - 1; i++) {
            let minimum = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minimum]) {
                    minimum = j;
                }
            }
            if (minimum !== i) {
                let temp = arr[i];
                arr[i] = arr[minimum];
                arr[minimum] = temp;
            }
        }
        let end = performance.now();
        console.log(end - start, 'ms');
        return arr;
    }

}

let data = [3, 7, 2, 1, -1];
// SelectionSort(data);
console.log(SelectionSort(data, 'des'));