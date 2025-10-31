/** Chunk was on 54628 **/
/** chunk id: 723757, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk760919 = require("./760919.js"),
  Chunk365938 = require("./365938.js");
let o = new Chunk760919.Z({
  id: "rec2020",
  name: "REC.2020",
  base: Chunk365938.Z,
  toBase: e => e.map(function(e) {
    return e < .08124285829863151 ? e / 4.5 : Math.pow((e + 1.09929682680944 - 1) / 1.09929682680944, 1 / .45)
  }),
  fromBase: e => e.map(function(e) {
    return e >= .018053968510807 ? 1.09929682680944 * Math.pow(e, .45) - (1.09929682680944 - 1) : 4.5 * e
  })
})