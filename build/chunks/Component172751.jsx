/** Chunk was on web.js **/
/** chunk id: 172751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  eI: () => b,
  m0: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857395 = require("./857395.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk541673 = require("./541673.js"),
  Chunk655262 = require("./655262.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let b = Chunk473749.memo(function(e) {
    let {
      src: t,
      className: n,
      size: i = _.Gg.SIZE_16
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
      src: t,
      alt: "",
      className: o()(m.badge, n),
      width: i,
      height: i
    })
  }),
  y = Chunk473749.memo(function(e) {
    let {
      guildId: t,
      guildTag: n,
      guildBadge: i,
      className: a,
      textClassName: s,
      badgeClassName: c,
      onClick: u,
      onMouseEnter: d,
      textVariant: g = "text-xs/semibold",
      textColor: E = "text-default",
      badgeSize: y = _.Gg.SIZE_14,
      inline: O = true
    } = e;
    return (0, r.jsx)(l.P3F, {
      "aria-label": p.intl.formatToPlainString(h.default["fw2p/x"], {
        tag: n
      }),
      tag: "span",
      tabIndex: null == u ? false : true,
      onClick: u,
      onMouseEnter: d,
      className: o()(m.chipletContainerInner, O && m.chipletContainerInline, null != u && m.clickable, a),
      children: (0, r.jsxs)(l.Text, {
        variant: g,
        lineClamp: 1,
        color: E,
        tag: "span",
        className: o()(m.text, s),
        children: [null != i && "string" == typeof i ? (0, r.jsx)(b, {
          src: (0, f.Ic)(t, i, y),
          size: y,
          className: c
        }) : i, (0, r.jsx)("span", {
          className: m.tagText,
          children: n
        })]
      })
    })
  }),
  O = Chunk473749.memo(function(e) {
    var t;
    let {
      primaryGuild: n,
      userId: a,
      contextGuildId: _,
      className: p,
      containerClassName: h,
      textVariant: g,
      textColor: b,
      badgeSize: O,
      disableGuildProfile: v = false,
      inline: I = true,
      onShowProfile: T,
      onClose: S
    } = e, A = i.useRef(null), C = (0, s.e7)([d.default], () => d.default.getUser(a), [a]), N = (0, s.e7)([u.Z], () => u.Z.theme), R = null != (t = null == C ? true : C.primaryGuild) ? t : n, {
      tag: P,
      badge: D,
      guildId: w
    } = (0, f.Pb)(R);
    return (0, f.yF)(a, _) && null != w ? v ? (0, r.jsx)(y, {
      guildId: w,
      guildTag: P,
      guildBadge: D,
      className: o()(m.noTooltip, p),
      textVariant: g,
      textColor: b,
      badgeSize: O,
      inline: I
    }) : (0, r.jsx)(l.ze6, {
      theme: N,
      children: (0, r.jsx)(c.Z, {
        guildId: w,
        onRequestOpen: T,
        onClose: S,
        targetElementRef: A,
        children: e => (0, r.jsx)("span", {
          className: h,
          ref: A,
          children: (0, r.jsx)(y, E({
            guildId: w,
            guildTag: P,
            guildBadge: D,
            className: p,
            textVariant: g,
            textColor: b,
            badgeSize: O,
            inline: I
          }, e))
        })
      })
    }) : null
  })