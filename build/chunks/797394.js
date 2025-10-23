/** Chunk was on 9797 **/
/** chunk id: 797394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KF: () => o,
  Lb: () => s,
  Ni: () => c,
  m: () => h,
  v$: () => u,
  xy: () => i,
  zd: () => d
}), require("./388685.js");
var a, l, Chunk981631 = require("./981631.js");
let i = 15,
  s = 3,
  o = "1312632705086787756";
var c = 12633 == require.j ? ((a = {})[a.MESSAGE = 0] = "MESSAGE", a[a.SUMMARY = 1] = "SUMMARY", a[a.ACTIVITY = 2] = "ACTIVITY", a[a.CUSTOM_STATUS = 3] = "CUSTOM_STATUS", a[a.GENERATED_CANDIDATE = 4] = "GENERATED_CANDIDATE", a[a.GUILD_EVENT = 5] = "GUILD_EVENT", a[a.RECOMMENDED_GUILDS = 6] = "RECOMMENDED_GUILDS", a) : null;

function u(e) {
  switch (e.type) {
    case 0:
      var t;
      if (e.data.channel_type === r.d4z.GUILD_ANNOUNCEMENT) return "announcement";
      if ((null == (t = e.data.message_context) ? true : t.external_content_application_id) != null) return "game_message";
      return "message";
    case 1:
      return "summary";
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
let d = new Set([0, 1, 3, 4]);
Chunk981631.hBH.IMAGE, Chunk981631.hBH.GIFV;
var h = 12633 == require.j ? ((l = {})[l.DEFAULT = 0] = "DEFAULT", l[l.BOOKMARKS = 2] = "BOOKMARKS", l) : null