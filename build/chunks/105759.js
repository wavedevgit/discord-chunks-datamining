/** Chunk was on web.js **/
/** chunk id: 105759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk598077 = require("./598077.js"),
  Chunk699516 = require("./699516.js"),
  Chunk431 = require("./431.js"),
  Chunk786397 = require("./786397.js"),
  Chunk474936 = require("./474936.js");

function u() {
  let e = (0, l.w)(c.a7),
    t = (0, i.e7)([s.Z], () => s.Z.getReferrer(null == e ? true : e.trial_id)),
    n = (0, i.e7)([o.Z], () => null == t || o.Z.isBlockedOrIgnored(t.id));
  return r.useMemo(() => n || null == t ? null : new a.Z(t), [t, n])
}