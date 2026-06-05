const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/AboutSection-Cjf8mBII.js",
      "assets/useGsapReveal-Cj8iO9YV.js",
      "assets/SkillsSection-CFRHez_c.js",
      "assets/ExperienceSection-x9ZrgYtL.js",
      "assets/ProjectsSection-BTTdaRYy.js",
      "assets/CertificationsSection-Bidgac_z.js",
      "assets/ProfilesSection-_Lrpewyw.js",
      "assets/ContactSection-CZk4_y65.js",
    ]),
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function p1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xd = { exports: {} },
  Js = {},
  Zd = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mi = Symbol.for("react.element"),
  m1 = Symbol.for("react.portal"),
  g1 = Symbol.for("react.fragment"),
  y1 = Symbol.for("react.strict_mode"),
  v1 = Symbol.for("react.profiler"),
  x1 = Symbol.for("react.provider"),
  w1 = Symbol.for("react.context"),
  S1 = Symbol.for("react.forward_ref"),
  k1 = Symbol.for("react.suspense"),
  C1 = Symbol.for("react.memo"),
  E1 = Symbol.for("react.lazy"),
  dc = Symbol.iterator;
function T1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dc && e[dc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qd = Object.assign,
  eh = {};
function dr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Jd));
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function th() {}
th.prototype = dr.prototype;
function Il(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = eh),
    (this.updater = n || Jd));
}
var zl = (Il.prototype = new th());
zl.constructor = Il;
qd(zl, dr.prototype);
zl.isPureReactComponent = !0;
var hc = Array.isArray,
  nh = Object.prototype.hasOwnProperty,
  Ol = { current: null },
  rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ih(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      nh.call(t, r) && !rh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: mi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ol.current,
  };
}
function P1(e, t) {
  return {
    $$typeof: mi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mi;
}
function M1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pc = /\/+/g;
function Po(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? M1("" + e.key)
    : t.toString(36);
}
function Qi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case mi:
          case m1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Po(o, 0) : r),
      hc(i)
        ? ((n = ""),
          e != null && (n = e.replace(pc, "$&/") + "/"),
          Qi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Fl(i) &&
            (i = P1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(pc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), hc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Po(s, a);
      o += Qi(s, t, n, l, i);
    }
  else if (((l = T1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + Po(s, a++)), (o += Qi(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Qi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function L1(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  Yi = { transition: null },
  A1 = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: Yi,
    ReactCurrentOwner: Ol,
  };
function sh() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = dr;
I.Fragment = g1;
I.Profiler = v1;
I.PureComponent = Il;
I.StrictMode = y1;
I.Suspense = k1;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
I.act = sh;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Ol.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      nh.call(t, l) &&
        !rh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: mi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: w1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: x1, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = ih;
I.createFactory = function (e) {
  var t = ih.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: S1, render: e };
};
I.isValidElement = Fl;
I.lazy = function (e) {
  return { $$typeof: E1, _payload: { _status: -1, _result: e }, _init: L1 };
};
I.memo = function (e, t) {
  return { $$typeof: C1, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Yi.transition;
  Yi.transition = {};
  try {
    e();
  } finally {
    Yi.transition = t;
  }
};
I.unstable_act = sh;
I.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Pe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
I.useId = function () {
  return Pe.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Pe.current.useRef(e);
};
I.useState = function (e) {
  return Pe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Pe.current.useTransition();
};
I.version = "18.3.1";
Zd.exports = I;
var S = Zd.exports;
const Wt = p1(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var D1 = S,
  j1 = Symbol.for("react.element"),
  R1 = Symbol.for("react.fragment"),
  V1 = Object.prototype.hasOwnProperty,
  N1 = D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function oh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) V1.call(t, r) && !_1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: j1,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: N1.current,
  };
}
Js.Fragment = R1;
Js.jsx = oh;
Js.jsxs = oh;
Xd.exports = Js;
var w = Xd.exports,
  ma = {},
  ah = { exports: {} },
  Be = {},
  lh = { exports: {} },
  uh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, V) {
    var N = M.length;
    M.push(V);
    e: for (; 0 < N; ) {
      var O = (N - 1) >>> 1,
        G = M[O];
      if (0 < i(G, V)) ((M[O] = V), (M[N] = G), (N = O));
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var V = M[0],
      N = M.pop();
    if (N !== V) {
      M[0] = N;
      e: for (var O = 0, G = M.length, fn = G >>> 1; O < fn; ) {
        var at = 2 * (O + 1) - 1,
          lt = M[at],
          De = at + 1,
          xt = M[De];
        if (0 > i(lt, N))
          De < G && 0 > i(xt, lt)
            ? ((M[O] = xt), (M[De] = N), (O = De))
            : ((M[O] = lt), (M[at] = N), (O = at));
        else if (De < G && 0 > i(xt, N)) ((M[O] = xt), (M[De] = N), (O = De));
        else break e;
      }
    }
    return V;
  }
  function i(M, V) {
    var N = M.sortIndex - V.sortIndex;
    return N !== 0 ? N : M.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= M)
        (r(u), (V.sortIndex = V.expirationTime), t(l, V));
      else break;
      V = n(u);
    }
  }
  function x(M) {
    if (((v = !1), g(M), !y))
      if (n(l) !== null) ((y = !0), ye(C));
      else {
        var V = n(u);
        V !== null && Ae(x, V.startTime - M);
      }
  }
  function C(M, V) {
    ((y = !1), v && ((v = !1), p(E), (E = -1)), (m = !0));
    var N = d;
    try {
      for (
        g(V), f = n(l);
        f !== null && (!(f.expirationTime > V) || (M && !_()));
      ) {
        var O = f.callback;
        if (typeof O == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var G = O(f.expirationTime <= V);
          ((V = e.unstable_now()),
            typeof G == "function" ? (f.callback = G) : f === n(l) && r(l),
            g(V));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var fn = !0;
      else {
        var at = n(u);
        (at !== null && Ae(x, at.startTime - V), (fn = !1));
      }
      return fn;
    } finally {
      ((f = null), (d = N), (m = !1));
    }
  }
  var P = !1,
    T = null,
    E = -1,
    D = 5,
    A = -1;
  function _() {
    return !(e.unstable_now() - A < D);
  }
  function B() {
    if (T !== null) {
      var M = e.unstable_now();
      A = M;
      var V = !0;
      try {
        V = T(!0, M);
      } finally {
        V ? q() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var q;
  if (typeof h == "function")
    q = function () {
      h(B);
    };
  else if (typeof MessageChannel < "u") {
    var de = new MessageChannel(),
      Le = de.port2;
    ((de.port1.onmessage = B),
      (q = function () {
        Le.postMessage(null);
      }));
  } else
    q = function () {
      k(B, 0);
    };
  function ye(M) {
    ((T = M), P || ((P = !0), q()));
  }
  function Ae(M, V) {
    E = k(function () {
      M(e.unstable_now());
    }, V);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), ye(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = d;
      }
      var N = d;
      d = V;
      try {
        return M();
      } finally {
        d = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var N = d;
      d = M;
      try {
        return V();
      } finally {
        d = N;
      }
    }),
    (e.unstable_scheduleCallback = function (M, V, N) {
      var O = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? O + N : O))
          : (N = O),
        M)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = N + G),
        (M = {
          id: c++,
          callback: V,
          priorityLevel: M,
          startTime: N,
          expirationTime: G,
          sortIndex: -1,
        }),
        N > O
          ? ((M.sortIndex = N),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (v ? (p(E), (E = -1)) : (v = !0), Ae(x, N - O)))
          : ((M.sortIndex = G), t(l, M), y || m || ((y = !0), ye(C))),
        M
      );
    }),
    (e.unstable_shouldYield = _),
    (e.unstable_wrapCallback = function (M) {
      var V = d;
      return function () {
        var N = d;
        d = V;
        try {
          return M.apply(this, arguments);
        } finally {
          d = N;
        }
      };
    }));
})(uh);
lh.exports = uh;
var I1 = lh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z1 = S,
  be = I1;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ch = new Set(),
  Gr = {};
