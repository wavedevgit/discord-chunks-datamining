/** Chunk was on 28636 **/
/** chunk id: 973172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk142120 = require("./142120.js"),
  Chunk71393 = require("./71393.js"),
  Chunk680646 = require("./680646.js");

function o(e) {
  let {
    application: t,
    showMutualGuilds: n = true
  } = e, o = (0, l.bG)([s.A], () => s.A.getGuildIdsForApplication(null == t ? true : t.id), [t]), c = (0, l.bG)([i.A], () => i.A.isConnected());
  return r.useMemo(() => {
    let e = [];
    if (!c || !n || null == o || null == t) return e;
    for (let t of o) {
      let n = a.A.getGuild(t);
      null != n && e.push(n)
    }
    return e
  }, [c, o, t, n])
}