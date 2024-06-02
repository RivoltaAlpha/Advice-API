document.addEventListener('DOMContentLoaded', () => {
    const adviceIdElement = document.getElementById('advice-id');
    const adviceTextElement = document.querySelector('.advice-text');
    const diceButton = document.getElementById('dice-button');

    async function fetchAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            const { id, advice } = data.slip;
            adviceIdElement.textContent = id;
            adviceTextElement.textContent = `“${advice}”`;
        } catch (error) {
            console.error('Error fetching advice:', error);
            adviceTextElement.textContent = 'An error occurred. Please try again.';
        }
    }

    diceButton.addEventListener('click', fetchAdvice);

    // Fetch initial advice
    fetchAdvice();
});
