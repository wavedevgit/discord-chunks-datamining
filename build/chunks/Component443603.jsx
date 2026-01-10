/** Chunk was on web.js **/
/** chunk id: 443603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  j: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk855981 = require("./855981.jsx"),
  Chunk55543 = require("./55543.jsx"),
  Chunk118688 = require("./118688.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var g = function(e) {
  return e[e.UPDATE = 0] = "UPDATE", e[e.NEW = 1] = "NEW", e
}({});
let E = 20,
  b = {
    config: {
      friction: 26,
      tension: 700,
      mass: 1
    },
    initial: {
      scale: 1,
      opacity: 1
    },
    from: {
      scale: .6,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: .6,
      opacity: 0
    }
  };

function y(e) {
  let {
    ref: t,
    className: n,
    disabled: i = false,
    childClassName: a,
    iconClassName: p,
    icon: m,
    children: g,
    onClick: y,
    onDoubleClick: O,
    isActive: v,
    onMouseEnter: S,
    onMouseLeave: I,
    onFocus: T,
    onBlur: C,
    pulse: A,
    sparkle: N,
    notification: P,
    "aria-label": R,
    "aria-expanded": w,
    "aria-haspopup": D,
    "aria-controls": x,
    noHover: L
  } = e, j = (0, l.Yzy)(null != g, h(_({}, b), {
    keys: e => e ? "children" : "icon"
  })), M = e => {
    let {
      component: t
    } = e;
    return null != P ? (0, r.jsxs)("div", {
      className: f.buttonContent,
      children: [(0, r.jsx)(c.ZP, {
        className: f.iconMask,
        mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: E,
        height: E,
        children: t
      }), (0, r.jsx)("span", {
        className: f.notificationDot
      })]
    }) : t
  };
  return (0, r.jsxs)(l.P3F, {
    innerRef: t,
    "aria-label": R,
    "aria-expanded": w,
    "aria-haspopup": D,
    "aria-controls": x,
    "aria-disabled": i,
    className: o()(n, f.button, {
      [f.active]: v,
      [f.noHover]: L,
      [f.pulseButton]: A,
      [f.disabled]: i
    }),
    onClick: i ? true : y,
    onDoubleClick: i ? true : O,
    onMouseEnter: S,
    onMouseLeave: I,
    onFocus: T,
    onBlur: C,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [j((e, t, n) => {
      let {
        key: i
      } = n;
      return t ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: o()(f.buttonWrapper, a),
        children: M({
          component: g
        })
      }, i) : null != m ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: o()(f.buttonWrapper, a),
        children: M({
          component: (0, r.jsx)(m, {
            className: o()(f.icon, p, {
              [f.pulseIcon]: A
            }),
            color: "currentColor"
          })
        })
      }, i) : true
    }), N && (0, r.jsxs)("div", {
      className: f.sparkleContainer,
      children: [(0, r.jsx)(d.Z, {
        className: f.sparkleStar
      }), (0, r.jsx)(u.Z, {
        className: f.sparklePlus
      })]
    })]
  })
}
let O = Chunk473749.memo(y)