/** Chunk was on web.js **/
/** chunk id: 809090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk768581 = require("./768581.js"),
  Chunk895924 = require("./895924.js"),
  Chunk852802 = require("./852802.js"),
  Chunk970952 = require("./970952.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  var {
    section: t,
    channel: {
      guild_id: n
    },
    isSelected: a,
    width: p,
    height: m,
    className: b,
    selectable: y = false,
    isSquircle: O,
    onFocus: v,
    onBlur: I,
    onMouseOver: T,
    onMouseLeave: S
  } = e, A = E(e, ["section", "channel", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]);
  let [C, N] = i.useState(false), R = i.useCallback(() => {
    N(true), null == v || v()
  }, [v]), P = i.useCallback(() => {
    N(false), null == I || I()
  }, [I]), D = i.useCallback(() => {
    N(true), null == T || T()
  }, [T]), w = i.useCallback(() => {
    N(false), null == S || S()
  }, [S]), L = (0, s.e7)([c.ZP], () => {
    var e, r, i, a;
    return (null == (r = t.application) || null == (e = r.bot) ? true : e.id) != null ? c.ZP.getMember(n, null == (a = t.application) || null == (i = a.bot) ? true : i.id) : null
  }), x = i.useMemo(() => {
    var e;
    return t.type !== d.Qi.APPLICATION ? _ : u.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: null == (e = t.application) ? true : e.bot,
      botIconFirst: true,
      guildMember: L,
      size: p
    })
  }, [t, p, L]);
  return (0, r.jsx)("div", g(h({}, A), {
    className: o()(f.wrapper, b, {
      [f.selectable]: y,
      [f.selected]: y && a
    }),
    onFocus: R,
    onBlur: P,
    onMouseOver: D,
    onMouseLeave: w,
    children: (0, r.jsx)(l.ZP, {
      className: f.mask,
      mask: O || y && (a || C) ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: p,
      height: m,
      children: (0, r.jsx)("img", {
        alt: "",
        className: f.icon,
        style: {
          width: p,
          height: m
        },
        src: x
      })
    })
  }))
}