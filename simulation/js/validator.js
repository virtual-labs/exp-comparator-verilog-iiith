import { getBoxOrder } from "./main.js";
export function isFilled() {
    // checking verilog module
    let moduleName = document.getElementById("module-name");
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let output1 = document.getElementById("output1-selector");
    let output2 = document.getElementById("output2-selector");
    let output3 = document.getElementById("output3-selector");
    let LHS_init1 = document.getElementById("LHS-init1-selector");
    let operator_init1 = document.getElementById("operator-init1-selector");
    let RHS_init1 = document.getElementById("RHS-init1-selector");
    let LHS_init2 = document.getElementById("LHS-init2-selector");
    let operator_init2 = document.getElementById("operator-init2-selector");
    let RHS_init2 = document.getElementById("RHS-init2-selector");
    let LHS_init3 = document.getElementById("LHS-init3-selector");
    let operator_init3 = document.getElementById("operator-init3-selector");
    let RHS_init3 = document.getElementById("RHS-init3-selector");
    let LHS1 = document.getElementById("LHS1-selector");
    let operator1 = document.getElementById("operator1-selector");
    let RHS1 = document.getElementById("RHS1-selector");
    let LHS2 = document.getElementById("LHS2-selector");
    let operator2 = document.getElementById("operator2-selector");
    let RHS2 = document.getElementById("RHS2-selector");
    let LHS3 = document.getElementById("LHS3-selector");
    let operator3 = document.getElementById("operator3-selector");
    let RHS3 = document.getElementById("RHS3-selector");
    let error = "Highlighted part of the code is incomplete."
    if (moduleName.value.trim() == '') {
        printErrors(error, moduleName);
        return false;
    }
    if (input1.value === "") {
        printErrors(error, input1);
        return false;
    }
    if (input2.value === "") {
        printErrors(error, input2);
        return false;
    }
    if (output1.value === "") {
        printErrors(error, output1);
        return false;
    }
    if (output2.value === "") {
        printErrors(error, output2);
        return false;
    }
    if (output3.value === "") {
        printErrors(error, output3);
        return false;
    }
    if (LHS_init1.value === "") {
        printErrors(error, LHS_init1);
        return false;
    }
    if (operator_init1.value === "") {
        printErrors(error, operator_init1);
        return false;
    }
    if (RHS_init1.value === "") {
        printErrors(error, RHS_init1);
        return false;
    }
    if (LHS_init2.value === "") {
        printErrors(error, LHS_init2);
        return false;
    }
    if (operator_init2.value === "") {
        printErrors(error, operator_init2);
        return false;
    }
    if (RHS_init2.value === "") {
        printErrors(error, RHS_init2);
        return false;
    }
    if (LHS_init3.value === "") {
        printErrors(error, LHS_init3);
        return false;
    }
    if (operator_init3.value === "") {
        printErrors(error, operator_init3);
        return false;
    }
    if (RHS_init3.value === "") {
        printErrors(error, RHS_init3);
        return false;
    }

    if (LHS1.value === "") {
        printErrors(error, LHS1);
        return false;
    }
    if (operator1.value === "") {
        printErrors(error, operator1);
        return false;
    }
    if (RHS1.value === "") {
        printErrors(error, RHS1);
        return false;
    }

    if (LHS2.value === "") {
        printErrors(error, LHS2);
        return false;
    }
    if (operator2.value === "") {
        printErrors(error, operator2);
        return false;
    }
    if (RHS2.value === "") {
        printErrors(error, RHS2);
        return false;
    }
    if (LHS3.value === "") {
        printErrors(error, LHS3);
        return false;
    }
    if (operator3.value === "") {
        printErrors(error, operator3);
        return false;
    }
    if (RHS3.value === "") {
        printErrors(error, RHS3);
        return false;
    }
    


    // checking verilog testbench
    let tbName = document.getElementById("tb-name");
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    let input4TB = document.getElementById("input4TB-selector");
    let input5TB = document.getElementById("input5TB-selector");
    let moduleNameTB = document.getElementById("module-name-tb");
    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    let arg4 = document.getElementById("argument4-selector");
    let arg5 = document.getElementById("argument5-selector");
    if (tbName.value.trim() == '') {
        printErrors(error, tbName);
        return false;
    }
    if (input1TB.value === "") {
        printErrors(error, input1TB);
        return false;
    }
    if (input2TB.value === "") {
        printErrors(error, input2TB);
        return false;
    }
    if (input3TB.value === "") {
        printErrors(error, input3TB);
        return false;
    }
    if (input4TB.value === "") {
        printErrors(error, input4TB);
        return false;
    }
    if (input5TB.value === "") {
        printErrors(error, input5TB);
        return false;
    }
    if (input4TB.value === "") {
        printErrors(error, input4TB);
        return false;
    }
    if (moduleNameTB.value.trim() == '') {
        printErrors(error, moduleNameTB);
        return false;
    }
    if (arg1.value === "") {
        printErrors(error, arg1);
        return false;
    }
    if (arg2.value === "") {
        printErrors(error, arg2);
        return false;
    }
    if (arg3.value === "") {
        printErrors(error, arg3);
        return false;
    }
    if (arg4.value === "") {
        printErrors(error, arg4);
        return false;
    }
    if (arg5.value === "") {
        printErrors(error, arg5);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('module');
    const boxOrder2 = getBoxOrder('tb');
    let container = document.getElementById("container");
    let containerTB = document.getElementById("containerTB");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3") {
        let msg = "Please rearrange the code blocks of the Verilog Module in the correct order."
        printErrors(msg, container);
        return false;
    }
    if (boxOrder2[0] !== "1TB" || boxOrder2[1] !== "2TB" || boxOrder2[2] !== "3TB" || boxOrder2[3] !== "4TB" || boxOrder2[4] !== "5TB") {
        let msg = "Please rearrange the code blocks of the Verilog Testbench in the correct order."
        printErrors(msg, containerTB);
        return false;
    }


    // Checking if the module and testbench names are valid
    let tbName = document.getElementById("tb-name");
    let moduleNameTB = document.getElementById("module-name-tb");
    let moduleName = document.getElementById("module-name");
    var regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;
    if (!regex.test(moduleName.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleName);
        return false;
    }
    if (!regex.test(moduleNameTB.value.trim())) {
        let msg = "Invalid Module Name.";
        printErrors(msg, moduleNameTB);
        return false;
    }
    if (!regex.test(tbName.value.trim())) {
        let msg = "Invalid Testbench Name."
        printErrors(msg, tbName);
        return false;
    }

    // checking if module name matches in both code and tb
    if (moduleName.value.trim() !== moduleNameTB.value.trim()) {
        let msg = "There is no verilog module defined with the name " + moduleNameTB.value.trim();
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking if module name is not equal to the temporary function name used to call the module in the testbench
    if (moduleNameTB.value.trim() === "uut") {
        let msg = "The name of the module instantiated and the temporary function name (uut) used to instantiate the module in the testbench cannot be the same.";
        printErrors(msg, moduleNameTB);
        return false;
    }

    // checking the input and output argument declaration in the module
    let input1 = document.getElementById("input1-selector");
    let input2 = document.getElementById("input2-selector");
    let output1 = document.getElementById("output1-selector");
    let output2 = document.getElementById("output2-selector");
    let output3 = document.getElementById("output3-selector");
    let arr2 = [input1, input2, output1, output2, output3]
    let arr = [input1.value, input2.value, output1.value, output2.value, output3.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, arr2[i]);
            return false;
        }
    }

    // checking assign block
    let operator1 = document.getElementById("operator1-selector");
    let operator2 = document.getElementById("operator2-selector");
    let operator3 = document.getElementById("operator3-selector");
    let operator_init1 = document.getElementById("operator-init1-selector");
    let operator_init2 = document.getElementById("operator-init2-selector");
    let operator_init3 = document.getElementById("operator-init3-selector");
    
    if (operator1.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator1);
        return false;
    }
    if (operator2.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator2);
        return false;
    }
    if (operator3.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator3);
        return false;
    }
    if (operator_init1.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator_init1);
        return false;
    }
    if (operator_init2.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator_init2);
        return false;
    }
    if (operator_init3.value === "<=") {
        let msg = "This operator is incorrect for a combinational behaviour.";
        printErrors(msg, operator_init3);
        return false;
    }
    
    // checking i/o and function call arguments in test bench
    let input1TB = document.getElementById("input1TB-selector");
    let input2TB = document.getElementById("input2TB-selector");
    let input3TB = document.getElementById("input3TB-selector");
    let input4TB = document.getElementById("input4TB-selector");
    let input5TB = document.getElementById("input5TB-selector");

    arr2 = [input1TB, input2TB, input3TB, input4TB, input5TB]
    arr = [input1TB.value, input2TB.value, input3TB.value, input4TB.value, input5TB.value]

    for (let i = 0; i < arr.length - 1; i++) {
        const currentElement = arr[i];
        const nextElements = arr.slice(i + 1);

        if (nextElements.includes(currentElement)) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, arr2[i]);
            return false;
        }
    }

    let arg1 = document.getElementById("argument1-selector");
    let arg2 = document.getElementById("argument2-selector");
    let arg3 = document.getElementById("argument3-selector");
    let arg4 = document.getElementById("argument4-selector");
    let arg5 = document.getElementById("argument5-selector");
    if (arg4.value === "A" || arg4.value === "B") {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg4);
        return false;
    }
    if (arg5.value === "A" || arg5.value === "B") {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg5);
        return false;
    }
    if (arg3.value === "A" || arg3.value === "B") {
        let msg = "Output port of a module cannot be connected to a reg type in its test bench."
        printErrors(msg, arg3);
        return false;
    }
    if (arg1.value === "Greater" || arg1.value === "Lesser" ||arg1.value === "Equal" ) {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg1);
        return false;
    }
    if (arg2.value === "Greater" || arg2.value === "Lesser" ||arg2.value === "Equal" ) {
        let msg = "Incorrect order of module instantiation ports.";
        printErrors(msg, arg2);
        return false;
    }
    return true;
}

