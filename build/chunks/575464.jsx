/** Chunk was on web.js **/
/** chunk id: 575464, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk700582 = require("./700582.js"),
  Chunk600164 = require("./600164.js"),
  Chunk158776 = require("./158776.js"),
  Chunk51144 = require("./51144.js"),
  Chunk900054 = require("./900054.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    user: t,
    row: n,
    hideDiscriminator: i,
    comparator: h,
    selected: g,
    checked: b,
    disabled: y = false,
    inlineUsername: O = true,
    onClick: v,
    onMouseEnter: I,
    "aria-setsize": T,
    "aria-posinset": S
  } = e, A = (0, s.e7)([f.Z], () => f.Z.getStatus(t.id)), N = () => null != h && h === t.tag ? _.ZP.getName(t) : null != h && "" !== h ? h : _.ZP.getName(t), C = () => {
    null != I && I(n)
  }, R = () => {
    null != v && v(t.id)
  }, P = (0, a.JA)(String(t.id));
  return <l.P3F{...E(m({
    id: "user-row-".concat(n),
    className: o()(p.friendWrapper, {
      [p.disabled]: y
    }),
    onClick: R,
    onMouseEnter: C
  }, P), {
    role: "option",
    "aria-selected": b,
    "aria-disabled": y,
    "aria-setsize": T,
    "aria-posinset": S,
    children: (0, r.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      className: o()(p.friend, {
        [p.friendSelected]: g,
        [p.twoRows]: !O
      }),
      children: [(0, r.jsx)(u.Z, {
        user: t,
        status: A,
        className: p.avatar
      }), (0, r.jsxs)(d.Z, {
        className: p.match,
        align: d.Z.Align.BASELINE,
        direction: O ? d.Z.Direction.HORIZONTAL : d.Z.Direction.VERTICAL,
        children: [(0, r.jsx)(l.Text, {
          tag: "strong",
          className: p.nickname,
          "aria-hidden": true,
          variant: "text-md/medium",
          children: N()
        }), (0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: (0, r.jsx)(c.Z, {
            user: t,
            hideDiscriminator: i,
            className: p.discordTag,
            usernameClass: p.__invalid_weightMedium,
            discriminatorClass: p.__invalid_weightMedium,
            forceUsername: true
          })
        })]
      }), (0, r.jsx)(l.XZJ, {
        displayOnly: true,
        size: 22,
        value: b,
        disabled: y,
        className: p.checkbox
      })]
    })
  })} />
}