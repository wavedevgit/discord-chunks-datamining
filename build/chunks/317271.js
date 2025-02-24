/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  F: () => a,
  n: () => s
}), n(47120);
var r = n(474936),
  i = n(981631);
let o = new Set([i.Sbl.FRIEND_ANNIVERSARIES_CHAT, i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON, i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK]);

function a(e) {
  return e === r.hX.FRIEND_ANNIVERSARY ? {
    chat: i.Sbl.FRIEND_ANNIVERSARIES_CHAT,
    actionButton: i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    actionButtonCoachmark: i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK
  } : {}
}

function s(e) {
  return o.has(e)
}