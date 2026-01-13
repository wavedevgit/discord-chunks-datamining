/** Chunk was on 55827 **/
/** chunk id: 817053, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  o: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713603 = require("./713603.js");

function f(e) {
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

function h(e) {
  let {
    imageSrc: a,
    gameName: l
  } = e, [n, s] = t.useState(false), r = null != l ? l : v.intl.string(v.t.GIWFlF);
  return n || null == a ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": r,
    className: g.fallback,
    children: (0, i.jsx)(o.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: r
    })
  }) : (0, i.jsx)("img", {
    src: a,
    alt: r,
    className: g.gameCoverImage,
    onError: () => s(true),
    onLoad: () => s(false)
  })
}

function x(e) {
  let {
    imageSrc: a,
    gameName: l,
    applicationId: n,
    userId: f,
    className: x,
    hideTooltip: j = false,
    coverRef: I
  } = e, N = (0, r.e7)([p.Z], () => p.Z.hasUnsavedChanges()), b = (0, u.Z)({
    location: "GameCover",
    applicationId: n,
    source: d.m1.UserProfile,
    sourceUserId: f,
    trackEntryPointImpression: true
  }), L = null != l ? l : v.intl.string(v.t.GIWFlF), E = v.intl.formatToPlainString(v.t["8QLQB+"], {
    gameName: L
  }), O = t.useCallback(e => {
    if (N) {
      e.preventDefault(), e.stopPropagation(), m.Z.notifyUnsavedWidgets();
      return
    }
    null == b || b(e)
  }, [N, b]), A = e => j ? e : (0, i.jsx)(c.u, {
    text: L,
    ariaHidden: true,
    children: e
  });
  return A(null == b ? (0, i.jsx)(o.tEY, {
    children: (0, i.jsx)("div", {
      ref: I,
      className: x,
      tabIndex: false,
      children: (0, i.jsx)(h, {
        imageSrc: a,
        gameName: l
      })
    })
  }) : (0, i.jsx)(o.P3F, {
    innerRef: I,
    onClick: O,
    "aria-label": E,
    className: s()(g.clickable, x),
    children: (0, i.jsx)(h, {
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
    hideTooltip: r,
    coverRef: c
  } = e, d = function(e, a) {
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
  let u = s()(g.coverContainer, t);
  return n ? (0, i.jsx)(o.tEY, {
    children: (0, i.jsx)("div", {
      ref: c,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(h, f({}, d))
    })
  }) : (0, i.jsx)(x, f({
    className: u,
    applicationId: a,
    userId: l,
    hideTooltip: r,
    coverRef: c
  }, d))
}