/** Chunk was on 64935 **/
/** chunk id: 310962, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk654107 = require("./654107.js"),
  Chunk67480 = require("./67480.js"),
  Chunk871123 = require("./871123.js");

function o(e, t) {
  let n = (0, i.bG)([a.A], () => a.A.get(e)),
    [o, c] = r.useState(false),
    [u, d] = r.useState(false),
    p = r.useMemo(() => (0, s.xf)(n), [n]),
    m = r.useMemo(() => (0, s.fq)(n), [n]);
  return r.useEffect(() => {
    if ((null == n ? true : n.id) == null || o || !t) return;
    if (null == m) return void c(true);
    let e = new Image;
    return e.src = m.toString(), e.onload = () => {
      c(true)
    }, e.onerror = () => {
      c(true)
    }, () => {
      e.onerror = null, e.onload = null, e.src = ""
    }
  }, [m, t, o, null == n ? true : n.id]), r.useEffect(() => {
    if ((null == n ? true : n.id) == null || u || !t) return;
    if (null == p) return void d(true);
    let e = true;
    return (0, l.l0)(p.toString()).finally(() => {
      e && d(true)
    }), () => {
      e = false
    }
  }, [u, p, t, null == n ? true : n.id]), r.useMemo(() => o && u, [o, u])
}