/** Chunk was on 13140 **/
/** chunk id: 260300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = {
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
      url: l.ANM.TUTORIAL_INDICATOR(e),
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  suppressAll() {
    Chunk570140.Z.dispatch({
      type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
    }), Chunk544891.tn.post({
      url: Chunk981631.ANM.TUTORIAL_INDICATORS_SUPPRESS,
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}