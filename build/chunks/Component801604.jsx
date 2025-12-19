/** Chunk was on 83203 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
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
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk535584 = require("./535584.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk862657 = require("./862657.js"),
  Chunk759479 = require("./759479.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk698716 = require("./698716.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk340100 = require("./340100.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk346592 = require("./346592.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk838106 = require("./838106.js");

function H(e) {
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

function B(e, t) {
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
  var t, n, s, f, L;
  let {
    channelId: W,
    quest: G,
    previewQuest: z,
    isParticipatingOverride: K
  } = e, F = (0, S.O5)(), [X, Y] = l.useState(false), $ = l.useCallback(() => Y(true), []), J = l.useCallback(() => Y(false), []), ee = (0, a.e7)([p.default], () => p.default.getCurrentUser()), et = (0, a.e7)([m.Z], () => m.Z.getState().theme), en = (0, o.wj)(et) ? q.BRd.DARK : q.BRd.LIGHT, er = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), el = (0, a.e7)([T.Z], () => (0, b.PM)(T.Z.quests, T.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: es,
    isQuestInQuestBar: ei
  } = (0, a.cj)([v.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != G && null != ee && (e = v.Z, er.some(t => {
        if (t.type !== D.fO.STREAM || t.user.id !== ee.id) returnfalse;
        let n = (0, E.Um)(t.stream, e);
        return null != n && (0, N._D)(n, G)
      })),
      isQuestInQuestBar: (null == el ? true : el.id) === (null == G ? true : G.id)
    }
  }, [ee, G, er, el]), ea = null == (t = (0, I.vj)(G)) ? true : t[0], eo = (0, a.e7)([d.ZP, v.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, I.$H)(G) && null !== ea && e.includes(ea)) returntrue;
    let t = null != ee ? v.Z.findActivity(ee.id, e => e.type !== q.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, I.$J)(G) && (0, N._D)(t, G))
  }, [G, ee, ea]), eu = true === K || es || eo, ec = (0, a.e7)([T.Z], () => null != G && T.Z.isEnrolling(G.id), [G]), ed = (0, a.e7)([c.Z], () => ((null == ee ? true : ee.id) == null ? null : c.Z.getParticipant(W, ee.id)) != null, [W, ee]), {
    launchInGameActivity: eE
  } = (0, A.zB)(G), em = (0, A.B6)(null == G ? true : G.config.expiresAt), ef = (0, A.B6)(null == G ? true : G.config.rewardsConfig.rewardsExpireAt), ev = l.useCallback(() => {
    (0, j.AH)(G.id, {
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.ACCEPT_QUEST,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, y.Rt)(G) && eE()
  }, [G, eE]), ep = l.useCallback(() => {
    F({
      questId: G.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.TRACK_PROGRESS,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: G.id
    })
  }, [G, F]), ej = l.useCallback(() => {
    F({
      questId: G.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.LEARN_MORE,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: G.id
    })
  }, [G, F]), eS = (0, R.hf)({
    quest: G,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM
  }), eT = l.useMemo(() => (0, h.T)({
    quest: G,
    location: U.dr.QUEST_CHANNEL_CALL_HEADER
  }), [G]), ex = (0, _.CR)({
    quest: G
  }), eh = (0, y.Rt)(G), e_ = (0, A.tP)(G), eA = (null == (n = G.userStatus) ? true : n.enrolledAt) != null, eC = (null == (s = G.userStatus) ? true : s.completedAt) != null, eg = null != G.userStatus && (0, b.zE)(G.userStatus, x.jn.QUEST_LIVE_STREAM), eb = null != G.userStatus && (0, b.zE)(G.userStatus, x.jn.QUEST_BAR), eN = ei && !eb;
  eT.info({
    isQuestCallHeaderDismissed: eg,
    isQuestExpired: e_,
    isQuestBarShowing: eN,
    isCurrentUserCallParticipant: ed
  });
  let eI = null != z && (null == (f = G.userStatus) ? true : f.claimedAt) == null;
  if (!eI && (eg || e_ || eN) || !eI && !ed) return null;
  let ey = (0, I.il)(G),
    eL = (0, r.jsx)(O.Z, {
      className: k.rewardTile,
      autoplay: X,
      quest: G,
      questContent: x.jn.QUEST_LIVE_STREAM,
      location: U.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: i()(k.wrapper, {
      [k.wrapperAccepted]: eA
    }),
    onFocus: $,
    onMouseEnter: $,
    onBlur: J,
    onMouseLeave: J,
    children: [!eA && (0, r.jsxs)("div", {
      className: k.rewardTileWrapper,
      children: [eL, (0, r.jsx)(M.Z, {
        bgOpacity: .32,
        className: k.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: k.content,
      children: [(0, r.jsxs)("div", {
        className: k.heading,
        children: [eA && eu ? eL : (0, r.jsx)("img", {
          className: k.gameTile,
          alt: G.config.messages.gameTitle,
          src: (0, C.fh)(G, C.eC.GAME_TILE, en).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: k.headingWithSubmenu,
            children: [(0, r.jsx)(u.Heading, {
              className: k.questTitle,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: eu ? (0, g.AV)({
                quest: G,
                taskDetails: ey
              }) : V.intl.formatToPlainString(V.t.EQa7os, {
                questName: G.config.messages.questName
              })
            }), (0, r.jsx)(Z.i, {
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              quest: G,
              preventIdle: true,
              shouldShowDisclosure: (null == (L = G.userStatus) ? true : L.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, B(H({}, e), {
                className: k.submenuWrapper,
                "aria-label": V.intl.string(V.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: k.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eC ? V.intl.formatToPlainString(V.t.APddvF, {
              expirationDate: ef
            }) : V.intl.formatToPlainString(V.t["pX+fmn"], {
              expirationDate: em
            })
          })]
        })]
      }), eA && !eC && !eu && (0, r.jsx)(Q.Z, {
        autoplay: X,
        quest: G,
        questContent: x.jn.QUEST_LIVE_STREAM,
        taskDetails: ey,
        location: U.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: k.ctas,
        children: [!eA && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: V.intl.string(V.t.LLLLPD),
            onClick: ej,
            fullWidth: !eh || G.config.features.includes(U.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ex,
            onClick: ev,
            loading: ec
          })]
        }), eA && !eC && eu && (0, r.jsx)(w.Z, {
          color: u.TVs.colors.BACKGROUND_BRAND,
          quest: G
        }), eA && !eC && !eu && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.VN1Ajl),
          onClick: ep
        }), eC && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: V.intl.string(V.t.cfY4PE),
          onClick: eS
        })]
      })]
    })]
  })
}

function G(e) {
  let t = l.useContext(f.h9),
    n = (0, a.e7)([T.Z], () => null != T.Z.questEnrollmentBlockedUntil, []),
    s = (0, a.e7)([T.Z], () => T.Z.quests),
    i = (0, A.Fy)(Array.from(s.values())),
    o = l.useMemo(() => (0, y.NI)(s, U.Lv), [s]),
    u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    d = (0, a.e7)([v.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var r, l, s;
        if (i.type === D.fO.STREAM) {
          let e = null != (l = (0, E.Um)(i.stream, n)) ? l : null,
            s = (0, N.ZZ)(t, e);
          if (null != s && (null == (r = s.userStatus) ? true : r.claimedAt) == null) return s
        }
        for (let r of e)
          if (!(0, D.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, N.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(u, o, v.Z), [u, o, i, e.previewQuest]);
  return null == d || n ? null : (0, r.jsx)(L.A, {
    questOrQuests: d,
    overrideVisibility: !t,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(W, B(H({}, e), {
      quest: d
    }))
  })
}
let z = function(e) {
  let t = (0, a.e7)([p.default], () => p.default.getCurrentUser());
  return (0, a.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(G, H({}, e)) : null
}