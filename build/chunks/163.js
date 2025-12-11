/** Chunk was on 58121 **/
/** chunk id: 163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk211739 = require("./211739.js"),
  Chunk680089 = require("./680089.js"),
  Chunk9156 = require("./9156.js"),
  Chunk152376 = require("./152376.js"),
  Chunk724213 = require("./724213.js"),
  Chunk981631 = require("./981631.js");

function b(e) {
  l.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function p(e) {
  let t = (0, r.e7)([c.ZP], () => c.ZP.getPendingChannelUpdates(e));
  return a.useEffect(() => (b(e), () => b(e)), [e]), a.useEffect(() => {
    null != t && (0, d.C1)(e, t)
  }, [e, t]), {
    onChannelClick: a.useCallback((e, t, n) => {
      let a = c.ZP.isChannelOptedIn(e, t),
        r = t === n;
      !a && o.Z.isCollapsed(n) && null != n && (0, i.mJ)(n), (0, s.hi)(e) ? r ? (0, s.rz)(e, {
        include: new Set([t])
      }) : (0, s.rz)(e, {
        exclude: new Set([t])
      }) : (0, d.k$)(e, t, !a, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}