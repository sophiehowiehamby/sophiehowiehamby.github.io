(function () {
    function openFeedback() {
        document.getElementById('feedbackDrawer').classList.add('open');
    }

    function closeFeedback() {
        document.getElementById('feedbackDrawer').classList.remove('open');
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('feedbackTab').addEventListener('click', openFeedback);
        document.getElementById('feedbackCloseBtn').addEventListener('click', closeFeedback);
    });
})();
