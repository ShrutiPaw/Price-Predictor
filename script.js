document.getElementById('price-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const country = document.getElementById('country').value;

    predictPrice(brand, model, country)
        .then(price => {
            showResult(`The predicted price for ${brand} ${model} in ${country} is $${price.toFixed(2)}`);
        })
        .catch(error => {
            showResult('Error: ' + error.message);
        });
});

async function predictPrice(brand, model, country) {
    // In a real-world scenario, you would need to use a more complex model and make an API call here.
    // For the sake of this example, let's assume a simple linear regression model.
    const basePrice = brand === 'Apple' ? 1000 : 800; // Base price for Apple is $1000, for Samsung is $800
    const modelMultiplier = model === 'iPhone 12' ? 1.2 : 1.1; // iPhone 12 is 20% more expensive than other models, Galaxy S21 is 10%more expensive
    const countryMultiplier = country === 'US' ? 1.1 : 0.9; // Prices in the US are 10% higher than in India

    const price = basePrice * modelMultiplier * countryMultiplier;

    return price;
}

function showResult(message) {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = message;
}