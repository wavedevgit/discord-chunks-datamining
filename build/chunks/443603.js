/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S,
  j: () => E
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(642128),
  l = n(481060),
  c = n(686546),
  u = n(540059),
  d = n(855981),
  f = n(55543),
  _ = n(197042);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
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

function g(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var E = function(e) {
  return e[e.UPDATE = 0] = "UPDATE", e[e.NEW = 1] = "NEW", e
}({});
let v = 24,
  b = 20,
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

function O(e) {
  let {
    className: t,
    disabled: n = !1,
    innerClassName: i,
    childClassName: o,
    iconClassName: p,
    icon: g,
    children: E,
    onClick: O,
    isActive: S,
    onMouseEnter: I,
    onMouseLeave: T,
    onFocus: N,
    onBlur: A,
    pulse: C,
    sparkle: R,
    notification: P,
    "aria-label": D,
    "aria-expanded": w,
    "aria-haspopup": L,
    "aria-controls": x
  } = e, M = (0, u.Q3)("ChannelTextAreaButton"), k = (0, l.Yzy)(null != E, m(h({}, y), {
    keys: e => e ? "children" : "icon"
  })), j = e => {
    let {
      component: t
    } = e;
    return null != P ? (0, r.jsxs)("div", {
      className: _.buttonContent,
      children: [(0, r.jsx)(c.ZP, {
        className: _.iconMask,
        mask: c.QS.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: M ? b : v,
        height: M ? b : v,
        children: t
      }), (0, r.jsx)("span", {
        className: _.notificationDot
      })]
    }) : t
  };
  return (0, r.jsxs)(l.zxk, {
    look: l.zxk.Looks.BLANK,
    size: l.zxk.Sizes.NONE,
    "aria-label": D,
    "aria-expanded": w,
    "aria-haspopup": L,
    "aria-controls": x,
    disabled: n,
    className: a()(t, {
      [_.active]: S
    }),
    innerClassName: a()(_.button, i, {
      [_.pulseButton]: C
    }),
    onClick: O,
    onMouseEnter: I,
    onMouseLeave: T,
    onFocus: N,
    onBlur: A,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [k((e, t, n) => {
      let {
        key: i
      } = n;
      return t ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: a()(_.buttonWrapper, o),
        children: j({
          component: E
        })
      }, i) : null != g ? (0, r.jsx)(s.animated.div, {
        style: e,
        className: a()(_.buttonWrapper, o),
        children: j({
          component: (0, r.jsx)(g, {
            className: a()(_.icon, p, {
              [_.pulseIcon]: C
            }),
            color: "currentColor"
          })
        })
      }, i) : void 0
    }), R && (0, r.jsxs)("div", {
      className: _.sparkleContainer,
      children: [(0, r.jsx)(f.Z, {
        className: _.sparkleStar
      }), (0, r.jsx)(d.Z, {
        className: _.sparklePlus
      })]
    })]
  })
}
let S = i.memo(O)