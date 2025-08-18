/** Chunk was on 64838 **/
/** chunk id: 134483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function D(e) {
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
  var t, n, s, f;
  let {
    channelId: L,
    quest: z,
    previewQuest: k,
    isParticipatingOverride: B
  } = e, H = (0, S.O5)(), [W, G] = r.useState(false), F = r.useCallback(() => G(true), []), K = r.useCallback(() => G(false), []), X = (0, o.e7)([T.default], () => T.default.getCurrentUser()), Y = (0, o.e7)([p.Z], () => p.Z.getState().theme), $ = (0, a.wj)(Y) ? M.BRd.DARK : M.BRd.LIGHT, J = (0, o.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]), ee = (0, o.e7)([A.Z], () => (0, x.PM)(A.Z.quests, A.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: et,
    isQuestInQuestBar: en
  } = (0, o.cj)([j.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != z && null != X && (e = j.Z, J.some(t => {
        if (t.type !== q.fO.STREAM || t.user.id !== X.id) returnfalse;
        let n = (0, m.Um)(t.stream, e);
        return null != n && (0, x._D)(n, z)
      })),
      isQuestInQuestBar: (null == ee ? true : ee.id) === (null == z ? true : z.id)
    }
  }, [X, z, J, ee]), el = null != z ? b.r.build(z.config) : null, er = null == el ? true : el.application.id, es = (0, o.e7)([E.ZP, j.Z], () => {
    let e = E.ZP.getRunningGames().map(e => e.id);
    if ((0, x.$H)(z) && e.includes(er)) returntrue;
    let t = null != X ? j.Z.findActivity(X.id, e => e.type !== M.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, x.$J)(z) && (0, x._D)(t, z))
  }, [z, er, X]), ei = true === B || et || es, eo = (0, o.e7)([A.Z], () => null != z && A.Z.isEnrolling(z.id), [z]), ea = (0, o.e7)([d.Z], () => ((null == X ? true : X.id) == null ? null : d.Z.getParticipant(L, X.id)) != null, [L, X]), eu = (0, v.B6)(null == z ? true : z.config.expiresAt), ec = (0, v.B6)(null == el ? true : el.rewardsExpireAt), ed = r.useCallback(() => {
    (0, h.AH)(z.id, {
      questContent: C.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.ACCEPT_QUEST,
      sourceQuestContent: C.jn.QUEST_LIVE_STREAM
    })
  }, [z]), eE = r.useCallback(() => {
    H({
      questId: z.id,
      questContent: C.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.TRACK_PROGRESS,
      sourceQuestContent: C.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: C.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, H]), em = r.useCallback(() => {
    H({
      questId: z.id,
      questContent: C.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.LEARN_MORE,
      sourceQuestContent: C.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: C.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, H]), ep = (0, R.hf)({
    quest: z,
    questContent: C.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: C.jn.QUEST_LIVE_STREAM
  }), ef = r.useMemo(() => (0, _.T)({
    quest: z,
    location: w.dr.QUEST_CHANNEL_CALL_HEADER
  }), [z]), ej = (0, v.tP)(z), eT = (null == (t = z.userStatus) ? true : t.enrolledAt) != null, eS = (null == (n = z.userStatus) ? true : n.completedAt) != null, ex = null != z.userStatus && (0, x.zE)(z.userStatus, C.jn.QUEST_LIVE_STREAM), eh = null != z.userStatus && (0, x.zE)(z.userStatus, C.jn.QUEST_BAR), ev = en && !eh;
  ef.info({
    isQuestCallHeaderDismissed: ex,
    isQuestExpired: ej,
    isQuestBarShowing: ev,
    isCurrentUserCallParticipant: ea
  });
  let eA = null != k && (null == (s = z.userStatus) ? true : s.claimedAt) == null;
  if (!eA && (ex || ej || ev) || !eA && !ea) return null;
  let eC = (0, x.il)(z),
    e_ = (0, l.jsx)(Q.Z, {
      className: U.rewardTile,
      autoplay: W,
      quest: z,
      questContent: C.jn.QUEST_LIVE_STREAM,
      location: w.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: C.jn.QUEST_LIVE_STREAM
    });
  return (0, l.jsxs)("div", {
    className: i()(U.wrapper, {
      [U.wrapperAccepted]: eT
    }),
    onFocus: F,
    onMouseEnter: F,
    onBlur: K,
    onMouseLeave: K,
    children: [!eT && (0, l.jsxs)("div", {
      className: U.rewardTileWrapper,
      children: [e_, (0, l.jsx)(y.Z, {
        bgOpacity: .32,
        className: U.promotedTag
      })]
    }), (0, l.jsxs)("div", {
      className: U.content,
      children: [(0, l.jsxs)("div", {
        className: U.heading,
        children: [eT && ei ? e_ : (0, l.jsx)("img", {
          className: U.gameTile,
          alt: z.config.messages.gameTitle,
          src: (0, g.fh)(z, g.eC.GAME_TILE, $).url
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: U.headingWithSubmenu,
            children: [(0, l.jsx)(c.X6q, {
              className: U.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: ei ? (0, x.AV)({
                quest: z,
                taskDetails: eC
              }) : P.intl.formatToPlainString(P.t.EQa7oq, {
                questName: z.config.messages.questName
              })
            }), (0, l.jsx)(N.r, {
              questContent: C.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
              quest: z,
              preventIdle: true,
              shouldShowDisclosure: (null == (f = z.userStatus) ? true : f.enrolledAt) == null,
              children: e => (0, l.jsx)(c.P3F, V(D({}, e), {
                className: U.submenuWrapper,
                "aria-label": P.intl.string(P.t.DEoVWV),
                children: (0, l.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: U.submenuIcon
                })
              }))
            })]
          }), (0, l.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: eS ? P.intl.formatToPlainString(P.t.APddvL, {
              expirationDate: ec
            }) : P.intl.formatToPlainString(P.t["pX+fmp"], {
              expirationDate: eu
            })
          })]
        })]
      }), eT && !eS && !ei && (0, l.jsx)(O.Z, {
        autoplay: W,
        quest: z,
        questContent: C.jn.QUEST_LIVE_STREAM,
        taskDetails: eC,
        location: w.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: C.jn.QUEST_LIVE_STREAM
      }), (0, l.jsxs)("div", {
        className: U.ctas,
        children: [!eT && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(u.zx, {
            className: U.cta,
            color: u.zx.Colors.PRIMARY,
            fullWidth: true,
            size: u.zx.Sizes.SMALL,
            onClick: em,
            children: P.intl.string(P.t.LLLLPD)
          }), (0, l.jsx)(u.zx, {
            className: U.cta,
            color: u.zx.Colors.BRAND,
            fullWidth: true,
            onClick: ed,
            size: u.zx.Sizes.SMALL,
            submitting: eo,
            children: P.intl.string(P.t.l7E81t)
          })]
        }), eT && !eS && ei && (0, l.jsx)(Z.Z, {
          color: c.TVs.colors.BG_BRAND,
          quest: z
        }), eT && !eS && !ei && (0, l.jsx)(u.zx, {
          className: U.cta,
          color: u.zx.Colors.BRAND,
          fullWidth: true,
          onClick: eE,
          size: u.zx.Sizes.SMALL,
          children: P.intl.string(P.t.VN1Ajo)
        }), eS && (0, l.jsx)(u.zx, {
          className: U.cta,
          color: u.zx.Colors.BRAND,
          fullWidth: true,
          onClick: ep,
          size: u.zx.Sizes.SMALL,
          children: P.intl.string(P.t.cfY4PD)
        })]
      })]
    })]
  })
}

function k(e) {
  let t = r.useContext(f.h9),
    n = (0, o.e7)([A.Z], () => null != A.Z.questEnrollmentBlockedUntil, []),
    s = (0, o.e7)([A.Z], () => A.Z.quests),
    i = r.useMemo(() => (0, x.MM)(s, w.Lv), [s]),
    a = (0, o.e7)([d.Z], () => d.Z.getParticipants(e.channelId), [e.channelId]),
    u = (0, o.e7)([j.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var l, r, s;
        if (i.type === q.fO.STREAM) {
          let e = null != (r = (0, m.Um)(i.stream, n)) ? r : null,
            s = (0, x.ZZ)(t, e);
          if (null != s && (null == (l = s.userStatus) ? true : l.claimedAt) == null) return s
        }
        for (let l of e)
          if (!(0, q.I)(l))
            for (let e of n.getActivities(l.user.id)) {
              let n = (0, x.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(a, i, j.Z), [a, i, e.previewQuest]);
  return null == u || n ? null : (0, l.jsx)(L.A, {
    questOrQuests: u,
    overrideVisibility: !t,
    questContent: C.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: C.jn.QUEST_LIVE_STREAM,
    children: () => (0, l.jsx)(z, V(D({}, e), {
      quest: u
    }))
  })
}
let B = function(e) {
  let t = (0, o.e7)([T.default], () => T.default.getCurrentUser());
  return (0, o.e7)([d.Z], () => ((null == t ? true : t.id) == null ? null : d.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(k, D({}, e)) : null
}