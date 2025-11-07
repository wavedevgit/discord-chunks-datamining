/** Chunk was on web.js **/
/** chunk id: 443603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  j: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk855981 = require("./855981.jsx"),
  Chunk55543 = require("./55543.jsx"),
  Chunk807095 = require("./807095.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
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
    iconClassName: _,
    icon: h,
    children: g,
    onClick: y,
    onDoubleClick: O,
    isActive: v,
    onMouseEnter: I,
    onMouseLeave: S,
    onFocus: T,
    onBlur: A,
    pulse: C,
    sparkle: N,
    notification: R,
    "aria-label": P,
    "aria-expanded": w,
    "aria-haspopup": D,
    "aria-controls": x,
    noHover: L
  } = e, M = (0, l.Yzy)(null != g, m(p({}, b), {
    keys: e => e ? "children" : "icon"
  })), j = e => {
    let {
      component: t
    } = e;
    return null != R ? (0, r.jsxs)("div", {
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
    "aria-label": P,
    "aria-expanded": w,
    "aria-haspopup": D,
    "aria-controls": x,
    "aria-disabled": i,
    className: o()(n, f.button, {
      [f.active]: v,
      [f.noHover]: L,
      [f.pulseButton]: C,
      [f.disabled]: i
    }),
    onClick: i ? true : y,
    onDoubleClick: i ? true : O,
    onMouseEnter: I,
    onMouseLeave: S,
    onFocus: T,
    onBlur: A,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [M((e, t, n) => {
      let {
        key: i
      } = n;
      return t ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: o()(f.buttonWrapper, a),
        children: j({
          component: g
        })
      }, i) : null != h ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: o()(f.buttonWrapper, a),
        children: j({
          component: (0, r.jsx)(h, {
            className: o()(f.icon, _, {
              [f.pulseIcon]: C
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
let O = Chunk647438.memo(y)