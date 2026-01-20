/** Chunk was on 45620 **/
/** chunk id: 856908, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk21260 = require("./21260.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk579185 = require("./579185.js"),
  Chunk304742 = require("./304742.jsx"),
  Chunk974084 = require("./974084.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk379398 = require("./379398.js"),
  Chunk402749 = require("./402749.js");

function v(e) {
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

function x(e, t) {
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

function S(e) {
  let {
    tab: t,
    label: n,
    selected: l,
    handleTransition: a,
    hasSubmenu: i,
    showNewBadge: c
  } = e;
  return i ? (0, r.jsx)(O, {
    tab: t,
    label: n,
    selected: l,
    handleTransition: a
  }) : (0, r.jsxs)(f.Z.Title, {
    onClick: () => a(t),
    wrapperClassName: E.tabWrapper,
    className: s()(E.tab, {
      [E.selected]: l
    }),
    children: [n, c && (0, r.jsx)(o.IGR, {
      text: m.intl.string(m.t.y2b7CA),
      className: C.newBadge
    })]
  })
}

function O(e) {
  let {
    tab: t,
    label: n,
    selected: a,
    handleTransition: i
  } = e, c = l.useRef(null), p = l.useRef(false), {
    isHovered: h,
    setIsHovered: m,
    onMouseEnter: C,
    onMouseLeave: S,
    cancelTimers: O
  } = (0, g.Z)(100, 100), _ = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), O(), m(true), p.current = d.Z.keyboardModeEnabled)
  }, y = l.useCallback(() => {
    p.current = d.Z.keyboardModeEnabled, C()
  }, [C]);
  return (0, r.jsx)("div", {
    className: E.tabWithMenuContainer,
    onMouseEnter: y,
    onMouseLeave: S,
    children: (0, r.jsx)(o.yRy, {
      targetElementRef: c,
      shouldShow: h,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        O(), m(true), p.current = d.Z.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        p.current && !d.Z.keyboardModeEnabled && (0, u.Qj)(), m(false), null == (e = c.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: C,
          onMouseLeave: S,
          children: (0, r.jsx)(b.Z, {
            handleTransition: i,
            onClose: t
          })
        })
      },
      children: (e, l) => {
        let {
          isShown: u
        } = l, d = u ? o.u04 : o.CJ0;
        return (0, r.jsx)(f.Z.Title, x(v({}, e), {
          ref: c,
          onClick: () => i(t),
          onKeyDown: _,
          wrapperClassName: E.tabWrapper,
          className: s()(E.tab, {
            [E.selected]: a
          }),
          children: (0, r.jsxs)("span", {
            className: E.tabWithChevron,
            children: [n, (0, r.jsx)(d, {
              size: "sm",
              color: "currentColor"
            })]
          })
        }))
      }
    })
  })
}

function _(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: a,
    selected: i,
    showOrbRentalNewBadge: c
  } = e, b = l.useRef(null), h = l.useRef(false), {
    isHovered: C,
    setIsHovered: S,
    onMouseEnter: O,
    onMouseLeave: _,
    cancelTimers: y
  } = (0, g.Z)(100, 100), j = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), y(), S(true), h.current = d.Z.keyboardModeEnabled)
  }, k = l.useCallback(() => {
    h.current = d.Z.keyboardModeEnabled, O()
  }, [O]);
  return (0, r.jsx)("div", {
    className: E.tabWithMenuContainer,
    onMouseEnter: k,
    onMouseLeave: _,
    children: (0, r.jsx)(o.yRy, {
      targetElementRef: b,
      shouldShow: C,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        y(), S(true), h.current = d.Z.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        h.current && !d.Z.keyboardModeEnabled && (0, u.Qj)(), S(false), null == (e = b.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: O,
          onMouseLeave: _,
          children: (0, r.jsx)(p.Z, {
            selectedTab: a,
            onClose: l,
            tabs: n,
            onTabSelect: t,
            showOrbRentalNewBadge: c
          })
        })
      },
      children: (e, t) => {
        let {
          isShown: n
        } = t, l = n ? o.u04 : o.CJ0;
        return (0, r.jsx)(f.Z.Title, x(v({}, e), {
          ref: b,
          onKeyDown: j,
          wrapperClassName: E.tabWrapper,
          className: s()(E.tab, E.more, {
            [E.selected]: i
          }),
          "aria-label": m.intl.string(m.t["UKOtz+"]),
          children: (0, r.jsxs)("span", {
            className: E.tabWithChevron,
            children: [m.intl.string(m.t["UKOtz+"]), (0, r.jsx)(l, {
              size: "xs"
            })]
          })
        }))
      }
    })
  })
}

function y(e, t, n) {
  var r;
  return e === n || null != (r = t.hasSubmenu) && r && (0, h.RE)(n) && e === h.AW.CATALOG
}

function j(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: a,
    onTabSelect: o,
    showOrbRentalNewBadge: u
  } = e, [d, f] = l.useState(0), g = l.useRef(d), {
    lastVisibleIndex: b,
    onItemLayout: p,
    overflowItemsRef: m
  } = (0, i.zP)({
    items: a,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: d
  }), C = l.useMemo(() => a.slice(0, b + 1), [b, a]), v = l.useMemo(() => a.slice(b + 1), [b, a]), x = l.useRef(null), O = l.useCallback(e => {
    let t = e.contentRect.width;
    null != t && g.current !== t && (f(t), g.current = t)
  }, []);
  (0, c.s)(x, O);
  let j = 0 !== d,
    k = v.some(e => y(e.tab, e, n));
  return (0, r.jsxs)("div", {
    className: s()(E.container, t),
    ref: x,
    children: [(0, r.jsxs)("div", {
      className: E.measurements,
      children: [a.map((e, t) => {
        var l;
        return (0, r.jsx)(i.AJ, {
          index: t,
          onItemLayout: p,
          children: (0, r.jsx)(S, {
            tab: e.tab,
            label: e.label,
            selected: y(e.tab, e, n),
            handleTransition: o,
            hasSubmenu: null != (l = e.hasSubmenu) && l,
            showNewBadge: e.tab === h.AW.ORBS && u
          })
        }, e.tab)
      }), (0, r.jsx)("div", {
        ref: m,
        children: (0, r.jsx)(_, {
          tabs: v,
          onTabSelect: o,
          selectedTab: n,
          selected: k,
          showOrbRentalNewBadge: u
        })
      })]
    }), j && (0, r.jsxs)("div", {
      className: E.tabs,
      children: [C.map(e => {
        var t;
        return (0, r.jsx)(S, {
          tab: e.tab,
          label: e.label,
          selected: y(e.tab, e, n),
          handleTransition: o,
          hasSubmenu: null != (t = e.hasSubmenu) && t,
          showNewBadge: e.tab === h.AW.ORBS && u
        }, e.tab)
      }), 0 !== v.length ? (0, r.jsx)(_, {
        tabs: v,
        onTabSelect: o,
        selectedTab: n,
        selected: k,
        showOrbRentalNewBadge: u
      }) : null]
    })]
  })
}