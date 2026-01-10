/** Chunk was on 69813 **/
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
  x = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858329 = require("./858329.js");
let R = Chunk481060.EFr.SIZE_80,
  D = Chunk481060.EFr.SIZE_40;

function M(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, y.Eu)(t, n.id) ? (0, r.jsx)(c.u, {
    text: w.intl.string(w.t.HFwRpk),
    position: "bottom",
    children: (0, r.jsx)("div", {
      className: A.interactive,
      children: (0, r.jsx)(s.Mgn, {
        color: s.TVs.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, r.jsx)(P.Z, {
    userId: n.user.id
  })
}

function k(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: c,
    selected: s,
    popoutType: y,
    fit: P,
    onVideoResize: M,
    blocked: k,
    ignored: L,
    noVideoRender: U = false,
    pulseSpeakingIndicator: F = false,
    paused: V = false
  } = e, W = S.Z.getVideoComponent(), B = (0, o.e7)([O.default], () => O.default.getId()), {
    user: G,
    streamId: H,
    speaking: z
  } = t, K = G.id === B, Y = (0, T.ZP)(t), q = (0, o.e7)([I.Z], () => I.Z.isFocused()), Q = (0, o.e7)([v.Z], () => v.Z.getWindowFocused(Z.KJ3.CHANNEL_CALL_POPOUT)), X = (0, o.e7)([S.Z], () => null != G.id && S.Z.isLocalVideoDisabled(G.id, (0, p.Z)(t.type)), [G.id, t.type]), J = (0, o.e7)([C.ZP], () => C.ZP.isGuestOrLurker(n.guild_id, G.id)), $ = N.ZP.getName(n.getGuildId(), n.id, G) + (J ? " ".concat(w.intl.string(w.t["pFO/Ph"])) : ""), ee = z && (Q || q), et = c < 124 ? D : R, {
    avatarSrc: en,
    avatarDecorationSrc: er
  } = (0, _.Z)({
    userId: G.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), el = (0, o.e7)([f.Z], () => f.Z.getSelectedParticipant(n.id)), ei = (0, m.Z)(j.Yn.DEFAULT, t.user.id), ea = (0, b.Z)(t.user.id), eo = {
    channel: n,
    selectedParticipant: el,
    user: G
  }, ec = l.useRef(eo);
  return (l.useEffect(() => {
    ec.current = eo
  }), l.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = ec.current;
    e.isGuildStageVoice() && !Y && (null == t ? true : t.id) === n.id && u.Z.selectParticipant(e.id, null)
  }, [Y]), i && !X && !U && Y && !s && null != W && S.Z.supports(j.AN.VIDEO)) ? null != ei && null == ea ? (0, r.jsx)(x.Z, {
    avError: ei,
    userId: t.id,
    width: c,
    selected: s
  }) : (0, r.jsx)(E.Z, {
    onResize: M,
    wrapperClassName: y !== g.P.CALL_TILE ? A.videoWrapper : true,
    className: A.content,
    mirror: K,
    streamId: H,
    videoComponent: W,
    fit: P,
    videoSpinnerContext: G.id === B ? d.m.SELF_VIDEO : d.m.REMOTE_VIDEO,
    paused: V,
    userId: G.id
  }, H) : (0, r.jsx)("div", {
    className: a()(A.content, {
      [A.blockedAvatar]: k || L
    }),
    children: (0, r.jsx)(h.Z, {
      "aria-label": $,
      avatarDecoration: er,
      backgroundSrc: G.getAvatarURL(n.guild_id, 80),
      guildId: n.guild_id,
      pulseSpeakingIndicator: F,
      size: et,
      speaking: z,
      src: en,
      userId: G.id
    })
  })
}