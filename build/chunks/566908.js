/** Chunk was on web.js **/
/** chunk id: 566908, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lg: () => d,
  Sc: () => u,
  UF: () => c,
  dx: () => l
}), require("./938796.js"), require("./896048.js");
var Chunk665260 = require("./665260.js"),
  Chunk626584 = require("./626584.js"),
  Chunk677413 = require("./677413.js"),
  Chunk403531 = require("./403531.js"),
  Chunk652215 = require("./652215.js");
let l = new Chunk626584.A("Scheduled Messages");

function c(e) {
  let {
    content: t,
    flags: n
  } = e, [i, o] = (0, a.A)(t);
  return i ? [o, (0, r.UI)(null != n ? n : 0, s.pr7.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0]
}

function u(e) {
  let {
    location: t
  } = e;
  return o.t.useExperiment({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}

function d(e) {
  return {
    userId: e.user_id,
    scheduledMessageId: e.scheduled_message_id,
    sendAtTimestamp: e.send_at_timestamp,
    scheduledMessage: f(e.scheduled_message),
    state: e.state
  }
}

function f(e) {
  return {
    channelId: e.channel_id,
    content: e.content,
    type: e.type,
    flags: e.flags,
    messageReference: e.message_reference
  }
}