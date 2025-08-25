/** Chunk was on 21585 **/
/** chunk id: 817053, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  o: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function g(e, t) {
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

function b(e) {
  let {
    imageSrc: t,
    gameName: r
  } = e, [i, l] = a.useState(false), c = null != r ? r : u.intl.string(u.t.GIWFlJ);
  return i || null == t ? (0, n.jsx)("div", {
    role: "img",
    "aria-label": c,
    className: d.fallback,
    children: (0, n.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: c
    })
  }) : (0, n.jsx)("img", {
    src: t,
    alt: c,
    className: d.gameCoverImage,
    onError: () => l(true),
    onLoad: () => l(false)
  })
}

function p(e) {
  let {
    imageSrc: t,
    gameName: r,
    applicationId: a,
    userId: i,
    className: p,
    hideTooltip: m = false
  } = e, O = (0, s.Z)({
    location: "GameCover",
    applicationId: a,
    source: c.m1.UserProfile,
    sourceUserId: i,
    trackEntryPointImpression: true
  }), j = null != r ? r : u.intl.string(u.t.GIWFlJ), y = u.intl.formatToPlainString(u.t["8QLQBw"], {
    gameName: j
  }), x = e => m ? e() : (0, n.jsx)(o.ua7, {
    text: j,
    children: t => e(t)
  });
  return x(null == O ? e => (0, n.jsx)("div", g(f({
    className: p
  }, e), {
    children: (0, n.jsx)(b, {
      imageSrc: t,
      gameName: r
    })
  })) : e => (0, n.jsx)(o.P3F, g(f({}, e), {
    onClick: O,
    "aria-label": y,
    className: l()(d.clickable, p),
    children: (0, n.jsx)(b, {
      imageSrc: t,
      gameName: r
    })
  })))
}

function m(e) {
  var {
    applicationId: t,
    userId: r,
    className: a,
    disableInteraction: i = false,
    hideTooltip: o
  } = e, c = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let s = l()(d.coverContainer, a);
  return i ? (0, n.jsx)("div", {
    className: s,
    children: (0, n.jsx)(b, f({}, c))
  }) : (0, n.jsx)(p, f({
    className: s,
    applicationId: t,
    userId: r,
    hideTooltip: o
  }, c))
}