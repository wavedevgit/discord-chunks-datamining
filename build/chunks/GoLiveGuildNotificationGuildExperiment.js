/** Chunk was on web.js **/
/** chunk id: 992817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $s: () => c,
  Bx: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js");
let s = (0, Chunk818083.B)({
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
  return null != t && s.getCurrentConfig({
    guildId: t,
    location: n
  }).enabled
}

function c(e, t) {
  let n = e;
  if (null == n) {
    if (null == a.default.getCurrentUser()) returnfalse;
    n = o.Z.getVoiceChannelId()
  }
  if (null == n) returnfalse;
  let r = i.Z.getChannel(n);
  return l({
    guildId: null == r ? true : r.guild_id,
    location: t
  })
}