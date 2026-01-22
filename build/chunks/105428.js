/** Chunk was on web.js **/
/** chunk id: 105428, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk61925 = require("./61925.js"),
  Chunk609415 = require("./609415.js"),
  Chunk14594 = require("./14594.js");
let o = {
  maybeOpenBlockUserFeedback(e) {
    let {
      location: t
    } = e;
    (0, a.Bv)(t) && r.h.dispatch({
      type: "BLOCK_USER_SHOW_FEEDBACK"
    })
  },
  maybeOpenAgeVerificationUserFeedback(e) {
    let {
      location: t,
      visibleContent: n
    } = e;
    !(0, i.fj)(t) || null == n || s.K0.includes(n) && r.h.dispatch({
      type: "AGE_VERIFICATION_SHOW_FEEDBACK",
      dismissibleContent: n
    })
  }
}