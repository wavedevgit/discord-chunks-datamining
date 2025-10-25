/** Chunk was on 63639 **/
/** chunk id: 296643, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk763600 = require("./763600.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk694967 = require("./694967.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk306238 = require("./306238.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731926 = require("./731926.js"),
  Chunk737413 = require("./737413.js"),
  Chunk688913 = require("./688913.js");

function g() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk951288.jsx)(Chunk793030.xvT, {
    variant: "text-sm/medium",
    className: Chunk731926.text,
    children: Chunk388032.intl.format(Chunk306238.default.fcJiY8, {
      provider: (0, Chunk951288.jsx)("img", {
        className: Chunk731926.image,
        src: module !== Chunk231338.BR.LIGHT ? Chunk688913 : Chunk737413,
        alt: "Shockbyte"
      })
    })
  })
}

function f() {
  let {
    gameProvider: e
  } = (0, Chunk694967.JL)();
  return module === Chunk763600.Z.SHOCKBYTE ? (0, Chunk951288.jsx)(g, {}) : null
}