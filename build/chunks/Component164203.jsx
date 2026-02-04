/** Chunk was on 97246 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Z
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk313961 = require("./313961.js"),
  Chunk15285 = require("./15285.js"),
  Chunk409626 = require("./409626.js"),
  Chunk834757 = require("./834757.js"),
  Chunk544028 = require("./544028.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk290863 = require("./290863.js"),
  Chunk287809 = require("./287809.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk55738 = require("./55738.js"),
  Chunk33621 = require("./33621.js"),
  Chunk943849 = require("./943849.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk651892 = require("./651892.js"),
  Chunk710969 = require("./710969.js"),
  Chunk639214 = require("./639214.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk73473 = require("./73473.js"),
  Chunk270045 = require("./270045.jsx"),
  Chunk201805 = require("./201805.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk79545 = require("./79545.js"),
  Chunk251637 = require("./251637.jsx"),
  Chunk847641 = require("./847641.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk311243 = require("./311243.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk470699 = require("./470699.js");

function Y(e) {
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

function $(e, t) {
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

function J(e) {
  var t, n, o, m, h;
  let {
    channelId: R,
    quest: J,
    previewQuest: X,
    isParticipatingOverride: Z
  } = e, ee = (0, T.Ut)(), [et, en] = r.useState(false), el = r.useCallback(() => en(true), []), er = r.useCallback(() => en(false), []), eo = (0, a.bG)([g.default], () => g.default.getCurrentUser()), ei = (0, a.bG)([b.A], () => b.A.getState().theme), ea = (0, s.Mw)(ei) ? W.NJ8.DARK : W.NJ8.LIGHT, es = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), eu = (0, a.bG)([S.A], () => (0, w.t6)(S.A.quests, S.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: ec,
    isQuestInQuestBar: ed
  } = (0, a.cf)([f.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != J && null != eo && (e = f.A, es.some(t => {
        if (t.type !== V.lp.STREAM || t.user.id !== eo.id) returnfalse;
        let n = (0, p.nr)(t.stream, e);
        return null != n && (0, I.zS)(n, J)
      })),
      isQuestInQuestBar: (null == eu ? true : eu.id) === (null == J ? true : J.id)
    }
  }, [eo, J, es, eu]), e_ = null == (t = (0, P.pU)(J)) ? true : t[0], ep = (0, a.bG)([d.Ay, f.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, P.xZ)(J) && null !== e_ && e.includes(e_)) returntrue;
    let t = null != eo ? f.A.findActivity(eo.id, e => e.type !== W.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, P.g5)(J) && (0, I.zS)(t, J))
  }, [J, eo, e_]), eb = true === Z || ec || ep, em = (0, a.bG)([S.A], () => null != J && S.A.isEnrolling(J.id), [J]), ef = (0, a.bG)([c.A], () => ((null == eo ? true : eo.id) == null ? null : c.A.getParticipant(R, eo.id)) != null, [R, eo]), {
    launchInGameActivity: eg
  } = (0, E.zW)(J), ey = (0, E.S5)(null == J ? true : J.config.expiresAt), eS = (0, E.S5)(null == J ? true : J.config.rewardsConfig.rewardsExpireAt), ex = r.useCallback(() => {
    (0, y.Oy)(J.id, {
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.ACCEPT_QUEST,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, M.vA)(J) && eg()
  }, [J, eg]), eh = r.useCallback(() => {
    ee({
      questId: J.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.TRACK_PROGRESS,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, H.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: J.id
    })
  }, [J, ee]), eA = r.useCallback(() => {
    ee({
      questId: J.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.LEARN_MORE,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, H.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: J.id
    })
  }, [J, ee]), eO = (0, L.ix)({
    quest: J,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM
  }), ev = r.useMemo(() => (0, O.L)({
    quest: J,
    location: q.rE.QUEST_CHANNEL_CALL_HEADER
  }), [J]), eE = (0, v.NA)({
    quest: J
  }), ej = (0, M.vA)(J), eT = (0, E.LS)(J), eC = (null == (n = J.userStatus) ? true : n.enrolledAt) != null, eN = (null == (o = J.userStatus) ? true : o.completedAt) != null, ew = null != J.userStatus && (0, w.gO)(J.userStatus, x.uF.QUEST_LIVE_STREAM), eI = null != J.userStatus && (0, w.gO)(J.userStatus, x.uF.QUEST_BAR), eP = ed && !eI, eM = A.t.useConfig({
    location: q.rE.QUEST_CHANNEL_CALL_HEADER
  }), eR = (0, Q.P)(J);
  ev.info({
    isQuestCallHeaderDismissed: ew,
    isQuestExpired: eT,
    isQuestBarShowing: eP,
    isCurrentUserCallParticipant: ef
  });
  let eD = null != X && (null == (m = J.userStatus) ? true : m.claimedAt) == null;
  if (!eD && (ew || eT || eP) || !eD && !ef) return null;
  let eL = (0, P.Yh)(J),
    eU = (0, l.jsx)(B.A, {
      className: K.Qq,
      autoplay: et,
      quest: J,
      questContent: x.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    });
  return (0, l.jsxs)("div", {
    className: i()(K.iE, {
      [K.rH]: eC
    }),
    onFocus: el,
    onMouseEnter: el,
    onBlur: er,
    onMouseLeave: er,
    children: [!eC && (0, l.jsxs)("div", {
      className: K.D9,
      children: [(0, l.jsx)(k.A, {
        bgOpacity: .32,
        className: K.Pu
      }), eU]
    }), (0, l.jsxs)("div", {
      className: K.Qs,
      children: [(0, l.jsxs)("div", {
        className: K.R_,
        children: [eC && eb ? eU : (0, l.jsx)("img", {
          className: K.rC,
          alt: J.config.messages.gameTitle,
          src: (0, j.tW)(J, j.fY.GAME_TILE, ea).url
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: K.Mg,
            children: [(0, l.jsx)(u.Heading, {
              className: K.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: eb ? (0, N.YT)({
                quest: J,
                taskDetails: eL
              }) : z.intl.formatToPlainString(z.t.EQa7os, {
                questName: J.config.messages.questName
              })
            }), (0, l.jsx)(D.C, {
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              quest: J,
              preventIdle: true,
              shouldShowDisclosure: (null == (h = J.userStatus) ? true : h.enrolledAt) == null,
              children: e => (0, l.jsx)(u.DUT, $(Y({}, e), {
                className: K.rb,
                "aria-label": z.intl.string(z.t.DEoVWZ),
                children: (0, l.jsx)(u.jNK, {
                  size: "md",
                  color: "currentColor",
                  className: K.Bx
                })
              }))
            })]
          }), (0, l.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eN ? z.intl.formatToPlainString(z.t.APddvF, {
              expirationDate: eS
            }) : z.intl.formatToPlainString(z.t["pX+fmn"], {
              expirationDate: ey
            })
          })]
        })]
      }), eC && !eN && !eb && (0, l.jsx)(F.A, {
        autoplay: et,
        quest: J,
        questContent: x.uF.QUEST_LIVE_STREAM,
        taskDetails: eL,
        location: q.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        gameProfileSource: _.Ob.QuestLiveStream
      }), (0, l.jsxs)("div", {
        className: K.uz,
        children: [!eC && (0, l.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, l.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: z.intl.string(z.t.LLLLPD),
            onClick: eA,
            fullWidth: !ej || J.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
          }), eM.enabled && eR === Q.U.UNENROLLED && eM.enabledQuestStates.has(Q.U.UNENROLLED) && !eT ? (0, l.jsx)(U.A, {
            quest: J,
            size: "sm",
            analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM
          }) : (0, l.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eE,
            onClick: ex,
            loading: em
          })]
        }), eC && !eN && eb && (0, l.jsx)(G.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: J
        }), eC && !eN && !eb && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: z.intl.string(z.t.VN1Ajl),
          onClick: eh
        }), eN && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: z.intl.string(z.t.cfY4PE),
          onClick: eO
        })]
      })]
    })]
  })
}

function X(e) {
  var t;
  let n = r.useContext(m.vG),
    o = (0, a.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: i
    } = h.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    s = (0, a.bG)([S.A], () => S.A.quests),
    u = (0, E.oH)(Array.from(s.values())),
    d = r.useMemo(() => (0, M.$e)(s, q.Ls), [s]),
    _ = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    b = (0, a.bG)([f.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var l, r, o;
        if (i.type === V.lp.STREAM) {
          let e = null != (l = (0, p.nr)(i.stream, n)) ? l : null,
            o = (0, I.nq)(t, e);
          if (null != o && (null == (r = o.userStatus) ? true : r.claimedAt) == null) return o
        }
        for (let l of e)
          if (!(0, V.PJ)(l))
            for (let e of n.getActivities(l.user.id)) {
              let n = (0, I.nq)(t, e);
              if (null != n && (null == (o = n.userStatus) ? true : o.claimedAt) == null) return n
            }
      }
      return null
    }(_, d, f.A), [_, d, u, e.previewQuest]),
    g = r.useMemo(() => {
      var e;
      return i && null != (e = null == b ? true : b.id) ? e : null
    }, [b, i]);
  r.useEffect(() => {
    null == e.previewQuest && null != g && (0, y.yO)([g], x.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
  }, [g, e.previewQuest]);
  let A = (0, a.bG)([S.A], () => {
      var e;
      let t = S.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
      return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null
    }, [g]),
    [O, v] = r.useState(null);
  r.useEffect(() => {
    null != A ? v(A) : null === g && v(null)
  }, [A, g]);
  let j = null != A ? A : null !== g ? O : null,
    T = null != (t = e.previewQuest) ? t : i ? j : b;
  return null == T || o ? null : (0, l.jsx)(R.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
    children: () => (0, l.jsx)(J, $(Y({}, e), {
      quest: T
    }))
  })
}
let Z = function(e) {
  let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(X, Y({}, e)) : null
}