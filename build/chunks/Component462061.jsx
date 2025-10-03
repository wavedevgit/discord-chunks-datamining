/** Chunk was on 92592 **/
/** chunk id: 462061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => D,
  Z: () => M
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
  j = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let R = Chunk481060.EFr.SIZE_80,
  N = Chunk481060.EFr.SIZE_40;

function D(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, h.Eu)(t, n.id) ? (0, r.jsx)(c.u, {
    text: A.intl.string(A.t.HFwRpq),
    position: "bottom",
    children: (0, r.jsx)("div", {
      className: T.interactive,
      children: (0, r.jsx)(s.Mgn, {
        color: s.TVs.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, r.jsx)(Z.Z, {
    userId: n.user.id
  })
}

function M(e) {
  let {
    participant: t,
    channel: n,
    inCall: l,
    width: c,
    selected: s,
    fit: h,
    onVideoResize: Z,
    blocked: D,
    ignored: M,
    noVideoRender: k = false,
    pulseSpeakingIndicator: F = false,
    inOverlayPopout: L = false,
    paused: V = false
  } = e, U = O.Z.getVideoComponent(), W = (0, o.e7)([S.default], () => S.default.getId()), {
    user: H,
    streamId: B,
    speaking: z
  } = t, q = H.id === W, Y = (0, w.ZP)(t), G = (0, o.e7)([I.Z], () => I.Z.isFocused()), K = (0, o.e7)([E.Z], () => E.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)), Q = (0, o.e7)([O.Z], () => null != H.id && O.Z.isLocalVideoDisabled(H.id, (0, p.Z)(t.type)), [H.id, t.type]), X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, H.id)), J = C.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(A.intl.string(A.t["pFO/Pj"])) : ""), $ = z && (K || G), ee = c < 124 ? N : R, {
    avatarSrc: et,
    avatarDecorationSrc: en
  } = (0, v.Z)({
    userId: H.id,
    guildId: n.guild_id,
    size: ee,
    animateOnHover: !$
  }), er = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)), ei = (0, _.Z)(x.Yn.DEFAULT, t.user.id), el = (0, m.Z)(t.user.id), ea = {
    channel: n,
    selectedParticipant: er,
    user: H
  }, eo = i.useRef(ea);
  return (i.useEffect(() => {
    eo.current = ea
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = eo.current;
    e.isGuildStageVoice() && !Y && (null == t ? true : t.id) === n.id && u.Z.selectParticipant(e.id, null)
  }, [Y]), l && !Q && !k && Y && !s && null != U && O.Z.supports(x.AN.VIDEO)) ? null != ei && null == el ? (0, r.jsx)(j.Z, {
    avError: ei,
    userId: t.id,
    width: c,
    selected: s
  }) : (0, r.jsx)(b.Z, {
    onResize: Z,
    wrapperClassName: T.videoWrapper,
    className: T.content,
    mirror: q,
    streamId: B,
    videoComponent: U,
    fit: h,
    videoSpinnerContext: H.id === W ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
    paused: V,
    userId: H.id
  }, B) : (0, r.jsx)("div", {
    className: a()(T.content, {
      [T.blockedAvatar]: D || M
    }),
    children: (0, r.jsx)(g.Z, {
      "aria-label": J,
      src: et,
      avatarDecoration: en,
      backgroundSrc: H.getAvatarURL(n.guild_id, 80),
      size: ee,
      pulseSpeakingIndicator: F,
      speaking: z,
      userId: H.id
    })
  })
}