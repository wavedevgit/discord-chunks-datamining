/** Chunk was on web.js **/
/** chunk id: 418126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => c
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk728458 = require("./728458.js"),
  Chunk692744 = require("./692744.js"),
  Chunk652215 = require("./652215.js");
let c = {
  connect: async e => {
    try {
      let t = await r.Bo.post({
        url: l.Rsh.HAVEN_CONNECT(e),
        rejectWithError: true
      });
      return i.h.dispatch({
        type: "HAVEN_CONNECT",
        room: (0, o.xf)(t.body)
      }), t
    } catch (e) {
      s.A.captureException(e)
    }
  },
  disconnect: async e => {
    try {
      await r.Bo.post({
        url: l.Rsh.HAVEN_DISCONNECT(e),
        rejectWithError: true
      })
    } catch (t) {
      if ((null == t ? true : t.status) === 404) {
        let t = a.default.getCurrentUser();
        null != t && i.h.dispatch({
          type: "HAVEN_DISCONNECT",
          roomId: e,
          userId: t.id
        })
      }
      s.A.captureException(t)
    }
  },
  update: async (e, t) => {
    let {
      position: n,
      avatar: i,
      seat: a
    } = t;
    try {
      await r.Bo.post({
        url: l.Rsh.HAVEN_UPDATE(e),
        body: {
          position: n,
          avatar: i,
          seat: a
        },
        rejectWithError: true
      })
    } catch (e) {
      s.A.captureException(e)
    }
  },
  getAssets: async () => {
    try {
      return await r.Bo.get({
        url: l.Rsh.HAVEN_GET_ASSETS,
        rejectWithError: true
      })
    } catch (e) {
      return s.A.captureException(e), null
    }
  }
}