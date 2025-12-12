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
  a.useEffect(() => {
    if (null == e) return;
    let t = true,
      a = null,
      r = 0,
      i = () => setTimeout(() => {
        n && (a = new AbortController, (0, l.mF)(e, false, a.signal).then(() => r = 0).catch(() => r = Math.min(r + 1, 4)).finally(() => {
          t && (c = i())
        }))
      }, s * Math.pow(2, r) + Math.random() * o),
      c = i();
    return () => {
      t = false, null == a || a.abort(), clearTimeout(c)
    }
  }, [e, n])
}