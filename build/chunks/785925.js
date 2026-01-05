/** Chunk was on web.js **/
/** chunk id: 785925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk535834 = require("./535834.js"),
  Chunk981631 = require("./981631.js");
let l = {
  connect: async e => {
    try {
      let t = await r.tn.post({
        url: s.ANM.HAVEN_CONNECT(e),
        rejectWithError: true
      });
      return i.Z.dispatch({
        type: "HAVEN_CONNECT",
        room: (0, o.CK)(t.body)
      }), t
    } catch (e) {
      a.Z.captureException(e)
    }
  },
  disconnect: async e => {
    try {
      await r.tn.post({
        url: s.ANM.HAVEN_DISCONNECT(e),
        rejectWithError: true
      })
    } catch (e) {
      a.Z.captureException(e)
    }
  },
  update: async (e, t) => {
    let {
      position: n,
      avatar: i,
      seat: o
    } = t;
    try {
      await r.tn.post({
        url: s.ANM.HAVEN_UPDATE(e),
        body: {
          position: n,
          avatar: i,
          seat: o
        },
        rejectWithError: true
      })
    } catch (e) {
      a.Z.captureException(e)
    }
  },
  getAssets: async () => {
    try {
      return await Chunk544891.tn.get({
        url: Chunk981631.ANM.HAVEN_GET_ASSETS,
        rejectWithError: true
      })
    } catch (e) {
      return Chunk960048.Z.captureException(module), null
    }
  }
}