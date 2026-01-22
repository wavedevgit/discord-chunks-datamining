/** Chunk was on web.js **/
/** chunk id: 51501, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s,
  W: () => o
}), require("./896048.js");
var Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js");
let a = new Set([Chunk652215.ThZ.FRIEND_ANNIVERSARIES_CHAT, Chunk652215.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON, Chunk652215.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK]);

function s(e) {
  return e === r.np.FRIEND_ANNIVERSARY ? {
    chat: i.ThZ.FRIEND_ANNIVERSARIES_CHAT,
    actionButton: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    actionButtonCoachmark: i.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK
  } : {}
}

function o(e) {
  return a.has(e)
}