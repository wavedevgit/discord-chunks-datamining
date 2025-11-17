/** Chunk was on 79521 **/
/** chunk id: 575830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk485386 = require("./485386.js"),
  Chunk637565 = require("./637565.js"),
  Chunk14263 = require("./14263.js");

function o(e, t) {
  let n = (0, i.e7)([r.Z], () => null != e ? r.Z.getRolesSnapshot(e.id) : true),
    o = (0, a.Z)(null == e ? true : e.id);
  return l.useMemo(() => {
    let l = null != e && null != n ? (0, u.T)(e, n, t) : [],
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