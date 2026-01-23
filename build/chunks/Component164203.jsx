/** Chunk was on 20725 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function W(e) {
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
  var t, n, i, y, O;
  let {
    channelId: R,
    quest: X,
    previewQuest: J,
    isParticipatingOverride: $
  } = e, Z = (0, T.Ut)(), [ee, et] = l.useState(false), en = l.useCallback(() => et(true), []), er = l.useCallback(() => et(false), []), el = (0, a.bG)([g.default], () => g.default.getCurrentUser()), ei = (0, a.bG)([f.A], () => f.A.getState().theme), es = (0, o.Mw)(ei) ? V.NJ8.DARK : V.NJ8.LIGHT, ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), eo = (0, a.bG)([x.A], () => (0, P.t6)(x.A.quests, x.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: eu,
    isQuestInQuestBar: ec
  } = (0, a.cf)([b.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != X && null != el && (e = b.A, ea.some(t => {
        if (t.type !== B.lp.STREAM || t.user.id !== el.id) returnfalse;
        let n = (0, m.nr)(t.stream, e);
        return null != n && (0, I.zS)(n, X)
      })),
      isQuestInQuestBar: (null == eo ? true : eo.id) === (null == X ? true : X.id)
    }
  }, [el, X, ea, eo]), ed = null == (t = (0, w.pU)(X)) ? true : t[0], ep = (0, a.bG)([d.Ay, b.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, w.xZ)(X) && null !== ed && e.includes(ed)) returntrue;
    let t = null != el ? b.A.findActivity(el.id, e => e.type !== V.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, w.g5)(X) && (0, I.zS)(t, X))
  }, [X, el, ed]), em = true === $ || eu || ep, ef = (0, a.bG)([x.A], () => null != X && x.A.isEnrolling(X.id), [X]), ey = (0, a.bG)([c.A], () => ((null == el ? true : el.id) == null ? null : c.A.getParticipant(R, el.id)) != null, [R, el]), {
    launchInGameActivity: eb
  } = (0, S.zW)(X), eg = (0, S.S5)(null == X ? true : X.config.expiresAt), eA = (0, S.S5)(null == X ? true : X.config.rewardsConfig.rewardsExpireAt), ex = l.useCallback(() => {
    (0, A.Oy)(X.id, {
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.ACCEPT_QUEST,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, M.vA)(X) && eb()
  }, [X, eb]), ev = l.useCallback(() => {
    Z({
      questId: X.id,
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.TRACK_PROGRESS,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, H.navigateToQuestHome)({
      fromContent: v.uF.QUEST_LIVE_STREAM,
      questId: X.id
    })
  }, [X, Z]), eh = l.useCallback(() => {
    Z({
      questId: X.id,
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.LEARN_MORE,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, H.navigateToQuestHome)({
      fromContent: v.uF.QUEST_LIVE_STREAM,
      questId: X.id
    })
  }, [X, Z]), eO = (0, L.ix)({
    quest: X,
    questContent: v.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: v.uF.QUEST_LIVE_STREAM
  }), eE = l.useMemo(() => (0, E.L)({
    quest: X,
    location: q.rE.QUEST_CHANNEL_CALL_HEADER
  }), [X]), ej = (0, j.NA)({
    quest: X
  }), eS = (0, M.vA)(X), eN = (0, S.LS)(X), eT = (null == (n = X.userStatus) ? true : n.enrolledAt) != null, e_ = (null == (i = X.userStatus) ? true : i.completedAt) != null, eC = null != X.userStatus && (0, P.gO)(X.userStatus, v.uF.QUEST_LIVE_STREAM), eP = null != X.userStatus && (0, P.gO)(X.userStatus, v.uF.QUEST_BAR), eI = ec && !eP, ew = h.t$.useConfig({
    location: q.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  eE.info({
    isQuestCallHeaderDismissed: eC,
    isQuestExpired: eN,
    isQuestBarShowing: eI,
    isCurrentUserCallParticipant: ey
  });
  let eM = null != J && (null == (y = X.userStatus) ? true : y.claimedAt) == null;
  if (!eM && (eC || eN || eI) || !eM && !ey) return null;
  let eR = (0, w.Yh)(X),
    eD = (0, r.jsx)(Q.A, {
      className: K.Qq,
      autoplay: ee,
      quest: X,
      questContent: v.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: s()(K.iE, {
      [K.rH]: eT
    }),
    onFocus: en,
    onMouseEnter: en,
    onBlur: er,
    onMouseLeave: er,
    children: [!eT && (0, r.jsxs)("div", {
      className: K.D9,
      children: [eD, (0, r.jsx)(G.A, {
        bgOpacity: .32,
        className: K.Pu
      })]
    }), (0, r.jsxs)("div", {
      className: K.Qs,
      children: [(0, r.jsxs)("div", {
        className: K.R_,
        children: [eT && em ? eD : (0, r.jsx)("img", {
          className: K.rC,
          alt: X.config.messages.gameTitle,
          src: (0, N.tW)(X, N.fY.GAME_TILE, es).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: K.Mg,
            children: [(0, r.jsx)(u.Heading, {
              className: K.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: em ? (0, C.YT)({
                quest: X,
                taskDetails: eR
              }) : z.intl.formatToPlainString(z.t.EQa7os, {
                questName: X.config.messages.questName
              })
            }), (0, r.jsx)(D.C, {
              questContent: v.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
              quest: X,
              preventIdle: true,
              shouldShowDisclosure: (null == (O = X.userStatus) ? true : O.enrolledAt) == null,
              children: e => (0, r.jsx)(u.DUT, Y(W({}, e), {
                className: K.rb,
                "aria-label": z.intl.string(z.t.DEoVWZ),
                children: (0, r.jsx)(u.jNK, {
                  size: "md",
                  color: "currentColor",
                  className: K.Bx
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: e_ ? z.intl.formatToPlainString(z.t.APddvF, {
              expirationDate: eA
            }) : z.intl.formatToPlainString(z.t["pX+fmn"], {
              expirationDate: eg
            })
          })]
        })]
      }), eT && !e_ && !em && (0, r.jsx)(F.A, {
        autoplay: ee,
        quest: X,
        questContent: v.uF.QUEST_LIVE_STREAM,
        taskDetails: eR,
        location: q.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
        gameProfileSource: p.Ob.QuestLiveStream
      }), (0, r.jsxs)("div", {
        className: K.uz,
        children: [!eT && (0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: z.intl.string(z.t.LLLLPD),
            onClick: eh,
            fullWidth: !eS || X.config.features.includes(q.Li.CLOUD_GAMING_ACTIVITY)
          }), ew && !eN ? (0, r.jsx)(U.A, {
            quest: X,
            size: "sm",
            analyticsCtxQuestContent: v.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: v.uF.QUEST_LIVE_STREAM
          }) : (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ej,
            onClick: ex,
            loading: ef
          })]
        }), eT && !e_ && em && (0, r.jsx)(k.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: X
        }), eT && !e_ && !em && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: z.intl.string(z.t.VN1Ajl),
          onClick: ev
        }), e_ && (0, r.jsx)(u.Button, {
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

function J(e) {
  var t;
  let n = l.useContext(y.vG),
    i = (0, a.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: s
    } = O.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    o = (0, a.bG)([x.A], () => x.A.quests),
    u = (0, S.oH)(Array.from(o.values())),
    d = l.useMemo(() => (0, M.$e)(o, q.Ls), [o]),
    p = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    f = (0, a.bG)([b.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let s of e) {
        var r, l, i;
        if (s.type === B.lp.STREAM) {
          let e = null != (r = (0, m.nr)(s.stream, n)) ? r : null,
            i = (0, I.nq)(t, e);
          if (null != i && (null == (l = i.userStatus) ? true : l.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, B.PJ)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, I.nq)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(p, d, b.A), [p, d, u, e.previewQuest]),
    g = l.useMemo(() => {
      var e;
      return s && null != (e = null == f ? true : f.id) ? e : null
    }, [f, s]);
  l.useEffect(() => {
    null == e.previewQuest && null != g && (0, A.yO)([g], v.uF.QUEST_LIVE_STREAM)
  }, [g, e.previewQuest]);
  let h = (0, a.bG)([x.A], () => {
      var e;
      let t = x.A.earnedQuestForPlacement.get(v.uF.QUEST_LIVE_STREAM);
      return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null
    }, [g]),
    [E, j] = l.useState(null);
  l.useEffect(() => {
    null != h ? j(h) : null === g && j(null)
  }, [h, g]);
  let N = null != h ? h : null !== g ? E : null,
    T = null != (t = e.previewQuest) ? t : s ? N : f;
  return null == T || i ? null : (0, r.jsx)(R.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: v.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(X, Y(W({}, e), {
      quest: T
    }))
  })
}
let $ = function(e) {
  let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(J, W({}, e)) : null
}