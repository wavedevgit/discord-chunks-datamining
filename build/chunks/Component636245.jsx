/** Chunk was on web.js **/
/** chunk id: 636245, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk922482 = require("./922482.js"),
  Chunk979651 = require("./979651.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = e => {
  var {
    guildId: t,
    channelId: n,
    variant: c = "active",
    size: f = "sm",
    onAction: p
  } = e, _ = d(e, ["guildId", "channelId", "variant", "size", "onAction"]);
  let m = (0, i.e7)([s.Z], () => s.Z.isInChannel(n), [n]),
    h = () => {
      null == p || p(), o.AC(t, n)
    };
  return (0, r.jsx)(a.Button, u({
    variant: c,
    size: f,
    text: l.intl.string(l.t.ZYO5OK),
    disabled: m,
    onClick: h,
    fullWidth: true
  }, _))
}