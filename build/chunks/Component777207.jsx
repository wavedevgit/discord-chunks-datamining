/** Chunk was on web.js **/
/** chunk id: 777207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => b
}), require("./467055.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk696689 = require("./696689.js"),
  l = require.n(Chunk696689),
  Chunk692547 = require("./692547.js"),
  Chunk883576 = require("./883576.js"),
  Chunk892237 = require("./892237.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
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
let E = Object.fromEntries(Object.keys(Chunk692547.Z.colors).map(e => [l()(e), e])),
  b = Chunk473749.forwardRef(function(e, t) {
    let n;
    var i, {
        variant: a,
        tag: s = "div",
        selectable: l = false,
        className: f,
        lineClamp: _,
        color: g,
        tabularNumbers: b = false,
        scaleFontToUserSetting: y = false
      } = e,
      O = h(e, ["variant", "tag", "selectable", "className", "lineClamp", "color", "tabularNumbers", "scaleFontToUserSetting"]);
    let v = s,
      S = "",
      I = {};
    if (null != _ && (1 === _ ? S = u.lineClamp1 : (S = u.lineClamp2Plus, I = {
        lineClamp: _,
        WebkitLineClamp: _
      })), true !== g) switch (g) {
      case "currentColor":
        n = "currentColor";
        break;
      case "none":
        n = true;
        break;
      case "always-white":
        n = "white";
        break;
      default:
        n = null == (i = c.Z.colors[E[g]]) ? true : i.css
    }
    let T = p({
      color: n
    }, I, O.style);
    return (0, r.jsx)(v, m(p({
      ref: t,
      className: o()({
        [u.defaultColor]: true === g,
        [u.selectable]: l,
        [u.tabularNumbers]: b,
        [d.fontScaling]: y
      }, S, d[a], f)
    }, O), {
      style: Object.values(T).filter(Boolean).length > 0 ? T : true,
      "data-text-variant": a
    }))
  })