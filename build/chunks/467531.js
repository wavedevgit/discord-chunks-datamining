/** Chunk was on web.js **/
/** chunk id: 467531, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a,
  W: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js");
async function a(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: a
  } = e;
  try {
    let e = {
      answer_ids: a
    };
    await r.tn.put({
      url: o.ANM.POLL_ANSWERS(t, n),
      body: e,
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}
async function s(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await r.tn.post({
      url: o.ANM.POLL_EXPIRE(t, n),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}