/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,n,e (module,exports,require) **/
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
  Chunk908023 = require("./908023.js");
let g = t => {
  let {
    onClose: n,
    channelId: e,
    applicationId: g,
    transitionState: p
  } = t, h = (0, l.e7)([d.ZP], () => d.ZP.getChannelMuteConfig(null, e)), _ = t => {
    s.Z.updateAppDMOverrideSettings(null, e, g, (0, u.u9)(t), r.ZB.Muted)
  };
  return (0, i.jsxs)(a.Y0X, {
    transitionState: p,
    size: a.CgR.SMALL,
    "aria-label": c.intl.string(c.t.uAmAiI),
    parentComponent: "MuteAppNotificationsModalV2",
    children: [(0, i.jsx)(a.hzk, {
      className: o.content,
      children: (0, i.jsx)(a.xJW, {
        title: c.intl.string(c.t.NkwaBg),
        tag: "h1",
        children: (0, i.jsx)(a.FXm, {
          options: (0, u.k)().map(t => {
            let {
              label: n,
              value: e
            } = t;
            return {
              name: n,
              value: e
            }
          }),
          onChange: t => _(t.value),
          value: null == h ? true : h.selected_time_window
        })
      })
    }), (0, i.jsx)(a.olH, {
      className: o.closeButton,
      onClick: n
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsx)(a.zxk, {
        variant: "secondary",
        text: c.intl.string(c.t.cpT0Cg),
        type: "button",
        onClick: n
      })
    })]
  })
}