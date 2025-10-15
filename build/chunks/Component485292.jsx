/** Chunk was on 98335 **/
/** chunk id: 485292, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk812206 = require("./812206.js"),
  Chunk731646 = require("./731646.jsx"),
  Chunk283595 = require("./283595.js"),
  Chunk499502 = require("./499502.jsx"),
  Chunk955809 = require("./955809.jsx"),
  Chunk332845 = require("./332845.jsx"),
  Chunk78874 = require("./78874.jsx"),
  Chunk350758 = require("./350758.jsx"),
  Chunk149835 = require("./149835.jsx"),
  Chunk38346 = require("./38346.jsx"),
  Chunk683609 = require("./683609.jsx"),
  Chunk679879 = require("./679879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function Z(t) {
  let {
    application: e,
    libraryApplication: n,
    analyticsContext: i,
    onSelect: c
  } = t, o = I(v({}, null != i ? i.location : null), {
    object: j.qAy.CONTEXT_MENU
  }), u = (0, f.Z)(n, o), Z = (0, p.Z)(n), S = (0, y.Z)(n), A = (0, h.Z)(n), m = (0, g.Z)(n), E = (0, b.Z)(n, e), w = (0, O.Z)(n, e), T = (0, s.Z)(n, e), D = (0, d.Z)(e);
  return (0, r.jsxs)(l.v2r, {
    navId: "game-context",
    onClose: a.Zy,
    "aria-label": P.intl.string(P.t.tKobzb),
    onSelect: c,
    children: [u, Z, S, A, m, E, w, (0, r.jsx)(l.kSQ, {
      children: T
    }), (0, r.jsx)(l.kSQ, {
      children: D
    })]
  })
}

function S(t) {
  let {
    applicationId: e,
    branchId: n
  } = t, l = (0, i.e7)([c.Z], () => c.Z.getApplication(e), [e]), a = (0, i.e7)([u.Z], () => null != n ? u.Z.getLibraryApplication(e, n) : u.Z.getActiveLibraryApplication(e), [e, n]);
  return null == l || null == a ? (0, r.jsx)(o.default, I(v({}, t), {
    id: e,
    label: P.intl.string(P.t["FfCL+6"])
  })) : (0, r.jsx)(Z, I(v({}, t), {
    application: l,
    libraryApplication: a
  }))
}