/** Chunk was on 59275 **/
/** chunk id: 494573, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk3666 = require("./3666.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk421773 = require("./421773.js"),
  Chunk397309 = require("./397309.jsx"),
  Chunk190294 = require("./190294.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78716 = require("./78716.js"),
  Chunk525037 = require("./525037.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function S(e) {
  let {
    tab: t,
    label: l,
    selected: r,
    handleTransition: s,
    hasSubmenu: i,
    showNewBadge: c
  } = e;
  return i ? (0, n.jsx)(C, {
    tab: t,
    label: l,
    selected: r,
    handleTransition: s
  }) : (0, n.jsxs)(f.A.Title, {
    onClick: () => s(t),
    wrapperClassName: v.Vn,
    className: a()(v.Mf, {
      [v.wH]: r
    }),
    children: [l, c && (0, n.jsx)(o.LpS, {
      text: h.intl.string(h.t.y2b7CA),
      className: E.Ad
    })]
  })
}

function C(e) {
  let {
    tab: t,
    label: l,
    selected: s,
    handleTransition: i
  } = e, c = r.useRef(null), m = r.useRef(false), {
    isHovered: p,
    setIsHovered: h,
    onMouseEnter: E,
    onMouseLeave: S,
    cancelTimers: C
  } = (0, b.A)(100, 100), O = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), C(), h(true), m.current = d.A.keyboardModeEnabled)
  }, _ = r.useCallback(() => {
    m.current = d.A.keyboardModeEnabled, E()
  }, [E]);
  return (0, n.jsx)("div", {
    className: v.iV,
    onMouseEnter: _,
    onMouseLeave: S,
    children: (0, n.jsx)(o.YNO, {
      targetElementRef: c,
      shouldShow: p,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        C(), h(true), m.current = d.A.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        m.current && !d.A.keyboardModeEnabled && (0, u.uS)(), h(false), null == (e = c.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)("div", {
          onMouseEnter: E,
          onMouseLeave: S,
          children: (0, n.jsx)(g.A, {
            handleTransition: i,
            onClose: t
          })
        })
      },
      children: (e, r) => {
        let {
          isShown: u
        } = r, d = u ? o.tN5 : o.abt;
        return (0, n.jsx)(f.A.Title, x(A({}, e), {
          ref: c,
          onClick: () => i(t),
          onKeyDown: O,
          wrapperClassName: v.Vn,
          className: a()(v.Mf, {
            [v.wH]: s
          }),
          children: (0, n.jsxs)("span", {
            className: v.hP,
            children: [l, (0, n.jsx)(d, {
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
    tabs: l,
    selectedTab: s,
    selected: i,
    showOrbRentalNewBadge: c
  } = e, g = r.useRef(null), p = r.useRef(false), {
    isHovered: E,
    setIsHovered: S,
    onMouseEnter: C,
    onMouseLeave: O,
    cancelTimers: _
  } = (0, b.A)(100, 100), y = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), _(), S(true), p.current = d.A.keyboardModeEnabled)
  }, j = r.useCallback(() => {
    p.current = d.A.keyboardModeEnabled, C()
  }, [C]);
  return (0, n.jsx)("div", {
    className: v.iV,
    onMouseEnter: j,
    onMouseLeave: O,
    children: (0, n.jsx)(o.YNO, {
      targetElementRef: g,
      shouldShow: E,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        _(), S(true), p.current = d.A.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        p.current && !d.A.keyboardModeEnabled && (0, u.uS)(), S(false), null == (e = g.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: r
        } = e;
        return (0, n.jsx)("div", {
          onMouseEnter: C,
          onMouseLeave: O,
          children: (0, n.jsx)(m.A, {
            selectedTab: s,
            onClose: r,
            tabs: l,
            onTabSelect: t,
            showOrbRentalNewBadge: c
          })
        })
      },
      children: (e, t) => {
        let {
          isShown: l
        } = t, r = l ? o.tN5 : o.abt;
        return (0, n.jsx)(f.A.Title, x(A({}, e), {
          ref: g,
          onKeyDown: y,
          wrapperClassName: v.Vn,
          className: a()(v.Mf, v.OS, {
            [v.wH]: i
          }),
          "aria-label": h.intl.string(h.t["UKOtz+"]),
          children: (0, n.jsxs)("span", {
            className: v.hP,
            children: [h.intl.string(h.t["UKOtz+"]), (0, n.jsx)(r, {
              size: "xs"
            })]
          })
        }))
      }
    })
  })
}

function _(e, t, l) {
  var n;
  return e === l || null != (n = t.hasSubmenu) && n && (0, p.dF)(l) && e === p.G2.CATALOG
}

function y(e) {
  let {
    className: t,
    selectedTab: l,
    tabs: s,
    onTabSelect: o,
    showOrbRentalNewBadge: u
  } = e, [d, f] = r.useState(0), b = r.useRef(d), {
    lastVisibleIndex: g,
    onItemLayout: m,
    overflowItemsRef: h
  } = (0, i.Wv)({
    items: s,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: d
  }), E = r.useMemo(() => s.slice(0, g + 1), [g, s]), A = r.useMemo(() => s.slice(g + 1), [g, s]), x = r.useRef(null), C = r.useCallback(e => {
    let t = e.contentRect.width;
    null != t && b.current !== t && (f(t), b.current = t)
  }, []);
  (0, c.g)(x, C);
  let y = 0 !== d,
    j = A.some(e => _(e.tab, e, l));
  return (0, n.jsxs)("div", {
    className: a()(v.kL, t),
    ref: x,
    children: [(0, n.jsxs)("div", {
      className: v.Kk,
      children: [s.map((e, t) => {
        var r;
        return (0, n.jsx)(i.Ae, {
          index: t,
          onItemLayout: m,
          children: (0, n.jsx)(S, {
            tab: e.tab,
            label: e.label,
            selected: _(e.tab, e, l),
            handleTransition: o,
            hasSubmenu: null != (r = e.hasSubmenu) && r,
            showNewBadge: e.tab === p.G2.ORBS && u
          })
        }, e.tab)
      }), (0, n.jsx)("div", {
        ref: h,
        children: (0, n.jsx)(O, {
          tabs: A,
          onTabSelect: o,
          selectedTab: l,
          selected: j,
          showOrbRentalNewBadge: u
        })
      })]
    }), y && (0, n.jsxs)("div", {
      className: v.vR,
      children: [E.map(e => {
        var t;
        return (0, n.jsx)(S, {
          tab: e.tab,
          label: e.label,
          selected: _(e.tab, e, l),
          handleTransition: o,
          hasSubmenu: null != (t = e.hasSubmenu) && t,
          showNewBadge: e.tab === p.G2.ORBS && u
        }, e.tab)
      }), 0 !== A.length ? (0, n.jsx)(O, {
        tabs: A,
        onTabSelect: o,
        selectedTab: l,
        selected: j,
        showOrbRentalNewBadge: u
      }) : null]
    })]
  })
}