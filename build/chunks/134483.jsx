/** Chunk was on web.js **/
/** chunk id: 134483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk687516 = require("./687516.js"),
  Chunk210887 = require("./210887.js"),
  Chunk937995 = require("./937995.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk5881 = require("./5881.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.js"),
  Chunk340100 = require("./340100.js"),
  Chunk611855 = require("./611855.js"),
  Chunk644646 = require("./644646.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.js"),
  Chunk667105 = require("./667105.js"),
  Chunk860151 = require("./860151.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.js"),
  Chunk45772 = require("./45772.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e, t, n) {
  for (let a of e) {
    var r, i, o;
    if (a.type === j.fO.STREAM) {
      let e = null != (i = (0, _.Um)(a.stream, n)) ? i : null,
        o = (0, b.ZZ)(t, e);
      if (null != o && (null == (r = o.userStatus) ? true : r.claimedAt) == null) return o
    }
    for (let r of e)
      if (!(0, j.I)(r))
        for (let e of n.getActivities(r.user.id)) {
          let n = (0, b.ZZ)(t, e);
          if (null != n && (null == (o = n.userStatus) ? true : o.claimedAt) == null) return n
        }
  }
  return null
}

function Y(e, t, n, r) {
  return e.some(e => {
    if (e.type !== j.fO.STREAM || e.user.id !== n.id) returnfalse;
    let i = (0, _.Um)(e.stream, r);
    return null != i && (0, b._D)(i, t)
  })
}

function W(e) {
  var t, n, o, _;
  let {
    channelId: h,
    quest: N,
    previewQuest: j,
    isParticipatingOverride: B
  } = e, F = (0, E.O5)(), [H, W] = i.useState(false), K = i.useCallback(() => W(true), []), z = i.useCallback(() => W(false), []), q = (0, s.e7)([g.default], () => g.default.getCurrentUser()), X = (0, s.e7)([p.Z], () => p.Z.getState().theme), Q = (0, l.wj)(X) ? k.BRd.DARK : k.BRd.LIGHT, J = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]), $ = (0, s.e7)([v.Z], () => (0, b.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, I.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: ee,
    isQuestInQuestBar: et
  } = (0, s.cj)([m.Z], () => ({
    isCurrentUserStreamingQuestApplication: null != N && null != q && Y(J, N, q, m.Z),
    isQuestInQuestBar: (null == $ ? true : $.id) === (null == N ? true : N.id)
  }), [q, N, J, $]), en = null != N ? A.r.build(N.config) : null, er = null == en ? true : en.application.id, ei = (0, s.e7)([f.ZP, m.Z], () => {
    let e = f.ZP.getRunningGames().map(e => e.id);
    if ((0, b.$H)(N) && e.includes(er)) returntrue;
    let t = null != q ? m.Z.findActivity(q.id, e => e.type !== k.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, b.$J)(N) && (0, b._D)(t, N))
  }, [N, er, q]), eo = true === B || ee || ei, ea = (0, s.e7)([v.Z], () => null != N && v.Z.isEnrolling(N.id), [N]), es = (0, s.e7)([d.Z], () => ((null == q ? true : q.id) == null ? null : d.Z.getParticipant(h, q.id)) != null, [h, q]), el = (0, O.B6)(null == N ? true : N.config.expiresAt), ec = (0, O.B6)(null == en ? true : en.rewardsExpireAt), eu = i.useCallback(() => {
    (0, y.AH)(N.id, {
      questContent: I.jn.QUEST_LIVE_STREAM,
      questContentCTA: E.jZ.ACCEPT_QUEST,
      sourceQuestContent: I.jn.QUEST_LIVE_STREAM
    })
  }, [N]), ed = i.useCallback(() => {
    F({
      questId: N.id,
      questContent: I.jn.QUEST_LIVE_STREAM,
      questContentCTA: E.jZ.TRACK_PROGRESS,
      sourceQuestContent: I.jn.QUEST_LIVE_STREAM
    }), (0, w.navigateToQuestHome)({
      fromContent: I.jn.QUEST_LIVE_STREAM,
      questId: N.id
    })
  }, [N, F]), ef = i.useCallback(() => {
    F({
      questId: N.id,
      questContent: I.jn.QUEST_LIVE_STREAM,
      questContentCTA: E.jZ.LEARN_MORE,
      sourceQuestContent: I.jn.QUEST_LIVE_STREAM
    }), (0, w.navigateToQuestHome)({
      fromContent: I.jn.QUEST_LIVE_STREAM,
      questId: N.id
    })
  }, [N, F]), e_ = (0, L.hf)({
    quest: N,
    questContent: I.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: I.jn.QUEST_LIVE_STREAM
  }), ep = i.useMemo(() => (0, T.T)({
    quest: N,
    location: M.dr.QUEST_CHANNEL_CALL_HEADER
  }), [N]), eh = (0, O.tP)(N), em = (null == (t = N.userStatus) ? true : t.enrolledAt) != null, eg = (null == (n = N.userStatus) ? true : n.completedAt) != null, eE = null != N.userStatus && (0, b.zE)(N.userStatus, I.jn.QUEST_LIVE_STREAM), eb = null != N.userStatus && (0, b.zE)(N.userStatus, I.jn.QUEST_BAR), ey = et && !eb;
  ep.info({
    isQuestCallHeaderDismissed: eE,
    isQuestExpired: eh,
    isQuestBarShowing: ey,
    isCurrentUserCallParticipant: es
  });
  let eO = null != j && (null == (o = N.userStatus) ? true : o.claimedAt) == null;
  if (!eO && (eE || eh || ey) || !eO && !es) return null;
  let ev = (0, b.il)(N),
    eI = <P.Z className={G.rewardTile} autoplay={H} quest={N} questContent={I.jn.QUEST_LIVE_STREAM} location={M.dr.QUEST_CHANNEL_CALL_HEADER} sourceQuestContent={I.jn.QUEST_LIVE_STREAM} />;
  return <div className={a()(G.wrapper, {
      [G.wrapperAccepted]: em
    })} onFocus={K} onMouseEnter={K} onBlur={z} onMouseLeave={z}>{!em && <div className={G.rewardTileWrapper}>{eI}{<R.Z bgOpacity={.32} className={G.promotedTag} />}</div>}{<div className={G.content}>{<div className={G.heading}>{em && eo ? eI : <img className={G.gameTile} alt={N.config.messages.gameTitle} src={(0, S.fh)(N, S.eC.GAME_TILE, Q).url} />}{<div>{<div className={G.headingWithSubmenu}>{<u.X6q className={G.questTitle} variant={"heading-md/semibold"} color={"header-primary"}>{eo ? (0, b.AV)({
                quest: N,
                taskDetails: ev
              }) : U.intl.formatToPlainString(U.t.EQa7oq, {
                questName: N.config.messages.questName
              })}</u.X6q>}{<D.r questContent={I.jn.QUEST_LIVE_STREAM} sourceQuestContent={I.jn.QUEST_LIVE_STREAM} quest={N} preventIdle={true} shouldShowDisclosure={(null == (_ = N.userStatus) ? true : _.enrolledAt) == null}>{e => (0, r.jsx)(u.P3F, V(Z({}, e), {
                className: G.submenuWrapper,
                "aria-label": U.intl.string(U.t.DEoVWV),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: G.submenuIcon
                })
              }))}</D.r>}</div>}{<u.Text color={"header-secondary"} variant={"text-xs/medium"}>{eg ? U.intl.formatToPlainString(U.t.APddvL, {
              expirationDate: ec
            }) : U.intl.formatToPlainString(U.t["pX+fmp"], {
              expirationDate: el
            })}</u.Text>}</div>}</div>}{em && !eg && !eo && <x.Z autoplay={H} quest={N} questContent={I.jn.QUEST_LIVE_STREAM} taskDetails={ev} location={M.dr.QUEST_CHANNEL_CALL_HEADER} sourceQuestContent={I.jn.QUEST_LIVE_STREAM} />}{<div className={G.ctas}>{!em && <r.Fragment>{<c.zx className={G.cta} color={c.zx.Colors.PRIMARY} fullWidth={true} size={c.zx.Sizes.SMALL} onClick={ef}>{U.intl.string(U.t.LLLLPD)}</c.zx>}{<c.zx className={G.cta} color={c.zx.Colors.BRAND} fullWidth={true} onClick={eu} size={c.zx.Sizes.SMALL} submitting={ea}>{U.intl.string(U.t.l7E81t)}</c.zx>}</r.Fragment>}{em && !eg && eo && <C.Z color={u.TVs.colors.BG_BRAND} quest={N} />}{em && !eg && !eo && <c.zx className={G.cta} color={c.zx.Colors.BRAND} fullWidth={true} onClick={ed} size={c.zx.Sizes.SMALL}>{U.intl.string(U.t.VN1Ajo)}</c.zx>}{eg && <c.zx className={G.cta} color={c.zx.Colors.BRAND} fullWidth={true} onClick={e_} size={c.zx.Sizes.SMALL}>{U.intl.string(U.t.cfY4PD)}</c.zx>}</div>}</div>}</div>
}

function K(e) {
  let t = i.useContext(h.h9),
    n = (0, s.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil, []),
    o = (0, s.e7)([v.Z], () => v.Z.quests),
    a = i.useMemo(() => (0, b.MM)(o, M.Lv), [o]),
    l = (0, s.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
    c = (0, s.e7)([m.Z], () => null != e.previewQuest ? e.previewQuest : H(l, a, m.Z), [l, a, e.previewQuest]);
  return null == c || n ? null : <N.A questOrQuests={c} overrideVisibility={!t} questContent={I.jn.QUEST_LIVE_STREAM} sourceQuestContent={I.jn.QUEST_LIVE_STREAM}>{() => (0, r.jsx)(W, V(Z({}, e), {
      quest: c
    }))}</N.A>
}
let z = function(e) {
  let t = (0, s.e7)([g.default], () => g.default.getCurrentUser());
  return (0, s.e7)([d.Z], () => ((null == t ? true : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? <K{...Z({}, e)} /> : null
}