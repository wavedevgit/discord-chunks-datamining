/** Chunk was on web.js **/
/** chunk id: 973522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ic: () => s,
  PQ: () => c,
  wH: () => l
}), require("./747238.js");
var Chunk847521 = require("./847521.js"),
  Chunk760751 = require("./760751.js"),
  Chunk723702 = require("./723702.js");

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
  let c = i.A.getGameByName(e.name),
    u = "exePath" in e ? e.exePath : e.exe;
  return {
    gameName: null != (t = e.name) ? t : true,
    gameId: null != (n = null != (a = e.id) ? a : null == c ? true : c.id) ? n : true,
    exe: null != u ? s(u) : true,
    distributor: null != (o = e.distributor) ? o : true,
    sku: null != (l = e.sku) ? l : true,
    gameMetadata: null != e ? (0, r.MT)(e) : true,
    rawExePath: u
  }
}

function c(e, t) {
  if (null == e || null == t) returnfalse;
  let n = o(e),
    r = (0, a.getPlatformName)();
  return t.some(e => e.os === r && (null == n ? true : n.endsWith(e.name)))
}