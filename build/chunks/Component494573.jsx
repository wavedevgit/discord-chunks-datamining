/** Chunk was on 59275 **/
/** chunk id: 494573, original params: e,t,n (module,exports,require) **/
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

function C(e, t) {
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

function A(e) {
  let {
    tab: t,
    label: n,
    selected: l,
    handleTransition: s,
    hasSubmenu: i,
    showNewBadge: c
  } = e;
  return i ? (0, r.jsx)(x, {
    tab: t,
    label: n,
    selected: l,
    handleTransition: s
  }) : (0, r.jsxs)(g.A.Title, {
    onClick: () => s(t),
    wrapperClassName: E.Vn,
    className: a()(E.Mf, {
      [E.wH]: l
    }),
    children: [n, c && (0, r.jsx)(o.LpS, {
      text: h.intl.string(h.t.y2b7CA),
      className: _.Ad
    })]
  })
}

function x(e) {
  let {
    tab: t,
    label: n,
    selected: s,
    handleTransition: i
  } = e, c = l.useRef(null), f = l.useRef(false), {
    isHovered: b,
    setIsHovered: h,
    onMouseEnter: _,
    onMouseLeave: A,
    cancelTimers: x
  } = (0, p.A)(100, 100), S = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), x(), h(true), f.current = d.A.keyboardModeEnabled)
  }, O = l.useCallback(() => {
    f.current = d.A.keyboardModeEnabled, _()
  }, [_]);
  return (0, r.jsx)("div", {
    className: E.iV,
    onMouseEnter: O,
    onMouseLeave: A,
    children: (0, r.jsx)(o.YNO, {
      targetElementRef: c,
      shouldShow: b,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        x(), h(true), f.current = d.A.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        f.current && !d.A.keyboardModeEnabled && (0, u.uS)(), h(false), null == (e = c.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: _,
          onMouseLeave: A,
          children: (0, r.jsx)(m.A, {
            handleTransition: i,
            onClose: t
          })
        })
      },
      children: (e, l) => {
        let {
          isShown: u
        } = l, d = u ? o.tN5 : o.abt;
        return (0, r.jsx)(g.A.Title, C(v({}, e), {
          ref: c,
          onClick: () => i(t),
          onKeyDown: S,
          wrapperClassName: E.Vn,
          className: a()(E.Mf, {
            [E.wH]: s
          }),
          children: (0, r.jsxs)("span", {
            className: E.hP,
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

function S(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: s,
    selected: i,
    showOrbRentalNewBadge: c
  } = e, m = l.useRef(null), b = l.useRef(false), {
    isHovered: _,
    setIsHovered: A,
    onMouseEnter: x,
    onMouseLeave: S,
    cancelTimers: O
  } = (0, p.A)(100, 100), y = e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), O(), A(true), b.current = d.A.keyboardModeEnabled)
  }, j = l.useCallback(() => {
    b.current = d.A.keyboardModeEnabled, x()
  }, [x]);
  return (0, r.jsx)("div", {
    className: E.iV,
    onMouseEnter: j,
    onMouseLeave: S,
    children: (0, r.jsx)(o.YNO, {
      targetElementRef: m,
      shouldShow: _,
      position: "bottom",
      align: "left",
      onRequestOpen: () => {
        O(), A(true), b.current = d.A.keyboardModeEnabled
      },
      onRequestClose: () => {
        var e;
        b.current && !d.A.keyboardModeEnabled && (0, u.uS)(), A(false), null == (e = m.current) || e.focus()
      },
      renderPopout: e => {
        let {
          closePopout: l
        } = e;
        return (0, r.jsx)("div", {
          onMouseEnter: x,
          onMouseLeave: S,
          children: (0, r.jsx)(f.A, {
            selectedTab: s,
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
        } = t, l = n ? o.tN5 : o.abt;
        return (0, r.jsx)(g.A.Title, C(v({}, e), {
          ref: m,
          onKeyDown: y,
          wrapperClassName: E.Vn,
          className: a()(E.Mf, E.OS, {
            [E.wH]: i
          }),
          "aria-label": h.intl.string(h.t["UKOtz+"]),
          children: (0, r.jsxs)("span", {
            className: E.hP,
            children: [h.intl.string(h.t["UKOtz+"]), (0, r.jsx)(l, {
              size: "xs"
            })]
          })
        }))
      }
    })
  })
}

function O(e, t, n) {
  var r;
  return e === n || null != (r = t.hasSubmenu) && r && (0, b.dF)(n) && e === b.G2.CATALOG
}

function y(e) {
  let {
    className: t,
    selectedTab: n,
    tabs: s,
    onTabSelect: o,
    showOrbRentalNewBadge: u
  } = e, [d, g] = l.useState(0), p = l.useRef(d), {
    lastVisibleIndex: m,
    onItemLayout: f,
    overflowItemsRef: h
  } = (0, i.Wv)({
    items: s,
    itemGapPx: 24,
    maxLines: 1,
    containerWidth: d
  }), _ = l.useMemo(() => s.slice(0, m + 1), [m, s]), v = l.useMemo(() => s.slice(m + 1), [m, s]), C = l.useRef(null), x = l.useCallback(e => {
    let t = e.contentRect.width;
    null != t && p.current !== t && (g(t), p.current = t)
  }, []);
  (0, c.g)(C, x);
  let y = 0 !== d,
    j = v.some(e => O(e.tab, e, n));
  return (0, r.jsxs)("div", {
    className: a()(E.kL, t),
    ref: C,
    children: [(0, r.jsxs)("div", {
      className: E.Kk,
      children: [s.map((e, t) => {
        var l;
        return (0, r.jsx)(i.Ae, {
          index: t,
          onItemLayout: f,
          children: (0, r.jsx)(A, {
            tab: e.tab,
            label: e.label,
            selected: O(e.tab, e, n),
            handleTransition: o,
            hasSubmenu: null != (l = e.hasSubmenu) && l,
            showNewBadge: e.tab === b.G2.ORBS && u
          })
        }, e.tab)
      }), (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)(S, {
          tabs: v,
          onTabSelect: o,
          selectedTab: n,
          selected: j,
          showOrbRentalNewBadge: u
        })
      })]
    }), y && (0, r.jsxs)("div", {
      className: E.vR,
      children: [_.map(e => {
        var t;
        return (0, r.jsx)(A, {
          tab: e.tab,
          label: e.label,
          selected: O(e.tab, e, n),
          handleTransition: o,
          hasSubmenu: null != (t = e.hasSubmenu) && t,
          showNewBadge: e.tab === b.G2.ORBS && u
        }, e.tab)
      }), 0 !== v.length ? (0, r.jsx)(S, {
        tabs: v,
        onTabSelect: o,
        selectedTab: n,
        selected: j,
        showOrbRentalNewBadge: u
      }) : null]
    })]
  })
}