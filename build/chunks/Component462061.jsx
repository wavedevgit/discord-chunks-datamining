/** Chunk was on 46931 **/
/** chunk id: 462061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => M,
  Z: () => k
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  j = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let N = Chunk481060.EFr.SIZE_80,
  D = Chunk481060.EFr.SIZE_40;

function M(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, y.Eu)(t, n.id) ? (0, r.jsx)(c.u, {
    text: T.intl.string(T.t.HFwRpk),
    position: "bottom",
    children: (0, r.jsx)("div", {
      className: A.interactive,
      children: (0, r.jsx)(s.Mgn, {
        color: s.TVs.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, r.jsx)(x.Z, {
    userId: n.user.id
  })
}

function k(e) {
  let {
    participant: t,
    channel: n,
    inCall: l,
    width: c,
    selected: s,
    popoutType: y,
    fit: x,
    onVideoResize: M,
    blocked: k,
    ignored: L,
    noVideoRender: F = false,
    pulseSpeakingIndicator: V = false,
    paused: U = false
  } = e, z = C.Z.getVideoComponent(), W = (0, o.e7)([S.default], () => S.default.getId()), {
    user: H,
    streamId: B,
    speaking: q
  } = t, Y = H.id === W, K = (0, P.ZP)(t), G = (0, o.e7)([w.Z], () => w.Z.isFocused()), Q = (0, o.e7)([E.Z], () => E.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)), X = (0, o.e7)([C.Z], () => null != H.id && C.Z.isLocalVideoDisabled(H.id, (0, p.Z)(t.type)), [H.id, t.type]), J = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, H.id)), $ = I.ZP.getName(n.getGuildId(), n.id, H) + (J ? " ".concat(T.intl.string(T.t["pFO/Ph"])) : ""), ee = q && (Q || G), et = c < 124 ? D : N, {
    avatarSrc: en,
    avatarDecorationSrc: er
  } = (0, h.Z)({
    userId: H.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), ei = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)), el = (0, g.Z)(R.Yn.DEFAULT, t.user.id), ea = (0, _.Z)(t.user.id), eo = {
    channel: n,
    selectedParticipant: ei,
    user: H
  }, ec = i.useRef(eo);
  return (i.useEffect(() => {
    ec.current = eo
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = ec.current;
    e.isGuildStageVoice() && !K && (null == t ? true : t.id) === n.id && u.Z.selectParticipant(e.id, null)
  }, [K]), l && !X && !F && K && !s && null != z && C.Z.supports(R.AN.VIDEO)) ? null != el && null == ea ? (0, r.jsx)(j.Z, {
    avError: el,
    userId: t.id,
    width: c,
    selected: s
  }) : (0, r.jsx)(v.Z, {
    onResize: M,
    wrapperClassName: y !== m.P.CALL_TILE ? A.videoWrapper : true,
    className: A.content,
    mirror: Y,
    streamId: B,
    videoComponent: z,
    fit: x,
    videoSpinnerContext: H.id === W ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
    paused: U,
    userId: H.id
  }, B) : (0, r.jsx)("div", {
    className: a()(A.content, {
      [A.blockedAvatar]: k || L
    }),
    children: (0, r.jsx)(b.Z, {
      "aria-label": $,
      src: en,
      avatarDecoration: er,
      backgroundSrc: H.getAvatarURL(n.guild_id, 80),
      size: et,
      pulseSpeakingIndicator: V,
      speaking: q,
      userId: H.id
    })
  })
}