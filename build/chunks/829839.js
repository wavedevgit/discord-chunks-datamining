/** Chunk was on web.js **/
/** chunk id: 829839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AQ: () => g,
  DY: () => p,
  yQ: () => h
}), require("./539854.js"), require("./290780.js");
var r, i, o, a, s, l, Chunk553813 = require("./553813.js"),
  u = require.n(Chunk553813),
  Chunk65154 = require("./65154.js");
let f = [{
  name: "H265",
  encode: "undefined" == typeof window || (null == (i = window) || null == (r = i.DiscordNative) ? true : r.process.platform) !== "darwin" || (null == (a = window) || null == (o = a.DiscordNative) ? true : o.os.arch) === "arm64" && u().satisfies(null == (l = window) || null == (s = l.DiscordNative) ? true : s.os.release, Chunk65154.n4),
  decode: true
}, {
  name: "H264",
  encode: true,
  decode: true
}, {
  name: "VP8",
  encode: true,
  decode: true
}, {
  name: "VP9",
  encode: true,
  decode: true
}];

function _(e, t) {
  let n = t.concat(f),
    r = [];
  return n.forEach(t => {
    let n = e.find(e => t.name === e.codec);
    null != n && r.push({
      name: n.codec,
      encode: n.encode && t.encode,
      decode: n.decode && t.decode
    })
  }), r
}

function p(e) {
  let t = [];
  return e.has(d.V8.SIGNAL_AV1_DECODE) ? t.unshift({
    name: "AV1",
    encode: false,
    decode: true
  }) : e.has(d.V8.SIGNAL_AV1) && t.unshift({
    name: "AV1",
    encode: true,
    decode: true
  }), t
}

function h(e, t) {
  return "string" == typeof e ? _(JSON.parse(e).map(e => ({
    codec: m(e.codec),
    encode: e.encode,
    decode: e.decode
  })), t) : _(e.map(e => ({
    codec: m(e),
    encode: true,
    decode: true
  })), t)
}

function m(e) {
  return "AV1X" === e ? "AV1" : e
}

function g(e) {
  return "AV1" === e ? "AV1X" : e
}