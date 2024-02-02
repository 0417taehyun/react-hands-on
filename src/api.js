const OPEN_API_DOMAIN = "https://cataas.com";

async function getCatImageWithText(text) {
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const body = await response.json();
    return `${OPEN_API_DOMAIN}/cat/${body._id}/says/${text}`
}

export {getCatImageWithText};