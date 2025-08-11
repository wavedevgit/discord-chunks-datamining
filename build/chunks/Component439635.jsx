/** Chunk was on 24783 **/
/** chunk id: 439635, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk398048 = require("./398048.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk315732 = require("./315732.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk852245 = require("./852245.jsx"),
  Chunk367722 = require("./367722.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk593589 = require("./593589.jsx"),
  Chunk442754 = require("./442754.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = (0, Chunk108843.Z)(function(e) {
  let {
    channel: t,
    guild: n,
    includeTopic: c = false,
    onSelect: o
  } = e, v = (0, E.Z)(t), N = (0, g.ZP)(t), w = (0, j.Z)(t), x = (0, d.Z)(t), C = (0, p.Z)(t), m = (0, O.Z)(t), S = (0, y.Z)(t, n), T = (0, s.Z)(t, n), A = (0, b.Z)(t, n, _.d4z.GUILD_TEXT), D = (0, b.Z)(t, n, _.d4z.GUILD_VOICE), I = (0, f.Z)(t), k = (0, a.Z)({
    id: t.id,
    label: Z.intl.string(Z.t.gFHI3t)
  }), L = (0, P.Z)(t, "title_context_menu"), M = (0, u.Mn)("ChannelTitleContextMenu"), U = (0, h.ZP)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: l.Zy,
    "aria-label": Z.intl.string(Z.t.Xm41aW),
    onSelect: o,
    children: [(0, r.jsx)(i.kSQ, {
      children: v
    }), (0, r.jsx)(i.kSQ, {
      children: N
    }), (0, r.jsxs)(i.kSQ, {
      children: [c ? C : M ? U : w, m]
    }), (0, r.jsxs)(i.kSQ, {
      children: [S, x, T, A, D]
    }), (0, r.jsx)(i.kSQ, {
      children: L
    }), (0, r.jsx)(i.kSQ, {
      children: I
    }), (0, r.jsx)(i.kSQ, {
      children: k
    })]
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_TITLE_MENU])