/** Chunk was on 57550 **/
/** chunk id: 576701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk886393 = require("./886393.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk253932 = require("./253932.js"),
  Chunk235661 = require("./235661.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function j(e) {
  var t;
  let n, j, v, g, {
      channel: A,
      onSelect: h,
      onInteraction: y
    } = e,
    E = (0, d.A)(),
    P = p.vL.useSetting(),
    D = (t = null != A ? A : true, n = (0, l.bG)([a.A], () => a.A.getWindow(O.MLl.CHANNEL_CALL_POPOUT)), null == t || null != n ? null : (0, r.jsx)(i.Drp, {
      id: "popout-call",
      label: f.intl.string(f.t.JzWezz),
      icon: i.tfB,
      action: () => s.openChannelCallPopout(t)
    })),
    w = (j = (0, l.bG)([b.A], () => b.A.getGuild(null == A ? true : A.guild_id)), v = (0, c.A)(null != A ? A : null, null != j ? j : null), g = (0, u.A)(null != A ? A : null), null != A && A.isGuildVocal() ? (0, r.jsxs)(i.rXV, {
      children: [v, g]
    }) : null);
  return (0, r.jsxs)(i.W1t, {
    navId: "rtc-channel",
    "aria-label": f.intl.string(f.t.ogxXGq),
    onClose: o.Z_,
    onSelect: h,
    onInteraction: y,
    children: [E, w, (0, r.jsxs)(i.rXV, {
      children: [D, (0, r.jsx)(i.sLh, {
        id: "show-voice-states",
        checked: P,
        action: () => p.vL.updateSetting(!P),
        label: f.intl.string(f.t.vkbSB0)
      })]
    })]
  })
}