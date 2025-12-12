/** Chunk was on web.js **/
/** chunk id: 216789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GO: () => l,
  IR: () => d,
  Uo: () => c,
  Us: () => u
}), require("./997841.js"), require("./388685.js");
var Chunk95015 = require("./95015.js"),
  Chunk710845 = require("./710845.js"),
  Chunk467798 = require("./467798.js"),
  Chunk215644 = require("./215644.js"),
  Chunk981631 = require("./981631.js");
let l = new Chunk710845.Z("Scheduled Messages");

function c(e) {
  let {
    content: t,
    flags: n
  } = e, [i, o] = (0, a.Z)(t);
  return i ? [o, (0, r.pj)(null != n ? n : 0, s.iLy.SUPPRESS_NOTIFICATIONS)] : [t, null != n ? n : 0]
}

function u(e) {
  let {
    location: t
  } = e;
  return o.Y.useExperiment({
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