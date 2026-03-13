import { MapPin, CheckCircle2, Phone } from 'lucide-react';

interface ServiceArea {
  name: string;
  description: string;
  zipCodes: string[];
  highlights: string[];
}

export default function ServiceAreasPage() {
  const serviceAreas: ServiceArea[] = [
    {
      name: 'San Diego',
      description: 'Serving all neighborhoods in San Diego including Downtown, Gaslamp Quarter, Little Italy, Mission Valley, and surrounding areas.',
      zipCodes: ['92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108', '92109', '92110'],
      highlights: [
        'Same-day estimates available',
        'Licensed & insured professionals',
        'Interior & exterior painting',
        'Commercial & residential services'
      ]
    },
    {
      name: 'La Jolla',
      description: 'Premium painting services for La Jolla homes and businesses, including La Jolla Shores, Bird Rock, and the Village.',
      zipCodes: ['92037', '92038', '92039'],
      highlights: [
        'High-end residential expertise',
        'Coastal property specialists',
        'Color consultation included',
        'Premium paint materials'
      ]
    },
    {
      name: 'Del Mar',
      description: 'Professional painting for Del Mar properties, from beachfront homes to commercial spaces.',
      zipCodes: ['92014'],
      highlights: [
        'Beach property experience',
        'Weather-resistant coatings',
        'Luxury home specialists',
        'Detailed prep work'
      ]
    },
    {
      name: 'Carlsbad',
      description: 'Complete painting services throughout Carlsbad, including Bressi Ranch, La Costa, and Village areas.',
      zipCodes: ['92008', '92009', '92010', '92011', '92013', '92018'],
      highlights: [
        'Family-owned neighborhoods',
        'HOA-compliant work',
        'Popcorn ceiling removal',
        'Cabinet refinishing'
      ]
    },
    {
      name: 'Encinitas',
      description: 'Serving Encinitas communities including Leucadia, Cardiff, and Olivenhain with expert painting services.',
      zipCodes: ['92023', '92024'],
      highlights: [
        'Coastal home expertise',
        'Eco-friendly options',
        'Stucco painting specialists',
        'Quick turnaround times'
      ]
    },
    {
      name: 'Oceanside',
      description: 'Quality painting for Oceanside residential and commercial properties throughout all neighborhoods.',
      zipCodes: ['92049', '92051', '92052', '92054', '92056', '92057', '92058'],
      highlights: [
        'Military family discounts',
        'Commercial expertise',
        'Flexible scheduling',
        'Competitive pricing'
      ]
    },
    {
      name: 'Chula Vista',
      description: 'Professional painting services for Chula Vista, including Eastlake, Otay Ranch, and Rolling Hills Ranch.',
      zipCodes: ['91910', '91911', '91913', '91914', '91915'],
      highlights: [
        'Large project specialists',
        'Multi-unit experience',
        'Drywall repair experts',
        'Warranty included'
      ]
    },
    {
      name: 'Coronado',
      description: 'Premium painting services for Coronado homes and businesses, including Coronado Cays and Coronado Shores.',
      zipCodes: ['92118'],
      highlights: [
        'Historic home experience',
        'Island property specialists',
        'Premium finishes',
        'Detail-oriented work'
      ]
    },
    {
      name: 'Point Loma',
      description: 'Expert painting for Point Loma, including Ocean Beach, Sunset Cliffs, and Liberty Station areas.',
      zipCodes: ['92106', '92107'],
      highlights: [
        'Coastal climate expertise',
        'Character home specialists',
        'Exterior restoration',
        'Custom color matching'
      ]
    },
    {
      name: 'Poway',
      description: 'Complete painting services for Poway residential and commercial properties throughout the city.',
      zipCodes: ['92064', '92074'],
      highlights: [
        'Family neighborhood focus',
        'Interior specialists',
        'Cabinet painting',
        'Garage floor coatings'
      ]
    },
    {
      name: 'Solana Beach',
      description: 'High-quality painting for Solana Beach homes and businesses with attention to coastal conditions.',
      zipCodes: ['92075'],
      highlights: [
        'Beachfront specialists',
        'Salt-resistant coatings',
        'Luxury finishes',
        'Wood restoration'
      ]
    },
    {
      name: 'Rancho Santa Fe',
      description: 'Premium painting services for Rancho Santa Fe estates and luxury properties.',
      zipCodes: ['92067', '92091'],
      highlights: [
        'Estate home specialists',
        'Custom finishes',
        'High-end materials',
        'Detailed craftsmanship'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <section className="py-20 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-5 rounded-3xl shadow-2xl">
                <MapPin className="w-16 h-16 text-white drop-shadow-lg" aria-label="Service area locations icon" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
              Painting Services San Diego County | All Areas Covered
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
              Professional interior and exterior painting contractors serving all of San Diego County. Licensed, insured, and local.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Service area overview" className="py-12 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 border-b-4 border-teal-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">
            Trusted Painting Contractors Serving San Diego County Since 2010
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            We bring professional painting services, popcorn ceiling removal, and drywall repair to homes and businesses throughout San Diego County. Our licensed and insured team provides same-day estimates and superior craftsmanship.
          </p>
        </div>
      </section>

      <section aria-label="Service area details" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Painting Services by San Diego Neighborhood</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-teal-200 hover:border-teal-400 transition-all transform hover:scale-105"
                aria-label={`Painting services in ${area.name}`}
              >
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-8 h-8" aria-hidden="true" />
                    <h3 className="text-2xl font-bold">Painters in {area.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {area.zipCodes.slice(0, 4).map((zip, i) => (
                      <span key={i} className="bg-white/20 px-2 py-1 rounded text-sm" aria-label={`Zip code ${zip}`}>
                        {zip}
                      </span>
                    ))}
                    {area.zipCodes.length > 4 && (
                      <span className="bg-white/20 px-2 py-1 rounded text-sm">
                        +{area.zipCodes.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50">
                  <p className="text-slate-700 mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2" aria-label="Service highlights">
                    {area.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-slate-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+16193047732"
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white py-3 rounded-2xl font-semibold shadow-lg transition-all transform hover:scale-105"
                    aria-label={`Call for painting service in ${area.name}`}
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Call for Service
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Contact for additional areas" className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Painting Contractors Serving Additional San Diego Areas
          </h2>
          <p className="text-xl mb-8 drop-shadow-md">
            We serve many additional neighborhoods throughout San Diego County including Vista, Escondido, National City, Imperial Beach, and more. Contact our local painting team to confirm service availability in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16193047732"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all transform hover:scale-105"
              aria-label="Call 619-304-7732 for painting services"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              +1 619-304-7732
            </a>
            <a
              href="mailto:info@paintworks.pro"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all transform hover:scale-105"
              aria-label="Email info@paintworks.pro for quote"
            >
              info@paintworks.pro
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
