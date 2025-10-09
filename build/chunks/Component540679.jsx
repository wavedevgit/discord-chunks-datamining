/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
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
    applicationId: h,
    transitionState: m
  } = t, p = (0, d.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, _)), O = l.useMemo(() => (0, s.k)().map(t => {
    let {
      label: e,
      value: n
    } = t;
    return {
      name: e,
      value: n
    }
  }), []);
  return (0, i.jsx)(a.Modal, {
    transitionState: m,
    onClose: n,
    title: c.intl.string(c.t.NkwaBg),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.cpT0Cg),
      onClick: n
    }],
    children: (0, i.jsx)(r.E, {
      options: O,
      onChange: t => {
        u.Z.updateAppDMOverrideSettings(null, _, h, (0, s.u9)(t), g.ZB.Muted)
      },
      value: null != (e = null == p ? true : p.selected_time_window) ? e : true
    })
  })
}