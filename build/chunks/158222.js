/** Chunk was on 11814 (8608d0474a894e52.js) **/
n.d(t, {
  V6: () => c,
  fn: () => l,
  xP: () => s
});
var r = n(544891),
  i = n(570140),
  a = n(881052),
  o = n(981631);

function l(e) {
  i.Z.dispatch({
    type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
    threadId: e
  })
}
async function s(e) {
  i.Z.dispatch({
    type: "MEDIA_POST_EMBED_FETCH",
    threadId: e
  });
  try {
    let t = (await r.tn.get({
      url: o.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e),
      rejectWithError: !0
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
      url: o.ANM.UNFURL_EMBED_URLS,
      body: {
        urls: e
      },
      rejectWithError: !1
    })).body
  } catch (e) {
    throw new a.Hx(e)
  }
}