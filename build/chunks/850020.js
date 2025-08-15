/** Chunk was on 96750 **/
/** chunk id: 850020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk346811 = require("./346811.js"),
  Chunk4242 = require("./4242.js");

function s(e) {
  let {
    user: t,
    guildId: n,
    location: s = ""
  } = e, {
    enabled: c
  } = a.Z.useConfig({
    location: s
  }), u = (0, i.e7)([l.ZP], () => null != n && null != t ? l.ZP.getMember(n, t.id) : null);
  return (0, r.useMemo)(() => {
    var e;
    if (null == t) return;
    let r = (0, o.Pb)(null == u || null == (e = u.collectibles) ? true : e.nameplate);
    return null != n && c && null != r ? r : t.nameplate
  }, [u, n, c, t])
}