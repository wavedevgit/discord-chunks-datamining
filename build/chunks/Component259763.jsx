/** Chunk was on 99312 **/
/** chunk id: 259763, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");
let c = t => {
  let {
    onClose: i,
    channelId: n,
    transitionState: c
  } = t, p = (0, l.bG)([a.Ay], () => a.Ay.isChannelMuted(null, n));
  return (0, r.jsx)(e.Modal, {
    transitionState: c,
    onClose: i,
    title: p ? u.intl.string(u.t["4rg7cA"]) : u.intl.string(u.t.uAmAiL),
    subtitle: p ? u.intl.string(u.t["5vton6"]) : u.intl.string(u.t.mscFJU),
    actions: [{
      variant: p ? "primary" : "critical-primary",
      text: p ? u.intl.string(u.t.YqAjXy) : u.intl.string(u.t.w4m945),
      onClick: () => {
        s.A.updateChannelOverrideSettings(null, n, {
          muted: !p
        }, p ? d.fd.Unmuted : d.fd.Muted), i()
      }
    }]
  })
}