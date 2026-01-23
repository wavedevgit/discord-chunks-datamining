/** Chunk was on 20725 **/
/** chunk id: 164203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => X
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
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk55738 = require("./55738.js"),
  Chunk943849 = require("./943849.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
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

function z(e) {
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

function K(e, t) {
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

function W(e) {
  var t, n, i, f, O;
  let {
    channelId: w,
    quest: W,
    previewQuest: Y,
    isParticipatingOverride: X
  } = e, J = (0, A.Ut)(), [$, Z] = l.useState(false), ee = l.useCallback(() => Z(true), []), et = l.useCallback(() => Z(false), []), en = (0, a.bG)([b.default], () => b.default.getCurrentUser()), er = (0, a.bG)([m.A], () => m.A.getState().theme), el = (0, o.Mw)(er) ? H.NJ8.DARK : H.NJ8.LIGHT, ei = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]), es = (0, a.bG)([x.A], () => (0, _.t6)(x.A.quests, x.A.questToDeliverForPlacement, v.yW.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: ea,
    isQuestInQuestBar: eo
  } = (0, a.cf)([y.A], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != W && null != en && (e = y.A, ei.some(t => {
        if (t.type !== q.lp.STREAM || t.user.id !== en.id) returnfalse;
        let n = (0, p.nr)(t.stream, e);
        return null != n && (0, C.zS)(n, W)
      })),
      isQuestInQuestBar: (null == es ? true : es.id) === (null == W ? true : W.id)
    }
  }, [en, W, ei, es]), eu = null == (t = (0, P.pU)(W)) ? true : t[0], ec = (0, a.bG)([d.Ay, y.A], () => {
    let e = d.Ay.getRunningGames().map(e => e.id);
    if ((0, P.xZ)(W) && null !== eu && e.includes(eu)) returntrue;
    let t = null != en ? y.A.findActivity(en.id, e => e.type !== H.$pd.CUSTOM_STATUS) : null;
    return !!(null != t && (0, P.g5)(W) && (0, C.zS)(t, W))
  }, [W, en, eu]), ed = true === X || ea || ec, ep = (0, a.bG)([x.A], () => null != W && x.A.isEnrolling(W.id), [W]), em = (0, a.bG)([c.A], () => ((null == en ? true : en.id) == null ? null : c.A.getParticipant(w, en.id)) != null, [w, en]), {
    launchInGameActivity: ef
  } = (0, S.zW)(W), ey = (0, S.S5)(null == W ? true : W.config.expiresAt), eb = (0, S.S5)(null == W ? true : W.config.rewardsConfig.rewardsExpireAt), eg = l.useCallback(() => {
    (0, g.Oy)(W.id, {
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: A.Cy.ACCEPT_QUEST,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, I.vA)(W) && ef()
  }, [W, ef]), eA = l.useCallback(() => {
    J({
      questId: W.id,
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: A.Cy.TRACK_PROGRESS,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, Q.navigateToQuestHome)({
      fromContent: v.uF.QUEST_LIVE_STREAM,
      questId: W.id
    })
  }, [W, J]), ex = l.useCallback(() => {
    J({
      questId: W.id,
      questContent: v.uF.QUEST_LIVE_STREAM,
      questContentCTA: A.Cy.LEARN_MORE,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    }), (0, Q.navigateToQuestHome)({
      fromContent: v.uF.QUEST_LIVE_STREAM,
      questId: W.id
    })
  }, [W, J]), ev = (0, R.ix)({
    quest: W,
    questContent: v.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: v.uF.QUEST_LIVE_STREAM
  }), eh = l.useMemo(() => (0, E.L)({
    quest: W,
    location: F.rE.QUEST_CHANNEL_CALL_HEADER
  }), [W]), eO = (0, j.NA)({
    quest: W
  }), eE = (0, I.vA)(W), ej = (0, S.LS)(W), eS = (null == (n = W.userStatus) ? true : n.enrolledAt) != null, eN = (null == (i = W.userStatus) ? true : i.completedAt) != null, eT = null != W.userStatus && (0, _.gO)(W.userStatus, v.uF.QUEST_LIVE_STREAM), e_ = null != W.userStatus && (0, _.gO)(W.userStatus, v.uF.QUEST_BAR), eC = eo && !e_, eP = h.t$.useConfig({
    location: F.rE.QUEST_CHANNEL_CALL_HEADER
  }).enabled;
  eh.info({
    isQuestCallHeaderDismissed: eT,
    isQuestExpired: ej,
    isQuestBarShowing: eC,
    isCurrentUserCallParticipant: em
  });
  let eI = null != Y && (null == (f = W.userStatus) ? true : f.claimedAt) == null;
  if (!eI && (eT || ej || eC) || !eI && !em) return null;
  let ew = (0, P.Yh)(W),
    eM = (0, r.jsx)(k.A, {
      className: B.Qq,
      autoplay: $,
      quest: W,
      questContent: v.uF.QUEST_LIVE_STREAM,
      sourceQuestContent: v.uF.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: s()(B.iE, {
      [B.rH]: eS
    }),
    onFocus: ee,
    onMouseEnter: ee,
    onBlur: et,
    onMouseLeave: et,
    children: [!eS && (0, r.jsxs)("div", {
      className: B.D9,
      children: [eM, (0, r.jsx)(U.A, {
        bgOpacity: .32,
        className: B.Pu
      })]
    }), (0, r.jsxs)("div", {
      className: B.Qs,
      children: [(0, r.jsxs)("div", {
        className: B.R_,
        children: [eS && ed ? eM : (0, r.jsx)("img", {
          className: B.rC,
          alt: W.config.messages.gameTitle,
          src: (0, N.tW)(W, N.fY.GAME_TILE, el).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: B.Mg,
            children: [(0, r.jsx)(u.Heading, {
              className: B.bB,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: ed ? (0, T.YT)({
                quest: W,
                taskDetails: ew
              }) : V.intl.formatToPlainString(V.t.EQa7os, {
                questName: W.config.messages.questName
              })
            }), (0, r.jsx)(M.C, {
              questContent: v.uF.QUEST_LIVE_STREAM,
              sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
              quest: W,
              preventIdle: true,
              shouldShowDisclosure: (null == (O = W.userStatus) ? true : O.enrolledAt) == null,
              children: e => (0, r.jsx)(u.DUT, K(z({}, e), {
                className: B.rb,
                "aria-label": V.intl.string(V.t.DEoVWZ),
                children: (0, r.jsx)(u.jNK, {
                  size: "md",
                  color: "currentColor",
                  className: B.Bx
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eN ? V.intl.formatToPlainString(V.t.APddvF, {
              expirationDate: eb
            }) : V.intl.formatToPlainString(V.t["pX+fmn"], {
              expirationDate: ey
            })
          })]
        })]
      }), eS && !eN && !ed && (0, r.jsx)(G.A, {
        autoplay: $,
        quest: W,
        questContent: v.uF.QUEST_LIVE_STREAM,
        taskDetails: ew,
        location: F.rE.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: v.uF.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: B.uz,
        children: [!eS && (0, r.jsxs)(u.BJc, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: V.intl.string(V.t.LLLLPD),
            onClick: ex,
            fullWidth: !eE || W.config.features.includes(F.Li.CLOUD_GAMING_ACTIVITY)
          }), eP && !ej ? (0, r.jsx)(D.A, {
            quest: W,
            size: "sm",
            analyticsCtxQuestContent: v.uF.QUEST_LIVE_STREAM,
            analyticsCtxSourceQuestContent: v.uF.QUEST_LIVE_STREAM
          }) : (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eO,
            onClick: eg,
            loading: ep
          })]
        }), eS && !eN && ed && (0, r.jsx)(L.A, {
          color: u.LU0.colors.BACKGROUND_BRAND,
          quest: W
        }), eS && !eN && !ed && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.VN1Ajl),
          onClick: eA
        }), eN && (0, r.jsx)(u.Button, {
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

function Y(e) {
  var t;
  let n = l.useContext(f.vG),
    i = (0, a.bG)([x.A], () => null != x.A.questEnrollmentBlockedUntil, []),
    {
      use_api_call: s
    } = O.Y.getConfig({
      location: "QuestChannelCallHeader"
    }),
    o = (0, a.bG)([x.A], () => x.A.quests),
    u = (0, S.oH)(Array.from(o.values())),
    d = l.useMemo(() => (0, I.$e)(o, F.Ls), [o]),
    m = (0, a.bG)([c.A], () => c.A.getParticipants(e.channelId), [e.channelId]),
    b = (0, a.bG)([y.A], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let s of e) {
        var r, l, i;
        if (s.type === q.lp.STREAM) {
          let e = null != (r = (0, p.nr)(s.stream, n)) ? r : null,
            i = (0, C.nq)(t, e);
          if (null != i && (null == (l = i.userStatus) ? true : l.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, q.PJ)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, C.nq)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(m, d, y.A), [m, d, u, e.previewQuest]),
    A = l.useMemo(() => {
      var e;
      return s && null != (e = null == b ? true : b.id) ? e : null
    }, [b, s]);
  l.useEffect(() => {
    null == e.previewQuest && null != A && (0, g.yO)([A], v.uF.QUEST_LIVE_STREAM)
  }, [A, e.previewQuest]);
  let h = (0, a.bG)([x.A], () => {
      var e;
      let t = x.A.earnedQuestForPlacement.get(v.uF.QUEST_LIVE_STREAM);
      return null == t || null == A ? null : null != (e = t.quests.get(A)) ? e : null
    }, [A]),
    [E, j] = l.useState(null);
  l.useEffect(() => {
    null != h ? j(h) : null === A && j(null)
  }, [h, A]);
  let N = null != h ? h : null !== A ? E : null,
    T = null != (t = e.previewQuest) ? t : s ? N : b;
  return null == T || i ? null : (0, r.jsx)(w.R, {
    questOrQuests: T,
    overrideVisibility: !n,
    questContent: v.uF.QUEST_LIVE_STREAM,
    sourceQuestContent: v.uF.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(W, K(z({}, e), {
      quest: T
    }))
  })
}
let X = function(e) {
  let t = (0, a.bG)([b.default], () => b.default.getCurrentUser());
  return (0, a.bG)([c.A], () => ((null == t ? true : t.id) == null ? null : c.A.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(Y, z({}, e)) : null
}