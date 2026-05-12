import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ title, description, image, url }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, true);
      updateMeta('twitter:description', description);
    }

    updateMeta('og:title', title, true);
    updateMeta('twitter:title', title);
    updateMeta('og:type', 'website', true);

    if (image) {
      updateMeta('og:image', image, true);
      updateMeta('twitter:image', image);
    } else {
      // Default OG image if none provided
      updateMeta('og:image', 'https://www.orvelo.ai/Orvelo.png', true);
      updateMeta('twitter:image', 'https://www.orvelo.ai/Orvelo.png');
    }

    if (url) {
      updateMeta('og:url', url, true);
    } else if (typeof window !== 'undefined') {
      updateMeta('og:url', window.location.href, true);
    }

    updateMeta('twitter:card', 'summary_large_image');
  }, [title, description, image, url]);

  return null;
};
