/** Chunk was on 2827 **/
/** chunk id: 617514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk961350 = require("./961350.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk133788 = require("./133788.js");
let f = () => {
  let [e, t] = (0, o.kn)([l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = e === l.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, f = (0, i.bG)([d.default], () => d.default.getId());
  return (0, r.jsx)(u.A, {
    title: g.intl.string(g.t.Jzj9q4),
    description: g.intl.string(g.t.lfF1Sp),
    titleIcon: n ? (0, r.jsx)(s.LpS, {
      className: A.A,
      text: g.intl.string(g.t.y2b7CA)
    }) : null,
    borderType: _.i.LIMITED,
    showBorder: n,
    hasBackground: n,
    children: (0, r.jsx)(s.Button, {
      text: g.intl.string(g.t.Geikwq),
      onClick: () => {
        n && t(p.i.TAKE_ACTION), (0, c.openUserProfileModal)({
          userId: f,
          sourceAnalyticsLocations: [a.A.USER_SETTINGS_USER_PROFILE],
          hideRestrictedProfile: true,
          tabSection: m.RP.WIDGETS
        })
      },
      size: "sm"
    })
  })
}