/** Chunk was on web.js **/
/** chunk id: 945096, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => o,
  Xr: () => u,
  gN: () => c,
  mT: () => l
}), require("./747238.js"), require("./812715.js"), require("./591487.js"), require("./727858.js");
var Chunk310784 = require("./310784.js"),
  i = require.n(Chunk310784),
  Chunk508425 = require("./508425.js"),
  Chunk750656 = require("./750656.js");

function o(e) {
  let t = i()(e).alpha(1),
    n = t.get("hsl.l"),
    r = Math.min(1, 1.2 * t.get("hsl.s")),
    a = Math.min(.6, n + .1);
  return {
    main: e,
    light1: t.set("hsl.l", Math.min(1, 1.2 * n)).hex(),
    light2: t.set("hsl.l", Math.min(1, 1.6 * n)).hex(),
    dark1: t.set("hsl.l", Math.max(0, .6 * n)).hex(),
    dark2: t.set("hsl.l", Math.max(0, .2 * n)).hex(),
    toonStroke: t.set("hsl.l", Math.max(.12, .4 * n)).hex(),
    neonStroke: t.set("hsl.s", r).set("hsl.l", a).hex()
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
  let e, t = s.re[Math.floor(Math.random() * s.re.length)],
    n = s.rA[Math.floor(Math.random() * s.rA.length)];
  if (t === a.z.GRADIENT) {
    let t = s.Wf[Math.floor(Math.random() * s.Wf.length)];
    e = [t.start, t.end]
  } else e = [s.Jl[Math.floor(Math.random() * s.Jl.length)]];
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