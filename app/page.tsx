"use client";

const articles = [
  {
    id: 1, tag: "AI & Machine Learning",
    title: "Làm thế nào startup Việt đang dùng AI để cạnh tranh với công ty nước ngoài",
    excerpt: "Từ chatbot chăm sóc khách hàng đến hệ thống phân tích dữ liệu — những startup này đang dùng AI không phải như trend mà như vũ khí thực sự.",
    author: "Minh Tú", date: "12 tháng 12, 2024", readTime: "8 phút", premium: false,
    url: "https://techcrunch.com/tag/artificial-intelligence/",
  },
  {
    id: 2, tag: "Startup",
    title: "VNG, Sky Mavis và bài học về việc xây dựng sản phẩm global từ Việt Nam",
    excerpt: "Phân tích chiến lược go-to-market của 2 công ty công nghệ lớn nhất Việt Nam — và những gì founder trẻ có thể học từ họ.",
    author: "Hoàng Anh", date: "8 tháng 12, 2024", readTime: "12 phút", premium: false,
    url: "https://e27.co/tag/vietnam/",
  },
  {
    id: 3, tag: "Career",
    title: "Senior Dev ở Việt Nam kiếm bao nhiêu? Báo cáo lương Q4/2024",
    excerpt: "Khảo sát từ 1,200 lập trình viên Việt Nam — mức lương, stack phổ biến nhất, và công ty nào đang trả tốt nhất.",
    author: "Thu Hương", date: "3 tháng 12, 2024", readTime: "6 phút", premium: true,
    url: "https://topdev.vn/blog/bao-cao-it-viet-nam/",
  },
];

const resources = [
  { title: "System Design cho Interview", desc: "50 bài tập thiết kế hệ thống từ dễ đến khó", icon: "📐", premium: false, url: "https://github.com/donnemartin/system-design-primer" },
  { title: "Roadmap Backend 2024", desc: "Lộ trình học Backend từ junior đến senior", icon: "🗺️", premium: false, url: "https://roadmap.sh/backend" },
  { title: "Database Cheatsheet", desc: "PostgreSQL, MongoDB, Redis trong 1 trang", icon: "🗃️", premium: false, url: "https://quickref.me/postgres" },
  { title: "Startup Pitch Deck Template", desc: "Template đã giúp 20+ startup raise funding", icon: "📊", premium: true, url: "#premium" },
  { title: "Growth Hacking Playbook", desc: "100 chiến lược tăng trưởng cho SaaS Việt", icon: "🚀", premium: true, url: "#premium" },
  { title: "Salary Negotiation Scripts", desc: "Scripts thực tế để đàm phán lương cao hơn", icon: "💰", premium: true, url: "#premium" },
];

const issues = [
  { num: 47, title: "AI đang thay đổi cách chúng ta viết code — thực sự", date: "9 tháng 12", url: "https://newsletter.pragmaticengineer.com" },
  { num: 46, title: "3 startup Việt được rót vốn tuần này và bài học từ họ", date: "2 tháng 12", url: "https://e27.co/tag/vietnam/" },
  { num: 45, title: "Remote work 2025: xu hướng và cơ hội cho dev Việt", date: "25 tháng 11", url: "https://topdev.vn/blog/" },
  { num: 44, title: "Review công cụ: Cursor AI vs GitHub Copilot sau 3 tháng dùng", date: "18 tháng 11", url: "https://cursor.sh" },
  { num: 43, title: "Cách một dev 26 tuổi xây SaaS đạt $10k MRR trong 8 tháng", date: "11 tháng 11", url: "https://www.indiehackers.com" },
];

