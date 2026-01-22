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
  j = (require("./729365.jsx"), require("./566566.jsx")),
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
  return (0, E.uy)(t, n.id) ? (0, l.jsx)(o.m, {
    text: R.intl.string(R.t.HFwRpk),
    position: "bottom",
    children: (0, l.jsx)("div", {
      className: P.bG,
      children: (0, l.jsx)(c.EpV, {
        color: c.LU0.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, l.jsx)(T.A, {
    userId: n.user.id
  })
}

function M(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: o,
    selected: c,
    popoutType: E,
    fit: T,
    onVideoResize: L,
    blocked: M,
    ignored: U,
    noVideoRender: V = false,
    pulseSpeakingIndicator: F = false,
    paused: G = false
  } = e, H = x.A.getVideoComponent(), B = (0, s.bG)([v.default], () => v.default.getId()), {
    user: Y,
    streamId: W,
    speaking: z
  } = t, K = Y.id === B, X = (0, C.Ay)(t), Z = (0, s.bG)([S.A], () => S.A.isFocused()), J = (0, s.bG)([y.A], () => y.A.getWindowFocused(I.MLl.CHANNEL_CALL_POPOUT)), q = (0, s.bG)([x.A], () => null != Y.id && x.A.isLocalVideoDisabled(Y.id, (0, p.A)(t.type)), [Y.id, t.type]), Q = (0, s.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, Y.id)), $ = N.Ay.getName(n.getGuildId(), n.id, Y) + (Q ? " ".concat(R.intl.string(R.t["pFO/Ph"])) : ""), ee = z && (J || Z), et = o < 124 ? k : D, {
    avatarSrc: en,
    avatarDecorationSrc: el
  } = (0, _.A)({
    userId: Y.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), er = (0, s.bG)([f.A], () => f.A.getSelectedParticipant(n.id)), ei = (0, m.A)(w.x.DEFAULT, t.user.id), ea = (0, g.A)(t.user.id), es = {
    channel: n,
    selectedParticipant: er,
    user: Y
  }, eo = r.useRef(es);
  return (r.useEffect(() => {
    eo.current = es
  }), r.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = eo.current;
    e.isGuildStageVoice() && !X && (null == t ? true : t.id) === n.id && u.A.selectParticipant(e.id, null)
  }, [X]), i && !q && !V && X && !c && null != H && x.A.supports(w.O5.VIDEO)) ? null != ei && null == ea ? (0, l.jsx)(j.A, {
    avError: ei,
    userId: t.id,
    width: o,
    selected: c
  }) : (0, l.jsx)(A.A, {
    onResize: L,
    wrapperClassName: E !== b.N.CALL_TILE ? P.tN : true,
    className: P.Qs,
    mirror: K,
    streamId: W,
    videoComponent: H,
    fit: T,
    videoSpinnerContext: Y.id === B ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
    paused: G,
    userId: Y.id
  }, W) : (0, l.jsx)("div", {
    className: a()(P.Qs, {
      [P.Kx]: M || U
    }),
    children: (0, l.jsx)(h.A, {
      "aria-label": $,
      avatarDecoration: el,
      backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
      guildId: n.guild_id,
      pulseSpeakingIndicator: F,
      size: et,
      speaking: z,
      src: en,
      userId: Y.id
    })
  })
}