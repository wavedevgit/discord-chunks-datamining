/** Chunk was on web.js **/
/** chunk id: 829839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AQ: () => d,
  DY: () => l,
  yQ: () => c
}), require("./539854.js");
var Chunk553813 = require("./553813.js"),
  i = require.n(Chunk553813),
  Chunk65154 = require("./65154.js");
let o = [{
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

function s(e, t) {
  let n = t.concat(o),
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

function l(e) {
  var t, n, r, o, s, l;
  let c = [];
  return e.has(a.V8.SIGNAL_AV1_DECODE) ? c.push({
    name: "AV1",
    encode: false,
    decode: true
  }) : e.has(a.V8.SIGNAL_AV1) && c.push({
    name: "AV1",
    encode: true,
    decode: true
  }), c.push({
    name: "H265",
    encode: "undefined" == typeof window || (null == (n = window) || null == (t = n.DiscordNative) ? true : t.process.platform) !== "darwin" || (null == (o = window) || null == (r = o.DiscordNative) ? true : r.os.arch) === "arm64" && i().satisfies(null == (l = window) || null == (s = l.DiscordNative) ? true : s.os.release, a.n4),
    decode: !(null == e ? true : e.has(a.V8.H265_HARDWARE_ONLY)) || (null == e ? true : e.has(a.V8.H265_HARDWARE_DECODE_AVAILABLE))
  }), c
}

function c(e, t) {
  return "string" == typeof e ? s(JSON.parse(e).map(e => ({
    codec: u(e.codec),
    encode: e.encode,
    decode: e.decode
  })), t) : s(e.map(e => ({
    codec: u(e),
    encode: true,
    decode: true
  })), t)
}

function u(e) {
  return "AV1X" === e ? "AV1" : e
}

function d(e) {
  return "AV1" === e ? "AV1X" : e
}