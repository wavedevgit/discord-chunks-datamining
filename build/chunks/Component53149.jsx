/** Chunk was on 83545 **/
/** chunk id: 53149, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
  let {
    onClose: i,
    channelId: n,
    transitionState: c
  } = t, o = (0, l.e7)([a.ZP], () => a.ZP.isChannelMuted(null, n));
  return (0, e.jsx)(r.Modal, {
    transitionState: c,
    onClose: i,
    title: o ? d.intl.string(d.t["4rg7cA"]) : d.intl.string(d.t.uAmAiL),
    subtitle: o ? d.intl.string(d.t["5vton6"]) : d.intl.string(d.t.mscFJU),
    actions: [{
      variant: o ? "primary" : "critical-primary",
      text: o ? d.intl.string(d.t.YqAjXy) : d.intl.string(d.t.w4m945),
      onClick: () => {
        s.Z.updateChannelOverrideSettings(null, n, {
          muted: !o
        }, o ? u.ZB.Unmuted : u.ZB.Muted), i()
      }
    }]
  })
}