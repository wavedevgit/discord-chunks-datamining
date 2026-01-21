/** Chunk was on 6524 **/
/** chunk id: 27900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk777658 = require("./777658.jsx"),
  Chunk858488 = require("./858488.jsx"),
  Chunk933409 = require("./933409.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.jsx"),
  Chunk494439 = require("./494439.jsx"),
  Chunk991307 = require("./991307.jsx"),
  Chunk700994 = require("./700994.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    user: t,
    guildId: n,
    channelId: o,
    mediaEngineContext: a,
    onSelect: c,
    onShowProfile: S,
    onWatchStream: _,
    appContext: P
  } = e, A = (0, v.Z)({
    onAction: () => {
      null == S || S()
    }
  }), I = (0, y.Z)({
    user: t,
    context: P
  }), C = (0, b.Z)({
    user: t,
    appContext: P
  }), M = (0, j.Z)(t.id, _), x = (0, E.Z)(t.id), D = (0, p.Z)(t.id, a), N = (0, m.Z)({
    user: t
  }), w = (0, u.Z)(null, t), T = (0, f.Z)({
    user: t,
    appContext: P
  }), k = (0, O.Z)({
    user: t,
    appContext: P
  }), U = (0, Z.Z)({
    user: t,
    appContext: P
  }), L = (0, s.Z)({
    id: t.id,
    label: h.intl.string(h.t["/AXYnE"])
  }), R = (0, d.Z)(t), B = (0, g.Z)(t, n, o), V = t.isNonUserBot();
  return (0, r.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: i.Zy,
    "aria-label": h.intl.string(h.t.liqwPJ),
    onSelect: c,
    children: [!V && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.kSQ, {
        children: R
      }), (0, r.jsxs)(l.kSQ, {
        children: [A, I, C, M]
      }), (0, r.jsx)(l.kSQ, {
        children: x
      }), (0, r.jsx)(l.kSQ, {
        children: w
      }), (0, r.jsxs)(l.kSQ, {
        children: [D, N, T, U, k]
      }), (0, r.jsx)(l.kSQ, {
        children: B
      })]
    }), (0, r.jsx)(l.kSQ, {
      children: L
    })]
  })
}

function I(e) {
  let {
    user: t,
    mediaEngineContext: n,
    onSelect: o,
    onShowProfile: a,
    onWatchStream: c,
    appContext: g
  } = e, S = (0, v.Z)({
    onAction: () => {
      null == a || a()
    }
  }), _ = (0, y.Z)({
    user: t,
    context: g
  }), P = (0, b.Z)({
    user: t,
    appContext: g
  }), A = (0, j.Z)(t.id, c), I = (0, E.Z)(t.id), C = (0, p.Z)(t.id, n), M = (0, m.Z)({
    user: t
  }), x = (0, u.Z)(null, t), D = (0, f.Z)({
    user: t,
    appContext: g
  }), N = (0, O.Z)({
    user: t,
    appContext: g
  }), w = (0, Z.Z)({
    user: t,
    appContext: g
  }), T = (0, s.Z)({
    id: t.id,
    label: h.intl.string(h.t["/AXYnE"])
  }), k = (0, d.Z)(t), U = t.isNonUserBot();
  return (0, r.jsxs)(l.v2r, {
    navId: "user-context",
    onClose: i.Zy,
    "aria-label": h.intl.string(h.t.liqwPJ),
    onSelect: o,
    children: [!U && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.kSQ, {
        children: k
      }), (0, r.jsxs)(l.kSQ, {
        children: [S, _, P, A]
      }), (0, r.jsx)(l.kSQ, {
        children: I
      }), (0, r.jsx)(l.kSQ, {
        children: x
      }), (0, r.jsxs)(l.kSQ, {
        children: [C, M, D, w, N]
      })]
    }), (0, r.jsx)(l.kSQ, {
      children: T
    })]
  })
}
let C = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var {
    guildId: t,
    channelId: n
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["guildId", "channelId"]);
  return null != t && null != n ? (0, r.jsx)(A, P(_({}, l), {
    guildId: t,
    channelId: n
  })) : (0, r.jsx)(I, P(_({}, l), {
    guildId: t,
    channelId: n
  }))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.USER_OVERLAY_CONTEXT_MENU])