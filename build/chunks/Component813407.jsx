/** Chunk was on 54036 **/
/** chunk id: 813407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk886393 = require("./886393.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk969128 = require("./969128.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk914853 = require("./914853.js"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let I = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    channel: t,
    guild: n,
    widgetType: a,
    onSelect: o
  } = e, d = (0, A.A)(t), _ = (0, u.A)(t), {
    toggleFavoriteItem: I
  } = (0, b.Ay)(h.x.MESSAGES, t, a), D = (0, N.A)({
    kind: "CHANNEL",
    channel: t,
    guildId: n.id
  }, a), C = (0, c.A)(t, n), M = (0, p.A)(t), S = (0, E.Ay)(t), j = (0, y.A)(t), T = (0, f.A)({
    id: t.id,
    label: O.intl.string(O.t.gFHI3k)
  }), x = (0, s.A)(t), U = (0, g.Ay)(t), m = (0, v.os)("OverlayChannelListTextChannelContextMenu");
  return (0, r.jsxs)(i.W1t, {
    navId: "overlay-channel-context",
    onClose: l.Z_,
    "aria-label": O.intl.string(O.t.Xm41aV),
    onSelect: o,
    children: [(0, r.jsxs)(i.rXV, {
      children: [d, D, I]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(i.rXV, {
      children: [C, M, _]
    }, "channel-actions"), (0, r.jsxs)(i.rXV, {
      children: [S, m ? U : j]
    }, "notifications"), (0, r.jsx)(i.rXV, {
      children: x
    }, "activity"), (0, r.jsx)(i.rXV, {
      children: T
    }, "developer-actions")]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])