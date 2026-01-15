/** Chunk was on web.js **/
/** chunk id: 9617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk314897 = require("./314897.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk983240 = require("./983240.js");
let g = () => {
  let [e, t] = (0, l.US)([a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = e === a.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, g = (0, i.e7)([u.default], () => u.default.getId());
  return (0, r.jsx)(d.Z, {
    title: h.intl.string(h.t.Jzj9q4),
    description: h.intl.string(h.t.lfF1Sp),
    titleIcon: n ? (0, r.jsx)(o.IGR, {
      className: m.newBadge,
      text: h.intl.string(h.t.y2b7CA)
    }) : null,
    borderType: f.Y.LIMITED,
    showBorder: n,
    hasBackground: n,
    children: (0, r.jsx)(o.Button, {
      text: h.intl.string(h.t.Geikwq),
      onClick: () => {
        n && t(p.L.TAKE_ACTION), (0, c.openUserProfileModal)({
          userId: g,
          sourceAnalyticsLocations: [s.Z.USER_SETTINGS_USER_PROFILE],
          hideRestrictedProfile: true,
          tabSection: _.oh.WIDGETS
        })
      },
      size: "sm"
    })
  })
}