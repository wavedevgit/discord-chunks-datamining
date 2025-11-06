/** Chunk was on 88647 **/
/** chunk id: 462061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => D,
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk763520 = require("./763520.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk598006 = require("./598006.js"),
  Chunk502053 = require("./502053.js"),
  Chunk965048 = require("./965048.js"),
  Chunk266910 = require("./266910.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk518950 = require("./518950.js"),
  Chunk470956 = require("./470956.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451478 = require("./451478.js"),
  Chunk5192 = require("./5192.js"),
  Chunk44136 = require("./44136.js"),
  I = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let M = Chunk481060.EFr.SIZE_80,
  R = Chunk481060.EFr.SIZE_40;

function D(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, v.Eu)(t, n.id) ? (0, r.jsx)(s.u, {
    text: A.intl.string(A.t.HFwRpk),
    position: "bottom",
    children: (0, r.jsx)("div", {
      className: w.interactive,
      children: (0, r.jsx)(c.Mgn, {
        color: c.TVs.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, r.jsx)(Z.Z, {
    userId: n.user.id
  })
}

function k(e) {
  let {
    participant: t,
    channel: n,
    inCall: l,
    width: s,
    selected: c,
    popoutType: v,
    fit: Z,
    onVideoResize: D,
    blocked: k,
    ignored: L,
    noVideoRender: U = false,
    pulseSpeakingIndicator: B = false,
    paused: V = false
  } = e, F = E.Z.getVideoComponent(), H = (0, o.e7)([O.default], () => O.default.getId()), {
    user: G,
    streamId: W,
    speaking: z
  } = t, q = G.id === H, Y = (0, P.ZP)(t), K = (0, o.e7)([j.Z], () => j.Z.isFocused()), X = (0, o.e7)([y.Z], () => y.Z.getWindowFocused(T.KJ3.CHANNEL_CALL_POPOUT)), J = (0, o.e7)([E.Z], () => null != G.id && E.Z.isLocalVideoDisabled(G.id, (0, f.Z)(t.type)), [G.id, t.type]), Q = (0, o.e7)([x.ZP], () => x.ZP.isGuestOrLurker(n.guild_id, G.id)), $ = S.ZP.getName(n.getGuildId(), n.id, G) + (Q ? " ".concat(A.intl.string(A.t["pFO/Ph"])) : ""), ee = z && (X || K), et = s < 124 ? R : M, {
    avatarSrc: en,
    avatarDecorationSrc: er
  } = (0, C.Z)({
    userId: G.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), ei = (0, o.e7)([p.Z], () => p.Z.getSelectedParticipant(n.id)), el = (0, g.Z)(N.Yn.DEFAULT, t.user.id), ea = (0, m.Z)(t.user.id), eo = {
    channel: n,
    selectedParticipant: ei,
    user: G
  }, es = i.useRef(eo);
  return (i.useEffect(() => {
    es.current = eo
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = es.current;
    e.isGuildStageVoice() && !Y && (null == t ? true : t.id) === n.id && u.Z.selectParticipant(e.id, null)
  }, [Y]), l && !J && !U && Y && !c && null != F && E.Z.supports(N.AN.VIDEO)) ? null != el && null == ea ? (0, r.jsx)(I.Z, {
    avError: el,
    userId: t.id,
    width: s,
    selected: c
  }) : (0, r.jsx)(_.Z, {
    onResize: D,
    wrapperClassName: v !== h.P.CALL_TILE ? w.videoWrapper : true,
    className: w.content,
    mirror: q,
    streamId: W,
    videoComponent: F,
    fit: Z,
    videoSpinnerContext: G.id === H ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
    paused: V,
    userId: G.id
  }, W) : (0, r.jsx)("div", {
    className: a()(w.content, {
      [w.blockedAvatar]: k || L
    }),
    children: (0, r.jsx)(b.Z, {
      "aria-label": $,
      src: en,
      avatarDecoration: er,
      backgroundSrc: G.getAvatarURL(n.guild_id, 80),
      size: et,
      pulseSpeakingIndicator: B,
      speaking: z,
      userId: G.id
    })
  })
}