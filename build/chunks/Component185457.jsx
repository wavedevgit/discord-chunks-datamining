/** Chunk was on 70675 **/
/** chunk id: 185457, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk531301 = require("./531301.js"),
  Chunk892001 = require("./892001.js"),
  Chunk314897 = require("./314897.js"),
  Chunk246946 = require("./246946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e) {
  let {
    user: n,
    guildId: t,
    channelId: Z,
    context: f
  } = e, {
    id: b
  } = n, {
    loading: O,
    note: m
  } = (0, a.Z)(b), h = !O && null != m && m.length > 0, p = f === d.IlC.POPOUT || f === d.IlC.OVERLAY, {
    analyticsLocations: P
  } = (0, r.ZP)();
  return b === o.default.getId() || s.Z.hidePersonalInformation || p ? null : (0, l.jsx)(i.sNh, {
    id: "note",
    label: O ? g.intl.string(g.t["WLKx/9"]) : h ? g.intl.string(g.t.sHHsOM) : g.intl.string(g.t.Dglxrf),
    subtext: g.intl.string(g.t.r1BOdd),
    action: () => {
      (0, u.openUserProfileModal)({
        userId: n.id,
        section: c.oh.USER_INFO,
        subsection: c.Tb.NOTE,
        guildId: t,
        channelId: Z,
        sourceAnalyticsLocations: P,
        appContext: f
      })
    }
  })
}