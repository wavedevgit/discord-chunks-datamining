/** Chunk was on 47495 **/
/** chunk id: 166614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk778825 = require("./778825.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk51144 = require("./51144.js");

function s(e, t) {
  var n, s;
  let c = null != (n = i.ZP.useName(e)) ? n : "",
    d = null != (s = (0, l.e7)([o.Z, a.Z, r.ZP], () => {
      if (null != t) {
        var n;
        return null != (n = o.Z.getPendingNickname()) ? n : r.ZP.getNick(t, null == e ? true : e.id)
      }
      return a.Z.getPendingGlobalName()
    }, [t, e])) ? s : c;
  return null != d ? d : c
}