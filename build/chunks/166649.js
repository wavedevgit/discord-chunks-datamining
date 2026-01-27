/** Chunk was on web.js **/
/** chunk id: 166649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let o = {
  show(e, t) {
    i.h.wait(() => i.h.dispatch({
      type: "TUTORIAL_INDICATOR_SHOW",
      tutorialId: e,
      renderData: t
    }))
  },
  hide(e) {
    i.h.wait(() => i.h.dispatch({
      type: "TUTORIAL_INDICATOR_HIDE",
      tutorialId: e
    }))
  },
  dismiss(e) {
    i.h.wait(() => i.h.dispatch({
      type: "TUTORIAL_INDICATOR_DISMISS",
      tutorialId: e
    })), r.Bo.put({
      url: a.Rsh.TUTORIAL_INDICATOR(e),
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  suppressAll() {
    i.h.dispatch({
      type: "TUTORIAL_INDICATOR_SUPPRESS_ALL"
    }), r.Bo.post({
      url: a.Rsh.TUTORIAL_INDICATORS_SUPPRESS,
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}