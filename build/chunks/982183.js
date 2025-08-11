/** Chunk was on web.js **/
/** chunk id: 982183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $J: () => l,
  AQ: () => u,
  H_: () => f,
  JP: () => s,
  KZ: () => _,
  Lr: () => d,
  NV: () => g,
  V5: () => p,
  Vv: () => m,
  X: () => b,
  a7: () => E,
  fL: () => h,
  ib: () => c,
  ln: () => y,
  r0: () => O
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

function f() {
  return (0, Chunk411198.yS)({
    id: Chunk981631.STv,
    name: Chunk388032.intl.string(Chunk388032.t.HcoRu7),
    description: "",
    icon: true,
    features: []
  })
}
var _ = function(e) {
    return e.UNREAD = "UNREAD", e.TODAY = "TODAY", e.YESTERDAY = "YESTERDAY", e.OLDER = "OLDER", e
  }({}),
  p = function(e) {
    return e.ALL = "all", e.ANNOUNCEMENTS = "announcements", e.MENTIONS = "mentions", e.BOOKMARKS = "bookmarks", e
  }({}),
  h = function(e) {
    return e.ALL_MESSAGES_CHANNEL = "ALL_MESSAGES_CHANNEL", e.MENTION = "MENTION", e.BOOKMARK = "BOOKMARK", e
  }({});
let m = {
  UNREAD: Chunk388032.t.sRUdBw,
  TODAY: Chunk388032.t.F4jZQk,
  YESTERDAY: Chunk388032.t.gnv4pK,
  OLDER: Chunk388032.t.exrPZm
};

function g() {
  return {
    all: Chunk388032.intl.string(Chunk388032.t.iWyjNj),
    bookmarks: Chunk388032.intl.string(Chunk388032.t["+rlGYW"]),
    announcements: Chunk388032.intl.string(Chunk388032.t.jR39HB),
    mentions: Chunk388032.intl.string(Chunk388032.t["GRZF9/"])
  }
}
var E = function(e) {
    return e.UNLOADED = "unloaded", e.LOADED = "loaded", e.LOADED_UNREAD = "loadedUnread", e
  }({}),
  b = function(e) {
    return e.AUTO_LOAD = "auto_load", e.ON_OPEN = "on_open", e.FILL_SCROLLER = "fill_scroller", e.USER_SCROLL = "user_scroll", e.UNKNOWN = "unknown", e
  }({}),
  y = function(e) {
    return e.MENTION = "MENTION", e.REPLY = "REPLY", e.REACTION = "REACTION", e.ANNOUNCEMENT = "ANNOUNCEMENT", e.MESSAGE = "MESSAGE", e
  }({}),
  O = function(e) {
    return e.ACK = "ACK", e.BOOKMARK = "BOOKMARK", e.SETTINGS = "SETTINGS", e
  }({})