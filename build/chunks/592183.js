/** Chunk was on web.js **/
/** chunk id: 592183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk86419 = require("./86419.js"),
  Chunk981631 = require("./981631.js");
let l = {
  setPendingWidgets(e) {
    i.Z.dispatch({
      type: "WIDGET_PENDING_SET",
      widgets: e
    })
  },
  async savePendingWidgets(e) {
    var t;
    let n = null == (t = o.default.getCurrentUser()) ? true : t.id;
    if (null == n) return;
    i.Z.dispatch({
      type: "WIDGET_PENDING_SAVE_START"
    });
    let l = e.map(a.vH);
    try {
      let e = await r.tn.put({
        url: s.ANM.USER_PROFILE_WIDGETS,
        body: {
          widgets: l
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return i.Z.dispatch({
        type: "WIDGET_PENDING_SAVE_SUCCESS",
        userId: n,
        widgets: e.body.widgets
      }), e.body
    } catch (e) {
      throw i.Z.dispatch({
        type: "WIDGET_PENDING_SAVE_FAILURE"
      }), e
    }
  },
  clearPendingWidgets() {
    Chunk570140.Z.dispatch({
      type: "WIDGET_PENDING_CLEAR"
    })
  }
}