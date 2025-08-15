/** Chunk was on web.js **/
/** chunk id: 420846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk467442 = require("./467442.js"),
  Chunk869031 = require("./869031.js"),
  Chunk987562 = require("./987562.js");
let s = {
  maybeOpenBlockUserFeedback(e) {
    let {
      location: t
    } = e;
    (0, a.nZ)(t) && r.Z.dispatch({
      type: "BLOCK_USER_SHOW_FEEDBACK"
    })
  },
  maybeOpenAgeVerificationUserFeedback(e) {
    let {
      location: t,
      visibleContent: n
    } = e;
    (0, i.pZ)(t) && null != n && o.os.includes(n) && r.Z.dispatch({
      type: "AGE_VERIFICATION_SHOW_FEEDBACK",
      dismissibleContent: n
    })
  }
}