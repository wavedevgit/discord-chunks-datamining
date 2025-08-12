/** Chunk was on 54844 **/
/** chunk id: 359993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk430824 = require("./430824.js"),
  Chunk204298 = require("./204298.js");

function o(e) {
  let {
    application: t,
    showMutualGuilds: n = true
  } = e, o = (0, i.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == t ? true : t.id), [t]), c = (0, i.e7)([l.Z], () => l.Z.isConnected());
  return r.useMemo(() => {
    let e = [];
    if (!c || !n || null == o || null == t) return e;
    for (let t of o) {
      let n = a.Z.getGuild(t);
      null != n && e.push(n)
    }
    return e
  }, [c, o, t, n])
}