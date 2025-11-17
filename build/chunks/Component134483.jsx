/** Chunk was on 64838 **/
/** chunk id: 134483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk687516 = require("./687516.js"),
  Chunk210887 = require("./210887.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk5881 = require("./5881.js"),
  Chunk373370 = require("./373370.js"),
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  var t, n, s, m, C;
  let {
    channelId: k,
    quest: B,
    previewQuest: W,
    isParticipatingOverride: H
  } = e, z = (0, v.O5)(), [G, F] = l.useState(false), K = l.useCallback(() => F(true), []), X = l.useCallback(() => F(false), []), Y = (0, a.e7)([E.default], () => E.default.getCurrentUser()), $ = (0, a.e7)([f.Z], () => f.Z.getState().theme), J = (0, o.wj)($) ? R.BRd.DARK : R.BRd.LIGHT, ee = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), et = (0, a.e7)([S.Z], () => (0, T.PM)(S.Z.quests, S.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: en,
    isQuestInQuestBar: er
  } = (0, a.cj)([b.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != B && null != Y && (e = b.Z, ee.some(t => {
        if (t.type !== U.fO.STREAM || t.user.id !== Y.id) returnfalse;
        let n = (0, p.Um)(t.stream, e);
        return null != n && (0, T._D)(n, B)
      })),
      isQuestInQuestBar: (null == et ? true : et.id) === (null == B ? true : B.id)
    }
  }, [Y, B, ee, et]), el = null != B ? x.r.build(B.config) : null, es = null == (t = (0, T.vj)(B)) ? true : t[0], ei = (0, a.e7)([d.ZP, b.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, T.$H)(B) && null !== es && e.includes(es)) returntrue;
    let t = null != Y ? b.Z.findActivity(Y.id, e => e.type !== R.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, T.$J)(B) && (0, T._D)(t, B))
  }, [B, Y, es]), ea = true === H || en || ei, eo = (0, a.e7)([S.Z], () => null != B && S.Z.isEnrolling(B.id), [B]), eu = (0, a.e7)([c.Z], () => ((null == Y ? true : Y.id) == null ? null : c.Z.getParticipant(k, Y.id)) != null, [k, Y]), {
    launchInGameActivity: ec
  } = (0, g.zB)(B), ed = (0, g.B6)(null == B ? true : B.config.expiresAt), ep = (0, g.B6)(null == el ? true : el.rewardsExpireAt), ef = l.useCallback(() => {
    (0, j.AH)(B.id, {
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.ACCEPT_QUEST,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, T.Rt)(B) && ec()
  }, [B, ec]), em = l.useCallback(() => {
    z({
      questId: B.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.TRACK_PROGRESS,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: B.id
    })
  }, [B, z]), eb = l.useCallback(() => {
    z({
      questId: B.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.LEARN_MORE,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: B.id
    })
  }, [B, z]), eE = (0, Q.hf)({
    quest: B,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM
  }), ej = l.useMemo(() => (0, y.T)({
    quest: B,
    location: N.dr.QUEST_CHANNEL_CALL_HEADER
  }), [B]), ev = (0, A.CR)({
    quest: B
  }), eT = (0, T.Rt)(B), eg = (0, g.tP)(B), eS = (null == (n = B.userStatus) ? true : n.enrolledAt) != null, eh = (null == (s = B.userStatus) ? true : s.completedAt) != null, ey = null != B.userStatus && (0, T.zE)(B.userStatus, h.jn.QUEST_LIVE_STREAM), eA = null != B.userStatus && (0, T.zE)(B.userStatus, h.jn.QUEST_BAR), eO = er && !eA;
  ej.info({
    isQuestCallHeaderDismissed: ey,
    isQuestExpired: eg,
    isQuestBarShowing: eO,
    isCurrentUserCallParticipant: eu
  });
  let ex = null != W && (null == (m = B.userStatus) ? true : m.claimedAt) == null;
  if (!ex && (ey || eg || eO) || !ex && !eu) return null;
  let eC = (0, T.il)(B),
    e_ = (0, r.jsx)(Z.Z, {
      className: M.rewardTile,
      autoplay: G,
      quest: B,
      questContent: h.jn.QUEST_LIVE_STREAM,
      location: N.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: i()(M.wrapper, {
      [M.wrapperAccepted]: eS
    }),
    onFocus: K,
    onMouseEnter: K,
    onBlur: X,
    onMouseLeave: X,
    children: [!eS && (0, r.jsxs)("div", {
      className: M.rewardTileWrapper,
      children: [e_, (0, r.jsx)(w.Z, {
        bgOpacity: .32,
        className: M.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: M.content,
      children: [(0, r.jsxs)("div", {
        className: M.heading,
        children: [eS && ea ? e_ : (0, r.jsx)("img", {
          className: M.gameTile,
          alt: B.config.messages.gameTitle,
          src: (0, O.fh)(B, O.eC.GAME_TILE, J).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: M.headingWithSubmenu,
            children: [(0, r.jsx)(u.Heading, {
              className: M.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: ea ? (0, T.AV)({
                quest: B,
                taskDetails: eC
              }) : q.intl.formatToPlainString(q.t.EQa7os, {
                questName: B.config.messages.questName
              })
            }), (0, r.jsx)(P.r, {
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              quest: B,
              preventIdle: true,
              shouldShowDisclosure: (null == (C = B.userStatus) ? true : C.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, V(D({}, e), {
                className: M.submenuWrapper,
                "aria-label": q.intl.string(q.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: M.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: eh ? q.intl.formatToPlainString(q.t.APddvF, {
              expirationDate: ep
            }) : q.intl.formatToPlainString(q.t["pX+fmn"], {
              expirationDate: ed
            })
          })]
        })]
      }), eS && !eh && !ea && (0, r.jsx)(L.Z, {
        autoplay: G,
        quest: B,
        questContent: h.jn.QUEST_LIVE_STREAM,
        taskDetails: eC,
        location: N.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: h.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: M.ctas,
        children: [!eS && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: q.intl.string(q.t.LLLLPD),
            onClick: eb,
            fullWidth: !eT || B.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ev,
            onClick: ef,
            loading: eo
          })]
        }), eS && !eh && ea && (0, r.jsx)(_.Z, {
          color: u.TVs.colors.BG_BRAND,
          quest: B
        }), eS && !eh && !ea && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: q.intl.string(q.t.VN1Ajl),
          onClick: em
        }), eh && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: q.intl.string(q.t.cfY4PE),
          onClick: eE
        })]
      })]
    })]
  })
}

function B(e) {
  let t = l.useContext(m.h9),
    n = (0, a.e7)([S.Z], () => null != S.Z.questEnrollmentBlockedUntil, []),
    s = (0, a.e7)([S.Z], () => S.Z.quests),
    i = (0, g.Fy)(Array.from(s.values())),
    o = l.useMemo(() => (0, T.NI)(s, N.Lv), [s]),
    u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    d = (0, a.e7)([b.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var r, l, s;
        if (i.type === U.fO.STREAM) {
          let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
            s = (0, T.ZZ)(t, e);
          if (null != s && (null == (r = s.userStatus) ? true : r.claimedAt) == null) return s
        }
        for (let r of e)
          if (!(0, U.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, T.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(u, o, b.Z), [u, o, i, e.previewQuest]);
  return null == d || n ? null : (0, r.jsx)(C.A, {
    questOrQuests: d,
    overrideVisibility: !t,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(k, V(D({}, e), {
      quest: d
    }))
  })
}
let W = function(e) {
  let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
  return (0, a.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(B, D({}, e)) : null
}