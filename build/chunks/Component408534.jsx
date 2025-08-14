/** Chunk was on web.js **/
/** chunk id: 408534, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
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

function T(e) {
  let {
    onClose: t,
    onSelect: n,
    channel: T,
    remoteMode: S,
    onInteraction: A
  } = e, N = (0, a.bp)(), {
    id: C,
    type: R
  } = T, P = (0, i.e7)([u.Z], () => u.Z.getGuild(T.guild_id), [T.guild_id]), w = (0, i.e7)([d.Z], () => d.Z.getSelectedParticipant(C)), D = (null == w ? true : w.type) === y.fO.STREAM ? w.stream : null, L = (0, i.e7)([s.Z], () => (null == w ? true : w.type) === y.fO.ACTIVITY ? s.Z.getApplication(w.applicationId) : true), x = (0, _.Z)(C), M = (0, E.Z)(C), j = (0, h.Z)(T, P, null == D ? true : D.ownerId, null == L ? true : L.id), k = (0, f.Z)(C), U = (0, b.Z)(), G = (0, c.$A)(C), B = (0, c.j8)(C), Z = (0, g.Z)(D, N), F = (0, m.Z)(L, C), V = (0, p.Z)(), H = (0, l.Z)(T);
  return (0, r.jsxs)(o.v2r, {
    className: I.menu,
    onClose: t,
    onSelect: n,
    onInteraction: A,
    navId: "more-settings-context",
    "aria-label": v.intl.string(v.t.FTLzdX),
    children: [(0, r.jsx)(o.kSQ, {
      children: R !== O.d4z.GUILD_STAGE_VOICE ? j : null
    }), (0, r.jsxs)(o.kSQ, {
      children: [R === O.d4z.GUILD_STAGE_VOICE ? G : null, R === O.d4z.GUILD_STAGE_VOICE ? B : null, S || R === O.d4z.GUILD_STAGE_VOICE ? null : k, V, R !== O.d4z.GUILD_STAGE_VOICE ? x : null, R === O.d4z.GUILD_STAGE_VOICE || R === O.d4z.GUILD_VOICE ? M : null]
    }), (0, r.jsx)(o.kSQ, {
      children: H
    }), (0, r.jsx)(o.kSQ, {
      children: U
    }), (0, r.jsxs)(o.kSQ, {
      children: [null != D ? Z : null, null != L ? F : null]
    })]
  })
}