/** Chunk was on 30355 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  o: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function f(e) {
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

function m(e, t) {
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

function g(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [i, a] = l.useState(false), o = null != n ? n : u.intl.string(u.t.GIWFlJ);
  return i || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": o,
    className: d.fallback,
    children: (0, r.jsx)(s.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: o
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: o,
    className: d.gameCoverImage,
    onError: () => a(true),
    onLoad: () => a(false)
  })
}

function p(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: l,
    userId: i,
    className: p,
    hideTooltip: b = false
  } = e, j = (0, c.Z)({
    location: "GameCover",
    applicationId: l,
    source: o.m1.UserProfile,
    sourceUserId: i,
    trackEntryPointImpression: true
  }), y = null != n ? n : u.intl.string(u.t.GIWFlJ), h = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: y
  }), v = e => b ? e() : (0, r.jsx)(s.ua7, {
    text: y,
    children: t => e(t)
  });
  return v(null == j ? e => (0, r.jsx)("div", m(f({
    className: p
  }, e), {
    children: (0, r.jsx)(g, {
      imageSrc: t,
      gameName: n
    })
  })) : e => (0, r.jsx)(s.P3F, m(f({}, e), {
    onClick: j,
    "aria-label": h,
    className: a()(d.clickable, p),
    children: (0, r.jsx)(g, {
      imageSrc: t,
      gameName: n
    })
  })))
}

function b(e) {
  var {
    applicationId: t,
    userId: n,
    className: l,
    disableInteraction: i = false,
    hideTooltip: s
  } = e, o = function(e, t) {
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
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let c = a()(d.coverContainer, l);
  return i ? (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(g, f({}, o))
  }) : (0, r.jsx)(p, f({
    className: c,
    applicationId: t,
    userId: n,
    hideTooltip: s
  }, o))
}