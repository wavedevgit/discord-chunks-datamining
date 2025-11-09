/** Chunk was on 50642 **/
/** chunk id: 987329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk408534 = require("./408534.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => {
  let {
    channel: t,
    remoteMode: n = false
  } = e, {
    parentAnalyticsLocation: f
  } = (0, a.ZP)(), m = r.useRef(null);
  return (0, i.jsx)(l.yRy, {
    targetElementRef: m,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, i.jsx)(u.Z, {
        children: (0, i.jsx)(o.Z, {
          onClose: r,
          channel: t,
          remoteMode: n,
          onInteraction: (0, c.u)("MoreSettingsMenu", f, {
            entrypoint: p.A5.THREE_DOT
          })
        })
      })
    },
    align: "right",
    position: "top",
    animation: l.yRy.Animation.FADE,
    spacing: 16,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: r
      } = t;
      return (0, i.jsx)(d.d, {
        ref: m,
        isTrayButton: true,
        onClick: e => {
          (0, s.v)(f, s.d.MORE), n(e)
        },
        label: h.intl.string(h.t.PdRCRg),
        iconComponent: l.xhG,
        color: "primaryDark",
        isActive: r
      })
    }
  })
}