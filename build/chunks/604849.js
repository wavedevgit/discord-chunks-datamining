/** Chunk was on web.js **/
/** chunk id: 604849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk581883 = require("./581883.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981312 = require("./981312.js"),
  Chunk667172 = require("./667172.js");
let l = () => {
  let e = a.default.getCurrentUser(),
    t = (0, r.e7)([i.Z], () => {
      var e, t, n;
      return null == (n = null == (t = i.Z.settings.privacy) || null == (e = t.inappropriateConversationWarnings) ? true : e.value) || n
    }),
    n = (0, o.U)(),
    l = (0, s.v4)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!l || (n || (null == e ? true : e.isStaff()) === true) && t
}