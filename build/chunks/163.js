/** Chunk was on 58121 **/
/** chunk id: 163, original params: e,n,t (module,exports,require) **/
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
  let n = (0, l.e7)([s.ZP], () => s.ZP.getPendingChannelUpdates(e));
  return r.useEffect(() => (p(e), () => p(e)), [e]), r.useEffect(() => {
    null != n && (0, c.C1)(e, n)
  }, [e, n]), {
    onChannelClick: r.useCallback((e, n, t) => {
      let r = s.ZP.isChannelOptedIn(e, n),
        l = n === t;
      !r && o.Z.isCollapsed(t) && null != t && (0, a.mJ)(t), (0, d.hi)(e) ? l ? (0, d.rz)(e, {
        include: new Set([n])
      }) : (0, d.rz)(e, {
        exclude: new Set([n])
      }) : (0, c.k$)(e, n, !r, {
        section: u.jXE.CHANNEL_BROWSER
      })
    }, [])
  }
}