/** Chunk was on web.js **/
/** chunk id: 703733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk311687 = require("./311687.js"),
  Chunk873128 = require("./873128.js");

function a(e) {
  let {
    userId: t,
    guildId: n,
    leaderboardId: a,
    intervalOffset: s = 0,
    statisticId: l
  } = e, c = (0, r.e7)([i.Z], () => i.Z.getLastUpdateRequested(a)), u = null != c ? new Date(1e3 * c) : true, d = (0, o.Z)({
    guildId: n,
    leaderboardId: a,
    intervalOffset: s
  }), f = null == d ? true : d.users.find(e => e.user_id === t), _ = null == f ? true : f.statistics[l];
  return {
    lastUpdateRequested: u,
    statisticLastUpdatedDate: null != _ ? new Date(_.updated_at) : true
  }
}