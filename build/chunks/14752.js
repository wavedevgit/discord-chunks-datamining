/** Chunk was on web.js **/
/** chunk id: 14752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => u,
  GT: () => f,
  Mz: () => p,
  fB: () => y,
  qH: () => d,
  rs: () => m
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./733351.js"), require("./747238.js"), require("./812715.js"), require("./457529.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk115943 = require("./115943.js"),
  i = require.n(Chunk115943);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
let s = 22,
  l = e => i().decode(e),
  c = e => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
  u = async (e, t, n) => ({
    src: e,
    base64: e,
    loop: false,
    loopDelay: 0,
    duration: c(l(await t.arrayBuffer())),
    start: 0,
    position: {
      x: 0,
      y: 0
    },
    zIndex: 100 + n,
    height: 880,
    width: 450,
    name: t.name
  });
var d = function(e) {
  return e.THUMBNAIL = "Thumbnail", e.STATIC = "Static", e.REDUCED_MOTION = "Reduced Motion", e
}({});
let f = (e, t) => ({
    name: t.name,
    src: URL.createObjectURL(t),
    base64: e
  }),
  p = (e, t) => {
    if (null == e) return;
    let n = new FileReader;
    n.onload = e => {
      null == e.target || "string" == typeof e.target.result && (null == t || t(e.target.result))
    }, n.readAsDataURL(e)
  },
  _ = e => e.trim().replace(/\s+/g, "_").toLowerCase(),
  h = e => null != e ? _(e.split("-")[0]) : "",
  m = (e, t) => {
    let n = _(e);
    return "PASTE THIS INTO THE DROP JSON:\n\n" + t.map(e => {
      let t = h(e.name);
      return JSON.stringify(o({
        path: "effects/".concat(n, "/").concat(t, ".png"),
        loop: e.loop,
        start: e.start,
        duration: e.duration,
        loop_delay: e.loopDelay,
        z_index: e.zIndex
      }, null != e.randomizedSources ? {
        randomized_paths: e.randomizedSources.map(e => e.src)
      } : {}), null, 4).split("\n").map(e => " ".repeat(s) + e).join("\n")
    }).join(",\n") + "\n\nPASTE THIS INTO profile_effect_metadata.py:\n\n" + g(t)
  },
  g = e => {
    let t = "[";
    return e.forEach(e => {
      let n = h(e.name);
      t += "\n              ProfileEffectKeyFrame(\n                  src='".concat(n, ".png',\n                  loop=").concat(e.loop ? "True" : "False", ",\n                  width=").concat(e.width, ",\n                  height=").concat(e.height, ",\n                  start=").concat(e.start, ",\n                  duration=").concat(e.duration, ",\n                  loop_delay=").concat(e.loopDelay, ",\n                  position=ProfileEffectPoint(x=0, y=0),\n                  z_index=").concat(e.zIndex, ",\n              ),\n          ")
    }), t += "\n]"
  },
  E = e => {
    let [t, n] = e.split(","), r = atob(n), i = t.split(";")[0], a = new Uint8Array(r.length);
    for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
    return new Blob([a], {
      type: i
    })
  },
  y = e => {
    let t = E(e);
    return URL.createObjectURL(t)
  }