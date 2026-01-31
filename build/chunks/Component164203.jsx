/** Chunk was on 20725 **/
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

function W(e) {
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

function Y(e, t) {
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

function $(e) {
  var t, n, s, b, j;
  let {
    channelId: R,
    quest: $,
    previewQuest: J,
    isParticipatingOverride: X
  } = e, Z = (0, T.Ut)(), [ee, et] = r.useState(false), en = r.useCallback(() => et(true), []), el = r.useCallback(() => et(false), []), er = (0, a.bG)([E.default], () => E.default.getCurrentUser()), es = (0, a.bG)([m.A], () => m.A.getState().theme), ei = (0, o.Mw)(es) ? V.NJ8.DARK : V.NJ8.LIGHT, ea = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), eo = (0, a.bG)([A.A], () => (0, P.t6)(A.A.quests, A.A.questToDeliverForPlacement, S.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: eu,
    isQuestInQuestBar: ec
  } = (0, a.cf)([y.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != $ && null != er && (e = y.A, ea.some(t => {
        if (t.type !== B.lp.STREAM || t.user.id !== er.id) returnfalse;
        let n = (0, f.nr)(t.stream, e);
        return null != n && (0, I.zS)(n, $)
      })),
      isQuestInQuestBar: (null == eo ? true : eo.id) === (null == $ ? true : $.id)
    }
  }, [er, $, ea, eo]), ed = null == (t = (0, w.pU)($)) ? true : t[0], ep = (0, a.bG)([d.Ay, y.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, w.xZ)($) && null !== ed && e.includes(ed)) returntrue;
    let t = null != er ? y.A.findActivity(er.id, e => e.type !== V.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, w.g5)($) && (0, I.zS)(t, $))
  }, [$, er, ed]), ef = true === X || eu || ep, em = (0, a.bG)([A.A], () => null != $ && A.A.isEnrolling($.id), [$]), eb = (0, a.bG)([c.A], () => ((null == er ? true : er.id) == null ? null : c.A.getParticipant(R, er.id)) != null, [R, er]), {
    launchInGameActivity: ey
  } = (0, g.zW)($), eE = (0, g.S5)(null == $ ? true : $.config.expiresAt), ev = (0, g.S5)(null == $ ? true : $.config.rewardsConfig.rewardsExpireAt), eA = r.useCallback(() => {
    (0, v.Oy)($.id, {
      questContent: S.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.ACCEPT_QUEST,
      sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), (0, M.vA)($) && ey()
  }, [$, ey]), eS = r.useCallback(() => {
    Z({
      questId: $.id,
      questContent: S.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.TRACK_PROGRESS,
      sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), (0, q.navigateToQuestHome)({
      fromContent: S.uF.QUEST_LIVE_STREAM,
      questId: $.id
    })
  }, [$, Z]), eO = r.useCallback(() => {
    Z({
      questId: $.id,
      questContent: S.uF.QUEST_LIVE_STREAM,
      questContentCTA: _.Cy.LEARN_MORE,
      sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    }), (0, q.navigateToQuestHome)({
      fromContent: S.uF.QUEST_LIVE_STREAM,
      questId: $.id
    })
  }, [$, Z]), ej = (0, L.ix)({
    quest: $,
    questContent: S.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: S.uF.QUEST_LIVE_STREAM
  }), eh = r.useMemo(() => (0, h.L)({
    quest: $,
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }), [$]), ex = (0, x.NA)({
    quest: $
  }), eg = (0, M.vA)($), eN = (0, g.LS)($), eT = (null == (n = $.userStatus) ? true : n.enrolledAt) != null, e_ = (null == (s = $.userStatus) ? true : s.completedAt) != null, eC = null != $.userStatus && (0, P.gO)($.userStatus, S.uF.QUEST_LIVE_STREAM), eP = null != $.userStatus && (0, P.gO)($.userStatus, S.uF.QUEST_BAR), eI = ec && !eP, ew = O.t$.useConfig({
    location: H.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  eh.info({
    isQuestCallHeaderDismissed: eC,
    isQuestExpired: eN,
    isQuestBarShowing: eI,
    isCurrentUserCallParticipant: eb
  });
  let eM = null != J && (null == (b = $.userStatus) ? true : b.claimedAt) == null;
  if (!eM && (eC || eN || eI) || !eM && !eb) return null;
  let eR = (0, w.Yh)($),
    eD = (0, l.jsx)(k.A, {
      className: K.Qq,
      autoplay: ee,
      quest: $,
      questContent: S.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: S.uF.QUEST_LIVE_STREAM
    });
  return (0, l.jsxs)("div", {
    className: i()(K.iE, {
      [K.rH]: eT
    }),
    onFocus: en,
    onMouseEnter: en,
    onBlur: el,
    onMouseLeave: el,
    children: [!eT && (0, l.jsxs)("div", {
      className: K.D9,
      children: [eD, (0, l.jsx)(G.A, {
        bgOpacity: .32,
        className: K.Pu
      })]
    }), (0, l.jsxs)("div", {
      className: K.Qs,
      children: [(0, l.jsxs)("div", {
        className: K.R_,
        children: [eT && ef ? eD : (0, l.jsx)("img", {
          className: K.rC,
          alt: $.config.messages.gameTitle,
          src: (0, N.tW)($, N.fY.GAME_TILE, ei).url
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: K.Mg,
            children: [(0, l.jsx)(u.Heading, {
              className: K.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: ef ? (0, C.YT)({
                quest: $,
                taskDetails: eR
              }) : z.intl.formatToPlainString(z.t.EQa7os, {
                questName: $.config.messages.questName
              })
            }), (0, l.jsx)(D.C, {
              questContent: S.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
              quest: $,
              preventIdle: true,
              shouldShowDisclosure: (null == (j = $.userStatus) ? true : j.enrolledAt) == null,
              children: e => (0, l.jsx)(u.DUT, Y(W({}, e), {
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
            children: e_ ? z.intl.formatToPlainString(z.t.APddvF, {
              expirationDate: ev
            }) : z.intl.formatToPlainString(z.t["pX+fmn"], {
              expirationDate: eE
            })
          })]
        })]
      }), eT && !e_ && !ef && (0, l.jsx)(F.A, {
        autoplay: ee,
        quest: $,
        questContent: S.uF.QUEST_LIVE_STREAM,
        taskDetails: eR,
        location: H.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
        gameProfileSource: p.Ob.QuestLiveStream
      }), (0, l.jsxs)("div", {
        className: K.uz,
        children: [!eT && (0, l.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, l.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: z.intl.string(z.t.LLLLPD),
            onClick: eO,
            fullWidth: !eg || $.config.features.includes(H.Li.CLOUD_GAMING_ACTIVITY)
          }), ew && !eN ? (0, l.jsx)(U.A, {
            quest: $,
            size: "sm",
            analyticsCtxQuestContent: S.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: S.uF.QUEST_LIVE_STREAM
          }) : (0, l.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ex,
            onClick: eA,
            loading: em
          })]
        }), eT && !e_ && ef && (0, l.jsx)(Q.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: $
        }), eT && !e_ && !ef && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: z.intl.string(z.t.VN1Ajl),
          onClick: eS
        }), e_ && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: z.intl.string(z.t.cfY4PE),
          onClick: ej
        })]
      })]
    })]
  })
}

