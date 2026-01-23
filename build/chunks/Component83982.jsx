/** Chunk was on 31748 **/
/** chunk id: 83982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => M,
  s: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk684339 = require("./684339.js"),
  Chunk313961 = require("./313961.js"),
  Chunk520698 = require("./520698.js"),
  Chunk164617 = require("./164617.js"),
  Chunk958713 = require("./958713.js"),
  Chunk525505 = require("./525505.js"),
  Chunk991701 = require("./991701.jsx"),
  Chunk401901 = require("./401901.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk854627 = require("./854627.js"),
  Chunk530804 = require("./530804.js"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk430452 = require("./430452.js"),
  Chunk531685 = require("./531685.js"),
  Chunk562153 = require("./562153.js"),
  Chunk51082 = require("./51082.js"),
  I = (require("./729365.jsx"), require("./566566.jsx")),
  Chunk289552 = require("./289552.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk707511 = require("./707511.js");
let D = Chunk397927._3J.SIZE_80,
  k = Chunk397927._3J.SIZE_40;

function L(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, E.uy)(t, n.id) ? (0, r.jsx)(s.m, {
    text: P.intl.string(P.t.HFwRpk),
    position: "bottom",
    children: (0, r.jsx)("div", {
      className: R.bG,
      children: (0, r.jsx)(c.EpV, {
        color: c.LU0.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, r.jsx)(j.A, {
    userId: n.user.id
  })
}

function M(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: s,
    selected: c,
    popoutType: E,
    fit: j,
    onVideoResize: L,
    blocked: M,
    ignored: U,
    noVideoRender: V = false,
    pulseSpeakingIndicator: F = false,
    paused: G = false
  } = e, B = x.A.getVideoComponent(), H = (0, o.bG)([v.default], () => v.default.getId()), {
    user: W,
    streamId: z,
    speaking: Y
  } = t, K = W.id === H, Z = (0, N.Ay)(t), q = (0, o.bG)([S.A], () => S.A.isFocused()), X = (0, o.bG)([A.A], () => A.A.getWindowFocused(T.MLl.CHANNEL_CALL_POPOUT)), J = (0, o.bG)([x.A], () => null != W.id && x.A.isLocalVideoDisabled(W.id, (0, p.A)(t.type)), [W.id, t.type]), Q = (0, o.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, W.id)), $ = C.Ay.getName(n.getGuildId(), n.id, W) + (Q ? " ".concat(P.intl.string(P.t["pFO/Ph"])) : ""), ee = Y && (X || q), et = s < 124 ? k : D, {
    avatarSrc: en,
    avatarDecorationSrc: er
  } = (0, b.A)({
    userId: W.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), el = (0, o.bG)([f.A], () => f.A.getSelectedParticipant(n.id)), ei = (0, _.A)(w.x.DEFAULT, t.user.id), ea = (0, m.A)(t.user.id), eo = {
    channel: n,
    selectedParticipant: el,
    user: W
  }, es = l.useRef(eo);
  return (l.useEffect(() => {
    es.current = eo
  }), l.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = es.current;
    e.isGuildStageVoice() && !Z && (null == t ? true : t.id) === n.id && u.A.selectParticipant(e.id, null)
  }, [Z]), i && !J && !V && Z && !c && null != B && x.A.supports(w.O5.VIDEO)) ? null != ei && null == ea ? (0, r.jsx)(I.A, {
    avError: ei,
    userId: t.id,
    width: s,
    selected: c
  }) : (0, r.jsx)(y.A, {
    onResize: L,
    wrapperClassName: E !== g.N.CALL_TILE ? R.tN : true,
    className: R.Qs,
    mirror: K,
    streamId: z,
    videoComponent: B,
    fit: j,
    videoSpinnerContext: W.id === H ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
    paused: G,
    userId: W.id
  }, z) : (0, r.jsx)("div", {
    className: a()(R.Qs, {
      [R.Kx]: M || U
    }),
    children: (0, r.jsx)(h.A, {
      "aria-label": $,
      avatarDecoration: er,
      backgroundSrc: W.getAvatarURL(n.guild_id, 80),
      guildId: n.guild_id,
      pulseSpeakingIndicator: F,
      size: et,
      speaking: Y,
      src: en,
      userId: W.id
    })
  })
}