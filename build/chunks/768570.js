/** Chunk was on web.js **/
/** chunk id: 768570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => u,
  B7: () => d,
  Q_: () => f,
  nC: () => o,
  oi: () => a,
  su: () => c,
  us: () => l,
  yQ: () => s
}), require("./896048.js");
var Chunk461012 = require("./461012.js"),
  Chunk652215 = require("./652215.js"),
  a = function(e) {
    return e.KEY_PRESS = "key_press", e.CLICK = "click", e
  }({});
let o = "SearchStore",
  s = "SearchHistoryStore_Web",
  l = {
    sort_by: "timestamp",
    sort_order: "desc"
  },
  c = {
    1: {
      has: ["image", "video"]
    },
    3: {
      has: ["file"]
    },
    0: {},
    2: {
      has: ["link"]
    },
    4: {
      pinned: true
    }
  };
var u = function(e) {
  return e.RECENT = "recent", e.MEMBERS = "members", e.PEOPLE = "people", e.MEDIA = "media", e.PINS = "pins", e.MESSAGES = "messages", e.LINKS = "links", e.FILES = "files", e.GUILD_CHANNELS = "guild_channels", e.THREADS = "threads", e
}({});
let d = {
  recent: 1,
  media: 1,
  pins: 4,
  messages: 0,
  links: 2,
  files: 3
};
Chunk652215.I4_.THREAD, Chunk652215.I4_.CHANNEL, Chunk652215.I4_.GUILD_CHANNEL, Chunk652215.I4_.GUILD, Chunk652215.I4_.DMS, Chunk652215.I4_.FAVORITES, Chunk652215.I4_.THREAD, Chunk652215.I4_.CHANNEL, Chunk652215.I4_.GUILD_CHANNEL, Chunk652215.I4_.GUILD, Chunk652215.I4_.DMS, Chunk652215.I4_.FAVORITES, Chunk461012.b.COZY;
var f = function(e) {
  return e.SEARCH_TEXT_INPUT = "search_text_input", e.SEARCH_POPOUT = "search_popout", e.SEARCH_FILTERS_MODAL = "search_filters_modal", e.SEARCH_XDM_SETTINGS = "search_xdm_settings", e
}({})