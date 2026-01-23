/** Chunk was on 42944 **/
/** chunk id: 788593, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j,
  R: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function x(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [i, r] = l.useState(false), s = null != n ? n : f.intl.string(f.t.GIWFlF);
  return i || null == t ? (0, a.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: g.Np,
    children: (0, a.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, a.jsx)("img", {
    src: t,
    alt: s,
    className: g.$_,
    onError: () => r(true),
    onLoad: () => r(false)
  })
}

function h(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: i,
    userId: v,
    className: h,
    hideTooltip: j = false,
    coverRef: b
  } = e, I = (0, s.bG)([m.A], () => m.A.hasUnsavedChanges()), A = (0, d.A)({
    location: "GameCover",
    applicationId: i,
    source: u.Ob.UserProfile,
    sourceUserId: v,
    trackEntryPointImpression: true
  }), y = null != n ? n : f.intl.string(f.t.GIWFlF), N = f.intl.formatToPlainString(f.t["8QLQB+"], {
    gameName: y
  }), E = l.useCallback(e => {
    if (I) {
      e.preventDefault(), e.stopPropagation(), p.A.notifyUnsavedWidgets();
      return
    }
    null == A || A(e)
  }, [I, A]), O = e => j ? e : (0, a.jsx)(o.m, {
    text: y,
    ariaHidden: true,
    children: e
  });
  return O(null == A ? (0, a.jsx)(c.vN3, {
    children: (0, a.jsx)("div", {
      ref: b,
      className: h,
      tabIndex: false,
      children: (0, a.jsx)(x, {
        imageSrc: t,
        gameName: n
      })
    })
  }) : (0, a.jsx)(c.DUT, {
    innerRef: b,
    onClick: E,
    "aria-label": N,
    className: r()(g.vk, h),
    children: (0, a.jsx)(x, {
      imageSrc: t,
      gameName: n
    })
  }))
}

function j(e) {
  let {
    applicationId: t,
    userId: n,
    className: l,
    disableInteraction: i = false,
    hideTooltip: s,
    coverRef: o
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, a, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          i = Object.getOwnPropertyNames(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
    return i
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]), d = r()(g.PY, l);
  return i ? (0, a.jsx)(c.vN3, {
    children: (0, a.jsx)("div", {
      ref: o,
      className: d,
      tabIndex: false,
      children: (0, a.jsx)(x, v({}, u))
    })
  }) : (0, a.jsx)(h, v({
    className: d,
    applicationId: t,
    userId: n,
    hideTooltip: s,
    coverRef: o
  }, u))
}