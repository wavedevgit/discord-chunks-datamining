/** Chunk was on web.js **/
/** chunk id: 366811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk960488 = require("./960488.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk463347 = require("./463347.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = (0, r.B6)(null != e ? e : "", {
    path: s.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId({
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
  let n = (0, r.B6)(null != e ? e : "", {
    path: s.BVt.GUILD_BOOSTING_MARKETING(o.pv.guildId())
  });
  return null != n ? {
    guildId: n.params.guildId,
    channelId: null
  } : {
    guildId: null,
    channelId: null
  }
}
let c = (0, Chunk265690.h)(e => ({
  path: null,
  basePath: "/",
  guildId: null,
  channelId: null,
  updatePath(t) {
    let {
      guildId: n,
      channelId: r
    } = l(t);
    (0, a.r)(() => e({
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
    (0, a.r)(() => e({
      path: null,
      guildId: n,
      channelId: r,
      basePath: t
    }))
  }
}))