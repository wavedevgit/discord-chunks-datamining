/** Chunk was on 57550 **/
/** chunk id: 576701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function f(e) {
  var t;
  let n, f, g, y, {
      channel: A,
      onSelect: E,
      onInteraction: j
    } = e,
    D = (0, p.A)(),
    P = d.vL.useSetting(),
    h = (t = null != A ? A : true, n = (0, l.bG)([a.A], () => a.A.getWindow(O.MLl.CHANNEL_CALL_POPOUT)), null == t || null != n ? null : (0, r.jsx)(i.Drp, {
      id: "popout-call",
      label: v.intl.string(v.t.JzWezz),
      icon: i.tfB,
      trailingIndicator: {
        type: "icon",
        icon: i.tfB
      },
      action: () => s.openChannelCallPopout(t)
    })),
    w = (f = (0, l.bG)([b.A], () => b.A.getGuild(null == A ? true : A.guild_id)), g = (0, u.A)(null != A ? A : null, null != f ? f : null), y = (0, c.A)(null != A ? A : null), null != A && A.isGuildVocal() ? (0, r.jsxs)(i.rXV, {
      children: [g, y]
    }) : null);
  return (0, r.jsxs)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "rtc-channel",
    "aria-label": v.intl.string(v.t.ogxXGq),
    onClose: o.Z_,
    onSelect: E,
    onInteraction: j,
    children: [D, w, (0, r.jsxs)(i.rXV, {
      children: [h, (0, r.jsx)(i.sLh, {
        id: "show-voice-states",
        checked: P,
        action: () => d.vL.updateSetting(!P),
        label: v.intl.string(v.t.vkbSB0)
      })]
    })]
  })
}