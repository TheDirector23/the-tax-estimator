async function handle(event) {
    event.preventDefault();
    
    var income = document.getElementById("incomeInput").value;

    var output;
    var roundedOutput;

    if(document.getElementById("single").checked){

        if(income <= 0){
            roundedOutput = "Please enter a valid number."
        } else if(income <= 9950 && income > 0){
            output = income * 0.10
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 9951 && income <= 40525){
            output = (995) + (0.12 * (income - 9950))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 40526 && income <= 86375){
            output = (4664) + (0.22 * (income - 40525))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 86376 && income <= 164925){
            output = (14751) + (0.24 * (income - 86375))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 164926 && income <= 209425){
            output = (33603) + (0.32 * (income - 164925))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 209426 && income <= 523600){
            output = (47843) + (0.35 * (income - 209425))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 523601){
            output = (157804.25) + (0.37 * (income - 523600))
            roundedOutput = "$" + output.toFixed(2)
        }

    } else if(document.getElementById("marriedJointly").checked){

        if(income <= 0){
            roundedOutput = "Please enter a valid number."
        } else if(income <= 19900 && income > 0){
            output = income * 0.10
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 19901 && income <= 81050){
            output = (1990) + (0.12 * (income - 19900))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 81051 && income <= 172750){
            output = (9328) + (0.22 * (income - 81050))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 172751 && income <= 329850){
            output = (29502) + (0.24 * (income - 172750))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 329851 && income <= 418850){
            output = (67206) + (0.32 * (income - 329850))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 418851 && income <= 628300){
            output = (95686) + (0.35 * (income - 418850))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 628301){
            output = (168993.50) + (0.37 * (income - 628300))
            roundedOutput = "$" + output.toFixed(2)
        }

    } else if(document.getElementById("marriedSeparately").checked){

        if(income <= 0){
            roundedOutput = "Please enter a valid number."
        } else if(income <= 9950 && income > 0){
            output = income * 0.10
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 9951 && income <= 40525){
            output = (995) + (0.12 * (income - 9950))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 40526 && income <= 86375){
            output = (4664) + (0.22 * (income - 40525))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 86376 && income <= 164925){
            output = (14751) + (0.24 * (income - 86375))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 164926 && income <= 209425){
            output = (33603) + (0.32 * (income - 164925))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 209426 && income <= 314150){
            output = (47843) + (0.35 * (income - 209425))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 314151){
            output = (84496.75) + (0.37 * (income - 314150))
            roundedOutput = "$" + output.toFixed(2)
        }

    } else if(document.getElementById("householdHead").checked){

        if(income <= 0){
            roundedOutput = "Please enter a valid number."
        } else if(income <= 14200 && income > 0){
            output = income * 0.10
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 14201 && income <= 54200){
            output = (1420) + (0.12 * (income - 14200))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 54201 && income <= 86350){
            output = (6220) + (0.22 * (income - 54200))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 86351 && income <= 164900){
            output = (13293) + (0.24 * (income - 86350))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 164901 && income <= 209400){
            output = (32145) + (0.32 * (income - 164900))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 209401 && income <= 523600){
            output = (46385) + (0.35 * (income - 209400))
            roundedOutput = "$" + output.toFixed(2)
        } else if(income >= 523601){
            output = (156355) + (0.37 * (income - 523600))
            roundedOutput = "$" + output.toFixed(2)
        }
        
    } else {

        roundedOutput = "Please fill out all inputs."

    }

    var incomeOutput = `

        <b>
        <p>${roundedOutput} </p>
        </b>

    `;

    $("#incomeOutput").html(incomeOutput);

}