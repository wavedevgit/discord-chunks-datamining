/** Chunk was on 86031 **/
/** chunk id: 82892, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  x: () => o
});
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js");
let o = () => {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return a()(null != module, "user has to be signed in before accessing shop"), module
}