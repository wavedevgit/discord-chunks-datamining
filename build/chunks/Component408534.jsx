/** Chunk was on 40184 **/
/** chunk id: 408534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  Chunk225653 = require("./225653.jsx"),
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
  Chunk898742 = require("./898742.js");

function S(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: S,
    remoteMode: _,
    onInteraction: P
  } = e, I = (0, s.bp)(), {
    id: Z,
    type: T
  } = S, N = (0, r.e7)([u.Z], () => u.Z.getGuild(S.guild_id), [S.guild_id]), A = (0, r.e7)([d.Z], () => d.Z.getSelectedParticipant(Z)), w = (null == A ? true : A.type) === x.fO.STREAM ? A.stream : null, M = (0, r.e7)([a.Z], () => (null == A ? true : A.type) === x.fO.ACTIVITY ? a.Z.getApplication(A.applicationId) : true), R = (0, h.Z)(Z), L = (0, y.Z)(Z), D = (0, g.Z)(S, N, null == w ? true : w.ownerId, null == M ? true : M.id), k = (0, f.Z)(Z), U = (0, v.Z)(), V = (0, c.$A)(Z), F = (0, c.j8)(Z), H = (0, C.Z)(w, I), B = (0, b.Z)(M, Z), G = (0, m.Z)(), z = (0, o.Z)(S), W = (0, p.m)(Z);
  return (0, i.jsxs)(l.v2r, {
    className: j.menu,
    onClose: t,
    onSelect: n,
    onInteraction: P,
    navId: "more-settings-context",
    "aria-label": E.intl.string(E.t.FTLzdR),
    children: [(0, i.jsx)(l.kSQ, {
      children: T !== O.d4z.GUILD_STAGE_VOICE ? D : null
    }), (0, i.jsxs)(l.kSQ, {
      children: [T === O.d4z.GUILD_STAGE_VOICE ? V : null, T === O.d4z.GUILD_STAGE_VOICE ? F : null, _ || T === O.d4z.GUILD_STAGE_VOICE ? null : k, G, T !== O.d4z.GUILD_STAGE_VOICE ? R : null, T === O.d4z.GUILD_STAGE_VOICE || T === O.d4z.GUILD_VOICE ? L : null]
    }), (0, i.jsx)(l.kSQ, {
      children: z
    }), (0, i.jsxs)(l.kSQ, {
      children: [!S.isManaged() && S.isPrivate() ? W : null, U]
    }), (0, i.jsxs)(l.kSQ, {
      children: [null != w ? H : null, null != M ? B : null]
    })]
  })
}