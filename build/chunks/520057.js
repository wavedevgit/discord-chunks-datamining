/** Chunk was on 39048 **/
/** chunk id: 520057, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  w: () => o
});
var Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, i.bG)([l.A, s.A], () => {
    let t = l.A.getGuild(e);
    if (null == t) returnfalse;
    let n = s.A.getGuildPermissions(t);
    return null != n && r.zy(n, a.xBc.VIEW_CREATOR_MONETIZATION_ANALYTICS)
  })
}