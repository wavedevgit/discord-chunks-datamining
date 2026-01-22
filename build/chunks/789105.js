/** Chunk was on 21738 **/
/** chunk id: 789105, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk422258 = require("./422258.js");

function a(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, l.i_)(t)
}
class s extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("CHANNEL_DELETE", a)
  }
  _terminate() {
    r.h.unsubscribe("CHANNEL_DELETE", a)
  }
}
let o = new s