/** Chunk was on 69773 **/
/** chunk id: 643366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Y: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk110924 = require("./110924.js"),
  Chunk626135 = require("./626135.js"),
  Chunk497350 = require("./497350.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = (0, a.Z)(e);
  r.useEffect(() => {
    if (e === t) return;
    let n = null;
    "user-code-input" !== e.type && "handoff" !== e.type && (n = (0, o.B)(e.userCodeData.clientId)), i.default.track(s.rMx.DEVICE_LINK_STEP, {
      previous_step: null == t ? true : t.type,
      current_step: e.type,
      platform_type: n
    })
  }, [t, e])
}