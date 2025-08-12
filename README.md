# Cartfolio - Static E-commerce Starter

A beautiful, responsive static e-commerce website built with HTML, CSS (Tailwind), and vanilla JavaScript. Perfect for small businesses or as a starting point for larger e-commerce projects.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Product Catalog**: Dynamic product listing with search and filtering
- **Shopping Cart**: Persistent cart with localStorage
- **Stripe Integration**: Ready for Stripe Payment Links
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA attributes
- **Fast Loading**: Optimized images and minimal dependencies

## 📁 Project Structure

\`\`\`
cartfolio-store/
├── index.html              # Homepage with featured products
├── products.html           # Product catalog with filtering
├── product.html            # Individual product details
├── cart.html              # Shopping cart and checkout
├── data/
│   └── products.json      # Product data
├── scripts/
│   └── cart.js           # Cart management logic
├── assets/
│   ├── logo.png          # Site logo
│   └── favicon.ico       # Site favicon
└── README.md             # This file
\`\`\`

## 🛍️ Setting Up Stripe Payment Links

### Step 1: Create Stripe Payment Links

1. **Sign up for Stripe**: Go to [stripe.com](https://stripe.com) and create an account
2. **Access Payment Links**: In your Stripe Dashboard, go to "Products" → "Payment Links"
3. **Create a Product**: 
   - Click "Add Product"
   - Enter product name, description, and price
   - Upload product image
   - Save the product
4. **Generate Payment Link**:
   - Click "Create Payment Link" for your product
   - Configure settings (quantity limits, shipping, etc.)
   - Copy the generated payment link

### Step 2: Update products.json

Replace `"YOUR_STRIPE_PAYMENT_LINK_HERE"` with your actual Stripe Payment Links:

\`\`\`json
{
  "id": 1,
  "name": "Premium Wireless Headphones",
  "price": 29999,
  "description": "Experience crystal-clear audio...",
  "image": "/placeholder.svg?height=400&width=400",
  "category": "electronics",
  "stripe_payment_link": "https://buy.stripe.com/test_xxxxxxxxxx"
}
\`\`\`

### Step 3: Test Your Setup

1. Add products to cart
2. Proceed to checkout
3. Verify Stripe Payment Link opens correctly

## 📝 Managing Products

### Adding New Products

Edit `data/products.json` and add new product objects:

\`\`\`json
{
  "id": 7,
  "name": "New Product Name",
  "price": 4999,
  "description": "Product description here",
  "image": "/placeholder.svg?height=400&width=400",
  "category": "electronics",
  "stripe_payment_link": "YOUR_STRIPE_PAYMENT_LINK_HERE"
}
\`\`\`

### Product Image Guidelines

- **Placeholder Images**: Use the placeholder.svg format for quick setup
- **Custom Images**: 
  - Add images to an `images/` folder
  - Use relative paths: `"image": "images/product-name.jpg"`
  - Recommended size: 400x400px minimum
  - Formats: JPG, PNG, WebP

### Categories

Current categories:
- `electronics`
- `clothing` 
- `accessories`

Add new categories by:
1. Using the category name in products.json
2. Adding filter options in products.html
3. Adding navigation links in the footer

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub**: Upload your code to a GitHub repository
2. **Enable Pages**: Go to Settings → Pages
3. **Select Source**: Choose "Deploy from a branch" → "main"
4. **Access Site**: Your site will be available at `https://username.github.io/repository-name`

### Vercel (Recommended)

1. **Connect Repository**: Go to [vercel.com](https://vercel.com) and import your GitHub repo
2. **Deploy**: Vercel will automatically build and deploy
3. **Custom Domain**: Add your custom domain in project settings

### Netlify

1. **Drag & Drop**: Go to [netlify.com](https://netlify.com) and drag your project folder
2. **Git Integration**: Connect your GitHub repository for automatic deployments
3. **Custom Domain**: Configure your domain in site settings

## 🛠️ Customization

### Colors

The site uses a clean color palette defined in Tailwind config:
- **Primary**: `#111827` (Dark gray)
- **Accent**: `#2563eb` (Blue)

To change colors, update the Tailwind config in each HTML file:

\`\`\`javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        accent: '#your-accent-color'
      }
    }
  }
}
\`\`\`

### Typography

The site uses Inter font from Google Fonts. To change:

1. Update the Google Fonts link in HTML files
2. Update the font family in Tailwind config
3. Apply the new font class throughout the site

### Layout

- **Max Width**: Content is constrained to `max-w-7xl` (1280px)
- **Breakpoints**: Uses Tailwind's responsive prefixes (sm, md, lg, xl)
- **Grid**: Product grids are responsive (1-4 columns based on screen size)

## 🔧 Advanced Features

### Search & Filtering

The products page includes:
- **Text Search**: Searches product names and descriptions
- **Category Filter**: Filter by product category
- **Sorting**: Sort by name, price (low to high), price (high to low)

### Cart Persistence

Cart data is stored in localStorage and persists between sessions:
- **Add/Remove**: Products can be added/removed from any page
- **Quantity**: Update quantities on cart page
- **Persistence**: Cart survives browser refresh and return visits

### SEO Optimization

- **Meta Tags**: Proper title, description, and keywords
- **Semantic HTML**: Uses proper heading hierarchy and semantic elements
- **Image Alt Text**: All images include descriptive alt text
- **Structured Data**: Ready for schema.org markup addition

## 🚨 Limitations & Considerations

### Static Site Limitations

- **No Server**: All processing happens client-side
- **Multiple Items**: Stripe Payment Links work best for single items
- **Inventory**: No real-time inventory management
- **User Accounts**: No user authentication or order history

### Production Recommendations

For a full production e-commerce site, consider:
- **Stripe Checkout Sessions**: For multi-item purchases
- **Content Management**: Headless CMS for product management
- **Analytics**: Google Analytics or similar tracking
- **Performance**: Image optimization and CDN
- **Security**: HTTPS and proper payment handling

## 📞 Support

For questions about this starter template:
- **Issues**: Open an issue on GitHub
- **Stripe Help**: Visit [Stripe Documentation](https://stripe.com/docs)
- **Deployment**: Check platform-specific documentation

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Selling! 🛍️**

Built with ❤️ for small businesses and developers
