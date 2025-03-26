/** Chunk was on 52272 **/
n.d(t, {
  B: () => a,
  W: () => l
});
var r = n(544891),
  i = n(881052),
  o = n(981631);
async function a(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: a
  } = e;
  try {
    await r.tn.put({
      url: o.ANM.POLL_ANSWERS(t, n),
      body: {
        answer_ids: a
      },
      rejectWithError: !1
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}
async function l(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await r.tn.post({
      url: o.ANM.POLL_EXPIRE(t, n),
      rejectWithError: !1
    })
  } catch (e) {
    throw new i.Hx(e)
  }
}