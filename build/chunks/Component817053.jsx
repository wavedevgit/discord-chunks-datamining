/** Chunk was on 45956 **/
/** chunk id: 817053, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => j,
  o: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk713603 = require("./713603.js");

function g(e) {
  for (var a = 1; a < arguments.length; a++) {
    var t = null != arguments[a] ? arguments[a] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(a) {
      var i;
      i = t[a], a in e ? Object.defineProperty(e, a, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[a] = i
    })
  }
  return e
}

function x(e) {
  let {
    imageSrc: a,
    gameName: t
  } = e, [n, r] = l.useState(false), s = null != t ? t : v.intl.string(v.t.GIWFlF);
  return n || null == a ? (0, i.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: f.fallback,
    children: (0, i.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, i.jsx)("img", {
    src: a,
    alt: s,
    className: f.gameCoverImage,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function h(e) {
  let {
    imageSrc: a,
    gameName: t,
    applicationId: n,
    userId: g,
    className: h,
    hideTooltip: j = false,
    coverRef: I
  } = e, N = (0, s.e7)([p.Z], () => p.Z.hasUnsavedChanges()), E = (0, u.Z)({
    location: "GameCover",
    applicationId: n,
    source: d.m1.UserProfile,
    sourceUserId: g,
    trackEntryPointImpression: true
  }), b = null != t ? t : v.intl.string(v.t.GIWFlF), L = v.intl.formatToPlainString(v.t["8QLQB+"], {
    gameName: b
  }), A = l.useCallback(e => {
    if (N) {
      e.preventDefault(), e.stopPropagation(), m.Z.notifyUnsavedWidgets();
      return
    }
    null == E || E(e)
  }, [N, E]), O = e => j ? e : (0, i.jsx)(o.u, {
    text: b,
    ariaHidden: true,
    children: e
  });
  return O(null == E ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: I,
      className: h,
      tabIndex: false,
      children: (0, i.jsx)(x, {
        imageSrc: a,
        gameName: t
      })
    })
  }) : (0, i.jsx)(c.P3F, {
    innerRef: I,
    onClick: A,
    "aria-label": L,
    className: r()(f.clickable, h),
    children: (0, i.jsx)(x, {
      imageSrc: a,
      gameName: t
    })
  }))
}

function j(e) {
  var {
    applicationId: a,
    userId: t,
    className: l,
    disableInteraction: n = false,
    hideTooltip: s,
    coverRef: o
  } = e, d = function(e, a) {
    if (null == e) return {};
    var t, i, l = function(e, a) {
      if (null == e) return {};
      var t, i, l = {},
        n = Object.keys(e);
      for (i = 0; i < n.length; i++) t = n[i], a.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, a);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (i = 0; i < n.length; i++) t = n[i], !(a.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]);
  let u = r()(f.coverContainer, l);
  return n ? (0, i.jsx)(c.tEY, {
    children: (0, i.jsx)("div", {
      ref: o,
      className: u,
      tabIndex: false,
      children: (0, i.jsx)(x, g({}, d))
    })
  }) : (0, i.jsx)(h, g({
    className: u,
    applicationId: a,
    userId: t,
    hideTooltip: s,
    coverRef: o
  }, d))
}