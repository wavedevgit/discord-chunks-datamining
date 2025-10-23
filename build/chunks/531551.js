/** Chunk was on 1272 **/
/** chunk id: 531551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk51025 = require("./51025.js"),
  Chunk314897 = require("./314897.js"),
  Chunk804739 = require("./804739.js");

function s() {
  if (!(0, Chunk804739.Q)()) return;
  let e = Chunk314897.default.getToken(),
    t = Chunk314897.default.getId();
  if (null == module) throw Error("missing user token");
  Chunk51025.S1(module, exports)
}

function o() {
  Chunk51025.ob()
}
let c = {
  init() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", s), Chunk570140.Z.subscribe("LOGOUT", o)
  }
}