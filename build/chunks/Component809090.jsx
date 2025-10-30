/** Chunk was on web.js **/
/** chunk id: 809090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk686546 = require("./686546.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk895924 = require("./895924.js"),
  Chunk852802 = require("./852802.js"),
  Chunk970952 = require("./970952.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  var {
    section: t,
    isSelected: n,
    width: a,
    height: f,
    className: p,
    selectable: g = false,
    isSquircle: E,
    onFocus: b,
    onBlur: y,
    onMouseOver: O,
    onMouseLeave: v
  } = e, I = m(e, ["section", "isSelected", "width", "height", "className", "selectable", "isSquircle", "onFocus", "onBlur", "onMouseOver", "onMouseLeave"]);
  let [T, S] = i.useState(false), A = i.useCallback(() => {
    S(true), null == b || b()
  }, [b]), C = i.useCallback(() => {
    S(false), null == y || y()
  }, [y]), N = i.useCallback(() => {
    S(true), null == O || O()
  }, [O]), R = i.useCallback(() => {
    S(false), null == v || v()
  }, [v]), P = i.useMemo(() => {
    var e;
    return t.type !== c.Qi.APPLICATION ? d : l.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: null == (e = t.application) ? true : e.bot,
      botIconFirst: true,
      size: a
    })
  }, [t, a]);
  return (0, r.jsx)("div", h(_({}, I), {
    className: o()(u.wrapper, p, {
      [u.selectable]: g,
      [u.selected]: g && n
    }),
    onFocus: A,
    onBlur: C,
    onMouseOver: N,
    onMouseLeave: R,
    children: (0, r.jsx)(s.ZP, {
      className: u.mask,
      mask: E || g && (n || T) ? s.QS.SQUIRCLE : s.QS.AVATAR_DEFAULT,
      width: a,
      height: f,
      children: (0, r.jsx)("img", {
        alt: "",
        className: u.icon,
        style: {
          width: a,
          height: f
        },
        src: P
      })
    })
  }))
}