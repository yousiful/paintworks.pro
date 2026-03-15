import { useState } from 'react';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  location: string;
  service: string;
  beforeImage: string;
  afterImage: string;
}

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Loft Interior Painting',
      description: 'Full interior refresh of a modern downtown loft with clean white walls and crisp trim work',
      location: 'Downtown San Diego, CA',
      service: 'Interior Painting',
      beforeImage: '/WhatsApp_Image_2026-03-10_at_8.59.02_PM.jpeg',
      afterImage: '/WhatsApp_Image_2026-03-10_at_8.58.58_PM.jpeg'
    },
    {
      title: 'Outdoor Fence Staining',
      description: 'Complete wood fence staining and refinishing with premium cedar finish',
      location: 'San Diego, CA',
      service: 'Exterior Staining',
      beforeImage: '/WhatsApp_Image_2026-03-10_at_8.59.02_PM_(1).jpeg',
      afterImage: '/WhatsApp_Image_2026-03-10_at_8.59.02_PM_(2).jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <section className="py-20 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-5 rounded-3xl shadow-2xl">
                <ImageIcon className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
              Before & After Gallery
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
              See the stunning transformations we've created for our clients throughout San Diego
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-cyan-200 hover:border-cyan-400 transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="grid grid-cols-2 h-80">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.beforeImage}
                      alt={`Before - ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
                      <p className="font-bold text-white text-sm tracking-wider">BEFORE</p>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt={`After - ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3">
                      <p className="font-bold text-white text-sm tracking-wider">AFTER</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <h3 className="text-2xl font-bold text-cyan-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.service}
                    </span>
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.location}
                    </span>
                  </div>
                  {selectedProject === index && (
                    <div className="pt-4 border-t-2 border-cyan-200">
                      <p className="text-slate-600 italic">
                        Professional transformation completed by our expert team. Contact us to schedule your project!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 drop-shadow-md">
            Let us create a stunning transformation for your home or business. Schedule your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16193047732"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all transform hover:scale-105"
            >
              Call +1 619-304-7732
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@paintworks.pro"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all transform hover:scale-105"
            >
              Email Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
