/** Chunk was on web.js **/
/** chunk id: 259580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk279737 = require("./279737.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let f = {
    UP: Chunk279737.directionUp,
    RIGHT: Chunk279737.directionRight,
    DOWN: Chunk279737.directionDown,
    LEFT: Chunk279737.directionLeft
  },
  p = e => {
    var {
      direction: t = f.DOWN,
      width: n = 24,
      height: o = 24,
      color: a = "currentColor",
      className: l,
      foreground: d,
      expanded: p
    } = e, _ = u(e, ["direction", "width", "height", "color", "className", "foreground", "expanded"]);
    let m = t;
    true === p ? m = f.DOWN : false === p && (m = f.RIGHT);
    let h = {
      [f.UP]: i.u04,
      [f.DOWN]: i.CJ0,
      [f.LEFT]: i.V7D,
      [f.RIGHT]: i.Fbu
    } [m];
    return (0, r.jsx)(h, c(s({}, _), {
      className: l,
      size: "custom",
      width: n,
      height: o,
      color: null != a ? a : "currentColor",
      colorClass: d
    }))
  };
p.Directions = f;
let _ = p