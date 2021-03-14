
    let arr=[];

    function display(arr){

        let text = "Array : ";

        for (let i = 0; i < arr.length ;i++) {
        text += arr[i] + " ";
        }
        text+="<br>";
        document.getElementById("array").innerHTML = text;
        //console.log(text);
    }

    function addLast() {
        let x = document.getElementById("value").value;
        arr.push(x);
        display(arr);
    }

    function addFirst() {
        let x = document.getElementById("value").value;
        arr.unshift(x);
        display(arr);
    }

    function addSpecific() {
        let x = document.getElementById("value").value;
        let pos = document.getElementById("index").value;
        arr.push(x);
        let y;
        for (let i=pos-1;i<arr.length;i++) {
            y=arr[i];
            arr[i]=x;
            x=y;
        }
        display(arr);
    }

    function deleteLast() {
        let x = document.getElementById("value").value;
        arr.pop();
        display(arr);
    }

    function deleteFirst() {
        let x = document.getElementById("value").value;
        arr.shift();
        display(arr);
    }

    function deleteSpecific() {
        let x = arr[arr.length-1];
        let pos = document.getElementById("index").value;
        arr.pop();
        let y;
        for (let i=arr.length-1;i>=pos-1;i--) {
            y=arr[i];
            arr[i]=x;
            x=y;
        }
        display(arr);
    }

    function updateSpecific() {
        let x = document.getElementById("value").value;
        let pos = document.getElementById("index").value;
        arr[pos-1]=x;
        
        display(arr);
    }