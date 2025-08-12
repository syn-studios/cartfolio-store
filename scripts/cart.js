/**
 * Cart Management System
 * Handles all cart operations including add, remove, update, and persistence
 */

/**
 * Get cart from localStorage
 * @returns {Array} Array of cart items
 */
function getCart() {
  try {
    const cart = localStorage.getItem("cartfolio_cart")
    return cart ? JSON.parse(cart) : []
  } catch (error) {
    console.error("Error getting cart from localStorage:", error)
    return []
  }
}

/**
 * Save cart to localStorage
 * @param {Array} cart - Array of cart items to save
 */
function saveCart(cart) {
  try {
    localStorage.setItem("cartfolio_cart", JSON.stringify(cart))
  } catch (error) {
    console.error("Error saving cart to localStorage:", error)
  }
}

/**
 * Add product to cart
 * @param {number} productId - ID of the product to add
 * @param {number} quantity - Quantity to add (default: 1)
 */
function addToCart(productId, quantity = 1) {
  const cart = getCart()
  const existingItemIndex = cart.findIndex((item) => item.id === productId)

  if (existingItemIndex !== -1) {
    // Product already in cart, update quantity
    cart[existingItemIndex].quantity += quantity
  } else {
    // New product, add to cart
    cart.push({
      id: productId,
      quantity: quantity,
      addedAt: new Date().toISOString(),
    })
  }

  saveCart(cart)
  updateCartCount()
  showCartNotification(`Added to cart!`)
}

/**
 * Remove product from cart
 * @param {number} productId - ID of the product to remove
 */
function removeFromCart(productId) {
  const cart = getCart()
  const updatedCart = cart.filter((item) => item.id !== productId)
  saveCart(updatedCart)
  updateCartCount()

  // Refresh cart display if on cart page
  if (window.location.pathname.includes("cart.html")) {
    window.displayCart() // Assuming displayCart is a global function
  }

  showCartNotification("Removed from cart")
}

/**
 * Update cart count in navigation
 */
function updateCartCount() {
  const cart = getCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElements = document.querySelectorAll("#cart-count")

  cartCountElements.forEach((element) => {
    if (totalItems > 0) {
      element.textContent = totalItems
      element.classList.remove("hidden")
    } else {
      element.classList.add("hidden")
    }
  })
}

/**
 * Clear entire cart
 */
function clearCart() {
  saveCart([])
  updateCartCount()

  // Refresh cart display if on cart page
  if (window.location.pathname.includes("cart.html")) {
    window.displayCart() // Assuming displayCart is a global function
  }
}

/**
 * Get cart total (in cents)
 * @param {Array} products - Array of all products
 * @returns {number} Total price in cents
 */
function getCartTotal(products) {
  const cart = getCart()
  let total = 0

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id)
    if (product) {
      total += product.price * item.quantity
    }
  })

  return total
}

/**
 * Get cart item count
 * @returns {number} Total number of items in cart
 */
function getCartItemCount() {
  const cart = getCart()
  return cart.reduce((sum, item) => sum + item.quantity, 0)
}

/**
 * Show cart notification
 * @param {string} message - Message to display
 */
function showCartNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className =
    "fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300"
  notification.textContent = message

  // Add to page
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-x-full")
  }, 100)

  // Animate out and remove
  setTimeout(() => {
    notification.classList.add("translate-x-full")
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 2000)
}

/**
 * Check if product is in cart
 * @param {number} productId - ID of the product to check
 * @returns {boolean} True if product is in cart
 */
function isInCart(productId) {
  const cart = getCart()
  return cart.some((item) => item.id === productId)
}

/**
 * Get quantity of specific product in cart
 * @param {number} productId - ID of the product
 * @returns {number} Quantity of product in cart
 */
function getProductQuantityInCart(productId) {
  const cart = getCart()
  const item = cart.find((item) => item.id === productId)
  return item ? item.quantity : 0
}

/**
 * Update quantity of specific product in cart
 * @param {number} productId - ID of the product
 * @param {number} newQuantity - New quantity (will remove if 0 or less)
 */
function updateCartItemQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  const cart = getCart()
  const itemIndex = cart.findIndex((item) => item.id === productId)

  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity
    saveCart(cart)
    updateCartCount()
  }
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
})
