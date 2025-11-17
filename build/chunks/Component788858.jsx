/** Chunk was on web.js **/
/** chunk id: 788858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447003 = require("./447003.js"),
  Chunk496675 = require("./496675.js"),
  Chunk231338 = require("./231338.js");

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

function _(e) {
  var {
    channel: t
  } = e, n = d(e, ["channel"]);
  let c = (0, i.e7)([s.Z], () => t.isPrivate() || s.Z.can(l.Pl.CONNECT, t));
  if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(a.Csw, u({}, n));
  let f = t.isGuildStageVoice(),
    _ = !c || (0, o.Z)(t);
  return f && _ ? (0, r.jsx)(a.pki, u({}, n)) : f ? (0, r.jsx)(a.ewx, u({}, n)) : t.isNSFW() ? (0, r.jsx)(a.BVY, u({}, n)) : _ ? (0, r.jsx)(a.gjC, u({}, n)) : (0, r.jsx)(a.gj8, u({}, n))
}