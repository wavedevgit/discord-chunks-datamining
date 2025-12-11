/** Chunk was on 92504 **/
/** chunk id: 359993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk38618 = require("./38618.js"),
  Chunk430824 = require("./430824.js"),
  Chunk204298 = require("./204298.js");

function o(e) {
  let {
    application: t,
    showMutualGuilds: n = true
  } = e, o = (0, r.e7)([s.Z], () => s.Z.getGuildIdsForApplication(null == t ? true : t.id), [t]), c = (0, r.e7)([i.Z], () => i.Z.isConnected());
  return a.useMemo(() => {
    let e = [];
    if (!c || !n || null == o || null == t) return e;
    for (let t of o) {
      let n = l.Z.getGuild(t);
      null != n && e.push(n)
    }
    return e
  }, [c, o, t, n])
}