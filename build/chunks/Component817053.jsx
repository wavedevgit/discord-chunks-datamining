/** Chunk was on 22325 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  o: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function g(e) {
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

function p(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [a, l] = i.useState(false), o = null != n ? n : d.intl.string(d.t.GIWFlJ);
  return a || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": o,
    className: f.fallback,
    children: (0, r.jsx)(s.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: o
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: o,
    className: f.gameCoverImage,
    onError: () => l(true),
    onLoad: () => l(false)
  })
}

function m(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: i,
    userId: a,
    className: g,
    hideTooltip: m = false
  } = e, b = (0, u.Z)({
    location: "GameCover",
    applicationId: i,
    source: c.m1.UserProfile,
    sourceUserId: a,
    trackEntryPointImpression: true
  }), h = null != n ? n : d.intl.string(d.t.GIWFlJ), v = d.intl.formatToPlainString(d.t["8QLQBw"], {
    gameName: h
  }), y = e => m ? e : (0, r.jsx)(o.u, {
    text: h,
    children: e
  });
  return y(null == b ? (0, r.jsx)("div", {
    className: g,
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  }) : (0, r.jsx)(s.P3F, {
    onClick: b,
    "aria-label": v,
    className: l()(f.clickable, g),
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  }))
}

function b(e) {
  var {
    applicationId: t,
    userId: n,
    className: i,
    disableInteraction: a = false,
    hideTooltip: o
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip"]);
  let c = l()(f.coverContainer, i);
  return a ? (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(p, g({}, s))
  }) : (0, r.jsx)(m, g({
    className: c,
    applicationId: t,
    userId: n,
    hideTooltip: o
  }, s))
}