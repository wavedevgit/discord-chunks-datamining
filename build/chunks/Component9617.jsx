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
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE]), n = module === Chunk704215.z.WIDGETS_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, g = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.getId());
  return (0, Chunk54381.jsx)(Chunk993413.Z, {
    title: Chunk388032.intl.string(Chunk388032.t.Jzj9q4),
    description: Chunk388032.intl.string(Chunk388032.t.lfF1Sp),
    titleIcon: require ? (0, Chunk54381.jsx)(Chunk481060.IGR, {
      className: Chunk983240.newBadge,
      text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
    }) : null,
    borderType: Chunk504983.Y.LIMITED,
    showBorder: require,
    hasBackground: require,
    children: (0, Chunk54381.jsx)(Chunk481060.Button, {
      text: Chunk388032.intl.string(Chunk388032.t.Geikwq),
      onClick: () => {
        require && exports(Chunk921944.L.TAKE_ACTION), (0, Chunk892001.openUserProfileModal)({
          userId: g,
          sourceAnalyticsLocations: [Chunk100527.Z.USER_SETTINGS_USER_PROFILE],
          hideRestrictedProfile: true,
          tabSection: Chunk228168.oh.WIDGETS
        })
      },
      size: "sm"
    })
  })
}