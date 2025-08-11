/** Chunk was on 58121 **/
/** chunk id: 163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk211739 = require("./211739.js"),
  Chunk680089 = require("./680089.js"),
  Chunk9156 = require("./9156.js"),
  Chunk152376 = require("./152376.js"),
  Chunk724213 = require("./724213.js"),
  Chunk981631 = require("./981631.js");

function m(e) {
  i.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function h(e) {
  let t = (0, r.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
  return l.useEffect(() => (m(e), () => m(e)), [e]), l.useEffect(() => {
    null != t && (0, c.C1)(e, t)
  }, [e, t]), {
    onChannelClick: l.useCallback((e, t, n) => {
      let l = s.ZP.isChannelOptedIn(e, t),
        r = t === n;
      !l && o.Z.isCollapsed(n) && null != n && (0, a.mJ)(n), (0, d.hi)(e) ? r ? (0, d.rz)(e, {
        include: new Set([t])
      }) : (0, d.rz)(e, {
        exclude: new Set([t])
      }) : (0, c.k$)(e, t, !l, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}