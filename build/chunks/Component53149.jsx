/** Chunk was on 83545 **/
/** chunk id: 53149, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
  let {
    onClose: i,
    channelId: n,
    transitionState: c
  } = t, o = (0, r.e7)([a.ZP], () => a.ZP.isChannelMuted(null, n));
  return (0, e.jsx)(l.Modal, {
    transitionState: c,
    onClose: i,
    title: o ? d.intl.string(d.t["4rg7cH"]) : d.intl.string(d.t.uAmAiI),
    subtitle: o ? d.intl.string(d.t["5vton5"]) : d.intl.string(d.t.mscFJS),
    actions: [{
      variant: o ? "primary" : "critical-primary",
      text: o ? d.intl.string(d.t.YqAjX1) : d.intl.string(d.t["w4m94+"]),
      onClick: () => {
        s.Z.updateChannelOverrideSettings(null, n, {
          muted: !o
        }, o ? u.ZB.Unmuted : u.ZB.Muted), i()
      }
    }]
  })
}