import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, Tag, Calendar, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  cover_image_alt: string;
  category: string;
  tags: string[];
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

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setNotFound(false);

      const { data } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .maybeSingle();

      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setPost(data);

      const { data: relatedData } = await supabase
        .from('blog_posts')
        .select('id,slug,title,cover_image_url,cover_image_alt,category,read_time_minutes,published_at,excerpt')
        .eq('status', 'published')
        .lte('published_at', new Date().toISOString())
        .neq('slug', slug)
        .order('published_at', { ascending: false })
        .limit(3);

      setRelated(relatedData ?? []);
      setLoading(false);
    }

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-4 animate-pulse space-y-6">
          <div className="h-8 bg-slate-200 rounded w-2/3" />
          <div className="h-80 bg-slate-200 rounded-2xl" />
          <div className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-4 bg-slate-200 rounded" style={{ width: `${70 + (i % 3) * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <p className="text-slate-500 mb-8">This article doesn't exist or hasn't been published yet.</p>
          <Link to="/blog" className="bg-amber-400 text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative h-80 sm:h-96 overflow-hidden">
        <img
          src={post.cover_image_url}
          alt={post.cover_image_alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${CATEGORY_COLORS[post.category] ?? 'bg-slate-100 text-slate-700'}`}>
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
          <Link to="/blog" className="flex items-center gap-1 text-amber-600 font-semibold hover:text-amber-500 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(post.published_at)}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.read_time_minutes} min read</span>
        </div>

        {/* Article Body */}
        <article
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-800
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5
            prose-ul:text-slate-600 prose-li:mb-1
            prose-strong:text-slate-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
            <Tag className="w-4 h-4 text-slate-400 mt-0.5" />
            {post.tags.map((tag) => (
              <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 sm:p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Get a free, no-obligation estimate from San Diego's top-rated painting professionals.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
          >
            Claim Your Offer <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">More Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={r.cover_image_url}
                      alt={r.cover_image_alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[r.category] ?? 'bg-slate-100 text-slate-700'}`}>
                      {r.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800 mt-2 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {r.read_time_minutes} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
