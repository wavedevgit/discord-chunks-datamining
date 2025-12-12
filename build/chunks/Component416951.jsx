/** Chunk was on 56167 **/
/** chunk id: 416951, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let N = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: n,
    channel: t,
    channelSelected: a = false,
    context: o,
    onSelect: Z,
    onInteraction: N
  } = e, C = (0, c.Z)(t), j = (0, s.ZP)(t, true, false), y = (0, m.Z)({
    userId: n.id,
    guildId: null
  }), A = (0, h.Z)({
    user: n,
    context: o
  }), x = (0, p.O)(t.id, u.Z.DM_CONDENSED_MENU), I = (0, p.Z)(n, x), P = (0, f.Z)(n), U = (0, O.Z)(n.id), T = (0, g.Z)({
    user: n
  }), S = (0, _.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), R = (0, v.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), D = (0, b.Z)(t.id, a), M = (0, d.l)(t), k = n.isNonUserBot(), w = t.isManaged();
  return (0, i.jsxs)(l.v2r, {
    navId: "dm-kebab-context",
    onClose: r.Zy,
    "aria-label": E.intl.string(E.t.liqwPJ),
    onSelect: Z,
    onInteraction: N,
    children: [(0, i.jsxs)(l.kSQ, {
      children: [C, M]
    }), !k && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.kSQ, {
        children: y
      }), (0, i.jsxs)(l.kSQ, {
        children: [A, !w && I, P, U]
      }), (0, i.jsxs)(l.kSQ, {
        children: [T, S, R]
      })]
    }), (0, i.jsxs)(l.kSQ, {
      children: [j, D]
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_CONDENSED_MENU])