const tags = [
  { label: "AI", url: "https://techcrunch.com/tag/artificial-intelligence/" },
  { label: "Startup", url: "https://e27.co/tag/vietnam/" },
  { label: "Mobile", url: "https://developer.android.com/news" },
  { label: "Blockchain", url: "https://coindesk.com" },
  { label: "Fintech", url: "https://fintechnews.sg/category/vietnam/" },
  { label: "Ecommerce", url: "https://shopify.com/blog" },
  { label: "Career", url: "https://topdev.vn/blog/" },
  { label: "Tools", url: "https://producthunt.com" },
  { label: "DevOps", url: "https://devops.com" },
  { label: "Web3", url: "https://decrypt.co" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-black text-sm">VN</div>
            <span className="font-black text-xl">TechDigest</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
            <a href="#articles" className="hover:text-emerald-600 transition">Bài viết</a>
            <a href="#resources" className="hover:text-emerald-600 transition">Tài nguyên</a>
            <a href="#archive" className="hover:text-emerald-600 transition">Newsletter</a>
            <a href="https://www.youtube.com/@techviet" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">Podcast</a>
          </div>
          <a href="#pricing" className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition">
            👑 Premium
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            📬 Số #47 vừa ra — <a href="https://newsletter.pragmaticengineer.com" target="_blank" rel="noopener noreferrer" className="underline">Đọc ngay</a>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Tin tức công nghệ &<br />
            <span className="text-emerald-500">startup Việt Nam</span><br />
            mỗi tuần
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
            Bản tin hàng tuần về AI, startup, career và tools — được viết bởi và cho cộng đồng tech Việt Nam.
          </p>
          <form
            className="flex max-w-md mx-auto gap-3 mb-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Cảm ơn! Bạn sẽ nhận newsletter vào tuần tới 🎉");
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="email@của bạn"
              className="flex-1 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition"
            />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold transition whitespace-nowrap">
              Đăng ký miễn phí
            </button>
          </form>
          <p className="text-gray-400 text-sm">✓ Miễn phí · ✓ Không spam · ✓ 5,000+ độc giả</p>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">📰 Bài viết mới nhất</h2>
          <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Xem tất cả →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a key={a.id} href={a.url} target="_blank" rel="noopener noreferrer"
              className="border border-gray-100 hover:border-emerald-200 rounded-2xl overflow-hidden transition hover:shadow-lg group block">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 h-40 flex items-center justify-center">
                <span className="text-6xl opacity-20">✦</span>
              </div>
              <div className="p-6">
                <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full mb-3">{a.tag}</span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition leading-snug">{a.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{a.excerpt}</p>
                {a.premium && (
                  <div className="flex items-center gap-1 text-amber-600 text-xs font-bold mb-3">
                    <span>👑</span> Chỉ dành cho Premium
                  </div>
                )}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{a.author} · {a.date}</span>
                  <span>{a.readTime} đọc</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Tags */}
      <div className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 font-medium mb-4">Khám phá theo chủ đề:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <a key={tag.label} href={tag.url} target="_blank" rel="noopener noreferrer"
                className="bg-white border border-gray-200 hover:border-emerald-400 hover:text-emerald-600 text-gray-600 text-sm px-4 py-1.5 rounded-full transition shadow-sm">
                #{tag.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <section id="resources" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2">🛠️ Tài nguyên cho Dev & Founder</h2>
        <p className="text-gray-500 mb-8">Templates, cheatsheets và guides được cộng đồng tuyển chọn</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <a key={r.title} href={r.url} target={r.premium ? undefined : "_blank"} rel="noopener noreferrer"
              className={`relative border rounded-2xl p-6 transition block ${r.premium ? "border-amber-100 bg-amber-50/50 cursor-default" : "border-gray-100 hover:border-emerald-200 hover:shadow-md"}`}>
              {r.premium && (
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">👑 Premium</span>
              )}
              <span className="text-3xl mb-3 block">{r.icon}</span>
              <h3 className="font-bold mb-1">{r.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{r.desc}</p>
              <span className={`text-sm font-semibold transition ${r.premium ? "text-amber-600" : "text-emerald-600"}`}>
                {r.premium ? "Nâng cấp để xem →" : "Xem miễn phí →"}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Chọn gói phù hợp</h2>
          <p className="text-gray-500 text-center mb-10">Bắt đầu miễn phí, nâng cấp bất cứ lúc nào</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8">
              <h3 className="font-black text-xl mb-1">Miễn phí</h3>
              <p className="text-gray-500 text-sm mb-6">Cho người mới bắt đầu</p>
              <div className="text-3xl font-black mb-6">0₫ <span className="text-gray-400 text-lg font-normal">/tháng</span></div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                {["✓ Newsletter hàng tuần", "✓ 3 bài viết/tuần", "✓ Tài nguyên cơ bản", "✓ Cộng đồng Discord"].map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById("subscribe-email")?.focus()}
                className="w-full border border-gray-200 hover:border-emerald-400 text-gray-700 font-bold py-3 rounded-xl transition"
              >
                Đăng ký ngay
              </button>
            </div>
            <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -translate-y-20 translate-x-20" />
              <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">PHỔ BIẾN NHẤT</span>
              <h3 className="font-black text-xl mb-1">Premium</h3>
              <p className="text-gray-400 text-sm mb-6">Cho người nghiêm túc</p>
              <div className="text-3xl font-black mb-6">99.000₫ <span className="text-gray-400 text-lg font-normal">/tháng</span></div>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {["✓ Tất cả gói miễn phí", "✓ Toàn bộ bài viết không giới hạn", "✓ 50+ tài nguyên Premium", "✓ Báo cáo lương & thị trường", "✓ Q&A với experts hàng tháng", "✓ Ưu tiên hỗ trợ"].map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="mailto:tuanlt1989@gmail.com?subject=Đăng ký Premium VNTechDigest"
                className="block w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 rounded-xl transition text-center">
                Nâng cấp Premium →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section id="archive" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">📬 Số cũ nổi bật</h2>
        <div className="space-y-3">
          {issues.map((issue) => (
            <a key={issue.num} href={issue.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between border border-gray-100 hover:border-emerald-200 rounded-xl px-6 py-4 transition group">
              <div className="flex items-center gap-4">
                <span className="text-emerald-500 font-black text-sm">#{issue.num}</span>
                <span className="font-medium text-gray-800 group-hover:text-emerald-600 transition">{issue.title}</span>
              </div>
              <span className="text-gray-400 text-sm flex-shrink-0 ml-4">{issue.date}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white font-black text-xs">VN</div>
          <span className="text-white font-black">TechDigest</span>
        </div>
        <p className="mb-2">© 2024 VNTechDigest. Bản quyền thuộc về VNTechDigest.</p>
        <p>Bản tin công nghệ & startup hàng đầu cho cộng đồng tech Việt Nam.</p>
      </footer>
    </div>
  );
}
