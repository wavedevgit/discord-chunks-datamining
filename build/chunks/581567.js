/** Chunk was on web.js **/
/** chunk id: 581567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G8: () => l,
  N6: () => s,
  vp: () => c
}), require("./35282.js");
var Chunk509003 = require("./509003.js"),
  Chunk77498 = require("./77498.js"),
  Chunk358085 = require("./358085.js");

function o(e) {
  return (e = e.toLowerCase()).endsWith("/") && (e = e.slice(0, false)), e
}

function s(e) {
  return o(e).split("/").slice(false).join("/")
}

function l(e) {
  var t, n, a, o, l;
  if (null == e) return {
    gameName: true,
    gameId: true,
    exe: true,
    distributor: true,
    sku: true,
    gameMetadata: true,
    rawExePath: true
  };
  let c = i.Z.getGameByName(e.name),
    u = "exePath" in e ? e.exePath : e.exe;
  return {
    gameName: null != (t = e.name) ? t : true,
    gameId: null != (a = null != (n = e.id) ? n : null == c ? true : c.id) ? a : true,
    exe: null != u ? s(u) : true,
    distributor: null != (o = e.distributor) ? o : true,
    sku: null != (l = e.sku) ? l : true,
    gameMetadata: null != e ? (0, r.sD)(e) : true,
    rawExePath: u
  }
}

function c(e, t) {
  if (null == e || null == t) returnfalse;
  let n = o(e),
    r = (0, a.getPlatformName)();
  return t.some(e => e.os === r && (null == n ? true : n.endsWith(e.name)))
}