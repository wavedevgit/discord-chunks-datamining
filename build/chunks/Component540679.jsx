/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let h = t => {
  let {
    onClose: e,
    channelId: n,
    applicationId: h,
    transitionState: _
  } = t, p = (0, l.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, n));
  return (0, i.jsx)(a.Modal, {
    transitionState: _,
    onClose: e,
    title: g.intl.string(g.t.NkwaBg),
    actions: [{
      variant: "primary",
      text: g.intl.string(g.t.cpT0Cg),
      onClick: e
    }],
    children: (0, i.jsx)(d.xJW, {
      children: (0, i.jsx)(r.Gu, {
        options: (0, s.k)().map(t => {
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
          return e = t.value, void u.Z.updateAppDMOverrideSettings(null, n, h, (0, s.u9)(e), c.ZB.Muted)
        },
        value: null == p ? true : p.selected_time_window
      })
    })
  })
}