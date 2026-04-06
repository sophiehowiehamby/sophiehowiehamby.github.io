(function () {
    function closeFeedback() {
        document.getElementById('feedbackDrawer').classList.remove('open');
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('feedbackCloseBtn').addEventListener('click', closeFeedback);
    });
})();
