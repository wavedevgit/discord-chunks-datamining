/** Chunk was on 16120 **/
/** chunk id: 833737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk976192 = require("./976192.js"),
  Chunk910693 = require("./910693.js"),
  Chunk271383 = require("./271383.js"),
  Chunk979651 = require("./979651.js"),
  Chunk933409 = require("./933409.js"),
  Chunk389052 = require("./389052.jsx"),
  Chunk158508 = require("./158508.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk712301 = require("./712301.jsx"),
  Chunk567711 = require("./567711.jsx"),
  Chunk358386 = require("./358386.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk931617 = require("./931617.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let C = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  var t;
  let {
    user: n,
    guildId: u,
    channelId: c,
    context: M,
    onSelect: C,
    moderationAlertId: A,
    analyticsLocation: I,
    analyticsLocations: T,
    onCloseContextMenu: D,
    showTransferOwnershipItem: x
  } = e, {
    analyticsLocations: w
  } = (0, f.ZP)(d.Z.CONTEXT_MENU), U = (0, s.O)(), R = null != (t = null == T ? true : T[0]) ? t : w[0], k = (0, O.sE)(u, {
    location: R,
    targetUserId: n.id
  }), L = (0, i.e7)([Z.Z], () => {
    var e;
    return null != (e = Z.Z.getUserVoiceChannelId(u, n.id)) ? e : true
  }, [u, n.id]), q = r.useCallback(() => {
    k(O.jQ.COPY_ID)
  }, [k]), B = (0, i.e7)([E.ZP], () => E.ZP.isMember(u, n.id), [u, n.id]), G = (0, _.Z)({
    userId: n.id,
    guildId: u,
    sourceAnalyticsLocations: T
  }), V = (0, j.Z)(n.id, M), F = (0, g.Z)({
    guildId: u,
    userId: n.id,
    analyticsLocation: null != I ? I : U.location,
    analyticsLocations: [R],
    context: M
  }), K = (0, p.Z)({
    user: n,
    guildId: u,
    location: R,
    channelId: c
  }), Y = (0, y.Z)({
    user: n,
    guildId: u,
    location: R,
    channelId: c
  }), Q = (0, P.Z)(n, u, null != c ? c : L, R), H = (0, h.Z)(c, A), W = (0, v.Z)(n, u), X = (0, S.Z)(n.id, u, false, R), z = (0, b.Z)({
    id: n.id,
    label: N.intl.string(N.t["/AXYnJ"]),
    onSuccess: q
  }), J = (0, m.Z)(n, u), $ = !!(null == n ? true : n.isNonUserBot());
  return <a.v2r navId={"user-context"} onClose={() => {
      (0, o.Zy)(), null == D || D()
    }} aria-label={N.intl.string(N.t.liqwPD)} onSelect={C}>{!$ && <l.Fragment>{<a.kSQ>{G}{V}</a.kSQ>}{<a.kSQ>{F}{Y}{K}</a.kSQ>}{B && <l.Fragment>{<a.kSQ>{Q}</a.kSQ>}{<a.kSQ>{X}{J}</a.kSQ>}</l.Fragment>}{null != A ? H : null}{x && null != W ? <a.kSQ>{W}</a.kSQ> : null}</l.Fragment>}{<a.kSQ>{z}</a.kSQ>}</a.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GUILD_MODERATION_USER_MENU])