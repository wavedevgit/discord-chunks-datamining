/** Chunk was on web.js **/
/** chunk id: 310962, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js"), require("./492834.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk654107 = require("./654107.js"),
  Chunk67480 = require("./67480.js"),
  Chunk871123 = require("./871123.js");

function l(e, t) {
  let n = (0, i.bG)([s.A], () => s.A.get(e)),
    [l, c] = r.useState(false),
    [u, d] = r.useState(false),
    f = r.useMemo(() => (0, o.xf)(n), [n]),
    p = r.useMemo(() => (0, o.fq)(n), [n]);
  return r.useEffect(() => {
    if ((null == n ? true : n.id) == null || l || !t) return;
    if (null == p) return void c(true);
    let e = new Image;
    return e.src = p.toString(), e.onload = () => {
      c(true)
    }, e.onerror = () => {
      c(true)
    }, () => {
      e.onerror = null, e.onload = null, e.src = ""
    }
  }, [p, t, l, null == n ? true : n.id]), r.useEffect(() => {
    if ((null == n ? true : n.id) == null || u || !t) return;
    if (null == f) return void d(true);
    let e = true;
    return (0, a.l0)(f.toString()).finally(() => {
      e && d(true)
    }), () => {
      e = false
    }
  }, [u, f, t, null == n ? true : n.id]), r.useMemo(() => l && u, [l, u])
}