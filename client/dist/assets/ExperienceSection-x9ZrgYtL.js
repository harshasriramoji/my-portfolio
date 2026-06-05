import { j as e, k as c, m as n, l as m, n as r } from "./index-DPW3rJfk.js";
import { u as o, S as x } from "./useGsapReveal-Cj8iO9YV.js";
const h = [m, r];
function j() {
  const l = o();
  return e.jsx("section", {
    id: "experience",
    className: "section-shell",
    children: e.jsxs("div", {
      ref: l,
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      children: [
        e.jsx(x, {
          eyebrow: "Experience",
          title: "A timeline built like a premium product narrative",
          description:
            "Scrolling reveals a structured view of internship experience, with animated cards and clear impact-driven highlights.",
        }),
        e.jsxs("div", {
          className: "relative mx-auto max-w-4xl",
          children: [
            e.jsx("div", {
              className:
                "absolute left-5 top-0 h-full w-px bg-gradient-to-b from-white/30 via-white/15 to-transparent md:left-1/2 md:-ml-px",
            }),
            e.jsx("div", {
              className: "space-y-8",
              children: c.map((s, i) => {
                const d = h[i] ?? r,
                  t = i % 2 === 1;
                return e.jsxs(
                  n.div,
                  {
                    "data-reveal": !0,
                    className: `relative grid gap-6 md:grid-cols-2 ${t ? "md:[&>.content]:order-2" : ""}`,
                    children: [
                      e.jsx("div", {
                        className: `content ${t ? "md:col-start-2" : ""}`,
                        children: e.jsxs("div", {
                          className: "glass-card p-6",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-start justify-between gap-4",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs uppercase tracking-[0.35em] text-slate-400",
                                      children: s.company,
                                    }),
                                    e.jsx("h3", {
                                      className:
                                        "mt-2 text-2xl font-semibold text-white",
                                      children: s.title,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white",
                                  children: e.jsx(d, {}),
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "mt-3 text-sm text-slate-400",
                              children: s.duration,
                            }),
                            e.jsx("div", {
                              className: "mt-5 grid gap-3 sm:grid-cols-2",
                              children: s.highlights.map((a) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300",
                                    children: a,
                                  },
                                  a,
                                ),
                              ),
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", { className: "hidden md:block" }),
                      e.jsx("div", {
                        className: `absolute left-5 top-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg md:left-1/2 md:-ml-5 ${t ? "md:col-start-1" : ""}`,
                        children: e.jsx("div", {
                          className: "h-3 w-3 rounded-full bg-white/80",
                        }),
                      }),
                    ],
                  },
                  s.title,
                );
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { j as ExperienceSection };
