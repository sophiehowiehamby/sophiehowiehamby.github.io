(function () {
    function openFeedback() {
        document.getElementById('feedbackOverlay').classList.add('open');
        document.getElementById('feedbackForm').style.display = 'block';
        document.getElementById('feedbackSuccessMsg').style.display = 'none';
    }

    function closeFeedback() {
        document.getElementById('feedbackOverlay').classList.remove('open');
        document.getElementById('feedbackForm').reset();
        document.getElementById('feedbackForm').style.display = 'block';
        document.getElementById('feedbackSuccessMsg').style.display = 'none';
    }

    function submitFeedback(e) {
        e.preventDefault();
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('feedbackSuccessMsg').style.display = 'block';
        setTimeout(closeFeedback, 2400);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('feedbackTab').addEventListener('click', openFeedback);
        document.getElementById('feedbackCloseBtn').addEventListener('click', closeFeedback);
        document.getElementById('feedbackCancelBtn').addEventListener('click', closeFeedback);
        document.getElementById('feedbackOverlay').addEventListener('click', function (e) {
            if (e.target === this) closeFeedback();
        });
        document.getElementById('feedbackForm').addEventListener('submit', submitFeedback);
    });
})();
