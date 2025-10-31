/** Chunk was on 39380 **/
/** chunk id: 817053, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  Z: () => f,
  o: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function m(e) {
  for (var l = 1; l < arguments.length; l++) {
    var a = null != arguments[l] ? arguments[l] : {},
      i = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), i.forEach(function(l) {
      var i;
      i = a[l], l in e ? Object.defineProperty(e, l, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = i
    })
  }
  return e
}

function v(e) {
  let {
    imageSrc: l,
    gameName: a
  } = e, [t, r] = n.useState(false), s = null != a ? a : u.intl.string(u.t.GIWFlF);
  return t || null == l ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: p.fallback,
    children: (0, i.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, i.jsx)("img", {
    src: l,
    alt: s,
    className: p.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function x(e) {
  let {
    imageSrc: l,
    gameName: a,
    applicationId: n,
    userId: t,
    className: m,
    hideTooltip: x = false,
    coverRef: f
  } = e, h = (0, d.Z)({
    location: "GameCover",
    applicationId: n,
    source: o.m1.UserProfile,
    sourceUserId: t,
    trackEntryPointImpression: true
  }), E = null != a ? a : u.intl.string(u.t.GIWFlF), j = u.intl.formatToPlainString(u.t["8QLQB+"], {
    gameName: E
  }), A = e => x ? e : (0, i.jsx)(s.u, {
    text: E,
    children: e
  });
  return A(null == h ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: f,
      className: m,
      tabIndex: false,
      children: (0, i.jsx)(v, {
        imageSrc: l,
        gameName: a
      })
    })
  }) : (0, i.jsx)(c.P3F, {
    innerRef: f,
    onClick: h,
    "aria-label": j,
    className: r()(p.clickable, m),
    children: (0, i.jsx)(v, {
      imageSrc: l,
      gameName: a
    })
  }))
}

function f(e) {
  var {
    applicationId: l,
    userId: a,
    className: n,
    disableInteraction: t = false,
    hideTooltip: s,
    coverRef: o
  } = e, d = function(e, l) {
    if (null == e) return {};
    var a, i, n = function(e, l) {
      if (null == e) return {};
      var a, i, n = {},
        t = Object.keys(e);
      for (i = 0; i < t.length; i++) a = t[i], l.indexOf(a) >= 0 || (n[a] = e[a]);
      return n
    }(e, l);
    if (Object.getOwnPropertySymbols) {
      var t = Object.getOwnPropertySymbols(e);
      for (i = 0; i < t.length; i++) a = t[i], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a])
    }
    return n
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
  let u = r()(p.coverContainer, n);
  return t ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: o,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(v, m({}, d))
    })
  }) : (0, i.jsx)(x, m({
    className: u,
    applicationId: l,
    userId: a,
    hideTooltip: s,
    coverRef: o
  }, d))
}