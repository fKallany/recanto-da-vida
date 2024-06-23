/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from '/styles/globalStyles';
import * as Path from '/pages/import-pages.ts';
import NavBar from '/components/NavBar/index.ts';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Path.Home />} />
        <Route path="/quem-somos" element={<Path.AboutUs />} />
        <Route path="/contatos" element={<Path.Contacts />} />
        <Route path="/nosso-dia-a-dia" element={<Path.DailyLife />} />
        <Route path="/servicos" element={<Path.Services />} />
        <Route path="/estrutura" element={<Path.Structure />} />
        <Route path="/404" element={<Path.NotFound />} />
      </Routes>
    </Router>,
  );
} else {
  throw new Error("Element with id 'root' not found in the DOM.");
}
