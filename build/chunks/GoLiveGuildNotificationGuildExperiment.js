/** Chunk was on web.js **/
/** chunk id: 842179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LQ: () => c,
  oZ: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js");
let o = (0, Chunk600975.C)({
  kind: "guild",
  id: "2025-08_go_live_guild_notification",
  label: "Go live notification guild experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Go live notification on by default",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "Go live notification includes game data if available",
    config: {
      enabled: true
    }
  }]
});

function l(e) {
  let {
    guildId: t,
    location: n
  } = e;
  return null != t && o.getCurrentConfig({
    guildId: t,
    location: n
  }).enabled
}

function c(e, t) {
  let n = e;
  if (null == n) {
    if (null == s.default.getCurrentUser()) returnfalse;
    n = a.A.getVoiceChannelId()
  }
  if (null == n) returnfalse;
  let r = i.A.getChannel(n);
  return l({
    guildId: null == r ? true : r.guild_id,
    location: t
  })
}