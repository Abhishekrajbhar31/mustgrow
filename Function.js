function submitQuestion() {
    // Get form inputs
    var title = document.getElementById("question-title").value;
    var description = document.getElementById("question-description").value;
    var tags = document.getElementById("question-tags").value.split(",");
    
    // Clear form inputs
    document.getElementById("question-title").value = "";
    document.getElementById("question-description").value = "";
    document.getElementById("question-tags").value = "";
    
    // Create question element
    var questionItem = document.createElement("li");
    questionItem.innerHTML = "<h3>" + title + "</h3><p>" + description + "</p><p>Tags: " + tags.join(", ") + "</p>";
    
    // Append question element to the question list
    var questionList = document.getElementById("questions");
    questionList.appendChild(questionItem);
  }
  