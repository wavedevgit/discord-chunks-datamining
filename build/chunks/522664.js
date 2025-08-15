/** Chunk was on web.js **/
/** chunk id: 522664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eq: () => o,
  Uj: () => a,
  gx: () => l,
  qO: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n, a) {
  return r.tn.post({
    url: i.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      embed_ids: a
    },
    rejectWithError: false
  })
}

function o(e, t, n, a) {
  return r.tn.post({
    url: i.ANM.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
    body: {
      channel_id: e,
      message_id: t,
      attachment_ids: n,
      filenames: a
    },
    rejectWithError: false
  })
}

function s(e, t) {
  return r.tn.patch({
    url: i.ANM.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
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
  return r.tn.patch({
    url: i.ANM.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
    body: {
      messages: t
    },
    rejectWithError: false
  })
}