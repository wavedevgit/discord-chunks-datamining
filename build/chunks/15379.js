/** Chunk was on web.js **/
/** chunk id: 15379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
}), require("./415506.js");
var Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function s(e, t) {
  let n;
  switch (e) {
    case a.rMx.CHANNEL_OPENED_CLICKSTREAM:
      var s, l;
      let c = (n = t).channelId;
      switch (c) {
        case o.oC.CHANNEL_BROWSER:
        case o.oC.GUILD_HOME:
        case o.oC.GUILD_SHOP:
        case o.oC.GAME_SHOP:
        case o.oC.MEMBER_APPLICATIONS:
        case o.oC.ROLE_SUBSCRIPTIONS:
        case o.oC.CUSTOMIZE_COMMUNITY:
        case o.oC.MEMBER_SAFETY:
        case o.oC.GUILD_ONBOARDING:
        case o.oC.GUILD_BOOSTS:
          return
      }
      let u = null != (l = null == (s = r.Z.getChannel(c)) ? true : s.type) ? l : a.d4z.UNKNOWN;
      return {
        timestamp: new Date, rtc_state: i.Z.getState(), channelId: c, channelType: u
      };
    case a.rMx.GUILD_VIEWED_CLICKSTREAM:
      let d = (n = t).guildId;
      return {
        timestamp: new Date, rtc_state: i.Z.getState(), guildId: d
      };
    case a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: i.Z.getState(),
        tab_opened: n.tab_opened,
        num_friends: n.num_friends,
        now_playing_visible: n.now_playing_visible,
        now_playing_num_cards: n.now_playing_num_cards
      };
    case a.rMx.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: i.Z.getState(),
        load_duration_ms: n.load_duration_ms,
        were_messages_cached: n.were_messages_cached,
        is_first_load: n.is_first_load
      };
    default:
      throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
  }
}