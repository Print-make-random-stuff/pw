var output = document.getElementById("output"); //main id
var x = document.getElementById("pw_len");


function generate(){

    
    if(x.value > 30){
        window.alert("អាចបង្កើតពាក្យសម្ងាត់ត្រឹមតែ30តួរទេ!");
    }else{
        let alpha_bet = [
            "ក", "ខ", "គ", "ឃ", "ង",
            "ច", "ឆ", "ជ", "ឈ", "ញ",
            "ដ", "ឋ", "ឌ", "ឍ", "ណ",
            "ត", "ថ", "ទ", "ធ", "ន",
            "ប", "ផ", "ព", "ភ", "ម",
            "យ", "រ", "ល", "វ",
            "ស", "ហ", "ឡ", "អ"
          ];
        let i;
    
        //Add ascii character to array
        for(i=33;i<=126;i++){
            alpha_bet.push(String.fromCharCode(i));
        }
    
        let pw = []
    
        //append char to array
    
        for(i=0;i<x.value;i++){
            let x = Math.floor(Math.random()*alpha_bet.length)
            pw.push(alpha_bet[x]);
        }
    
    
        let result = pw.join("");
          
        console.log(result);
        output.value = result;
    }
      

}

