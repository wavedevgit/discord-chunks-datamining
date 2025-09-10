/** Chunk was on web.js **/
/** chunk id: 620799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk314897 = require("./314897.js"),
  Chunk892001 = require("./892001.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let _ = "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png",
  p = "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png";

function h(e) {
  let {
    targetElementRef: t,
    markAsDismissed: n,
    children: h
  } = e, m = (0, i.e7)([l.default], () => l.default.getId()), g = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [h, (0, r.jsx)(a.J2, {
      targetElementRef: t,
      title: f.intl.string(f.t.gxcsSk),
      body: f.intl.string(f.t["8L7E5u"]),
      caretConfig: {
        position: "bottom",
        align: "start"
      },
      graphic: {
        type: "image",
        src: g ? _ : p
      },
      position: "top",
      align: "left",
      gradientColor: "blue",
      size: "md",
      onRequestClose: () => {
        n(d.L.USER_DISMISS)
      },
      actions: [{
        text: f.intl.string(f.t.RzWDqa),
        variant: "primary",
        onClick: () => {
          n(d.L.TAKE_ACTION), (0, c.openUserProfileModal)({
            userId: m,
            sourceAnalyticsLocations: [s.Z.ACCOUNT],
            hideRestrictedProfile: true,
            section: u.oh.WIDGETS
          })
        }
      }]
    })]
  })
}