import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function ProductAccordion() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { id: 'product-detail', title: 'Product Detail' },
    { id: 'size-fit', title: 'Size & Fit' },
    { id: 'description', title: 'Description' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const toggleSection = id => {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  return (
    <div className="space-y-4">
      {sections.map(section => (
        <div key={section.id} className="border-b border-[#eaeaea] pb-4">
          <button className="w-full flex justify-between items-center" onClick={() => toggleSection(section.id)}>
            <span className="font-medium">{section.title}</span>
            <Plus className="h-5 w-5 text-[#292d32]" />
          </button>
          {openSection === section.id && (
            <div className="mt-4 text-sm text-[#868686]">
              <p>
                {section.id === 'product-detail' && 'This elegant Eliza Satin wedding dress features a strapless sweetheart neckline with delicate lace detailing throughout the bodice and skirt.'}
                {section.id === 'size-fit' && 'This dress runs true to size. For the best fit, we recommend selecting your normal size. The dress features a built-in corset for support.'}
                {section.id === 'description' && 'Made from premium satin fabric with intricate lace appliqués. The mermaid silhouette creates an elegant and flattering shape for your special day.'}
                {section.id === 'reviews' && 'Customers love the quality and fit of this dress. Many mention how comfortable it is to wear for extended periods.'}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
