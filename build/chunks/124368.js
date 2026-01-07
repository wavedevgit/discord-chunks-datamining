/** Chunk was on web.js **/
/** chunk id: 124368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AX: () => a,
  M3: () => s,
  RN: () => _,
  SX: () => p,
  dg: () => c,
  fZ: () => m,
  iN: () => u,
  on: () => d,
  vw: () => o,
  yX: () => l,
  zb: () => f
}), require("./388685.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let a = 4320,
  o = 50,
  s = 1e5,
  l = 50,
  c = 25,
  u = {
    HAS_INTERACTED: 1,
    ALL_MESSAGES: 2,
    ONLY_MENTIONS: 4,
    NO_MESSAGES: 8
  };
var d = function(e) {
  return e.EMBED = "Embed", e.BROWSER = "Thread Browser", e.POPOUT = "Active Threads Popout", e.CHANNEL_LIST = "Channel List", e.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal", e.INBOX = "Inbox", e.FORUM = "Forum", e.VOICE_AUTO_OPEN = "Voice Auto Open", e
}({});

function f() {
  return [{
    setting: u.ALL_MESSAGES,
    label: i.intl.string(i.t["n/bTaY"])
  }, {
    setting: u.ONLY_MENTIONS,
    label: i.intl.format(i.t.L2hmYy, {})
  }, {
    setting: u.NO_MESSAGES,
    label: i.intl.string(i.t.CtVGyQ)
  }]
}
var p = function(e) {
  return e.LATEST_ACTIVITY = "Last Message", e.CREATION_DATE = "Creation", e
}({});
let _ = new Set([Chunk981631.evJ.TOO_MANY_ATTACHMENTS, Chunk981631.evJ.EXPLICIT_CONTENT, Chunk981631.evJ.ENTITY_TOO_LARGE, Chunk981631.evJ.EXPLICIT_CONTENT]),
  m = new Set([Chunk981631.evJ.AUTOMOD_MESSAGE_BLOCKED, Chunk981631.evJ.AUTOMOD_TITLE_BLOCKED])