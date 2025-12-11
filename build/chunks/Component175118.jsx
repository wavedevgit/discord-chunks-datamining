/** Chunk was on 92504 **/
/** chunk id: 175118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk21260 = require("./21260.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk79707 = require("./79707.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1855 = require("./1855.js");

function m(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: i
  } = e, s = r.useMemo(() => null != n.find(e => {
    let {
      id: t
    } = e;
    return t === i
  }), [i, n]), [c, m] = r.useState(false), h = function(e) {
    let {
      selected: t,
      isHovered: n
    } = e;
    return n ? "text-strong" : t ? "text-brand" : "text-default"
  }({
    selected: s,
    isHovered: c
  }), f = function(e) {
    let {
      selected: t,
      isHovered: n
    } = e;
    return n ? o.TVs.colors.TEXT_STRONG : t ? o.TVs.colors.TEXT_BRAND : o.TVs.colors.INTERACTIVE_TEXT_DEFAULT
  }({
    selected: s,
    isHovered: c
  }), b = r.useCallback(() => m(true), []), g = r.useCallback(() => m(false), []), x = r.useRef(null);
  return (0, a.jsx)(o.yRy, {
    targetElementRef: x,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, a.jsx)(d.Z, {
        selectedTab: i,
        onClose: r,
        tabs: n,
        onTabSelect: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      var n, r;
      let {
        isShown: i
      } = t;
      return (0, a.jsx)(o.njP.Item, (n = function(e) {
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
      }({}, e), r = r = {
        id: "more",
        look: "brand",
        selectedItem: s ? "more" : true,
        className: l()(p.tab, {
          [p.selected]: false
        }),
        clickableRef: e => {
          null != e && null != e.ref && (x.current = e.ref)
        },
        "aria-label": u.intl.string(u.t["UKOtz+"]),
        children: (0, a.jsxs)("div", {
          className: p.more,
          onMouseEnter: b,
          onMouseLeave: g,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: h,
            children: u.intl.string(u.t["UKOtz+"])
          }), i ? (0, a.jsx)(o.u04, {
            size: "xs",
            color: f
          }) : (0, a.jsx)(o.CJ0, {
            size: "xs",
            color: f
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
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
  } = e, [h, f] = r.useState(0), b = r.useRef(h), {
    lastVisibleIndex: g,
    onItemLayout: x,
    overflowItemsRef: v,
    itemWidthsRef: C
  } = (0, s.zP)({
    items: i,
    itemGapPx: 20,
    maxLines: 1,
    containerWidth: h
  }), j = r.useMemo(() => i.slice(0, g + 1), [g, i]), _ = r.useMemo(() => i.slice(g + 1), [g, i]), y = r.useRef(null), I = r.useCallback(e => {
    let t = e.contentRect.width;
    if (null == t || b.current === t) return;
    f(t), b.current = t;
    let n = C.current.reduce((e, t, n) => e + t + 20 * (0 !== n));
    null == u || u(t - n)
  }, [C, u]);
  (0, c.s)(y, I);
  let S = 0 !== h;
  return (0, a.jsxs)("div", {
    className: l()(p.container, t),
    ref: y,
    children: [(0, a.jsxs)("div", {
      className: p.measurements,
      children: [i.map((e, t) => (0, a.jsx)(s.AJ, {
        index: t,
        onItemLayout: x,
        children: (0, a.jsx)(o.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          className: p.tab,
          children: (0, a.jsx)(o.Text, {
            variant: "text-md/medium",
            children: e.label
          })
        })
      }, e.id)), (0, a.jsx)("div", {
        ref: v,
        children: (0, a.jsx)(m, {
          tabs: _,
          onTabSelect: d,
          selectedTab: n
        })
      })]
    }), S && (0, a.jsxs)(o.njP, {
      type: "top",
      look: "brand",
      selectedItem: n,
      onItemSelect: d,
      className: p.tabs,
      children: [j.map(e => (0, a.jsx)(o.njP.Item, {
        id: e.id,
        look: "brand",
        "aria-label": e.label,
        className: p.tab,
        children: e.label
      }, e.id)), 0 !== _.length ? (0, a.jsx)(m, {
        tabs: _,
        onTabSelect: d,
        selectedTab: n
      }) : null]
    })]
  })
}