/** Chunk was on 61344 **/
/** chunk id: 83982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k,
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
  M = Chunk397927._3J.SIZE_40;

function L(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, v.uy)(t, n.id) ? (0, l.jsx)(o.m, {
    text: w.intl.string(w.t.HFwRpk),
    position: "bottom",
    children: (0, l.jsx)("div", {
      className: R.bG,
      children: (0, l.jsx)(c.EpV, {
        color: c.LU0.colors.STATUS_WARNING_BACKGROUND
      })
    })
  }) : (0, l.jsx)(T.A, {
    userId: n.user.id
  })
}

function k(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: o,
    selected: c,
    popoutType: v,
    fit: T,
    onVideoResize: L,
    blocked: k,
    ignored: U,
    noVideoRender: G = false,
    pulseSpeakingIndicator: F = false,
    paused: H = false
  } = e, B = C.A.getVideoComponent(), V = (0, s.bG)([E.default], () => E.default.getId()), {
    user: K,
    streamId: W,
    speaking: z
  } = t, Y = K.id === V, q = (0, j.Ay)(t), J = (0, s.bG)([S.A], () => S.A.isFocused()), Z = (0, s.bG)([_.A], () => _.A.getWindowFocused(N.MLl.CHANNEL_CALL_POPOUT)), X = (0, s.bG)([C.A], () => null != K.id && C.A.isLocalVideoDisabled(K.id, (0, p.A)(t.type)), [K.id, t.type]), Q = (0, s.bG)([O.Ay], () => O.Ay.isGuestOrLurker(n.guild_id, K.id)), $ = x.Ay.getName(n.getGuildId(), n.id, K) + (Q ? " ".concat(w.intl.string(w.t["pFO/Ph"])) : ""), ee = z && (Z || J), et = o < 124 ? M : D, {
    avatarSrc: en,
    avatarDecorationSrc: el
  } = (0, y.A)({
    userId: K.id,
    guildId: n.guild_id,
    size: et,
    animateOnHover: !ee
  }), er = (0, s.bG)([h.A], () => h.A.getSelectedParticipant(n.id)), ei = (0, g.A)(P.x.DEFAULT, t.user.id), ea = (0, m.A)(t.user.id), es = {
    channel: n,
    selectedParticipant: er,
    user: K
  }, eo = r.useRef(es);
  return (r.useEffect(() => {
    eo.current = es
  }), r.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = eo.current;
    e.isGuildStageVoice() && !q && (null == t ? true : t.id) === n.id && u.A.selectParticipant(e.id, null)
  }, [q]), i && !X && !G && q && !c && null != B && C.A.supports(P.O5.VIDEO)) ? null != ei && null == ea ? (0, l.jsx)(I.A, {
    avError: ei,
    userId: t.id,
    width: o,
    selected: c
  }) : (0, l.jsx)(b.A, {
    onResize: L,
    wrapperClassName: v !== f.N.CALL_TILE ? R.tN : true,
    className: R.Qs,
    mirror: Y,
    streamId: W,
    videoComponent: B,
    fit: T,
    videoSpinnerContext: K.id === V ? d.u.SELF_VIDEO : d.u.REMOTE_VIDEO,
    paused: H,
    userId: K.id
  }, W) : (0, l.jsx)("div", {
    className: a()(R.Qs, {
      [R.Kx]: k || U
    }),
    children: (0, l.jsx)(A.A, {
      "aria-label": $,
      avatarDecoration: el,
      backgroundSrc: K.getAvatarURL(n.guild_id, 80),
      guildId: n.guild_id,
      pulseSpeakingIndicator: F,
      size: et,
      speaking: z,
      src: en,
      userId: K.id
    })
  })
}