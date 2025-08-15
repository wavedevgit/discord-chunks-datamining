/** Chunk was on web.js **/
/** chunk id: 317271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => o,
  n: () => s
}), require("./388685.js");
var Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js");
let a = new Set([Chunk981631.Sbl.FRIEND_ANNIVERSARIES_CHAT, Chunk981631.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON, Chunk981631.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK]);

function o(e) {
  return e === r.hX.FRIEND_ANNIVERSARY ? {
    chat: i.Sbl.FRIEND_ANNIVERSARIES_CHAT,
    actionButton: i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
    actionButtonCoachmark: i.Sbl.FRIEND_ANNIVERSARIES_ACTION_BUTTON_COACHMARK
  } : {}
}

function s(e) {
  return a.has(e)
}