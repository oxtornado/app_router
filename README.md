# Understanding App Router

A comprehensive guide to modern web development tools and practices, built with Next.js and Tailwind CSS. This project serves as an interactive learning platform showcasing different aspects of web development.

## Features

- **Next.js Guide**: Detailed exploration of Next.js features and capabilities
- **Tailwind CSS Examples**: Comprehensive showcase of Tailwind CSS styling and components
- **Modern UI**: Responsive design with interactive cards and hover effects
- **Custom Fonts**: Integration of Google Fonts (Instrument Serif, Roboto, and more)
- **Icon Integration**: Using FontAwesome icons for enhanced visual experience

## Technologies Used

- Next.js
- Tailwind CSS
- FontAwesome Icons
- Google Fonts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## Project Structure

```
├── pages/
│   ├── _app.js          # App configuration
│   ├── _document.js     # Document configuration and font imports
│   ├── index.js         # Home page with interactive cards
│   ├── next.js          # Next.js guide page
│   ├── tailwind.next.js # Tailwind CSS examples
│   └── components/      # Reusable components
│       ├── button.js    # Custom button component
│       └── nav.js       # Navigation component
├── public/              # Static assets
├── styles/             
│   └── globals.css      # Global styles and Tailwind imports
```

## Styling

This project uses Tailwind CSS for styling with custom configurations:
- Custom color schemes
- Responsive design patterns
- Interactive hover effects
- Custom Google Fonts integration
- FontAwesome icons

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Development Status

The project is actively being developed with new features being added:
- ✅ Home page with interactive cards
- ✅ Next.js guide section
- ✅ Tailwind CSS examples
- 🚧 Additional sections under development

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available under the MIT license.
