$(document).ready(function() {
    // Facebook share button click handler
    $('.share-facebook').click(function(event) {
        event.preventDefault();
        var url = encodeURIComponent(window.location.href);
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-share-dialog', 'width=626,height=436');
    });

    // Instagram share button click handler
    $('.share-instagram').click(function(event) {
        event.preventDefault();
        // Instagram does not support sharing directly via URL, so we simply open Instagram's homepage
        window.open('https://www.instagram.com/', '_blank');
    });

    // Twitter share button click handler
    $('.share-twitter').click(function(event) {
        event.preventDefault();
        var url = encodeURIComponent(window.location.href);
        window.open('https://twitter.com/intent/tweet?url=' + url, '_blank');
    });

    // LinkedIn share button click handler
    $('.share-linkedin').click(function(event) {
        event.preventDefault();
        var url = encodeURIComponent(window.location.href);
        window.open('https://www.linkedin.com/shareArticle?url=' + url, '_blank');
    });
});
