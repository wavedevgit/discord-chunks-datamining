/** Chunk was on web.js **/
/** chunk id: 489495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $j: () => _,
  Xv: () => s,
  cq: () => l,
  i0: () => u,
  yR: () => d,
  z: () => c
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk605387 = require("./605387.js"),
  i = require.n(Chunk605387);
let a = e => i().decode(e),
  o = e => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
  s = async (e, t, n) => {
    let r = a(await t.arrayBuffer());
    return {
      src: URL.createObjectURL(t),
      base64: e,
      loop: false,
      loopDelay: 0,
      duration: o(r),
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
var l = function(e) {
  return e.THUMBNAIL = "Thumbnail", e.STATIC = "Static", e.REDUCED_MOTION = "Reduced Motion", e
}({});
let c = (e, t) => ({
    name: t.name,
    src: URL.createObjectURL(t),
    base64: e
  }),
  u = (e, t) => {
    if (null == e) return;
    let n = new FileReader;
    n.onload = e => {
      null != e.target && "string" == typeof e.target.result && (null == t || t(e.target.result))
    }, n.readAsDataURL(e)
  },
  d = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "python",
      n = "\n[";
    return "python" === t ? e.forEach(e => {
      n += "\n              ProfileEffectKeyFrame(\n                  src='".concat(e.name, "',\n                  loop=").concat(e.loop ? "True" : "False", ",\n                  width=").concat(e.width, ",\n                  height=").concat(e.height, ",\n                  start=").concat(e.start, ",\n                  duration=").concat(e.duration, ",\n                  loop_delay=").concat(e.loopDelay, ",\n                  position=ProfileEffectPoint(x=0, y=0),\n                  z_index=").concat(e.zIndex, ",\n              ),\n          ")
    }) : "json" === t && e.forEach(e => {
      n += '\n              {\n                  "src": "'.concat(e.name, '",\n                  "loop": ').concat(e.loop, ',\n                  "width": ').concat(e.width, ',\n                  "height": ').concat(e.height, ',\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "loop_delay": ').concat(e.loopDelay, ',\n                  "position": {\n                    "x": 0,\n                    "y": 0\n                  },\n                  "zIndex": ').concat(e.zIndex, ",\n              },\n          ")
    }), n += "\n]"
  },
  f = e => {
    let [t, n] = e.split(","), r = atob(n), i = t.split(";")[0], a = new Uint8Array(r.length);
    for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
    return new Blob([a], {
      type: i
    })
  },
  _ = e => {
    let t = f(e);
    return URL.createObjectURL(t)
  }