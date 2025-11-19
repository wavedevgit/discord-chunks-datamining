/** Chunk was on 384 **/
/** chunk id: 495298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk584825 = require("./584825.js"),
  Chunk14263 = require("./14263.js");

function a(e) {
  let t = (0, i.qi)(e),
    n = (0, l.Z)(e);
  return r.useMemo(() => {
    let e = 0;
    for (let r of t) {
      let t = null == r ? true : r.role_id;
      if (null != t) {
        let r = null == n ? true : n[t];
        null != r && (e += r)
      }
    }
    return e
  }, [t, n])
}