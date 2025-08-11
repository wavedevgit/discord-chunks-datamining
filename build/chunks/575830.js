/** Chunk was on 79521 **/
/** chunk id: 575830, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk485386 = require("./485386.js"),
  Chunk637565 = require("./637565.js"),
  Chunk14263 = require("./14263.js");

function o(t, e) {
  let n = (0, l.e7)([r.Z], () => null != t ? r.Z.getRolesSnapshot(t.id) : true),
    o = (0, s.Z)(null == t ? true : t.id);
  return i.useMemo(() => {
    let i = null != t && null != n ? (0, a.T)(t, n, e) : [],
      l = 0;
    for (let t of i) {
      let e = t.id;
      if (null != e) {
        let t = null == o ? true : o[e];
        null != t && (l += t)
      }
    }
    return l
  }, [o, t, e, n])
}