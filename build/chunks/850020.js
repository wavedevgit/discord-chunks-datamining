/** Chunk was on 97961 **/
/** chunk id: 850020, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  K: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk4242 = require("./4242.js");

function i(t) {
  let {
    user: e,
    guildId: n
  } = t, i = (0, a.e7)([o.ZP], () => null != n && null != e ? o.ZP.getMember(n, e.id) : null);
  return (0, r.useMemo)(() => {
    var t;
    if (null == e) return;
    let r = (0, c.Pb)(null == i || null == (t = i.collectibles) ? true : t.nameplate);
    return null != n && null != r ? r : e.nameplate
  }, [i, n, e])
}