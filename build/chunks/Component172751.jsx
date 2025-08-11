/** Chunk was on web.js **/
/** chunk id: 172751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y,
  eI: () => E,
  m0: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857395 = require("./857395.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk594174 = require("./594174.js"),
  Chunk731722 = require("./731722.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk953790 = require("./953790.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = Chunk73800.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: i,
      size: o = _.Gg.SIZE_16
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
      src: t,
      alt: p.intl.formatToPlainString(p.t.uPLDZG, {
        tag: n
      }),
      className: a()(h.badge, i),
      width: o,
      height: o
    })
  }),
  b = Chunk73800.memo(function(e) {
    let {
      guildId: t,
      guildTag: n,
      guildBadge: i,
      className: o,
      textClassName: s,
      badgeClassName: c,
      onClick: u,
      onMouseEnter: d,
      textVariant: p = "text-xs/semibold",
      textColor: m = "text-default",
      badgeSize: g = _.Gg.SIZE_12,
      inline: b = true
    } = e;
    return (0, r.jsx)(l.P3F, {
      tag: "span",
      tabIndex: null == u ? false : true,
      onClick: u,
      onMouseEnter: d,
      className: a()(h.chipletContainerInner, b && h.chipletContainerInline, null != u && h.clickable, o),
      children: (0, r.jsxs)(l.Text, {
        variant: p,
        lineClamp: 1,
        color: m,
        tag: "span",
        className: a()(h.text, s),
        children: [null != i && "string" == typeof i ? (0, r.jsx)(E, {
          src: (0, f.Ic)(t, i, g),
          tag: null == n ? true : n.toString(),
          size: g,
          className: c
        }) : i, (0, r.jsx)("span", {
          className: h.tagText,
          children: n
        })]
      })
    })
  }),
  y = Chunk73800.memo(function(e) {
    var t;
    let {
      primaryGuild: n,
      userId: o,
      contextGuildId: _,
      className: p,
      containerClassName: m,
      textVariant: E,
      textColor: y,
      badgeSize: O,
      disableGuildProfile: v = false,
      inline: I = true,
      onShowProfile: T,
      onClose: S
    } = e, A = i.useRef(null), N = (0, s.e7)([d.default], () => d.default.getUser(o), [o]), C = (0, s.e7)([u.Z], () => u.Z.theme), R = null != (t = null == N ? true : N.primaryGuild) ? t : n, {
      tag: P,
      badge: w,
      guildId: D
    } = (0, f.Pb)(R);
    return (0, f.yF)(o, _) && null != D ? v ? (0, r.jsx)(b, {
      guildId: D,
      guildTag: P,
      guildBadge: w,
      className: a()(h.noTooltip, p),
      textVariant: E,
      textColor: y,
      badgeSize: O,
      inline: I
    }) : (0, r.jsx)(l.ze6, {
      theme: C,
      children: (0, r.jsx)(c.Z, {
        guildId: D,
        onRequestOpen: T,
        onClose: S,
        targetElementRef: A,
        children: e => (0, r.jsx)("span", {
          className: m,
          ref: A,
          children: (0, r.jsx)(b, g({
            guildId: D,
            guildTag: P,
            guildBadge: w,
            className: p,
            textVariant: E,
            textColor: y,
            badgeSize: O,
            inline: I
          }, e))
        })
      })
    }) : null
  })