/** Chunk was on 66866 **/
/** chunk id: 467531, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => a,
  W: () => o
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
    await r.tn.put({
      url: l.ANM.POLL_ANSWERS(t, n),
      body: {
        answer_ids: a
      },
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}
async function o(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await r.tn.post({
      url: l.ANM.POLL_EXPIRE(t, n),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}