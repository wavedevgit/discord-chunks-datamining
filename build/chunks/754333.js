/** Chunk was on web.js **/
/** chunk id: 754333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => d,
  r: () => u
}), require("./896048.js"), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk620733 = require("./620733.js"),
  Chunk985018 = require("./985018.jsx");

function u() {
  let e = (0, s.cf)([l.A], () => l.A.getSessions());
  return r.useMemo(() => {
    let t = [...e],
      n = null,
      r = o.default.getAuthSessionIdHash();
    if (null != r) {
      let e = t.findIndex(e => e.id_hash === r);
      e >= 0 && (n = t.splice(e, 1)[0])
    }
    return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: n,
      otherSessions: t
    }
  }, [e])
}

function d(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.intl.string(c.t.TXCmfL) : a()(e).fromNow()
}