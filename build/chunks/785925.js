/** Chunk was on web.js **/
/** chunk id: 785925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk535834 = require("./535834.js"),
  Chunk981631 = require("./981631.js");
let c = {
  connect: async e => {
    try {
      let t = await r.tn.post({
        url: l.ANM.HAVEN_CONNECT(e),
        rejectWithError: true
      });
      return i.Z.dispatch({
        type: "HAVEN_CONNECT",
        room: (0, s.CK)(t.body)
      }), t
    } catch (e) {
      o.Z.captureException(e)
    }
  },
  disconnect: async e => {
    try {
      await r.tn.post({
        url: l.ANM.HAVEN_DISCONNECT(e),
        rejectWithError: true
      })
    } catch (t) {
      if ((null == t ? true : t.status) === 404) {
        let t = a.default.getCurrentUser();
        null != t && i.Z.dispatch({
          type: "HAVEN_DISCONNECT",
          roomId: e,
          userId: t.id
        })
      }
      o.Z.captureException(t)
    }
  },
  update: async (e, t) => {
    let {
      position: n,
      avatar: i,
      seat: a
    } = t;
    try {
      await r.tn.post({
        url: l.ANM.HAVEN_UPDATE(e),
        body: {
          position: n,
          avatar: i,
          seat: a
        },
        rejectWithError: true
      })
    } catch (e) {
      o.Z.captureException(e)
    }
  },
  getAssets: async () => {
    try {
      return await r.tn.get({
        url: l.ANM.HAVEN_GET_ASSETS,
        rejectWithError: true
      })
    } catch (e) {
      return o.Z.captureException(e), null
    }
  }
}