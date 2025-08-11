/** Chunk was on 25548 **/
/** chunk id: 850020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk346811 = require("./346811.js"),
  Chunk4242 = require("./4242.js");

function o(e) {
  let {
    user: t,
    guildId: n,
    location: o = ""
  } = e, {
    enabled: c
  } = a.Z.useConfig({
    location: o
  }), d = (0, r.e7)([l.ZP], () => null != n && null != t ? l.ZP.getMember(n, t.id) : null);
  return (0, i.useMemo)(() => {
    var e;
    if (null == t) return;
    let i = (0, s.Pb)(null == d || null == (e = d.collectibles) ? true : e.nameplate);
    return null != n && c && null != i ? i : t.nameplate
  }, [d, n, c, t])
}