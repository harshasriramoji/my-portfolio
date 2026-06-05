import {
  r as l,
  j as e,
  m as n,
  p as a,
  o as h,
  q as g,
  A as u,
} from "./index-DPW3rJfk.js";
import { u as b, S as j } from "./useGsapReveal-Cj8iO9YV.js";
function v() {
  const o = b(),
    [c, i] = l.useState(!1),
    [r, d] = l.useState({ x: 0, y: 0 }),
    x = l.useMemo(
      () =>
        `perspective(1400px) rotateX(${r.y}deg) rotateY(${r.x}deg) translateY(-4px)`,
      [r],
    );
  return e.jsx("section", {
    id: "projects",
    className: "section-shell",
    children: e.jsxs("div", {
      ref: o,
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      children: [
        e.jsx(j, {
          eyebrow: "Projects",
          title: "A project showcase that reads like a case study",
          description:
            "The featured project combines machine learning, explainability, and polished presentation in a single premium portfolio card.",
        }),
        e.jsx(n.div, {
          "data-reveal": !0,
          className: "glass-card group overflow-hidden p-0",
          onMouseMove: (t) => {
            const s = t.currentTarget.getBoundingClientRect(),
              m = ((t.clientX - s.left) / s.width - 0.5) * 12,
              p = ((t.clientY - s.top) / s.height - 0.5) * -12;
            d({ x: m, y: p });
          },
          onMouseLeave: () => d({ x: 0, y: 0 }),
          style: { transform: x },
          children: e.jsxs("div", {
            className:
              "relative min-h-[520px] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),transparent_28%),linear-gradient(135deg,rgba(17,24,39,0.96),rgba(15,23,42,0.9))] p-6 md:p-8",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.09),transparent)] opacity-0 transition duration-700 group-hover:opacity-100",
              }),
              e.jsxs("div", {
                className: "relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]",
                children: [
                  e.jsx("div", {
                    className:
                      "flex min-h-[340px] items-end rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5",
                    children: e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs uppercase tracking-[0.35em] text-slate-400",
                          children: "Project Image Placeholder",
                        }),
                        e.jsx("div", {
                          className:
                            "mt-4 flex h-72 w-full items-center justify-center rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle,rgba(37,99,235,0.16),rgba(124,58,237,0.08),transparent_70%)] text-center text-sm text-slate-300",
                          children:
                            "e.jsx(img,{src:/assets/screen-time.svg,alt:Screen time project visual,className:h-full w-full object-contain rounded-[1.7rem]})",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col justify-between gap-6",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-[0.35em] text-slate-400",
                            children: "Featured Project",
                          }),
                          e.jsx("h3", {
                            className:
                              "mt-3 max-w-xl text-3xl font-semibold text-white md:text-4xl",
                            children: a.title,
                          }),
                          e.jsx("p", {
                            className:
                              "mt-5 max-w-xl text-base leading-8 text-slate-300",
                            children: a.summary,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: a.outcome.map((t) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300",
                              children: t,
                            },
                            t,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: "mb-3 flex flex-wrap gap-2",
                            children: a.technologies.map((t) =>
                              e.jsx(
                                "span",
                                {
                                  className:
                                    "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300",
                                  children: t,
                                },
                                t,
                              ),
                            ),
                          }),
                          e.jsxs("div", {
                            className: "flex flex-wrap gap-3",
                            children: [
                              e.jsxs("button", {
                                className:
                                  "inline-flex items-center gap-2 rounded-full premium-gradient px-5 py-3 text-sm font-medium text-white",
                                onClick: () =>
                                  window.open(
                                    "https://github.com/harshasriramoji",
                                    "_blank",
                                    "noopener,noreferrer",
                                  ),
                                children: [e.jsx(h, {}), " GitHub"],
                              }),
                              e.jsxs("button", {
                                className:
                                  "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white",
                                onClick: () => i(!0),
                                children: [e.jsx(g, {}), " Live Demo"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(u, {
          children: c
            ? e.jsx(n.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 z-[95] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-xl",
                onClick: () => i(!1),
                children: e.jsxs(n.div, {
                  initial: { y: 24, opacity: 0, scale: 0.96 },
                  animate: { y: 0, opacity: 1, scale: 1 },
                  exit: { y: 12, opacity: 0, scale: 0.96 },
                  className:
                    "glass-card w-full max-w-3xl border-white/10 p-6 md:p-8",
                  onClick: (t) => t.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start justify-between gap-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs uppercase tracking-[0.35em] text-slate-400",
                              children: "Modal Preview",
                            }),
                            e.jsx("h4", {
                              className:
                                "mt-2 text-2xl font-semibold text-white",
                              children:
                                "Explainable ML for child health risk insights",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          className:
                            "rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300",
                          onClick: () => i(!1),
                          children: "Close",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-6 grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300",
                          children:
                            "Built on 9,712 records with multiple predictive models, feature explainability, and a polished risk classification workflow.",
                        }),
                        e.jsx("div", {
                          className:
                            "rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300",
                          children:
                            "Best for a live demo page, interactive notebook summary, or a hosted dashboard that surfaces the SHAP and PDP outputs.",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null,
        }),
      ],
    }),
  });
}
export { v as ProjectsSection };
