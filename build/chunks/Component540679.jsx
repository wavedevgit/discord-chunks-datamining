/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let g = t => {
  let {
    onClose: e,
    channelId: n,
    applicationId: g,
    transitionState: f
  } = t, p = (0, l.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, n));
  return (0, i.jsx)(a.Modal, {
    transitionState: f,
    onClose: e,
    title: o.intl.string(o.t.NkwaBg),
    actions: [{
      variant: "primary",
      text: o.intl.string(o.t.cpT0Cg),
      onClick: e
    }],
    children: (0, i.jsx)(r.xJW, {
      children: (0, i.jsx)(r.FXm, {
        options: (0, d.k)().map(t => {
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
          return e = t.value, void u.Z.updateAppDMOverrideSettings(null, n, g, (0, d.u9)(e), s.ZB.Muted)
        },
        value: null == p ? true : p.selected_time_window
      })
    })
  })
}