/** Chunk was on web.js **/
/** chunk id: 987329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk408534 = require("./408534.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk795318 = require("./795318.js"),
  Chunk390322 = require("./390322.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  let {
    channel: t,
    remoteMode: n = false
  } = e, {
    parentAnalyticsLocation: p
  } = (0, a.ZP)(), h = i.useRef(null);
  return (0, r.jsx)(o.yRy, {
    targetElementRef: h,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(u.Z, {
        children: (0, r.jsx)(s.Z, {
          onClose: i,
          channel: t,
          remoteMode: n,
          onInteraction: (0, c.u)("MoreSettingsMenu", p, {
            entrypoint: f.A5.THREE_DOT
          })
        })
      })
    },
    align: "right",
    position: "top",
    animation: o.yRy.Animation.FADE,
    spacing: 16,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: i
      } = t;
      return (0, r.jsx)(d.d, {
        ref: h,
        isTrayButton: true,
        onClick: e => {
          (0, l.v)(p, l.d.MORE), n(e)
        },
        label: _.intl.string(_.t.PdRCRk),
        iconComponent: o.xhG,
        color: "primaryDark",
        isActive: i
      })
    }
  })
}