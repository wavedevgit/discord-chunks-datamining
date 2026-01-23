/** Chunk was on 20725 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => J
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

function W(e, t) {
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

function Y(e) {
  var t, n, i, f, h;
  let {
    channelId: M,
    quest: Y,
    previewQuest: X,
    isParticipatingOverride: J
  } = e, $ = (0, N.Ut)(), [Z, ee] = l.useState(false), et = l.useCallback(() => ee(true), []), en = l.useCallback(() => ee(false), []), er = (0, a.bG)([b.default], () => b.default.getCurrentUser()), el = (0, a.bG)([m.A], () => m.A.getState().theme), ei = (0, o.Mw)(el) ? q.NJ8.DARK : q.NJ8.LIGHT, es = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), ea = (0, a.bG)([A.A], () => (0, C.t6)(A.A.quests, A.A.questToDeliverForPlacement, x.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: eo,
    isQuestInQuestBar: eu
  } = (0, a.cf)([y.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != Y && null != er && (e = y.A, es.some(t => {
        if (t.type !== V.lp.STREAM || t.user.id !== er.id) returnfalse;
        let n = (0, p.nr)(t.stream, e);
        return null != n && (0, P.zS)(n, Y)
      })),
      isQuestInQuestBar: (null == ea ? true : ea.id) === (null == Y ? true : Y.id)
    }
  }, [er, Y, es, ea]), ec = null == (t = (0, I.pU)(Y)) ? true : t[0], ed = (0, a.bG)([d.Ay, y.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, I.xZ)(Y) && null !== ec && e.includes(ec)) returntrue;
    let t = null != er ? y.A.findActivity(er.id, e => e.type !== q.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, I.g5)(Y) && (0, P.zS)(t, Y))
  }, [Y, er, ec]), ep = true === J || eo || ed, em = (0, a.bG)([A.A], () => null != Y && A.A.isEnrolling(Y.id), [Y]), ef = (0, a.bG)([c.A], () => ((null == er ? true : er.id) == null ? null : c.A.getParticipant(M, er.id)) != null, [M, er]), {
    launchInGameActivity: ey
  } = (0, j.zW)(Y), eb = (0, j.S5)(null == Y ? true : Y.config.expiresAt), eg = (0, j.S5)(null == Y ? true : Y.config.rewardsConfig.rewardsExpireAt), eA = l.useCallback(() => {
    (0, g.Oy)(Y.id, {
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: T.Cy.ACCEPT_QUEST,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, w.vA)(Y) && ey()
  }, [Y, ey]), ex = l.useCallback(() => {
    $({
      questId: Y.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: T.Cy.TRACK_PROGRESS,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: Y.id
    })
  }, [Y, $]), ev = l.useCallback(() => {
    $({
      questId: Y.id,
      questContent: x.uF.QUEST_LIVE_STREAM,
      questContentCTA: T.Cy.LEARN_MORE,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    }), (0, F.navigateToQuestHome)({
      fromContent: x.uF.QUEST_LIVE_STREAM,
      questId: Y.id
    })
  }, [Y, $]), eh = (0, D.ix)({
    quest: Y,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM
  }), eO = l.useMemo(() => (0, O.L)({
    quest: Y,
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }), [Y]), eE = (0, E.NA)({
    quest: Y
  }), ej = (0, w.vA)(Y), eS = (0, j.LS)(Y), eN = (null == (n = Y.userStatus) ? true : n.enrolledAt) != null, eT = (null == (i = Y.userStatus) ? true : i.completedAt) != null, e_ = null != Y.userStatus && (0, C.gO)(Y.userStatus, x.uF.QUEST_LIVE_STREAM), eC = null != Y.userStatus && (0, C.gO)(Y.userStatus, x.uF.QUEST_BAR), eP = eu && !eC, eI = v.t$.useConfig({
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  eO.info({
    isQuestCallHeaderDismissed: e_,
    isQuestExpired: eS,
    isQuestBarShowing: eP,
    isCurrentUserCallParticipant: ef
  });
  let ew = null != X && (null == (f = Y.userStatus) ? true : f.claimedAt) == null;
  if (!ew && (e_ || eS || eP) || !ew && !ef) return null;
  let eM = (0, I.Yh)(Y),
    eR = (0, r.jsx)(G.A, {
      className: z.Qq,
      autoplay: Z,
      quest: Y,
      questContent: x.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: x.uF.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: s()(z.iE, {
      [z.rH]: eN
    }),
    onFocus: et,
    onMouseEnter: et,
    onBlur: en,
    onMouseLeave: en,
    children: [!eN && (0, r.jsxs)("div", {
      className: z.D9,
      children: [eR, (0, r.jsx)(k.A, {
        bgOpacity: .32,
        className: z.Pu
      })]
    }), (0, r.jsxs)("div", {
      className: z.Qs,
      children: [(0, r.jsxs)("div", {
        className: z.R_,
        children: [eN && ep ? eR : (0, r.jsx)("img", {
          className: z.rC,
          alt: Y.config.messages.gameTitle,
          src: (0, S.tW)(Y, S.fY.GAME_TILE, ei).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: z.Mg,
            children: [(0, r.jsx)(u.Heading, {
              className: z.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: ep ? (0, _.YT)({
                quest: Y,
                taskDetails: eM
              }) : B.intl.formatToPlainString(B.t.EQa7os, {
                questName: Y.config.messages.questName
              })
            }), (0, r.jsx)(R.C, {
              questContent: x.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
              quest: Y,
              preventIdle: true,
              shouldShowDisclosure: (null == (h = Y.userStatus) ? true : h.enrolledAt) == null,
              children: e => (0, r.jsx)(u.DUT, W(K({}, e), {
                className: z.rb,
                "aria-label": B.intl.string(B.t.DEoVWZ),
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
            children: eT ? B.intl.formatToPlainString(B.t.APddvF, {
              expirationDate: eg
            }) : B.intl.formatToPlainString(B.t["pX+fmn"], {
              expirationDate: eb
            })
          })]
        })]
      }), eN && !eT && !ep && (0, r.jsx)(Q.A, {
        autoplay: Z,
        quest: Y,
        questContent: x.uF.QUEST_LIVE_STREAM,
        taskDetails: eM,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.uF.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: z.uz,
        children: [!eN && (0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: B.intl.string(B.t.LLLLPD),
            onClick: ev,
            fullWidth: !ej || Y.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
          }), eI && !eS ? (0, r.jsx)(L.A, {
            quest: Y,
            size: "sm",
            analyticsCtxQuestContent: x.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: x.uF.QUEST_LIVE_STREAM
          }) : (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eE,
            onClick: eA,
            loading: em
          })]
        }), eN && !eT && ep && (0, r.jsx)(U.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: Y
        }), eN && !eT && !ep && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: B.intl.string(B.t.VN1Ajl),
          onClick: ex
        }), eT && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: B.intl.string(B.t.cfY4PE),
          onClick: eh
        })]
      })]
    })]
  })
}

function X(e) {
  var t;
  let n = l.useContext(f.vG),
    i = (0, a.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: s
    } = h.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    o = (0, a.bG)([A.A], () => A.A.quests),
    u = (0, j.oH)(Array.from(o.values())),
    d = l.useMemo(() => (0, w.$e)(o, H.Ls), [o]),
    m = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    b = (0, a.bG)([y.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let s of e) {
        var r, l, i;
        if (s.type === V.lp.STREAM) {
          let e = null != (r = (0, p.nr)(s.stream, n)) ? r : null,
            i = (0, P.nq)(t, e);
          if (null != i && (null == (l = i.userStatus) ? true : l.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, V.PJ)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, P.nq)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(m, d, y.A), [m, d, u, e.previewQuest]),
    v = l.useMemo(() => {
      var e;
      return s && null != (e = null == b ? true : b.id) ? e : null
    }, [b, s]);
  l.useEffect(() => {
    null == e.previewQuest && null != v && (0, g.yO)([v], x.uF.QUEST_LIVE_STREAM)
  }, [v, e.previewQuest]);
  let O = (0, a.bG)([A.A], () => {
      var e;
      let t = A.A.earnedQuestForPlacement.get(x.uF.QUEST_LIVE_STREAM);
      return null == t || null == v ? null : null != (e = t.quests.get(v)) ? e : null
    }, [v]),
    [E, S] = l.useState(null);
  l.useEffect(() => {
    null != O ? S(O) : null === v && S(null)
  }, [O, v]);
  let N = null != O ? O : null !== v ? E : null,
    T = null != (t = e.previewQuest) ? t : s ? N : b;
  return null == T || i ? null : (0, r.jsx)(M.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: x.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: x.uF.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(Y, W(K({}, e), {
      quest: T
    }))
  })
}
let J = function(e) {
  let t = (0, a.bG)([b.default], () => b.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(X, K({}, e)) : null
}