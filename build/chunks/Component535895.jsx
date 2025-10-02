/** Chunk was on 952 **/
/** chunk id: 535895, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk183369 = require("./183369.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk231338 = require("./231338.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680247 = require("./680247.js"),
  Chunk907623 = require("./907623.js"),
  Chunk895263 = require("./895263.js");

function f() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)(Chunk793030.xvT, {
    variant: "text-sm/medium",
    className: Chunk680247.text,
    children: Chunk388032.intl.format(Chunk401561.default.JWpue3, {
      provider: (0, Chunk951288.jsx)("img", {
        className: Chunk680247.image,
        src: module !== Chunk231338.BR.LIGHT ? Chunk895263 : Chunk907623,
        alt: "Shockbyte"
      })
    })
  })
}

function g() {
  let {
    gameProvider: e
  } = (0, Chunk183369.aj)();
  return module === Chunk473682.mg.SHOCKBYTE ? (0, Chunk951288.jsx)(f, {}) : null
}