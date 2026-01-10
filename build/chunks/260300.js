/** Chunk was on web.js **/
/** chunk id: 260300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = {
  show(e, t) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_SHOW",
      tutorialId: e,
      renderData: t
    }))
  },
  hide(e) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_HIDE",
      tutorialId: e
    }))
  },
  dismiss(e) {
    i.Z.wait(() => i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_DISMISS",
      tutorialId: e
    })), r.tn.put({
      url: a.ANM.TUTORIAL_INDICATOR(e),
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  suppressAll() {
    i.Z.dispatch({
      type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
    }), r.tn.post({
      url: a.ANM.TUTORIAL_INDICATORS_SUPPRESS,
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}