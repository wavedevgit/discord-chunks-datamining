/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Q: () => T,
  Z: () => N
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(642128),
  l = n(399606),
  c = n(481060),
  u = n(434650),
  d = n(607070),
  f = n(413335),
  _ = n(50101),
  p = n(388032),
  h = n(730621),
  m = n(782763),
  g = n(567949),
  E = n(552781),
  v = n(952567),
  b = n(807159);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    description: t,
    heading: n,
    imgSrc: o,
    label: l,
    isNewPerk: d,
    animatedCard: _,
    isEnabled: h
  } = e, [g, E] = i.useState(!1), [v, b] = i.useState(!1), y = _ && v, I = {
    tension: 400,
    friction: 30
  }, T = (0, c.q_F)({
    transform: y ? "translateX(-50%) translateY(0px) scale(2.25)" : "translateX(-50%) translateY(32px) scale(1)",
    borderRadius: y ? "7px" : "0px",
    opacity: y ? .3 : 1,
    transformOrigin: "center 0%",
    config: I
  }), N = (0, c.q_F)({
    y: y ? -25 : 0,
    config: I
  }), A = (0, c.q_F)({
    opacity: +!!y,
    transform: y ? "translateY(0)" : "translateY(20px)",
    config: I
  }), C = (0, c.q_F)({
    opacity: +!!y,
    config: I
  }), R = i.useCallback(e => {
    e && _ && E(!0)
  }, [_]), P = (0, u.O)(R);
  return (0, r.jsxs)("div", {
    className: a()(m.topPerksCard, {
      [m.animatedTopPerksCard]: _,
      [m.animate]: g
    }),
    onMouseEnter: () => b(!0),
    onMouseLeave: () => b(!1),
    children: [(0, r.jsx)("div", {
      className: m.intObserver,
      ref: P
    }), (0, r.jsxs)("div", {
      className: m.topPerksCardImageWrapper,
      children: [(0, r.jsx)(s.animated.img, {
        className: m.topPerksCardImage,
        src: o,
        alt: "",
        style: T
      }), (0, r.jsx)(s.animated.div, {
        className: m.imageGradientOverlay,
        style: C
      })]
    }), y && (0, r.jsx)("div", {
      className: m.borderGlowOverlay
    }), (0, r.jsxs)(s.animated.div, {
      style: S(O({}, N), {
        transform: N.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: m.contentContainer,
      children: [(0, r.jsx)(c.X6q, {
        className: m.topPerksCardHeading,
        variant: "heading-lg/extrabold",
        children: n
      }), (0, r.jsx)(c.Text, {
        className: m.topPerksCardDescription,
        variant: "text-sm/normal",
        children: t
      }), (0, r.jsxs)("div", {
        className: m.labelsContainer,
        children: [null != l && (0, r.jsxs)("div", {
          className: m.topPerksCardLabelContainer,
          children: [(0, r.jsx)(f.Z, {}), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            children: l
          })]
        }), h && (0, r.jsxs)("div", {
          className: m.topPerksCardLabelContainer,
          children: [(0, r.jsx)(c.owK, {
            size: "custom",
            height: 14,
            width: 14,
            color: "currentColor"
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "currentColor",
            children: p.NW.string(p.t.pCMkDQ)
          })]
        })]
      }), _ && (0, r.jsxs)(s.animated.div, {
        style: A,
        className: m.buttonsContainer,
        children: [(0, r.jsx)(c.zxk, {
          color: c.zxk.Colors.BRAND,
          className: m.button,
          children: p.NW.string(p.t["oPAx7+"])
        }), (0, r.jsx)(c.zxk, {
          color: c.zxk.Colors.PRIMARY,
          className: m.button,
          children: p.NW.string(p.t.GoCQxc)
        })]
      })]
    }), d && (0, r.jsx)(c.IGR, {
      className: m.topPerksCardNew,
      text: p.NW.string(p.t.y2b7CA)
    }), g && (0, r.jsx)("div", {
      className: m.shineLine
    })]
  })
}
let N = function(e) {
  let {
    guild: t
  } = e, n = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), i = (0, _.Ek)(t, "GuildBoostingMarketingTopPerksCards");
  return (0, r.jsxs)("div", {
    className: m.wrapper,
    children: [(0, r.jsx)(c.X6q, {
      className: m.heading,
      variant: "heading-xxl/extrabold",
      children: p.NW.string(p.t.aGdB3N)
    }), (0, r.jsxs)("div", {
      className: m.topPerksCards,
      children: [(0, r.jsx)(T, {
        description: p.NW.string(p.t.HTvLGh),
        heading: p.NW.string(p.t.IpRQw8),
        imgSrc: v,
        label: i ? p.NW.string(h.Z.na6fmJ) : void 0
      }), (0, r.jsx)(T, {
        description: p.NW.string(p.t.wOYbTk),
        heading: p.NW.string(p.t.G6jZo6),
        imgSrc: n ? E : g,
        label: i ? p.NW.string(h.Z.dyNT9v) : void 0
      }), (0, r.jsx)(T, {
        description: p.NW.string(p.t.yCjoUF),
        heading: p.NW.string(p.t["/bX4Ji"]),
        imgSrc: b,
        label: i ? p.NW.string(h.Z["8AEGEx"]) : void 0
      })]
    })]
  })
}