/** Chunk was on 1272 **/
/** chunk id: 531551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var Chunk570140 = require("./570140.js"),
  Chunk51025 = require("./51025.js"),
  Chunk314897 = require("./314897.js"),
  Chunk804739 = require("./804739.js");

function o() {
  if (!(0, a.Q)()) return;
  let e = l.default.getToken(),
    t = l.default.getId();
  if (null == e) throw Error("missing user token");
  i.S1(e, t)
}

function s() {
  i.ob()
}
let c = {
  init() {
    r.Z.subscribe("CONNECTION_OPEN", o), r.Z.subscribe("LOGOUT", s)
  }
}