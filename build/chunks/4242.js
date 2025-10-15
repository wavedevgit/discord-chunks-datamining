/** Chunk was on web.js **/
/** chunk id: 4242, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pb: () => f,
  ic: () => s,
  t1: () => c,
  w$: () => d,
  xh: () => u
}), require("./35282.js"), require("./559231.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk605387 = require("./605387.js"),
  i = require.n(Chunk605387),
  Chunk780771 = require("./780771.js");
require("./231338.js");
var Chunk388032 = require("./388032.jsx");

function s(e) {
  return e.name !== a.uj && (e.name !== a._j || l(e.darkBackground) && l(e.lightBackground))
}

function l(e) {
  return /^#([0-9a-fA-F]{6})$/.test(e)
}
let c = e => {
  var t;
  return null != (t = a.N3[e]) ? t : a.jD
};

function u(e) {
  let t = i().decode(e),
    n = i().toRGBA8(t)[0],
    r = document.createElement("canvas");
  r.width = t.width, r.height = t.height;
  let a = r.getContext("2d"),
    o = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
  return a.putImageData(o, 0, 0), r.toDataURL("image/png")
}

function d() {
  return {
    mallow: {
      name: Chunk388032.intl.string(Chunk388032.t.SbKDHi),
      avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png"
    },
    phibi: {
      name: Chunk388032.intl.string(Chunk388032.t["LMSo+F"]),
      avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png"
    },
    locke: {
      name: Chunk388032.intl.string(Chunk388032.t.g5Dumi),
      avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png"
    },
    cherry: {
      name: Chunk388032.intl.string(Chunk388032.t.p5Z3Ol),
      avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png"
    },
    boom: {
      name: Chunk388032.intl.string(Chunk388032.t.ncslie),
      avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png"
    }
  }
}
let f = e => null == e ? null : {
  src: e.asset,
  palette: c(e.palette),
  imgAlt: e.label
}