function J(e) {
  var t;
  let n = r.useContext(b.vG),
    s = (0, a.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: i
    } = j.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    o = (0, a.bG)([A.A], () => A.A.quests),
    u = (0, g.oH)(Array.from(o.values())),
    d = r.useMemo(() => (0, M.$e)(o, H.Ls), [o]),
    p = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    m = (0, a.bG)([y.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var l, r, s;
        if (i.type === B.lp.STREAM) {
          let e = null != (l = (0, f.nr)(i.stream, n)) ? l : null,
            s = (0, I.nq)(t, e);
          if (null != s && (null == (r = s.userStatus) ? true : r.claimedAt) == null) return s
        }
        for (let l of e)
          if (!(0, B.PJ)(l))
            for (let e of n.getActivities(l.user.id)) {
              let n = (0, I.nq)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(p, d, y.A), [p, d, u, e.previewQuest]),
    E = r.useMemo(() => {
      var e;
      return i && null != (e = null == m ? true : m.id) ? e : null
    }, [m, i]);
  r.useEffect(() => {
    null == e.previewQuest && null != E && (0, v.yO)([E], S.uF.QUEST_LIVE_STREAM, "QuestChannelCallHeader")
  }, [E, e.previewQuest]);
  let O = (0, a.bG)([A.A], () => {
      var e;
      let t = A.A.earnedQuestForPlacement.get(S.uF.QUEST_LIVE_STREAM);
      return null == t || null == E ? null : null != (e = t.quests.get(E)) ? e : null
    }, [E]),
    [h, x] = r.useState(null);
  r.useEffect(() => {
    null != O ? x(O) : null === E && x(null)
  }, [O, E]);
  let N = null != O ? O : null !== E ? h : null,
    T = null != (t = e.previewQuest) ? t : i ? N : m;
  return null == T || s ? null : (0, l.jsx)(R.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: S.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: S.uF.QUEST_LIVE_STREAM,
    children: () => (0, l.jsx)($, Y(W({}, e), {
      quest: T
    }))
  })
}
let X = function(e) {
  let t = (0, a.bG)([E.default], () => E.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(J, W({}, e)) : null
}