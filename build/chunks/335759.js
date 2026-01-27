/** Chunk was on 92917 **/
/** chunk id: 335759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => a,
  w: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
async function a(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: a
  } = e;
  try {
    await r.Bo.put({
      url: l.Rsh.POLL_ANSWERS(t, n),
      body: {
        answer_ids: a
      },
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}
async function s(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await r.Bo.post({
      url: l.Rsh.POLL_EXPIRE(t, n),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}