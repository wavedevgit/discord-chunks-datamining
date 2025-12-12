/** Chunk was on web.js **/
/** chunk id: 158222, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V6: () => c,
  fn: () => s,
  xP: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  i.Z.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function l(e) {
  i.Z.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await r.tn.get({
      url: a.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e),
      rejectWithError: true
    })).body;
    i.Z.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: t
    })
  } catch (t) {
    i.Z.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function c(e) {
  try {
    return (await r.tn.post({
      url: a.ANM.UNFURL_EMBED_URLS,
      body: {
        urls: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new o.Hx(e)
  }
}