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
  let e, t = o.mH[Math.floor(Math.random() * o.mH.length)],
    n = o.P$[Math.floor(Math.random() * o.P$.length)];
  if (t === a.m.GRADIENT) {
    let t = o.vK[Math.floor(Math.random() * o.vK.length)];
    e = [t.start, t.end]
  } else e = [o.gD[Math.floor(Math.random() * o.gD.length)]];
  return {
    fontId: n,
    effectId: t,
    colors: e
  }
}

function u(e) {
  if (null == e) returnfalse;
  let t = e.replace(RegExp("[^\\p{L}]", "gu"), "");
  return RegExp("\\P{Script=Latin}", "u").test(t)
}