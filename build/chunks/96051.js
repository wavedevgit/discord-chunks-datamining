/** Chunk was on 1272 **/
/** chunk id: 96051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk117984 = require("./117984.js");

function a(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, l.oC)(t)
}
class s extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CHANNEL_DELETE", a)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CHANNEL_DELETE", a)
  }
}
let o = new s