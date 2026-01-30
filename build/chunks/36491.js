/** Chunk was on 64935 **/
/** chunk id: 36491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L4: () => c,
  O0: () => o,
  sF: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  i.h.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function o(e) {
  i.h.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await r.Bo.get({
      url: a.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(e),
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
      url: a.Rsh.UNFURL_EMBED_URLS,
      body: {
        urls: e
      },
      rejectWithError: false
    })).body
  } catch (e) {
    throw new l.LG(e)
  }
}