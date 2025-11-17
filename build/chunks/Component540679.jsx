/** Chunk was on 8246 **/
/** chunk id: 540679, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let m = t => {
  var e;
  let {
    onClose: n,
    channelId: m,
    applicationId: O,
    transitionState: _
  } = t, h = (0, d.e7)([o.ZP], () => o.ZP.getChannelMuteConfig(null, m)), p = l.useMemo(() => (0, s.k)().map(t => {
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
    transitionState: _,
    onClose: n,
    title: g.intl.string(g.t.NkwaBs),
    actions: [{
      variant: "primary",
      text: g.intl.string(g.t.cpT0Cq),
      onClick: n
    }],
    children: (0, i.jsx)(r.FXm, {
      options: p,
      onChange: t => {
        u.Z.updateAppDMOverrideSettings(null, m, O, (0, s.u9)(t), c.ZB.Muted)
      },
      value: null != (e = null == h ? true : h.selected_time_window) ? e : true
    })
  })
}