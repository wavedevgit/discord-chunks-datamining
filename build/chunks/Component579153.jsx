/** Chunk was on 44669 **/
/** chunk id: 579153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk592982 = require("./592982.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk246356 = require("./246356.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx");
let g = e => {
  let {
    channel: t,
    remoteMode: n = false
  } = e, {
    parentAnalyticsLocation: g
  } = (0, s.Ay)(), f = l.useRef(null);
  return (0, r.jsx)(i.YNO, {
    targetElementRef: f,
    renderPopout: e => {
      let {
        closePopout: l
      } = e;
      return (0, r.jsx)(u.A, {
        children: (0, r.jsx)(a.A, {
          onClose: l,
          channel: t,
          remoteMode: n,
          onInteraction: (0, c.s)("MoreSettingsMenu", g, {
            entrypoint: p.GK.THREE_DOT
          })
        })
      })
    },
    align: "right",
    position: "top",
    animation: i.YNO.Animation.FADE,
    spacing: 16,
    children: (e, t) => {
      let {
        onClick: n
      } = e, {
        isShown: l
      } = t;
      return (0, r.jsx)(d.l, {
        ref: f,
        isTrayButton: true,
        onClick: e => {
          (0, o.X)(g, o.O.MORE), n(e)
        },
        label: h.intl.string(h.t.PdRCRg),
        iconComponent: i.jNK,
        color: "primaryDark",
        isActive: l
      })
    }
  })
}