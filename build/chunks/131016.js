/** Chunk was on web.js **/
/** chunk id: 131016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aY: () => c,
  bN: () => l,
  hX: () => s,
  mR: () => u
}), require("./704826.js"), require("./35282.js"), require("./413496.js"), require("./433524.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619),
  Chunk522942 = require("./522942.js"),
  Chunk660662 = require("./660662.js");

function s(e) {
  let t = i()(e).alpha(1),
    n = t.get("hsl.l");
  return {
    main: e,
    light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
    light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
    dark1: t.set("hsl.l", Math.max(0, .6 * n)).hex(),
    dark2: t.set("hsl.l", Math.max(0, .2 * n)).hex(),
    toonStroke: t.set("hsl.l", Math.max(.12, .4 * n)).hex()
  }
}

function l(e) {
  return null == e ? null : {
    fontId: e.font_id,
    effectId: e.effect_id,
    colors: e.colors
  }
}

function c() {
  let e, t = Chunk660662.mH[Math.floor(Math.random() * Chunk660662.mH.length)],
    n = Chunk660662.P$[Math.floor(Math.random() * Chunk660662.P$.length)];
  if (exports === Chunk522942.m.GRADIENT) {
    let t = Chunk660662.vK[Math.floor(Math.random() * Chunk660662.vK.length)];
    e = [exports.start, exports.end]
  } else e = [Chunk660662.gD[Math.floor(Math.random() * Chunk660662.gD.length)]];
  return {
    fontId: require,
    effectId: exports,
    colors: module
  }
}

function u(e) {
  if (null == e) returnfalse;
  let t = e.replace(RegExp("[^\\p{L}]", "gu"), "");
  return RegExp("\\P{Script=Latin}", "u").test(t)
}