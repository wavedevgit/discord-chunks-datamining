/** Chunk was on 67365 **/
/** chunk id: 296643, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk763600 = require("./763600.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk343312 = require("./343312.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk847328 = require("./847328.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk731926 = require("./731926.js"),
  Chunk737413 = require("./737413.js"),
  Chunk688913 = require("./688913.js");

function f() {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk54381.jsx)(Chunk793030.xvT, {
    variant: "text-sm/medium",
    className: Chunk731926.text,
    children: Chunk388032.intl.format(Chunk847328.default.fcJiY8, {
      provider: (0, Chunk54381.jsx)("img", {
        className: Chunk731926.image,
        src: module !== Chunk231338.BR.LIGHT ? Chunk688913 : Chunk737413,
        alt: "Shockbyte"
      })
    })
  })
}

function g() {
  let {
    gameProvider: e
  } = (0, Chunk343312.JL)();
  return module === Chunk763600.Z.SHOCKBYTE ? (0, Chunk54381.jsx)(f, {}) : null
}