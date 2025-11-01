/** Chunk was on 86863 **/
/** chunk id: 850020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk4242 = require("./4242.js");

function a(e) {
  let {
    user: t,
    guildId: n
  } = e, a = (0, i.e7)([o.ZP], () => null != n && null != t ? o.ZP.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, l.Pb)(null == a || null == (e = a.collectibles) ? true : e.nameplate);
    return null != n && null != r ? r : t.nameplate
  }, [a, n, t])
}