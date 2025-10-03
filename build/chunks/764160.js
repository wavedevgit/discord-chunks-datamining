/** Chunk was on 54628 **/
/** chunk id: 764160, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk760919 = require("./760919.js"),
  Chunk227150 = require("./227150.js");
let o = new Chunk760919.Z({
  id: "a98rgb",
  cssId: "a98-rgb",
  name: "Adobe\xae 98 RGB compatible",
  base: Chunk227150.Z,
  toBase: e => e.map(e => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: e => e.map(e => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e))
})