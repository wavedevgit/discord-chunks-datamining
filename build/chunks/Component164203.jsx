/** Chunk was on 97246 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => X
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

function $(e) {
  var t, n, o, m, A;
  let {
    channelId: R,
    quest: $,
    previewQuest: J,
    isParticipatingOverride: X
  } = e, Z = (0, T.Ut)(), [ee, et] = l.useState(false), en = l.useCallback(() => et(true), []), er = l.useCallback(() => et(false), []), el = (0, a.bG)([g.default], () => g.default.getCurrentUser()), eo = (0, a.bG)([b.A], () => b.A.getState().theme), ei = (0, s.Mw)(eo) ? q.NJ8.DARK : q.NJ8.LIGHT, ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, a.bG)([S.A], () => (0, w.t6)(S.A.quests, S.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: eu,
    isQuestInQuestBar: ec
  } = (0, a.cf)([f.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != $ && null != el && (e = f.A, ea.some(t => {
        if (t.type !== W.lp.STREAM || t.user.id !== el.id) returnfalse;
        let n = (0, p.nr)(t.stream, e);
        return null != n && (0, I.zS)(n, $)
      })),
      isQuestInQuestBar: (null == es ? true : es.id) === (null == $ ? true : $.id)
    }
  }, [el, $, ea, es]), ed = null == (t = (0, P.pU)($)) ? true : t[0], e_ = (0, a.bG)([d.Ay, f.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, P.xZ)($) && null !== ed && e.includes(ed)) returntrue;
    let t = null != el ? f.A.findActivity(el.id, e => e.type !== q.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, P.g5)($) && (0, I.zS)(t, $))
  }, [$, el, ed]), ep = true === X || eu || e_, eb = (0, a.bG)([S.A], () => null != $ && S.A.isEnrolling($.id), [$]), em = (0, a.bG)([c.A], () => ((null == el ? true : el.id) == null ? null : c.A.getParticipant(R, el.id)) != null, [R, el]), {
    launchInGameActivity: ef
  } = (0, E.zW)($), eg = (0, E.S5)(null == $ ? true : $.config.expiresAt), ey = (0, E.S5)(null == $ ? true : $.config.rewardsConfig.rewardsExpireAt), eS = l.useCallback(() => {
    (0, y.Oy)($.id, {
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.ACCEPT_QUEST,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, M.vA)($) && ef()
  }, [$, ef]), ex = l.useCallback(() => {
    Z({
      questId: $.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.TRACK_PROGRESS,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: $.id
    })
  }, [$, Z]), eh = l.useCallback(() => {
    Z({
      questId: $.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: C.Cy.LEARN_MORE,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: $.id
    })
  }, [$, Z]), eA = (0, L.ix)({
    quest: $,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM
  }), ev = l.useMemo(() => (0, v.L)({
    quest: $,
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }), [$]), eO = (0, O.NA)({
    quest: $
  }), eE = (0, M.vA)($), ej = (0, E.LS)($), eT = (null == (n = $.userStatus) ? true : n.enrolledAt) != null, eC = (null == (o = $.userStatus) ? true : o.completedAt) != null, eN = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_LIVE_STREAM), ew = null != $.userStatus && (0, w.gO)($.userStatus, x.uF.QUEST_BAR), eI = ec && !ew, eP = h.t$.useConfig({
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  ev.info({
    isQuestCallHeaderDismissed: eN,
    isQuestExpired: ej,
    isQuestBarShowing: eI,
    isCurrentUserCallParticipant: em
  });
  let eM = null != J && (null == (m = $.userStatus) ? true : m.claimedAt) == null;
  if (!eM && (eN || ej || eI) || !eM && !em) return null;
  let eR = (0, P.Yh)($),
    eD = (0, r.jsx)(k.A, {
      className: z.Qq,
      autoplay: ee,
      quest: $,
      questContent: x.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: i()(z.iE, {
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
        children: [eT && ep ? eD : (0, r.jsx)("img", {
          className: z.rC,
          alt: $.config.messages.gameTitle,
          src: (0, j.tW)($, j.fY.GAME_TILE, ei).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: z.Mg,
            children: [(0, r.jsx)(u.Heading, {
              className: z.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: ep ? (0, N.YT)({
                quest: $,
                taskDetails: eR
              }) : V.intl.formatToPlainString(V.t.EQa7os, {
                questName: $.config.messages.questName
              })
            }), (0, r.jsx)(D.C, {
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              quest: $,
              preventIdle: true,
              shouldShowDisclosure: (null == (A = $.userStatus) ? true : A.enrolledAt) == null,
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
      }), eT && !eC && !ep && (0, r.jsx)(B.A, {
        autoplay: ee,
        quest: $,
        questContent: x.uF.QUEST_LIVE_STREAM,
        taskDetails: eR,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
        gameProfileSource: _.Ob.QuestLiveStream
      }), (0, r.jsxs)("div", {
        className: z.uz,
        children: [!eT && (0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: V.intl.string(V.t.LLLLPD),
            onClick: eh,
            fullWidth: !eE || $.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
          }), eP && !ej ? (0, r.jsx)(U.A, {
            quest: $,
            size: "sm",
            analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM
          }) : (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eO,
            onClick: eS,
            loading: eb
          })]
        }), eT && !eC && ep && (0, r.jsx)(Q.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: $
        }), eT && !eC && !ep && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.VN1Ajl),
          onClick: ex
        }), eC && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.cfY4PE),
          onClick: eA
        })]
      })]
    })]
  })
}

function J(e) {
  var t;
  let n = l.useContext(m.vG),
    o = (0, a.bG)([S.A], () => null != S.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: i
    } = A.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    s = (0, a.bG)([S.A], () => S.A.quests),
    u = (0, E.oH)(Array.from(s.values())),
    d = l.useMemo(() => (0, M.$e)(s, H.Ls), [s]),
    _ = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    b = (0, a.bG)([f.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var r, l, o;
        if (i.type === W.lp.STREAM) {
          let e = null != (r = (0, p.nr)(i.stream, n)) ? r : null,
            o = (0, I.nq)(t, e);
          if (null != o && (null == (l = o.userStatus) ? true : l.claimedAt) == null) return o
        }
        for (let r of e)
          if (!(0, W.PJ)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, I.nq)(t, e);
              if (null != n && (null == (o = n.userStatus) ? true : o.claimedAt) == null) return n
            }
      }
      return null
    }(_, d, f.A), [_, d, u, e.previewQuest]),
    g = l.useMemo(() => {
      var e;
      return i && null != (e = null == b ? true : b.id) ? e : null
    }, [b, i]);
  l.useEffect(() => {
    null == e.previewQuest && null != g && (0, y.yO)([g], x.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
  }, [g, e.previewQuest]);
  let h = (0, a.bG)([S.A], () => {
      var e;
      let t = S.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
      return null == t || null == g ? null : null != (e = t.quests.get(g)) ? e : null
    }, [g]),
    [v, O] = l.useState(null);
  l.useEffect(() => {
    null != h ? O(h) : null === g && O(null)
  }, [h, g]);
  let j = null != h ? h : null !== g ? v : null,
    T = null != (t = e.previewQuest) ? t : i ? j : b;
  return null == T || o ? null : (0, r.jsx)(R.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)($, Y(K({}, e), {
      quest: T
    }))
  })
}
let X = function(e) {
  let t = (0, a.bG)([g.default], () => g.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(J, K({}, e)) : null
}