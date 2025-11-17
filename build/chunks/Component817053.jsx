/** Chunk was on 39380 **/
/** chunk id: 817053, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  o: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js");

function p(e) {
  for (var a = 1; a < arguments.length; a++) {
    var l = null != arguments[a] ? arguments[a] : {},
      i = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), i.forEach(function(a) {
      var i;
      i = l[a], a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = i
    })
  }
  return e
}

function v(e) {
  let {
    imageSrc: a,
    gameName: l
  } = e, [n, r] = t.useState(false), s = null != l ? l : u.intl.string(u.t.GIWFlF);
  return n || null == a ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: m.fallback,
    children: (0, i.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, i.jsx)("img", {
    src: a,
    alt: s,
    className: m.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function x(e) {
  let {
    imageSrc: a,
    gameName: l,
    applicationId: t,
    userId: n,
    className: p,
    hideTooltip: x = false,
    coverRef: j
  } = e, h = (0, o.Z)({
    location: "GameCover",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  }), f = null != l ? l : u.intl.string(u.t.GIWFlF), g = u.intl.formatToPlainString(u.t["8QLQB+"], {
    gameName: f
  }), N = e => x ? e : (0, i.jsx)(s.u, {
    text: f,
    children: e
  });
  return N(null == h ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: j,
      className: p,
      tabIndex: false,
      children: (0, i.jsx)(v, {
        imageSrc: a,
        gameName: l
      })
    })
  }) : (0, i.jsx)(c.P3F, {
    innerRef: j,
    onClick: h,
    "aria-label": g,
    className: r()(m.clickable, p),
    children: (0, i.jsx)(v, {
      imageSrc: a,
      gameName: l
    })
  }))
}

function j(e) {
  var {
    applicationId: a,
    userId: l,
    className: t,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: d
  } = e, o = function(e, a) {
    if (null == e) return {};
    var l, i, t = function(e, a) {
      if (null == e) return {};
      var l, i, t = {},
        n = Object.keys(e);
      for (i = 0; i < n.length; i++) l = n[i], a.indexOf(l) >= 0 || (t[l] = e[l]);
      return t
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (i = 0; i < n.length; i++) l = n[i], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (t[l] = e[l])
    }
    return t
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
  let u = r()(m.coverContainer, t);
  return n ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: d,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(v, p({}, o))
    })
  }) : (0, i.jsx)(x, p({
    className: u,
    applicationId: a,
    userId: l,
    hideTooltip: s,
    coverRef: d
  }, o))
}