/** Chunk was on 34082 **/
/** chunk id: 376108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js");

function a(e, t, n) {
  let a = (0, l.e7)([s.ZP], () => s.ZP.getUserCount(t, n));
  return (0, r.useEffect)(() => {
    null != e && null != t && i.Z.getGuildEventUserCounts(e, t, null != n ? [n] : [])
  }, [t, e, n]), a
}