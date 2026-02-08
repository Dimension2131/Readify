function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        return false;
    }
}

function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return defaultValue;
    }
}
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function calculateProgress(pagesRead, totalPages) {
    if (totalPages <= 0) return { percent: 0, remaining: 0 };
    
    const percent = Math.round((pagesRead / totalPages) * 100);
    const remaining = totalPages - pagesRead;
    
    return { percent, remaining };
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

window.ReadifyUtils = {
    saveToStorage,
    loadFromStorage,
    validateEmail,
    calculateProgress,
    generateId,
    getRandomElement
};