/** Chunk was on 16864 **/
/** chunk id: 398378, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk475743 = require("./475743.js"),
  Chunk954571 = require("./954571.js"),
  Chunk21251 = require("./21251.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = (0, a.A)(e);
  n.useEffect(() => {
    if (e === t) return;
    let r = null;
    "user-code-input" !== e.type && "handoff" !== e.type && (r = (0, i.i)(e.userCodeData.clientId)), s.default.track(l.HAw.DEVICE_LINK_STEP, {
      previous_step: null == t ? true : t.type,
      current_step: e.type,
      platform_type: r
    })
  }, [t, e])
}