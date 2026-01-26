/** Chunk was on 91042 **/
/** chunk id: 497600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk612630 = require("./612630.js"),
  Chunk657331 = require("./657331.js"),
  Chunk961350 = require("./961350.js"),
  Chunk351906 = require("./351906.js"),
  Chunk652215 = require("./652215.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    user: t,
    guildId: n,
    channelId: b,
    context: g
  } = e, {
    id: f
  } = t, {
    loading: m,
    note: p
  } = (0, a.A)(f), O = !m && null != p && p.length > 0, y = g === u.BRT.POPOUT || g === u.BRT.OVERLAY, {
    analyticsLocations: v
  } = (0, r.Ay)();
  return f === s.default.getId() || d.A.hidePersonalInformation || y ? null : (0, l.jsx)(i.Drp, {
    id: "note",
    label: m ? A.intl.string(A.t["WLKx/9"]) : O ? A.intl.string(A.t.sHHsOM) : A.intl.string(A.t.Dglxrf),
    subtext: A.intl.string(A.t.r1BOdd),
    action: () => {
      (0, o.openUserProfileModal)({
        userId: t.id,
        tabSection: c.RP.USER_INFO,
        scrollTarget: c.bk.NOTE,
        guildId: n,
        channelId: b,
        sourceAnalyticsLocations: v,
        appContext: g
      })
    }
  })
}