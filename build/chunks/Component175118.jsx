/** Chunk was on 69844 **/
/** chunk id: 175118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk21260 = require("./21260.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk79707 = require("./79707.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk16617 = require("./16617.js");

function m(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: i
  } = e, s = a.useMemo(() => null != n.find(e => {
    let {
      id: t
    } = e;
    return t === i
  }), [i, n]), [c, m] = a.useState(false), h = function(e) {
    let {
      selected: t,
      isHovered: n
    } = e;
    return n ? "text-primary" : t ? "text-brand" : "text-default"
  }({
    selected: s,
    isHovered: c
  }), g = function(e) {
    let {
      selected: t,
      isHovered: n
    } = e;
    return n ? o.TVs.colors.TEXT_PRIMARY : t ? o.TVs.colors.TEXT_BRAND : o.TVs.colors.INTERACTIVE_NORMAL
  }({
    selected: s,
    isHovered: c
  }), _ = a.useCallback(() => m(true), []), f = a.useCallback(() => m(false), []), b = a.useRef(null);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: b,
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, r.jsx)(d.Z, {
        selectedTab: i,
        onClose: a,
        tabs: n,
        onTabSelect: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      var n, a;
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(o.njP.Item, (n = function(e) {
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
      }({}, e), a = a = {
        id: "more",
        look: "brand",
        selectedItem: s ? "more" : true,
        className: l()(p.tab, {
          [p.selected]: false
        }),
        clickableRef: e => {
          null != e && null != e.ref && (b.current = e.ref)
        },
        "aria-label": u.intl.string(u.t["UKOtz+"]),
        children: (0, r.jsxs)("div", {
          className: p.more,
          onMouseEnter: _,
          onMouseLeave: f,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: h,
            children: u.intl.string(u.t["UKOtz+"])
          }), i ? (0, r.jsx)(o.u04, {
            size: "xs",
            color: g
          }) : (0, r.jsx)(o.CJ0, {
            size: "xs",
            color: g
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
      }), n))
    }
  })
}

function h(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: i,
    onTabSelect: d,
    onAvailableWidthChange: u
  } = e, [h, g] = a.useState(0), _ = a.useRef(h), {
    lastVisibleIndex: f,
    onItemLayout: b,
    overflowItemsRef: x,
    itemWidthsRef: v
  } = (0, s.zP)({
    items: i,
    itemGapPx: 20,
    maxLines: 1,
    containerWidth: h
  }), C = a.useMemo(() => i.slice(0, f + 1), [f, i]), j = a.useMemo(() => i.slice(f + 1), [f, i]), y = a.useRef(null), I = a.useCallback(e => {
    let t = e.contentRect.width;
    if (null == t || _.current === t) return;
    g(t), _.current = t;
    let n = v.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
    null == u || u(t - n)
  }, [v, u]);
  (0, c.s)(y, I);
  let S = 0 !== h;
  return (0, r.jsxs)("div", {
    className: l()(p.container, t),
    ref: y,
    children: [(0, r.jsxs)("div", {
      className: p.measurements,
      children: [i.map((e, t) => (0, r.jsx)(s.AJ, {
        index: t,
        onItemLayout: b,
        children: (0, r.jsx)(o.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          className: p.tab,
          children: (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            children: e.label
          })
        })
      }, e.id)), (0, r.jsx)("div", {
        ref: x,
        children: (0, r.jsx)(m, {
          tabs: j,
          onTabSelect: d,
          selectedTab: n
        })
      })]
    }), S && (0, r.jsxs)(o.njP, {
      type: "top",
      look: "brand",
      selectedItem: n,
      onItemSelect: d,
      className: p.tabs,
      children: [C.map(e => (0, r.jsx)(o.njP.Item, {
        id: e.id,
        look: "brand",
        "aria-label": e.label,
        className: p.tab,
        children: e.label
      }, e.id)), 0 !== j.length ? (0, r.jsx)(m, {
        tabs: j,
        onTabSelect: d,
        selectedTab: n
      }) : null]
    })]
  })
}