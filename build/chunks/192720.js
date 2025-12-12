/** Chunk was on web.js **/
/** chunk id: 192720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XA: () => c,
  ep: () => u,
  sE: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk786761 = require("./786761.js"),
  Chunk768943 = require("./768943.js"),
  Chunk686478 = require("./686478.js"),
  Chunk981631 = require("./981631.js");
async function c(e) {
  let t = await r.tn.put({
    url: l.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
    body: {
      due_at: e.dueAt
    },
    rejectWithError: false
  });
  if (t.ok) return (0, s.jk)(t.body)
}
async function u(e) {
  if ((await r.tn.del({
      url: l.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
      rejectWithError: false
    })).ok) returntrue
}
async function d() {
  if (!Chunk768943.Z.getIsStale()) return Promise.resolve();
  let e = (await Chunk544891.tn.get({
    url: Chunk981631.ANM.GET_SAVED_MESSAGES,
    rejectWithError: false
  })).body.results.map(e => ({
    message: null != e.message ? (0, o.e5)(e.message) : null,
    saveData: (0, s.vL)(e.save_data)
  }));
  Chunk570140.Z.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    savedMessages: module
  })
}