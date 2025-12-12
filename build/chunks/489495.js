/** Chunk was on web.js **/
/** chunk id: 489495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $j: () => b,
  Xv: () => u,
  cq: () => d,
  i0: () => p,
  yR: () => h,
  z: () => f
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./781311.js"), require("./704826.js"), require("./35282.js"), require("./49124.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk605387 = require("./605387.js"),
  i = require.n(Chunk605387);

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
  u = async (e, t, n) => {
    let r = l(await t.arrayBuffer());
    return {
      src: URL.createObjectURL(t),
      base64: e,
      loop: false,
      loopDelay: 0,
      duration: c(r),
      start: 0,
      position: {
        x: 0,
        y: 0
      },
      zIndex: 100 + n,
      height: 880,
      width: 450,
      name: t.name
    }
  };
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
      null != e.target && "string" == typeof e.target.result && (null == t || t(e.target.result))
    }, n.readAsDataURL(e)
  },
  _ = e => e.trim().replace(/\s+/g, "_").toLowerCase(),
  m = e => null != e ? _(e.split("-")[0]) : "",
  h = (e, t) => {
    let n = _(e);
    return "PASTE THIS INTO THE DROP JSON:\n\n" + t.map(e => {
      let t = m(e.name);
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
      let n = m(e.name);
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
  b = e => {
    let t = E(e);
    return URL.createObjectURL(t)
  }