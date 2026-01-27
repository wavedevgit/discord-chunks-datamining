/** Chunk was on 96430 **/
/** chunk id: 546140, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  L: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk617617 = require("./617617.js"),
  Chunk287809 = require("./287809.js"),
  Chunk840387 = require("./840387.js"),
  Chunk639555 = require("./639555.js");
let u = () => {
  let t = a.default.getCurrentUser(),
    e = (0, r.bG)([i.A], () => {
      var t, e, n;
      return null == (t = null == (n = i.A.settings.privacy) || null == (e = n.inappropriateConversationWarnings) ? true : e.value) || t
    }),
    n = (0, l.Z)(),
    u = (0, o.Rv)({
      location: "useSafetyAlertsSettingOrDefault"
    });
  return !!n && !!u || (n || (null == t ? true : t.isStaff()) === true) && e
}