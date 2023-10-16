let convert = document.getElementById('convert');

convert.addEventListener('click',convertTemperature)

let reset = document.getElementById('reset');
reset.addEventListener('click', resetfield)

// function convertTemperature() {
//     const tempInput = parseFloat(document.getElementById("tempInput").value);
//     const fromUnit = document.getElementById("fromUnit").value;
//     const resultElement = document.getElementById("result");
//     let result;

//     if (fromUnit === "celsius") {
//       result = celsiusTo(resultElement, tempInput);
//     } else if (fromUnit === "fahrenheit") {
//       result = fahrenheitTo(resultElement, tempInput);
//     } else if (fromUnit === "kelvin") {
//       result = kelvinTo(resultElement, tempInput);
//     }

//     resultElement.textContent = `Converted Temperature: ${result} ${fromUnit}`;
//   }

//   function celsiusTo(element, celsius) {
//     return (celsius * 9/5) + 32;
//   }

//   function fahrenheitTo(element, fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
//   }

//   function kelvinTo(element, kelvin) {
//     return kelvin - 273.15;
//   }




function convertTemperature(){
    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const fromunit = document.querySelector('#fromUnit').value;
    let resultElement = document.querySelector('#result')
    let finalvalue;

    if (fromunit === '°C') {
        
        finalvalue = celsiusTo(resultElement,tempInput);
        
    }
    else if (fromunit === '°F') {
        
        finalvalue = fahrenheitTo(resultElement,tempInput)
    }
    else if (fromunit === 'K') {
        finalvalue = kelvinTo(resultElement , tempInput)
    }
    let finaresult = resultElement.textContent = (`${finalvalue} ${fromunit}`)

document.querySelector("#result").value = finaresult;


    
    
    
}


function resetfield(){
    document.querySelector('#tempInput').value = "";
    document.querySelector("#result").value = "";
}




function celsiusTo(element, celsius){
    return (celsius * 9/5) + 32;
}

function fahrenheitTo(element, fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

function kelvinTo(element, kelvin) {
    return kelvin - 273.15;
  }


  
















