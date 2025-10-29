/** Chunk was on 96604 **/
/** chunk id: 620799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk314897 = require("./314897.js"),
  Chunk172416 = require("./172416.js"),
  Chunk892001 = require("./892001.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    targetElementRef: t,
    markAsDismissed: n,
    children: h
  } = e, x = (0, r.e7)([s.default], () => s.default.getId()), g = (0, r.e7)([i.Z], () => i.Z.useReducedMotion), f = (0, c.bg)({
    location: "GameWidgetsPopover"
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [h, (0, a.jsx)(l.J2, {
      targetElementRef: t,
      badge: f ? {
        type: "early_access",
        variant: "expressive"
      } : true,
      title: p.intl.string(p.t.gxcsSq),
      body: p.intl.string(p.t["8L7E5l"]),
      caretConfig: {
        align: "start"
      },
      graphic: {
        type: "image",
        src: g ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png" : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png"
      },
      position: "top",
      align: "left",
      gradientColor: "blue",
      size: "md",
      onRequestClose: () => {
        n(m.L.USER_DISMISS)
      },
      actions: [{
        text: p.intl.string(p.t.RzWDqY),
        variant: "primary",
        onClick: () => {
          n(m.L.TAKE_ACTION), (0, d.openUserProfileModal)({
            userId: x,
            sourceAnalyticsLocations: [o.Z.ACCOUNT],
            hideRestrictedProfile: true,
            section: u.oh.WIDGETS
          })
        }
      }]
    })]
  })
}