/** Chunk was on 22979 **/
/** chunk id: 375720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk547943 = require("./547943.js"),
  Chunk907862 = require("./907862.js"),
  Chunk612659 = require("./612659.js"),
  Chunk588529 = require("./588529.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk472057 = require("./472057.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932889 = require("./932889.js");
let b = e => {
  let {
    targetElementRef: t,
    markAsDismissed: n
  } = e, b = (0, s.m)(), x = (0, r.useCallback)(() => {
    (0, d.openUserSettings)(c.n.PRIVATE_BROWSING_PANEL, {
      section: u.oAB.PRIVATE_BROWSING
    })
  }, []);
  return (0, a.jsx)(l.J2, {
    badge: {
      type: "beta",
      variant: "expressive"
    },
    graphic: {
      type: "image",
      src: f
    },
    caretConfig: {
      align: "start"
    },
    align: "left",
    position: "top",
    size: "lg",
    gradientColor: "nitro-pink",
    title: h.intl.string(p.default.AafjNy),
    body: h.intl.string(p.default.wQwQF0),
    targetElementRef: t,
    onRequestClose: () => {
      o.ZP.fireSurveyAction(b ? i.Y.WARP_VPN_COACHMARK_DISMISSED_NITRO : i.Y.WARP_VPN_COACHMARK_DISMISSED_NON_NITRO), n(m.L.USER_DISMISS)
    },
    actions: [{
      variant: "primary",
      text: h.intl.string(h.t.RzWDqY),
      onClick: () => {
        n(m.L.TAKE_ACTION), x()
      }
    }]
  })
}