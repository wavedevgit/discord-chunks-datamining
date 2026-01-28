/** Chunk was on 52390 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
  Chunk245853 = require("./245853.js"),
  Chunk55738 = require("./55738.js"),
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

function K(e) {
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

function Y(e, t) {
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

function X(e) {
  var t, n, i, _, v;
  let {
    channelId: R,
    quest: X,
    previewQuest: J,
    isParticipatingOverride: $
  } = e, Z = (0, T.Ut)(), [ee, et] = l.useState(false), en = l.useCallback(() => et(true), []), er = l.useCallback(() => et(false), []), el = (0, o.bG)([g.default], () => g.default.getCurrentUser()), ei = (0, o.bG)([f.A], () => f.A.getState().theme), ea = (0, s.Mw)(ei) ? q.NJ8.DARK : q.NJ8.LIGHT, eo = (0, o.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, o.bG)([x.A], () => (0, P.t6)(x.A.quests, x.A.questToDeliverForPlacement, h.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: eu,
    isQuestInQuestBar: ec
  } = (0, o.cf)([b.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != X && null != el && (e = b.A, eo.some(t => {
        if (t.type !== W.lp.STREAM || t.user.id !== el.id) returnfalse;
        let n = (0, m.nr)(t.stream, e);
        return null != n && (0, I.zS)(n, X)
      })),
      isQuestInQuestBar: (null == es ? true : es.id) === (null == X ? true : X.id)
    }
  }, [el, X, eo, es]), ed = null == (t = (0, w.pU)(X)) ? true : t[0], ep = (0, o.bG)([d.Ay, b.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, w.xZ)(X) && null !== ed && e.includes(ed)) returntrue;
    let t = null != el ? b.A.findActivity(el.id, e => e.type !== q.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, w.g5)(X) && (0, I.zS)(t, X))
  }, [X, el, ed]), em = true === $ || eu || ep, ef = (0, o.bG)([x.A], () => null != X && x.A.isEnrolling(X.id), [X]), e_ = (0, o.bG)([c.A], () => ((null == el ? true : el.id) == null ? null : c.A.getParticipant(R, el.id)) != null, [R, el]), {
    launchInGameActivity: eb
  } = (0, O.zW)(X), eg = (0, O.S5)(null == X ? true : X.config.expiresAt), ey = (0, O.S5)(null == X ? true : X.config.rewardsConfig.rewardsExpireAt), ex = l.useCallback(() => {
    (0, y.Oy)(X.id, {
      questContent: h.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.ACCEPT_QUEST,
      sourceQuestContent: h.uF.QUEST_LIVE_STREAM
    }), (0, M.vA)(X) && eb()
  }, [X, eb]), eh = l.useCallback(() => {
    Z({
      questId: X.id,
      questContent: h.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.TRACK_PROGRESS,
      sourceQuestContent: h.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: h.uF.QUEST_LIVE_STREAM,
      questId: X.id
    })
  }, [X, Z]), eA = l.useCallback(() => {
    Z({
      questId: X.id,
      questContent: h.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.LEARN_MORE,
      sourceQuestContent: h.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: h.uF.QUEST_LIVE_STREAM,
      questId: X.id
    })
  }, [X, Z]), ev = (0, L.ix)({
    quest: X,
    questContent: h.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: h.uF.QUEST_LIVE_STREAM
  }), eS = l.useMemo(() => (0, S.L)({
    quest: X,
    location: B.rE.QUEST_CHANNEL_CALL_HEADER
  }), [X]), eE = (0, E.NA)({
    quest: X
  }), eO = (0, M.vA)(X), ej = (0, O.LS)(X), eT = (null == (n = X.userStatus) ? true : n.enrolledAt) != null, eC = (null == (i = X.userStatus) ? true : i.completedAt) != null, eN = null != X.userStatus && (0, P.gO)(X.userStatus, h.uF.QUEST_LIVE_STREAM), eP = null != X.userStatus && (0, P.gO)(X.userStatus, h.uF.QUEST_BAR), eI = ec && !eP, ew = A.t$.useConfig({
    location: B.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  eS.info({
    isQuestCallHeaderDismissed: eN,
    isQuestExpired: ej,
    isQuestBarShowing: eI,
    isCurrentUserCallParticipant: e_
  });
  let eM = null != J && (null == (_ = X.userStatus) ? true : _.claimedAt) == null;
  if (!eM && (eN || ej || eI) || !eM && !e_) return null;
  let eR = (0, w.Yh)(X),
    eD = (0, r.jsx)(Q.A, {
      className: z.Qq,
      autoplay: ee,
      quest: X,
      questContent: h.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: h.uF.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: a()(z.iE, {
      [z.rH]: eT
    }),
    onFocus: en,
    onMouseEnter: en,
    onBlur: er,
    onMouseLeave: er,
    children: [!eT && (0, r.jsxs)("div", {
      className: z.D9,
      children: [eD, (0, r.jsx)(G.A, {
        bgOpacity: .32,
        className: z.Pu
      })]
    }), (0, r.jsxs)("div", {
      className: z.Qs,
      children: [(0, r.jsxs)("div", {
        className: z.R_,
        children: [eT && em ? eD : (0, r.jsx)("img", {
          className: z.rC,
          alt: X.config.messages.gameTitle,
          src: (0, j.tW)(X, j.fY.GAME_TILE, ea).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: z.Mg,
            children: [(0, r.jsx)(u.Heading, {
              className: z.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: em ? (0, N.YT)({
                quest: X,
                taskDetails: eR
              }) : V.intl.formatToPlainString(V.t.EQa7os, {
                questName: X.config.messages.questName
              })
            }), (0, r.jsx)(D.C, {
              questContent: h.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
              quest: X,
              preventIdle: true,
              shouldShowDisclosure: (null == (v = X.userStatus) ? true : v.enrolledAt) == null,
              children: e => (0, r.jsx)(u.DUT, Y(K({}, e), {
                className: z.rb,
                "aria-label": V.intl.string(V.t.DEoVWZ),
                children: (0, r.jsx)(u.jNK, {
                  size: "md",
                  color: "currentColor",
                  className: z.Bx
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eC ? V.intl.formatToPlainString(V.t.APddvF, {
              expirationDate: ey
            }) : V.intl.formatToPlainString(V.t["pX+fmn"], {
              expirationDate: eg
            })
          })]
        })]
      }), eT && !eC && !em && (0, r.jsx)(H.A, {
        autoplay: ee,
        quest: X,
        questContent: h.uF.QUEST_LIVE_STREAM,
        taskDetails: eR,
        location: B.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
        gameProfileSource: p.Ob.QuestLiveStream
      }), (0, r.jsxs)("div", {
        className: z.uz,
        children: [!eT && (0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: V.intl.string(V.t.LLLLPD),
            onClick: eA,
            fullWidth: !eO || X.config.features.includes(B.Li.CLOUD_GAMING_ACTIVITY)
          }), ew && !ej ? (0, r.jsx)(U.A, {
            quest: X,
            size: "sm",
            analyticsCtxQuestContent: h.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: h.uF.QUEST_LIVE_STREAM
          }) : (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eE,
            onClick: ex,
            loading: ef
          })]
        }), eT && !eC && em && (0, r.jsx)(k.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: X
        }), eT && !eC && !em && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.VN1Ajl),
          onClick: eh
        }), eC && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.cfY4PE),
          onClick: ev
        })]
      })]
    })]
  })
}

function J(e) {
  var t;
  let n = l.useContext(_.vG),
    i = (0, o.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: a
    } = v.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    s = (0, o.bG)([x.A], () => x.A.quests),
    u = (0, O.oH)(Array.from(s.values())),
    d = l.useMemo(() => (0, M.$e)(s, B.Ls), [s]),
    p = (0, o.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    f = (0, o.bG)([b.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let a of e) {
        var r, l, i;
        if (a.type === W.lp.STREAM) {
          let e = null != (r = (0, m.nr)(a.stream, n)) ? r : null,
            i = (0, I.nq)(t, e);
          if (null != i && (null == (l = i.userStatus) ? true : l.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, W.PJ)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, I.nq)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(p, d, b.A), [p, d, u, e.previewQuest]),
    g = l.useMemo(() => {
      var e;
      return a && null != (e = null == f ? true : f.id) ? e : null
    }, [f, a]);
  l.useEffect(() => {
    null == e.previewQuest && null != g && (0, y.yO)([g], h.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
  }, [g, e.previewQuest]);
  let A = (0, o.bG)([x.A], () => {
      var e;
      let t = x.A.earnedQuestForPlacement.get(h.uF.QUEST_LIVE_STREAM);
      return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null
    }, [g]),
    [S, E] = l.useState(null);
  l.useEffect(() => {
    null != A ? E(A) : null === g && E(null)
  }, [A, g]);
  let j = null != A ? A : null !== g ? S : null,
    T = null != (t = e.previewQuest) ? t : a ? j : f;
  return null == T || i ? null : (0, r.jsx)(R.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: h.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: h.uF.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(X, Y(K({}, e), {
      quest: T
    }))
  })
}
let $ = function(e) {
  let t = (0, o.bG)([g.default], () => g.default.getCurrentUser());
  return (0, o.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(J, K({}, e)) : null
}