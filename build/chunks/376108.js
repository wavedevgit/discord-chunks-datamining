/** Chunk was on web.js **/
/** chunk id: 376108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js");

function s(e, t, n) {
  let s = (0, i.e7)([a.ZP], () => a.ZP.getUserCount(t, n));
  return (0, r.useEffect)(() => {
    null != e && null != t && o.Z.getGuildEventUserCounts(e, t, null != n ? [n] : [])
  }, [t, e, n]), s
}