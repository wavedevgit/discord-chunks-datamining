/** Chunk was on web.js **/
/** chunk id: 315935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
}), require("./65821.js");
var Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function s(e, t) {
  let n;
  switch (e) {
    case a.HAw.CHANNEL_OPENED_CLICKSTREAM:
      var s, l;
      let c = (n = t).channelId;
      switch (c) {
        case o.VV.CHANNEL_BROWSER:
        case o.VV.GUILD_HOME:
        case o.VV.GUILD_SHOP:
        case o.VV.GAME_SHOP:
        case o.VV.MEMBER_APPLICATIONS:
        case o.VV.ROLE_SUBSCRIPTIONS:
        case o.VV.CUSTOMIZE_COMMUNITY:
        case o.VV.MEMBER_SAFETY:
        case o.VV.GUILD_ONBOARDING:
        case o.VV.GUILD_BOOSTS:
          return
      }
      let u = null != (s = null == (l = r.A.getChannel(c)) ? true : l.type) ? s : a.rbe.UNKNOWN;
      return {
        timestamp: new Date, rtc_state: i.A.getState(), channelId: c, channelType: u
      };
    case a.HAw.GUILD_VIEWED_CLICKSTREAM:
      let d = (n = t).guildId;
      return {
        timestamp: new Date, rtc_state: i.A.getState(), guildId: d
      };
    case a.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: i.A.getState(),
        tab_opened: n.tab_opened,
        num_friends: n.num_friends,
        now_playing_visible: n.now_playing_visible,
        now_playing_num_cards: n.now_playing_num_cards
      };
    case a.HAw.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM:
      return n = t, {
        timestamp: new Date,
        rtc_state: i.A.getState(),
        load_duration_ms: n.load_duration_ms,
        were_messages_cached: n.were_messages_cached,
        is_first_load: n.is_first_load
      };
    default:
      throw Error("getClickstreamTrackEvent: Unknown event: ".concat(e))
  }
}