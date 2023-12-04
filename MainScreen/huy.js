$(document).ready(function(){
    // Set initial variables
    var currentIndex = 0;
    var items = $('.bannerPic');
    var totalItems = items.length;

    // Show the first image
    items.eq(currentIndex).show();

    // Function to change the image
    function changeItem() {
        items.eq(currentIndex).fadeOut(0);
        currentIndex = (currentIndex + 1) % totalItems;
        items.eq(currentIndex).fadeIn(0);
    }

    // Start the auto change
    var autoChange = setInterval(changeItem, 5000); // Change every 3 seconds

    // Pause on hover (optional)
    $('.banner_home').hover(
        function() {
            clearInterval(autoChange);
        },
        function() {
            autoChange = setInterval(changeItem, 3000);
        }
    );
});