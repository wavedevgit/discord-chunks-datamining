/** Chunk was on 54628 **/
/** chunk id: 694626, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk665352 = require("./665352.js"),
  Chunk147591 = require("./147591.js"),
  Chunk677524 = require("./677524.js"),
  Chunk37484 = require("./37484.js"),
  Chunk385787 = require("./385787.js");

function c(e, t) {
  return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1)
}

function u(e) {
  return Math.min(c(e.r0s, e.r0i), c(e.r1s, e.r1i), c(e.g0s, e.g0i), c(e.g1s, e.g1i), c(e.b0s, e.b0i), c(e.b1s, e.b1i))
}
Chunk677524.p["0"]["0"], Chunk677524.p["0"]["1"], Chunk677524.p["0"]["2"], Chunk677524.p["1"]["0"], Chunk677524.p["1"]["1"], Chunk677524.p["1"]["2"], Chunk677524.p["2"]["0"], Chunk677524.p["2"]["1"], Chunk677524.p["2"]["2"];
let l = new Chunk665352.Z({
  id: "hpluv",
  name: "HPLuv",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: Chunk147591.Z,
  gamutSpace: "self",
  fromBase(e) {
    let t, [r, a, n] = [(0, s.sI)(e[0]), (0, s.sI)(e[1]), (0, s.sI)(e[2])];
    return r > 99.9999999 ? (t = 0, r = 100) : r < 1e-8 ? (t = 0, r = 0) : t = a / u((0, i.t)(r)) * 100, [n, t, r]
  },
  toBase(e) {
    let t, [r, a, n] = [(0, s.sI)(e[0]), (0, s.sI)(e[1]), (0, s.sI)(e[2])];
    return n > 99.9999999 ? (n = 100, t = 0) : n < 1e-8 ? (n = 0, t = 0) : t = u((0, i.t)(n), r) / 100 * a, [n, t, r]
  },
  formats: {
    color: {
      id: "--hpluv",
      coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"]
    }
  }
})