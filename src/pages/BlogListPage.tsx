import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  cover_image_url: string;
  cover_image_alt: string;
  category: string;
  primary_keyword: string;
  read_time_minutes: number;
  published_at: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Interior Painting': 'bg-blue-100 text-blue-800',
  'Exterior Painting': 'bg-green-100 text-green-800',
  'Color & Design': 'bg-amber-100 text-amber-800',
  'Specialty Services': 'bg-orange-100 text-orange-800',
  'Prep & Repair': 'bg-slate-100 text-slate-700',
  'Hiring Tips': 'bg-teal-100 text-teal-800',
  'Product Guides': 'bg-rose-100 text-rose-800',
  'Tips & How-To': 'bg-cyan-100 text-cyan-800',
  'Commercial': 'bg-stone-100 text-stone-700',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('blog_posts')
        .select('id,slug,title,meta_description,excerpt,cover_image_url,cover_image_alt,category,primary_keyword,read_time_minutes,published_at')
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });
      setPosts(data ?? []);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Painting Tips & Advice
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-tight">
            The Paint Works Pro Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Expert guides, color inspiration, and insider tips from San Diego's trusted painting professionals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow animate-pulse">
                <div className="h-52 bg-slate-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-slate-200 rounded w-1/3" />
                  <div className="h-6 bg-slate-200 rounded w-4/5" />
                  <div className="h-4 bg-slate-200 rounded" />
                  <div className="h-4 bg-slate-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-center text-slate-500 py-20 text-lg">No posts published yet — check back soon!</p>
        )}

        {!loading && featured && (
          <>
            {/* Featured Post */}
            <Link to={`/blog/${featured.slug}`} className="group block mb-12">
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-72 lg:h-auto overflow-hidden relative">
                  <img
                    src={featured.cover_image_url}
                    alt={featured.cover_image_alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Latest Post
                  </span>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[featured.category] ?? 'bg-slate-100 text-slate-700'}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {featured.read_time_minutes} min read
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 group-hover:text-amber-600 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{formatDate(featured.published_at)}</span>
                    <span className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Post Grid */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={post.cover_image_url}
                        alt={post.cover_image_alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        {post.read_time_minutes} min read
                        <span className="ml-auto">{formatDate(post.published_at)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to Transform Your Home?</h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            San Diego's trusted painting professionals. Get a free estimate and save up to $400 on your next project.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Claim Your Offer <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
