/** Chunk was on 47841 **/
/** chunk id: 525104, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk555337 = require("./555337.js"),
  Chunk645619 = require("./645619.js"),
  Chunk743981 = require("./743981.js");

function o() {
  let e = (0, i.bG)([l.A], () => l.A.getGuild()),
    t = (0, i.bG)([s.A], () => {
      var t;
      return null == (t = s.A.getStateForGuild(null == e ? true : e.id)) ? true : t.allPowerups
    });
  return (0, r.useMemo)(() => {
    let n = a.hc.map(e => ({
        kind: e
      })),
      r = [];
    return (null == e ? true : e.features) == null || Object.keys(a.Tf).forEach(i => {
      let l = a.Tf[i],
        s = a.kO[i],
        o = null == t ? true : t[s],
        c = null == o ? true : o.title,
        d = l.map(e => ({
          kind: e,
          packName: c
        }));
      e.features.has(i) ? n.push(...d) : r.push(...d)
    }), {
      unlockedBadges: n,
      lockedBadges: r
    }
  }, [null == e ? true : e.features, t])
}