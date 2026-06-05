import {
  j as e,
  s as o,
  m as c,
  d as x,
  e as h,
  f as m,
  g as p,
  h as d,
  i as j,
  r as f,
} from "./index-DPW3rJfk.js";
import { u, S as g } from "./useGsapReveal-Cj8iO9YV.js";
const v = [x, h, m, p, d];
function i({ value: r, label: s }) {
  const l = f.useId(),
    a = 42,
    t = 2 * Math.PI * a,
    n = t - (r / 100) * t;
  return e.jsxs("div", {
    className:
      "flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/20",
    children: [
      e.jsxs("svg", {
        viewBox: "0 0 104 104",
        className: "h-24 w-24 -rotate-90",
        children: [
          e.jsx("circle", {
            cx: "52",
            cy: "52",
            r: a,
            stroke: "rgba(148,163,184,0.18)",
            strokeWidth: "10",
            fill: "none",
          }),
          e.jsx("circle", {
            cx: "52",
            cy: "52",
            r: a,
            stroke: `url(#${l})`,
            strokeWidth: "10",
            fill: "none",
            strokeLinecap: "round",
            strokeDasharray: t,
            strokeDashoffset: n,
          }),
          e.jsx("defs", {
            children: e.jsxs("linearGradient", {
              id: l,
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%",
              children: [
                e.jsx("stop", { offset: "0%", stopColor: "#3B82F6" }),
                e.jsx("stop", { offset: "50%", stopColor: "#00F5FF" }),
                e.jsx("stop", { offset: "100%", stopColor: "#8B5CF6" }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-2 text-center",
        children: [
          e.jsxs("p", {
            className: "text-lg font-semibold text-white",
            children: [r, "%"],
          }),
          e.jsx("p", { className: "text-sm text-slate-400", children: s }),
        ],
      }),
    ],
  });
}
function w() {
  const r = u();
  return e.jsx("section", {
    id: "skills",
    className: "section-shell",
    children: e.jsxs("div", {
      ref: r,
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      children: [
        e.jsx(g, {
          eyebrow: "Skills",
          title: "A structured skills system with clear depth",
          description:
            "A visual system for programming, frontend, backend, database, and tooling abilities, mixing progress rings, calm surfaces, and structured skill chips.",
        }),
        e.jsxs("div", {
          className: "grid gap-6 lg:grid-cols-[1.05fr_0.95fr]",
          children: [
            e.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
              children: o.map((s, l) => {
                const a = v[l] ?? d;
                return e.jsxs(
                  c.div,
                  {
                    "data-reveal": !0,
                    className:
                      "glass-card p-5 transition hover:-translate-y-1 hover:border-white/15",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white",
                            children: e.jsx(a, {}),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-lg font-semibold text-white",
                                children: s.title,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs uppercase tracking-[0.35em] text-slate-400",
                                children: "Track",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "mt-5 flex flex-wrap gap-2",
                        children: s.items.map((t) =>
                          e.jsx(
                            "span",
                            {
                              className:
                                "rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-accent/30 hover:text-white",
                              children: t,
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  },
                  s.title,
                );
              }),
            }),
            e.jsxs("div", {
              className: "grid gap-4",
              children: [
                e.jsxs(c.div, {
                  "data-reveal": !0,
                  className: "glass-card p-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs uppercase tracking-[0.35em] text-slate-400",
                              children: "Skill Bars",
                            }),
                            e.jsx("h3", {
                              className:
                                "mt-2 text-2xl font-semibold text-white",
                              children: "Depth across core technologies",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent",
                          children: "Optimized",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "mt-6 space-y-4",
                      children: j.map((s) =>
                        e.jsxs(
                          "div",
                          {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "mb-2 flex items-center justify-between text-sm text-slate-300",
                                children: [
                                  e.jsx("span", { children: s.label }),
                                  e.jsxs("span", { children: [s.value, "%"] }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "h-2 overflow-hidden rounded-full bg-white/8",
                                children: e.jsx("div", {
                                  className:
                                    "h-full rounded-full bg-[linear-gradient(90deg,#3B82F6,#00F5FF,#8B5CF6)]",
                                  style: { width: `${s.value}%` },
                                }),
                              }),
                            ],
                          },
                          s.label,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs(c.div, {
                  "data-reveal": !0,
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [
                    e.jsx(i, { value: 92, label: "Java" }),
                    e.jsx(i, { value: 90, label: "React" }),
                    e.jsx(i, { value: 86, label: "Python" }),
                    e.jsx(i, { value: 80, label: "ML" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { w as SkillsSection };
