/** Chunk was on 73895 **/
/** chunk id: 605951, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
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