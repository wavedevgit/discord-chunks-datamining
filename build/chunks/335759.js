/** Chunk was on web.js **/
/** chunk id: 335759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s,
  w: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js");
async function s(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e;
  try {
    let e = {
      answer_ids: s
    };
    await r.Bo.put({
      url: a.Rsh.POLL_ANSWERS(t, n),
      body: e,
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}
async function o(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  try {
    await r.Bo.post({
      url: a.Rsh.POLL_EXPIRE(t, n),
      rejectWithError: false
    })
  } catch (e) {
    throw new i.LG(e)
  }
}