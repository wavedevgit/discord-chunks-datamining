/** Chunk was on 22477 **/
/** chunk id: 535731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk517846 = require("./517846.js"),
  Chunk342494 = require("./342494.js"),
  Chunk757036 = require("./757036.js"),
  Chunk236698 = require("./236698.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk895431 = require("./895431.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk446115 = require("./446115.js");
let g = e => {
  let {
    targetElementRef: t,
    markAsDismissed: n
  } = e, g = (0, s.L)(), f = (0, l.useCallback)(() => {
    (0, d.openUserSettings)(c.X.PRIVATE_BROWSING_PANEL, {
      section: u.nc_.PRIVATE_BROWSING
    })
  }, []);
  return (0, a.jsx)(i.AM, {
    badge: {
      type: "beta",
      variant: "expressive"
    },
    graphic: {
      type: "image",
      src: x
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
      o.Ay.fireSurveyAction(g ? r.w.WARP_VPN_COACHMARK_DISMISSED_NITRO : r.w.WARP_VPN_COACHMARK_DISMISSED_NON_NITRO), n(m.i.USER_DISMISS)
    },
    actions: [{
      variant: "primary",
      text: h.intl.string(h.t.RzWDqY),
      onClick: () => {
        n(m.i.TAKE_ACTION), f()
      }
    }]
  })
}