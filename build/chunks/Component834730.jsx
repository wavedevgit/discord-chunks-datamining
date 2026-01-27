/** Chunk was on web.js **/
/** chunk id: 834730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => y
}), require("./446912.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk322925 = require("./322925.js"),
  l = require.n(Chunk322925),
  Chunk827734 = require("./827734.js"),
  Chunk845188 = require("./845188.js"),
  Chunk60639 = require("./60639.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = Object.fromEntries(Object.keys(Chunk827734.A.colors).map(e => [l()(e), e])),
  y = Chunk64700.forwardRef(function(e, t) {
    let n, [i, ...a] = [e, t],
      {
        variant: s,
        tag: l = "div",
        selectable: f = false,
        className: _,
        lineClamp: g,
        color: y,
        tabularNumbers: b = false,
        scaleFontToUserSetting: O = false
      } = i,
      v = m(i, ["variant", "tag", "selectable", "className", "lineClamp", "color", "tabularNumbers", "scaleFontToUserSetting"]),
      [A] = a,
      I = l,
      S = "",
      T = {};
    if (null != g && (1 === g ? S = u.DN : (S = u.ED, T = {
        lineClamp: g,
        WebkitLineClamp: g
      })), true !== y) switch (y) {
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
        var C;
        n = null == (C = c.A.colors[E[y]]) ? true : C.css
    }
    let N = p({
      color: n
    }, T, v.style);
    return (0, r.jsx)(I, h(p({
      ref: A,
      className: o()({
        [u.fT]: true === y,
        [u.rb]: f,
        [u.w9]: b,
        [d.fontScaling]: O
      }, S, d[s], _)
    }, v), {
      style: Object.values(N).filter(Boolean).length > 0 ? N : true,
      "data-text-variant": s
    }))
  })