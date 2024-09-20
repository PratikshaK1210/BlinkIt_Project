let cnt = 0;
        let t = document.getElementById("t");
        t.addEventListener("input",(event)=>{
            event.preventDefault();
            var num = event.target.value;
            var sample = String(num);
            countLength(sample);
        })
       function countLength(sample){
        if(sample.length == 10){
            let button = document.getElementById("btn");
            button.style.backgroundColor = "green";
            button.style.color= "white";
        }
       }