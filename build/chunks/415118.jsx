/** Chunk was on 26976 **/
/** chunk id: 415118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk976192 = require("./976192.js"),
  Chunk276022 = require("./276022.jsx"),
  Chunk777658 = require("./777658.js"),
  Chunk858488 = require("./858488.js"),
  Chunk44652 = require("./44652.js"),
  Chunk185457 = require("./185457.jsx"),
  Chunk933409 = require("./933409.js"),
  Chunk389052 = require("./389052.jsx"),
  Chunk24311 = require("./24311.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk710631 = require("./710631.js"),
  Chunk297047 = require("./297047.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.js"),
  Chunk47091 = require("./47091.jsx"),
  Chunk991307 = require("./991307.js"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.js"),
  Chunk700994 = require("./700994.js"),
  Chunk332031 = require("./332031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    user: t,
    guildId: n,
    showModalItems: o = true,
    showMediaItems: a = false,
    showChatItems: u = true,
    context: T,
    onSelect: U
  } = e, D = {
    page: _.ZY5.GUILD_CHANNEL,
    section: _.jXE.CHAT_USERNAME,
    object: _.qAy.CONTEXT_MENU_ITEM
  }, L = (0, M.Z)({
    userId: t.id,
    guildId: n
  }), w = (0, P.Z)(t, n, T), k = (0, p.Z)(t.id, T), R = (0, N.Z)(t.id), B = (0, E.Z)({
    user: t,
    context: T
  }), q = (0, m.Z)({
    user: t,
    guildId: n,
    context: T
  }), V = (0, f.Z)({
    user: t
  }), G = (0, I.Z)(t.id), F = (0, C.Z)(t.id), Y = (0, c.Z)({
    guildId: n,
    userId: t.id,
    analyticsLocation: D,
    context: T
  }), H = (0, g.Z)({
    user: t,
    guildId: n
  }), Q = (0, v.Z)({
    user: t,
    guildId: n
  }), K = (0, s.Z)(null, t), W = (0, Z.Z)({
    user: t
  }), J = (0, b.Z)({
    user: t
  }), X = (0, S.Z)({
    user: t
  }), z = (0, h.Z)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), $ = (0, j.Z)({
    user: t,
    guildId: n,
    location: "GuildUserContextMenu"
  }), ee = (0, O.Z)(t, n), et = (0, x.Z)(t.id, n), en = (0, y.Z)(t, n), el = (0, d.Z)({
    id: t.id,
    label: A.intl.string(A.t["/AXYnJ"])
  }), ei = t.isNonUserBot();
  return <i.v2r navId={"user-context"} onClose={r.Zy} aria-label={A.intl.string(A.t.liqwPD)} onSelect={U}>{!ei && <l.Fragment>{<i.kSQ>{o && L}{u && w}{k}{B}{o && q}{o && V}{R}</i.kSQ>}{a && <i.kSQ>{G}</i.kSQ>}{<i.kSQ>{o && K}</i.kSQ>}{<i.kSQ>{a && F}{o && Y}{o && Q}{W}{J}{X}{H}{o && $}{o && z}</i.kSQ>}{<i.kSQ>{ee}</i.kSQ>}{<i.kSQ>{et}{en}</i.kSQ>}</l.Fragment>}{<i.kSQ>{el}</i.kSQ>}</i.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_USER_MENU])