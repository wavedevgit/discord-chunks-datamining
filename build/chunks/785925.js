/** Chunk was on 40184 **/
/** chunk id: 785925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk960048 = require("./960048.js"),
  Chunk535834 = require("./535834.js"),
  Chunk981631 = require("./981631.js");
let s = {
  connect: async e => {
    try {
      let t = await i.tn.post({
        url: o.ANM.HAVEN_CONNECT(e),
        rejectWithError: true
      });
      return r.Z.dispatch({
        type: "HAVEN_CONNECT",
        room: (0, a.CK)(t.body)
      }), t
    } catch (e) {
      l.Z.captureException(e)
    }
  },
  disconnect: async e => {
    try {
      await i.tn.post({
        url: o.ANM.HAVEN_DISCONNECT(e),
        rejectWithError: true
      })
    } catch (e) {
      l.Z.captureException(e)
    }
  },
  update: async (e, t) => {
    let {
      position: n,
      avatar: r,
      seat: a
    } = t;
    try {
      await i.tn.post({
        url: o.ANM.HAVEN_UPDATE(e),
        body: {
          position: n,
          avatar: r,
          seat: a
        },
        rejectWithError: true
      })
    } catch (e) {
      l.Z.captureException(e)
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