/** Chunk was on web.js **/
/** chunk id: 96052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => a
});
var Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  r.Z.dispatch({
    type: "MESSAGE_CREATE",
    channelId: e,
    message: s({
      channelId: e,
      requesterUser: t,
      requestToSpeakTimestamp: n
    }),
    optimistic: false,
    sendMessageOptions: {},
    isPushNotification: false
  })
}

function s(e) {
  let {
    channelId: t,
    requesterUser: n,
    requestToSpeakTimestamp: r
  } = e;
  return {
    id: i.default.fromTimestamp(Date.parse(r)),
    type: o.uaV.STAGE_RAISE_HAND,
    flags: o.iLy.EPHEMERAL,
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
    state: o.yb.SENT,
    tts: false
  }
}