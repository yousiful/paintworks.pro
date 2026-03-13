import { useState } from 'react';
import { Palette } from 'lucide-react';

interface ColorOption {
  name: string;
  number: string;
  hex: string;
  brand: string;
  category: string;
}

export default function ColorGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const colors: ColorOption[] = [
    { name: 'Swiss Coffee', number: 'OC-45', hex: '#F4F0E8', brand: 'Benjamin Moore', category: 'Whites' },
    { name: 'Simply White', number: 'OC-117', hex: '#F4F4F0', brand: 'Benjamin Moore', category: 'Whites' },
    { name: 'Chantilly Lace', number: 'OC-65', hex: '#F7F7F5', brand: 'Benjamin Moore', category: 'Whites' },
    { name: 'White Dove', number: 'OC-17', hex: '#F1EDE1', brand: 'Benjamin Moore', category: 'Whites' },
    { name: 'Cloud White', number: 'OC-130', hex: '#E8E6DD', brand: 'Benjamin Moore', category: 'Whites' },

    { name: 'Edgecomb Gray', number: 'HC-173', hex: '#D9D3C8', brand: 'Benjamin Moore', category: 'Grays' },
    { name: 'Revere Pewter', number: 'HC-172', hex: '#C8C5BC', brand: 'Benjamin Moore', category: 'Grays' },
    { name: 'Classic Gray', number: 'OC-23', hex: '#C7C5BC', brand: 'Benjamin Moore', category: 'Grays' },
    { name: 'Stonington Gray', number: 'HC-170', hex: '#B8BFC2', brand: 'Benjamin Moore', category: 'Grays' },
    { name: 'Gray Owl', number: 'OC-52', hex: '#CFD4D4', brand: 'Benjamin Moore', category: 'Grays' },

    { name: 'Hale Navy', number: 'HC-154', hex: '#3F4F59', brand: 'Benjamin Moore', category: 'Blues' },
    { name: 'Newburyport Blue', number: 'HC-155', hex: '#39444D', brand: 'Benjamin Moore', category: 'Blues' },
    { name: 'Wythe Blue', number: 'HC-143', hex: '#A7B8C4', brand: 'Benjamin Moore', category: 'Blues' },
    { name: 'Palladian Blue', number: 'HC-144', hex: '#A9BFC7', brand: 'Benjamin Moore', category: 'Blues' },
    { name: 'Breath of Fresh Air', number: '806', hex: '#C6E3E8', brand: 'Benjamin Moore', category: 'Blues' },

    { name: 'Pale Oak', number: 'OC-20', hex: '#D9D3C5', brand: 'Benjamin Moore', category: 'Beiges' },
    { name: 'Shaker Beige', number: 'HC-45', hex: '#D4C7B0', brand: 'Benjamin Moore', category: 'Beiges' },
    { name: 'Manchester Tan', number: 'HC-81', hex: '#D1C2A9', brand: 'Benjamin Moore', category: 'Beiges' },
    { name: 'Alexandria Beige', number: 'HC-77', hex: '#D9CCBB', brand: 'Benjamin Moore', category: 'Beiges' },

    { name: 'Kendall Charcoal', number: 'HC-166', hex: '#5F5F5D', brand: 'Benjamin Moore', category: 'Darks' },
    { name: 'Iron Mountain', number: '2134-30', hex: '#4A4A48', brand: 'Benjamin Moore', category: 'Darks' },
    { name: 'Black Beauty', number: '2128-10', hex: '#1F1F1F', brand: 'Benjamin Moore', category: 'Darks' },

    { name: 'Caliente', number: 'AF-290', hex: '#C1443C', brand: 'Benjamin Moore', category: 'Accents' },
    { name: 'Sundance', number: '2022-20', hex: '#E89739', brand: 'Benjamin Moore', category: 'Accents' },
    { name: 'Forest Green', number: '2047-10', hex: '#2D4A3E', brand: 'Benjamin Moore', category: 'Accents' },
    { name: 'Paradise Pink', number: '2078-40', hex: '#F5C9D6', brand: 'Benjamin Moore', category: 'Accents' },
  ];

  const categories = ['all', 'Whites', 'Grays', 'Blues', 'Beiges', 'Darks', 'Accents'];

  const filteredColors = selectedCategory === 'all'
    ? colors
    : colors.filter(color => color.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-5 rounded-3xl shadow-2xl">
                <Palette className="w-16 h-16 text-white drop-shadow-lg" aria-label="Paint color palette icon" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
              San Diego Paint Color Guide | Benjamin Moore Colors
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
              Explore our curated collection of premium Benjamin Moore paint colors with exact color numbers and codes. Free color consultation available with every painting project.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Color category filters" className="py-12 bg-white border-b-4 border-pink-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Filter Paint Colors by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-label={`Filter by ${category} paint colors`}
                aria-pressed={selectedCategory === category}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-purple-900 border-2 border-purple-300 hover:border-pink-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Paint color collection" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Benjamin Moore Paint Colors for San Diego Homes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredColors.map((color, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:scale-105"
                aria-label={`${color.name} - ${color.brand} ${color.number}`}
              >
                <div
                  className="h-48 relative"
                  style={{ backgroundColor: color.hex }}
                  role="img"
                  aria-label={`${color.name} color sample`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl drop-shadow-lg">
                      {color.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-purple-900">Color Number:</span>
                      <span className="text-lg font-bold text-pink-600">{color.number}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-purple-900">Brand:</span>
                      <span className="text-md font-semibold text-orange-600">{color.brand}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-purple-900">Hex Code:</span>
                      <span className="text-sm font-mono bg-white px-3 py-1 rounded-full border-2 border-purple-200">{color.hex}</span>
                    </div>
                    <div className="pt-2">
                      <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {color.category}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Free color consultation" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Free Color Consultation with San Diego Painting Experts
          </h2>
          <p className="text-lg text-purple-900 mb-8">
            Not sure which paint color is right for your San Diego home? Our expert painting contractors provide complimentary color consultations to help you choose the perfect palette for your space.
          </p>
          <a
            href="tel:+16193047732"
            className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all transform hover:scale-105"
            aria-label="Call 619-304-7732 for free color consultation"
          >
            Call for Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
