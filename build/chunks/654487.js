/** Chunk was on web.js **/
/** chunk id: 654487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B3: () => N,
  BQ: () => L,
  CI: () => E,
  Fw: () => v,
  GD: () => g,
  J6: () => C,
  K3: () => P,
  Ko: () => _,
  Li: () => u.L,
  Ls: () => R,
  Pc: () => x,
  TY: () => c.T,
  WQ: () => M,
  ZV: () => p,
  aJ: () => S,
  eA: () => A,
  ej: () => y,
  fO: () => h,
  fP: () => b,
  gB: () => I,
  hK: () => T,
  kL: () => D,
  mg: () => O,
  pc: () => U,
  rE: () => d,
  tZ: () => f,
  zO: () => w
}), require("./896048.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  Chunk412703 = require("./412703.js"),
  Chunk257280 = require("./257280.js"),
  Chunk562465 = require("./562465.js"),
  Chunk927813 = require("./927813.js"),
  Chunk341915 = require("./341915.js"),
  Chunk557567 = require("./557567.js"),
  Chunk902173 = require("./902173.js"),
  d = function(e) {
    return e.ACTIVITY_PANEL = "quests_bar_activity_panel", e.QUESTS_MANAGER = "quests_manager", e.QUESTS_CONSOLE_OPTIMISTIC_UPDATES_MANAGER = "quests_console_optimistic_updates_manager", e.USER_SETTINGS_GIFT_INVENTORY = "user_settings_gift_inventory", e.USER_SETTINGS_SEARCH_GIFT_INVENTORY = "user_settings_search_gift_inventory", e.USE_QUESTS = "use_quests", e.STREAM_SOURCE_SELECT = "stream_source_select", e.MEMBERS_LIST = "members_list", e.QUESTS_BAR = "quests_bar", e.QUESTS_BAR_MOBILE = "quests_bar_mobile", e.REWARD_CODE_MODAL = "reward_code_modal", e.INGAME_REWARD_MODAL = "ingame_reward_modal", e.COLLECTIBLE_REWARD_MODAL = "collectible_reward_modal", e.ORBS_REWARD_MODAL = "orbs_reward_modal", e.QUEST_PREVIEW_TOOL = "quest_preview_tool", e.QUEST_PREVIEW_TOOL_2 = "quest_preview_tool_2", e.QUESTS_MINOR_REWARD_CAPPING_CONFIG = "QUESTS_MINOR_REWARD_CAPPING_CONFIG", e.QUESTS_CARD = "quests_card", e.QUESTS_STORE = "quests_store", e.QUEST_CHANNEL_CALL_HEADER = "quests_channel_call_header", e.QUEST_HOME_DESKTOP = "quest_home_desktop", e.QUEST_HOME_MOBILE = "quest_home_mobile", e.QUEST_PROGRESS_BAR = "quest_progress_bar", e.EMBED_MOBILE = "embed_mobile", e.EMBED_DESKTOP = "embed_desktop", e.QUEST_CONTEXT_MENU = "context_menu", e.CODED_LINK = "coded_link", e.QUEST_DISCLOSURE_MODAL = "quest_disclosure_modal", e.DISCOVERY_SIDEBAR = "discovery_sidebar", e.DISCOVERY_COMPASS = "discovery_compass", e.BADGE = "badge", e.COLLECTIBLES_SHOP_HEADER_BAR = "collectibles_shop_header_bar", e.ORBS_ANNOUNCEMENT_MODAL = "orbs_announcement_modal", e.CONFLICT_CHECKS = "conflict_checks", e.VIDEO_MODAL = "video_modal", e.VIDEO_MODAL_MOBILE = "video_modal_mobile", e.GAME_WIDGETS_POPOVER = "game_widgets_popover", e.PRIVATE_CHANNELS_LIST = "private_channels_list", e.INTERNAL_TOOLING = "internal_tooling", e.QUEST_HOME_MOVED_CALLOUT = "quest_home_moved_callout", e.IN_APP_NAVIGATION = "in_app_navigation", e.NAVIGATE_TO_QUEST_HOME_UTIL = "navigate_to_quest_home_util", e.QUEST_DEEP_LINK_UTIL = "quest_deep_link_util", e.YOU_TAB_PROFILE_HEADER = "you_tab_profile_header", e
  }({});
let f = Chunk927813.A.Millis.MINUTE * Chunk257280.K.ConsecutiveHeartbeatPeriodMinutes,
  p = {
    tension: 900,
    friction: 45,
    clamp: true
  },
  _ = {
    tension: 360,
    friction: 30,
    clamp: true
  };
var h = function(e) {
  return e.CONSOLE = "CONSOLE", e.DESKTOP = "DESKTOP", e
}({});
let m = (0, Chunk562465.TP)(),
  g = false !== m.indexOf("localhost") || false !== m.indexOf("127.0.0.1") ? "".concat(m, "/_cdn_storage/") : "https://cdn.discordapp.com/",
  E = g + "quests/";
var b = function(e) {
  return e.COLLAPSED = "collapsed", e.EXPANDED = "expanded", e.CLOSED = "closed", e.SOFT_DISMISSED = "soft-dismissed", e.RESET_TO_PREVIOUS = "reset-to-previous", e
}({});
let y = "545364944258990091",
  O = "{reward_code}";
var A = function(e) {
  return e.EXCLUDED_QUEST = "excluded_quest", e.UNKNOWN_QUEST = "unknown_quest", e.NOT_SHAREABLE_QUEST = "not_shareable_quest", e
}({});
let v = "1333839522189938740",
  S = "1410358070831480904",
  I = "1420556874629251124",
  T = "1402418703554842694",
  C = new Set([Chunk341915.yW.DESKTOP_ACCOUNT_PANEL_AREA, Chunk341915.yW.MOBILE_HOME_DOCK_AREA]),
  N = new Set([Chunk412703.n.STREAM_ON_DESKTOP, Chunk412703.n.PLAY_ON_DESKTOP, Chunk412703.n.PLAY_ON_XBOX, Chunk412703.n.PLAY_ON_PLAYSTATION, Chunk412703.n.PLAY_ON_DESKTOP_V2, Chunk412703.n.PLAY_ACTIVITY]),
  R = new Set([Chunk412703.n.STREAM_ON_DESKTOP, Chunk412703.n.PLAY_ON_DESKTOP, Chunk412703.n.PLAY_ON_XBOX, Chunk412703.n.PLAY_ON_PLAYSTATION, Chunk412703.n.PLAY_ON_DESKTOP_V2, Chunk412703.n.PLAY_ACTIVITY]),
  w = new Set([Chunk412703.n.STREAM_ON_DESKTOP, Chunk412703.n.PLAY_ON_DESKTOP, Chunk412703.n.PLAY_ON_XBOX, Chunk412703.n.PLAY_ON_PLAYSTATION, Chunk412703.n.PLAY_ON_DESKTOP_V2, Chunk412703.n.PLAY_ACTIVITY]),
  P = {
    is_targeted: false
  };
var D = function(e) {
    return e.SUGGESTED = "suggested", e.MOST_RECENT = "most_recent", e.EXPIRING_SOON = "expiring_soon", e.RECENTLY_ENROLLED = "recently_enrolled", e
  }({}),
  x = function(e) {
    return e.VIDEO = "task_video", e.PLAY = "task_play", e
  }({}),
  L = function(e) {
    return e.VIRTUAL_CURRENCY = "reward_virtual_currency", e.COLLECTIBLE = "reward_collectible", e.IN_GAME = "reward_in_game", e
  }({});
let j = [{
  group: "task",
  filter: "task_play"
}, {
  group: "task",
  filter: "task_video"
}, {
  group: "reward",
  filter: "reward_virtual_currency"
}, {
  group: "reward",
  filter: "reward_collectible"
}, {
  group: "reward",
  filter: "reward_in_game"
}];

function M(e) {
  return Object.values(x).includes(e) ? {
    group: "task",
    filter: e
  } : Object.values(L).includes(e) ? {
    group: "reward",
    filter: e
  } : null
}
let k = ["reward", "task"],
  U = Object.entries((0, Chunk735438.groupBy)(j, "group")).sort((e, t) => {
    let n = k.indexOf(e[0]),
      r = k.indexOf(t[0]);
    return n < r ? false : +(r < n)
  })