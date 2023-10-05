$(document).ready(function() {
    let isDragging = false;
    let offset = { x: 0, y: 0 };
    let currentElement = null;
    let zIndex=9

    // Function to start dragging
    function startDragging(event) {
        zIndex++;
        isDragging = true;
        currentElement = $(this);

        // Get the current position of the element
        const position = currentElement.position();
        console.log("position" , position);
        const inputX = event.type.startsWith("touch") ? event.touches[0].clientX : event.clientX;
        const inputY = event.type.startsWith("touch") ? event.touches[0].clientY : event.clientY;
        
        // Calculate the offset
        offset = {
            x: inputX -position.left,
            y: inputY - position.top
        };
        console.log("offset" ,offset);

        // Make the element appear above all others
        currentElement.css("z-index", "9999");
    }

    // Function to move the dragged element
    function moveElement(event) {
        event.preventDefault();
        if (!isDragging) return;

        const inputX = event.type.startsWith("touch") ? event.touches[0].clientX : event.clientX;
        const inputY = event.type.startsWith("touch") ? event.touches[0].clientY : event.clientY;
        const roundedLeft = Math.round(inputX - offset.x);
        const roundedTop = Math.round(inputY - offset.y);


        // Move the element with the mouse  
        currentElement.css("left", roundedLeft);
        currentElement.css("top", roundedTop);
    }

    // Function to stop dragging
    function stopDragging() {
        if (!isDragging) return;

        // Reset z-index and stop dragging
        currentElement.css("z-index", zIndex);
        isDragging = false;
    }

    let originalWidthFix = $(".slotArea").width();
    let originalWidthChange = $(".slotArea").width();

    // Function to increase the rectangle size
    $("#plusButton").click(function() {
        
        if(window.innerWidth <=1080){
            newWidth = originalWidthChange + originalWidthFix*60/100; // Increase the width by 10 pixels (adjust as needed)
        }
        else{
            newWidth = originalWidthChange + originalWidthFix*45/100; // Increase the width by 10 pixels (adjust as needed)
        }
        $(".slotArea").width(newWidth);
        originalWidthChange = newWidth;
       
        let marginForSlotRight = newWidth - originalWidthFix; // Adjust the value as needed

        // Set the margin-left property for slot-right
         $(".slot-right").css("margin-left", marginForSlotRight + "px");
    });

    // Function to decrease the rectangle size

    $("#minusButton").click(function() {
        if(window.innerWidth <=1080){
            newWidth = originalWidthChange- originalWidthFix*60/100; // Increase the width by 10 pixels (adjust as needed)
        }
        else{
            newWidth = originalWidthChange - originalWidthFix*45/100; // Increase the width by 10 pixels (adjust as needed)
        }
        $(".slotArea").width(newWidth);
        originalWidthChange = newWidth;

        let marginForSlotRight = newWidth - originalWidthFix; // Adjust the value as needed

        // Set the margin-left property for slot-right
         $(".slot-right").css("margin-left", marginForSlotRight + "px");
    });

    // Add event listeners to the draggable elements
    $(".draggable-element, .draggable-element-prf").on("mousedown touchstart", startDragging);
    $(document).on("mousemove touchmove", moveElement);
    $(document).on("mouseup touchend", stopDragging);

    // Add click event listener to the reset button
    $("#undoButton").click(function() {
        console.log("undo");
        // Reset all draggable elements to their original positions
        $(".draggable-element").each(function() {
            $(this).css("left", 0);
            $(this).css("top", 0);
        });

        originalWidthChange = originalWidthFix

        $(".slotArea").width(originalWidthFix);
        $(".slot-right").css("margin-left",0);

    });

    $(".draggable-element, .draggable-element-prf, #plusButton, #minusButton, #undoButton").css("touch-action", "none");

});






/*

position 
Object { top: -105, left: 504 }

offset 
Object { x: 47, y: 232 }

*************************

position 
Object { top: -105, left: 495.6333312988281 }


offset 
Object { x: 46.366668701171875, y: 225 }



*/
