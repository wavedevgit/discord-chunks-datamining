/** Chunk was on 56167 **/
/** chunk id: 416951, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk895563 = require("./895563.jsx"),
  Chunk819403 = require("./819403.jsx"),
  Chunk777658 = require("./777658.jsx"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk794973 = require("./794973.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk558924 = require("./558924.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let C = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: n,
    channel: t,
    channelSelected: a = false,
    context: o,
    onSelect: m,
    onInteraction: C
  } = e, N = (0, s.Z)(t), j = (0, d.ZP)(t, true, false), y = (0, O.Z)({
    userId: n.id,
    guildId: null
  }), I = (0, h.Z)({
    user: n,
    context: o
  }), x = (0, p.O)(t.id, u.Z.DM_CONDENSED_MENU), A = (0, p.Z)(n, x), P = (0, f.Z)(n), U = (0, Z.Z)(n.id), T = (0, g.Z)({
    user: n
  }), R = (0, _.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), S = (0, v.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), D = (0, b.Z)(t.id, a), k = (0, c.l)(t), M = n.isNonUserBot(), w = t.isManaged();
  return (0, i.jsxs)(l.v2r, {
    navId: "dm-kebab-context",
    onClose: r.Zy,
    "aria-label": E.intl.string(E.t.liqwPJ),
    onSelect: m,
    onInteraction: C,
    children: [(0, i.jsxs)(l.kSQ, {
      children: [N, k]
    }), !M && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.kSQ, {
        children: y
      }), (0, i.jsxs)(l.kSQ, {
        children: [I, !w && A, P, U]
      }), (0, i.jsxs)(l.kSQ, {
        children: [T, R, S]
      })]
    }), (0, i.jsxs)(l.kSQ, {
      children: [j, D]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_CONDENSED_MENU])