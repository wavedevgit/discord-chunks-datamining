/** Chunk was on 56167 **/
/** chunk id: 416951, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk895563 = require("./895563.js"),
  Chunk819403 = require("./819403.js"),
  Chunk777658 = require("./777658.js"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk794973 = require("./794973.js"),
  Chunk158508 = require("./158508.jsx"),
  Chunk558924 = require("./558924.js"),
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
  } = e, N = (0, s.Z)(t), j = (0, d.ZP)(t, true, false), y = (0, Z.Z)({
    userId: n.id,
    guildId: null
  }), I = (0, v.Z)({
    user: n,
    context: o
  }), x = (0, p.O)(t.id, u.Z.DM_CONDENSED_MENU), A = (0, p.Z)(n, x), P = (0, f.Z)(n), U = (0, O.Z)(n.id), T = (0, g.Z)({
    user: n
  }), R = (0, _.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), S = (0, h.Z)({
    user: n,
    location: u.Z.DM_CONDENSED_MENU
  }), D = (0, b.Z)(t.id, a), k = (0, c.l)(t), M = n.isNonUserBot(), w = t.isManaged();
  return <l.v2r navId={"dm-kebab-context"} onClose={r.Zy} aria-label={E.intl.string(E.t.liqwPD)} onSelect={m} onInteraction={C}>{<l.kSQ>{N}{k}</l.kSQ>}{!M && <i.Fragment>{<l.kSQ>{y}</l.kSQ>}{<l.kSQ>{I}{!w && A}{P}{U}</l.kSQ>}{<l.kSQ>{T}{R}{S}</l.kSQ>}</i.Fragment>}{<l.kSQ>{j}{D}</l.kSQ>}</l.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.DM_CONDENSED_MENU])