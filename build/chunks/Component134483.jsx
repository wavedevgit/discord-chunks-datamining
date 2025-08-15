/** Chunk was on 64838 **/
/** chunk id: 134483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk687516 = require("./687516.js"),
  Chunk210887 = require("./210887.js"),
  Chunk937995 = require("./937995.jsx"),
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
  Chunk602667 = require("./602667.jsx"),
  Chunk340100 = require("./340100.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk860151 = require("./860151.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435413 = require("./435413.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e) {
  var t, n, r, T;
  let {
    channelId: b,
    quest: z,
    previewQuest: k,
    isParticipatingOverride: B
  } = e, H = (0, p.O5)(), [W, G] = s.useState(false), F = s.useCallback(() => G(true), []), K = s.useCallback(() => G(false), []), X = (0, u.e7)([f.default], () => f.default.getCurrentUser()), Y = (0, u.e7)([m.Z], () => m.Z.getState().theme), $ = (0, o.wj)(Y) ? O.BRd.DARK : O.BRd.LIGHT, J = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]), ee = (0, u.e7)([v.Z], () => (0, j.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: et,
    isQuestInQuestBar: en
  } = (0, u.cj)([A.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != z && null != X && (e = A.Z, J.some(t => {
        if (t.type !== y.fO.STREAM || t.user.id !== X.id) returnfalse;
        let n = (0, S.Um)(t.stream, e);
        return null != n && (0, j._D)(n, z)
      })),
      isQuestInQuestBar: (null == ee ? true : ee.id) === (null == z ? true : z.id)
    }
  }, [X, z, J, ee]), el = null != z ? L.r.build(z.config) : null, es = null == el ? true : el.application.id, er = (0, u.e7)([E.ZP, A.Z], () => {
    let e = E.ZP.getRunningGames().map(e => e.id);
    if ((0, j.$H)(z) && e.includes(es)) returntrue;
    let t = null != X ? A.Z.findActivity(X.id, e => e.type !== O.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, j.$J)(z) && (0, j._D)(t, z))
  }, [z, es, X]), ei = true === B || et || er, eu = (0, u.e7)([v.Z], () => null != z && v.Z.isEnrolling(z.id), [z]), eo = (0, u.e7)([d.Z], () => ((null == X ? true : X.id) == null ? null : d.Z.getParticipant(b, X.id)) != null, [b, X]), ea = (0, C.B6)(null == z ? true : z.config.expiresAt), ec = (0, C.B6)(null == el ? true : el.rewardsExpireAt), ed = s.useCallback(() => {
    (0, _.AH)(z.id, {
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: p.jZ.ACCEPT_QUEST,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    })
  }, [z]), eE = s.useCallback(() => {
    H({
      questId: z.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: p.jZ.TRACK_PROGRESS,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, H]), eS = s.useCallback(() => {
    H({
      questId: z.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: p.jZ.LEARN_MORE,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, H]), em = (0, N.hf)({
    quest: z,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM
  }), eT = s.useMemo(() => (0, h.T)({
    quest: z,
    location: q.dr.QUEST_CHANNEL_CALL_HEADER
  }), [z]), eA = (0, C.tP)(z), ef = (null == (t = z.userStatus) ? true : t.enrolledAt) != null, ep = (null == (n = z.userStatus) ? true : n.completedAt) != null, ej = null != z.userStatus && (0, j.zE)(z.userStatus, x.jn.QUEST_LIVE_STREAM), e_ = null != z.userStatus && (0, j.zE)(z.userStatus, x.jn.QUEST_BAR), eC = en && !e_;
  eT.info({
    isQuestCallHeaderDismissed: ej,
    isQuestExpired: eA,
    isQuestBarShowing: eC,
    isCurrentUserCallParticipant: eo
  });
  let ev = null != k && (null == (r = z.userStatus) ? true : r.claimedAt) == null;
  if (!ev && (ej || eA || eC) || !ev && !eo) return null;
  let ex = (0, j.il)(z),
    eh = (0, l.jsx)(Z.Z, {
      className: D.rewardTile,
      autoplay: W,
      quest: z,
      questContent: x.jn.QUEST_LIVE_STREAM,
      location: q.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    });
  return (0, l.jsxs)("div", {
    className: i()(D.wrapper, {
      [D.wrapperAccepted]: ef
    }),
    onFocus: F,
    onMouseEnter: F,
    onBlur: K,
    onMouseLeave: K,
    children: [!ef && (0, l.jsxs)("div", {
      className: D.rewardTileWrapper,
      children: [eh, (0, l.jsx)(R.Z, {
        bgOpacity: .32,
        className: D.promotedTag
      })]
    }), (0, l.jsxs)("div", {
      className: D.content,
      children: [(0, l.jsxs)("div", {
        className: D.heading,
        children: [ef && ei ? eh : (0, l.jsx)("img", {
          className: D.gameTile,
          alt: z.config.messages.gameTitle,
          src: (0, g.fh)(z, g.eC.GAME_TILE, $).url
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: D.headingWithSubmenu,
            children: [(0, l.jsx)(c.X6q, {
              className: D.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: ei ? (0, j.AV)({
                quest: z,
                taskDetails: ex
              }) : P.intl.formatToPlainString(P.t.EQa7oq, {
                questName: z.config.messages.questName
              })
            }), (0, l.jsx)(M.r, {
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              quest: z,
              preventIdle: true,
              shouldShowDisclosure: (null == (T = z.userStatus) ? true : T.enrolledAt) == null,
              children: e => (0, l.jsx)(c.P3F, V(w({}, e), {
                className: D.submenuWrapper,
                "aria-label": P.intl.string(P.t.DEoVWV),
                children: (0, l.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: D.submenuIcon
                })
              }))
            })]
          }), (0, l.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: ep ? P.intl.formatToPlainString(P.t.APddvL, {
              expirationDate: ec
            }) : P.intl.formatToPlainString(P.t["pX+fmp"], {
              expirationDate: ea
            })
          })]
        })]
      }), ef && !ep && !ei && (0, l.jsx)(U.Z, {
        autoplay: W,
        quest: z,
        questContent: x.jn.QUEST_LIVE_STREAM,
        taskDetails: ex,
        location: q.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.jn.QUEST_LIVE_STREAM
      }), (0, l.jsxs)("div", {
        className: D.ctas,
        children: [!ef && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(a.zx, {
            className: D.cta,
            color: a.zx.Colors.PRIMARY,
            fullWidth: true,
            size: a.zx.Sizes.SMALL,
            onClick: eS,
            children: P.intl.string(P.t.LLLLPD)
          }), (0, l.jsx)(a.zx, {
            className: D.cta,
            color: a.zx.Colors.BRAND,
            fullWidth: true,
            onClick: ed,
            size: a.zx.Sizes.SMALL,
            submitting: eu,
            children: P.intl.string(P.t.l7E81t)
          })]
        }), ef && !ep && ei && (0, l.jsx)(Q.Z, {
          color: c.TVs.colors.BG_BRAND,
          quest: z
        }), ef && !ep && !ei && (0, l.jsx)(a.zx, {
          className: D.cta,
          color: a.zx.Colors.BRAND,
          fullWidth: true,
          onClick: eE,
          size: a.zx.Sizes.SMALL,
          children: P.intl.string(P.t.VN1Ajo)
        }), ep && (0, l.jsx)(a.zx, {
          className: D.cta,
          color: a.zx.Colors.BRAND,
          fullWidth: true,
          onClick: em,
          size: a.zx.Sizes.SMALL,
          children: P.intl.string(P.t.cfY4PD)
        })]
      })]
    })]
  })
}

function k(e) {
  let t = s.useContext(T.h9),
    n = (0, u.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil, []),
    r = (0, u.e7)([v.Z], () => v.Z.quests),
    i = s.useMemo(() => (0, j.MM)(r, q.Lv), [r]),
    o = (0, u.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
    a = (0, u.e7)([A.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var l, s, r;
        if (i.type === y.fO.STREAM) {
          let e = null != (s = (0, S.Um)(i.stream, n)) ? s : null,
            r = (0, j.ZZ)(t, e);
          if (null != r && (null == (l = r.userStatus) ? true : l.claimedAt) == null) return r
        }
        for (let l of e)
          if (!(0, y.I)(l))
            for (let e of n.getActivities(l.user.id)) {
              let n = (0, j.ZZ)(t, e);
              if (null != n && (null == (r = n.userStatus) ? true : r.claimedAt) == null) return n
            }
      }
      return null
    }(o, i, A.Z), [o, i, e.previewQuest]);
  return null == a || n ? null : (0, l.jsx)(b.A, {
    questOrQuests: a,
    overrideVisibility: !t,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
    children: () => (0, l.jsx)(z, V(w({}, e), {
      quest: a
    }))
  })
}
let B = function(e) {
  let t = (0, u.e7)([f.default], () => f.default.getCurrentUser());
  return (0, u.e7)([d.Z], () => ((null == t ? true : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(k, w({}, e)) : null
}