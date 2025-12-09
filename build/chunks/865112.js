/** Chunk was on 83037 **/
/** chunk id: 865112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RB: () => O,
  VH: () => _,
  Vi: () => v,
  Vu: () => j,
  q7: () => y
});
var Chunk692547 = require("./692547.js"),
  Chunk497089 = require("./497089.js"),
  Chunk650473 = require("./650473.js"),
  Chunk389765 = require("./389765.js"),
  Chunk137492 = require("./137492.js"),
  Chunk387661 = require("./387661.js"),
  Chunk659953 = require("./659953.js"),
  Chunk319707 = require("./319707.js"),
  Chunk584914 = require("./584914.js"),
  Chunk962575 = require("./962575.js"),
  Chunk334702 = require("./334702.js"),
  Chunk333722 = require("./333722.js"),
  Chunk549931 = require("./549931.js"),
  Chunk178561 = require("./178561.js"),
  Chunk39863 = require("./39863.js");
let _ = {
    MISSED_MESSAGES: Chunk333722,
    FRIEND_REQUEST_REMINDER: Chunk584914,
    SCHEDULED_GUILD_EVENT: Chunk659953,
    TOP_MESSAGES: Chunk334702,
    NOTIFICATION_CENTER: Chunk137492,
    UPDATE_PROFILE: require("./130312.js"),
    FIND_FRIENDS: Chunk389765,
    ADD_FRIEND: Chunk389765,
    FIRST_MESSAGE: Chunk178561
  },
  y = e => {
    switch (e.type) {
      case "lifecycle_item":
        switch (e.item_enum) {
          case i.AM.ADD_FRIEND:
            return "ADD_FRIEND";
          case i.AM.FIND_FRIENDS:
            return "FIND_FRIENDS";
          case i.AM.FIRST_MESSAGE:
            return "FIRST_MESSAGE";
          case i.AM.UPDATE_PROFILE:
            return "UPDATE_PROFILE";
          default:
            return "NOTIFICATION_CENTER"
        }
      case "missed_messages":
        return "MISSED_MESSAGES";
      case "friend_request_reminder":
        return "FRIEND_REQUEST_REMINDER";
      case "scheduled_guild_event_started":
        return "SCHEDULED_GUILD_EVENT";
      case "top_messages":
        return "TOP_MESSAGES";
      default:
        return "NOTIFICATION_CENTER"
    }
  },
  O = e => "icHighlight" === e ? "TOP_MESSAGES" : "NOTIFICATION_CENTER",
  v = e => {
    switch (e) {
      case i.DY.GO_LIVE_PUSH:
        return {
          icon: b, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case i.DY.FRIEND_REQUEST_ACCEPTED:
      case i.DY.GAME_FRIEND_REQUEST_ACCEPTED:
        return {
          icon: s, color: r.Z.colors.STATUS_POSITIVE_BACKGROUND
        };
      case i.DY.FRIEND_REQUEST_PENDING:
      case i.DY.FRIEND_SUGGESTION_CREATED:
        return {
          icon: u, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case i.DY.DM_FRIEND_NUDGE:
        return {
          icon: g, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case i.O7.INCOMING_FRIEND_REQUESTS:
      case i.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: u, color: r.Z.colors.BACKGROUND_ACCENT
        };
      case i.O7.INCOMING_GAME_FRIEND_REQUESTS:
      case i.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: f, color: r.Z.colors.BACKGROUND_ACCENT
        };
      default:
        return null
    }
  },
  j = e => {
    switch (e.item_enum) {
      case i.AM.UPDATE_PROFILE:
        return l.Y9;
      case i.AM.ADD_FRIEND:
      case i.AM.FIND_FRIENDS:
        return l.AZ;
      case i.AM.FIRST_MESSAGE:
        return l.bj;
      default:
        return r.Z.unsafe_rawColors.BRAND_500.css
    }
  }