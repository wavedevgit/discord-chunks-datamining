/** Chunk was on web.js **/
/** chunk id: 905423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk828700 = require("./828700.js"),
  Chunk524550 = require("./524550.js"),
  Chunk731965 = require("./731965.js"),
  Chunk893607 = require("./893607.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = (0, r.LX)(null != e ? e : "", {
    path: s.Z5c.CHANNEL(o.Hw.guildId(), o.Hw.channelId({
      optional: true
    }), ":messageId?")
  });
  if (null != t) {
    let {
      guildId: e,
      channelId: n
    } = t.params;
    return {
      guildId: e === s.ME ? null : e,
      channelId: null != n ? n : null
    }
  }
  let n = (0, r.LX)(null != e ? e : "", {
    path: s.Z5c.GUILD_BOOSTING_MARKETING(o.Hw.guildId())
  });
  return null != n ? {
    guildId: n.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
let c = (0, Chunk524550.F)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: r
    } = l(t);
    (0, a.j)(() => e({
      path: t,
      guildId: n,
      channelId: r
    }))
  },
  resetPath(t) {
    let {
      guildId: n,
      channelId: r
    } = l(t);
    (0, a.j)(() => e({
      path: null,
      guildId: n,
      channelId: r,
      basePath: t
    }))
  }
}))