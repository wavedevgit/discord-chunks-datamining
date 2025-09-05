/** Chunk was on 30355 **/
/** chunk id: 817053, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p,
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
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function g(e) {
  let {
    imageSrc: t,
    gameName: r
  } = e, [i, a] = l.useState(false), o = null != r ? r : u.intl.string(u.t.GIWFlJ);
  return i || null == t ? (0, n.jsx)("div", {
    role: "img",
    "aria-label": o,
    className: d.fallback,
    children: (0, n.jsx)(s.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: o
    })
  }) : (0, n.jsx)("img", {
    src: t,
    alt: o,
    className: d.gameCoverImage,
    onError: () => a(true),
    onLoad: () => a(false)
  })
}

function b(e) {
  let {
    imageSrc: t,
    gameName: r,
    applicationId: l,
    userId: i,
    className: b,
    hideTooltip: p = false
  } = e, j = (0, c.Z)({
    location: "GameCover",
    applicationId: l,
    source: o.m1.UserProfile,
    sourceUserId: i,
    trackEntryPointImpression: true
  }), O = null != r ? r : u.intl.string(u.t.GIWFlJ), x = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: O
  }), h = e => p ? e() : (0, n.jsx)(s.ua7, {
    text: O,
    children: t => e(t)
  });
  return h(null == j ? e => (0, n.jsx)("div", m(f({
    className: b
  }, e), {
    children: (0, n.jsx)(g, {
      imageSrc: t,
      gameName: r
    })
  })) : e => (0, n.jsx)(s.P3F, m(f({}, e), {
    onClick: j,
    "aria-label": x,
    className: a()(d.clickable, b),
    children: (0, n.jsx)(g, {
      imageSrc: t,
      gameName: r
    })
  })))
}

function p(e) {
  var {
    applicationId: t,
    userId: r,
    className: l,
    disableInteraction: i = false,
    hideTooltip: s
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let c = a()(d.coverContainer, l);
  return i ? (0, n.jsx)("div", {
    className: c,
    children: (0, n.jsx)(g, f({}, o))
  }) : (0, n.jsx)(b, f({
    className: c,
    applicationId: t,
    userId: r,
    hideTooltip: s
  }, o))
}