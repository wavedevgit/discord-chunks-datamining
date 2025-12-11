/** Chunk was on 93886 **/
/** chunk id: 850020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk4242 = require("./4242.js");

function o(e) {
  let {
    user: t,
    guildId: n
  } = e, o = (0, a.e7)([i.ZP], () => null != n && null != t ? i.ZP.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, l.Pb)(null == o || null == (e = o.collectibles) ? true : e.nameplate);
    return null != n && null != r ? r : t.nameplate
  }, [o, n, t])
}