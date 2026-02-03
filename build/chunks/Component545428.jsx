/** Chunk was on web.js **/
/** chunk id: 545428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  V: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk44998 = require("./44998.jsx"),
  Chunk597222 = require("./597222.jsx"),
  Chunk543202 = require("./543202.js");

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
  y = {
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

function b(e) {
  let {
    ref: t,
    className: n,
    disabled: i = false,
    childClassName: a,
    iconClassName: p,
    icon: h,
    children: g,
    onClick: b,
    onDoubleClick: O,
    isActive: v,
    onMouseEnter: A,
    onMouseLeave: I,
    onFocus: S,
    onBlur: T,
    pulse: C,
    sparkle: N,
    notification: w,
    "aria-label": R,
    "aria-expanded": P,
    "aria-haspopup": D,
    "aria-controls": L,
    noHover: x
  } = e, M = (0, l.pnh)(null != g, m(_({}, y), {
    keys: e => e ? "children" : "icon"
  })), j = e => {
    let {
      component: t
    } = e;
    return null != w ? (0, r.jsxs)("div", {
      className: f.IO,
      children: [(0, r.jsx)(c.Ay, {
        className: f.SA,
        mask: c.hW.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: E,
        height: E,
        children: t
      }), (0, r.jsx)("span", {
        className: f.T3
      })]
    }) : t
  };
  return (0, r.jsxs)(l.DUT, {
    innerRef: t,
    "aria-label": R,
    "aria-expanded": P,
    "aria-haspopup": D,
    "aria-controls": L,
    "aria-disabled": i,
    className: o()(n, f.x6, {
      [f.vu]: v,
      [f.CK]: x,
      [f.s0]: C,
      [f.r9]: i
    }),
    onClick: i ? true : b,
    onDoubleClick: i ? true : O,
    onMouseEnter: A,
    onMouseLeave: I,
    onFocus: S,
    onBlur: T,
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
        className: o()(f._o, a),
        children: j({
          component: g
        })
      }, i) : null != h ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: o()(f._o, a),
        children: j({
          component: (0, r.jsx)(h, {
            className: o()(f.Kk, p, {
              [f.d1]: C
            }),
            color: "currentColor"
          })
        })
      }, i) : true
    }), N && (0, r.jsxs)("div", {
      className: f.YX,
      children: [(0, r.jsx)(d.A, {
        className: f.XR
      }), (0, r.jsx)(u.A, {
        className: f.Hv
      })]
    })]
  })
}
let O = Chunk64700.memo(b)