/** Chunk was on 44669 **/
/** chunk id: 987344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk967198 = require("./967198.js");

function i(e) {
  r.useEffect(() => {
    let t = null;

    function n() {
      let n = l.A.getGuildId();
      n !== t && (t = null != n ? n : null, e(null != n ? n : null, false))
    }
    return l.A.addChangeListener(n), () => {
      l.A.removeChangeListener(n)
    }
  }, [e])
}