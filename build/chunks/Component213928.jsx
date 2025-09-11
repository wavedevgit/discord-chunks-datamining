/** Chunk was on web.js **/
/** chunk id: 213928, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626562 = require("./626562.js"),
  Chunk885110 = require("./885110.js"),
  Chunk51144 = require("./51144.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk385612 = require("./385612.js");

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

function p() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getStatus()),
    n = null != (e = (0, Chunk51144.u5)(exports)) ? module : "",
    f = exports === Chunk231338.Sk.INVISIBLE || exports === Chunk231338.Sk.OFFLINE,
    p = (0, Chunk626562.V)({
      location: "UserProfileAccountPopoutMenuItemStatusLabel"
    }) && f;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk385612.container,
    children: [require, require.length > 0 && p && (0, Chunk951288.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.L99HQk),
      children: e => (0, r.jsx)(a.Mgn, _({
        size: "xs",
        color: a.TVs.colors.STATUS_WARNING
      }, e))
    })]
  })
}