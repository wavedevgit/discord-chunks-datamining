/** Chunk was on 69220 **/
/** chunk id: 185457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    user: t,
    guildId: n,
    channelId: g,
    context: Z
  } = e, {
    id: b
  } = t, {
    loading: p,
    note: v
  } = (0, o.Z)(b), m = !p && null != v && v.length > 0, O = Z === s.IlC.POPOUT || Z === s.IlC.OVERLAY, {
    analyticsLocations: h
  } = (0, r.ZP)();
  return b === u.default.getId() || d.Z.hidePersonalInformation || O ? null : (0, i.jsx)(l.sNh, {
    id: "note",
    label: p ? f.intl.string(f.t["WLKx/9"]) : m ? f.intl.string(f.t.sHHsOM) : f.intl.string(f.t.Dglxrf),
    subtext: f.intl.string(f.t.r1BOdd),
    action: () => {
      (0, a.openUserProfileModal)({
        userId: t.id,
        tabSection: c.oh.USER_INFO,
        scrollTarget: c.Tb.NOTE,
        guildId: n,
        channelId: g,
        sourceAnalyticsLocations: h,
        appContext: Z
      })
    }
  })
}