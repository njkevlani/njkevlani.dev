const SUBSCRIPTION_PATH = '/v1/subscriptions';

function initSubscriptionForm() {
    const form = document.getElementById('subscribe-form');
    if (!form) return;

    const emailInput = document.getElementById('subscribe-email');
    const submitButton = document.getElementById('subscribe-button');
    const messageEl = document.getElementById('subscribe-message');
    const endpoint = `${form.dataset.apiHost}${SUBSCRIPTION_PATH}`;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        if (!email) return;

        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        messageEl.className = '';
        messageEl.textContent = '';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email }),
                signal: AbortSignal.timeout(10000)
            });

            const data = await response.json();

            if (response.ok && data.result === 'success') {
                messageEl.className = '';
                messageEl.textContent = 'Subscription initiated! Please check your email to confirm your subscription.';
                emailInput.value = '';
            } else {
                messageEl.className = 'error';
                messageEl.textContent = (data && data.error && data.error.message) ? data.error.message : 'Failed to subscribe. Please try again.';
            }
        } catch (err) {
            messageEl.className = 'error';
            messageEl.textContent = 'An error occurred. Please try again later.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';
        }
    });
}

initSubscriptionForm();
