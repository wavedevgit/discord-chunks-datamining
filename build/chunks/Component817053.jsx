/** Chunk was on 29458 **/
/** chunk id: 817053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk896270 = require("./896270.js");

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

function p(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [i, o] = l.useState(false), c = null != n ? n : d.intl.string(d.t.GIWFlJ);
  return i || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": c,
    className: u.fallback,
    children: (0, r.jsx)(a.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: c
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: c,
    className: u.gameCoverImage,
    onError: () => o(true),
    onLoad: () => o(false)
  })
}

function m(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: l,
    userId: i,
    className: f
  } = e, m = (0, s.Z)({
    location: "GameCover",
    applicationId: l,
    source: c.m1.UserProfile,
    sourceUserId: i,
    trackEntryPointImpression: true
  });
  if (null == m) return (0, r.jsx)("div", {
    className: f,
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  });
  let b = d.intl.formatToPlainString(d.t["8QLQBw"], {
    gameName: null != n ? n : d.intl.string(d.t.GIWFlJ)
  });
  return (0, r.jsx)(a.P3F, {
    onClick: m,
    "aria-label": b,
    className: o()(u.clickable, f),
    children: (0, r.jsx)(p, {
      imageSrc: t,
      gameName: n
    })
  })
}

function b(e) {
  var {
    applicationId: t,
    userId: n,
    className: l,
    disableInteraction: i = false
  } = e, a = function(e, t) {
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
  }(e, ["applicationId", "userId", "className", "disableInteraction"]);
  let c = o()(u.coverContainer, l);
  return i ? (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(p, f({}, a))
  }) : (0, r.jsx)(m, f({
    className: c,
    applicationId: t,
    userId: n
  }, a))
}