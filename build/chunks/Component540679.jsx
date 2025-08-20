/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    transitionState: h
  } = t, _ = (0, l.e7)([s.ZP], () => s.ZP.getChannelMuteConfig(null, n));
  return (0, i.jsx)(a.Modal, {
    transitionState: h,
    onClose: e,
    title: c.intl.string(c.t.NkwaBg),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.cpT0Cg),
      onClick: e
    }],
    children: (0, i.jsx)(r.xJW, {
      children: (0, i.jsx)(r.FXm, {
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
          return e = t.value, void d.Z.updateAppDMOverrideSettings(null, n, g, (0, u.u9)(e), o.ZB.Muted)
        },
        value: null == _ ? true : _.selected_time_window
      })
    })
  })
}