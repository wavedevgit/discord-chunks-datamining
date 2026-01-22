/** Chunk was on web.js **/
/** chunk id: 744216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => s
});
var Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  r.h.dispatch({
    type: "MESSAGE_CREATE",
    channelId: e,
    message: o({
      channelId: e,
      requesterUser: t,
      requestToSpeakTimestamp: n
    }),
    optimistic: false,
    sendMessageOptions: {},
    isPushNotification: false
  })
}

function o(e) {
  let {
    channelId: t,
    requesterUser: n,
    requestToSpeakTimestamp: r
  } = e;
  return {
    id: i.default.fromTimestamp(Date.parse(r)),
    type: a.lAJ.STAGE_RAISE_HAND,
    flags: a.pr7.EPHEMERAL,
    content: "",
    channel_id: t,
    author: n,
    attachments: [],
    embeds: [],
    pinned: false,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: r,
    state: a.cmJ.SENT,
    tts: false
  }
}