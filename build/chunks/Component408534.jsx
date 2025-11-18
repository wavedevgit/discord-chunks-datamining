/** Chunk was on 71264 **/
/** chunk id: 408534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk371882 = require("./371882.js");

function O(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: O,
    remoteMode: E,
    onInteraction: S
  } = e, P = (0, s.bp)(), {
    id: I,
    type: Z
  } = O, T = (0, r.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]), N = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(I)), A = (null == N ? true : N.type) === v.fO.STREAM ? N.stream : null, w = (0, r.e7)([a.Z], () => (null == N ? true : N.type) === v.fO.ACTIVITY ? a.Z.getApplication(N.applicationId) : true), M = (0, h.Z)(I), R = (0, y.Z)(I), L = (0, m.Z)(O, T, null == A ? true : A.ownerId, null == w ? true : w.id), k = (0, p.Z)(I), D = (0, C.Z)(), U = (0, c.$A)(I), B = (0, c.j8)(I), H = (0, b.Z)(A, P), V = (0, g.Z)(w, I), F = (0, f.Z)(), G = (0, o.Z)(O);
  return (0, i.jsxs)(l.v2r, {
    className: j.menu,
    onClose: t,
    onSelect: n,
    onInteraction: S,
    navId: "more-settings-context",
    "aria-label": x.intl.string(x.t.FTLzdR),
    children: [(0, i.jsx)(l.kSQ, {
      children: Z !== _.d4z.GUILD_STAGE_VOICE ? L : null
    }), (0, i.jsxs)(l.kSQ, {
      children: [Z === _.d4z.GUILD_STAGE_VOICE ? U : null, Z === _.d4z.GUILD_STAGE_VOICE ? B : null, E || Z === _.d4z.GUILD_STAGE_VOICE ? null : k, F, Z !== _.d4z.GUILD_STAGE_VOICE ? M : null, Z === _.d4z.GUILD_STAGE_VOICE || Z === _.d4z.GUILD_VOICE ? R : null]
    }), (0, i.jsx)(l.kSQ, {
      children: G
    }), (0, i.jsx)(l.kSQ, {
      children: D
    }), (0, i.jsxs)(l.kSQ, {
      children: [null != A ? H : null, null != w ? V : null]
    })]
  })
}