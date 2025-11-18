/** Chunk was on web.js **/
/** chunk id: 383881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  O: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk772848 = require("./772848.js"),
  Chunk801466 = require("./801466.js");

function o() {
  return (0, Chunk54381.jsx)("svg", {
    className: Chunk801466.headerWave,
    version: "1.1",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1512 510",
    xmlSpace: "preserve",
    children: (0, Chunk54381.jsx)("path", {
      style: {
        fill: "currentColor"
      },
      d: "M1512,25.1c-294.3-135.3-565.2,319.2-855,322.2c-232,2.4-279-101.8-415.5-100.5C149.9,247.7,49.8,311.3,0,355.4  v154.4h1512V25.1z"
    })
  })
}
let s = (0, Chunk772848.Z)();

function l() {
  return (0, Chunk54381.jsxs)("svg", {
    className: Chunk801466.bodyWave,
    version: "1.1",
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 1512 1619",
    xmlSpace: "preserve",
    children: [(0, Chunk54381.jsxs)("linearGradient", {
      id: s,
      gradientUnits: "userSpaceOnUse",
      x1: "-13.3959",
      y1: "82.1225",
      x2: "1221.1846",
      y2: "1689.3361",
      children: [(0, Chunk54381.jsx)("stop", {
        offset: "0",
        className: Chunk801466.bodyWaveGradientStop1
      }), (0, Chunk54381.jsx)("stop", {
        offset: "0.5",
        className: Chunk801466.bodyWaveGradientStop2
      }), (0, Chunk54381.jsx)("stop", {
        offset: "1",
        className: Chunk801466.bodyWaveGradientStop3
      })]
    }), (0, Chunk54381.jsx)("path", {
      style: {
        fill: "url(#".concat(s, ")")
      },
      d: "M0,1619c507-247.2,1154.7-241,1512-194.7V548.5c-150.9,56.4-400.3,51.2-691-222.6C506.6,29.9,186.8-16.5,0,4.3  V1619z"
    })]
  })
}