export function printObsTable() {
    
    let arg1 = document.getElementById("argument1-selector").value;
    let arg2 = document.getElementById("argument2-selector").value;
    let arg3 = document.getElementById("argument3-selector").value;
    let arg4 = document.getElementById("argument4-selector").value;
    let arg5 = document.getElementById("argument5-selector").value;
    let input1 = document.getElementById("input1-selector").value;
    let input2 = document.getElementById("input2-selector").value;
    let output1 = document.getElementById("output1-selector").value;
    let output2 = document.getElementById("output2-selector").value;
    let output3 = document.getElementById("output3-selector").value;
    let LHS_init1 = document.getElementById("LHS-init1-selector").value;
    let RHS_init1 = document.getElementById("RHS-init1-selector").value;
    let LHS_init2 = document.getElementById("LHS-init2-selector").value;
    let RHS_init2 = document.getElementById("RHS-init2-selector").value;
    let LHS_init3 = document.getElementById("LHS-init3-selector").value;
    let RHS_init3 = document.getElementById("RHS-init3-selector").value;
    let LHS1 = document.getElementById("LHS1-selector").value;
    let RHS1 = document.getElementById("RHS1-selector").value;
    let LHS2 = document.getElementById("LHS2-selector").value;
    let RHS2 = document.getElementById("RHS2-selector").value;
    let LHS3 = document.getElementById("LHS3-selector").value;
    let RHS3 = document.getElementById("RHS3-selector").value;
    let arr = { "A": [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], "B": [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3],"Greater":[0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0], "Equal":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1], "Lesser":[0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0] };
    let body = "";
    let isCorrect = true;
    for (let i = 0; i < 16; ++i) {
        let Comp={};
        Comp[input1] = arr[arg1][i];
        Comp[input2] = arr[arg2][i];
        Comp[output1] = "x";
        Comp[output2] = "x";
        Comp[output3] = "x";

        Comp[LHS_init1]=parseInt(RHS_init1)
        Comp[LHS_init2]=parseInt(RHS_init2)
        Comp[LHS_init3]=parseInt(RHS_init3)

        if(Comp["A"] > Comp["B"])
        {
            Comp[LHS1] = parseInt(RHS1)
        }
        else if(Comp["A"] < Comp["B"])
        {
            Comp[LHS2] = parseInt(RHS2)
        }
        else
        {
            Comp[LHS3] = parseInt(RHS3)
        }

        let tb = {};
        tb[arg3] = Comp[output1];
        tb[arg4] = Comp[output2];
        tb[arg5] = Comp[output3];

        if (tb["Greater"] !== arr["Greater"][i] || tb["Lesser"] !== arr["Lesser"][i] || tb["Equal"] !== arr["Equal"][i]) {
            isCorrect = false;
            body += `<tr class="bold-table"><th>${i}</th><th>${arr["A"][i]}</th><th>${arr["B"][i]} </th><td class="failure-table"> ${arr["Greater"][i]} </td><td class="failure-table"> ${arr["Lesser"][i]} </td><td class="failure-table"> ${arr["Equal"][i]} </td><td class="failure-table"> ${tb["Greater"]}</td><td class="failure-table"> ${tb["Lesser"]}</td><td class="failure-table"> ${tb["Equal"]}</td>`;
        }
        else {
            body += `<tr class="bold-table"><th>${i}</th><th>${arr["A"][i]}</th><th>${arr["B"][i]} </th><td class="success-table"> ${arr["Greater"][i]} </td><td class="success-table"> ${arr["Lesser"][i]} </td><td class="success-table"> ${arr["Equal"][i]} </td><td class="success-table"> ${tb["Greater"]}</td><td class="success-table"> ${tb["Lesser"]}</td><td class="success-table"> ${tb["Equal"]}</td>`;
        }
    }
    document.getElementById("table-body").innerHTML = body;
    if (isCorrect) {
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}
