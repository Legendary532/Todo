$(document).ready(function() {
    // Add Task
    $("#add-task").click(function() {
        var task = $("#task-input").val().trim(); // Get input value and trim it

        if (task === "") {
            alert("Task input cannot be empty!"); // Show alert if the input is empty
        } else {
            var taskItem = $('<li></li>').text(task); // Create a new list item
            var removeButton = $('<button class="remove">Remove</button>'); // Create remove button

            // Append the remove button to the task item
            taskItem.append(removeButton);

            // Add the new task to the list
            $("#task-list").append(taskItem);

            // Clear the input field
            $("#task-input").val("");
        }
    });

    // Remove Task
    $(document).on("click", ".remove", function() {
        $(this).parent().remove(); // Remove the task item when the remove button is clicked
    });

    // Hover Effect for Tasks
    $(document).on("mouseenter", "#task-list li", function() {
        $(this).css("background-color", "gray"); // Change background color on hover
    });

    $(document).on("mouseleave", "#task-list li", function() {
        $(this).css("background-color", "#ccc"); // Revert background color when hover ends
    });
});