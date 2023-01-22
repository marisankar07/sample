function predict() {
    // Get user input
    var cropType = document.getElementById("crop-type").value;
    var location = document.getElementById("location").value;
    var year = document.getElementById("year").value;
  
    // Perform prediction (this is where you would call your machine learning model)
    // In this example, we will just use a placeholder value
    var prediction = "5,000 kg/ha";
  
    // Display the result
    var result = document.getElementById("result");
    result.innerHTML = "Predicted yield for " + crop
}