import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatePath = path.resolve(__dirname, '../dist/index.html');

const routes = [
  '/',
  '/resume',
  '/crisper/policy',
  '/orphic/policy',
  '/smartscribe/policy'
];

try {
  const template = fs.readFileSync(templatePath, 'utf-8');

  for (const route of routes) {
    const html = renderToString(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const routeHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    
    if (route === '/') {
      fs.writeFileSync(templatePath, routeHtml);
    } else {
      const dirPath = path.resolve(__dirname, `../dist${route}`);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'index.html'), routeHtml);
    }
  }

  console.log('Successfully prerendered SSG HTML for all routes.');
} catch (error) {
  console.error('Error during prerendering:', error);
  process.exit(1);
}
