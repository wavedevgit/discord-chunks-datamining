/** Chunk was on web.js **/
/** chunk id: 982183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $J: () => l,
  AQ: () => u,
  H_: () => f,
  JP: () => s,
  KZ: () => p,
  Lr: () => d,
  V5: () => _,
  Vv: () => h,
  X: () => E,
  a7: () => g,
  fL: () => m,
  ib: () => c,
  ln: () => b,
  r0: () => y
});
var Chunk70956 = require("./70956.js"),
  Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let s = "Notifications Inbox",
  l = 88,
  c = Chunk70956.Z.Millis.WEEK,
  u = 50,
  d = "notifications-inbox";

function f(e) {
  return (0, i.yS)({
    id: o.STv,
    name: "bookmarks" === e ? a.intl.string(a.t["2pAkDA"]) : a.intl.string(a.t.HcoRu0),
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
  m = function(e) {
    return e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL", e.MENTION = "MENTION", e.BOOKMARK = "BOOKMARK", e
  }({});
let h = {
  UNREAD: Chunk388032.t.sRUdB8,
  TODAY: Chunk388032.t.F4jZQs,
  YESTERDAY: Chunk388032.t.gnv4pE,
  OLDER: Chunk388032.t.exrPZv
};
var g = function(e) {
    return e.UNLOADED = "unloaded", e.LOADED = "loaded", e.LOADED_UNREAD = "loadedUnread", e
  }({}),
  E = function(e) {
    return e.AUTO_LOAD = "auto_load", e.ON_OPEN = "on_open", e.FILL_SCROLLER = "fill_scroller", e.USER_SCROLL = "user_scroll", e.UNKNOWN = "unknown", e
  }({}),
  b = function(e) {
    return e.MENTION = "MENTION", e.REPLY = "REPLY", e.REACTION = "REACTION", e.ANNOUNCEMENT = "ANNOUNCEMENT", e.MESSAGE = "MESSAGE", e
  }({}),
  y = function(e) {
    return e.ACK = "ACK", e.BOOKMARK = "BOOKMARK", e.SETTINGS = "SETTINGS", e
  }({})