function jn(e, t) {
  (nr(e, t), nr(e + "Capture", t));
}
function nr(e, t) {
  for (Gr[e] = t, e = 0; e < t.length; e++) ch.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ga = Object.prototype.hasOwnProperty,
  O1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mc = {},
  gc = {};
function F1(e) {
  return ga.call(gc, e)
    ? !0
    : ga.call(mc, e)
      ? !1
      : O1.test(e)
        ? (gc[e] = !0)
        : ((mc[e] = !0), !1);
}
function b1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function B1(e, t, n, r) {
  if (t === null || typeof t > "u" || b1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ge[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ge[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ge[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ge[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bl = /[\-:]([a-z])/g;
function Bl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, Bl);
    ge[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bl, Bl);
    ge[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bl, Bl);
  ge[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $l(e, t, n, r) {
  var i = ge.hasOwnProperty(t) ? ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (B1(t, n, i, r) && (n = null),
    r || i === null
      ? F1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pi = Symbol.for("react.element"),
  _n = Symbol.for("react.portal"),
  In = Symbol.for("react.fragment"),
  Ul = Symbol.for("react.strict_mode"),
  ya = Symbol.for("react.profiler"),
  fh = Symbol.for("react.provider"),
  dh = Symbol.for("react.context"),
  Wl = Symbol.for("react.forward_ref"),
  va = Symbol.for("react.suspense"),
  xa = Symbol.for("react.suspense_list"),
  Hl = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  hh = Symbol.for("react.offscreen"),
  yc = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yc && e[yc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Mo;
function Ar(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var Lo = !1;
function Ao(e, t) {
  if (!e || Lo) return "";
  Lo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((Lo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ar(e) : "";
}
function $1(e) {
  switch (e.tag) {
    case 5:
      return Ar(e.type);
    case 16:
      return Ar("Lazy");
    case 13:
      return Ar("Suspense");
    case 19:
      return Ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ao(e.type, !1)), e);
    case 11:
      return ((e = Ao(e.type.render, !1)), e);
    case 1:
      return ((e = Ao(e.type, !0)), e);
    default:
      return "";
  }
}
function wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case In:
      return "Fragment";
    case _n:
      return "Portal";
    case ya:
      return "Profiler";
    case Ul:
      return "StrictMode";
    case va:
      return "Suspense";
    case xa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dh:
        return (e.displayName || "Context") + ".Consumer";
      case fh:
        return (e._context.displayName || "Context") + ".Provider";
      case Wl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hl:
        return (
          (t = e.displayName || null),
          t !== null ? t : wa(e.type) || "Memo"
        );
      case It:
        ((t = e._payload), (e = e._init));
        try {
          return wa(e(t));
        } catch {}
    }
  return null;
}
function U1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wa(t);
    case 8:
      return t === Ul ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ph(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function W1(e) {
  var t = ph(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Mi(e) {
  e._valueTracker || (e._valueTracker = W1(e));
}
function mh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ph(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function gh(e, t) {
  ((t = t.checked), t != null && $l(e, "checked", t, !1));
}
function ka(e, t) {
  gh(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ca(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ca(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function xc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ca(e, t, n) {
  (t !== "number" || gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dr = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + qt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Dr(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: qt(n) };
}
function yh(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Sc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Li,
  xh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Li = Li || document.createElement("div"),
          Li.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Li.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  H1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nr).forEach(function (e) {
  H1.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nr[t] = Nr[e]));
  });
});
function wh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nr.hasOwnProperty(e) && Nr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Sh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = wh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var K1 = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Pa(e, t) {
  if (t) {
    if (K1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Ma(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var La = null;
function Kl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Aa = null,
  Zn = null,
  Jn = null;
function kc(e) {
  if ((e = vi(e))) {
    if (typeof Aa != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = ro(t)), Aa(e.stateNode, e.type, t));
  }
}
function kh(e) {
  Zn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Zn = e);
}
function Ch() {
  if (Zn) {
    var e = Zn,
      t = Jn;
    if (((Jn = Zn = null), kc(e), t)) for (e = 0; e < t.length; e++) kc(t[e]);
  }
}
function Eh(e, t) {
  return e(t);
}
function Th() {}
var Do = !1;
function Ph(e, t, n) {
  if (Do) return e(t, n);
  Do = !0;
  try {
    return Eh(e, t, n);
  } finally {
    ((Do = !1), (Zn !== null || Jn !== null) && (Th(), Ch()));
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ro(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Da = !1;
if (Pt)
  try {
    var Sr = {};
    (Object.defineProperty(Sr, "passive", {
      get: function () {
        Da = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr));
  } catch {
    Da = !1;
  }
function G1(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var _r = !1,
  ys = null,
  vs = !1,
  ja = null,
  Q1 = {
    onError: function (e) {
      ((_r = !0), (ys = e));
    },
  };
function Y1(e, t, n, r, i, s, o, a, l) {
  ((_r = !1), (ys = null), G1.apply(Q1, arguments));
}
function X1(e, t, n, r, i, s, o, a, l) {
  if ((Y1.apply(this, arguments), _r)) {
    if (_r) {
      var u = ys;
      ((_r = !1), (ys = null));
    } else throw Error(L(198));
    vs || ((vs = !0), (ja = u));
  }
}
function Rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Cc(e) {
  if (Rn(e) !== e) throw Error(L(188));
}
function Z1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Cc(i), e);
        if (s === r) return (Cc(i), t);
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Lh(e) {
  return ((e = Z1(e)), e !== null ? Ah(e) : null);
}
function Ah(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ah(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dh = be.unstable_scheduleCallback,
  Ec = be.unstable_cancelCallback,
  J1 = be.unstable_shouldYield,
  q1 = be.unstable_requestPaint,
  ee = be.unstable_now,
  eg = be.unstable_getCurrentPriorityLevel,
  Gl = be.unstable_ImmediatePriority,
  jh = be.unstable_UserBlockingPriority,
  xs = be.unstable_NormalPriority,
  tg = be.unstable_LowPriority,
  Rh = be.unstable_IdlePriority,
  qs = null,
  mt = null;
function ng(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : sg,
  rg = Math.log,
  ig = Math.LN2;
function sg(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((rg(e) / ig) | 0)) | 0);
}
var Ai = 64,
  Di = 4194304;
function jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ws(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = jr(a)) : ((s &= o), s !== 0 && (r = jr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = jr(o)) : s !== 0 && (r = jr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function og(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ag(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - rt(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = og(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function Ra(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vh() {
  var e = Ai;
  return ((Ai <<= 1), !(Ai & 4194240) && (Ai = 64), e);
}
function jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n));
}
function lg(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function Ql(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var F = 0;
function Nh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var _h,
  Yl,
  Ih,
  zh,
  Oh,
  Va = !1,
  ji = [],
  Ht = null,
  Kt = null,
  Gt = null,
  Xr = new Map(),
  Zr = new Map(),
  Ot = [],
  ug =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Tc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zr.delete(t.pointerId);
  }
}
function kr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = vi(t)), t !== null && Yl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function cg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Ht = kr(Ht, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Kt = kr(Kt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((Gt = kr(Gt, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Xr.set(s, kr(Xr.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Zr.set(s, kr(Zr.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Fh(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mh(n)), t !== null)) {
          ((e.blockedOn = t),
            Oh(e.priority, function () {
              Ih(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Na(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((La = r), n.target.dispatchEvent(r), (La = null));
    } else return ((t = vi(n)), t !== null && Yl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Pc(e, t, n) {
  Xi(e) && n.delete(t);
}
function fg() {
  ((Va = !1),
    Ht !== null && Xi(Ht) && (Ht = null),
    Kt !== null && Xi(Kt) && (Kt = null),
    Gt !== null && Xi(Gt) && (Gt = null),
    Xr.forEach(Pc),
    Zr.forEach(Pc));
}
function Cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Va ||
      ((Va = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, fg)));
}
function Jr(e) {
  function t(i) {
    return Cr(i, e);
  }
  if (0 < ji.length) {
    Cr(ji[0], e);
    for (var n = 1; n < ji.length; n++) {
      var r = ji[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && Cr(Ht, e),
      Kt !== null && Cr(Kt, e),
      Gt !== null && Cr(Gt, e),
      Xr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    ((r = Ot[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    (Fh(n), n.blockedOn === null && Ot.shift());
}
var qn = jt.ReactCurrentBatchConfig,
  Ss = !0;
function dg(e, t, n, r) {
  var i = F,
    s = qn.transition;
  qn.transition = null;
  try {
    ((F = 1), Xl(e, t, n, r));
  } finally {
    ((F = i), (qn.transition = s));
  }
}
function hg(e, t, n, r) {
  var i = F,
    s = qn.transition;
  qn.transition = null;
  try {
    ((F = 4), Xl(e, t, n, r));
  } finally {
    ((F = i), (qn.transition = s));
  }
}
function Xl(e, t, n, r) {
  if (Ss) {
    var i = Na(e, t, n, r);
    if (i === null) (Bo(e, t, r, ks, n), Tc(e, r));
    else if (cg(i, e, t, n, r)) r.stopPropagation();
    else if ((Tc(e, r), t & 4 && -1 < ug.indexOf(e))) {
      for (; i !== null; ) {
        var s = vi(i);
        if (
          (s !== null && _h(s),
          (s = Na(e, t, n, r)),
          s === null && Bo(e, t, r, ks, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Bo(e, t, r, null, n);
  }
}
var ks = null;
function Na(e, t, n, r) {
  if (((ks = null), (e = Kl(r)), (e = yn(e)), e !== null))
    if (((t = Rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ks = e), null);
}
function bh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eg()) {
        case Gl:
          return 1;
        case jh:
          return 4;
        case xs:
        case tg:
          return 16;
        case Rh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  Zl = null,
  Zi = null;
function Bh() {
  if (Zi) return Zi;
  var e,
    t = Zl,
    n = t.length,
    r,
    i = "value" in Bt ? Bt.value : Bt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Zi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ji(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ri() {
  return !0;
}
function Mc() {
  return !1;
}
function $e(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ri
        : Mc),
      (this.isPropagationStopped = Mc),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ri));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ri));
      },
      persist: function () {},
      isPersistent: Ri,
    }),
    t
  );
}
var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jl = $e(hr),
  yi = X({}, hr, { view: 0, detail: 0 }),
  pg = $e(yi),
  Ro,
  Vo,
  Er,
  eo = X({}, yi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ql,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Er &&
            (Er && e.type === "mousemove"
              ? ((Ro = e.screenX - Er.screenX), (Vo = e.screenY - Er.screenY))
              : (Vo = Ro = 0),
            (Er = e)),
          Ro);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vo;
    },
  }),
  Lc = $e(eo),
  mg = X({}, eo, { dataTransfer: 0 }),
  gg = $e(mg),
  yg = X({}, yi, { relatedTarget: 0 }),
  No = $e(yg),
  vg = X({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xg = $e(vg),
  wg = X({}, hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sg = $e(wg),
  kg = X({}, hr, { data: 0 }),
  Ac = $e(kg),
  Cg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Eg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tg[e]) ? !!t[e] : !1;
}
function ql() {
  return Pg;
}
var Mg = X({}, yi, {
    key: function (e) {
      if (e.key) {
        var t = Cg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ji(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Eg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ql,
    charCode: function (e) {
      return e.type === "keypress" ? Ji(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ji(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Lg = $e(Mg),
  Ag = X({}, eo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dc = $e(Ag),
  Dg = X({}, yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ql,
  }),
  jg = $e(Dg),
  Rg = X({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vg = $e(Rg),
  Ng = X({}, eo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _g = $e(Ng),
  Ig = [9, 13, 27, 32],
  eu = Pt && "CompositionEvent" in window,
  Ir = null;
Pt && "documentMode" in document && (Ir = document.documentMode);
var zg = Pt && "TextEvent" in window && !Ir,
  $h = Pt && (!eu || (Ir && 8 < Ir && 11 >= Ir)),
  jc = " ",
  Rc = !1;
function Uh(e, t) {
  switch (e) {
    case "keyup":
      return Ig.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wh(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var zn = !1;
function Og(e, t) {
  switch (e) {
    case "compositionend":
      return Wh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rc = !0), jc);
    case "textInput":
      return ((e = t.data), e === jc && Rc ? null : e);
    default:
      return null;
  }
}
function Fg(e, t) {
  if (zn)
    return e === "compositionend" || (!eu && Uh(e, t))
      ? ((e = Bh()), (Zi = Zl = Bt = null), (zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $h && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bg[e.type] : t === "textarea";
}
function Hh(e, t, n, r) {
  (kh(r),
    (t = Cs(t, "onChange")),
    0 < t.length &&
      ((n = new Jl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var zr = null,
  qr = null;
function Bg(e) {
  np(e, 0);
}
function to(e) {
  var t = bn(e);
  if (mh(t)) return e;
}
function $g(e, t) {
  if (e === "change") return t;
}
var Kh = !1;
if (Pt) {
  var _o;
  if (Pt) {
    var Io = "oninput" in document;
    if (!Io) {
      var Nc = document.createElement("div");
      (Nc.setAttribute("oninput", "return;"),
        (Io = typeof Nc.oninput == "function"));
    }
    _o = Io;
  } else _o = !1;
  Kh = _o && (!document.documentMode || 9 < document.documentMode);
}
function _c() {
  zr && (zr.detachEvent("onpropertychange", Gh), (qr = zr = null));
}
function Gh(e) {
  if (e.propertyName === "value" && to(qr)) {
    var t = [];
    (Hh(t, qr, e, Kl(e)), Ph(Bg, t));
  }
}
function Ug(e, t, n) {
  e === "focusin"
    ? (_c(), (zr = t), (qr = n), zr.attachEvent("onpropertychange", Gh))
    : e === "focusout" && _c();
}
function Wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return to(qr);
}
function Hg(e, t) {
  if (e === "click") return to(t);
}
function Kg(e, t) {
  if (e === "input" || e === "change") return to(t);
}
function Gg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : Gg;
function ei(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ga.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function Ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zc(e, t) {
  var n = Ic(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ic(n);
  }
}
function Qh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Qh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Yh() {
  for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gs(e.document);
  }
  return t;
}
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qg(e) {
  var t = Yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = zc(n, s)));
        var o = zc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Yg = Pt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  _a = null,
  Or = null,
  Ia = !1;
function Oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ia ||
    On == null ||
    On !== gs(r) ||
    ((r = On),
    "selectionStart" in r && tu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Or && ei(Or, r)) ||
      ((Or = r),
      (r = Cs(_a, "onSelect")),
      0 < r.length &&
        ((t = new Jl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function Vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: Vi("Animation", "AnimationEnd"),
    animationiteration: Vi("Animation", "AnimationIteration"),
    animationstart: Vi("Animation", "AnimationStart"),
    transitionend: Vi("Transition", "TransitionEnd"),
  },
  zo = {},
  Xh = {};
Pt &&
  ((Xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function no(e) {
  if (zo[e]) return zo[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xh) return (zo[e] = t[n]);
  return e;
}
var Zh = no("animationend"),
  Jh = no("animationiteration"),
  qh = no("animationstart"),
  ep = no("transitionend"),
  tp = new Map(),
  Fc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function sn(e, t) {
  (tp.set(e, t), jn(t, [e]));
}
for (var Oo = 0; Oo < Fc.length; Oo++) {
  var Fo = Fc[Oo],
    Xg = Fo.toLowerCase(),
    Zg = Fo[0].toUpperCase() + Fo.slice(1);
  sn(Xg, "on" + Zg);
}
sn(Zh, "onAnimationEnd");
sn(Jh, "onAnimationIteration");
sn(qh, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(ep, "onTransitionEnd");
nr("onMouseEnter", ["mouseout", "mouseover"]);
nr("onMouseLeave", ["mouseout", "mouseover"]);
nr("onPointerEnter", ["pointerout", "pointerover"]);
nr("onPointerLeave", ["pointerout", "pointerover"]);
jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Jg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function bc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), X1(r, t, void 0, e), (e.currentTarget = null));
}
function np(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (bc(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (bc(i, a, u), (s = l));
        }
    }
  }
  if (vs) throw ((e = ja), (vs = !1), (ja = null), e);
}
function W(e, t) {
  var n = t[Ba];
  n === void 0 && (n = t[Ba] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rp(t, e, 2, !1), n.add(r));
}
function bo(e, t, n) {
  var r = 0;
  (t && (r |= 4), rp(n, e, r, t));
}
var Ni = "_reactListening" + Math.random().toString(36).slice(2);
function ti(e) {
  if (!e[Ni]) {
    ((e[Ni] = !0),
      ch.forEach(function (n) {
        n !== "selectionchange" && (Jg.has(n) || bo(n, !1, e), bo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ni] || ((t[Ni] = !0), bo("selectionchange", !1, t));
  }
}
function rp(e, t, n, r) {
  switch (bh(t)) {
    case 1:
      var i = dg;
      break;
    case 4:
      i = hg;
      break;
    default:
      i = Xl;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Da ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Bo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = yn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ph(function () {
    var u = s,
      c = Kl(n),
      f = [];
    e: {
      var d = tp.get(e);
      if (d !== void 0) {
        var m = Jl,
          y = e;
        switch (e) {
          case "keypress":
            if (Ji(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Lg;
            break;
          case "focusin":
            ((y = "focus"), (m = No));
            break;
          case "focusout":
            ((y = "blur"), (m = No));
            break;
          case "beforeblur":
          case "afterblur":
            m = No;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Lc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = gg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = jg;
            break;
          case Zh:
          case Jh:
          case qh:
            m = xg;
            break;
          case ep:
            m = Vg;
            break;
          case "scroll":
            m = pg;
            break;
          case "wheel":
            m = _g;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Sg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Dc;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              p !== null && ((x = Yr(h, p)), x != null && v.push(ni(h, x, g)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== La &&
            (y = n.relatedTarget || n.fromElement) &&
            (yn(y) || y[Mt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? yn(y) : null),
              y !== null &&
                ((k = Rn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Lc),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Dc),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = m == null ? d : bn(m)),
            (g = y == null ? d : bn(y)),
            (d = new v(x, h + "leave", m, n, c)),
            (d.target = k),
            (d.relatedTarget = g),
            (x = null),
            yn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = g),
              (v.relatedTarget = k),
              (x = v)),
            (k = x),
            m && y)
          )
            t: {
              for (v = m, p = y, h = 0, g = v; g; g = Vn(g)) h++;
              for (g = 0, x = p; x; x = Vn(x)) g++;
              for (; 0 < h - g; ) ((v = Vn(v)), h--);
              for (; 0 < g - h; ) ((p = Vn(p)), g--);
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                ((v = Vn(v)), (p = Vn(p)));
              }
              v = null;
            }
          else v = null;
          (m !== null && Bc(f, d, m, v, !1),
            y !== null && k !== null && Bc(f, k, y, v, !0));
        }
      }
      e: {
        if (
          ((d = u ? bn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var C = $g;
        else if (Vc(d))
          if (Kh) C = Kg;
          else {
            C = Wg;
            var P = Ug;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = Hg);
        if (C && (C = C(e, u))) {
          Hh(f, C, n, c);
          break e;
        }
        (P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            Ca(d, "number", d.value));
      }
      switch (((P = u ? bn(u) : window), e)) {
        case "focusin":
          (Vc(P) || P.contentEditable === "true") &&
            ((On = P), (_a = u), (Or = null));
          break;
        case "focusout":
          Or = _a = On = null;
          break;
        case "mousedown":
          Ia = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ia = !1), Oc(f, n, c));
          break;
        case "selectionchange":
          if (Yg) break;
        case "keydown":
        case "keyup":
          Oc(f, n, c);
      }
      var T;
      if (eu)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        zn
          ? Uh(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      (E &&
        ($h &&
          n.locale !== "ko" &&
          (zn || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && zn && (T = Bh())
            : ((Bt = c),
              (Zl = "value" in Bt ? Bt.value : Bt.textContent),
              (zn = !0))),
        (P = Cs(u, E)),
        0 < P.length &&
          ((E = new Ac(E, e, null, n, c)),
          f.push({ event: E, listeners: P }),
          T ? (E.data = T) : ((T = Wh(n)), T !== null && (E.data = T)))),
        (T = zg ? Og(e, n) : Fg(e, n)) &&
          ((u = Cs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ac("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T))));
    }
    np(f, t);
  });
}
function ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Yr(e, n)),
      s != null && r.unshift(ni(e, s, i)),
      (s = Yr(e, t)),
      s != null && r.push(ni(e, s, i))),
      (e = e.return));
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Yr(n, s)), l != null && o.unshift(ni(n, l, a)))
        : i || ((l = Yr(n, s)), l != null && o.push(ni(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var qg = /\r\n?/g,
  ey = /\u0000|\uFFFD/g;
function $c(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qg,
      `
`,
    )
    .replace(ey, "");
}
function _i(e, t, n) {
  if (((t = $c(t)), $c(e) !== t && n)) throw Error(L(425));
}
function Es() {}
var za = null,
  Oa = null;
function Fa(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ba = typeof setTimeout == "function" ? setTimeout : void 0,
  ty = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uc = typeof Promise == "function" ? Promise : void 0,
  ny =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uc < "u"
        ? function (e) {
            return Uc.resolve(null).then(e).catch(ry);
          }
        : ba;
function ry(e) {
  setTimeout(function () {
    throw e;
  });
}
function $o(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Jr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var pr = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + pr,
  ri = "__reactProps$" + pr,
  Mt = "__reactContainer$" + pr,
  Ba = "__reactEvents$" + pr,
  iy = "__reactListeners$" + pr,
  sy = "__reactHandles$" + pr;
function yn(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wc(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = Wc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function vi(e) {
  return (
    (e = e[ht] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function ro(e) {
  return e[ri] || null;
}
var $a = [],
  Bn = -1;
function on(e) {
  return { current: e };
}
function H(e) {
  0 > Bn || ((e.current = $a[Bn]), ($a[Bn] = null), Bn--);
}
function U(e, t) {
  (Bn++, ($a[Bn] = e.current), (e.current = t));
}
var en = {},
  Se = on(en),
  Ve = on(!1),
  Pn = en;
function rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return ((e = e.childContextTypes), e != null);
}
function Ts() {
  (H(Ve), H(Se));
}
function Hc(e, t, n) {
  if (Se.current !== en) throw Error(L(168));
  (U(Se, t), U(Ve, n));
}
function ip(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, U1(e) || "Unknown", i));
  return X({}, n, r);
}
function Ps(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (Pn = Se.current),
    U(Se, e),
    U(Ve, Ve.current),
    !0
  );
}
function Kc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  (n
    ? ((e = ip(e, t, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ve),
      H(Se),
      U(Se, e))
    : H(Ve),
    U(Ve, n));
}
var kt = null,
  io = !1,
  Uo = !1;
function sp(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function oy(e) {
  ((io = !0), sp(e));
}
function an() {
  if (!Uo && kt !== null) {
    Uo = !0;
    var e = 0,
      t = F;
    try {
      var n = kt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((kt = null), (io = !1));
    } catch (i) {
      throw (kt !== null && (kt = kt.slice(e + 1)), Dh(Gl, an), i);
    } finally {
      ((F = t), (Uo = !1));
    }
  }
  return null;
}
var $n = [],
  Un = 0,
  Ms = null,
  Ls = 0,
  Ue = [],
  We = 0,
  Mn = null,
  Ct = 1,
  Et = "";
function pn(e, t) {
  (($n[Un++] = Ls), ($n[Un++] = Ms), (Ms = e), (Ls = t));
}
function op(e, t, n) {
  ((Ue[We++] = Ct), (Ue[We++] = Et), (Ue[We++] = Mn), (Mn = e));
  var r = Ct;
  e = Et;
  var i = 32 - rt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - rt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ct = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (Et = s + e));
  } else ((Ct = (1 << s) | (n << i) | r), (Et = e));
}
function nu(e) {
  e.return !== null && (pn(e, 1), op(e, 1, 0));
}
function ru(e) {
  for (; e === Ms; )
    ((Ms = $n[--Un]), ($n[Un] = null), (Ls = $n[--Un]), ($n[Un] = null));
  for (; e === Mn; )
    ((Mn = Ue[--We]),
      (Ue[We] = null),
      (Et = Ue[--We]),
      (Ue[We] = null),
      (Ct = Ue[--We]),
      (Ue[We] = null));
}
var Fe = null,
  Oe = null,
  K = !1,
  nt = null;
function ap(e, t) {
  var n = He(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Gc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Oe = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Oe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mn !== null ? { id: Ct, overflow: Et } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Oe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wa(e) {
  if (K) {
    var t = Oe;
    if (t) {
      var n = t;
      if (!Gc(e, t)) {
        if (Ua(e)) throw Error(L(418));
        t = Qt(n.nextSibling);
        var r = Fe;
        t && Gc(e, t)
          ? ap(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Fe = e));
      }
    } else {
      if (Ua(e)) throw Error(L(418));
      ((e.flags = (e.flags & -4097) | 2), (K = !1), (Fe = e));
    }
  }
}
function Qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Ii(e) {
  if (e !== Fe) return !1;
  if (!K) return (Qc(e), (K = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fa(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if (Ua(e)) throw (lp(), Error(L(418)));
    for (; t; ) (ap(e, t), (t = Qt(t.nextSibling)));
  }
  if ((Qc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Oe = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Oe = null;
    }
  } else Oe = Fe ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function lp() {
  for (var e = Oe; e; ) e = Qt(e.nextSibling);
}
function ir() {
  ((Oe = Fe = null), (K = !1));
}
function iu(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var ay = jt.ReactCurrentBatchConfig;
function Tr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function zi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Yc(e) {
  var t = e._init;
  return t(e._payload);
}
function up(e) {
  function t(p, h) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [h]), (p.flags |= 16)) : g.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = Jt(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function s(p, h, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((p.flags |= 2), h) : g)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = Xo(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function l(p, h, g, x) {
    var C = g.type;
    return C === In
      ? c(p, h, g.props.children, x, g.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === It &&
              Yc(C) === h.type))
        ? ((x = i(h, g.props)), (x.ref = Tr(p, h, g)), (x.return = p), x)
        : ((x = ss(g.type, g.key, g.props, null, p.mode, x)),
          (x.ref = Tr(p, h, g)),
          (x.return = p),
          x);
  }
  function u(p, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Zo(g, p.mode, x)), (h.return = p), h)
      : ((h = i(h, g.children || [])), (h.return = p), h);
  }
  function c(p, h, g, x, C) {
    return h === null || h.tag !== 7
      ? ((h = Cn(g, p.mode, x, C)), (h.return = p), h)
      : ((h = i(h, g)), (h.return = p), h);
  }
  function f(p, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Xo("" + h, p.mode, g)), (h.return = p), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Pi:
          return (
            (g = ss(h.type, h.key, h.props, null, p.mode, g)),
            (g.ref = Tr(p, null, h)),
            (g.return = p),
            g
          );
        case _n:
          return ((h = Zo(h, p.mode, g)), (h.return = p), h);
        case It:
          var x = h._init;
          return f(p, x(h._payload), g);
      }
      if (Dr(h) || wr(h))
        return ((h = Cn(h, p.mode, g, null)), (h.return = p), h);
      zi(p, h);
    }
    return null;
  }
  function d(p, h, g, x) {
    var C = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : a(p, h, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pi:
          return g.key === C ? l(p, h, g, x) : null;
        case _n:
          return g.key === C ? u(p, h, g, x) : null;
        case It:
          return ((C = g._init), d(p, h, C(g._payload), x));
      }
      if (Dr(g) || wr(g)) return C !== null ? null : c(p, h, g, x, null);
      zi(p, g);
    }
    return null;
  }
  function m(p, h, g, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((p = p.get(g) || null), a(h, p, "" + x, C));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Pi:
          return (
            (p = p.get(x.key === null ? g : x.key) || null),
            l(h, p, x, C)
          );
        case _n:
          return (
            (p = p.get(x.key === null ? g : x.key) || null),
            u(h, p, x, C)
          );
        case It:
          var P = x._init;
          return m(p, h, g, P(x._payload), C);
      }
      if (Dr(x) || wr(x)) return ((p = p.get(g) || null), c(h, p, x, C, null));
      zi(h, x);
    }
    return null;
  }
  function y(p, h, g, x) {
    for (
      var C = null, P = null, T = h, E = (h = 0), D = null;
      T !== null && E < g.length;
      E++
    ) {
      T.index > E ? ((D = T), (T = null)) : (D = T.sibling);
      var A = d(p, T, g[E], x);
      if (A === null) {
        T === null && (T = D);
        break;
      }
      (e && T && A.alternate === null && t(p, T),
        (h = s(A, h, E)),
        P === null ? (C = A) : (P.sibling = A),
        (P = A),
        (T = D));
    }
    if (E === g.length) return (n(p, T), K && pn(p, E), C);
    if (T === null) {
      for (; E < g.length; E++)
        ((T = f(p, g[E], x)),
          T !== null &&
            ((h = s(T, h, E)),
            P === null ? (C = T) : (P.sibling = T),
            (P = T)));
      return (K && pn(p, E), C);
    }
    for (T = r(p, T); E < g.length; E++)
      ((D = m(T, p, E, g[E], x)),
        D !== null &&
          (e && D.alternate !== null && T.delete(D.key === null ? E : D.key),
          (h = s(D, h, E)),
          P === null ? (C = D) : (P.sibling = D),
          (P = D)));
    return (
      e &&
        T.forEach(function (_) {
          return t(p, _);
        }),
      K && pn(p, E),
      C
    );
  }
  function v(p, h, g, x) {
    var C = wr(g);
    if (typeof C != "function") throw Error(L(150));
    if (((g = C.call(g)), g == null)) throw Error(L(151));
    for (
      var P = (C = null), T = h, E = (h = 0), D = null, A = g.next();
      T !== null && !A.done;
      E++, A = g.next()
    ) {
      T.index > E ? ((D = T), (T = null)) : (D = T.sibling);
      var _ = d(p, T, A.value, x);
      if (_ === null) {
        T === null && (T = D);
        break;
      }
      (e && T && _.alternate === null && t(p, T),
        (h = s(_, h, E)),
        P === null ? (C = _) : (P.sibling = _),
        (P = _),
        (T = D));
    }
    if (A.done) return (n(p, T), K && pn(p, E), C);
    if (T === null) {
      for (; !A.done; E++, A = g.next())
        ((A = f(p, A.value, x)),
          A !== null &&
            ((h = s(A, h, E)),
            P === null ? (C = A) : (P.sibling = A),
            (P = A)));
      return (K && pn(p, E), C);
    }
    for (T = r(p, T); !A.done; E++, A = g.next())
      ((A = m(T, p, E, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? E : A.key),
          (h = s(A, h, E)),
          P === null ? (C = A) : (P.sibling = A),
          (P = A)));
    return (
      e &&
        T.forEach(function (B) {
          return t(p, B);
        }),
      K && pn(p, E),
      C
    );
  }
  function k(p, h, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === In &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Pi:
          e: {
            for (var C = g.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === In)) {
                  if (P.tag === 7) {
                    (n(p, P.sibling),
                      (h = i(P, g.props.children)),
                      (h.return = p),
                      (p = h));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === It &&
                    Yc(C) === P.type)
                ) {
                  (n(p, P.sibling),
                    (h = i(P, g.props)),
                    (h.ref = Tr(p, P, g)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            g.type === In
              ? ((h = Cn(g.props.children, p.mode, x, g.key)),
                (h.return = p),
                (p = h))
              : ((x = ss(g.type, g.key, g.props, null, p.mode, x)),
                (x.ref = Tr(p, h, g)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case _n:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  (n(p, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = p),
                    (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = Zo(g, p.mode, x)), (h.return = p), (p = h));
          }
          return o(p);
        case It:
          return ((P = g._init), k(p, h, P(g._payload), x));
      }
      if (Dr(g)) return y(p, h, g, x);
      if (wr(g)) return v(p, h, g, x);
      zi(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, g)), (h.return = p), (p = h))
          : (n(p, h), (h = Xo(g, p.mode, x)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return k;
}
var sr = up(!0),
  cp = up(!1),
  As = on(null),
  Ds = null,
  Wn = null,
  su = null;
function ou() {
  su = Wn = Ds = null;
}
function au(e) {
  var t = As.current;
  (H(As), (e._currentValue = t));
}
function Ha(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function er(e, t) {
  ((Ds = e),
    (su = Wn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null)));
}
function Ye(e) {
  var t = e._currentValue;
  if (su !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wn === null)) {
      if (Ds === null) throw Error(L(308));
      ((Wn = e), (Ds.dependencies = { lanes: 0, firstContext: e }));
    } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function lu(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function fp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), lu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function uu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function dp(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), lu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function qi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n));
  }
}
function Xc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function js(e, t, n, r) {
  var i = e.updateQueue;
  zt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = X({}, f, d);
              break e;
            case 2:
              zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (o |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((An |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Zc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var xi = {},
  gt = on(xi),
  ii = on(xi),
  si = on(xi);
function xn(e) {
  if (e === xi) throw Error(L(174));
  return e;
}
function cu(e, t) {
  switch ((U(si, t), U(ii, e), U(gt, xi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ta(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ta(t, e)));
  }
  (H(gt), U(gt, t));
}
function or() {
  (H(gt), H(ii), H(si));
}
function hp(e) {
  xn(si.current);
  var t = xn(gt.current),
    n = Ta(t, e.type);
  t !== n && (U(ii, e), U(gt, n));
}
function fu(e) {
  ii.current === e && (H(gt), H(ii));
}
var Q = on(0);
function Rs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Wo = [];
function du() {
  for (var e = 0; e < Wo.length; e++)
    Wo[e]._workInProgressVersionPrimary = null;
  Wo.length = 0;
}
var es = jt.ReactCurrentDispatcher,
  Ho = jt.ReactCurrentBatchConfig,
  Ln = 0,
  Y = null,
  se = null,
  le = null,
  Vs = !1,
  Fr = !1,
  oi = 0,
  ly = 0;
function ve() {
  throw Error(L(321));
}
function hu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function pu(e, t, n, r, i, s) {
  if (
    ((Ln = s),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (es.current = e === null || e.memoizedState === null ? dy : hy),
    (e = n(r, i)),
    Fr)
  ) {
    s = 0;
    do {
      if (((Fr = !1), (oi = 0), 25 <= s)) throw Error(L(301));
      ((s += 1),
        (le = se = null),
        (t.updateQueue = null),
        (es.current = py),
        (e = n(r, i)));
    } while (Fr);
  }
  if (
    ((es.current = Ns),
    (t = se !== null && se.next !== null),
    (Ln = 0),
    (le = se = Y = null),
    (Vs = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function mu() {
  var e = oi !== 0;
  return ((oi = 0), e);
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le);
}
function Xe() {
  if (se === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) ((le = t), (se = e));
  else {
    if (e === null) throw Error(L(310));
    ((se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e));
  }
  return le;
}
function ai(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ko(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Ln & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (Y.lanes |= c),
          (An |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      ot(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (Y.lanes |= s), (An |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Go(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (ot(s, t.memoizedState) || (Re = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function pp() {}
function mp(e, t) {
  var n = Y,
    r = Xe(),
    i = t(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Re = !0)),
    (r = r.queue),
    gu(vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      li(9, yp.bind(null, n, r, i, t), void 0, null),
      fe === null)
    )
      throw Error(L(349));
    Ln & 30 || gp(n, t, i);
  }
  return i;
}
function gp(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function yp(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), xp(t) && wp(e));
}
function vp(e, t, n) {
  return n(function () {
    xp(t) && wp(e);
  });
}
function xp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function wp(e) {
  var t = Lt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function Jc(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ai,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fy.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function li(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sp() {
  return Xe().memoizedState;
}
function ts(e, t, n, r) {
  var i = ct();
  ((Y.flags |= e),
    (i.memoizedState = li(1 | t, n, void 0, r === void 0 ? null : r)));
}
function so(e, t, n, r) {
  var i = Xe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((s = o.destroy), r !== null && hu(r, o.deps))) {
      i.memoizedState = li(t, n, s, r);
      return;
    }
  }
  ((Y.flags |= e), (i.memoizedState = li(1 | t, n, s, r)));
}
function qc(e, t) {
  return ts(8390656, 8, e, t);
}
function gu(e, t) {
  return so(2048, 8, e, t);
}
function kp(e, t) {
  return so(4, 2, e, t);
}
function Cp(e, t) {
  return so(4, 4, e, t);
}
function Ep(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Tp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    so(4, 4, Ep.bind(null, t, e), n)
  );
}
function yu() {}
function Pp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mp(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lp(e, t, n) {
  return Ln & 21
    ? (ot(n, t) || ((n = Vh()), (Y.lanes |= n), (An |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function uy(e, t) {
  var n = F;
  ((F = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ho.transition;
  Ho.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((F = n), (Ho.transition = r));
  }
}
function Ap() {
  return Xe().memoizedState;
}
function cy(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Dp(e))
  )
    jp(t, n);
  else if (((n = fp(e, t, n, r)), n !== null)) {
    var i = Te();
    (it(n, e, r, i), Rp(n, t, r));
  }
}
function fy(e, t, n) {
  var r = Zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Dp(e)) jp(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ot(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), lu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = fp(e, t, i, r)),
      n !== null && ((i = Te()), it(n, e, r, i), Rp(n, t, r)));
  }
}
function Dp(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function jp(e, t) {
  Fr = Vs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Rp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ql(e, n));
  }
}
var Ns = {
    readContext: Ye,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  dy = {
    readContext: Ye,
    useCallback: function (e, t) {
      return ((ct().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ye,
    useEffect: qc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ts(4194308, 4, Ep.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ts(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ts(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cy.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Jc,
    useDebugValue: yu,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = Jc(!1),
        t = e[0];
      return ((e = uy.bind(null, e[1])), (ct().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = ct();
      if (K) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(L(349));
        Ln & 30 || gp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        qc(vp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        li(9, yp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = fe.identifierPrefix;
      if (K) {
        var n = Et,
          r = Ct;
        ((n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = ly++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hy = {
    readContext: Ye,
    useCallback: Pp,
    useContext: Ye,
    useEffect: gu,
    useImperativeHandle: Tp,
    useInsertionEffect: kp,
    useLayoutEffect: Cp,
    useMemo: Mp,
    useReducer: Ko,
    useRef: Sp,
    useState: function () {
      return Ko(ai);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = Xe();
      return Lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ko(ai)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: pp,
    useSyncExternalStore: mp,
    useId: Ap,
    unstable_isNewReconciler: !1,
  },
  py = {
    readContext: Ye,
    useCallback: Pp,
    useContext: Ye,
    useEffect: gu,
    useImperativeHandle: Tp,
    useInsertionEffect: kp,
    useLayoutEffect: Cp,
    useMemo: Mp,
    useReducer: Go,
    useRef: Sp,
    useState: function () {
      return Go(ai);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = Xe();
      return se === null ? (t.memoizedState = e) : Lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Go(ai)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: pp,
    useSyncExternalStore: mp,
    useId: Ap,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    ((t = X({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ka(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = Zt(e),
      s = Tt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Yt(e, s, i)),
      t !== null && (it(t, e, i, r), qi(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = Zt(e),
      s = Tt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Yt(e, s, i)),
      t !== null && (it(t, e, i, r), qi(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = Zt(e),
      i = Tt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Yt(e, i, r)),
      t !== null && (it(t, e, r, n), qi(t, e, r)));
  },
};
function ef(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ei(n, r) || !ei(i, s)
        : !0
  );
}
function Vp(e, t, n) {
  var r = !1,
    i = en,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ye(s))
      : ((i = Ne(t) ? Pn : Se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? rr(e, i) : en)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function tf(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && oo.enqueueReplaceState(t, t.state, null));
}
function Ga(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), uu(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = Ye(s))
    : ((s = Ne(t) ? Pn : Se.current), (i.context = rr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ka(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && oo.enqueueReplaceState(i, i.state, null),
      js(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function ar(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += $1(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Qo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var my = typeof WeakMap == "function" ? WeakMap : Map;
function Np(e, t, n) {
  ((n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Is || ((Is = !0), (il = r)), Qa(e, t));
    }),
    n
  );
}
function _p(e, t, n) {
  ((n = Tt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Qa(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Qa(e, t),
          typeof r != "function" &&
            (Xt === null ? (Xt = new Set([this])) : Xt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function nf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new my();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = Ay.bind(null, e, t, n)), t.then(e, e));
}
function rf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var gy = jt.ReactCurrentOwner,
  Re = !1;
function ke(e, t, n, r) {
  t.child = e === null ? cp(t, null, n, r) : sr(t, e.child, n, r);
}
function of(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    er(t, i),
    (r = pu(e, t, n, r, s, i)),
    (n = mu()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        At(e, t, i))
      : (K && n && nu(t), (t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function af(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Tu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ip(e, t, s, r, i))
      : ((e = ss(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ei), n(o, r) && e.ref === t.ref)
    )
      return At(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Jt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ip(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ei(s, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Re = !0);
      else return ((t.lanes = e.lanes), At(e, t, i));
  }
  return Ya(e, t, n, r, i);
}
function zp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Kn, ze),
        (ze |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Kn, ze),
          (ze |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        U(Kn, ze),
        (ze |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Kn, ze),
      (ze |= r));
  return (ke(e, t, i, n), t.child);
}
function Op(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ya(e, t, n, r, i) {
  var s = Ne(n) ? Pn : Se.current;
  return (
    (s = rr(t, s)),
    er(t, i),
    (n = pu(e, t, n, r, s, i)),
    (r = mu()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        At(e, t, i))
      : (K && r && nu(t), (t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function lf(e, t, n, r, i) {
  if (Ne(n)) {
    var s = !0;
    Ps(t);
  } else s = !1;
  if ((er(t, i), t.stateNode === null))
    (ns(e, t), Vp(t, n, r), Ga(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = Ne(n) ? Pn : Se.current), (u = rr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && tf(t, o, r, u)),
      (zt = !1));
    var d = t.memoizedState;
    ((o.state = d),
      js(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ve.current || zt
        ? (typeof c == "function" && (Ka(t, n, c, r), (l = t.memoizedState)),
          (a = zt || ef(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      dp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : et(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ye(l))
        : ((l = Ne(n) ? Pn : Se.current), (l = rr(t, l))));
    var m = n.getDerivedStateFromProps;
    ((c =
      typeof m == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && tf(t, o, r, l)),
      (zt = !1),
      (d = t.memoizedState),
      (o.state = d),
      js(t, r, o, i));
    var y = t.memoizedState;
    a !== f || d !== y || Ve.current || zt
      ? (typeof m == "function" && (Ka(t, n, m, r), (y = t.memoizedState)),
        (u = zt || ef(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xa(e, t, n, r, s, i);
}
function Xa(e, t, n, r, i, s) {
  Op(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && Kc(t, n, !1), At(e, t, s));
  ((r = t.stateNode), (gy.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sr(t, e.child, null, s)), (t.child = sr(t, null, a, s)))
      : ke(e, t, a, s),
    (t.memoizedState = r.state),
    i && Kc(t, n, !0),
    t.child
  );
}
function Fp(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hc(e, t.context, !1),
    cu(e, t.containerInfo));
}
function uf(e, t, n, r, i) {
  return (ir(), iu(i), (t.flags |= 256), ke(e, t, n, r), t.child);
}
var Za = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bp(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(Q, i & 1),
    e === null)
  )
    return (
      Wa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = uo(o, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ja(n)),
              (t.memoizedState = Za),
              e)
            : vu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return yy(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Jt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Jt(a, s)) : ((s = Cn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ja(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Za),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Jt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vu(e, t) {
  return (
    (t = uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Oi(e, t, n, r) {
  return (
    r !== null && iu(r),
    sr(t, e.child, null, n),
    (e = vu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yy(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qo(Error(L(422)))), Oi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = uo({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Cn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && sr(t, e.child, null, o),
          (t.child.memoizedState = Ja(o)),
          (t.memoizedState = Za),
          s);
  if (!(t.mode & 1)) return Oi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(L(419))),
      (r = Qo(s, r, void 0)),
      Oi(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Re || a)) {
    if (((r = fe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Lt(e, i), it(r, e, i, -1)));
    }
    return (Eu(), (r = Qo(Error(L(421)))), Oi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Oe = Qt(i.nextSibling)),
      (Fe = t),
      (K = !0),
      (nt = null),
      e !== null &&
        ((Ue[We++] = Ct),
        (Ue[We++] = Et),
        (Ue[We++] = Mn),
        (Ct = e.id),
        (Et = e.overflow),
        (Mn = t)),
      (t = vu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ha(e.return, t, n));
}
function Yo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Bp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ke(e, t, r.children, n), (r = Q.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cf(e, n, t);
        else if (e.tag === 19) cf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((U(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Rs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Yo(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Rs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Yo(t, !0, n, null, s);
        break;
      case "together":
        Yo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ns(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function At(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (An |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Jt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function vy(e, t, n) {
  switch (t.tag) {
    case 3:
      (Fp(t), ir());
      break;
    case 5:
      hp(t);
      break;
    case 1:
      Ne(t.type) && Ps(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (U(As, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? bp(e, t, n)
            : (U(Q, Q.current & 1),
              (e = At(e, t, n)),
              e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), zp(e, t, n));
  }
  return At(e, t, n);
}
var $p, qa, Up, Wp;
$p = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
qa = function () {};
Up = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), xn(gt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Sa(e, i)), (r = Sa(e, r)), (s = []));
        break;
      case "select":
        ((i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = Ea(e, i)), (r = Ea(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Es);
    }
    Pa(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Gr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Gr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && W("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Wp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function xy(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (xe(t), null);
    case 1:
      return (Ne(t.type) && Ts(), xe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        or(),
        H(Ve),
        H(Se),
        du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ii(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (al(nt), (nt = null)))),
        qa(e, t),
        xe(t),
        null
      );
    case 5:
      fu(t);
      var i = xn(si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Up(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return (xe(t), null);
        }
        if (((e = xn(gt.current)), Ii(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[ht] = t), (r[ri] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (W("cancel", r), W("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Rr.length; i++) W(Rr[i], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (W("error", r), W("load", r));
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              (vc(r, s), W("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                W("invalid", r));
              break;
            case "textarea":
              (wc(r, s), W("invalid", r));
          }
          (Pa(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      _i(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Gr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              (Mi(r), xc(r, s, !0));
              break;
            case "textarea":
              (Mi(r), Sc(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Es);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ht] = t),
            (e[ri] = r),
            $p(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Ma(n, r)), n)) {
              case "dialog":
                (W("cancel", e), W("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (W("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Rr.length; i++) W(Rr[i], e);
                i = r;
                break;
              case "source":
                (W("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (W("error", e), W("load", e), (i = r));
                break;
              case "details":
                (W("toggle", e), (i = r));
                break;
              case "input":
                (vc(e, r), (i = Sa(e, r)), W("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  W("invalid", e));
                break;
              case "textarea":
                (wc(e, r), (i = Ea(e, r)), W("invalid", e));
                break;
              default:
                i = r;
            }
            (Pa(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Sh(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && xh(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Qr(e, l)
                        : typeof l == "number" && Qr(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Gr.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && W("scroll", e)
                          : l != null && $l(e, s, l, o));
              }
            switch (n) {
              case "input":
                (Mi(e), xc(e, r, !1));
                break;
              case "textarea":
                (Mi(e), Sc(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Xn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Xn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Es);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (xe(t), null);
    case 6:
      if (e && t.stateNode != null) Wp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = xn(si.current)), xn(gt.current), Ii(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (s = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                _i(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _i(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r));
      }
      return (xe(t), null);
    case 13:
      if (
        (H(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Oe !== null && t.mode & 1 && !(t.flags & 128))
          (lp(), ir(), (t.flags |= 98560), (s = !1));
        else if (((s = Ii(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[ht] = t;
          } else
            (ir(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (xe(t), (s = !1));
        } else (nt !== null && (al(nt), (nt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? oe === 0 && (oe = 3) : Eu())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        or(),
        qa(e, t),
        e === null && ti(t.stateNode.containerInfo),
        xe(t),
        null
      );
    case 10:
      return (au(t.type._context), xe(t), null);
    case 17:
      return (Ne(t.type) && Ts(), xe(t), null);
    case 19:
      if ((H(Q), (s = t.memoizedState), s === null)) return (xe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Pr(s, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Rs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (U(Q, (Q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > lr &&
            ((t.flags |= 128), (r = !0), Pr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Rs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !K)
            )
              return (xe(t), null);
          } else
            2 * ee() - s.renderingStartTime > lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = Q.current),
          U(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function wy(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && Ts(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        H(Ve),
        H(Se),
        du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (fu(t), null);
    case 13:
      if ((H(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        ir();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (H(Q), null);
    case 4:
      return (or(), null);
    case 10:
      return (au(t.type._context), null);
    case 22:
    case 23:
      return (Cu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Fi = !1,
  we = !1,
  Sy = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function el(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var ff = !1;
function ky(e, t) {
  if (((za = Ss), (e = Yh()), tu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (m = f.firstChild) !== null;
            )
              ((d = f), (f = m));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (m = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Oa = { focusedElem: e, selectionRange: n }, Ss = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null; ) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : et(t.type, v),
                      k,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (x) {
          J(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((y = ff), (ff = !1), y);
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && el(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function ao(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function tl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hp(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Hp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht], delete t[ri], delete t[Ba], delete t[iy], delete t[sy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function df(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function nl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Es)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nl(e, t, n), e = e.sibling; e !== null; )
      (nl(e, t, n), (e = e.sibling));
}
function rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rl(e, t, n), e = e.sibling; e !== null; )
      (rl(e, t, n), (e = e.sibling));
}
var he = null,
  tt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) (Gp(e, t, n), (n = n.sibling));
}
function Gp(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(qs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Hn(n, t);
    case 6:
      var r = he,
        i = tt;
      ((he = null),
        Vt(e, t, n),
        (he = r),
        (tt = i),
        he !== null &&
          (tt
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode)));
      break;
    case 18:
      he !== null &&
        (tt
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? $o(e.parentNode, n)
              : e.nodeType === 1 && $o(e, n),
            Jr(e))
          : $o(he, n.stateNode));
      break;
    case 4:
      ((r = he),
        (i = tt),
        (he = n.stateNode.containerInfo),
        (tt = !0),
        Vt(e, t, n),
        (he = r),
        (tt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && el(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          J(n, t, a);
        }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), Vt(e, t, n), (we = r))
        : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function hf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Sy()),
      t.forEach(function (r) {
        var i = jy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((he = a.stateNode), (tt = !1));
              break e;
            case 3:
              ((he = a.stateNode.containerInfo), (tt = !0));
              break e;
            case 4:
              ((he = a.stateNode.containerInfo), (tt = !0));
              break e;
          }
          a = a.return;
        }
        if (he === null) throw Error(L(160));
        (Gp(s, o, i), (he = null), (tt = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Qp(t, e), (t = t.sibling));
}
function Qp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), ut(e), r & 4)) {
        try {
          (br(3, e, e.return), ao(3, e));
        } catch (v) {
          J(e, e.return, v);
        }
        try {
          br(5, e, e.return);
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 1:
      (Ze(t, e), ut(e), r & 512 && n !== null && Hn(n, n.return));
      break;
    case 5:
      if (
        (Ze(t, e),
        ut(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Qr(i, "");
        } catch (v) {
          J(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && gh(i, s),
              Ma(a, o));
            var u = Ma(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? Sh(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? xh(i, f)
                  : c === "children"
                    ? Qr(i, f)
                    : $l(i, c, f, u);
            }
            switch (a) {
              case "input":
                ka(i, s);
                break;
              case "textarea":
                yh(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Xn(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Xn(i, !!s.multiple, s.defaultValue, !0)
                      : Xn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ri] = s;
          } catch (v) {
            J(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (v) {
          J(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (v) {
          J(e, e.return, v);
        }
      break;
    case 4:
      (Ze(t, e), ut(e));
      break;
    case 13:
      (Ze(t, e),
        ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Su = ee())),
        r & 4 && hf(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || c), Ze(t, e), (we = u)) : Ze(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (f = j = c; j !== null; ) {
              switch (((d = j), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, d, d.return);
                  break;
                case 1:
                  Hn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (v) {
                      J(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Hn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    mf(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (j = m)) : mf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = wh("display", o))));
              } catch (v) {
                J(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                J(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ze(t, e), ut(e), r & 4 && hf(e));
      break;
    case 21:
      break;
    default:
      (Ze(t, e), ut(e));
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Qr(i, ""), (r.flags &= -33));
          var s = df(e);
          rl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = df(e);
          nl(e, a, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      J(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cy(e, t, n) {
  ((j = e), Yp(e));
}
function Yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Fi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || we;
        a = Fi;
        var u = we;
        if (((Fi = o), (we = l) && !u))
          for (j = i; j !== null; )
            ((o = j),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? gf(i)
                : l !== null
                  ? ((l.return = o), (j = l))
                  : gf(i));
        for (; s !== null; ) ((j = s), Yp(s), (s = s.sibling));
        ((j = i), (Fi = a), (we = u));
      }
      pf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (j = s)) : pf(e);
  }
}
function pf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || ao(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Zc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Jr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        we || (t.flags & 512 && tl(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function mf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function gf(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ao(4, t);
          } catch (l) {
            J(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              J(t, i, l);
            }
          }
          var s = t.return;
          try {
            tl(t);
          } catch (l) {
            J(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            tl(t);
          } catch (l) {
            J(t, o, l);
          }
      }
    } catch (l) {
      J(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (j = a));
      break;
    }
    j = t.return;
  }
}
var Ey = Math.ceil,
  _s = jt.ReactCurrentDispatcher,
  xu = jt.ReactCurrentOwner,
  Ge = jt.ReactCurrentBatchConfig,
  z = 0,
  fe = null,
  ie = null,
  me = 0,
  ze = 0,
  Kn = on(0),
  oe = 0,
  ui = null,
  An = 0,
  lo = 0,
  wu = 0,
  Br = null,
  je = null,
  Su = 0,
  lr = 1 / 0,
  St = null,
  Is = !1,
  il = null,
  Xt = null,
  bi = !1,
  $t = null,
  zs = 0,
  $r = 0,
  sl = null,
  rs = -1,
  is = 0;
function Te() {
  return z & 6 ? ee() : rs !== -1 ? rs : (rs = ee());
}
function Zt(e) {
  return e.mode & 1
    ? z & 2 && me !== 0
      ? me & -me
      : ay.transition !== null
        ? (is === 0 && (is = Vh()), is)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bh(e.type))),
          e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (sl = null), Error(L(185)));
  (gi(e, n, r),
    (!(z & 2) || e !== fe) &&
      (e === fe && (!(z & 2) && (lo |= n), oe === 4 && Ft(e, me)),
      _e(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((lr = ee() + 500), io && an())));
}
function _e(e, t) {
  var n = e.callbackNode;
  ag(e, t);
  var r = ws(e, e === fe ? me : 0);
  if (r === 0)
    (n !== null && Ec(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ec(n), t === 1))
      (e.tag === 0 ? oy(yf.bind(null, e)) : sp(yf.bind(null, e)),
        ny(function () {
          !(z & 6) && an();
        }),
        (n = null));
    else {
      switch (Nh(r)) {
        case 1:
          n = Gl;
          break;
        case 4:
          n = jh;
          break;
        case 16:
          n = xs;
          break;
        case 536870912:
          n = Rh;
          break;
        default:
          n = xs;
      }
      n = rm(n, Xp.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Xp(e, t) {
  if (((rs = -1), (is = 0), z & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (tr() && e.callbackNode !== n) return null;
  var r = ws(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Os(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var s = Jp();
    (fe !== e || me !== t) && ((St = null), (lr = ee() + 500), kn(e, t));
    do
      try {
        My();
        break;
      } catch (a) {
        Zp(e, a);
      }
    while (!0);
    (ou(),
      (_s.current = s),
      (z = i),
      ie !== null ? (t = 0) : ((fe = null), (me = 0), (t = oe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ra(e)), i !== 0 && ((r = i), (t = ol(e, i)))), t === 1)
    )
      throw ((n = ui), kn(e, 0), Ft(e, r), _e(e, ee()), n);
    if (t === 6) Ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ty(i) &&
          ((t = Os(e, r)),
          t === 2 && ((s = Ra(e)), s !== 0 && ((r = s), (t = ol(e, s)))),
          t === 1))
      )
        throw ((n = ui), kn(e, 0), Ft(e, r), _e(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          mn(e, je, St);
          break;
        case 3:
          if (
            (Ft(e, r), (r & 130023424) === r && ((t = Su + 500 - ee()), 10 < t))
          ) {
            if (ws(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Te(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = ba(mn.bind(null, e, je, St), t);
            break;
          }
          mn(e, je, St);
          break;
        case 4:
          if ((Ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Ey(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ba(mn.bind(null, e, je, St), r);
            break;
          }
          mn(e, je, St);
          break;
        case 5:
          mn(e, je, St);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return (_e(e, ee()), e.callbackNode === n ? Xp.bind(null, e) : null);
}
function ol(e, t) {
  var n = Br;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Os(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && al(t)),
    e
  );
}
function al(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function Ty(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Ft(e, t) {
  for (
    t &= ~wu,
      t &= ~lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function yf(e) {
  if (z & 6) throw Error(L(327));
  tr();
  var t = ws(e, 0);
  if (!(t & 1)) return (_e(e, ee()), null);
  var n = Os(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ra(e);
    r !== 0 && ((t = r), (n = ol(e, r)));
  }
  if (n === 1) throw ((n = ui), kn(e, 0), Ft(e, t), _e(e, ee()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, je, St),
    _e(e, ee()),
    null
  );
}
function ku(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((lr = ee() + 500), io && an()));
  }
}
function Dn(e) {
  $t !== null && $t.tag === 0 && !(z & 6) && tr();
  var t = z;
  z |= 1;
  var n = Ge.transition,
    r = F;
  try {
    if (((Ge.transition = null), (F = 1), e)) return e();
  } finally {
    ((F = r), (Ge.transition = n), (z = t), !(z & 6) && an());
  }
}
function Cu() {
  ((ze = Kn.current), H(Kn));
}
function kn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ty(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Ts());
          break;
        case 3:
          (or(), H(Ve), H(Se), du());
          break;
        case 5:
          fu(r);
          break;
        case 4:
          or();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
          break;
        case 10:
          au(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (ie = e = Jt(e.current, null)),
    (me = ze = t),
    (oe = 0),
    (ui = null),
    (wu = lo = An = 0),
    (je = Br = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((n = vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    vn = null;
  }
  return e;
}
function Zp(e, t) {
  do {
    var n = ie;
    try {
      if ((ou(), (es.current = Ns), Vs)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Vs = !1;
      }
      if (
        ((Ln = 0),
        (le = se = Y = null),
        (Fr = !1),
        (oi = 0),
        (xu.current = null),
        n === null || n.return === null)
      ) {
        ((oe = 1), (ui = t), (ie = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = me),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = rf(o);
          if (m !== null) {
            ((m.flags &= -257),
              sf(m, o, a, s, t),
              m.mode & 1 && nf(s, u, t),
              (t = m),
              (l = u));
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              (v.add(l), (t.updateQueue = v));
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (nf(s, u, t), Eu());
              break e;
            }
            l = Error(L(426));
          }
        } else if (K && a.mode & 1) {
          var k = rf(o);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              sf(k, o, a, s, t),
              iu(ar(l, a)));
            break e;
          }
        }
        ((s = l = ar(l, a)),
          oe !== 4 && (oe = 2),
          Br === null ? (Br = [s]) : Br.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var p = Np(s, l, t);
              Xc(s, p);
              break e;
            case 1:
              a = l;
              var h = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Xt === null || !Xt.has(g))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = _p(s, a, t);
                Xc(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      em(n);
    } catch (C) {
      ((t = C), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Jp() {
  var e = _s.current;
  return ((_s.current = Ns), e === null ? Ns : e);
}
function Eu() {
  ((oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    fe === null || (!(An & 268435455) && !(lo & 268435455)) || Ft(fe, me));
}
function Os(e, t) {
  var n = z;
  z |= 2;
  var r = Jp();
  (fe !== e || me !== t) && ((St = null), kn(e, t));
  do
    try {
      Py();
      break;
    } catch (i) {
      Zp(e, i);
    }
  while (!0);
  if ((ou(), (z = n), (_s.current = r), ie !== null)) throw Error(L(261));
  return ((fe = null), (me = 0), oe);
}
function Py() {
  for (; ie !== null; ) qp(ie);
}
function My() {
  for (; ie !== null && !J1(); ) qp(ie);
}
function qp(e) {
  var t = nm(e.alternate, e, ze);
  ((e.memoizedProps = e.pendingProps),
    t === null ? em(e) : (ie = t),
    (xu.current = null));
}
function em(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wy(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((oe = 6), (ie = null));
        return;
      }
    } else if (((n = xy(n, t, ze)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function mn(e, t, n) {
  var r = F,
    i = Ge.transition;
  try {
    ((Ge.transition = null), (F = 1), Ly(e, t, n, r));
  } finally {
    ((Ge.transition = i), (F = r));
  }
  return null;
}
function Ly(e, t, n, r) {
  do tr();
  while ($t !== null);
  if (z & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (lg(e, s),
    e === fe && ((ie = fe = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bi ||
      ((bi = !0),
      rm(xs, function () {
        return (tr(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ge.transition), (Ge.transition = null));
    var o = F;
    F = 1;
    var a = z;
    ((z |= 4),
      (xu.current = null),
      ky(e, n),
      Qp(n, e),
      Qg(Oa),
      (Ss = !!za),
      (Oa = za = null),
      (e.current = n),
      Cy(n),
      q1(),
      (z = a),
      (F = o),
      (Ge.transition = s));
  } else e.current = n;
  if (
    (bi && ((bi = !1), ($t = e), (zs = i)),
    (s = e.pendingLanes),
    s === 0 && (Xt = null),
    ng(n.stateNode),
    _e(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Is) throw ((Is = !1), (e = il), (il = null), e);
  return (
    zs & 1 && e.tag !== 0 && tr(),
    (s = e.pendingLanes),
    s & 1 ? (e === sl ? $r++ : (($r = 0), (sl = e))) : ($r = 0),
    an(),
    null
  );
}
function tr() {
  if ($t !== null) {
    var e = Nh(zs),
      t = Ge.transition,
      n = F;
    try {
      if (((Ge.transition = null), (F = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (zs = 0), z & 6)) throw Error(L(331));
        var i = z;
        for (z |= 4, j = e.current; j !== null; ) {
          var s = j,
            o = s.child;
          if (j.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (j = f));
                  else
                    for (; j !== null; ) {
                      c = j;
                      var d = c.sibling,
                        m = c.return;
                      if ((Hp(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = m), (j = d));
                        break;
                      }
                      j = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var k = v.sibling;
                    ((v.sibling = null), (v = k));
                  } while (v !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (j = o));
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                ((p.return = s.return), (j = p));
                break e;
              }
              j = s.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          o = j;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (j = g));
          else
            e: for (o = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(9, a);
                  }
                } catch (C) {
                  J(a, a.return, C);
                }
              if (a === o) {
                j = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (j = x));
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((z = i), an(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(qs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((F = n), (Ge.transition = t));
    }
  }
  return !1;
}
function vf(e, t, n) {
  ((t = ar(n, t)),
    (t = Np(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Te()),
    e !== null && (gi(e, 1, t), _e(e, t)));
}
function J(e, t, n) {
  if (e.tag === 3) vf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Xt === null || !Xt.has(r)))
        ) {
          ((e = ar(n, e)),
            (e = _p(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Te()),
            t !== null && (gi(t, 1, e), _e(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Ay(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (me & n) === n &&
      (oe === 4 || (oe === 3 && (me & 130023424) === me && 500 > ee() - Su)
        ? kn(e, 0)
        : (wu |= n)),
    _e(e, t));
}
function tm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Di), (Di <<= 1), !(Di & 130023424) && (Di = 4194304))
      : (t = 1));
  var n = Te();
  ((e = Lt(e, t)), e !== null && (gi(e, t, n), _e(e, n)));
}
function Dy(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), tm(e, n));
}
function jy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  (r !== null && r.delete(t), tm(e, n));
}
var nm;
nm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Re = !1), vy(e, t, n));
      Re = !!(e.flags & 131072);
    }
  else ((Re = !1), K && t.flags & 1048576 && op(t, Ls, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (ns(e, t), (e = t.pendingProps));
      var i = rr(t, Se.current);
      (er(t, n), (i = pu(null, t, r, e, i, n)));
      var s = mu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((s = !0), Ps(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            uu(t),
            (i.updater = oo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ga(t, r, e, n),
            (t = Xa(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && nu(t), ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ns(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Vy(r)),
          (e = et(r, e)),
          i)
        ) {
          case 0:
            t = Ya(null, t, r, e, n);
            break e;
          case 1:
            t = lf(null, t, r, e, n);
            break e;
          case 11:
            t = of(null, t, r, e, n);
            break e;
          case 14:
            t = af(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Ya(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        lf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Fp(t), e === null)) throw Error(L(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          dp(e, t),
          js(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = ar(Error(L(423)), t)), (t = uf(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = ar(Error(L(424)), t)), (t = uf(e, t, r, n, i)));
            break e;
          } else
            for (
              Oe = Qt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                K = !0,
                nt = null,
                n = cp(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ir(), r === i)) {
            t = At(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        hp(t),
        e === null && Wa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Fa(r, i) ? (o = null) : s !== null && Fa(r, s) && (t.flags |= 32),
        Op(e, t),
        ke(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Wa(t), null);
    case 13:
      return bp(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sr(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        of(e, t, r, i, n)
      );
    case 7:
      return (ke(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          U(As, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !Ve.current) {
              t = At(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = Tt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ha(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(L(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ha(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ke(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        er(t, n),
        (i = Ye(i)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = et(r, t.pendingProps)),
        (i = et(r.type, i)),
        af(e, t, r, i, n)
      );
    case 15:
      return Ip(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        ns(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), Ps(t)) : (e = !1),
        er(t, n),
        Vp(t, r, i),
        Ga(t, r, i, n),
        Xa(null, t, r, !0, e, n)
      );
    case 19:
      return Bp(e, t, n);
    case 22:
      return zp(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function rm(e, t) {
  return Dh(e, t);
}
function Ry(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function He(e, t, n, r) {
  return new Ry(e, t, n, r);
}
function Tu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Vy(e) {
  if (typeof e == "function") return Tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wl)) return 11;
    if (e === Hl) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ss(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Tu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case In:
        return Cn(n.children, i, s, t);
      case Ul:
        ((o = 8), (i |= 8));
        break;
      case ya:
        return (
          (e = He(12, n, t, i | 2)),
          (e.elementType = ya),
          (e.lanes = s),
          e
        );
      case va:
        return ((e = He(13, n, t, i)), (e.elementType = va), (e.lanes = s), e);
      case xa:
        return ((e = He(19, n, t, i)), (e.elementType = xa), (e.lanes = s), e);
      case hh:
        return uo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case fh:
              o = 10;
              break e;
            case dh:
              o = 9;
              break e;
            case Wl:
              o = 11;
              break e;
            case Hl:
              o = 14;
              break e;
            case It:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Cn(e, t, n, r) {
  return ((e = He(7, e, r, t)), (e.lanes = n), e);
}
function uo(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = hh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xo(e, t, n) {
  return ((e = He(6, e, null, t)), (e.lanes = n), e);
}
function Zo(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ny(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jo(0)),
    (this.expirationTimes = jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Pu(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new Ny(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = He(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uu(s),
    e
  );
}
function _y(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function im(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return ip(e, n, t);
  }
  return t;
}
function sm(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Pu(n, r, !0, e, i, s, o, a, l)),
    (e.context = im(null)),
    (n = e.current),
    (r = Te()),
    (i = Zt(n)),
    (s = Tt(r, i)),
    (s.callback = t ?? null),
    Yt(n, s, i),
    (e.current.lanes = i),
    gi(e, i, r),
    _e(e, r),
    e
  );
}
function co(e, t, n, r) {
  var i = t.current,
    s = Te(),
    o = Zt(i);
  return (
    (n = im(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(i, t, o)),
    e !== null && (it(e, i, o, s), qi(e, i, o)),
    o
  );
}
function Fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mu(e, t) {
  (xf(e, t), (e = e.alternate) && xf(e, t));
}
function Iy() {
  return null;
}
var om =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lu(e) {
  this._internalRoot = e;
}
fo.prototype.render = Lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  co(e, t, null, null);
};
fo.prototype.unmount = Lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Dn(function () {
      co(null, e, null, null);
    }),
      (t[Mt] = null));
  }
};
function fo(e) {
  this._internalRoot = e;
}
fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    (Ot.splice(n, 0, e), n === 0 && Fh(e));
  }
};
function Au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function wf() {}
function zy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Fs(o);
        s.call(u);
      };
    }
    var o = sm(t, r, e, 0, null, !1, !1, "", wf);
    return (
      (e._reactRootContainer = o),
      (e[Mt] = o.current),
      ti(e.nodeType === 8 ? e.parentNode : e),
      Dn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Fs(l);
      a.call(u);
    };
  }
  var l = Pu(e, 0, !1, null, null, !1, !1, "", wf);
  return (
    (e._reactRootContainer = l),
    (e[Mt] = l.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    Dn(function () {
      co(t, l, n, r);
    }),
    l
  );
}
function po(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Fs(o);
        a.call(l);
      };
    }
    co(t, o, e, i);
  } else o = zy(n, t, e, i, r);
  return Fs(o);
}
_h = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (Ql(t, n | 1), _e(t, ee()), !(z & 6) && ((lr = ee() + 500), an()));
      }
      break;
    case 13:
      (Dn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var i = Te();
          it(r, e, 1, i);
        }
      }),
        Mu(e, 1));
  }
};
Yl = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Te();
      it(t, e, 134217728, n);
    }
    Mu(e, 134217728);
  }
};
Ih = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = Te();
      it(n, e, t, r);
    }
    Mu(e, t);
  }
};
zh = function () {
  return F;
};
Oh = function (e, t) {
  var n = F;
  try {
    return ((F = e), t());
  } finally {
    F = n;
  }
};
Aa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ka(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ro(r);
            if (!i) throw Error(L(90));
            (mh(r), ka(r, i));
          }
        }
      }
      break;
    case "textarea":
      yh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Xn(e, !!n.multiple, t, !1));
  }
};
Eh = ku;
Th = Dn;
var Oy = { usingClientEntryPoint: !1, Events: [vi, bn, ro, kh, Ch, ku] },
  Mr = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Fy = {
    bundleType: Mr.bundleType,
    version: Mr.version,
    rendererPackageName: Mr.rendererPackageName,
    rendererConfig: Mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Lh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Mr.findFiberByHostInstance || Iy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Bi.isDisabled && Bi.supportsFiber)
    try {
      ((qs = Bi.inject(Fy)), (mt = Bi));
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Au(t)) throw Error(L(200));
  return _y(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Au(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = om;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Pu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Mt] = t.current),
    ti(e.nodeType === 8 ? e.parentNode : e),
    new Lu(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return ((e = Lh(t)), (e = e === null ? null : e.stateNode), e);
};
Be.flushSync = function (e) {
  return Dn(e);
};
Be.hydrate = function (e, t, n) {
  if (!ho(t)) throw Error(L(200));
  return po(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Au(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = om;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = sm(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Mt] = t.current),
    ti(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new fo(t);
};
Be.render = function (e, t, n) {
  if (!ho(t)) throw Error(L(200));
  return po(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!ho(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Dn(function () {
        po(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Mt] = null));
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = ku;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ho(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return po(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function am() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am);
    } catch (e) {
      console.error(e);
    }
}
(am(), (ah.exports = Be));
var by = ah.exports,
  Sf = by;
((ma.createRoot = Sf.createRoot), (ma.hydrateRoot = Sf.hydrateRoot));
const By = "modulepreload",
  $y = function (e) {
    return "/" + e;
  },
  kf = {},
  ln = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = $y(l)), l in kf)) return;
          kf[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : By),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, m) => {
              (f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  m(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function s(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  },
  Du = S.createContext({});
function mo(e) {
  const t = S.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Uy = typeof window < "u",
  lm = Uy ? S.useLayoutEffect : S.useEffect,
  go = S.createContext(null);
function ju(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ur(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const vt = (e, t, n) => (n > t ? t : n < e ? e : n);
let Ru = () => {};
const tn = {},
  um = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  cm = (e) => typeof e == "object" && e !== null,
  fm = (e) => /^0[^.\s]+$/u.test(e);
function dm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Qe = (e) => e,
  wi = (...e) => e.reduce((t, n) => (r) => n(t(r))),
  cr = (e, t, n) => {
    const r = t - e;
    return r ? (n - e) / r : 1;
  };
class Vu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (ju(this.subscriptions, t), () => ur(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ie = (e) => e * 1e3,
  Ke = (e) => e / 1e3,
  hm = (e, t) => (t ? e * (1e3 / t) : 0),
  Wy = (e, t, n) => {
    const r = t - e;
    return ((((n - e) % r) + r) % r) + e;
  },
  pm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Hy = 1e-7,
  Ky = 12;
function Gy(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = pm(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > Hy && ++a < Ky);
  return o;
}
function Si(e, t, n, r) {
  if (e === t && n === r) return Qe;
  const i = (s) => Gy(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : pm(i(s), t, r));
}
const mm = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Nu = (e) => (t) => 1 - e(1 - t),
  gm = Si(0.33, 1.53, 0.69, 0.99),
  _u = Nu(gm),
  ym = mm(_u),
  vm = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * _u(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Iu = (e) => 1 - Math.sin(Math.acos(e)),
  xm = Nu(Iu),
  wm = mm(Iu),
  Qy = Si(0.42, 0, 1, 1),
  Yy = Si(0, 0, 0.58, 1),
  Sm = Si(0.42, 0, 0.58, 1),
  km = (e) => Array.isArray(e) && typeof e[0] != "number";
function Cm(e, t) {
  return km(e) ? e[Wy(0, e.length, t)] : e;
}
const Em = (e) => Array.isArray(e) && typeof e[0] == "number",
  Xy = {
    linear: Qe,
    easeIn: Qy,
    easeInOut: Sm,
    easeOut: Yy,
    circIn: Iu,
    circInOut: wm,
    circOut: xm,
    backIn: _u,
    backInOut: ym,
    backOut: gm,
    anticipate: vm,
  },
  Zy = (e) => typeof e == "string",
  Cf = (e) => {
    if (Em(e)) {
      Ru(e.length === 4);
      const [t, n, r, i] = e;
      return Si(t, n, r, i);
    } else if (Zy(e)) return Xy[e];
    return e;
  },
  $i = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Jy(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(c) {
    (o.has(c) && (u.schedule(c), e()), c(a));
  }
  const u = {
    schedule: (c, f = !1, d = !1) => {
      const y = d && i ? n : r;
      return (f && o.add(c), y.add(c), c);
    },
    cancel: (c) => {
      (r.delete(c), o.delete(c));
    },
    process: (c) => {
      if (((a = c), i)) {
        s = !0;
        return;
      }
      i = !0;
      const f = n;
      ((n = r),
        (r = f),
        n.forEach(l),
        n.clear(),
        (i = !1),
        s && ((s = !1), u.process(c)));
    },
  };
  return u;
}
const qy = 40;
function Tm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = $i.reduce((g, x) => ((g[x] = Jy(s)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: m,
      postRender: y,
    } = o,
    v = () => {
      const g = tn.useManualTiming,
        x = g ? i.timestamp : performance.now();
      ((n = !1),
        g ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, qy), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        m.process(i),
        y.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v)));
    },
    k = () => {
      ((n = !0), (r = !0), i.isProcessing || e(v));
    };
  return {
    schedule: $i.reduce((g, x) => {
      const C = o[x];
      return (
        (g[x] = (P, T = !1, E = !1) => (n || k(), C.schedule(P, T, E))),
        g
      );
    }, {}),
    cancel: (g) => {
      for (let x = 0; x < $i.length; x++) o[$i[x]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: $,
  cancel: nn,
  state: pe,
  steps: Jo,
} = Tm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Qe, !0);
let os;
function ev() {
  os = void 0;
}
const Ce = {
    now: () => (
      os === void 0 &&
        Ce.set(
          pe.isProcessing || tn.useManualTiming
            ? pe.timestamp
            : performance.now(),
        ),
      os
    ),
    set: (e) => {
      ((os = e), queueMicrotask(ev));
    },
  },
  Pm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mm = Pm("--"),
  tv = Pm("var(--"),
  zu = (e) => (tv(e) ? nv.test(e.split("/*")[0].trim()) : !1),
  nv =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ef(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const mr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ci = { ...mr, transform: (e) => vt(0, 1, e) },
  Ui = { ...mr, default: 1 },
  Ur = (e) => Math.round(e * 1e5) / 1e5,
  Ou = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function rv(e) {
  return e == null;
}
const iv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Fu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && iv.test(n) && n.startsWith(e)) ||
      (t && !rv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Lm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(Ou);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  sv = (e) => vt(0, 255, e),
  qo = { ...mr, transform: (e) => Math.round(sv(e)) },
  wn = {
    test: Fu("rgb", "red"),
    parse: Lm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      qo.transform(e) +
      ", " +
      qo.transform(t) +
      ", " +
      qo.transform(n) +
      ", " +
      Ur(ci.transform(r)) +
      ")",
  };
function ov(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ll = { test: Fu("#"), parse: ov, transform: wn.transform },
  ki = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  wt = ki("deg"),
  yt = ki("%"),
  R = ki("px"),
  av = ki("vh"),
  lv = ki("vw"),
  Tf = {
    ...yt,
    parse: (e) => yt.parse(e) / 100,
    transform: (e) => yt.transform(e * 100),
  },
  Gn = {
    test: Fu("hsl", "hue"),
    parse: Lm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      yt.transform(Ur(t)) +
      ", " +
      yt.transform(Ur(n)) +
      ", " +
      Ur(ci.transform(r)) +
      ")",
  },
  re = {
    test: (e) => wn.test(e) || ll.test(e) || Gn.test(e),
    parse: (e) =>
      wn.test(e) ? wn.parse(e) : Gn.test(e) ? Gn.parse(e) : ll.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? wn.transform(e)
          : Gn.transform(e),
    getAnimatableNone: (e) => {
      const t = re.parse(e);
      return ((t.alpha = 0), re.transform(t));
    },
  },
  uv =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function cv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Ou)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(uv)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Am = "number",
  Dm = "color",
  fv = "var",
  dv = "var(",
  Pf = "${}",
  hv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function fr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      hv,
      (l) => (
        re.test(l)
          ? (r.color.push(s), i.push(Dm), n.push(re.parse(l)))
          : l.startsWith(dv)
            ? (r.var.push(s), i.push(fv), n.push(l))
            : (r.number.push(s), i.push(Am), n.push(parseFloat(l))),
        ++s,
        Pf
      ),
    )
    .split(Pf);
  return { values: n, split: a, indexes: r, types: i };
}
function pv(e) {
  return fr(e).values;
}
function jm({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (((i += e[s]), r[s] !== void 0)) {
        const o = t[s];
        o === Am
          ? (i += Ur(r[s]))
          : o === Dm
            ? (i += re.transform(r[s]))
            : (i += r[s]);
      }
    return i;
  };
}
function mv(e) {
  return jm(fr(e));
}
const gv = (e) =>
    typeof e == "number" ? 0 : re.test(e) ? re.getAnimatableNone(e) : e,
  yv = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : gv(e);
function vv(e) {
  const t = fr(e);
  return jm(t)(t.values.map((r, i) => yv(r, t.split[i])));
}
const st = {
  test: cv,
  parse: pv,
  createTransformer: mv,
  getAnimatableNone: vv,
};
function ea(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function xv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = ea(l, a, e + 1 / 3)), (s = ea(l, a, e)), (o = ea(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function bs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const b = (e, t, n) => e + (t - e) * n,
  ta = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  wv = [ll, wn, Gn],
  Sv = (e) => wv.find((t) => t.test(e));
function Mf(e) {
  const t = Sv(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === Gn && (n = xv(n)), n);
}
const Lf = (e, t) => {
    const n = Mf(e),
      r = Mf(t);
    if (!n || !r) return bs(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = ta(n.red, r.red, s)),
      (i.green = ta(n.green, r.green, s)),
      (i.blue = ta(n.blue, r.blue, s)),
      (i.alpha = b(n.alpha, r.alpha, s)),
      wn.transform(i)
    );
  },
  ul = new Set(["none", "hidden"]);
function kv(e, t) {
  return ul.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Cv(e, t) {
  return (n) => b(e, t, n);
}
function bu(e) {
  return typeof e == "number"
    ? Cv
    : typeof e == "string"
      ? zu(e)
        ? bs
        : re.test(e)
          ? Lf
          : Pv
      : Array.isArray(e)
        ? Rm
        : typeof e == "object"
          ? re.test(e)
            ? Lf
            : Ev
          : bs;
}
function Rm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => bu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function Ev(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = bu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function Tv(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    ((n[i] = a), r[s]++);
  }
  return n;
}
const Pv = (e, t) => {
  const n = st.createTransformer(t),
    r = fr(e),
    i = fr(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ul.has(e) && !i.values.length) || (ul.has(t) && !r.values.length)
      ? kv(e, t)
      : wi(Rm(Tv(r, i), i.values), n)
    : bs(e, t);
};
function Vm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? b(e, t, n)
    : bu(e)(e, t);
}
const Mv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => $.update(t, n),
      stop: () => nn(t),
      now: () => (pe.isProcessing ? pe.timestamp : Ce.now()),
    };
  },
  Nm = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Bs = 2e4;
function Bu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Bs; ) ((t += n), (r = e.next(t)));
  return t >= Bs ? 1 / 0 : t;
}
function _m(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Bu(r), Bs);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: Ke(i),
  };
}
const Z = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function cl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lv = 12;
function Av(e, t, n) {
  let r = n;
  for (let i = 1; i < Lv; i++) r = r - e(r) / t(r);
  return r;
}
const na = 0.001;
function Dv({
  duration: e = Z.duration,
  bounce: t = Z.bounce,
  velocity: n = Z.velocity,
  mass: r = Z.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = vt(Z.minDamping, Z.maxDamping, o)),
    (e = vt(Z.minDuration, Z.maxDuration, Ke(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            m = cl(u, o),
            y = Math.exp(-f);
          return na - (d / m) * y;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            m = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = cl(Math.pow(u, 2), o);
          return ((-i(u) + na > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -na + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = Av(i, s, a);
  if (((e = Ie(e)), isNaN(l)))
    return { stiffness: Z.stiffness, damping: Z.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const jv = ["duration", "bounce"],
  Rv = ["stiffness", "damping", "mass"];
function Af(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Vv(e) {
  let t = {
    velocity: Z.velocity,
    stiffness: Z.stiffness,
    damping: Z.damping,
    mass: Z.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Af(e, Rv) && Af(e, jv))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * vt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Z.mass, stiffness: i, damping: s };
    } else {
      const n = Dv({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: Z.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function fi(e = Z.visualDuration, t = Z.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: m,
    } = Vv({ ...n, velocity: -Ke(n.velocity || 0) }),
    y = d || 0,
    v = u / (2 * Math.sqrt(l * c)),
    k = o - s,
    p = Ke(Math.sqrt(l / c)),
    h = Math.abs(k) < 5;
  (r || (r = h ? Z.restSpeed.granular : Z.restSpeed.default),
    i || (i = h ? Z.restDelta.granular : Z.restDelta.default));
  let g, x, C, P, T, E;
  if (v < 1)
    ((C = cl(p, v)),
      (P = (y + v * p * k) / C),
      (g = (A) => {
        const _ = Math.exp(-v * p * A);
        return o - _ * (P * Math.sin(C * A) + k * Math.cos(C * A));
      }),
      (T = v * p * P + k * C),
      (E = v * p * k - P * C),
      (x = (A) =>
        Math.exp(-v * p * A) * (T * Math.sin(C * A) + E * Math.cos(C * A))));
  else if (v === 1) {
    g = (_) => o - Math.exp(-p * _) * (k + (y + p * k) * _);
    const A = y + p * k;
    x = (_) => Math.exp(-p * _) * (p * A * _ - y);
  } else {
    const A = p * Math.sqrt(v * v - 1);
    g = (de) => {
      const Le = Math.exp(-v * p * de),
        ye = Math.min(A * de, 300);
      return (
        o - (Le * ((y + v * p * k) * Math.sinh(ye) + A * k * Math.cosh(ye))) / A
      );
    };
    const _ = (y + v * p * k) / A,
      B = v * p * _ - k * A,
      q = v * p * k - _ * A;
    x = (de) => {
      const Le = Math.exp(-v * p * de),
        ye = Math.min(A * de, 300);
      return Le * (B * Math.sinh(ye) + q * Math.cosh(ye));
    };
  }
  const D = {
    calculatedDuration: (m && f) || null,
    velocity: (A) => Ie(x(A)),
    next: (A) => {
      if (!m && v < 1) {
        const B = Math.exp(-v * p * A),
          q = Math.sin(C * A),
          de = Math.cos(C * A),
          Le = o - B * (P * q + k * de),
          ye = Ie(B * (T * q + E * de));
        return (
          (a.done = Math.abs(ye) <= r && Math.abs(o - Le) <= i),
          (a.value = a.done ? o : Le),
          a
        );
      }
      const _ = g(A);
      if (m) a.done = A >= f;
      else {
        const B = Ie(x(A));
        a.done = Math.abs(B) <= r && Math.abs(o - _) <= i;
      }
      return ((a.value = a.done ? o : _), a);
    },
    toString: () => {
      const A = Math.min(Bu(D), Bs),
        _ = Nm((B) => D.next(A * B).value, A, 30);
      return A + "ms " + _;
    },
    toTransition: () => {},
  };
  return D;
}
fi.applyToOptions = (e) => {
  const t = _m(e, 100, fi);
  return (
    (e.ease = t.ease),
    (e.duration = Ie(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
const Nv = 5;
function Im(e, t, n) {
  const r = Math.max(t - Nv, 0);
  return hm(n - e(r), t - r);
}
function fl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    y = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
          ? a
          : l;
  let v = n * t;
  const k = f + v,
    p = o === void 0 ? k : o(k);
  p !== k && (v = p - f);
  const h = (E) => -v * Math.exp(-E / r),
    g = (E) => p + h(E),
    x = (E) => {
      const D = h(E),
        A = g(E);
      ((d.done = Math.abs(D) <= u), (d.value = d.done ? p : A));
    };
  let C, P;
  const T = (E) => {
    m(d.value) &&
      ((C = E),
      (P = fi({
        keyframes: [d.value, y(d.value)],
        velocity: Im(g, E, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let D = !1;
        return (
          !P && C === void 0 && ((D = !0), x(E), T(E)),
          C !== void 0 && E >= C ? P.next(E - C) : (!D && x(E), d)
        );
      },
    }
  );
}
function _v(e, t, n) {
  const r = [],
    i = n || tn.mix || Vm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Qe : t;
      a = wi(l, a);
    }
    r.push(a);
  }
  return r;
}
function Iv(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ru(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = _v(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = cr(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(vt(e[0], e[s - 1], c)) : u;
}
function zm(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = cr(0, t, r);
    e.push(b(n, 1, i));
  }
}
function Om(e) {
  const t = [0];
  return (zm(t, e.length - 1), t);
}
function zv(e, t) {
  return e.map((n) => n * t);
}
function Ov(e, t) {
  return e.map(() => t || Sm).splice(0, e.length - 1);
}
function Wr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = km(r) ? r.map(Cf) : Cf(r),
    s = { done: !1, value: t[0] },
    o = zv(n && n.length === t.length ? n : Om(t), e),
    a = Iv(o, t, { ease: Array.isArray(i) ? i : Ov(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Fv = (e) => e !== null;
function yo(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(Fv),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const bv = { decay: fl, inertia: fl, tween: Wr, keyframes: Wr, spring: fi };
function Fm(e) {
  typeof e.type == "string" && (e.type = bv[e.type]);
}
class $u {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Bv = (e) => e / 100;
class $s extends $u {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== Ce.now() && this.tick(Ce.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Fm(t);
    const {
      type: n = Wr,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Wr;
    l !== Wr &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = wi(Bv, Vm(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Bu(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: m,
      type: y,
      onUpdate: v,
      finalKeyframe: k,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let g = this.currentTime,
      x = r;
    if (f) {
      const E = Math.min(this.currentTime, i) / a;
      let D = Math.floor(E),
        A = E % 1;
      (!A && E >= 1 && (A = 1),
        A === 1 && D--,
        (D = Math.min(D, f + 1)),
        !!(D % 2) &&
          (d === "reverse"
            ? ((A = 1 - A), m && (A -= m / a))
            : d === "mirror" && (x = o)),
        (g = vt(0, 1, A) * a));
    }
    let C;
    (h
      ? ((this.delayState.value = c[0]), (C = this.delayState))
      : (C = x.next(g)),
      s && !h && (C.value = s(C.value)));
    let { done: P } = C;
    !h &&
      l !== null &&
      (P =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      T && y !== fl && (C.value = yo(c, this.options, k, this.speed)),
      v && v(C.value),
      T && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return Ke(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Ke(t);
  }
  get time() {
    return Ke(this.currentTime);
  }
  set time(t) {
    ((t = Ie(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Im((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime(Ce.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = Ke(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = Mv, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Ce.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function $v(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Sn = (e) => (e * 180) / Math.PI,
  dl = (e) => {
    const t = Sn(Math.atan2(e[1], e[0]));
    return hl(t);
  },
  Uv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: dl,
    rotateZ: dl,
    skewX: (e) => Sn(Math.atan(e[1])),
    skewY: (e) => Sn(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  hl = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Df = dl,
  jf = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Rf = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Wv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: jf,
    scaleY: Rf,
    scale: (e) => (jf(e) + Rf(e)) / 2,
    rotateX: (e) => hl(Sn(Math.atan2(e[6], e[5]))),
    rotateY: (e) => hl(Sn(Math.atan2(-e[2], e[0]))),
    rotateZ: Df,
    rotate: Df,
    skewX: (e) => Sn(Math.atan(e[4])),
    skewY: (e) => Sn(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function pl(e) {
  return e.includes("scale") ? 1 : 0;
}
function ml(e, t) {
  if (!e || e === "none") return pl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = Wv), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Uv), (i = a));
  }
  if (!i) return pl(t);
  const s = r[t],
    o = i[1].split(",").map(Kv);
  return typeof s == "function" ? s(o) : o[s];
}
const Hv = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return ml(n, t);
};
function Kv(e) {
  return parseFloat(e.trim());
}
const gr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yr = new Set([...gr, "pathRotation"]),
  Vf = (e) => e === mr || e === R,
  Gv = new Set(["x", "y", "z"]),
  Qv = gr.filter((e) => !Gv.has(e));
function Yv(e) {
  const t = [];
  return (
    Qv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ut = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => ml(t, "x"),
  y: (e, { transform: t }) => ml(t, "y"),
};
Ut.translateX = Ut.x;
Ut.translateY = Ut.y;
const En = new Set();
let gl = !1,
  yl = !1,
  vl = !1;
function bm() {
  if (yl) {
    const e = Array.from(En).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Yv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((yl = !1), (gl = !1), En.forEach((e) => e.complete(vl)), En.clear());
}
function Bm() {
  En.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (yl = !0));
  });
}
function Xv() {
  ((vl = !0), Bm(), bm(), (vl = !1));
}
class Uu {
  constructor(t, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (En.add(this), gl || ((gl = !0), $.read(Bm), $.resolveKeyframes(bm)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]));
    }
    $v(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      En.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (En.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Zv = (e) => e.startsWith("--");
function $m(e, t, n) {
  Zv(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Jv = {};
function Um(e, t) {
  const n = dm(e);
  return () => Jv[t] ?? n();
}
const qv = Um(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Wm = Um(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Vr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Nf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Vr([0, 0.65, 0.55, 1]),
    circOut: Vr([0.55, 0, 1, 0.45]),
    backIn: Vr([0.31, 0.01, 0.66, -0.59]),
    backOut: Vr([0.33, 1.53, 0.69, 0.99]),
  };
function Hm(e, t) {
  if (e)
    return typeof e == "function"
      ? Wm()
        ? Nm(e, t)
        : "ease-out"
      : Em(e)
        ? Vr(e)
        : Array.isArray(e)
          ? e.map((n) => Hm(n, t) || Nf.easeOut)
          : Nf[e];
}
function e2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Hm(a, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (d.pseudoElement = u), e.animate(c, d));
}
function Wu(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function t2({ type: e, ...t }) {
  return Wu(e) && Wm()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Km extends $u {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      Ru(typeof t.type != "string"));
    const u = t2(t);
    ((this.animation = e2(n, r, i, u, s)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = yo(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            $m(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return Ke(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Ke(t);
  }
  get time() {
    return Ke(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ie(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && qv()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          Qe)
        : i(this)
    );
  }
}
const Gm = { anticipate: vm, backInOut: ym, circInOut: wm };
function n2(e) {
  return e in Gm;
}
function r2(e) {
  typeof e.ease == "string" && n2(e.ease) && (e.ease = Gm[e.ease]);
}
const ra = 10;
class i2 extends Km {
  constructor(t) {
    (r2(t),
      Fm(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new $s({ ...o, autoplay: !1 }),
      l = Math.max(ra, Ce.now() - this.startTime),
      u = vt(0, ra, l - ra),
      c = a.sample(l).value,
      { name: f } = this.options;
    (s && f && $m(s, f, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop());
  }
}
const _f = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (st.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function s2(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function o2(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = _f(i, t),
    a = _f(s, t);
  return !o || !a ? !1 : s2(e) || ((n === "spring" || Wu(n)) && r);
}
function xl(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const Qm = new Set(["opacity", "clipPath", "filter", "transform"]),
  a2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function l2(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && a2.test(e[t])) return !0;
  return !1;
}
const u2 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  c2 = dm(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function f2(e) {
  var f;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
    keyframes: a,
  } = e;
  if (
    !(
      ((f = t == null ? void 0 : t.owner) == null
        ? void 0
        : f.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
  return (
    c2() &&
    n &&
    (Qm.has(n) || (u2.has(n) && l2(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const d2 = 40;
class h2 extends $u {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var y;
    (super(),
      (this.stop = () => {
        var v, k;
        (this._animation &&
          (this._animation.stop(),
          (v = this.stopTimeline) == null || v.call(this)),
          (k = this.keyframeResolver) == null || k.cancel());
      }),
      (this.createdAt = Ce.now()));
    const d = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      m = (c == null ? void 0 : c.KeyframeResolver) || Uu;
    ((this.keyframeResolver = new m(
      a,
      (v, k, p) => this.onKeyframesResolved(v, k, d, !p),
      l,
      u,
      c,
    )),
      (y = this.keyframeResolver) == null || y.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var p, h;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = Ce.now();
    let f = !0;
    o2(t, s, o, a) ||
      ((f = !1),
      (tn.instantAnimations || !l) && (c == null || c(yo(t, r, n))),
      (t[0] = t[t.length - 1]),
      xl(r),
      (r.repeat = 0));
    const m = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > d2
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y = f && !u && f2(m),
      v =
        (h = (p = m.motionValue) == null ? void 0 : p.owner) == null
          ? void 0
          : h.current;
    let k;
    if (y)
      try {
        k = new i2({ ...m, element: v });
      } catch {
        k = new $s(m);
      }
    else k = new $s(m);
    (k.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Qe),
      this.pendingTimeline &&
        ((this.stopTimeline = k.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = k));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Xv()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
class p2 {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((t) => t.finished));
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => r.attachTimeline(t));
    return () => {
      n.forEach((r, i) => {
        (r && r(), this.animations[i].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get state() {
    return this.getAll("state");
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    return If(this.animations, "duration");
  }
  get iterationDuration() {
    return If(this.animations, "iterationDuration");
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function If(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    const i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
class m2 extends p2 {
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
}
function Ym(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const zf = 30,
  g2 = (e) => !isNaN(parseFloat(e));
class y2 {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = Ce.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Ce.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = g2(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Vu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            $.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Ce.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > zf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, zf);
    return hm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function rn(e, t) {
  return new y2(e, t);
}
function Xm(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function Hu(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? Xm(n, e) : n;
}
const v2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  x2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  w2 = { type: "keyframes", duration: 0.8 },
  S2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  k2 = (e, { keyframes: t }) =>
    t.length > 2
      ? w2
      : yr.has(e)
        ? e.startsWith("scale")
          ? x2(t[1])
          : v2
        : S2,
  C2 = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function E2(e) {
  for (const t in e) if (!C2.has(t)) return !0;
  return !1;
}
const Ku =
    (e, t, n, r = {}, i, s) =>
    (o) => {
      const a = Hu(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Ie(l);
      const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          (t.set(d), a.onUpdate && a.onUpdate(d));
        },
        onComplete: () => {
          (o(), a.onComplete && a.onComplete());
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i,
      };
      (E2(a) || Object.assign(c, k2(e, c)),
        c.duration && (c.duration = Ie(c.duration)),
        c.repeatDelay && (c.repeatDelay = Ie(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from));
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          (xl(c), c.delay === 0 && (f = !0)),
        (tn.instantAnimations ||
          tn.skipAnimations ||
          (i != null && i.shouldSkipAnimations) ||
          a.skipAnimations) &&
          ((f = !0), xl(c), (c.delay = 0)),
        (c.allowFlatten = !a.type && !a.ease),
        f && !s && t.get() !== void 0)
      ) {
        const d = yo(c.keyframes, a);
        if (d !== void 0) {
          $.update(() => {
            (c.onUpdate(d), c.onComplete());
          });
          return;
        }
      }
      return a.isSync ? new $s(c) : new h2(c);
    },
  T2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function P2(e) {
  const t = T2.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Zm(e, t, n = 1) {
  const [r, i] = P2(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return um(o) ? parseFloat(o) : o;
  }
  return zu(i) ? Zm(i, t, n + 1) : i;
}
function Of(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Gu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Of(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Of(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Tn(e, t, n) {
  const r = e.getProps();
  return Gu(r, t, n !== void 0 ? n : r.custom, e);
}
const Jm = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...gr,
  ]),
  wl = (e) => Array.isArray(e);
function M2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, rn(n));
}
function L2(e) {
  return wl(e) ? e[e.length - 1] || 0 : e;
}
function A2(e, t) {
  const n = Tn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = L2(s[o]);
    M2(e, o, a);
  }
}
const ae = (e) => !!(e && e.getVelocity);
function D2(e) {
  return !!(ae(e) && e.add);
}
function Sl(e, t) {
  const n = e.getValue("willChange");
  if (D2(n)) return n.add(t);
  if (!n && tn.WillChange) {
    const r = new tn.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function Qu(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const j2 = "framerAppearId",
  qm = "data-" + Qu(j2);
function e0(e) {
  return e.props[qm];
}
function R2({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Yu(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? Xm(s, l) : l;
  const u = s == null ? void 0 : s.reduceMotion,
    c = s == null ? void 0 : s.skipAnimations;
  r && (s = r);
  const f = [],
    d = i && e.animationState && e.animationState.getState()[i],
    m = s == null ? void 0 : s.path;
  m && m.animateVisualElement(e, a, s, n, f);
  for (const y in a) {
    const v = e.getValue(y, e.latestValues[y] ?? null),
      k = a[y];
    if (k === void 0 || (d && R2(d, y))) continue;
    const p = { delay: n, ...Hu(s || {}, y) };
    c && (p.skipAnimations = !0);
    const h = v.get();
    if (
      h !== void 0 &&
      !v.isAnimating() &&
      !Array.isArray(k) &&
      k === h &&
      !p.velocity
    ) {
      $.update(() => v.set(k));
      continue;
    }
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const P = e0(e);
      if (P) {
        const T = window.MotionHandoffAnimation(P, y, $);
        T !== null && ((p.startTime = T), (g = !0));
      }
    }
    Sl(e, y);
    const x = u ?? e.shouldReduceMotion;
    v.start(Ku(y, v, k, x && Jm.has(y) ? { type: !1 } : p, e, g));
    const C = v.animation;
    C && f.push(C);
  }
  if (o) {
    const y = () =>
      $.update(() => {
        o && A2(e, o);
      });
    f.length ? Promise.all(f).then(y) : y();
  }
  return f;
}
function kl(e, t, n = {}) {
  var l;
  const r = Tn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(Yu(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return V2(e, t, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function V2(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        kl(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Ym(e.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function N2(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => kl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = kl(e, t, n);
  else {
    const i = typeof t == "function" ? Tn(e, t, n.custom) : t;
    r = Promise.all(Yu(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const _2 = { test: (e) => e === "auto", parse: (e) => e },
  t0 = (e) => (t) => t.test(e),
  n0 = [mr, R, yt, wt, lv, av, _2],
  Ff = (e) => n0.find(t0(e));
function I2(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || fm(e)
      : !0;
}
const z2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function O2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Ou) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = z2.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const F2 = /\b([a-z-]*)\(.*?\)/gu,
  Cl = {
    ...st,
    getAnimatableNone: (e) => {
      const t = e.match(F2);
      return t ? t.map(O2).join(" ") : e;
    },
  },
  El = {
    ...st,
    getAnimatableNone: (e) => {
      const t = st.parse(e);
      return st.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  bf = { ...mr, transform: Math.round },
  b2 = {
    rotate: wt,
    pathRotation: wt,
    rotateX: wt,
    rotateY: wt,
    rotateZ: wt,
    scale: Ui,
    scaleX: Ui,
    scaleY: Ui,
    scaleZ: Ui,
    skew: wt,
    skewX: wt,
    skewY: wt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: ci,
    originX: Tf,
    originY: Tf,
    originZ: R,
  },
  Us = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    inset: R,
    insetBlock: R,
    insetBlockStart: R,
    insetBlockEnd: R,
    insetInline: R,
    insetInlineStart: R,
    insetInlineEnd: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    paddingBlock: R,
    paddingBlockStart: R,
    paddingBlockEnd: R,
    paddingInline: R,
    paddingInlineStart: R,
    paddingInlineEnd: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    marginBlock: R,
    marginBlockStart: R,
    marginBlockEnd: R,
    marginInline: R,
    marginInlineStart: R,
    marginInlineEnd: R,
    fontSize: R,
    backgroundPositionX: R,
    backgroundPositionY: R,
    ...b2,
    zIndex: bf,
    fillOpacity: ci,
    strokeOpacity: ci,
    numOctaves: bf,
  },
  B2 = {
    ...Us,
    color: re,
    backgroundColor: re,
    outlineColor: re,
    fill: re,
    stroke: re,
    borderColor: re,
    borderTopColor: re,
    borderRightColor: re,
    borderBottomColor: re,
    borderLeftColor: re,
    filter: Cl,
    WebkitFilter: Cl,
    mask: El,
    WebkitMask: El,
  },
  r0 = (e) => B2[e],
  $2 = new Set([Cl, El]);
function i0(e, t) {
  let n = r0(e);
  return (
    $2.has(n) || (n = st),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const U2 = new Set(["auto", "none", "0"]);
function W2(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !U2.has(s) && fr(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = i0(n, i);
}
class H2 extends Uu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == "string" && ((f = f.trim()), zu(f))) {
        const d = Zm(f, n.current);
        (d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !Jm.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Ff(i),
      a = Ff(s),
      l = Ef(i),
      u = Ef(s);
    if (l !== u && Ut[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (Vf(o) && Vf(a))
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          typeof f == "string" && (t[c] = parseFloat(f));
        }
      else Ut[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || I2(t[i])) && r.push(i);
    r.length && W2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ut[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = Ut[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function vo(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    let r = document;
    t && (r = t.current);
    const i = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const Tl = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function as(e) {
  return cm(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: Xu } = Tm(queueMicrotask, !1),
  qe = { x: !1, y: !1 };
function s0() {
  return qe.x || qe.y;
}
function K2(e) {
  return e === "x" || e === "y"
    ? qe[e]
      ? null
      : ((qe[e] = !0),
        () => {
          qe[e] = !1;
        })
    : qe.x || qe.y
      ? null
      : ((qe.x = qe.y = !0),
        () => {
          qe.x = qe.y = !1;
        });
}
function o0(e, t) {
  const n = vo(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function G2(e) {
  return !(e.pointerType === "touch" || s0());
}
function Q2(e, t, n = {}) {
  const [r, i, s] = o0(e, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", y);
        },
        f = (k) => {
          (u && (u(k), (u = void 0)), c());
        },
        d = (k) => {
          ((a = !1),
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", d),
            l && ((l = !1), f(k)));
        },
        m = () => {
          ((a = !0),
            window.addEventListener("pointerup", d, i),
            window.addEventListener("pointercancel", d, i));
        },
        y = (k) => {
          if (k.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            f(k);
          }
        },
        v = (k) => {
          if (!G2(k)) return;
          l = !1;
          const p = t(o, k);
          typeof p == "function" &&
            ((u = p), o.addEventListener("pointerleave", y, i));
        };
      (o.addEventListener("pointerenter", v, i),
        o.addEventListener("pointerdown", m, i));
    }),
    s
  );
}
const a0 = (e, t) => (t ? (e === t ? !0 : a0(e, t.parentElement)) : !1),
  Zu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Y2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function X2(e) {
  return Y2.has(e.tagName) || e.isContentEditable === !0;
}
const Z2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function J2(e) {
  return Z2.has(e.tagName) || e.isContentEditable === !0;
}
const ls = new WeakSet();
function Bf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ia(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const q2 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Bf(() => {
    if (ls.has(n)) return;
    ia(n, "down");
    const i = Bf(() => {
        ia(n, "up");
      }),
      s = () => ia(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function $f(e) {
  return Zu(e) && !s0();
}
const Uf = new WeakSet();
function ex(e, t, n = {}) {
  const [r, i, s] = o0(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!$f(a) || Uf.has(a)) return;
      (ls.add(l), n.stopPropagation && Uf.add(a));
      const u = t(l, a),
        c = (m, y) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            ls.has(l) && ls.delete(l),
            $f(m) && typeof u == "function" && u(m, { success: y }));
        },
        f = (m) => {
          c(
            m,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              a0(l, m.target),
          );
        },
        d = (m) => {
          c(m, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        as(a) &&
          (a.addEventListener("focus", (u) => q2(u, i)),
          !X2(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function xo(e) {
  return cm(e) && "ownerSVGElement" in e;
}
const us = new WeakMap();
let _t;
const l0 = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : xo(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  tx = l0("inline", "width", "offsetWidth"),
  nx = l0("block", "height", "offsetHeight");
function rx({ target: e, borderBoxSize: t }) {
  var n;
  (n = us.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return tx(e, t);
        },
        get height() {
          return nx(e, t);
        },
      });
    });
}
function ix(e) {
  e.forEach(rx);
}
function sx() {
  typeof ResizeObserver > "u" || (_t = new ResizeObserver(ix));
}
function ox(e, t) {
  _t || sx();
  const n = vo(e);
  return (
    n.forEach((r) => {
      let i = us.get(r);
      (i || ((i = new Set()), us.set(r, i)),
        i.add(t),
        _t == null || _t.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = us.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || _t == null || _t.unobserve(r));
      });
    }
  );
}
const cs = new Set();
let Qn;
function ax() {
  ((Qn = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    cs.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Qn));
}
function lx(e) {
  return (
    cs.add(e),
    Qn || ax(),
    () => {
      (cs.delete(e),
        !cs.size &&
          typeof Qn == "function" &&
          (window.removeEventListener("resize", Qn), (Qn = void 0)));
    }
  );
}
function Wf(e, t) {
  return typeof e == "function" ? lx(e) : ox(e, t);
}
function u0(e) {
  return xo(e) && e.tagName === "svg";
}
const ux = [...n0, re, st],
  cx = (e) => ux.find(t0(e)),
  Hf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Yn = () => ({ x: Hf(), y: Hf() }),
  Kf = () => ({ min: 0, max: 0 }),
  ne = () => ({ x: Kf(), y: Kf() }),
  di = new WeakMap();
function wo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function hi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Ju = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  qu = ["initial", ...Ju];
function So(e) {
  return wo(e.animate) || qu.some((t) => hi(e[t]));
}
function c0(e) {
  return !!(So(e) || e.variants);
}
function fx(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ae(i)) e.addValue(r, i);
    else if (ae(s)) e.addValue(r, rn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, rn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Pl = { current: null },
  f0 = { current: !1 },
  dx = typeof window < "u";
function hx() {
  if (((f0.current = !0), !!dx))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Pl.current = e.matches);
      (e.addEventListener("change", t), t());
    } else Pl.current = !1;
}
const Gf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ws = {};
function d0(e) {
  Ws = e;
}
function px() {
  return Ws;
}
class h0 {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Uu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const m = Ce.now();
        this.renderScheduledAt < m &&
          ((this.renderScheduledAt = m), $.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = So(n)),
      (this.isVariantNode = c0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const m in d) {
      const y = d[m];
      u[m] !== void 0 && ae(y) && y.set(u[m]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      di.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (f0.current || hx(), (this.shouldReduceMotion = Pl.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      nn(this.notifyUpdate),
      nn(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && Qm.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        f = new Km({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: Ie(c),
        }),
        d = o(f);
      this.valueSubscriptions.set(t, () => {
        (d(), f.cancel());
      });
      return;
    }
    const r = yr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && $.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s && s());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ws) {
      const n = Ws[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ne();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Gf.length; r++) {
      const i = Gf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = fx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = rn(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (um(r) || fm(r))
          ? (r = parseFloat(r))
          : !cx(r) && st.test(n) && (r = i0(t, n)),
        this.setBaseTarget(t, ae(r) ? r.get() : r)),
      ae(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Gu(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ae(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Vu()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Xu.render(this.render);
  }
}
class p0 extends h0 {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = H2));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ae(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class un {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function m0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function mx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function sa(e) {
  return e === void 0 || e === 1;
}
function Ml({ scale: e, scaleX: t, scaleY: n }) {
  return !sa(e) || !sa(t) || !sa(n);
}
function gn(e) {
  return (
    Ml(e) ||
    g0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function g0(e) {
  return Qf(e.x) || Qf(e.y);
}
function Qf(e) {
  return e && e !== "0%";
}
function Hs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Yf(e, t, n, r, i) {
  return (i !== void 0 && (e = Hs(e, i, r)), Hs(e, n, r) + t);
}
function Ll(e, t = 0, n = 1, r, i) {
  ((e.min = Yf(e.min, t, n, r, i)), (e.max = Yf(e.max, t, n, r, i)));
}
function y0(e, { x: t, y: n }) {
  (Ll(e.x, t.translate, t.scale, t.originPoint),
    Ll(e.y, n.translate, n.scale, n.originPoint));
}
const Xf = 0.999999999999,
  Zf = 1.0000000000001;
function yx(e, t, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    ((s = n[l]), (o = s.projectionDelta));
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (dt(e.x, -s.scroll.offset.x), dt(e.y, -s.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), y0(e, o)),
      r &&
        gn(s.latestValues) &&
        fs(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  (t.x < Zf && t.x > Xf && (t.x = 1), t.y < Zf && t.y > Xf && (t.y = 1));
}
function dt(e, t) {
  ((e.min += t), (e.max += t));
}
function Jf(e, t, n, r, i = 0.5) {
  const s = b(e.min, e.max, i);
  Ll(e, t, n, s, r);
}
function qf(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function fs(e, t, n) {
  const r = n ?? e;
  (Jf(e.x, qf(t.x, r.x), t.scaleX, t.scale, t.originX),
    Jf(e.y, qf(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function v0(e, t) {
  return m0(gx(e.getBoundingClientRect(), t));
}
function vx(e, t, n) {
  const r = v0(e, n),
    { scroll: i } = t;
  return (i && (dt(r.x, i.offset.x), dt(r.y, i.offset.y)), r);
}
const xx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  wx = gr.length;
function Sx(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < wx; o++) {
    const a = gr[o],
      l = e[a];
    if (l === void 0) continue;
    let u = !0;
    if (typeof l == "number") u = l === (a.startsWith("scale") ? 1 : 0);
    else {
      const c = parseFloat(l);
      u = a.startsWith("scale") ? c === 1 : c === 0;
    }
    if (!u || n) {
      const c = Tl(l, Us[a]);
      if (!u) {
        i = !1;
        const f = xx[a] || a;
        r += `${f}(${c}) `;
      }
      n && (t[a] = c);
    }
  }
  const s = e.pathRotation;
  return (
    s && ((i = !1), (r += `rotate(${Tl(s, Us.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
    r
  );
}
function ec(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (yr.has(l)) {
      o = !0;
      continue;
    } else if (Mm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Tl(u, Us[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Sx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function x0(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function ed(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Lr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = ed(e, t.target.x),
        r = ed(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  kx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = st.parse(e);
      if (i.length > 5) return r;
      const s = st.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = b(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  Al = {
    borderRadius: {
      ...Lr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Lr,
    borderTopRightRadius: Lr,
    borderBottomLeftRadius: Lr,
    borderBottomRightRadius: Lr,
    boxShadow: kx,
  };
function w0(e, { layout: t, layoutId: n }) {
  return (
    yr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Al[e] || e === "opacity"))
  );
}
function tc(e, t, n) {
  var o;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const a in r)
    (ae(r[a]) ||
      (i && ae(i[a])) ||
      w0(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[a] = r[a]);
  return s;
}
function Cx(e) {
  return window.getComputedStyle(e);
}
class S0 extends p0 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = x0));
  }
  readValueFromInstance(t, n) {
    var r;
    if (yr.has(n))
      return (r = this.projection) != null && r.isProjecting ? pl(n) : Hv(t, n);
    {
      const i = Cx(t),
        s = (Mm(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return v0(t, n);
  }
  build(t, n, r) {
    ec(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return tc(t, n, r);
  }
}
function Ex(e, t) {
  return e in t;
}
class Tx extends h0 {
  constructor() {
    (super(...arguments), (this.type = "object"));
  }
  readValueFromInstance(t, n) {
    if (Ex(n, t)) {
      const r = t[n];
      if (typeof r == "string" || typeof r == "number") return r;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(t, n) {
    delete n.output[t];
  }
  measureInstanceViewportBox() {
    return ne();
  }
  build(t, n) {
    Object.assign(t.output, n);
  }
  renderInstance(t, { output: n }) {
    Object.assign(t, n);
  }
  sortInstanceNodePosition() {
    return 0;
  }
}
const Px = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Mx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Lx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Px : Mx;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const Ax = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function k0(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((ec(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: d } = e;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox));
  for (const m of Ax) f[m] !== void 0 && ((d[m] = f[m]), delete f[m]);
  (t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && Lx(f, i, s, o, !1));
}
const C0 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  E0 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Dx(e, t, n, r) {
  x0(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(C0.has(i) ? i : Qu(i), t.attrs[i]);
}
function T0(e, t, n) {
  const r = tc(e, t, n);
  for (const i in e)
    if (ae(e[i]) || ae(t[i])) {
      const s =
        gr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
class P0 extends p0 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ne));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (yr.has(n)) {
      const r = r0(n);
      return (r && r.default) || 0;
    }
    return ((n = C0.has(n) ? n : Qu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return T0(t, n, r);
  }
  build(t, n, r) {
    k0(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Dx(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = E0(t.tagName)), super.mount(t));
  }
}
const jx = qu.length;
function M0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? M0(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < jx; n++) {
    const r = qu[n],
      i = e.props[r];
    (hi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function L0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const Rx = [...Ju].reverse(),
  Vx = Ju.length;
function Nx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => N2(e, n, r)));
}
function _x(e) {
  let t = Nx(e),
    n = td(),
    r = !0,
    i = !1;
  const s = (u) => (c, f) => {
    var m;
    const d = Tn(
      e,
      f,
      u === "exit"
        ? (m = e.presenceContext) == null
          ? void 0
          : m.custom
        : void 0,
    );
    if (d) {
      const { transition: y, transitionEnd: v, ...k } = d;
      c = { ...c, ...k, ...v };
    }
    return c;
  };
  function o(u) {
    t = u(e);
  }
  function a(u) {
    const { props: c } = e,
      f = M0(e.parent) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let p = 0; p < Vx; p++) {
      const h = Rx[p],
        g = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        C = hi(x),
        P = h === u ? g.isActive : null;
      P === !1 && (v = p);
      let T = x === f[h] && x !== c[h] && C;
      if (
        (T && (r || i) && e.manuallyAnimateOnMount && (T = !1),
        (g.protectedKeys = { ...y }),
        (!g.isActive && P === null) ||
          (!x && !g.prevProp) ||
          wo(x) ||
          typeof x == "boolean")
      )
        continue;
      if (h === "exit" && g.isActive && P !== !0) {
        g.prevResolvedValues && (y = { ...y, ...g.prevResolvedValues });
        continue;
      }
      const E = Ix(g.prevProp, x);
      let D = E || (h === u && g.isActive && !T && C) || (p > v && C),
        A = !1;
      const _ = Array.isArray(x) ? x : [x];
      let B = _.reduce(s(h), {});
      P === !1 && (B = {});
      const { prevResolvedValues: q = {} } = g,
        de = { ...q, ...B },
        Le = (M) => {
          ((D = !0),
            m.has(M) && ((A = !0), m.delete(M)),
            (g.needsAnimating[M] = !0));
          const V = e.getValue(M);
          V && (V.liveStyle = !1);
        };
      for (const M in de) {
        const V = B[M],
          N = q[M];
        if (y.hasOwnProperty(M)) continue;
        let O = !1;
        (wl(V) && wl(N) ? (O = !L0(V, N) || E) : (O = V !== N),
          O
            ? V != null
              ? Le(M)
              : m.add(M)
            : V !== void 0 && m.has(M)
              ? Le(M)
              : (g.protectedKeys[M] = !0));
      }
      ((g.prevProp = x),
        (g.prevResolvedValues = B),
        g.isActive && (y = { ...y, ...B }),
        (r || i) && e.blockInitialAnimation && (D = !1));
      const ye = T && E;
      D &&
        (!ye || A) &&
        d.push(
          ..._.map((M) => {
            const V = { type: h };
            if (
              typeof M == "string" &&
              (r || i) &&
              !ye &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: N } = e,
                O = Tn(N, M);
              if (N.enteringChildren && O) {
                const { delayChildren: G } = O.transition || {};
                V.delay = Ym(N.enteringChildren, e, G);
              }
            }
            return { animation: M, options: V };
          }),
        );
    }
    if (m.size) {
      const p = {};
      if (typeof c.initial != "boolean") {
        const h = Tn(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        h && h.transition && (p.transition = h.transition);
      }
      (m.forEach((h) => {
        const g = e.getBaseTarget(h),
          x = e.getValue(h);
        (x && (x.liveStyle = !0), (p[h] = g ?? null));
      }),
        d.push({ animation: p }));
    }
    let k = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (k = !1),
      (r = !1),
      (i = !1),
      k ? t(d) : Promise.resolve()
    );
  }
  function l(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((m) => {
        var y;
        return (y = m.animationState) == null ? void 0 : y.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = a(u);
    for (const m in n) n[m].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = td()), (i = !0));
    },
  };
}
function Ix(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !L0(t, e) : !1;
}
function dn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function td() {
  return {
    animate: dn(!0),
    whileInView: dn(),
    whileHover: dn(),
    whileTap: dn(),
    whileDrag: dn(),
    whileFocus: dn(),
    exit: dn(),
  };
}
function Dl(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Je(e, t) {
  (Dl(e.x, t.x), Dl(e.y, t.y));
}
function nd(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const A0 = 1e-4,
  zx = 1 - A0,
  Ox = 1 + A0,
  D0 = 0.01,
  Fx = 0 - D0,
  bx = 0 + D0;
function Ee(e) {
  return e.max - e.min;
}
function Bx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function rd(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = b(t.min, t.max, e.origin)),
    (e.scale = Ee(n) / Ee(t)),
    (e.translate = b(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= zx && e.scale <= Ox) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Fx && e.translate <= bx) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Hr(e, t, n, r) {
  (rd(e.x, t.x, n.x, r ? r.originX : void 0),
    rd(e.y, t.y, n.y, r ? r.originY : void 0));
}
function id(e, t, n, r = 0) {
  const i = r ? b(n.min, n.max, r) : n.min;
  ((e.min = i + t.min), (e.max = e.min + Ee(t)));
}
function $x(e, t, n, r) {
  (id(e.x, t.x, n.x, r == null ? void 0 : r.x),
    id(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function sd(e, t, n, r = 0) {
  const i = r ? b(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + Ee(t)));
}
function Ks(e, t, n, r) {
  (sd(e.x, t.x, n.x, r == null ? void 0 : r.x),
    sd(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function od(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Hs(e, 1 / n, r)),
    i !== void 0 && (e = Hs(e, 1 / i, r)),
    e
  );
}
function Ux(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (yt.test(t) &&
      ((t = parseFloat(t)), (t = b(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = b(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = od(e.min, t, n, a, i)),
    (e.max = od(e.max, t, n, a, i)));
}
function ad(e, t, [n, r, i], s, o) {
  Ux(e, t[n], t[r], t[i], t.scale, s, o);
}
const Wx = ["x", "scaleX", "originX"],
  Hx = ["y", "scaleY", "originY"];
function ld(e, t, n, r) {
  (ad(e.x, t, Wx, n ? n.x : void 0, r ? r.x : void 0),
    ad(e.y, t, Hx, n ? n.y : void 0, r ? r.y : void 0));
}
function ud(e) {
  return e.translate === 0 && e.scale === 1;
}
function j0(e) {
  return ud(e.x) && ud(e.y);
}
function cd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Kx(e, t) {
  return cd(e.x, t.x) && cd(e.y, t.y);
}
function fd(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function R0(e, t) {
  return fd(e.x, t.x) && fd(e.y, t.y);
}
function dd(e) {
  return Ee(e.x) / Ee(e.y);
}
function hd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function ft(e) {
  return [e("x"), e("y")];
}
function Gx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      pathRotation: f,
      rotateX: d,
      rotateY: m,
      skewX: y,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotate(${f}deg) `),
      d && (r += `rotateX(${d}deg) `),
      m && (r += `rotateY(${m}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const V0 = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Qx = V0.length,
  pd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  md = (e) => typeof e == "number" || R.test(e);
function Yx(e, t, n, r, i, s) {
  i
    ? ((e.opacity = b(0, n.opacity ?? 1, Xx(r))),
      (e.opacityExit = b(t.opacity ?? 1, 0, Zx(r))))
    : s && (e.opacity = b(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < Qx; o++) {
    const a = V0[o];
    let l = gd(t, a),
      u = gd(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || md(l) === md(u)
        ? ((e[a] = Math.max(b(pd(l), pd(u), r), 0)),
          (yt.test(u) || yt.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = b(t.rotate || 0, n.rotate || 0, r));
}
function gd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Xx = N0(0, 0.5, xm),
  Zx = N0(0.5, 0.95, Qe);
function N0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(cr(e, t, r)));
}
function _0(e, t, n) {
  const r = ae(e) ? e : rn(e);
  return (r.start(Ku("", r, t, n)), r.animation);
}
function pi(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const Jx = (e, t) => e.depth - t.depth;
class qx {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (ju(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (ur(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(Jx),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function e3(e, t) {
  const n = Ce.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (nn(r), e(s - t));
    };
  return ($.setup(r, !0), () => nn(r));
}
function ds(e) {
  return ae(e) ? e.get() : e;
}
class t3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ju(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (ur(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (ur(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: o } = t.options;
      ((s === void 0 || s !== o) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, s, o;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (o =
          (i = t.resumingFrom) == null
            ? void 0
            : (s = i.options).onExitComplete) == null || o.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const hs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  oa = ["", "X", "Y", "Z"],
  n3 = 1e3;
let r3 = 0;
function aa(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function I0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = e0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", $, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && I0(r);
}
function z0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = r3++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(o3),
            this.nodes.forEach(d3),
            this.nodes.forEach(h3),
            this.nodes.forEach(a3));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qx());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Vu()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = xo(o) && !u0(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        ($.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const m = window.innerWidth;
            m !== f &&
              ((f = m),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = e3(d, 250)),
              hs.hasAnimatedSinceResize &&
                ((hs.hasAnimatedSinceResize = !1), this.nodes.forEach(xd)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: d,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const y =
                  this.options.transition || u.getDefaultTransition() || v3,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: k } =
                  u.getProps(),
                p = !this.targetLayout || !R0(this.targetLayout, m),
                h = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const g = { ...Hu(y, "layout"), onPlay: v, onComplete: k };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(c, h, g.path));
              } else
                (f || xd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = m;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        nn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(p3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          I0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(u3),
          this.nodes.forEach(yd));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(vd);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(c3),
            this.nodes.forEach(f3),
            this.nodes.forEach(i3),
            this.nodes.forEach(s3))
          : this.nodes.forEach(vd),
        this.clearAllSnapshots());
      const a = Ce.now();
      ((pe.delta = vt(0, 1e3 / 60, a - pe.timestamp)),
        (pe.timestamp = a),
        (pe.isProcessing = !0),
        Jo.update.process(pe),
        Jo.preRender.process(pe),
        Jo.render.process(pe),
        (pe.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Xu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(l3), this.sharedNodes.forEach(m3));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        $.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      $.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ee(this.snapshot.measuredBox.x) &&
          !Ee(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = ne()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !j0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || gn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        x3(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return ne();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(w3)
        )
      ) {
        const { scroll: c } = this.root;
        c && (dt(a.x, c.offset.x), dt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = ne();
      if ((Je(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Je(a, o), dt(a.x, f.offset.x), dt(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, l) {
      var c, f;
      const u = l || ne();
      Je(u, o);
      for (let d = 0; d < this.path.length; d++) {
        const m = this.path[d];
        (!a &&
          m.options.layoutScroll &&
          m.scroll &&
          m !== m.root &&
          (dt(u.x, -m.scroll.offset.x), dt(u.y, -m.scroll.offset.y)),
          gn(m.latestValues) &&
            fs(
              u,
              m.latestValues,
              (c = m.layout) == null ? void 0 : c.layoutBox,
            ));
      }
      return (
        gn(this.latestValues) &&
          fs(
            u,
            this.latestValues,
            (f = this.layout) == null ? void 0 : f.layoutBox,
          ),
        u
      );
    }
    removeTransform(o) {
      var l;
      const a = ne();
      Je(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!gn(c.latestValues)) continue;
        let f;
        (c.instance &&
          (Ml(c.latestValues) && c.updateSnapshot(),
          (f = ne()),
          Je(f, c.measurePageBox())),
          ld(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            f,
          ));
      }
      return (gn(this.latestValues) && ld(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== pe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var m;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((m = this.parent) != null && m.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = pe.timestamp;
      const d = this.getClosestProjectingParent();
      (d &&
        this.linkedParentVersion !== d.layoutVersion &&
        !d.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && d && d.layout
            ? this.createRelativeTarget(
                d,
                this.layout.layoutBox,
                d.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ne()), (this.targetWithTransforms = ne())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              $x(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Je(this.target, this.layout.layoutBox),
                y0(this.target, this.targetDelta))
              : Je(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(d, this.target, d.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ml(this.parent.latestValues) ||
          g0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = ne()),
        (this.relativeTargetOrigin = ne()),
        Ks(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0,
        ),
        Je(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var y;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === pe.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Je(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (yx(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = ne())));
      const { target: m } = o;
      if (!m) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (nd(this.prevProjectionDelta.x, this.projectionDelta.x),
          nd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Hr(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !hd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Yn()),
        (this.projectionDelta = Yn()),
        (this.projectionDeltaWithTransform = Yn()));
    }
    setAnimationOrigin(o, a = !1, l) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        f = { ...this.latestValues },
        d = Yn();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const m = ne(),
        y = u ? u.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        k = y !== v,
        p = this.getStack(),
        h = !p || p.members.length <= 1,
        g = !!(k && !h && this.options.crossfade === !0 && !this.path.some(y3));
      this.animationProgress = 0;
      let x;
      const C = l == null ? void 0 : l.interpolateProjection(o);
      ((this.mixTargetDelta = (P) => {
        const T = P / 1e3,
          E = C == null ? void 0 : C(T);
        (E
          ? ((d.x.translate = E.x),
            (d.x.scale = b(o.x.scale, 1, T)),
            (d.x.origin = o.x.origin),
            (d.x.originPoint = o.x.originPoint),
            (d.y.translate = E.y),
            (d.y.scale = b(o.y.scale, 1, T)),
            (d.y.origin = o.y.origin),
            (d.y.originPoint = o.y.originPoint))
          : (wd(d.x, o.x, T), wd(d.y, o.y, T)),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ks(
              m,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            g3(this.relativeTarget, this.relativeTargetOrigin, m, T),
            x && Kx(this.relativeTarget, x) && (this.isProjectionDirty = !1),
            x || (x = ne()),
            Je(x, this.relativeTarget)),
          k &&
            ((this.animationValues = f), Yx(f, c, this.latestValues, T, g, h)),
          E &&
            E.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = f),
            (this.animationValues.pathRotation = E.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = $.update(() => {
          ((hs.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = rn(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = _0(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(n3),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          O0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ne();
          const f = Ee(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const d = Ee(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (Je(a, l),
          fs(a, c),
          Hr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new t3()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && aa("z", o, u, this.animationValues);
      for (let c = 0; c < oa.length; c++)
        (aa(`rotate${oa[c]}`, o, u, this.animationValues),
          aa(`skew${oa[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = ds(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = ds(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = Gx(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (o.transform = f));
      const { x: d, y: m } = this.projectionDelta;
      ((o.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const y in Al) {
        if (c[y] === void 0) continue;
        const { correct: v, applyTo: k, isCSSVariable: p } = Al[y],
          h = f === "none" ? c[y] : v(c[y], u);
        if (k) {
          const g = k.length;
          for (let x = 0; x < g; x++) o[k[x]] = h;
        } else
          p ? (this.options.visualElement.renderState.vars[y] = h) : (o[y] = h);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? ds(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(yd),
        this.root.sharedNodes.clear());
    }
  };
}
function i3(e) {
  e.updateLayout();
}
function s3(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    if (s === "size")
      ft((f) => {
        const d = o ? t.measuredBox[f] : t.layoutBox[f],
          m = Ee(d);
        ((d.min = r[f].min), (d.max = d.min + m));
      });
    else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      Dl(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
    } else
      O0(s, t.layoutBox, r) &&
        ft((f) => {
          const d = o ? t.measuredBox[f] : t.layoutBox[f],
            m = Ee(r[f]);
          ((d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m)));
        });
    const a = Yn();
    Hr(a, r, t.layoutBox);
    const l = Yn();
    o ? Hr(l, e.applyTransform(i, !0), t.measuredBox) : Hr(l, r, t.layoutBox);
    const u = !j0(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = e.options.layoutAnchor || void 0,
            v = ne();
          Ks(v, t.layoutBox, d.layoutBox, y);
          const k = ne();
          (Ks(k, r, m.layoutBox, y),
            R0(v, k) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = k),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function o3(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function a3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function l3(e) {
  e.clearSnapshot();
}
function yd(e) {
  e.clearMeasurements();
}
function u3(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function vd(e) {
  e.isLayoutDirty = !1;
}
function c3(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function f3(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function xd(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function d3(e) {
  e.resolveTargetDelta();
}
function h3(e) {
  e.calcProjection();
}
function p3(e) {
  e.resetSkewAndRotation();
}
function m3(e) {
  e.removeLeadSnapshot();
}
function wd(e, t, n) {
  ((e.translate = b(t.translate, 0, n)),
    (e.scale = b(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Sd(e, t, n, r) {
  ((e.min = b(t.min, n.min, r)), (e.max = b(t.max, n.max, r)));
}
function g3(e, t, n, r) {
  (Sd(e.x, t.x, n.x, r), Sd(e.y, t.y, n.y, r));
}
function y3(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const v3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  kd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Cd = kd("applewebkit/") && !kd("chrome/") ? Math.round : Qe;
function Ed(e) {
  ((e.min = Cd(e.min)), (e.max = Cd(e.max)));
}
function x3(e) {
  (Ed(e.x), Ed(e.y));
}
function O0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Bx(dd(t), dd(n), 0.2))
  );
}
function w3(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const S3 = z0({
    attachResizeListener: (e, t) => pi(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  la = { current: void 0 },
  F0 = z0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!la.current) {
        const e = new S3({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (la.current = e));
      }
      return la.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  ko = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Td(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function k3(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = Td(i, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : Td(e[i], null);
        }
      };
  };
}
function C3(...e) {
  return S.useCallback(k3(...e), e);
}
class E3 extends S.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (
      as(n) &&
      t.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = n.offsetParent,
        i = (as(r) && r.offsetWidth) || 0,
        s = (as(r) && r.offsetHeight) || 0,
        o = getComputedStyle(n),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(o.height)),
        (a.width = parseFloat(o.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = s - a.height - a.top),
        (a.direction = o.direction));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function T3({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: s,
}) {
  var d;
  const o = S.useId(),
    a = S.useRef(null),
    l = S.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: u } = S.useContext(ko),
    c =
      ((d = e.props) == null ? void 0 : d.ref) ?? (e == null ? void 0 : e.ref),
    f = C3(a, c);
  return (
    S.useInsertionEffect(() => {
      const {
        width: m,
        height: y,
        top: v,
        left: k,
        right: p,
        bottom: h,
        direction: g,
      } = l.current;
      if (t || s === !1 || !a.current || !m || !y) return;
      const x = g === "rtl",
        C =
          n === "left"
            ? x
              ? `right: ${p}`
              : `left: ${k}`
            : x
              ? `left: ${k}`
              : `right: ${p}`,
        P = r === "bottom" ? `bottom: ${h}` : `top: ${v}`;
      a.current.dataset.motionPopId = o;
      const T = document.createElement("style");
      u && (T.nonce = u);
      const E = i ?? document.head;
      return (
        E.appendChild(T),
        T.sheet &&
          T.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${C}px !important;
            ${P}px !important;
          }
        `),
        () => {
          var D;
          ((D = a.current) == null || D.removeAttribute("data-motion-pop-id"),
            E.contains(T) && E.removeChild(T));
        }
      );
    }, [t]),
    w.jsx(E3, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? e : S.cloneElement(e, { ref: f }),
    })
  );
}
const P3 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = mo(M3),
    f = S.useId();
  let d = !0,
    m = S.useMemo(
      () => (
        (d = !1),
        {
          id: f,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (y) => {
            c.set(y, !0);
            for (const v of c.values()) if (!v) return;
            r && r();
          },
          register: (y) => (c.set(y, !1), () => c.delete(y)),
        }
      ),
      [n, c, r],
    );
  return (
    s && d && (m = { ...m }),
    S.useMemo(() => {
      c.forEach((y, v) => c.set(v, !1));
    }, [n]),
    S.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = w.jsx(T3, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    w.jsx(go.Provider, { value: m, children: e })
  );
};
function M3() {
  return new Map();
}
function b0(e = !0) {
  const t = S.useContext(go);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = S.useId();
  S.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = S.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Wi = (e) => e.key || "";
function Pd(e) {
  const t = [];
  return (
    S.Children.forEach(e, (n) => {
      S.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const B0 = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, f] = b0(o),
      d = S.useMemo(() => Pd(e), [e]),
      m = o && !c ? [] : d.map(Wi),
      y = S.useRef(!0),
      v = S.useRef(d),
      k = mo(() => new Map()),
      p = S.useRef(new Set()),
      [h, g] = S.useState(d),
      [x, C] = S.useState(d);
    lm(() => {
      ((y.current = !1), (v.current = d));
      for (let E = 0; E < x.length; E++) {
        const D = Wi(x[E]);
        m.includes(D)
          ? (k.delete(D), p.current.delete(D))
          : k.get(D) !== !0 && k.set(D, !1);
      }
    }, [x, m.length, m.join("-")]);
    const P = [];
    if (d !== h) {
      let E = [...d];
      for (let D = 0; D < x.length; D++) {
        const A = x[D],
          _ = Wi(A);
        m.includes(_) || (E.splice(D, 0, A), P.push(A));
      }
      return (s === "wait" && P.length && (E = P), C(Pd(E)), g(d), null);
    }
    const { forceRender: T } = S.useContext(Du);
    return w.jsx(w.Fragment, {
      children: x.map((E) => {
        const D = Wi(E),
          A = o && !c ? !1 : d === x || m.includes(D),
          _ = () => {
            if (p.current.has(D)) return;
            if (k.has(D)) (p.current.add(D), k.set(D, !0));
            else return;
            let B = !0;
            (k.forEach((q) => {
              q || (B = !1);
            }),
              B &&
                (T == null || T(),
                C(v.current),
                o && (f == null || f()),
                r && r()));
          };
        return w.jsx(
          P3,
          {
            isPresent: A,
            initial: !y.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: u,
            onExitComplete: A ? void 0 : _,
            anchorX: a,
            anchorY: l,
            children: E,
          },
          D,
        );
      }),
    });
  },
  $0 = S.createContext({ strict: !1 }),
  Md = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Ld = !1;
function L3() {
  if (Ld) return;
  const e = {};
  for (const t in Md) e[t] = { isEnabled: (n) => Md[t].some((r) => !!n[r]) };
  (d0(e), (Ld = !0));
}
function U0() {
  return (L3(), px());
}
function A3(e) {
  const t = U0();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  d0(t);
}
const D3 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Gs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    D3.has(e)
  );
}
let W0 = (e) => !Gs(e);
function j3(e) {
  typeof e == "function" && (W0 = (t) => (t.startsWith("on") ? !Gs(t) : e(t)));
}
try {
  j3(require("@emotion/is-prop-valid").default);
} catch {}
function R3(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ae(e[i]) ||
      ((W0(i) ||
        (n === !0 && Gs(i)) ||
        (!t && !Gs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Co = S.createContext({});
function V3(e, t) {
  if (So(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hi(n) ? n : void 0,
      animate: hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function N3(e) {
  const { initial: t, animate: n } = V3(e, S.useContext(Co));
  return S.useMemo(() => ({ initial: t, animate: n }), [Ad(t), Ad(n)]);
}
function Ad(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const nc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function H0(e, t, n) {
  for (const r in t) !ae(t[r]) && !w0(r, n) && (e[r] = t[r]);
}
function _3({ transformTemplate: e }, t) {
  return S.useMemo(() => {
    const n = nc();
    return (ec(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function I3(e, t) {
  const n = e.style || {},
    r = {};
  return (H0(r, n, e), Object.assign(r, _3(e, t)), r);
}
function z3(e, t) {
  const n = {},
    r = I3(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const K0 = () => ({ ...nc(), attrs: {} });
function O3(e, t, n, r) {
  const i = S.useMemo(() => {
    const s = K0();
    return (
      k0(s, t, E0(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (H0(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const F3 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function rc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(F3.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function b3(e, t, n, { latestValues: r }, i, s = !1, o) {
  const l = ((o ?? rc(e)) ? O3 : z3)(t, r, i, e),
    u = R3(t, typeof e == "string", s),
    c = e !== S.Fragment ? { ...u, ...l, ref: n } : {},
    { children: f } = t,
    d = S.useMemo(() => (ae(f) ? f.get() : f), [f]);
  return S.createElement(e, { ...c, children: d });
}
function B3({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: $3(n, r, i, e), renderState: t() };
}
function $3(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = ds(s[d]);
  let { initial: o, animate: a } = e;
  const l = So(e),
    u = c0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !wo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let m = 0; m < d.length; m++) {
      const y = Gu(e, d[m]);
      if (y) {
        const { transitionEnd: v, transition: k, ...p } = y;
        for (const h in p) {
          let g = p[h];
          if (Array.isArray(g)) {
            const x = c ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[h] = g);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const G0 = (e) => (t, n) => {
    const r = S.useContext(Co),
      i = S.useContext(go),
      s = () => B3(e, t, r, i);
    return n ? s() : mo(s);
  },
  U3 = G0({ scrapeMotionValuesFromProps: tc, createRenderState: nc }),
  W3 = G0({ scrapeMotionValuesFromProps: T0, createRenderState: K0 }),
  H3 = Symbol.for("motionComponentSymbol");
function K3(e, t, n) {
  const r = S.useRef(n);
  S.useInsertionEffect(() => {
    r.current = n;
  });
  const i = S.useRef(null);
  return S.useCallback(
    (s) => {
      var a;
      (s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount()));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const l = o(s);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
    },
    [t],
  );
}
const Q0 = S.createContext({});
function Nn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function G3(e, t, n, r, i, s) {
  var g, x;
  const { visualElement: o } = S.useContext(Co),
    a = S.useContext($0),
    l = S.useContext(go),
    u = S.useContext(ko),
    c = u.reducedMotion,
    f = u.skipAnimations,
    d = S.useRef(null),
    m = S.useRef(!1);
  ((r = r || a.renderer),
    !d.current &&
      r &&
      ((d.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: s,
      })),
      m.current && d.current && (d.current.manuallyAnimateOnMount = !0)));
  const y = d.current,
    v = S.useContext(Q0);
  y &&
    !y.projection &&
    i &&
    (y.type === "html" || y.type === "svg") &&
    Q3(d.current, n, i, v);
  const k = S.useRef(!1);
  S.useInsertionEffect(() => {
    y && k.current && y.update(n, l);
  });
  const p = n[qm],
    h = S.useRef(
      !!p &&
        typeof window < "u" &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, p)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, p)),
    );
  return (
    lm(() => {
      ((m.current = !0),
        y &&
          ((k.current = !0),
          (window.MotionIsMounted = !0),
          y.updateFeatures(),
          y.scheduleRenderMicrotask(),
          h.current && y.animationState && y.animationState.animateChanges()));
    }),
    S.useEffect(() => {
      y &&
        (!h.current && y.animationState && y.animationState.animateChanges(),
        h.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null ||
              C.call(window, p);
          }),
          (h.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function Q3(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: f,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Y0(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Nn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function Y0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Y0(e.parent);
}
function ua(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && A3(r);
  const s = n ? n === "svg" : rc(e),
    o = s ? W3 : U3;
  function a(u, c) {
    let f;
    const d = { ...S.useContext(ko), ...u, layoutId: Y3(u) },
      { isStatic: m } = d,
      y = N3(u),
      v = o(u, m);
    if (!m && typeof window < "u") {
      X3();
      const k = Z3(d);
      ((f = k.MeasureLayout),
        (y.visualElement = G3(e, v, d, i, k.ProjectionNode, s)));
    }
    return w.jsxs(Co.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? w.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        b3(e, u, K3(v, y.visualElement, c), v, m, t, s),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = S.forwardRef(a);
  return ((l[H3] = e), l);
}
function Y3({ layoutId: e }) {
  const t = S.useContext(Du).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function X3(e, t) {
  S.useContext($0).strict;
}
function Z3(e) {
  const t = U0(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function J3(e, t) {
  if (typeof Proxy > "u") return ua;
  const n = new Map(),
    r = (s, o) => ua(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, ua(o, void 0, e, t)), n.get(o)),
  });
}
const q3 = (e, t) =>
  (t.isSVG ?? rc(e))
    ? new P0(t)
    : new S0(t, { allowProjection: e !== S.Fragment });
class ew extends un {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = _x(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    wo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let tw = 0;
class nw extends un {
  constructor() {
    (super(...arguments), (this.id = tw++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: a } = this.node.getProps();
        if (
          typeof o == "string" ||
          (typeof o == "object" && o !== null && !Array.isArray(o))
        ) {
          const l = Tn(this.node, o, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...f } = l;
            for (const d in f)
              (s = this.node.getValue(d)) == null || s.jump(f[d]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const rw = { animation: { Feature: ew }, exit: { Feature: nw } };
function Ci(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const iw = (e) => (t) => Zu(t) && e(t, Ci(t));
function Kr(e, t, n, r) {
  return pi(e, t, iw(n), r);
}
const X0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Dd = (e, t) => Math.abs(e - t);
function sw(e, t) {
  const n = Dd(e.x, t.x),
    r = Dd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const jd = new Set(["auto", "scroll"]);
class Z0 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (m) => {
        this.handleScroll(m.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Hi(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const m = ca(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          v = sw(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: k } = m,
          { timestamp: p } = pe;
        this.history.push({ ...k, timestamp: p });
        const { onStart: h, onMove: g } = this.handlers;
        (y ||
          (h && h(this.lastMoveEvent, m),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, m));
      }),
      (this.handlePointerMove = (m, y) => {
        ((this.lastMoveEvent = m),
          (this.lastRawMoveEventInfo = y),
          (this.lastMoveEventInfo = Hi(y, this.transformPagePoint)),
          $.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (m, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: k, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const h = ca(
          m.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Hi(y, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && v && v(m, h), k && k(m, h));
      }),
      !Zu(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const l = Ci(t),
      u = Hi(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = pe;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    (d && d(t, ca(u, this.history)),
      (this.removeListeners = wi(
        Kr(this.contextWindow, "pointermove", this.handlePointerMove),
        Kr(this.contextWindow, "pointerup", this.handlePointerUp),
        Kr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((jd.has(r.overflowX) || jd.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, i),
      $.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      nn(this.updatePoint));
  }
}
function Hi(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ca({ point: e }, t) {
  return {
    point: e,
    delta: Rd(e, J0(t)),
    offset: Rd(e, ow(t)),
    velocity: aw(t, 0.1),
  };
}
function ow(e) {
  return e[0];
}
function J0(e) {
  return e[e.length - 1];
}
function aw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = J0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ie(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Ie(t) * 2 &&
    (r = e[1]);
  const s = Ke(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function lw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? b(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? b(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Vd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function uw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Vd(e.x, n, i), y: Vd(e.y, t, r) };
}
function Nd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function cw(e, t) {
  return { x: Nd(e.x, t.x), y: Nd(e.y, t.y) };
}
function fw(e, t) {
  let n = 0.5;
  const r = Ee(e),
    i = Ee(t);
  return (
    i > r
      ? (n = cr(t.min, t.max - r, e.min))
      : r > i && (n = cr(e.min, e.max - i, t.min)),
    vt(0, 1, n)
  );
}
function dw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const jl = 0.35;
function hw(e = jl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = jl),
    { x: _d(e, "left", "right"), y: _d(e, "top", "bottom") }
  );
}
function _d(e, t, n) {
  return { min: Id(e, t), max: Id(e, n) };
}
function Id(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const pw = new WeakMap();
class mw {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ne()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(Ci(f).point), this.stopAnimation());
      },
      o = (f, d) => {
        const { drag: m, dragPropagation: y, onDragStart: v } = this.getProps();
        if (
          m &&
          !y &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = K2(m)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ft((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (yt.test(h)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const x = g.layout.layoutBox[p];
                x && (h = Ee(x) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          v && $.update(() => v(f, d), !1, !0),
          Sl(this.visualElement, "transform"));
        const { animationState: k } = this.visualElement;
        k && k.setActive("whileDrag", !0);
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: m,
          dragDirectionLock: y,
          onDirectionLock: v,
          onDrag: k,
        } = this.getProps();
        if (!m && !this.openDragLock) return;
        const { offset: p } = d;
        if (y && this.currentDirection === null) {
          ((this.currentDirection = yw(p)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, p),
          this.updateAxis("y", d.point, p),
          this.visualElement.render(),
          k && $.update(() => k(f, d), !1, !0));
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Z0(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: X0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && $.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ki(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = lw(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (t && Nn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = uw(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = hw(n)),
      i !== this.constraints &&
        !Nn(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ft((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = dw(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Nn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    i.root && ((i.root.scroll = void 0), i.root.updateScroll());
    const s = vx(r, i.root, this.visualElement.getTransformPagePoint());
    let o = cw(i.layout.layoutBox, s);
    if (n) {
      const a = n(mx(o));
      ((this.hasMutatedConstraints = !!a), a && (o = m0(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ft((c) => {
        if (!Ki(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        (o === !0 || o === c) && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Sl(this.visualElement, t),
      r.start(Ku(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ft((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      i = this.visualElement.getProps()[n];
    return (
      i ||
      this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
    );
  }
  snapToCursor(t) {
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!Ki(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n],
          l = s.get() || 0;
        s.set(t[n] - b(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Nn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ft((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = fw({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      ft((o) => {
        if (!Ki(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(b(l, u, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    pw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Kr(t, "pointerdown", (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          d = u.target,
          m = d !== t && J2(d);
        c && f && !m && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        Nn(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = gw(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      $.read(i));
    const a = pi(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (ft((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += u[f].translate),
                d.set(d.get() + u[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = jl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function zd(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function gw(e, t, n) {
  const r = Wf(e, zd(n)),
    i = Wf(t, zd(n));
  return () => {
    (r(), i());
  };
}
function Ki(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function yw(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class vw extends un {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Qe),
      (this.removeListeners = Qe),
      (this.controls = new mw(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Qe));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const fa = (e) => (t, n) => {
  e && $.update(() => e(t, n), !1, !0);
};
class xw extends un {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Qe));
  }
  onPointerDown(t) {
    this.session = new Z0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: X0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: fa(t),
      onStart: fa(n),
      onMove: fa(r),
      onEnd: (s, o) => {
        (delete this.session, i && $.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Kr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let da = !1;
class ww extends S.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      da && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (hs.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (da = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              $.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      Xu.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((da = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function q0(e) {
  const [t, n] = b0(),
    r = S.useContext(Du);
  return w.jsx(ww, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(Q0),
    isPresent: t,
    safeToRemove: n,
  });
}
const Sw = {
  pan: { Feature: xw },
  drag: { Feature: vw, ProjectionNode: F0, MeasureLayout: q0 },
};
function Od(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && $.postRender(() => s(t, Ci(t)));
}
class kw extends un {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Q2(
        t,
        (n, r) => (Od(this.node, r, "Start"), (i) => Od(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class Cw extends un {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = wi(
      pi(this.node.current, "focus", () => this.onFocus()),
      pi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Fd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && $.postRender(() => s(t, Ci(t)));
}
class Ew extends un {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = ex(
      t,
      (i, s) => (
        Fd(this.node, s, "Start"),
        (o, { success: a }) => Fd(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Rl = new WeakMap(),
  ha = new WeakMap(),
  Tw = (e) => {
    const t = Rl.get(e.target);
    t && t(e);
  },
  Pw = (e) => {
    e.forEach(Tw);
  };
function Mw({ root: e, ...t }) {
  const n = e || document;
  ha.has(n) || ha.set(n, {});
  const r = ha.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(Pw, { root: e, ...t })),
    r[i]
  );
}
function Lw(e, t, n) {
  const r = Mw(t);
  return (
    Rl.set(e, n),
    r.observe(e),
    () => {
      (Rl.delete(e), r.unobserve(e));
    }
  );
}
const Aw = { some: 0, all: 1 };
class Dw extends un {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Aw[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
          m = c ? f : d;
        m && m(u);
      };
    this.stopObserver = Lw(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(jw(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    ((t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function jw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Rw = {
    inView: { Feature: Dw },
    tap: { Feature: Ew },
    focus: { Feature: Cw },
    hover: { Feature: kw },
  },
  Vw = { layout: { ProjectionNode: F0, MeasureLayout: q0 } },
  Nw = { ...rw, ...Rw, ...Sw, ...Vw },
  ue = J3(Nw, q3);
function _w(e) {
  const t = mo(() => rn(e)),
    { isStatic: n } = S.useContext(ko);
  if (n) {
    const [, r] = S.useState(e);
    S.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function ic(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function e1(e, t, n, r) {
  return e == null
    ? []
    : typeof e == "string" && ic(t)
      ? vo(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((i) => i != null)
          : [e];
}
function Iw(e, t, n) {
  return e * (t + 1) + n * t;
}
function bd(e, t, n, r) {
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
      ? Math.max(0, e + parseFloat(t))
      : t === "<"
        ? n
        : t.startsWith("<")
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function zw(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    i.at > t && i.at < n && (ur(e, i), r--);
  }
}
function Ow(e, t, n, r, i, s) {
  zw(e, i, s);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: b(i, s, r[o]), easing: Cm(n, o) });
}
function Fw(e, t, n = 0) {
  const r = t + 1 + t * n;
  for (let i = 0; i < e.length; i++) e[i] = e[i] / r;
}
function bw(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
const Bw = "easeInOut",
  $w = 20;
function Uw(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  const s = t.duration || 0.3,
    o = new Map(),
    a = new Map(),
    l = {},
    u = new Map();
  let c = 0,
    f = 0,
    d = 0;
  for (let m = 0; m < e.length; m++) {
    const y = e[m];
    if (typeof y == "string") {
      u.set(y, f);
      continue;
    } else if (!Array.isArray(y)) {
      u.set(y.name, bd(f, y.at, c, u));
      continue;
    }
    let [v, k, p = {}] = y;
    p.at !== void 0 && (f = bd(f, p.at, c, u));
    let h = 0;
    const g = (x, C, P, T = 0, E = 0) => {
      const D = Ww(x),
        {
          delay: A = 0,
          times: _ = Om(D),
          type: B = t.type || "keyframes",
          repeat: q,
          repeatType: de,
          repeatDelay: Le = 0,
          ...ye
        } = C;
      let { ease: Ae = t.ease || "easeOut", duration: M } = C;
      const V = typeof A == "function" ? A(T, E) : A,
        N = D.length,
        O = Wu(B) ? B : i == null ? void 0 : i[B || "keyframes"];
      if (N <= 2 && O) {
        let lt = 100;
        if (N === 2 && Gw(D)) {
          const vr = D[1] - D[0];
          lt = Math.abs(vr);
        }
        const De = { ...t, ...ye };
        M !== void 0 && (De.duration = Ie(M));
        const xt = _m(De, lt, O);
        ((Ae = xt.ease), (M = xt.duration));
      }
      M ?? (M = s);
      const G = f + V;
      _.length === 1 && _[0] === 0 && (_[1] = 1);
      const fn = _.length - D.length;
      if (
        (fn > 0 && zm(_, fn), D.length === 1 && D.unshift(null), q && q < $w)
      ) {
        const lt = M > 0 ? Le / M : 0;
        M = Iw(M, q, Le);
        const De = [...D],
          xt = [..._];
        Ae = Array.isArray(Ae) ? [...Ae] : [Ae];
        const vr = [...Ae],
          oc = de === "reverse" || de === "mirror";
        let ac = De,
          lc = vr;
        oc &&
          ((ac = [...De].reverse()),
          de === "reverse" &&
            (lc = [...vr]
              .reverse()
              .map((Rt) => (typeof Rt == "function" ? Nu(Rt) : Rt))));
        for (let Rt = 0; Rt < q; Rt++) {
          const uc = oc && Rt % 2 === 0,
            cc = uc ? ac : De,
            h1 = uc ? lc : vr,
            fc = (Rt + 1) * (1 + lt);
          (lt > 0 && (D.push(D[D.length - 1]), _.push(fc), Ae.push("linear")),
            D.push(...cc));
          for (let xr = 0; xr < cc.length; xr++)
            (_.push(xt[xr] + fc),
              Ae.push(xr === 0 ? "linear" : Cm(h1, xr - 1)));
        }
        Fw(_, q, lt);
      }
      const at = G + M;
      (Ow(P, D, Ae, _, G, at), (h = Math.max(V + M, h)), (d = Math.max(at, d)));
    };
    if (ae(v)) {
      const x = Bd(v, a);
      g(k, p, $d("default", x));
    } else {
      const x = e1(v, k, r, l),
        C = x.length;
      for (let P = 0; P < C; P++) {
        ((k = k), (p = p));
        const T = x[P],
          E = Bd(T, a);
        for (const D in k) g(k[D], Hw(p, D), $d(D, E), P, C);
      }
    }
    ((c = f), (f += h));
  }
  return (
    a.forEach((m, y) => {
      for (const v in m) {
        const k = m[v];
        k.sort(bw);
        const p = [],
          h = [],
          g = [];
        for (let T = 0; T < k.length; T++) {
          const { at: E, value: D, easing: A } = k[T];
          (p.push(D), h.push(cr(0, d, E)), g.push(A || "easeOut"));
        }
        (h[0] !== 0 && (h.unshift(0), p.unshift(p[0]), g.unshift(Bw)),
          h[h.length - 1] !== 1 && (h.push(1), p.push(null)),
          o.has(y) || o.set(y, { keyframes: {}, transition: {} }));
        const x = o.get(y);
        x.keyframes[v] = p;
        const { type: C, ...P } = t;
        x.transition[v] = { ...P, duration: d, ease: g, times: h, ...n };
      }
    }),
    o
  );
}
function Bd(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function $d(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function Ww(e) {
  return Array.isArray(e) ? e : [e];
}
function Hw(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
const Kw = (e) => typeof e == "number",
  Gw = (e) => e.every(Kw);
function Qw(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = xo(e) && !u0(e) ? new P0(t) : new S0(t);
  (n.mount(e), di.set(e, n));
}
function Yw(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new Tx(t);
  (n.mount(e), di.set(e, n));
}
function Xw(e, t) {
  return ae(e) || typeof e == "number" || (typeof e == "string" && !ic(t));
}
function t1(e, t, n, r) {
  const i = [];
  if (Xw(e, t)) i.push(_0(e, (ic(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    const s = e1(e, t, r),
      o = s.length;
    for (let a = 0; a < o; a++) {
      const l = s[a],
        u = l instanceof Element ? Qw : Yw;
      di.has(l) || u(l);
      const c = di.get(l),
        f = { ...n };
      ("delay" in f &&
        typeof f.delay == "function" &&
        (f.delay = f.delay(a, o)),
        i.push(...Yu(c, { ...t, transition: f }, {})));
    }
  }
  return i;
}
function Zw(e, t, n) {
  const r = [],
    i = e.map((o) => {
      if (Array.isArray(o) && typeof o[0] == "function") {
        const a = o[0],
          l = rn(0);
        return (
          l.on("change", a),
          o.length === 1
            ? [l, [0, 1]]
            : o.length === 2
              ? [l, [0, 1], o[1]]
              : [l, o[1], o[2]]
        );
      }
      return o;
    });
  return (
    Uw(i, t, n, { spring: fi }).forEach(
      ({ keyframes: o, transition: a }, l) => {
        r.push(...t1(l, o, a));
      },
    ),
    r
  );
}
function Jw(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function qw(e = {}) {
  const { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(s, o, a) {
    let l = [],
      u;
    const c = {};
    if (
      (n !== void 0 && (c.reduceMotion = n),
      r !== void 0 && (c.skipAnimations = r),
      Jw(s))
    ) {
      const { onComplete: d, ...m } = o || {};
      (typeof d == "function" && (u = d), (l = Zw(s, { ...c, ...m }, t)));
    } else {
      const { onComplete: d, ...m } = a || {};
      (typeof d == "function" && (u = d), (l = t1(s, o, { ...c, ...m }, t)));
    }
    const f = new m2(l);
    return (
      u && f.finished.then(u),
      t &&
        (t.animations.push(f),
        f.finished.then(() => {
          ur(t.animations, f);
        })),
      f
    );
  }
  return i;
}
const e4 = qw(),
  t4 = { some: 0, all: 1 };
function n4(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = vo(e),
    o = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const f = o.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const d = t(c.target, c);
            typeof d == "function" ? o.set(c.target, d) : l.unobserve(c.target);
          } else typeof f == "function" && (f(c), o.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : t4[i],
    });
  return (s.forEach((u) => l.observe(u)), () => l.disconnect());
}
function r4(
  e,
  { root: t, margin: n, amount: r, once: i = !1, initial: s = !1 } = {},
) {
  const [o, a] = S.useState(s);
  return (
    S.useEffect(() => {
      if (!e.current || (i && o)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        u = { root: (t && t.current) || void 0, margin: n, amount: r };
      return n4(e.current, l, u);
    }, [t, e, n, i, r]),
    o
  );
}
let i4 = { data: "" },
  s4 = (e) => {
    if (typeof window == "object") {
      let t =
        (e ? e.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (t.nonce = window.__nonce__),
        t.parentNode || (e || document.head).appendChild(t),
        t.firstChild
      );
    }
    return e || i4;
  },
  o4 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  a4 = /\/\*[^]*?\*\/|  +/g,
  Ud = /\n+/g,
  bt = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let s in e) {
      let o = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + o + ";")
          : (r +=
              s[1] == "f"
                ? bt(o, s)
                : s + "{" + bt(o, s[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
          ? (r += bt(
              o,
              t
                ? t.replace(/([^,])+/g, (a) =>
                    s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l,
                    ),
                  )
                : s,
            ))
          : o != null &&
            ((s = s[1] == "-" ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += bt.p ? bt.p(s, o) : s + ":" + o + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  Nt = {},
  n1 = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + n1(e[n]);
      return t;
    }
    return e;
  },
  l4 = (e, t, n, r, i) => {
    let s = n1(e),
      o =
        Nt[s] ||
        (Nt[s] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(s));
    if (!Nt[o]) {
      let l =
        s !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}];
              for (; (c = o4.exec(u.replace(a4, ""))); )
                c[4]
                  ? d.shift()
                  : c[3]
                    ? ((f = c[3].replace(Ud, " ").trim()),
                      d.unshift((d[0][f] = d[0][f] || {})))
                    : (d[0][c[1]] = c[2].replace(Ud, " ").trim());
              return d[0];
            })(e);
      Nt[o] = bt(i ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
    }
    let a = n && Nt.g;
    return (
      n && (Nt.g = Nt[o]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(Nt[o], t, r, a),
      o
    );
  },
  u4 = (e, t, n) =>
    e.reduce((r, i, s) => {
      let o = t[s];
      if (o && o.call) {
        let a = o(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        o = l
          ? "." + l
          : a && typeof a == "object"
            ? a.props
              ? ""
              : bt(a, "")
            : a === !1
              ? ""
              : a;
      }
      return r + i + (o ?? "");
    }, "");
function Eo(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return l4(
    n.unshift
      ? n.raw
        ? u4(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    s4(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let r1, Vl, Nl;
Eo.bind({ g: 1 });
let Dt = Eo.bind({ k: 1 });
function c4(e, t, n, r) {
  ((bt.p = t), (r1 = e), (Vl = n), (Nl = r));
}
function cn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(s, o) {
      let a = Object.assign({}, s),
        l = a.className || i.className;
      ((n.p = Object.assign({ theme: Vl && Vl() }, a)),
        (n.o = /go\d/.test(l)),
        (a.className = Eo.apply(n, r) + (l ? " " + l : "")));
      let u = e;
      return (
        e[0] && ((u = a.as || e), delete a.as),
        Nl && u[0] && Nl(a),
        r1(u, a)
      );
    }
    return i;
  };
}
var f4 = (e) => typeof e == "function",
  Qs = (e, t) => (f4(e) ? e(t) : e),
  d4 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  i1 = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  h4 = 20,
  sc = "default",
  s1 = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === t.toast.id ? { ...o, ...t.toast } : o,
          ),
        };
      case 2:
        let { toast: r } = t;
        return s1(e, {
          type: e.toasts.find((o) => o.id === r.id) ? 1 : 0,
          toast: r,
        });
      case 3:
        let { toastId: i } = t;
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === i || i === void 0
              ? { ...o, dismissed: !0, visible: !1 }
              : o,
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let s = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + s,
          })),
        };
    }
  },
  ps = [],
  o1 = { toasts: [], pausedAt: void 0, settings: { toastLimit: h4 } },
  pt = {},
  a1 = (e, t = sc) => {
    ((pt[t] = s1(pt[t] || o1, e)),
      ps.forEach(([n, r]) => {
        n === t && r(pt[t]);
      }));
  },
  l1 = (e) => Object.keys(pt).forEach((t) => a1(e, t)),
  p4 = (e) => Object.keys(pt).find((t) => pt[t].toasts.some((n) => n.id === e)),
  To =
    (e = sc) =>
    (t) => {
      a1(t, e);
    },
  m4 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  g4 = (e = {}, t = sc) => {
    let [n, r] = S.useState(pt[t] || o1),
      i = S.useRef(pt[t]);
    S.useEffect(
      () => (
        i.current !== pt[t] && r(pt[t]),
        ps.push([t, r]),
        () => {
          let o = ps.findIndex(([a]) => a === t);
          o > -1 && ps.splice(o, 1);
        }
      ),
      [t],
    );
    let s = n.toasts.map((o) => {
      var a, l, u;
      return {
        ...e,
        ...e[o.type],
        ...o,
        removeDelay:
          o.removeDelay ||
          ((a = e[o.type]) == null ? void 0 : a.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          o.duration ||
          ((l = e[o.type]) == null ? void 0 : l.duration) ||
          (e == null ? void 0 : e.duration) ||
          m4[o.type],
        style: {
          ...e.style,
          ...((u = e[o.type]) == null ? void 0 : u.style),
          ...o.style,
        },
      };
    });
    return { ...n, toasts: s };
  },
  y4 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || d4(),
  }),
  Ei = (e) => (t, n) => {
    let r = y4(t, e, n);
    return (To(r.toasterId || p4(r.id))({ type: 2, toast: r }), r.id);
  },
  ce = (e, t) => Ei("blank")(e, t);
ce.error = Ei("error");
ce.success = Ei("success");
ce.loading = Ei("loading");
ce.custom = Ei("custom");
ce.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? To(t)(n) : l1(n);
};
ce.dismissAll = (e) => ce.dismiss(void 0, e);
ce.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? To(t)(n) : l1(n);
};
ce.removeAll = (e) => ce.remove(void 0, e);
ce.promise = (e, t, n) => {
  let r = ce.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((i) => {
        let s = t.success ? Qs(t.success, i) : void 0;
        return (
          s
            ? ce.success(s, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : ce.dismiss(r),
          i
        );
      })
      .catch((i) => {
        let s = t.error ? Qs(t.error, i) : void 0;
        s
          ? ce.error(s, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : ce.dismiss(r);
      }),
    e
  );
};
var v4 = 1e3,
  x4 = (e, t = "default") => {
    let { toasts: n, pausedAt: r } = g4(e, t),
      i = S.useRef(new Map()).current,
      s = S.useCallback((f, d = v4) => {
        if (i.has(f)) return;
        let m = setTimeout(() => {
          (i.delete(f), o({ type: 4, toastId: f }));
        }, d);
        i.set(f, m);
      }, []);
    S.useEffect(() => {
      if (r) return;
      let f = Date.now(),
        d = n.map((m) => {
          if (m.duration === 1 / 0) return;
          let y = (m.duration || 0) + m.pauseDuration - (f - m.createdAt);
          if (y < 0) {
            m.visible && ce.dismiss(m.id);
            return;
          }
          return setTimeout(() => ce.dismiss(m.id, t), y);
        });
      return () => {
        d.forEach((m) => m && clearTimeout(m));
      };
    }, [n, r, t]);
    let o = S.useCallback(To(t), [t]),
      a = S.useCallback(() => {
        o({ type: 5, time: Date.now() });
      }, [o]),
      l = S.useCallback(
        (f, d) => {
          o({ type: 1, toast: { id: f, height: d } });
        },
        [o],
      ),
      u = S.useCallback(() => {
        r && o({ type: 6, time: Date.now() });
      }, [r, o]),
      c = S.useCallback(
        (f, d) => {
          let {
              reverseOrder: m = !1,
              gutter: y = 8,
              defaultPosition: v,
            } = d || {},
            k = n.filter(
              (g) => (g.position || v) === (f.position || v) && g.height,
            ),
            p = k.findIndex((g) => g.id === f.id),
            h = k.filter((g, x) => x < p && g.visible).length;
          return k
            .filter((g) => g.visible)
            .slice(...(m ? [h + 1] : [0, h]))
            .reduce((g, x) => g + (x.height || 0) + y, 0);
        },
        [n],
      );
    return (
      S.useEffect(() => {
        n.forEach((f) => {
          if (f.dismissed) s(f.id, f.removeDelay);
          else {
            let d = i.get(f.id);
            d && (clearTimeout(d), i.delete(f.id));
          }
        });
      }, [n, s]),
      {
        toasts: n,
        handlers: {
          updateHeight: l,
          startPause: a,
          endPause: u,
          calculateOffset: c,
        },
      }
    );
  },
  w4 = Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  S4 = Dt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  k4 = Dt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  C4 = cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w4} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${S4} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${k4} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  E4 = Dt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  T4 = cn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${E4} 1s linear infinite;
`,
  P4 = Dt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  M4 = Dt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  L4 = cn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P4} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${M4} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  A4 = cn("div")`
  position: absolute;
`,
  D4 = cn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  j4 = Dt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  R4 = cn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j4} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  V4 = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? S.createElement(R4, null, t)
        : t
      : n === "blank"
        ? null
        : S.createElement(
            D4,
            null,
            S.createElement(T4, { ...r }),
            n !== "loading" &&
              S.createElement(
                A4,
                null,
                n === "error"
                  ? S.createElement(C4, { ...r })
                  : S.createElement(L4, { ...r }),
              ),
          );
  },
  N4 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  _4 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  I4 = "0%{opacity:0;} 100%{opacity:1;}",
  z4 = "0%{opacity:1;} 100%{opacity:0;}",
  O4 = cn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  F4 = cn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  b4 = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, i] = i1() ? [I4, z4] : [N4(n), _4(n)];
    return {
      animation: t
        ? `${Dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Dt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  B4 = S.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? b4(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = S.createElement(V4, { toast: e }),
      o = S.createElement(F4, { ...e.ariaProps }, Qs(e.message, e));
    return S.createElement(
      O4,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: s, message: o })
        : S.createElement(S.Fragment, null, s, o),
    );
  });
c4(S.createElement);
var $4 = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let s = S.useCallback(
      (o) => {
        if (o) {
          let a = () => {
            let l = o.getBoundingClientRect().height;
            r(e, l);
          };
          (a(),
            new MutationObserver(a).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [e, r],
    );
    return S.createElement("div", { ref: s, className: t, style: n }, i);
  },
  U4 = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: i1() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  W4 = Eo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Gi = 16,
  H4 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: i,
    toasterId: s,
    containerStyle: o,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: u } = x4(n, s);
    return S.createElement(
      "div",
      {
        "data-rht-toaster": s || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Gi,
          left: Gi,
          right: Gi,
          bottom: Gi,
          pointerEvents: "none",
          ...o,
        },
        className: a,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      l.map((c) => {
        let f = c.position || t,
          d = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          m = U4(f, d);
        return S.createElement(
          $4,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? W4 : "",
            style: m,
          },
          c.type === "custom"
            ? Qs(c.message, c)
            : i
              ? i(c)
              : S.createElement(B4, { toast: c, position: f }),
        );
      }),
    );
  },
  u1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Wd = Wt.createContext && Wt.createContext(u1),
  K4 = ["attr", "size", "title"];
function G4(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Q4(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      ((n = s[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Q4(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function Ys() {
  return (
    (Ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ys.apply(null, arguments)
  );
}
function Hd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hd(Object(n), !0).forEach(function (r) {
          Y4(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hd(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Y4(e, t, n) {
  return (
    (t = X4(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function X4(e) {
  var t = Z4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z4(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function c1(e) {
  return (
    e &&
    e.map((t, n) =>
      Wt.createElement(t.tag, Xs({ key: n }, t.attr), c1(t.child)),
    )
  );
}
function te(e) {
  return (t) =>
    Wt.createElement(J4, Ys({ attr: Xs({}, e.attr) }, t), c1(e.child));
}
function J4(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = G4(e, K4),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Wt.createElement(
        "svg",
        Ys(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: l,
            style: Xs(Xs({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        s && Wt.createElement("title", null, s),
        e.children,
      )
    );
  };
  return Wd !== void 0
    ? Wt.createElement(Wd.Consumer, null, (n) => t(n))
    : t(u1);
}
function f1(e) {
  return te({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function d1(e) {
  return te({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function q4(e) {
  return te({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
        },
        child: [],
      },
    ],
  })(e);
}
function D5(e) {
  return te({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128l0 64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9l0-64c0-16.8-12.9-30.5-29.3-31.9zM336 144l0 16c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-16c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512l98.3 0 0-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64 98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16l0 48 32 0 0-48c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function e5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function j5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function R5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function V5(e) {
  return te({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z",
        },
        child: [],
      },
    ],
  })(e);
}
function t5(e) {
  return te({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
        },
        child: [],
      },
    ],
  })(e);
}
function N5(e) {
  return te({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z",
        },
        child: [],
      },
    ],
  })(e);
}
function _5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z",
        },
        child: [],
      },
    ],
  })(e);
}
function Kd(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function I5(e) {
  return te({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function _l(e) {
  return te({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function z5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function O5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z",
        },
        child: [],
      },
    ],
  })(e);
}
function F5(e) {
  return te({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function n5(e) {
  return te({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function b5(e) {
  return te({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z",
        },
        child: [],
      },
    ],
  })(e);
}
function B5(e) {
  return te({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z",
        },
        child: [],
      },
    ],
  })(e);
}
function r5(e) {
  return te({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",
        },
        child: [],
      },
    ],
  })(e);
}
function i5() {
  const [e, t] = S.useState({ x: 0, y: 0 }),
    [n, r] = S.useState(!1);
  return (
    S.useEffect(() => {
      const i = (o) => {
          (t({ x: o.clientX, y: o.clientY }), r(!0));
        },
        s = () => r(!1);
      return (
        window.addEventListener("mousemove", i),
        window.addEventListener("mouseleave", s),
        () => {
          (window.removeEventListener("mousemove", i),
            window.removeEventListener("mouseleave", s));
        }
      );
    }, []),
    w.jsxs(w.Fragment, {
      children: [
        w.jsx("div", {
          className: `pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 bg-accent/20 blur-[1px] transition-transform duration-150 ease-out md:block ${n ? "opacity-100" : "opacity-0"}`,
          style: { transform: `translate3d(${e.x}px, ${e.y}px, 0)` },
        }),
        w.jsx("div", {
          className: `pointer-events-none fixed left-0 top-0 z-[69] hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/5 backdrop-blur-sm transition-transform duration-300 ease-out md:block ${n ? "opacity-100" : "opacity-0"}`,
          style: { transform: `translate3d(${e.x}px, ${e.y}px, 0)` },
        }),
      ],
    })
  );
}
const Gd = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  s5 = [
    { label: "GPA", value: "7.5", suffix: "/10" },
    { label: "Technologies", value: "18", suffix: "+" },
    { label: "Projects", value: "01", suffix: "+" },
    { label: "Internships", value: "02", suffix: "" },
  ],
  o5 = [
    "Builds production-minded full-stack systems with a strong Java foundation.",
    "Comfortable working across frontend, APIs, databases, and ML pipelines.",
    "Interested in human-centered interfaces, AI workflows, and scalable software architecture.",
  ],
  a5 = [
    { title: "Programming", items: ["Java", "Python", "JavaScript", "SQL"] },
    { title: "Frontend", items: ["React.js", "HTML", "CSS", "Bootstrap"] },
    {
      title: "Backend",
      items: ["Node.js", "FastAPI", "Express.js", "REST APIs"],
    },
    { title: "Database", items: ["MongoDB", "MySQL", "SQL", "Data Modeling"] },
    { title: "Tools", items: ["Git", "GitHub", "Linux Basics", "VS Code"] },
  ],
  $5 = [
    { label: "Java", value: 92 },
    { label: "React.js", value: 90 },
    { label: "Python", value: 86 },
    { label: "SQL", value: 84 },
    { label: "Machine Learning", value: 80 },
    { label: "Express.js", value: 78 },
  ],
  l5 = [
    {
      title: "AIML Virtual Internship",
      company: "Eduskills",
      duration: "Oct 2024 - Dec 2024",
      highlights: [
        "AI Driven Networking",
        "Cloud Automation",
        "Juniper Networks Academy",
        "AI-based Network Management",
      ],
    },
    {
      title: "Java Full Stack Internship",
      company: "Eduskills",
      duration: "Dec 2025 - Mar 2026",
      highlights: [
        "Full Stack Development",
        "Responsive UI Development",
        "Git & Version Control",
        "Real-Time Project Implementation",
      ],
    },
  ],
  pa = {
    title: "Screen Time and Child Health in India",
    summary:
      "Analyzed a dataset of 9,712 Indian children aged 8-18 to study screen-time behavior and health impact with explainable machine learning.",
    technologies: [
      "K-Means",
      "Decision Tree",
      "Logistic Regression",
      "KNN",
      "SVM",
      "Random Forest",
      "LightGBM",
      "SHAP",
      "PDP",
    ],
    outcome: [
      "Risk classification for child health monitoring",
      "Explainable AI for decision transparency",
      "PDP and SHAP visualizations for interpretability",
      "Prediction pipeline for health risk assessment",
    ],
  },
  u5 = [
    {
      title: "Google Developer Groups",
      date: "2025",
      description:
        "Community-driven technical learning and developer collaboration.",
    },
    {
      title: "Data Analytics Essentials",
      date: "2025",
      description:
        "Core concepts in data analysis, transformation, and insight generation.",
    },
    {
      title: "CCNA Introduction to Networks",
      date: "2025",
      description:
        "Networking fundamentals including protocols, topologies, and device configuration.",
    },
  ],
  c5 = [
    {
      title: "GitHub",
      href: "https://github.com/harshasriramoji",
      value: "harshasriramoji",
      description: "Source code, experiments, and project updates.",
    },
    {
      title: "LinkedIn",
      href: "#",
      value: "",
      description: "Professional profile and network.",
    },
    {
      title: "LeetCode",
      href: "#",
      value: "",
      description: "Problem-solving and algorithm practice.",
    },
  ],
  ms = [
    { label: "GitHub", href: "https://github.com/harshasriramoji" },
    { label: "LinkedIn", href: "#" },
    { label: "LeetCode", href: "#" },
  ],
  f5 = [
    { label: "View Projects", action: "#projects" },
    { label: "Download Resume", action: "download-resume" },
    { label: "Contact Me", action: "#contact" },
    { label: "Open GitHub", action: "https://github.com/harshasriramoji" },
    { label: "Jump to Skills", action: "#skills" },
  ],
  d5 = [d1, f1, _l];
function h5() {
  return w.jsx("div", {
    className: "fixed bottom-5 left-5 z-[45] hidden lg:block",
    children: w.jsx("div", {
      className: "glass-card flex flex-col gap-3 p-3",
      children: ms.map((e, t) => {
        const n = d5[t];
        return w.jsx(
          ue.a,
          {
            href: e.href,
            target: "_blank",
            rel: "noreferrer",
            whileHover: { x: 4, scale: 1.05 },
            whileTap: { scale: 0.96 },
            className:
              "group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-slate-200 transition hover:border-accent/30 hover:text-white",
            children: w.jsx(n, {
              className:
                "text-lg transition group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.65)]",
            }),
          },
          e.label,
        );
      }),
    }),
  });
}
function p5() {
  const [e, t] = S.useState(!0),
    [n, r] = S.useState(!1);
  return (
    S.useEffect(() => {
      const i = window.setTimeout(() => r(!0), 1050),
        s = window.setTimeout(() => t(!1), 1550);
      return () => {
        (window.clearTimeout(i), window.clearTimeout(s));
      };
    }, []),
    e
      ? w.jsx(ue.div, {
          initial: { opacity: 1 },
          animate: { opacity: n ? 0 : 1 },
          transition: { duration: 0.45 },
          className:
            "fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]",
          children: w.jsxs("div", {
            className: "relative flex flex-col items-center gap-4",
            children: [
              w.jsxs("div", {
                className: "relative h-20 w-20",
                children: [
                  w.jsx("div", {
                    className:
                      "absolute inset-0 animate-spin rounded-full border border-cyan-400/20 border-t-cyan-300",
                  }),
                  w.jsx("div", {
                    className:
                      "absolute inset-3 rounded-full border border-blue-400/30",
                  }),
                  w.jsx("div", {
                    className:
                      "absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(0,245,255,0.85),_rgba(59,130,246,0.1)_70%,_transparent_72%)] blur-sm",
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "text-center",
                children: [
                  w.jsx("p", {
                    className:
                      "text-sm uppercase tracking-[0.45em] text-slate-400",
                    children: "Loading Experience",
                  }),
                  w.jsx("p", {
                    className: "mt-2 text-xl font-medium text-white",
                    children: "Harsha Vardhan Sri Ramoji",
                  }),
                ],
              }),
            ],
          }),
        })
      : null
  );
}
function Zs() {
  const e = [
      "Harsha Vardhan Sri Ramoji",
      "Full Stack Developer | Java Developer | AI & ML Enthusiast",
      "",
      "Education",
      "B.Tech Computer Science Engineering, SR University (2023-2027), GPA: 7.5",
      "",
      "Core Skills",
      ...a5.flatMap((i) => [`- ${i.title}: ${i.items.join(", ")}`]),
      "",
      "Career Highlights",
      ...o5.map((i) => `- ${i}`),
      "",
      "Experience",
      ...l5.flatMap((i) => [
        `${i.title} - ${i.company} (${i.duration})`,
        ...i.highlights.map((s) => `- ${s}`),
      ]),
      "",
      "Project",
      pa.title,
      pa.summary,
      ...pa.outcome.map((i) => `- ${i}`),
      "",
      "Certifications",
      ...u5.map((i) => `- ${i.title} (${i.date})`),
      "",
      "Profiles",
      ...c5.map((i) => `- ${i.title}: ${i.href}`),
    ],
    t = new Blob(
      [
        e.join(`
`),
      ],
      { type: "text/plain;charset=utf-8" },
    ),
    n = URL.createObjectURL(t),
    r = document.createElement("a");
  ((r.href = n),
    (r.download = "Harsha-Vardhan-Sri-Ramoji-Resume.txt"),
    document.body.appendChild(r),
    r.click(),
    r.remove(),
    URL.revokeObjectURL(n));
}
function m5({ open: e, onClose: t }) {
  const [n, r] = S.useState("");
  S.useEffect(() => {
    if (!e) return;
    r("");
    const o = (a) => {
      a.key === "Escape" && t();
    };
    return (
      window.addEventListener("keydown", o),
      () => window.removeEventListener("keydown", o)
    );
  }, [e, t]);
  const i = S.useMemo(() => {
      const o = n.trim().toLowerCase();
      return f5.filter((a) => a.label.toLowerCase().includes(o));
    }, [n]),
    s = (o) => {
      var a;
      if (o === "download-resume") {
        Zs();
        return;
      }
      if (o.startsWith("#")) {
        (a = document.querySelector(o)) == null ||
          a.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.open(o, "_blank", "noopener,noreferrer");
    };
  return w.jsx(B0, {
    children: e
      ? w.jsx(ue.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "fixed inset-0 z-[90] flex items-start justify-center bg-slate-950/70 px-4 pt-24 backdrop-blur-xl",
          onClick: t,
          children: w.jsxs(ue.div, {
            initial: { y: 24, opacity: 0, scale: 0.98 },
            animate: { y: 0, opacity: 1, scale: 1 },
            exit: { y: 12, opacity: 0, scale: 0.98 },
            transition: { duration: 0.25 },
            className:
              "glass-card w-full max-w-2xl overflow-hidden border-white/12 p-4",
            onClick: (o) => o.stopPropagation(),
            children: [
              w.jsxs("div", {
                className: "mb-4 flex items-center justify-between gap-4",
                children: [
                  w.jsxs("div", {
                    children: [
                      w.jsx("p", {
                        className:
                          "text-xs uppercase tracking-[0.35em] text-slate-400",
                        children: "Command Palette",
                      }),
                      w.jsx("p", {
                        className: "mt-1 text-sm text-slate-300",
                        children: "Quick jump and action launcher",
                      }),
                    ],
                  }),
                  w.jsx("button", {
                    className:
                      "rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300",
                    onClick: t,
                    children: "Esc",
                  }),
                ],
              }),
              w.jsx("input", {
                value: n,
                onChange: (o) => r(o.target.value),
                placeholder: "Type to filter commands...",
                className:
                  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500",
              }),
              w.jsxs("div", {
                className: "mt-4 space-y-2",
                children: [
                  i.map((o) =>
                    w.jsxs(
                      "button",
                      {
                        className:
                          "flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-accent/30 hover:bg-accent/8",
                        onClick: () => s(o.action),
                        children: [
                          w.jsx("span", { children: o.label }),
                          w.jsx("span", {
                            className: "text-xs text-slate-500",
                            children: "Enter",
                          }),
                        ],
                      },
                      o.label,
                    ),
                  ),
                  i.length === 0
                    ? w.jsx("p", {
                        className: "px-2 py-4 text-sm text-slate-500",
                        children: "No matching commands.",
                      })
                    : null,
                ],
              }),
            ],
          }),
        })
      : null,
  });
}
function Qd({ darkMode: e, onToggle: t }) {
  return w.jsxs(ue.button, {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    onClick: t,
    className:
      "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl transition hover:border-accent/30 hover:bg-white/8",
    children: [
      e ? w.jsx(t5, {}) : w.jsx(e5, {}),
      w.jsx("span", { children: e ? "Dark" : "Light" }),
    ],
  });
}
function g5() {
  const [e, t] = S.useState(0);
  return (
    S.useEffect(() => {
      const n = () => {
        const r = document.documentElement.scrollHeight - window.innerHeight,
          i = r > 0 ? window.scrollY / r : 0;
        t(Math.min(1, Math.max(0, i)));
      };
      return (
        n(),
        window.addEventListener("scroll", n, { passive: !0 }),
        window.addEventListener("resize", n),
        () => {
          (window.removeEventListener("scroll", n),
            window.removeEventListener("resize", n));
        }
      );
    }, []),
    e
  );
}
function y5() {
  const e = S.useRef(null);
  return (
    S.useEffect(() => {
      const t = e.current;
      if (!t) return;
      const n = t.getContext("2d");
      if (!n) return;
      let r = 0,
        i = [];
      const s = () => {
          ((t.width = window.innerWidth * window.devicePixelRatio),
            (t.height = window.innerHeight * window.devicePixelRatio),
            (t.style.width = `${window.innerWidth}px`),
            (t.style.height = `${window.innerHeight}px`),
            n.setTransform(
              window.devicePixelRatio,
              0,
              0,
              window.devicePixelRatio,
              0,
              0,
            ),
            (i = Array.from(
              { length: Math.min(90, Math.floor(window.innerWidth / 14)) },
              () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.32,
                vy: (Math.random() - 0.5) * 0.32,
                size: 0.8 + Math.random() * 1.6,
                alpha: 0.2 + Math.random() * 0.6,
              }),
            )));
        },
        o = () => {
          (n.clearRect(0, 0, window.innerWidth, window.innerHeight),
            (n.fillStyle = "rgba(5, 8, 22, 0.24)"),
            n.fillRect(0, 0, window.innerWidth, window.innerHeight),
            i.forEach((a, l) => {
              ((a.x += a.vx),
                (a.y += a.vy),
                (a.x < 0 || a.x > window.innerWidth) && (a.vx *= -1),
                (a.y < 0 || a.y > window.innerHeight) && (a.vy *= -1),
                n.beginPath(),
                (n.fillStyle = `rgba(0, 245, 255, ${a.alpha})`),
                n.arc(a.x, a.y, a.size, 0, Math.PI * 2),
                n.fill());
              for (let u = l + 1; u < i.length; u += 1) {
                const c = i[u],
                  f = Math.hypot(a.x - c.x, a.y - c.y);
                f < 130 &&
                  ((n.strokeStyle = `rgba(59, 130, 246, ${(1 - f / 130) * 0.15})`),
                  (n.lineWidth = 1),
                  n.beginPath(),
                  n.moveTo(a.x, a.y),
                  n.lineTo(c.x, c.y),
                  n.stroke());
              }
            }),
            (r = window.requestAnimationFrame(o)));
        };
      return (
        s(),
        o(),
        window.addEventListener("resize", s),
        () => {
          (window.removeEventListener("resize", s),
            window.cancelAnimationFrame(r));
        }
      );
    }, []),
    w.jsx("canvas", {
      ref: e,
      className:
        "pointer-events-none absolute inset-0 h-full w-full opacity-70",
      "aria-hidden": "true",
    })
  );
}
function v5({ value: e, suffix: t = "", label: n }) {
  const r = S.useRef(null),
    i = r4(r, { once: !0, amount: 0.7 }),
    s = _w(0),
    [o, a] = S.useState(0);
  return (
    S.useEffect(() => {
      if (i) {
        const l = s.on("change", (c) => {
            a(Math.round(c));
          }),
          u = e4(s, e, { duration: 1.4, ease: "easeOut" });
        return () => {
          (l(), u.stop());
        };
      }
    }, [i, s, e]),
    w.jsxs(ue.div, {
      ref: r,
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0, amount: 0.7 },
      transition: { duration: 0.65 },
      className: "glass-card p-5 text-center",
      children: [
        w.jsxs(ue.div, {
          className: "text-3xl font-semibold text-white sm:text-4xl",
          children: [
            w.jsx("span", { children: o }),
            w.jsx("span", { className: "text-accent", children: t }),
          ],
        }),
        w.jsx("p", {
          className: "mt-2 text-sm tracking-[0.25em] text-slate-400 uppercase",
          children: n,
        }),
      ],
    })
  );
}
const x5 = S.lazy(() =>
    ln(() => import("./FloatingShapes-BunOWt_y.js"), []).then((e) => ({
      default: e.FloatingShapes,
    })),
  ),
  Yd = ["Full Stack Developer", "Java Developer", "AI & ML Enthusiast"];
function w5({ onNavigate: e, onOpenCommandPalette: t }) {
  const [n, r] = S.useState(0),
    [i, s] = S.useState("");
  return (
    S.useEffect(() => {
      const o = Yd[n];
      let a = 0;
      const l = window.setInterval(() => {
        ((a += 1),
          s(o.slice(0, a)),
          a >= o.length &&
            (window.clearInterval(l),
            window.setTimeout(() => {
              r((u) => (u + 1) % Yd.length);
            }, 900)));
      }, 70);
      return () => window.clearInterval(l);
    }, [n]),
    w.jsxs("section", {
      id: "hero",
      className: "relative min-h-screen overflow-hidden pt-28 sm:pt-32",
      children: [
        w.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(124,58,237,0.14),transparent_24%),linear-gradient(180deg,rgba(3,7,18,0.08),rgba(3,7,18,0.94))]",
        }),
        w.jsx("div", { className: "absolute inset-0 hero-grid opacity-45" }),
        w.jsx("div", {
          className:
            "absolute left-[12%] top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl",
        }),
        w.jsx("div", {
          className:
            "absolute right-[8%] top-44 h-80 w-80 rounded-full bg-secondary/10 blur-3xl",
        }),
        w.jsxs("div", {
          className:
            "relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8",
          children: [
            w.jsxs("div", {
              className: "relative z-10 max-w-3xl",
              children: [
                w.jsxs(ue.p, {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7 },
                  className:
                    "mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-300 backdrop-blur-xl",
                  children: [
                    w.jsx("span", {
                      className: "h-2 w-2 rounded-full bg-primary",
                    }),
                    "Available for select opportunities",
                  ],
                }),
                w.jsx(ue.h1, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.1 },
                  className:
                    "max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-8xl",
                  children: "Harsha Vardhan Sri Ramoji",
                }),
                w.jsxs(ue.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.75, delay: 0.25 },
                  className:
                    "mt-7 flex flex-wrap items-center gap-3 text-base sm:text-lg lg:text-xl",
                  children: [
                    w.jsx("span", { className: "text-slate-200", children: i }),
                    w.jsx("span", {
                      className:
                        "inline-block h-6 w-[2px] animate-pulse bg-white/70",
                    }),
                  ],
                }),
                w.jsx(ue.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.75, delay: 0.35 },
                  className:
                    "mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl",
                  children:
                    "I design and build premium digital products with strong Java foundations, polished React systems, and AI workflows that turn data into decisions.",
                }),
                w.jsxs(ue.div, {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.75, delay: 0.45 },
                  className: "mt-10 flex flex-col gap-4 sm:flex-row",
                  children: [
                    w.jsxs("button", {
                      className:
                        "magnetic-button inline-flex items-center justify-center gap-2 rounded-full premium-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow",
                      onClick: () => e("#projects"),
                      children: [w.jsx(_l, {}), " View Case Studies"],
                    }),
                    w.jsxs("button", {
                      className:
                        "magnetic-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8",
                      onClick: () => Zs(),
                      children: [w.jsx(r5, {}), " Download Resume"],
                    }),
                    w.jsx("button", {
                      className:
                        "magnetic-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8",
                      onClick: () => e("#contact"),
                      children: "Contact Me",
                    }),
                  ],
                }),
                w.jsxs(ue.div, {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.75, delay: 0.5 },
                  className: "mt-8 flex flex-wrap items-center gap-3",
                  children: [
                    [
                      { icon: d1, href: ms[0].href, label: "GitHub" },
                      { icon: f1, href: ms[1].href, label: "LinkedIn" },
                      { icon: _l, href: ms[2].href, label: "LeetCode" },
                    ].map((o) =>
                      w.jsxs(
                        ue.a,
                        {
                          href: o.href,
                          target: "_blank",
                          rel: "noreferrer",
                          whileHover: { y: -3, scale: 1.04 },
                          className:
                            "group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl transition hover:border-white/20 hover:text-white",
                          children: [
                            w.jsx(o.icon, {
                              className:
                                "text-base text-slate-200 transition group-hover:text-white",
                            }),
                            o.label,
                          ],
                        },
                        o.label,
                      ),
                    ),
                    w.jsx("button", {
                      className:
                        "rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur-xl transition hover:border-white/20 hover:text-white",
                      onClick: t,
                      children: "Open Command Palette",
                    }),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              className: "relative z-10",
              children: w.jsxs("div", {
                className:
                  "relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.3)] backdrop-blur-2xl",
                children: [
                  w.jsx("div", {
                    className:
                      "absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_35%,rgba(37,99,235,0.05))]",
                  }),
                  w.jsxs("div", {
                    className:
                      "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#111827]/82 p-4",
                    children: [
                      w.jsx("div", {
                        className: "absolute inset-0 opacity-70",
                        children: w.jsx(y5, {}),
                      }),
                      w.jsxs("div", {
                        className:
                          "relative h-[420px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_30%),linear-gradient(180deg,rgba(17,24,39,0.96),rgba(15,23,42,0.94))] p-5",
                        children: [
                          w.jsx("div", {
                            className: "absolute inset-0 opacity-40",
                            children: w.jsx(S.Suspense, {
                              fallback: w.jsx("div", {
                                className:
                                  "absolute inset-0 bg-[radial-gradient(circle,rgba(0,245,255,0.16),transparent_35%)]",
                              }),
                              children: w.jsx(x5, {}),
                            }),
                          }),
                          w.jsxs("div", {
                            className:
                              "relative flex h-full flex-col justify-between",
                            children: [
                              w.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  w.jsxs("div", {
                                    children: [
                                      w.jsx("p", {
                                        className:
                                          "text-xs uppercase tracking-[0.4em] text-slate-400",
                                        children: "Professional Snapshot",
                                      }),
                                      w.jsx("h3", {
                                        className:
                                          "mt-2 text-2xl font-semibold text-white",
                                        children:
                                          "Engineering products with taste and rigor",
                                      }),
                                    ],
                                  }),
                                  w.jsx("div", {
                                    className:
                                      "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300",
                                    children: "Available",
                                  }),
                                ],
                              }),
                              w.jsx("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: s5.map((o) =>
                                  w.jsx(
                                    v5,
                                    {
                                      value: Number(o.value),
                                      suffix: o.suffix,
                                      label: o.label,
                                    },
                                    o.label,
                                  ),
                                ),
                              }),
                              w.jsxs("div", {
                                className:
                                  "rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl",
                                children: [
                                  w.jsx("p", {
                                    className:
                                      "text-xs uppercase tracking-[0.35em] text-slate-400",
                                    children: "Current Focus",
                                  }),
                                  w.jsx("p", {
                                    className:
                                      "mt-2 text-sm leading-7 text-slate-300",
                                    children:
                                      "Building elegant web experiences, AI-assisted systems, and polished full-stack products with a production mindset.",
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
          ],
        }),
        w.jsxs("button", {
          onClick: () => e("#about"),
          className:
            "absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400 transition hover:text-white",
          children: [
            w.jsx("span", { children: "Scroll" }),
            w.jsx("span", {
              className:
                "flex h-12 w-7 justify-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl",
              children: w.jsx("span", {
                className: "h-2 w-1.5 animate-bounce rounded-full bg-white/75",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const S5 = S.lazy(() =>
    ln(
      () => import("./AboutSection-Cjf8mBII.js"),
      __vite__mapDeps([0, 1]),
    ).then((e) => ({ default: e.AboutSection })),
  ),
  k5 = S.lazy(() =>
    ln(
      () => import("./SkillsSection-CFRHez_c.js"),
      __vite__mapDeps([2, 1]),
    ).then((e) => ({ default: e.SkillsSection })),
  ),
  C5 = S.lazy(() =>
    ln(
      () => import("./ExperienceSection-x9ZrgYtL.js"),
      __vite__mapDeps([3, 1]),
    ).then((e) => ({ default: e.ExperienceSection })),
  ),
  E5 = S.lazy(() =>
    ln(
      () => import("./ProjectsSection-BTTdaRYy.js"),
      __vite__mapDeps([4, 1]),
    ).then((e) => ({ default: e.ProjectsSection })),
  ),
  T5 = S.lazy(() =>
    ln(
      () => import("./CertificationsSection-Bidgac_z.js"),
      __vite__mapDeps([5, 1]),
    ).then((e) => ({ default: e.CertificationsSection })),
  ),
  P5 = S.lazy(() =>
    ln(
      () => import("./ProfilesSection-_Lrpewyw.js"),
      __vite__mapDeps([6, 1]),
    ).then((e) => ({ default: e.ProfilesSection })),
  ),
  M5 = S.lazy(() =>
    ln(
      () => import("./ContactSection-CZk4_y65.js"),
      __vite__mapDeps([7, 1]),
    ).then((e) => ({ default: e.ContactSection })),
  );
function L5() {
  const [e, t] = S.useState(!0),
    [n, r] = S.useState(!0),
    [i, s] = S.useState(!1),
    [o, a] = S.useState(!1),
    l = g5();
  S.useEffect(() => {
    const d =
      localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
    (r(d === "dark"),
      document.documentElement.classList.toggle("light", d === "light"));
    const m = window.setTimeout(() => t(!1), 1200),
      y = (v) => {
        (v.metaKey || v.ctrlKey) &&
          v.key.toLowerCase() === "k" &&
          (v.preventDefault(), a(!0));
      };
    return (
      window.addEventListener("keydown", y),
      () => {
        (window.clearTimeout(m), window.removeEventListener("keydown", y));
      }
    );
  }, []);
  const u = (f) => {
      var d;
      ((d = document.querySelector(f)) == null ||
        d.scrollIntoView({ behavior: "smooth", block: "start" }),
        s(!1));
    },
    c = () => {
      const f = !n;
      (r(f),
        document.documentElement.classList.toggle("light", !f),
        localStorage.setItem("portfolio-theme", f ? "dark" : "light"));
    };
  return w.jsxs("div", {
    className: "min-h-screen bg-bg text-white",
    children: [
      w.jsx(p5, {}),
      w.jsx(i5, {}),
      w.jsx(h5, {}),
      w.jsx(m5, { open: o, onClose: () => a(!1) }),
      w.jsx(H4, {
        position: "top-right",
        toastOptions: {
          style: {
            background: "#0b1120",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.08)",
          },
        },
      }),
      w.jsx("div", {
        className:
          "pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-white/5",
        children: w.jsx("div", {
          className:
            "h-full origin-left premium-gradient transition-transform duration-200",
          style: { transform: `scaleX(${l})` },
        }),
      }),
      w.jsxs("header", {
        className:
          "fixed inset-x-0 top-0 z-[50] border-b border-white/6 bg-[#030712]/72 backdrop-blur-2xl",
        children: [
          w.jsxs("div", {
            className:
              "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8",
            children: [
              w.jsxs("button", {
                onClick: () => u("#hero"),
                className: "group flex items-center gap-3 text-left",
                children: [
                  w.jsx("div", {
                    className:
                      "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5",
                    children: w.jsx("span", {
                      className: "text-sm font-semibold text-white",
                      children: "HS",
                    }),
                  }),
                  w.jsxs("div", {
                    children: [
                      w.jsx("p", {
                        className: "text-sm font-medium text-white",
                        children: "Harsha Vardhan Sri Ramoji",
                      }),
                      w.jsx("p", {
                        className:
                          "text-xs uppercase tracking-[0.32em] text-slate-400",
                        children: "Engineer / Builder / Designer",
                      }),
                    ],
                  }),
                ],
              }),
              w.jsx("nav", {
                className:
                  "hidden items-center gap-1 rounded-full border border-white/8 bg-white/5 p-1 backdrop-blur-xl lg:flex",
                children: Gd.map((f) =>
                  w.jsx(
                    "button",
                    {
                      onClick: () => u(f.href),
                      className:
                        "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white",
                      children: f.label,
                    },
                    f.label,
                  ),
                ),
              }),
              w.jsxs("div", {
                className: "hidden items-center gap-3 md:flex",
                children: [
                  w.jsx(Qd, { darkMode: n, onToggle: c }),
                  w.jsx(ue.button, {
                    whileHover: { y: -1, scale: 1.02 },
                    whileTap: { scale: 0.97 },
                    onClick: () => a(!0),
                    className:
                      "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8",
                    children: "Cmd + K",
                  }),
                  w.jsxs(ue.button, {
                    whileHover: { scale: 1.03 },
                    whileTap: { scale: 0.97 },
                    onClick: () => Zs(),
                    className:
                      "inline-flex items-center gap-2 rounded-full premium-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow",
                    children: [w.jsx(Kd, {}), "Resume"],
                  }),
                ],
              }),
              w.jsx("button", {
                className:
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden",
                onClick: () => s((f) => !f),
                "aria-label": "Toggle menu",
                children: i ? w.jsx(q4, {}) : w.jsx(n5, {}),
              }),
            ],
          }),
          w.jsx(B0, {
            children: i
              ? w.jsx(ue.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className:
                    "border-t border-white/6 bg-slate-950/90 px-4 pb-4 lg:hidden",
                  children: w.jsxs("div", {
                    className: "mx-auto max-w-7xl space-y-3 pt-4",
                    children: [
                      Gd.map((f) =>
                        w.jsxs(
                          "button",
                          {
                            onClick: () => u(f.href),
                            className:
                              "flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-left text-sm text-slate-200",
                            children: [
                              w.jsx("span", { children: f.label }),
                              w.jsx("span", {
                                className: "text-xs text-slate-500",
                                children: "Go",
                              }),
                            ],
                          },
                          f.label,
                        ),
                      ),
                      w.jsxs("div", {
                        className: "flex items-center gap-3 pt-2",
                        children: [
                          w.jsx(Qd, { darkMode: n, onToggle: c }),
                          w.jsxs(ue.button, {
                            whileTap: { scale: 0.97 },
                            onClick: () => Zs(),
                            className:
                              "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white",
                            children: [w.jsx(Kd, {}), "Resume"],
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
      w.jsxs("main", {
        children: [
          w.jsx(w5, { onNavigate: u, onOpenCommandPalette: () => a(!0) }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "About" }),
            children: w.jsx(S5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Skills" }),
            children: w.jsx(k5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Experience" }),
            children: w.jsx(C5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Projects" }),
            children: w.jsx(E5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Certifications" }),
            children: w.jsx(T5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Profiles" }),
            children: w.jsx(P5, {}),
          }),
          w.jsx(S.Suspense, {
            fallback: w.jsx(hn, { title: "Contact" }),
            children: w.jsx(M5, {}),
          }),
        ],
      }),
      w.jsx("footer", {
        className: "border-t border-white/6 bg-black/20 py-8",
        children: w.jsxs("div", {
          className:
            "mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8",
          children: [
            w.jsx("p", {
              children: "Designed and built for Harsha Vardhan Sri Ramoji.",
            }),
            w.jsx("button", {
              className: "text-accent transition hover:text-white",
              onClick: () => u("#hero"),
              children: "Back to top",
            }),
          ],
        }),
      }),
    ],
  });
}
function hn({ title: e }) {
  return w.jsx("section", {
    className: "section-shell",
    children: w.jsx("div", {
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
      children: w.jsxs("div", {
        className:
          "glass-card flex min-h-64 items-center justify-center p-8 text-center text-slate-400",
        children: ["Loading ", e, "..."],
      }),
    }),
  });
}
ma.createRoot(document.getElementById("root")).render(
  w.jsx(Wt.StrictMode, { children: w.jsx(L5, {}) }),
);
export {
  B0 as A,
  D5 as F,
  F5 as a,
  b5 as b,
  o5 as c,
  _l as d,
  N5 as e,
  j5 as f,
  I5 as g,
  _5 as h,
  $5 as i,
  w as j,
  l5 as k,
  V5 as l,
  ue as m,
  O5 as n,
  d1 as o,
  pa as p,
  B5 as q,
  S as r,
  a5 as s,
  u5 as t,
  z5 as u,
  c5 as v,
  f1 as w,
  R5 as x,
  ce as y,
  p1 as z,
};
