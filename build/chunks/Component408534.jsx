/** Chunk was on 81985 **/
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
    onInteraction: I
  } = e, P = (0, s.bp)(), {
    id: Z,
    type: N
  } = S, T = (0, i.e7)([u.Z], () => u.Z.getGuild(S.guild_id), [S.guild_id]), A = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(Z)), w = (null == A ? true : A.type) === j.fO.STREAM ? A.stream : null, R = (0, i.e7)([a.Z], () => (null == A ? true : A.type) === j.fO.ACTIVITY ? a.Z.getApplication(A.applicationId) : true), D = (0, h.Z)(Z), M = (0, v.Z)(Z), k = (0, m.Z)(S, T, null == w ? true : w.ownerId, null == R ? true : R.id), L = (0, f.Z)(Z), U = (0, O.Z)(), G = (0, c.$A)(Z), B = (0, c.j8)(Z), F = (0, y.Z)(w, P), H = (0, b.Z)(R, Z), V = (0, g.Z)(), z = (0, o.Z)(S), W = (0, p.m)(Z);
  return (0, r.jsxs)(l.v2r, {
    className: E.menu,
    onClose: t,
    onSelect: n,
    onInteraction: I,
    navId: "more-settings-context",
    "aria-label": C.intl.string(C.t.FTLzdR),
    children: [(0, r.jsx)(l.kSQ, {
      children: N !== x.d4z.GUILD_STAGE_VOICE ? k : null
    }), (0, r.jsxs)(l.kSQ, {
      children: [N === x.d4z.GUILD_STAGE_VOICE ? G : null, N === x.d4z.GUILD_STAGE_VOICE ? B : null, _ || N === x.d4z.GUILD_STAGE_VOICE ? null : L, V, N !== x.d4z.GUILD_STAGE_VOICE ? D : null, N === x.d4z.GUILD_STAGE_VOICE || N === x.d4z.GUILD_VOICE ? M : null]
    }), (0, r.jsx)(l.kSQ, {
      children: z
    }), (0, r.jsxs)(l.kSQ, {
      children: [!S.isManaged() && S.isPrivate() ? W : null, U]
    }), (0, r.jsxs)(l.kSQ, {
      children: [null != w ? F : null, null != R ? H : null]
    })]
  })
}