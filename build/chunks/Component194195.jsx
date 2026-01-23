/** Chunk was on 23440 **/
/** chunk id: 194195, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk398590 = require("./398590.js"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk317910 = require("./317910.jsx"),
  Chunk985018 = require("./985018.jsx");
let b = (0, Chunk358367.A)(function(n) {
  let {
    channel: e,
    onSelect: t
  } = n, l = (0, A.A)(e), s = (0, o.A)({
    id: e.id,
    label: d.intl.string(d.t.gFHI3k)
  });
  return (0, r.jsxs)(a.W1t, {
    "data-menu-mixed": true,
    navId: "channel-context",
    onClose: c.Z_,
    "aria-label": d.intl.string(d.t.Xm41aV),
    onSelect: t,
    children: [(0, r.jsxs)(a.rXV, {
      children: [l, e.isCategory() ? null : (0, r.jsx)(a.Drp, {
        id: "jump-to-channel",
        label: d.intl.string(d.t.bQIM40),
        action: () => {
          (0, u.uh)(e.guild_id, e.id), (0, i.jH)()
        }
      })]
    }), (0, r.jsx)(a.rXV, {
      children: s
    })]
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.CHANNEL_AUDIT_LOG_MENU])