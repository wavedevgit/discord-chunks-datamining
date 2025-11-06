/** Chunk was on 88647 **/
/** chunk id: 408534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk420529 = require("./420529.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk831002 = require("./831002.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk358221 = require("./358221.js"),
  Chunk843638 = require("./843638.jsx"),
  Chunk441061 = require("./441061.jsx"),
  Chunk167675 = require("./167675.jsx"),
  Chunk532239 = require("./532239.jsx"),
  Chunk811423 = require("./811423.jsx"),
  Chunk418469 = require("./418469.jsx"),
  Chunk673539 = require("./673539.jsx"),
  Chunk589049 = require("./589049.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895634 = require("./895634.js");

function E(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: E,
    remoteMode: j,
    onInteraction: S
  } = e, P = (0, s.bp)(), {
    id: I,
    type: Z
  } = E, T = (0, i.e7)([u.Z], () => u.Z.getGuild(E.guild_id), [E.guild_id]), N = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(I)), A = (null == N ? true : N.type) === C.fO.STREAM ? N.stream : null, w = (0, i.e7)([a.Z], () => (null == N ? true : N.type) === C.fO.ACTIVITY ? a.Z.getApplication(N.applicationId) : true), M = (0, f.Z)(I), R = (0, _.Z)(I), D = (0, m.Z)(E, T, null == A ? true : A.ownerId, null == w ? true : w.id), k = (0, p.Z)(I), L = (0, y.Z)(), U = (0, c.$A)(I), B = (0, c.j8)(I), F = (0, b.Z)(A, P), V = (0, g.Z)(w, I), H = (0, h.Z)(), G = (0, o.Z)(E);
  return (0, r.jsxs)(l.v2r, {
    className: x.menu,
    onClose: t,
    onSelect: n,
    onInteraction: S,
    navId: "more-settings-context",
    "aria-label": O.intl.string(O.t.FTLzdR),
    children: [(0, r.jsx)(l.kSQ, {
      children: Z !== v.d4z.GUILD_STAGE_VOICE ? D : null
    }), (0, r.jsxs)(l.kSQ, {
      children: [Z === v.d4z.GUILD_STAGE_VOICE ? U : null, Z === v.d4z.GUILD_STAGE_VOICE ? B : null, j || Z === v.d4z.GUILD_STAGE_VOICE ? null : k, H, Z !== v.d4z.GUILD_STAGE_VOICE ? M : null, Z === v.d4z.GUILD_STAGE_VOICE || Z === v.d4z.GUILD_VOICE ? R : null]
    }), (0, r.jsx)(l.kSQ, {
      children: G
    }), (0, r.jsx)(l.kSQ, {
      children: L
    }), (0, r.jsxs)(l.kSQ, {
      children: [null != A ? F : null, null != w ? V : null]
    })]
  })
}