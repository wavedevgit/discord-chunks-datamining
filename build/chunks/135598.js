/** Chunk was on web.js **/
/** chunk id: 135598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XR: () => a,
  j1: () => o,
  jd: () => l,
  wV: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n, a) {
  return r.Bo.post({
    url: i.Rsh.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      embed_ids: a
    },
    rejectWithError: false
  })
}

function s(e, t, n, a) {
  return r.Bo.post({
    url: i.Rsh.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      filenames: a
    },
    rejectWithError: false
  })
}

function o(e, t) {
  return r.Bo.patch({
    url: i.Rsh.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
    body: {
      message_ids: t
    },
    rejectWithError: false
  })
}

function l(e) {
  let t = e.map(e => ({
    channel_id: e.channel_id,
    message_id: e.id
  }));
  return r.Bo.patch({
    url: i.Rsh.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
    body: {
      messages: t
    },
    rejectWithError: false
  })
}