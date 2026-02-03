/** Chunk was on 44669 **/
/** chunk id: 961291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Pm: () => x,
  rS: () => j,
  rr: () => A,
  sW: () => y,
  yI: () => O
});
var Chunk827734 = require("./827734.js"),
  Chunk322387 = require("./322387.js"),
  Chunk286035 = require("./286035.js"),
  Chunk289876 = require("./289876.js"),
  Chunk31687 = require("./31687.js"),
  Chunk441955 = require("./441955.js"),
  Chunk271764 = require("./271764.js"),
  Chunk790018 = require("./790018.js"),
  Chunk338943 = require("./338943.js"),
  Chunk478772 = require("./478772.js"),
  Chunk846500 = require("./846500.js"),
  Chunk784297 = require("./784297.js"),
  Chunk51213 = require("./51213.js"),
  Chunk194066 = require("./194066.js"),
  Chunk211643 = require("./211643.js");
let A = {
    MISSED_MESSAGES: Chunk784297,
    FRIEND_REQUEST_REMINDER: Chunk338943,
    SCHEDULED_GUILD_EVENT: Chunk271764,
    TOP_MESSAGES: Chunk846500,
    NOTIFICATION_CENTER: Chunk31687,
    UPDATE_PROFILE: require("./566213.js"),
    FIND_FRIENDS: Chunk289876,
    ADD_FRIEND: Chunk289876,
    FIRST_MESSAGE: Chunk194066
  },
  y = e => {
    switch (e.type) {
      case "lifecycle_item":
        switch (e.item_enum) {
          case l.r_.ADD_FRIEND:
            return "ADD_FRIEND";
          case l.r_.FIND_FRIENDS:
            return "FIND_FRIENDS";
          case l.r_.FIRST_MESSAGE:
            return "FIRST_MESSAGE";
          case l.r_.UPDATE_PROFILE:
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
  j = e => {
    switch (e) {
      case l.hW.GO_LIVE_PUSH:
        return {
          icon: b, color: r.A.colors.BACKGROUND_MOD_STRONG
        };
      case l.hW.FRIEND_REQUEST_ACCEPTED:
      case l.hW.GAME_FRIEND_REQUEST_ACCEPTED:
        return {
          icon: o, color: r.A.colors.STATUS_POSITIVE_BACKGROUND
        };
      case l.hW.FRIEND_REQUEST_PENDING:
      case l.hW.FRIEND_SUGGESTION_CREATED:
        return {
          icon: u, color: r.A.colors.BACKGROUND_MOD_STRONG
        };
      case l.hW.DM_FRIEND_NUDGE:
        return {
          icon: f, color: r.A.colors.BACKGROUND_MOD_STRONG
        };
      case l.Uo.INCOMING_FRIEND_REQUESTS:
      case l.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: u, color: r.A.colors.BACKGROUND_MOD_STRONG
        };
      case l.Uo.INCOMING_GAME_FRIEND_REQUESTS:
      case l.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
        return {
          icon: p, color: r.A.colors.BACKGROUND_MOD_STRONG
        };
      default:
        return null
    }
  },
  x = e => {
    switch (e.item_enum) {
      case l.r_.UPDATE_PROFILE:
        return i.Zp;
      case l.r_.ADD_FRIEND:
      case l.r_.FIND_FRIENDS:
        return i.k;
      case l.r_.FIRST_MESSAGE:
        return i.l0;
      default:
        return r.A.unsafe_rawColors.BRAND_500.css
    }
  }