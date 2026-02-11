// Cart Management
const cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartUI();
}

function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    // Update cart UI logic here
}

// Search Functionality
function searchItems(query) {
    const items = []; // replace with actual item array
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

// Checkout Validation
function validateCheckoutForm(form) {
    const isValid = form.checkValidity();
    return isValid;
}

// Sidebar Navigation
function openSidebar() {
    document.getElementById('sidebar').style.width = '250px';
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}