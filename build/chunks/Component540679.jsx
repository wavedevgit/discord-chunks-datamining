/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk444766 = require("./444766.js");
let g = t => {
  let {
    onClose: e,
    channelId: n,
    applicationId: g,
    transitionState: f
  } = t, p = (0, l.e7)([s.ZP], () => s.ZP.getChannelMuteConfig(null, n));
  return (0, i.jsxs)(a.Y0X, {
    transitionState: f,
    size: a.CgR.SMALL,
    "aria-label": o.intl.string(o.t.uAmAiI),
    parentComponent: "MuteAppNotificationsModalV2",
    children: [(0, i.jsx)(a.hzk, {
      className: d.content,
      children: (0, i.jsx)(a.xJW, {
        title: o.intl.string(o.t.NkwaBg),
        tag: "h1",
        children: (0, i.jsx)(a.FXm, {
          options: (0, u.k)().map(t => {
            let {
              label: e,
              value: n
            } = t;
            return {
              name: e,
              value: n
            }
          }),
          onChange: t => {
            var e;
            return e = t.value, void r.Z.updateAppDMOverrideSettings(null, n, g, (0, u.u9)(e), c.ZB.Muted)
          },
          value: null == p ? true : p.selected_time_window
        })
      })
    }), (0, i.jsx)(a.olH, {
      className: d.closeButton,
      onClick: e
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsx)(a.zxk, {
        variant: "secondary",
        text: o.intl.string(o.t.cpT0Cg),
        type: "button",
        onClick: e
      })
    })]
  })
}