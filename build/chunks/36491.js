/** Chunk was on web.js **/
/** chunk id: 36491, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L4: () => c,
  O0: () => l,
  sF: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  i.h.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function l(e) {
  i.h.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await r.Bo.get({
      url: s.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(e),
      rejectWithError: true
    })).body;
    i.h.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
      threadId: e,
      mediaPostEmbed: t
    })
  } catch (t) {
    i.h.dispatch({
      type: "MEDIA_POST_EMBED_FETCH_FAILURE",
      threadId: e
    })
  }
}
async function c(e) {
  try {
    return (await r.Bo.post({
      url: s.Rsh.UNFURL_EMBED_URLS,
      body: {
        urls: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new a.LG(e)
  }
}