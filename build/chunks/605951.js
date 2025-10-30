/** Chunk was on 15647 **/
/** chunk id: 605951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk914010 = require("./914010.js");

function l(e) {
  r.useEffect(() => {
    let t = null;

    function n() {
      let n = i.Z.getGuildId();
      n !== t && (t = null != n ? n : null, e(null != n ? n : null, false))
    }
    return i.Z.addChangeListener(n), () => {
      i.Z.removeChangeListener(n)
    }
  }, [e])
}