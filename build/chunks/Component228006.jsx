/** Chunk was on 62891 **/
/** chunk id: 228006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => J
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk810845 = require("./810845.jsx"),
  Chunk854182 = require("./854182.jsx"),
  Chunk734337 = require("./734337.jsx"),
  Chunk855187 = require("./855187.jsx"),
  Chunk479335 = require("./479335.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk222311 = require("./222311.jsx"),
  Chunk164891 = require("./164891.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk803664 = require("./803664.jsx"),
  Chunk29293 = require("./29293.jsx"),
  Chunk509302 = require("./509302.js"),
  Chunk497600 = require("./497600.jsx"),
  Chunk773699 = require("./773699.jsx"),
  Chunk239211 = require("./239211.jsx"),
  Chunk707378 = require("./707378.jsx"),
  Chunk827936 = require("./827936.jsx"),
  Chunk984894 = require("./984894.jsx"),
  Chunk399476 = require("./399476.jsx"),
  Chunk889460 = require("./889460.jsx"),
  Chunk448290 = require("./448290.jsx"),
  Chunk301541 = require("./301541.jsx"),
  Chunk460597 = require("./460597.js"),
  Chunk635443 = require("./635443.jsx"),
  Chunk313998 = require("./313998.jsx"),
  Chunk198229 = require("./198229.jsx"),
  Chunk243949 = require("./243949.jsx"),
  Chunk972432 = require("./972432.jsx"),
  Chunk77544 = require("./77544.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let J = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t;
  let {
    user: n,
    channel: s,
    context: a,
    showChatItems: u = true,
    showMediaItems: X = false,
    showChannelCallItems: J = false,
    showModalItems: z = true,
    onSelect: Y,
    onHeightUpdate: W,
    onInteraction: Z
  } = e, H = (0, G.A)({
    userId: n.id,
    guildId: null
  }), K = (0, _.A)(n, null, a), q = (0, r.bG)([x.A, v.A], () => {
    let e = x.A.getVoiceChannelId();
    return v.A.getChannel(e)
  }), {
    enabled: Q
  } = j.A.useExperiment({
    guildId: null == q ? true : q.guild_id,
    location: "GroupDMUserContextMenu"
  }), $ = Q ? null == q ? true : q.id : s.id, ee = (0, V.A)(n, $), et = (0, S.A)(n.id, a), en = (0, w.A)({
    user: n,
    context: a
  }), ei = (0, D.A)({
    user: n,
    channelId: s.id,
    context: a
  }), er = (0, y.A)({
    user: n
  }), el = (0, B.A)(n.id), eo = (0, N.A)(n.id, s.id), es = (0, k.A)(n.id), ea = (0, f.u)({
    userId: n.id,
    channelId: s.id,
    guildId: s.getGuildId()
  }), ed = (0, M.A)(n.id, s.id), ec = (0, L.A)({
    user: n
  }), eu = (0, c.A)(null, n), eA = (0, O.A)({
    user: n
  }), eb = (0, C.A)({
    user: n
  }), eg = (0, T.A)({
    user: n
  }), ep = (0, P.A)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), ef = (0, U.A)({
    user: n,
    location: "GroupDMUserContextMenu"
  }), em = (0, m.A)({
    id: n.id,
    label: F.intl.string(F.t["/AXYnE"])
  }), eh = (0, R.A)(n.id), ej = (0, g.A)(n.id), ev = (0, b.A)(s.id), ex = (0, h.A)(n), eO = (0, p.A)(n.id), ey = (0, A.A)(s.id, n.id), eC = (0, I.A)({
    commandType: d.kc.USER,
    commandTargetId: n.id,
    channel: s,
    guildId: true,
    onHeightUpdate: W
  }), eD = (0, E.A)(n, s), eI = n.isNonUserBot(), eP = s.isManaged(), ew = null == (t = s.recipients) ? true : t.includes(n.id);
  return (0, i.jsxs)(l.W1t, {
    "data-menu-migrated": true,
    navId: "user-context",
    onClose: o.Z_,
    "aria-label": F.intl.string(F.t.liqwPJ),
    onSelect: Y,
    onInteraction: Z,
    children: [!eI && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.rXV, {
        children: ex
      }), (0, i.jsxs)(l.rXV, {
        children: [z && H, u && K, et, en, !eP && ee, z && ei, z && er, eh]
      }), X && (0, i.jsx)(l.rXV, {
        children: el
      }), ew && (0, i.jsxs)(l.rXV, {
        children: [!eP && eo, eD]
      }), (0, i.jsx)(l.rXV, {
        children: z && eu
      }), J && (0, i.jsxs)(l.rXV, {
        children: [ey, ev, ej]
      }), (0, i.jsxs)(l.rXV, {
        children: [X && es, X && ea, X && ed, X && eO, eC, z && ec, eA, eb, eg, z && ef, z && ep]
      })]
    }), (0, i.jsx)(l.rXV, {
      children: em
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GROUP_DM_USER_MENU])