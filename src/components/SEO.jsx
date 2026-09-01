import React, { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title || "GrowWith PR | Web Development & Digital Growth";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || "GrowWith PR by Pradeep builds premium, high-converting websites, e-commerce stores, WordPress platforms, Meta Ads campaigns, and digital growth solutions.");
    }
  }, [title, description]);

  return null;
};

export default SEO;
