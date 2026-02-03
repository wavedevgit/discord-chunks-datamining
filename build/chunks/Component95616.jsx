/** Chunk was on 56985 **/
/** chunk id: 95616, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk886393 = require("./886393.jsx"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk914853 = require("./914853.js"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");
let O = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var n, t;
  let {
    channel: a,
    widgetType: o,
    onSelect: u
  } = e, h = (0, s.A)(a), O = (0, c.A)(a), I = (0, b.A)({
    kind: "CHANNEL",
    channel: a,
    guildId: null != (n = null == (t = a.getGuildId) ? true : t.call(a)) ? n : null
  }, o), {
    toggleFavoriteItem: S
  } = (0, g.$X)(y.x.MESSAGES, a, o), _ = (0, d.Ay)(a), M = (0, E.A)({
    id: a.id,
    label: p.intl.string(p.t.gFHI3k)
  }), C = (0, A.A)(a), j = (0, f.Ay)(a), D = (0, v.os)("ReportToModChannelContextMenu");
  return (0, r.jsxs)(i.W1t, {
    navId: "overlay-report-to-mod-channel-context",
    onClose: l.Z_,
    "aria-label": p.intl.string(N.default["zp+z/E"]),
    onSelect: u,
    children: [(0, r.jsxs)(i.rXV, {
      children: [h, I, S]
    }, "mark-as-read-or-favorite"), (0, r.jsx)(i.rXV, {
      children: O
    }, "channel-actions"), (0, r.jsxs)(i.rXV, {
      children: [_, D ? j : C]
    }, "notifications"), (0, r.jsx)(i.rXV, {
      children: M
    }, "developer-actions")]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU])