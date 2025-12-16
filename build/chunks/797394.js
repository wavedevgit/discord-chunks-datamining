/** Chunk was on web.js **/
/** chunk id: 797394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KF: () => o,
  Lb: () => a,
  Ni: () => s,
  m: () => u,
  v$: () => l,
  xy: () => i,
  zd: () => c
}), require("./388685.js");
var Chunk981631 = require("./981631.js");
let i = 15,
  a = 3,
  o = "1312632705086787756";
var s = function(e) {
  return e[e.MESSAGE = 0] = "MESSAGE", e[e.ACTIVITY = 2] = "ACTIVITY", e[e.CUSTOM_STATUS = 3] = "CUSTOM_STATUS", e[e.GENERATED_CANDIDATE = 4] = "GENERATED_CANDIDATE", e[e.GUILD_EVENT = 5] = "GUILD_EVENT", e[e.RECOMMENDED_GUILDS = 6] = "RECOMMENDED_GUILDS", e
}({});

function l(e) {
  switch (e.type) {
    case 0:
      var t;
      if (e.data.channel_type === r.d4z.GUILD_ANNOUNCEMENT) return "announcement";
      if ((null == (t = e.data.message_context) ? true : t.external_content_application_id) != null) return "game_message";
      return "message";
    case 2:
      return "hotwheels_gaming_activity";
    case 3:
      return "hotwheels_custom_status";
    case 5:
      return "guild_event";
    case 6:
      return "recommended_guilds";
    case 4:
      return "generated_candidate"
  }
}
let c = new Set([0, 3, 4]);
Chunk981631.hBH.IMAGE, Chunk981631.hBH.GIFV;
var u = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.BOOKMARKS = 2] = "BOOKMARKS", e
}({})