/** Chunk was on web.js **/
/** chunk id: 991023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk486020 = require("./486020.js"),
  Chunk392054 = require("./392054.js"),
  Chunk104075 = require("./104075.js"),
  Chunk532406 = require("./532406.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    section: t,
    channel: {
      guild_id: n
    },
    isSelected: a,
    width: _,
    height: m,
    className: y,
    selectable: b = false,
    isSquircle: O,
    onFocus: v,
    onBlur: A,
    onMouseOver: I,
    onMouseLeave: S
  } = e, T = E(e, ["section", "channel", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]), [C, N] = i.useState(false), R = i.useCallback(() => {
    N(true), null == v || v()
  }, [v]), w = i.useCallback(() => {
    N(false), null == A || A()
  }, [A]), P = i.useCallback(() => {
    N(true), null == I || I()
  }, [I]), D = i.useCallback(() => {
    N(false), null == S || S()
  }, [S]), x = (0, o.bG)([c.Ay], () => {
    var e, r, i, a;
    return (null == (r = t.application) || null == (e = r.bot) ? true : e.id) != null ? c.Ay.getMember(n, null == (a = t.application) || null == (i = a.bot) ? true : i.id) : null
  }), L = i.useMemo(() => {
    var e;
    return t.type !== d.Hf.APPLICATION ? p : u.Ay.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: null == (e = t.application) ? true : e.bot,
      botIconFirst: true,
      guildMember: x,
      size: _
    })
  }, [t, _, x]);
  return (0, r.jsx)("div", g(h({}, T), {
    className: s()(f.iE, y, {
      [f.rb]: b,
      [f.wH]: b && a
    }),
    onFocus: R,
    onBlur: w,
    onMouseOver: P,
    onMouseLeave: D,
    children: (0, r.jsx)(l.Ay, {
      className: f.dK,
      mask: O || b && (a || C) ? l.hW.SQUIRCLE : l.hW.AVATAR_DEFAULT,
      width: _,
      height: m,
      children: (0, r.jsx)("img", {
        alt: "",
        className: f.Kk,
        style: {
          width: _,
          height: m
        },
        src: L
      })
    })
  }))
}