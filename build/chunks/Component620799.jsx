/** Chunk was on web.js **/
/** chunk id: 620799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk447448 = require("./447448.js"),
  Chunk892001 = require("./892001.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let h = "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png";

function m(e) {
  let {
    targetElementRef: t
  } = e, n = (0, u.k)({
    location: "GameWidgetsPopover"
  }), [m, g] = (0, l.US)(n ? [a.z.WIDGETS_RTC_UPSELL_COACHMARK] : []), E = (0, i.e7)([c.default], () => c.default.getId()), b = m === a.z.WIDGETS_RTC_UPSELL_COACHMARK;
  return null != t.current && b ? (0, r.jsx)(o.J2, {
    targetElementRef: t,
    title: p.intl.string(p.t.gxcsSk),
    body: p.intl.string(p.t["8L7E5u"]),
    caretConfig: {
      position: "bottom",
      align: "start"
    },
    graphic: {
      type: "image",
      src: h
    },
    position: "top",
    align: "left",
    gradientColor: "blue",
    size: "md",
    onRequestClose: () => {
      g(_.L.USER_DISMISS)
    },
    actions: [{
      text: p.intl.string(p.t.RzWDqa),
      variant: "primary",
      onClick: () => {
        g(_.L.TAKE_ACTION), (0, d.openUserProfileModal)({
          userId: E,
          sourceAnalyticsLocations: [s.Z.ACCOUNT],
          hideRestrictedProfile: true,
          section: f.oh.WIDGETS
        })
      }
    }]
  }) : null
}