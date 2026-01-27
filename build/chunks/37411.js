/** Chunk was on web.js **/
/** chunk id: 37411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $j: () => h,
  CP: () => u,
  EU: () => f,
  F4: () => _,
  H9: () => d,
  Td: () => l,
  az: () => p,
  cM: () => a,
  kl: () => o,
  oR: () => c,
  su: () => s
}), require("./896048.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
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
let _ = new Set([Chunk652215.t02.TOO_MANY_ATTACHMENTS, Chunk652215.t02.EXPLICIT_CONTENT, Chunk652215.t02.ENTITY_TOO_LARGE, Chunk652215.t02.EXPLICIT_CONTENT]),
  h = new Set([Chunk652215.t02.AUTOMOD_MESSAGE_BLOCKED, Chunk652215.t02.AUTOMOD_TITLE_BLOCKED])