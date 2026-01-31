/** Chunk was on 21738 **/
/** chunk id: 281913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk139033 = require("./139033.jsx"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk985018 = require("./985018.jsx");
class s extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    i.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, r.A)({
      title: a.intl.string(a.t.wDQgnX),
      subtitle: a.intl.string(a.t.OJklbS)
    })
  }
}
let o = new s