/** Chunk was on 63639 **/
/** chunk id: 296643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk763600 = require("./763600.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk343312 = require("./343312.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk97200 = require("./97200.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk241497 = require("./241497.js"),
  Chunk737413 = require("./737413.js"),
  Chunk688913 = require("./688913.js");

function g() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)(Chunk793030.xvT, {
    variant: "text-sm/medium",
    className: Chunk241497.text,
    children: Chunk388032.intl.format(Chunk97200.default.fcJiY8, {
      provider: (0, Chunk951288.jsx)("img", {
        className: Chunk241497.image,
        src: module !== Chunk231338.BR.LIGHT ? Chunk688913 : Chunk737413,
        alt: "Shockbyte"
      })
    })
  })
}

function f() {
  let {
    gameProvider: e
  } = (0, Chunk343312.JL)();
  return module === Chunk763600.Z.SHOCKBYTE ? (0, Chunk951288.jsx)(g, {}) : null
}