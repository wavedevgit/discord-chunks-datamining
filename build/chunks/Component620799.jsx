/** Chunk was on 22979 **/
/** chunk id: 620799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk314897 = require("./314897.js"),
  Chunk892001 = require("./892001.js"),
  Chunk228168 = require("./228168.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    targetElementRef: t,
    markAsDismissed: n,
    children: p
  } = e, h = (0, r.e7)([o.default], () => o.default.getId()), f = (0, r.e7)([l.Z], () => l.Z.useReducedMotion);
  return (0, a.jsxs)(a.Fragment, {
    children: [p, (0, a.jsx)(i.J2, {
      targetElementRef: t,
      title: m.intl.string(m.t.gxcsSq),
      body: m.intl.string(m.t["8L7E5l"]),
      caretConfig: {
        align: "start"
      },
      graphic: {
        type: "image",
        src: f ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png" : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png"
      },
      position: "top",
      align: "left",
      gradientColor: "blue",
      size: "md",
      onRequestClose: () => {
        n(u.L.USER_DISMISS)
      },
      actions: [{
        text: m.intl.string(m.t.RzWDqY),
        variant: "primary",
        onClick: () => {
          n(u.L.TAKE_ACTION), (0, c.openUserProfileModal)({
            userId: h,
            sourceAnalyticsLocations: [s.Z.ACCOUNT],
            hideRestrictedProfile: true,
            tabSection: d.oh.WIDGETS
          })
        }
      }]
    })]
  })
}