/** Chunk was on 24783 **/
/** chunk id: 439635, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => Z
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let Z = (0, Chunk108843.Z)(function(e) {
  let {
    channel: n,
    guild: t,
    includeTopic: o = false,
    onSelect: c
  } = e, Z = (0, P.Z)(n), N = (0, g.ZP)(n), w = (0, h.Z)(n), C = (0, d.Z)(n), x = (0, p.Z)(n), m = (0, O.Z)(n), S = (0, y.Z)(n, t), T = (0, s.Z)(n, t), I = (0, b.Z)(n, t, _.d4z.GUILD_TEXT), A = (0, b.Z)(n, t, _.d4z.GUILD_VOICE), D = (0, f.Z)(n), k = (0, a.Z)({
    id: n.id,
    label: v.intl.string(v.t.gFHI3k)
  }), L = (0, E.Z)(n, "title_context_menu"), M = (0, u.Mn)("ChannelTitleContextMenu"), G = (0, j.ZP)(n);
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: l.Zy,
    "aria-label": v.intl.string(v.t.Xm41aV),
    onSelect: c,
    children: [(0, r.jsx)(i.kSQ, {
      children: Z
    }), (0, r.jsx)(i.kSQ, {
      children: N
    }), (0, r.jsxs)(i.kSQ, {
      children: [o ? x : M ? G : w, m]
    }), (0, r.jsxs)(i.kSQ, {
      children: [S, C, T, I, A]
    }), (0, r.jsx)(i.kSQ, {
      children: L
    }), (0, r.jsx)(i.kSQ, {
      children: D
    }), (0, r.jsx)(i.kSQ, {
      children: k
    })]
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_TITLE_MENU])