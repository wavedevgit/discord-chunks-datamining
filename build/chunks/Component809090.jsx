/** Chunk was on web.js **/
/** chunk id: 809090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk768581 = require("./768581.js"),
  Chunk895924 = require("./895924.js"),
  Chunk557545 = require("./557545.js"),
  Chunk970952 = require("./970952.js");

function _(e, t, n) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  var {
    section: t,
    channel: {
      guild_id: n
    },
    isSelected: o,
    width: _,
    height: h,
    className: b,
    selectable: y = false,
    isSquircle: O,
    onFocus: v,
    onBlur: S,
    onMouseOver: I,
    onMouseLeave: T
  } = e, C = E(e, ["section", "channel", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]);
  let [A, N] = i.useState(false), P = i.useCallback(() => {
    N(true), null == v || v()
  }, [v]), R = i.useCallback(() => {
    N(false), null == S || S()
  }, [S]), w = i.useCallback(() => {
    N(true), null == I || I()
  }, [I]), D = i.useCallback(() => {
    N(false), null == T || T()
  }, [T]), x = (0, s.e7)([c.ZP], () => {
    var e, r, i, o;
    return (null == (r = t.application) || null == (e = r.bot) ? true : e.id) != null ? c.ZP.getMember(n, null == (o = t.application) || null == (i = o.bot) ? true : i.id) : null
  }), L = i.useMemo(() => {
    var e;
    return t.type !== d.Qi.APPLICATION ? p : u.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: null == (e = t.application) ? true : e.bot,
      botIconFirst: true,
      guildMember: x,
      size: _
    })
  }, [t, _, x]);
  return (0, r.jsx)("div", g(m({}, C), {
    className: a()(f.wrapper, b, {
      [f.selectable]: y,
      [f.selected]: y && o
    }),
    onFocus: P,
    onBlur: R,
    onMouseOver: w,
    onMouseLeave: D,
    children: (0, r.jsx)(l.ZP, {
      className: f.mask,
      mask: O || y && (o || A) ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: _,
      height: h,
      children: (0, r.jsx)("img", {
        alt: "",
        className: f.icon,
        style: {
          width: _,
          height: h
        },
        src: L
      })
    })
  }))
}