/** Chunk was on 33372 **/
/** chunk id: 873878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk317525 = require("./317525.js"),
  Chunk986724 = require("./986724.js"),
  Chunk386784 = require("./386784.js");

function o(e, t) {
  let n = (0, i.bG)([r.A], () => null != e ? r.A.getRolesSnapshot(e.id) : true),
    o = (0, a.A)(null == e ? true : e.id);
  return l.useMemo(() => {
    let l = null != e && null != n ? (0, u.z)(e, n, t) : [],
      i = 0;
    for (let e of l) {
      let t = e.id;
      if (null != t) {
        let e = null == o ? true : o[t];
        null != e && (i += e)
      }
    }
    return i
  }, [o, e, t, n])
}