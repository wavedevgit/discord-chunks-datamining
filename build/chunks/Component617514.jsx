/** Chunk was on web.js **/
/** chunk id: 617514, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
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
let g = () => {
  let [e, t] = (0, l.kn)([a.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = e === a.M.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, g = (0, i.bG)([u.default], () => u.default.getId());
  return (0, r.jsx)(d.A, {
    title: h.intl.string(h.t.Jzj9q4),
    description: h.intl.string(h.t.lfF1Sp),
    titleIcon: n ? (0, r.jsx)(s.LpS, {
      className: m.A,
      text: h.intl.string(h.t.y2b7CA)
    }) : null,
    borderType: f.i.LIMITED,
    showBorder: n,
    hasBackground: n,
    children: (0, r.jsx)(s.Button, {
      text: h.intl.string(h.t.Geikwq),
      onClick: () => {
        n && t(p.i.TAKE_ACTION), (0, c.openUserProfileModal)({
          userId: g,
          sourceAnalyticsLocations: [o.A.USER_SETTINGS_USER_PROFILE],
          hideRestrictedProfile: true,
          tabSection: _.RP.WIDGETS
        })
      },
      size: "sm"
    })
  })
}