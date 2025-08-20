/** Chunk was on 40226 **/
/** chunk id: 359993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk430824 = require("./430824.js"),
  Chunk204298 = require("./204298.js");

function s(e) {
  let {
    application: t,
    showMutualGuilds: n = true
  } = e, s = (0, i.e7)([o.Z], () => o.Z.getGuildIdsForApplication(null == t ? true : t.id), [t]), c = (0, i.e7)([l.Z], () => l.Z.isConnected());
  return r.useMemo(() => {
    let e = [];
    if (!c || !n || null == s || null == t) return e;
    for (let t of s) {
      let n = a.Z.getGuild(t);
      null != n && e.push(n)
    }
    return e
  }, [c, s, t, n])
}