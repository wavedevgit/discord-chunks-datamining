/** Chunk was on 92504 **/
/** chunk id: 744695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk21260 = require("./21260.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk79707 = require("./79707.jsx"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk656988 = require("./656988.js");

function f(e) {
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  var {
    id: t,
    label: n,
    selected: r,
    handleTransition: i
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, a, r = function(e, t) {
      if (null == e) return {};
      var n, a, r = {},
        i = Object.keys(e);
      for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["id", "label", "selected", "handleTransition"]);
  return (0, a.jsx)(d.Z.Title, b(f({}, s), {
    onClick: () => i(t),
    wrapperClassName: h.tabWrapper,
    className: l()(h.tab, {
      [h.selected]: r
    }),
    children: n
  }))
}

function x(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: i,
    selected: s
  } = e, c = r.useRef(null);
  return (0, a.jsx)(o.yRy, {
    targetElementRef: c,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, a.jsx)(u.Z, {
        selectedTab: i,
        onClose: r,
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
      return (0, a.jsxs)(d.Z.Title, b(f({}, e), {
        ref: c,
        wrapperClassName: h.tabWrapper,
        className: l()(h.tab, h.more, {
          [h.selected]: s
        }),
        id: p.GlobalDiscoverySharedTabId.MORE,
        "aria-label": m.intl.string(m.t["UKOtz+"]),
        children: [m.intl.string(m.t["UKOtz+"]), n ? (0, a.jsx)(o.u04, {
          size: "xs"
        }) : (0, a.jsx)(o.CJ0, {
          size: "xs"
        })]
      }))
    }
  })
}

function v(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: i,
    onTabSelect: o,
    onAvailableWidthChange: d
  } = e, [u, p] = r.useState(0), m = r.useRef(u), {
    lastVisibleIndex: f,
    onItemLayout: b,
    overflowItemsRef: v,
    itemWidthsRef: C
  } = (0, s.zP)({
    items: i,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: u
  }), j = r.useMemo(() => i.slice(0, f + 1), [f, i]), _ = r.useMemo(() => i.slice(f + 1), [f, i]), y = r.useRef(null), I = r.useCallback(e => {
    let t = e.contentRect.width;
    if (null == t || m.current === t) return;
    p(t), m.current = t;
    let n = C.current.reduce((e, t, n) => e + t + 24 * (0 !== n));
    null == d || d(t - n)
  }, [C, d]);
  (0, c.s)(y, I);
  let S = 0 !== u,
    P = _.some(e => e.id === n);
  return (0, a.jsxs)("div", {
    className: l()(h.container, t),
    ref: y,
    children: [(0, a.jsxs)("div", {
      className: h.measurements,
      children: [i.map((e, t) => (0, a.jsx)(s.AJ, {
        index: t,
        onItemLayout: b,
        children: (0, a.jsx)(g, {
          id: e.id,
          label: e.label,
          selected: n === e.id,
          handleTransition: o
        }, e.id)
      }, e.id)), (0, a.jsx)("div", {
        ref: v,
        children: (0, a.jsx)(x, {
          tabs: _,
          onTabSelect: o,
          selectedTab: n,
          selected: P
        })
      })]
    }), S && (0, a.jsxs)("div", {
      className: h.tabs,
      children: [j.map(e => (0, a.jsx)(g, {
        id: e.id,
        label: e.label,
        selected: n === e.id,
        handleTransition: o
      }, e.id)), 0 !== _.length ? (0, a.jsx)(x, {
        tabs: _,
        onTabSelect: o,
        selectedTab: n,
        selected: P
      }) : null]
    })]
  })
}