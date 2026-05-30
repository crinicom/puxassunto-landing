import { useState, useEffect } from 'react';

export function useUrls() {
  const [jogarUrl, setJogarUrl] = useState<string>('#');
  const [jugarUrl, setJugarUrl] = useState<string>('#');

  useEffect(() => {
    const timestamp = new Date().getTime();
    
    // Fetch Portuguese URL
    fetch(`/jogar_url?t=${timestamp}`)
      .then(res => res.text())
      .then(text => {
        const parsedUrl = text.trim();
        if (parsedUrl) setJogarUrl(parsedUrl);
      })
      .catch(console.error);

    // Fetch Spanish URL
    fetch(`/jugar_url?t=${timestamp}`)
      .then(res => res.text())
      .then(text => {
        const parsedUrl = text.trim();
        if (parsedUrl) setJugarUrl(parsedUrl);
      })
      .catch(console.error);
  }, []);

  return { jogarUrl, jugarUrl };
}
