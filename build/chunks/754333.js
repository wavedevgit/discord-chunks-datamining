/** Chunk was on 44667 **/
/** chunk id: 754333, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Y: () => d,
  r: () => u
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk620733 = require("./620733.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let t = (0, a.cf)([o.A], () => o.A.getSessions());
  return r.useMemo(() => {
    let e = [...t],
      n = null,
      r = c.default.getAuthSessionIdHash();
    if (null != r) {
      let t = e.findIndex(t => t.id_hash === r);
      t >= 0 && (n = e.splice(t, 1)[0])
    }
    return e.sort((t, e) => e.approx_last_used_time.valueOf() - t.approx_last_used_time.valueOf()), {
      currentSession: n,
      otherSessions: e
    }
  }, [t])
}

function d(t) {
  return (Date.now() - t.valueOf()) / 1e3 / 60 / 60 < 1 ? l.intl.string(l.t.TXCmfL) : s()(t).fromNow()
}