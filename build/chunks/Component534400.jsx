/** Chunk was on web.js **/
/** chunk id: 534400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  Z9: () => y,
  o9: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk517905 = require("./517905.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk287809 = require("./287809.js"),
  Chunk685073 = require("./685073.js"),
  Chunk743981 = require("./743981.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk478858 = require("./478858.js");

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
let y = Chunk64700.memo(function(e) {
    let {
      src: t,
      className: n,
      size: i = p.Sl.SIZE_16
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
      src: t,
      alt: "",
      className: o()(m.qS, n),
      width: i,
      height: i
    })
  }),
  b = Chunk64700.memo(function(e) {
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
      badgeSize: b = p.Sl.SIZE_14,
      inline: O = true
    } = e;
    return (0, r.jsx)(l.DUT, {
      "aria-label": _.intl.formatToPlainString(h.default["fw2p/x"], {
        tag: n
      }),
      tag: "span",
      tabIndex: null == u ? false : true,
      onClick: u,
      onMouseEnter: d,
      className: o()(m.nz, O && m.os, null != u && m.vk, a),
      children: (0, r.jsxs)(l.Text, {
        variant: g,
        lineClamp: 1,
        color: E,
        tag: "span",
        className: o()(m.Qq, s),
        children: [null != i && "string" == typeof i ? (0, r.jsx)(y, {
          src: (0, f.gC)(t, i, b),
          size: b,
          className: c
        }) : i, (0, r.jsx)("span", {
          className: m.em,
          children: n
        })]
      })
    })
  }),
  O = Chunk64700.memo(function(e) {
    let {
      primaryGuild: t,
      userId: n,
      contextGuildId: a,
      className: p,
      containerClassName: _,
      textVariant: h,
      textColor: g,
      badgeSize: y,
      disableGuildProfile: O = false,
      inline: v = true,
      onShowProfile: A,
      onClose: I
    } = e, S = i.useRef(null), T = (0, s.bG)([d.default], () => d.default.getUser(n), [n]), C = (0, s.bG)([u.A], () => u.A.theme), N = true !== t ? t : null == T ? true : T.primaryGuild, {
      tag: w,
      badge: R,
      guildId: P
    } = (0, f.Zo)(N);
    return (0, f.Wb)(n, a, N) && null != P ? O ? (0, r.jsx)(b, {
      guildId: P,
      guildTag: w,
      guildBadge: R,
      className: o()(m.Zy, p),
      textVariant: h,
      textColor: g,
      badgeSize: y,
      inline: v
    }) : (0, r.jsx)(l.wXn, {
      theme: C,
      children: (0, r.jsx)(c.A, {
        guildId: P,
        onRequestOpen: A,
        onClose: I,
        targetElementRef: S,
        children: e => (0, r.jsx)("span", {
          className: _,
          ref: S,
          children: (0, r.jsx)(b, E({
            guildId: P,
            guildTag: w,
            guildBadge: R,
            className: p,
            textVariant: h,
            textColor: g,
            badgeSize: y,
            inline: v
          }, e))
        })
      })
    }) : null
  })