/** Chunk was on 45620 **/
/** chunk id: 856908, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
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

function S(e, t) {
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

function _(e) {
  let {
    tab: t,
    label: n,
    selected: l,
    handleTransition: a,
    hasSubmenu: o,
    showNewBadge: c
  } = e;
  return o ? (0, r.jsx)(x, {
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
    children: [n, c && (0, r.jsx)(i.IGR, {
      text: h.intl.string(h.t.y2b7CA),
      className: C.newBadge
    })]
  })
}

function x(e) {
  let {
    tab: t,
    label: n,
    selected: a,
    handleTransition: o
  } = e, c = l.useRef(null), p = l.useRef(false), {
    isHovered: m,
    setIsHovered: h,
    onMouseEnter: C,
    onMouseLeave: _,
    cancelTimers: x
  } = (0, g.Z)(100, 100), O = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), x(), h(true), p.current = d.Z.keyboardModeEnabled)
  }, y = l.useCallback(() => {
    p.current = d.Z.keyboardModeEnabled, C()
  }, [C]);
  return (0, r.jsx)("div", {
    className: E.tabWithMenuContainer,
    onMouseEnter: y,
    onMouseLeave: _,
    children: (0, r.jsx)(i.yRy, {
      targetElementRef: c,
      shouldShow: m,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        x(), h(true), p.current = d.Z.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        p.current && !d.Z.keyboardModeEnabled && (0, u.Qj)(), h(false), null == (e = c.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: C,
          onMouseLeave: _,
          children: (0, r.jsx)(b.Z, {
            handleTransition: o,
            onClose: t
          })
        })
      },
      children: (e, l) => {
        let {
          isShown: u
        } = l, d = u ? i.u04 : i.CJ0;
        return (0, r.jsx)(f.Z.Title, S(v({}, e), {
          ref: c,
          onClick: () => o(t),
          onKeyDown: O,
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

function O(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: a,
    selected: o,
    showOrbRentalNewBadge: c
  } = e, b = l.useRef(null), m = l.useRef(false), {
    isHovered: C,
    setIsHovered: _,
    onMouseEnter: x,
    onMouseLeave: O,
    cancelTimers: y
  } = (0, g.Z)(100, 100), k = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), y(), _(true), m.current = d.Z.keyboardModeEnabled)
  }, T = l.useCallback(() => {
    m.current = d.Z.keyboardModeEnabled, x()
  }, [x]);
  return (0, r.jsx)("div", {
    className: E.tabWithMenuContainer,
    onMouseEnter: T,
    onMouseLeave: O,
    children: (0, r.jsx)(i.yRy, {
      targetElementRef: b,
      shouldShow: C,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        y(), _(true), m.current = d.Z.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        m.current && !d.Z.keyboardModeEnabled && (0, u.Qj)(), _(false), null == (e = b.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: x,
          onMouseLeave: O,
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
        } = t, l = n ? i.u04 : i.CJ0;
        return (0, r.jsx)(f.Z.Title, S(v({}, e), {
          ref: b,
          onKeyDown: k,
          wrapperClassName: E.tabWrapper,
          className: s()(E.tab, E.more, {
            [E.selected]: o
          }),
          "aria-label": h.intl.string(h.t["UKOtz+"]),
          children: (0, r.jsxs)("span", {
            className: E.tabWithChevron,
            children: [h.intl.string(h.t["UKOtz+"]), (0, r.jsx)(l, {
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
  return e === n || null != (r = t.hasSubmenu) && r && (0, m.RE)(n) && e === m.AW.CATALOG
}

function k(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: a,
    onTabSelect: i,
    showOrbRentalNewBadge: u
  } = e, [d, f] = l.useState(0), g = l.useRef(d), {
    lastVisibleIndex: b,
    onItemLayout: p,
    overflowItemsRef: h
  } = (0, o.zP)({
    items: a,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: d
  }), C = l.useMemo(() => a.slice(0, b + 1), [b, a]), v = l.useMemo(() => a.slice(b + 1), [b, a]), S = l.useRef(null), x = l.useCallback(e => {
    let t = e.contentRect.width;
    null != t && g.current !== t && (f(t), g.current = t)
  }, []);
  (0, c.s)(S, x);
  let k = 0 !== d,
    T = v.some(e => y(e.tab, e, n));
  return (0, r.jsxs)("div", {
    className: s()(E.container, t),
    ref: S,
    children: [(0, r.jsxs)("div", {
      className: E.measurements,
      children: [a.map((e, t) => {
        var l;
        return (0, r.jsx)(o.AJ, {
          index: t,
          onItemLayout: p,
          children: (0, r.jsx)(_, {
            tab: e.tab,
            label: e.label,
            selected: y(e.tab, e, n),
            handleTransition: i,
            hasSubmenu: null != (l = e.hasSubmenu) && l,
            showNewBadge: e.tab === m.AW.ORBS && u
          })
        }, e.tab)
      }), (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)(O, {
          tabs: v,
          onTabSelect: i,
          selectedTab: n,
          selected: T,
          showOrbRentalNewBadge: u
        })
      })]
    }), k && (0, r.jsxs)("div", {
      className: E.tabs,
      children: [C.map(e => {
        var t;
        return (0, r.jsx)(_, {
          tab: e.tab,
          label: e.label,
          selected: y(e.tab, e, n),
          handleTransition: i,
          hasSubmenu: null != (t = e.hasSubmenu) && t,
          showNewBadge: e.tab === m.AW.ORBS && u
        }, e.tab)
      }), 0 !== v.length ? (0, r.jsx)(O, {
        tabs: v,
        onTabSelect: i,
        selectedTab: n,
        selected: T,
        showOrbRentalNewBadge: u
      }) : null]
    })]
  })
}