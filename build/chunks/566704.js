/** Chunk was on 19750 **/
/** chunk id: 566704, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk927813 = require("./927813.js"),
  Chunk218394 = require("./218394.js"),
  Chunk665171 = require("./665171.js");
let s = 30 * Chunk927813.A.Millis.SECOND,
  c = 5 * Chunk927813.A.Millis.SECOND;

function o(e) {
  let t = (0, l.j)();
  r.useEffect(() => {
    if (null == e) return;
    let n = true,
      r = null,
      a = 0,
      l = () => setTimeout(() => {
        t && (r = new AbortController, (0, i.cq)(e, false, r.signal).then(() => a = 0).catch(() => a = Math.min(a + 1, 4)).finally(() => {
          n && (o = l())
        }))
      }, s * Math.pow(2, a) + Math.random() * c),
      o = l();
    return () => {
      n = false, null == r || r.abort(), clearTimeout(o)
    }
  }, [e, t])
}