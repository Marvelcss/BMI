function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // to convert the weight in pounds to kg, i'll divide by 2.2046 
    let kgweight = weight / 2.2046;

    // to convert the inches to meters, i'll multiply by 0.0254
    let mheight = height * 0.0254;

    // to calculate the BMI
    let bmi = kgweight / (mheight ** 2);

    // for the result
    document.getElementById("result").innerText = `Your BMI is ${bmi.toFixed(2)} `;


}
