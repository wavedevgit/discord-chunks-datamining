/** Chunk was on 98783 **/
/** chunk id: 185457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk531301 = require("./531301.js"),
  Chunk892001 = require("./892001.js"),
  Chunk314897 = require("./314897.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    user: t,
    guildId: n,
    channelId: f,
    context: b
  } = e, {
    id: Z
  } = t, {
    loading: m,
    note: v
  } = (0, a.Z)(Z), p = !m && null != v && v.length > 0, O = b === d.IlC.POPOUT || b === d.IlC.OVERLAY, {
    analyticsLocations: h
  } = (0, r.ZP)();
  return Z === s.default.getId() || u.Z.hidePersonalInformation || O ? null : (0, i.jsx)(l.sNh, {
    id: "note",
    label: m ? g.intl.string(g.t["WLKx/9"]) : p ? g.intl.string(g.t.sHHsOM) : g.intl.string(g.t.Dglxrf),
    subtext: g.intl.string(g.t.r1BOdd),
    action: () => {
      (0, o.openUserProfileModal)({
        userId: t.id,
        section: c.oh.USER_INFO,
        subsection: c.Tb.NOTE,
        guildId: n,
        channelId: f,
        sourceAnalyticsLocations: h,
        appContext: b
      })
    }
  })
}