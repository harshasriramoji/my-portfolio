import { j as e, v as l, m as n, o, w as d, d as t } from "./index-DPW3rJfk.js";
import { u as c, S as x } from "./useGsapReveal-Cj8iO9YV.js";
const m = [o, d, t];
function g() {
  const r = c();
  return e.jsx("section", {
    id: "profiles",
    className: "section-shell",
    children: e.jsxs("div", {
      ref: r,
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      children: [
        e.jsx(x, {
          eyebrow: "Coding Profiles",
          title: "Professional profile cards with motion and restraint",
          description:
            "These cards are designed to feel like premium launch targets, with animated borders, floating icons, and a clean hierarchy.",
        }),
        e.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: l.map((s, i) => {
            const a = m[i] ?? t;
            return e.jsxs(
              n.a,
              {
                href: s.href,
                target: "_blank",
                rel: "noreferrer",
                "data-reveal": !0,
                whileHover: { y: -6, scale: 1.01 },
                className:
                  "group glass-card block p-6 transition hover:border-white/15",
                children: [
                  e.jsxs("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-[0.35em] text-slate-400",
                            children: "Profile",
                          }),
                          e.jsx("h3", {
                            className: "mt-2 text-2xl font-semibold text-white",
                            children: s.title,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white transition group-hover:shadow-glow",
                        children: e.jsx(a, {}),
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-4 text-sm text-slate-400",
                    children: s.description,
                  }),
                  e.jsx("p", {
                    className:
                      "mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300",
                    children: s.value,
                  }),
                ],
              },
              s.title,
            );
          }),
        }),
      ],
    }),
  });
}
export { g as ProfilesSection };
