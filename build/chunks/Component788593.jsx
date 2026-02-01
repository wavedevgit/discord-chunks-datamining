/** Chunk was on 21738 **/
/** chunk id: 788593, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  R: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js");

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

function A(e) {
  let {
    imageSrc: t,
    gameName: n
  } = e, [l, a] = i.useState(false), s = null != n ? n : g.intl.string(g.t.GIWFlF);
  return l || null == t ? (0, r.jsx)("div", {
    role: "img",
    "aria-label": s,
    className: m.Np,
    children: (0, r.jsx)(c.Text, {
      variant: "text-xxs/medium",
      lineClamp: 3,
      "aria-hidden": true,
      children: s
    })
  }) : (0, r.jsx)("img", {
    src: t,
    alt: s,
    className: m.$_,
    onError: () => a(true),
    onLoad: () => a(false)
  })
}

function _(e) {
  let {
    imageSrc: t,
    gameName: n,
    applicationId: l,
    userId: f,
    className: _,
    hideTooltip: b = false,
    coverRef: E
  } = e, O = (0, s.bG)([h.A], () => h.A.hasUnsavedChanges()), y = (0, d.A)({
    location: "GameCover",
    applicationId: l,
    source: u.Ob.UserProfile,
    sourceUserId: f,
    trackEntryPointImpression: true
  }), I = null != n ? n : g.intl.string(g.t.GIWFlF), v = g.intl.formatToPlainString(g.t["8QLQB+"], {
    gameName: I
  }), S = i.useCallback(e => {
    if (O) {
      e.preventDefault(), e.stopPropagation(), p.A.notifyUnsavedWidgets();
      return
    }
    null == y || y(e)
  }, [O, y]), C = e => b ? e : (0, r.jsx)(o.m, {
    text: I,
    ariaHidden: true,
    children: e
  });
  return C(null == y ? (0, r.jsx)(c.vN3, {
    children: (0, r.jsx)("div", {
      ref: E,
      className: _,
      tabIndex: false,
      children: (0, r.jsx)(A, {
        imageSrc: t,
        gameName: n
      })
    })
  }) : (0, r.jsx)(c.DUT, {
    innerRef: E,
    onClick: S,
    "aria-label": v,
    className: a()(m.vk, _),
    children: (0, r.jsx)(A, {
      imageSrc: t,
      gameName: n
    })
  }))
}

function b(e) {
  let {
    applicationId: t,
    userId: n,
    className: i,
    disableInteraction: l = false,
    hideTooltip: s,
    coverRef: o
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["applicationId", "userId", "className", "disableInteraction", "hideTooltip", "coverRef"]), d = a()(m.PY, i);
  return l ? (0, r.jsx)(c.vN3, {
    children: (0, r.jsx)("div", {
      ref: o,
      className: d,
      tabIndex: false,
      children: (0, r.jsx)(A, f({}, u))
    })
  }) : (0, r.jsx)(_, f({
    className: d,
    applicationId: t,
    userId: n,
    hideTooltip: s,
    coverRef: o
  }, u))
}