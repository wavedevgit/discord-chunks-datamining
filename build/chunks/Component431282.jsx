/** Chunk was on 22979 **/
/** chunk id: 431282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V4: () => p,
  XE: () => h,
  gp: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787224 = require("./787224.js");

function d(e) {
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

function u(e, t) {
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

function m(e) {
  return (0, a.jsx)("div", {
    className: c.submenuPaddingContainer,
    children: (0, a.jsx)(l.v2r, d({
      variant: "fixed",
      hideScroller: true,
      onSelect: true
    }, e))
  })
}

function p(e) {
  let {
    action: t,
    onClick: n,
    icon: m,
    label: p,
    sublabel: h,
    trailing: f,
    renderSubmenu: b,
    ref: x
  } = e, g = null != n, v = (0, s.Q1)({
    action: t,
    onClick: n
  }), [j, y] = r.useState(false), C = r.useRef(null), _ = null != x ? x : C, S = null != b, E = S && g, T = {
    offset: {
      top: false,
      left: false,
      right: false,
      bottom: false
    }
  }, O = r.useCallback(() => {
    y(true)
  }, []), N = r.useCallback(() => {
    y(false)
  }, []), P = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: c.menuItemIcon,
      children: (0, a.jsx)(m, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, a.jsxs)("div", {
      className: c.menuItemLabel,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.Text, {
          color: "currentColor",
          variant: "text-sm/medium",
          className: c.menuItemLabelText,
          children: p
        }), (0, a.jsx)(l.Text, {
          color: "currentColor",
          variant: "text-xs/medium",
          children: h
        })]
      }), f]
    })]
  }), w = e => {
    let t;
    return t = E ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.P3F, {
        className: c.menuItemContent,
        onClick: v,
        focusProps: {
          offset: u(d({}, T.offset), {
            right: 0
          })
        },
        children: P()
      }), (0, a.jsx)(l.P3F, u(d({
        className: c.submenuIconWrapper,
        "aria-label": o.intl.string(o.t.PdRCRg)
      }, e), {
        onClick: O,
        focusProps: T,
        children: (0, a.jsx)(i.ChevronSmallRightIcon, {
          size: "xs",
          color: "currentColor"
        })
      }))]
    }) : S ? (0, a.jsxs)(l.P3F, u(d({
      className: c.menuItemContent
    }, e), {
      onClick: O,
      focusProps: T,
      children: [P(), (0, a.jsx)("div", {
        className: c.submenuIconWrapper,
        children: (0, a.jsx)(i.ChevronSmallRightIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })) : (0, a.jsx)(l.P3F, {
      className: c.menuItemContent,
      onClick: v,
      focusProps: T,
      children: P()
    }), (0, a.jsx)("div", {
      ref: _,
      className: c.menuItemInner,
      children: t
    })
  };
  return S ? (0, a.jsx)("li", {
    className: c.menuItem,
    onMouseEnter: O,
    onMouseLeave: N,
    children: (0, a.jsx)(l.yRy, {
      targetElementRef: _,
      spacing: 0,
      renderPopout: b,
      shouldShow: j,
      onRequestClose: N,
      children: w
    })
  }) : (0, a.jsx)("li", {
    className: c.menuItem,
    children: w()
  })
}

function h(e) {
  let {
    children: t,
    "aria-label": n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": n,
    children: t
  })
}