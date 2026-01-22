/** Chunk was on web.js **/
/** chunk id: 216623, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AX: () => d,
  cf: () => u,
  oN: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk141468 = require("./141468.js"),
  Chunk85109 = require("./85109.js"),
  Chunk756377 = require("./756377.js"),
  Chunk652215 = require("./652215.js");
async function c(e) {
  let t = await r.Bo.put({
    url: l.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
    body: {
      due_at: e.dueAt
    },
    rejectWithError: false
  });
  if (t.ok) return (0, o.iz)(t.body)
}
async function u(e) {
  if ((await r.Bo.del({
      url: l.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
      rejectWithError: false
    })).ok) returntrue
}
async function d() {
  if (!s.A.getIsStale()) return Promise.resolve();
  let e = (await r.Bo.get({
    url: l.Rsh.GET_SAVED_MESSAGES,
    rejectWithError: false
  })).body.results.map(e => ({
    message: null != e.message ? (0, a.rh)(e.message) : null,
    saveData: (0, o.Dd)(e.save_data)
  }));
  i.h.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    savedMessages: e
  })
}