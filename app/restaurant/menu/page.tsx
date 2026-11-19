"use client";

import { useEffect, useRef, useState } from "react";
import { MENU_CATEGORIES, type MenuCategory, type MenuItem } from "./menuData";

const BRAND = "#BC9F64";
const BRAND_DARK = "#1a3328";

function getBadgeStyle(badge: string): string {
  const b = badge.toLowerCase();
  if (b.includes("veg") || b.includes("healthy") || b.includes("vegan"))
    return "bg-emerald-50 text-emerald-800 border border-emerald-200";
  if (b.includes("signature") || b.includes("special") || b.includes("plated") || b.includes("chef"))
    return "bg-amber-50 text-amber-700 border border-amber-200";
  if (b.includes("seafood"))
    return "bg-sky-50 text-sky-700 border border-sky-200";
  return "bg-stone-100 text-stone-600 border border-stone-200";
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 hover:border-[#BC9F64]/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-[15px] font-semibold text-stone-900 leading-snug">
            {item.name}
          </h4>
          {item.desc && (
            <p className="text-xs text-stone-500 leading-relaxed mt-1">
              {item.desc}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          <div
            className="inline-flex flex-col items-end px-2.5 py-1.5 rounded-xl"
            style={{ backgroundColor: BRAND_DARK }}>
            <span className="text-[9px] uppercase tracking-wider text-stone-300 font-medium leading-none">
              KES
            </span>
            <span className="text-sm font-bold text-white tabular-nums leading-tight mt-0.5">
              {item.price}
            </span>
          </div>
          {item.unit && (
            <span className="block text-[10px] text-stone-400 font-medium mt-0.5">
              {item.unit}
            </span>
          )}
        </div>
      </div>

      {item.badges && item.badges.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
          {item.badges.map((badge) => (
            <span
              key={badge}
              className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold ${getBadgeStyle(badge)}`}>
              {badge}
            </span>
          ))}
        </div>
      )}

      {item.options && item.options.length > 0 && (
        <div className="mt-3 pt-2.5 border-t border-stone-100 grid grid-cols-1 gap-1">
          {item.options.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-stone-50">
              <span className="text-stone-700 font-medium">{opt.label}</span>
              <span className="font-bold text-stone-900 tabular-nums">
                KES {opt.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function matchesQuery(item: MenuItem, category: MenuCategory, groupName: string, q: string): boolean {
  if (!q) return true;
  const haystack = [
    category.title,
    groupName,
    item.name,
    item.desc ?? "",
    ...(item.badges ?? []),
    ...(item.options ? item.options.map((o) => o.label) : []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export default function RestaurantMenuPage() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingRef = useRef(false);

  const q = query.trim().toLowerCase();

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const scrollPos = window.scrollY + 170;
      for (const cat of MENU_CATEGORIES) {
        const el = sectionRefs.current[cat.id];
        if (!el) continue;
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveId(cat.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToCategory(id: string) {
    const el = sectionRefs.current[id];
    if (!el) return;
    isScrollingRef.current = true;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isScrollingRef.current = false; }, 800);
  }

  const totalVisible = MENU_CATEGORIES.reduce((acc, cat) =>
    acc + cat.groups.reduce((a, g) =>
      a + g.items.filter((item) => matchesQuery(item, cat, g.name, q)).length, 0), 0);

  return (
    <div className="min-h-screen bg-[#f9f7f4]">
      {/* Page Header */}
      <header
        className="text-white pt-6 pb-5 px-4 border-b"
        style={{ backgroundColor: BRAND_DARK, borderColor: `${BRAND}44` }}>
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <span
            className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-2"
            style={{ color: BRAND, borderColor: `${BRAND}66`, backgroundColor: "rgba(188,159,100,0.08)" }}>
            Restaurant &amp; Lounge
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide text-white">
            VISUM PARK HOTEL
          </h1>
          <p className="italic mt-1 text-sm sm:text-base" style={{ color: BRAND }}>
            Luxury is Personal
          </p>
          <div className="mt-2.5 flex items-center gap-2 text-[11px] text-stone-300">
            <span className="px-2 py-0.5 rounded bg-black/20 border border-white/10 font-medium">
              ALL PRICES IN KES
            </span>
            <span>•</span>
            <span>Freshly Prepared on Order</span>
          </div>
        </div>
      </header>

      {/* Sticky Search + Category Tabs */}
      <div
        className="sticky top-16 z-40 shadow-md border-b backdrop-blur-md"
        style={{ backgroundColor: `${BRAND_DARK}f5`, borderColor: `${BRAND}33` }}>
        <div className="max-w-2xl mx-auto px-3 pt-2.5 pb-1.5">
          {/* Search */}
          <div className="relative flex items-center">
            <svg
              className="w-4 h-4 absolute left-3 pointer-events-none"
              style={{ color: BRAND }}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes, drinks, ingredients..."
              className="w-full text-white placeholder-stone-400 text-sm rounded-xl pl-9 pr-9 py-2 border focus:outline-none transition"
              style={{
                backgroundColor: "rgba(0,0,0,0.35)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2.5 p-1 text-stone-400 hover:text-white rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <nav
            className="flex items-center gap-1.5 overflow-x-auto py-2 mt-1"
            style={{ scrollbarWidth: "none" }}>
            {MENU_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                  style={
                    isActive
                      ? { backgroundColor: BRAND, color: BRAND_DARK }
                      : {
                          backgroundColor: "rgba(255,255,255,0.08)",
                          color: "#e5e7eb",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }
                  }>
                  {cat.tabLabel}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Menu Sections */}
      <main className="max-w-2xl mx-auto px-3 py-5 space-y-8">
        {totalVisible === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-stone-100 text-stone-500 mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-stone-800">No matching dishes found</h3>
            <p className="text-xs text-stone-500 mt-1">Try another dish, drink, or clear your search.</p>
            <button
              onClick={() => setQuery("")}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition"
              style={{ backgroundColor: BRAND_DARK, color: BRAND }}>
              Show Full Menu
            </button>
          </div>
        ) : (
          MENU_CATEGORIES.map((cat) => {
            const visibleGroups = cat.groups
              .map((g) => ({
                ...g,
                items: g.items.filter((item) => matchesQuery(item, cat, g.name, q)),
              }))
              .filter((g) => g.items.length > 0);

            if (visibleGroups.length === 0) return null;

            return (
              <section
                key={cat.id}
                id={cat.id}
                ref={(el) => { sectionRefs.current[cat.id] = el; }}
                style={{ scrollMarginTop: "132px" }}
                className="space-y-4">
                {/* Category Header */}
                <div className="border-b-2 pb-2 px-1" style={{ borderColor: `${BRAND_DARK}1a` }}>
                  <h2 className="text-xl font-bold" style={{ color: BRAND_DARK }}>
                    {cat.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">{cat.subtitle}</p>
                </div>

                {/* Package Banner */}
                {cat.banner && (
                  <div
                    className="p-3 rounded-2xl border text-xs leading-relaxed shadow-sm"
                    style={{ backgroundColor: BRAND_DARK, borderColor: `${BRAND}66`, color: "#f5f2eb" }}>
                    <span
                      className="font-bold uppercase tracking-wider block mb-0.5 text-[11px]"
                      style={{ color: BRAND }}>
                      Package Inclusion
                    </span>
                    {cat.banner}
                  </div>
                )}

                {/* Groups */}
                {visibleGroups.map((group) => (
                  <div key={group.name} className="space-y-2.5">
                    <div className="flex items-center justify-between px-1">
                      <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND_DARK }}>
                        {group.name}
                      </h3>
                      <span className="text-[11px] text-stone-400 font-medium">
                        {group.items.length} {group.items.length === 1 ? "item" : "items"}
                      </span>
                    </div>
                    {group.banner && (
                      <div
                        className="px-3 py-2 rounded-xl text-xs font-medium border"
                        style={{ backgroundColor: "#fbf5e8", borderColor: `${BRAND}66`, color: BRAND_DARK }}>
                        {group.banner}
                      </div>
                    )}
                    <div className="space-y-2.5">
                      {group.items.map((item) => (
                        <MenuItemCard key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            );
          })
        )}
      </main>

      {/* Footer Note */}
      <footer
        className="mt-8 pt-6 pb-20 px-4 border-t text-center space-y-3"
        style={{ backgroundColor: BRAND_DARK, borderColor: `${BRAND}44` }}>
        <div
          className="inline-block px-3.5 py-1.5 rounded-xl border text-xs font-medium"
          style={{ color: BRAND, borderColor: `${BRAND}44`, backgroundColor: "rgba(188,159,100,0.08)" }}>
          Courteous Note: All our products are freshly prepared on order.
        </div>
        <div className="pt-1">
          <h2 className="text-lg font-bold text-white tracking-wide">VISUM PARK HOTEL</h2>
          <p className="text-xs text-stone-400 mt-1 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 shrink-0" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Along Machakos - Kyumvi Road, Kimangu, Machakos
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {["0740 926 266", "0739 377 262"].map((num) => (
            <a
              key={num}
              href={`tel:${num.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold text-white transition hover:opacity-80"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
              <svg className="w-3.5 h-3.5" style={{ color: BRAND }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {num}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-stone-500 pt-1">
          All prices quoted in Kenya Shillings (KES)
        </p>
      </footer>
    </div>
  );
}
