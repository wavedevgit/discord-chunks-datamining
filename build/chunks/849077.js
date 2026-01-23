/** Chunk was on web.js **/
/** chunk id: 849077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EM: () => u,
  Io: () => _,
  Sp: () => l,
  Th: () => y,
  Ur: () => p,
  V$: () => c,
  VA: () => E,
  Ve: () => g,
  XU: () => o,
  Yw: () => f,
  j5: () => d,
  kR: () => b,
  v7: () => m,
  yL: () => h
});
var Chunk927813 = require("./927813.js"),
  Chunk860689 = require("./860689.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = "Notifications Inbox",
  l = 88,
  c = Chunk927813.A.Millis.WEEK,
  u = 50,
  d = "notifications-inbox";

function f(e) {
  return (0, i.yF)({
    id: a.gNP,
    name: "bookmarks" === e ? s.intl.string(s.t["2pAkDA"]) : s.intl.string(s.t.HcoRu0),
    description: "",
    icon: true,
    features: []
  })
}
var p = function(e) {
    return e.UNREAD = "UNREAD", e.TODAY = "TODAY", e.YESTERDAY = "YESTERDAY", e.OLDER = "OLDER", e
  }({}),
  _ = function(e) {
    return e.ALL = "all", e.BOOKMARKS = "bookmarks", e
  }({}),
  h = function(e) {
    return e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL", e.MENTION = "MENTION", e.BOOKMARK = "BOOKMARK", e
  }({});
let m = {
  UNREAD: Chunk985018.t.sRUdB8,
  TODAY: Chunk985018.t.F4jZQs,
  YESTERDAY: Chunk985018.t.gnv4pE,
  OLDER: Chunk985018.t.exrPZv
};
var g = function(e) {
    return e.UNLOADED = "unloaded", e.LOADED = "loaded", e.LOADED_UNREAD = "loadedUnread", e
  }({}),
  E = function(e) {
    return e.AUTO_LOAD = "auto_load", e.ON_OPEN = "on_open", e.FILL_SCROLLER = "fill_scroller", e.USER_SCROLL = "user_scroll", e.UNKNOWN = "unknown", e
  }({}),
  y = function(e) {
    return e.MENTION = "MENTION", e.REPLY = "REPLY", e.REACTION = "REACTION", e.ANNOUNCEMENT = "ANNOUNCEMENT", e.MESSAGE = "MESSAGE", e
  }({}),
  b = function(e) {
    return e.ACK = "ACK", e.BOOKMARK = "BOOKMARK", e.SETTINGS = "SETTINGS", e
  }({})