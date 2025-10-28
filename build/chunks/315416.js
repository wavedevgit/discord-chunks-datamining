/** Chunk was on web.js **/
/** chunk id: 315416, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js");

function s(e, t, n) {
  let s = (0, i.e7)([o.ZP], () => o.ZP.getUserCount(t, n));
  return (0, r.useEffect)(() => {
    null != e && null != t && a.Z.getGuildEventUserCounts(e, t, null != n ? [n] : [])
  }, [t, e, n]), s
}