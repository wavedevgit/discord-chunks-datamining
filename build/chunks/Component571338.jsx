/** Chunk was on 28636 **/
/** chunk id: 571338, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk3666 = require("./3666.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk124589 = require("./124589.jsx"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk402664 = require("./402664.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    id: t,
    label: n,
    selected: l,
    handleTransition: i
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["id", "label", "selected", "handleTransition"]);
  return (0, r.jsx)(d.A.Title, _(g({}, s), {
    onClick: () => i(t),
    wrapperClassName: m.Vn,
    className: a()(m.Mf, {
      [m.wH]: l
    }),
    children: n
  }))
}

function f(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: i,
    selected: s
  } = e, c = l.useRef(null);
  return (0, r.jsx)(o.YNO, {
    targetElementRef: c,
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(u.A, {
        selectedTab: i,
        onClose: l,
        tabs: n,
        onTabSelect: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, r.jsxs)(d.A.Title, _(g({}, e), {
        ref: c,
        wrapperClassName: m.Vn,
        className: a()(m.Mf, m.OS, {
          [m.wH]: s
        }),
        id: p.GlobalDiscoverySharedTabId.MORE,
        "aria-label": h.intl.string(h.t["UKOtz+"]),
        children: [h.intl.string(h.t["UKOtz+"]), n ? (0, r.jsx)(o.tN5, {
          size: "xs"
        }) : (0, r.jsx)(o.abt, {
          size: "xs"
        })]
      }))
    }
  })
}

function x(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: i,
    onTabSelect: o,
    onAvailableWidthChange: d
  } = e, [u, p] = l.useState(0), h = l.useRef(u), {
    lastVisibleIndex: g,
    onItemLayout: _,
    overflowItemsRef: x,
    itemWidthsRef: v
  } = (0, s.Wv)({
    items: i,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: u
  }), j = l.useMemo(() => i.slice(0, g + 1), [g, i]), A = l.useMemo(() => i.slice(g + 1), [g, i]), y = l.useRef(null), C = l.useCallback(e => {
    let t = e.contentRect.width;
    if (null == t || h.current === t) return;
    p(t), h.current = t;
    let n = v.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
    null == d || d(t - n)
  }, [v, d]);
  (0, c.g)(y, C);
  let O = 0 !== u,
    S = A.some(e => e.id === n);
  return (0, r.jsxs)("div", {
    className: a()(m.kL, t),
    ref: y,
    children: [(0, r.jsxs)("div", {
      className: m.Kk,
      children: [i.map((e, t) => (0, r.jsx)(s.Ae, {
        index: t,
        onItemLayout: _,
        children: (0, r.jsx)(b, {
          id: e.id,
          label: e.label,
          selected: n === e.id,
          handleTransition: o
        }, e.id)
      }, e.id)), (0, r.jsx)("div", {
        ref: x,
        children: (0, r.jsx)(f, {
          tabs: A,
          onTabSelect: o,
          selectedTab: n,
          selected: S
        })
      })]
    }), O && (0, r.jsxs)("div", {
      className: m.vR,
      children: [j.map(e => (0, r.jsx)(b, {
        id: e.id,
        label: e.label,
        selected: n === e.id,
        handleTransition: o
      }, e.id)), 0 !== A.length ? (0, r.jsx)(f, {
        tabs: A,
        onTabSelect: o,
        selectedTab: n,
        selected: S
      }) : null]
    })]
  })
}