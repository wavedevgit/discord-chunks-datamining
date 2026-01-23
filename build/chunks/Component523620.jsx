/** Chunk was on 36054 **/
/** chunk id: 523620, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk961350 = require("./961350.js"),
  Chunk657331 = require("./657331.js"),
  Chunk518477 = require("./518477.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    targetElementRef: t,
    markAsDismissed: n,
    children: p
  } = e, h = (0, l.bG)([o.default], () => o.default.getId()), x = (0, l.bG)([i.A], () => i.A.useReducedMotion);
  return (0, a.jsxs)(a.Fragment, {
    children: [p, (0, a.jsx)(r.AM, {
      targetElementRef: t,
      title: m.intl.string(m.t.gxcsSq),
      body: m.intl.string(m.t["8L7E5l"]),
      caretConfig: {
        align: "start"
      },
      graphic: {
        type: "image",
        src: x ? "https://cdn.discordapp.com/assets/content/1b55390a202dcca3843b6c9205af0379cfa072f34d8b9217bce04aba4d373e5b.png" : "https://cdn.discordapp.com/assets/content/fdb6d4e8a2f01f917d2025a8ca58ebd55e4eada92df1d5386f73d91d6acad1f9.png"
      },
      position: "top",
      align: "left",
      gradientColor: "blue",
      size: "md",
      onRequestClose: () => {
        n(u.i.USER_DISMISS)
      },
      actions: [{
        text: m.intl.string(m.t.RzWDqY),
        variant: "primary",
        onClick: () => {
          n(u.i.TAKE_ACTION), (0, c.openUserProfileModal)({
            userId: h,
            sourceAnalyticsLocations: [s.A.ACCOUNT],
            hideRestrictedProfile: true,
            tabSection: d.RP.WIDGETS
          })
        }
      }]
    })]
  })
}