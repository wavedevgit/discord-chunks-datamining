/** Chunk was on 881 **/
/** chunk id: 163368, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => D
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk587895 = require("./587895.js"),
  Chunk646938 = require("./646938.jsx"),
  Chunk189081 = require("./189081.js"),
  Chunk81766 = require("./81766.jsx"),
  Chunk568163 = require("./568163.jsx"),
  Chunk541202 = require("./541202.jsx"),
  Chunk288677 = require("./288677.jsx"),
  Chunk186171 = require("./186171.jsx"),
  Chunk343322 = require("./343322.jsx"),
  Chunk123065 = require("./123065.jsx"),
  Chunk282592 = require("./282592.jsx"),
  Chunk399289 = require("./399289.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function v(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function I(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function P(t) {
  let {
    application: e,
    libraryApplication: n,
    analyticsContext: i,
    onSelect: c
  } = t, o = I(v({}, null != i ? i.location : null), {
    object: h.ZSU.CONTEXT_MENU
  }), u = (0, p.A)(n, o), P = (0, A.A)(n), D = (0, O.A)(n), m = (0, y.A)(n), T = (0, g.A)(n), S = (0, s.A)(n, e), E = (0, f.A)(n, e), w = (0, d.A)(n, e), L = (0, b.A)(e);
  return (0, r.jsxs)(l.W1t, {
    navId: "game-context",
    onClose: a.Z_,
    "aria-label": j.intl.string(j.t.tKobzb),
    onSelect: c,
    children: [u, P, D, m, T, S, E, (0, r.jsx)(l.rXV, {
      children: w
    }), (0, r.jsx)(l.rXV, {
      children: L
    })]
  })
}

function D(t) {
  let {
    applicationId: e,
    branchId: n
  } = t, l = (0, i.bG)([c.A], () => c.A.getApplication(e), [e]), a = (0, i.bG)([u.A], () => null != n ? u.A.getLibraryApplication(e, n) : u.A.getActiveLibraryApplication(e), [e, n]);
  return null == l || null == a ? (0, r.jsx)(o.default, I(v({}, t), {
    id: e,
    label: j.intl.string(j.t["FfCL+6"])
  })) : (0, r.jsx)(P, I(v({}, t), {
    application: l,
    libraryApplication: a
  }))
}