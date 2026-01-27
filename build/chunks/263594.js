/** Chunk was on web.js **/
/** chunk id: 263594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => s
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk696451 = require("./696451.js"),
  Chunk669953 = require("./669953.js"),
  Chunk340837 = require("./340837.js");

function s(e) {
  return new Promise(t => {
    i.Ay.addConditionalChangeListener(() => {
      var n;
      let s = i.Ay.getSelfMember(e);
      return !(0, r.Lt)(null != (n = null == s ? true : s.flags) ? n : 0, o.D.COMPLETED_ONBOARDING) || (a.A.finishOnboarding(e), t(), false)
    })
  })
}