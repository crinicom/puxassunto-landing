import { useState, useEffect } from 'react';

export function useJogarUrl() {
  const [url, setUrl] = useState<string>('#');

  useEffect(() => {
    // Agregamos un timestamp para evitar que el navegador guarde en caché agresivamente el archivo de texto
    fetch(`/jogar_url?t=${new Date().getTime()}`)
      .then(res => res.text())
      .then(text => {
        const parsedUrl = text.trim();
        if (parsedUrl) setUrl(parsedUrl);
      })
      .catch(console.error);
  }, []);

  return url;
}
