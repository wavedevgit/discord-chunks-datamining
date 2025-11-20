/** Chunk was on web.js **/
/** chunk id: 679240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => s
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk271383 = require("./271383.js"),
  Chunk549817 = require("./549817.js"),
  Chunk372897 = require("./372897.js");

function s(e) {
  return new Promise(t => {
    i.ZP.addConditionalChangeListener(() => {
      var n;
      let s = i.ZP.getSelfMember(e);
      return !(0, r.yE)(null != (n = null == s ? true : s.flags) ? n : 0, o.q.COMPLETED_ONBOARDING) || (a.Z.finishOnboarding(e), t(), false)
    })
  })
}