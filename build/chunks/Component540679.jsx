/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let _ = t => {
  var e;
  let {
    onClose: n,
    channelId: _,
    applicationId: m,
    transitionState: p
  } = t, O = (0, a.e7)([c.ZP], () => c.ZP.getChannelMuteConfig(null, _)), v = l.useMemo(() => (0, o.k)().map(t => {
    let {
      label: e,
      value: n
    } = t;
    return {
      name: e,
      value: n
    }
  }), []);
  return (0, i.jsx)(r.Modal, {
    transitionState: p,
    onClose: n,
    title: h.intl.string(h.t.NkwaBg),
    actions: [{
      variant: "primary",
      text: h.intl.string(h.t.cpT0Cg),
      onClick: n
    }],
    children: (0, i.jsx)(u.xJW, {
      children: (0, i.jsx)(d.E, {
        options: v,
        onChange: t => {
          s.Z.updateAppDMOverrideSettings(null, _, m, (0, o.u9)(t), g.ZB.Muted)
        },
        value: null != (e = null == O ? true : O.selected_time_window) ? e : true
      })
    })
  })
}