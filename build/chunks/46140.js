/** Chunk was on web.js **/
/** chunk id: 46140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dp: () => E,
  Jp: () => S,
  Lv: () => I,
  NH: () => m,
  Ot: () => u,
  R4: () => f,
  S7: () => Chunk670081.S,
  Ts: () => g,
  Uo: () => h,
  V6: () => y,
  V_: () => b,
  XZ: () => d,
  a_: () => Chunk438954.a,
  cd: () => _,
  dr: () => c,
  l$: () => v,
  tD: () => p,
  tt: () => T,
  v6: () => O
}), require("./388685.js");
var Chunk754700 = require("./754700.js"),
  Chunk758846 = require("./758846.js"),
  Chunk70956 = require("./70956.js"),
  Chunk497505 = require("./497505.js"),
  Chunk438954 = require("./438954.js"),
  Chunk670081 = require("./670081.js"),
  c = function(e) {
    return e.ACTIVITY_PANEL = "quests_bar_activity_panel", e.QUESTS_MANAGER = "quests_manager", e.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = "quests_console_optimistic_updates_manager", e.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", e.USER_SETTINGS_SEARCH_GIFT_INVENTORY = "user_settings_search_gift_inventory", e.USE_QUESTS = "use_quests", e.STREAM_SOURCE_SELECT = "stream_source_select", e.MEMBERS_LIST = "members_list", e.QUESTS_BAR = "quests_bar", e.QUESTS_BAR_MOBILE = "quests_bar_mobile", e.REWARD_CODE_MODAL = "reward_code_modal", e.INGAME_REWARD_MODAL = "ingame_reward_modal", e.COLLECTIBLE_REWARD_MODAL = "collectible_reward_modal", e.QUEST_PREVIEW_TOOL = "quest_preview_tool", e.QUESTS_MINOR_REWARD_CAPPING_CONFIG = "QUESTS_MINOR_REWARD_CAPPING_CONFIG", e.QUESTS_CARD = "quests_card", e.QUESTS_STORE = "quests_store", e.QUEST_CHANNEL_CALL_HEADER = "quests_channel_call_header", e.QUEST_HOME_DESKTOP = "quest_home_desktop", e.QUEST_HOME_MOBILE = "quest_home_mobile", e.QUEST_PROGRESS_BAR = "quest_progress_bar", e.EMBED_MOBILE = "embed_mobile", e.EMBED_DESKTOP = "embed_desktop", e.QUEST_CONTEXT_MENU = "context_menu", e.CODED_LINK = "coded_link", e.QUEST_DISCLOSURE_MODAL = "quest_disclosure_modal", e.DISCOVERY_SIDEBAR = "discovery_sidebar", e.DISCOVERY_COMPASS = "discovery_compass", e.BADGE = "badge", e.VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK = "virtual_currency_earned_orbs_coachmark", e.COLLECTIBLES_SHOP_HEADER_BAR = "collectibles_shop_header_bar", e.ORBS_ANNOUNCEMENT_MODAL = "orbs_announcement_modal", e.CONFLICT_CHECKS = "conflict_checks", e.VIDEO_MODAL = "video_modal", e.VIDEO_MODAL_MOBILE = "video_modal_mobile", e
  }({});
let u = Chunk70956.Z.Millis.MINUTE * Chunk758846.c.ConsecutiveHeartbeatPeriodMinutes,
  d = {
    tension: 900,
    friction: 45,
    clamp: true
  },
  f = {
    tension: 360,
    friction: 30,
    clamp: true
  };
var _ = function(e) {
  return e.CONSOLE = "CONSOLE", e.DESKTOP = "DESKTOP", e
}({});
let p = "https://cdn.discordapp.com/quests/",
  h = "https://cdn.discordapp.com/assets/quests/";
var m = function(e) {
  return e.COLLAPSED = "collapsed", e.EXPANDED = "expanded", e.CLOSED = "closed", e.SOFT_DISMISSED = "soft-dismissed", e.RESET_TO_PREVIOUS = "reset-to-previous", e
}({});
let g = "545364944258990091",
  E = "{reward_code}";
var b = function(e) {
  return e.EXCLUDED_QUEST = "excluded_quest", e.UNKNOWN_QUEST = "unknown_quest", e
}({});
let y = "1333839522189938740",
  O = new Set([Chunk497505.Ok.DESKTOP_ACCOUNT_PANEL_AREA, Chunk497505.Ok.MOBILE_HOME_DOCK_AREA]),
  v = new Set([Chunk754700.X.STREAM_ON_DESKTOP, Chunk754700.X.PLAY_ON_DESKTOP, Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION, Chunk754700.X.PLAY_ON_DESKTOP_V2]),
  I = new Set([Chunk754700.X.STREAM_ON_DESKTOP, Chunk754700.X.PLAY_ON_DESKTOP, Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION, Chunk754700.X.PLAY_ON_DESKTOP_V2]),
  T = new Set([Chunk754700.X.STREAM_ON_DESKTOP, Chunk754700.X.PLAY_ON_DESKTOP, Chunk754700.X.PLAY_ON_XBOX, Chunk754700.X.PLAY_ON_PLAYSTATION, Chunk754700.X.PLAY_ON_DESKTOP_V2]),
  S = {
    is_targeted: false
  }