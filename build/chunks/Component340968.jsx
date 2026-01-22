/** Chunk was on 17425 **/
/** chunk id: 340968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk533957 = require("./533957.jsx"),
  Chunk886393 = require("./886393.jsx"),
  Chunk659566 = require("./659566.jsx"),
  Chunk477190 = require("./477190.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk317910 = require("./317910.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk969128 = require("./969128.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk358367.A)(function(e) {
  let {
    channel: t,
    guild: n,
    includeTopic: c = false,
    onSelect: a
  } = e, _ = (0, E.A)(t), P = (0, A.Ay)(t), w = (0, g.A)(t), D = (0, b.A)(t), x = (0, p.A)(t), m = (0, y.A)(t), N = (0, f.A)(t, n), C = (0, u.A)(t, n), I = (0, d.A)(t, n, h.rbe.GUILD_TEXT), S = (0, d.A)(t, n, h.rbe.GUILD_VOICE), T = (0, O.A)(t), G = (0, o.A)({
    id: t.id,
    label: v.intl.string(v.t.gFHI3k)
  }), M = (0, s.os)("ChannelTitleContextMenu"), L = (0, j.Ay)(t);
  return (0, r.jsxs)(i.W1t, {
    navId: "channel-context",
    onClose: l.Z_,
    "aria-label": v.intl.string(v.t.Xm41aV),
    onSelect: a,
    children: [(0, r.jsx)(i.rXV, {
      children: _
    }), (0, r.jsx)(i.rXV, {
      children: P
    }), (0, r.jsxs)(i.rXV, {
      children: [c ? x : M ? L : w, m]
    }), (0, r.jsxs)(i.rXV, {
      children: [N, D, C, I, S]
    }), (0, r.jsx)(i.rXV, {
      children: T
    }), (0, r.jsx)(i.rXV, {
      children: G
    })]
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.CHANNEL_TITLE_MENU])