/** Chunk was on 58121 **/
/** chunk id: 163, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function p(e) {
  i.Z.dispatch({
    type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES",
    guildId: e
  })
}

function h(e) {
  let t = (0, l.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
  return r.useEffect(() => (p(e), () => p(e)), [e]), r.useEffect(() => {
    null != t && (0, c.C1)(e, t)
  }, [e, t]), {
    onChannelClick: r.useCallback((e, t, n) => {
      let r = s.ZP.isChannelOptedIn(e, t),
        l = t === n;
      !r && o.Z.isCollapsed(n) && null != n && (0, a.mJ)(n), (0, d.hi)(e) ? l ? (0, d.rz)(e, {
        include: new Set([t])
      }) : (0, d.rz)(e, {
        exclude: new Set([t])
      }) : (0, c.k$)(e, t, !r, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}