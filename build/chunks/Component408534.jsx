/** Chunk was on 86357 **/
/** chunk id: 408534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk812206 = require("./812206.js"),
  Chunk420529 = require("./420529.jsx"),
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

function O(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: O,
    remoteMode: E,
    onInteraction: S
  } = e, P = (0, a.bp)(), {
    id: I,
    type: Z
  } = O, T = (0, i.e7)([u.Z], () => u.Z.getGuild(O.guild_id), [O.guild_id]), N = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(I)), A = (null == N ? true : N.type) === C.fO.STREAM ? N.stream : null, w = (0, i.e7)([o.Z], () => (null == N ? true : N.type) === C.fO.ACTIVITY ? o.Z.getApplication(N.applicationId) : true), R = (0, h.Z)(I), M = (0, y.Z)(I), k = (0, m.Z)(O, T, null == A ? true : A.ownerId, null == w ? true : w.id), D = (0, p.Z)(I), L = (0, _.Z)(), U = (0, c.$A)(I), B = (0, c.j8)(I), F = (0, b.Z)(A, P), H = (0, g.Z)(w, I), G = (0, f.Z)(), V = (0, s.Z)(O);
  return (0, r.jsxs)(l.v2r, {
    className: j.menu,
    onClose: t,
    onSelect: n,
    onInteraction: S,
    navId: "more-settings-context",
    "aria-label": v.intl.string(v.t.FTLzdX),
    children: [(0, r.jsx)(l.kSQ, {
      children: Z !== x.d4z.GUILD_STAGE_VOICE ? k : null
    }), (0, r.jsxs)(l.kSQ, {
      children: [Z === x.d4z.GUILD_STAGE_VOICE ? U : null, Z === x.d4z.GUILD_STAGE_VOICE ? B : null, E || Z === x.d4z.GUILD_STAGE_VOICE ? null : D, G, Z !== x.d4z.GUILD_STAGE_VOICE ? R : null, Z === x.d4z.GUILD_STAGE_VOICE || Z === x.d4z.GUILD_VOICE ? M : null]
    }), (0, r.jsx)(l.kSQ, {
      children: V
    }), (0, r.jsx)(l.kSQ, {
      children: L
    }), (0, r.jsxs)(l.kSQ, {
      children: [null != A ? F : null, null != w ? H : null]
    })]
  })
}