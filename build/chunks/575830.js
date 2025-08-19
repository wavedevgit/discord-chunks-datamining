/** Chunk was on 30557 **/
/** chunk id: 575830, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk485386 = require("./485386.js"),
  Chunk637565 = require("./637565.js"),
  Chunk14263 = require("./14263.js");

function s(t, n) {
  let e = (0, l.e7)([d.Z], () => null != t ? d.Z.getRolesSnapshot(t.id) : true),
    s = (0, a.Z)(null == t ? true : t.id);
  return i.useMemo(() => {
    let i = null != t && null != e ? (0, r.T)(t, e, n) : [],
      l = 0;
    for (let t of i) {
      let n = t.id;
      if (null != n) {
        let t = null == s ? true : s[n];
        null != t && (l += t)
      }
    }
    return l
  }, [s, t, n, e])
}