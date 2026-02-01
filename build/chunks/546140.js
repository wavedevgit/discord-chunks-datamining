/** Chunk was on 88474 **/
/** chunk id: 546140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk840387 = require("./840387.js"),
  Chunk639555 = require("./639555.js");
let o = () => {
  let e = i.default.getCurrentUser(),
    t = (0, r.bG)([l.A], () => {
      var e, t, n;
      return null == (e = null == (n = l.A.settings.privacy) || null == (t = n.inappropriateConversationWarnings) ? true : t.value) || e
    }),
    n = (0, a.Z)(),
    o = (0, s.Rv)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!o || (n || (null == e ? true : e.isStaff()) === true) && t
}