/** Chunk was on web.js **/
/** chunk id: 369496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H6: () => c,
  Ov: () => d,
  WK: () => f,
  nI: () => u,
  wT: () => o
}), require("./747238.js"), require("./927092.js"), require("./212978.js"), require("./597227.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk115943 = require("./115943.js"),
  i = require.n(Chunk115943),
  Chunk270704 = require("./270704.js");
require("./818348.js");
var Chunk985018 = require("./985018.jsx");

function o(e) {
  return e.name !== a.KO && (e.name !== a.AK || l(e.darkBackground) && l(e.lightBackground))
}

function l(e) {
  return /^#([0-9a-fA-F]{6})$/.test(e)
}
let c = e => {
  var t;
  return null != (t = a.fc[e]) ? t : a.Wj
};

function u(e) {
  let t = i().decode(e),
    n = i().toRGBA8(t)[0],
    r = document.createElement("canvas");
  r.width = t.width, r.height = t.height;
  let a = r.getContext("2d"),
    s = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
  return a.putImageData(s, 0, 0), r.toDataURL("image/png")
}

function d() {
  return {
    mallow: {
      name: s.intl.string(s.t.SbKDHi),
      avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png"
    },
    phibi: {
      name: s.intl.string(s.t["LMSo+F"]),
      avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png"
    },
    locke: {
      name: s.intl.string(s.t.g5Dumi),
      avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png"
    },
    cherry: {
      name: s.intl.string(s.t.p5Z3Ol),
      avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png"
    },
    boom: {
      name: s.intl.string(s.t.ncslie),
      avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png"
    }
  }
}
let f = e => null == e ? null : {
  src: e.asset,
  palette: c(e.palette),
  imgAlt: e.label
}