/** Chunk was on 58121 **/
/** chunk id: 163, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
  let n = (0, r.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
  return l.useEffect(() => (m(e), () => m(e)), [e]), l.useEffect(() => {
    null != n && (0, c.C1)(e, n)
  }, [e, n]), {
    onChannelClick: l.useCallback((e, n, t) => {
      let l = s.ZP.isChannelOptedIn(e, n),
        r = n === t;
      !l && o.Z.isCollapsed(t) && null != t && (0, a.mJ)(t), (0, d.hi)(e) ? r ? (0, d.rz)(e, {
        include: new Set([n])
      }) : (0, d.rz)(e, {
        exclude: new Set([n])
      }) : (0, c.k$)(e, n, !l, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}