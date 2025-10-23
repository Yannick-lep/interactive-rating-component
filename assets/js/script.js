let selectedRating = null;
let hasSubmittedRating = false;

const ratingButtons = document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submitBtn');
const ratingState = document.getElementById('ratingState');
const thankYouState = document.getElementById('thankYouState');
const selectedRatingSpan = document.getElementById('selectedRating');

function init() {
    if (hasSubmittedRating && selectedRating) {
        showThankYou();
    }
}

ratingButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        if (!this.classList.contains('selected')) {
            this.classList.remove('hover');
        }
    });

    btn.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });

    btn.addEventListener('click', function() {
        ratingButtons.forEach(b => b.classList.remove('selected'));

        this.classList.add('selected');
        this.classList.remove('hover');

        selectedRating = this.dataset.value;
    });
});


submitBtn.addEventListener('click', function() {
    if (selectedRating) {
        hasSubmittedRating = true;

        showThankYou();
    }
});

function showThankYou() {
    selectedRatingSpan.textContent = selectedRating;
    ratingState.style.display = 'none';
    thankYouState.classList.add('active');
}

init();