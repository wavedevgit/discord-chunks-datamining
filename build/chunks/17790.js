/** Chunk was on 62934 **/
/** chunk id: 17790, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./457542.js");
var Chunk473749 = require("./473749.js"),
  Chunk70956 = require("./70956.js"),
  Chunk506071 = require("./506071.js"),
  Chunk905551 = require("./905551.js");
let s = 30 * Chunk70956.Z.Millis.SECOND,
  o = 5 * Chunk70956.Z.Millis.SECOND;

function c(e) {
  let n = (0, i.n)();
  r.useEffect(() => {
    if (null == e) return;
    let t = true,
      r = null,
      a = 0,
      i = () => setTimeout(() => {
        n && (r = new AbortController, (0, l.mF)(e, false, r.signal).then(() => a = 0).catch(() => a = Math.min(a + 1, 4)).finally(() => {
          t && (c = i())
        }))
      }, s * Math.pow(2, a) + Math.random() * o),
      c = i();
    return () => {
      t = false, null == r || r.abort(), clearTimeout(c)
    }
  }, [e, n])
}