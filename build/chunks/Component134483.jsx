/** Chunk was on 64838 **/
/** chunk id: 134483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
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
  Chunk825048 = require("./825048.js");

function M(e) {
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

function D(e, t) {
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

function V(e) {
  var t, n, s, m, x;
  let {
    channelId: V,
    quest: k,
    previewQuest: B,
    isParticipatingOverride: W
  } = e, H = (0, v.O5)(), [z, G] = l.useState(false), F = l.useCallback(() => G(true), []), K = l.useCallback(() => G(false), []), X = (0, a.e7)([E.default], () => E.default.getCurrentUser()), Y = (0, a.e7)([f.Z], () => f.Z.getState().theme), $ = (0, o.wj)(Y) ? N.BRd.DARK : N.BRd.LIGHT, J = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), ee = (0, a.e7)([S.Z], () => (0, T.PM)(S.Z.quests, S.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: et,
    isQuestInQuestBar: en
  } = (0, a.cj)([b.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != k && null != X && (e = b.Z, J.some(t => {
        if (t.type !== R.fO.STREAM || t.user.id !== X.id) returnfalse;
        let n = (0, p.Um)(t.stream, e);
        return null != n && (0, T._D)(n, k)
      })),
      isQuestInQuestBar: (null == ee ? true : ee.id) === (null == k ? true : k.id)
    }
  }, [X, k, J, ee]), er = null == (t = (0, T.vj)(k)) ? true : t[0], el = (0, a.e7)([d.ZP, b.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, T.$H)(k) && null !== er && e.includes(er)) returntrue;
    let t = null != X ? b.Z.findActivity(X.id, e => e.type !== N.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, T.$J)(k) && (0, T._D)(t, k))
  }, [k, X, er]), es = true === W || et || el, ei = (0, a.e7)([S.Z], () => null != k && S.Z.isEnrolling(k.id), [k]), ea = (0, a.e7)([c.Z], () => ((null == X ? true : X.id) == null ? null : c.Z.getParticipant(V, X.id)) != null, [V, X]), {
    launchInGameActivity: eo
  } = (0, g.zB)(k), eu = (0, g.B6)(null == k ? true : k.config.expiresAt), ec = (0, g.B6)(null == k ? true : k.config.rewardsConfig.rewardsExpireAt), ed = l.useCallback(() => {
    (0, j.AH)(k.id, {
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.ACCEPT_QUEST,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, T.Rt)(k) && eo()
  }, [k, eo]), ep = l.useCallback(() => {
    H({
      questId: k.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.TRACK_PROGRESS,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, Z.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: k.id
    })
  }, [k, H]), ef = l.useCallback(() => {
    H({
      questId: k.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: v.jZ.LEARN_MORE,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, Z.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: k.id
    })
  }, [k, H]), em = (0, P.hf)({
    quest: k,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM
  }), eb = l.useMemo(() => (0, y.T)({
    quest: k,
    location: L.dr.QUEST_CHANNEL_CALL_HEADER
  }), [k]), eE = (0, A.CR)({
    quest: k
  }), ej = (0, T.Rt)(k), ev = (0, g.tP)(k), eT = (null == (n = k.userStatus) ? true : n.enrolledAt) != null, eg = (null == (s = k.userStatus) ? true : s.completedAt) != null, eS = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_LIVE_STREAM), eh = null != k.userStatus && (0, T.zE)(k.userStatus, h.jn.QUEST_BAR), ey = en && !eh;
  eb.info({
    isQuestCallHeaderDismissed: eS,
    isQuestExpired: ev,
    isQuestBarShowing: ey,
    isCurrentUserCallParticipant: ea
  });
  let eA = null != B && (null == (m = k.userStatus) ? true : m.claimedAt) == null;
  if (!eA && (eS || ev || ey) || !eA && !ea) return null;
  let eO = (0, T.il)(k),
    ex = (0, r.jsx)(w.Z, {
      className: q.rewardTile,
      autoplay: z,
      quest: k,
      questContent: h.jn.QUEST_LIVE_STREAM,
      location: L.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: i()(q.wrapper, {
      [q.wrapperAccepted]: eT
    }),
    onFocus: F,
    onMouseEnter: F,
    onBlur: K,
    onMouseLeave: K,
    children: [!eT && (0, r.jsxs)("div", {
      className: q.rewardTileWrapper,
      children: [ex, (0, r.jsx)(_.Z, {
        bgOpacity: .32,
        className: q.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: q.content,
      children: [(0, r.jsxs)("div", {
        className: q.heading,
        children: [eT && es ? ex : (0, r.jsx)("img", {
          className: q.gameTile,
          alt: k.config.messages.gameTitle,
          src: (0, O.fh)(k, O.eC.GAME_TILE, $).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: q.headingWithSubmenu,
            children: [(0, r.jsx)(u.Heading, {
              className: q.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: es ? (0, T.AV)({
                quest: k,
                taskDetails: eO
              }) : U.intl.formatToPlainString(U.t.EQa7os, {
                questName: k.config.messages.questName
              })
            }), (0, r.jsx)(I.r, {
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              quest: k,
              preventIdle: true,
              shouldShowDisclosure: (null == (x = k.userStatus) ? true : x.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, D(M({}, e), {
                className: q.submenuWrapper,
                "aria-label": U.intl.string(U.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: q.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: eg ? U.intl.formatToPlainString(U.t.APddvF, {
              expirationDate: ec
            }) : U.intl.formatToPlainString(U.t["pX+fmn"], {
              expirationDate: eu
            })
          })]
        })]
      }), eT && !eg && !es && (0, r.jsx)(Q.Z, {
        autoplay: z,
        quest: k,
        questContent: h.jn.QUEST_LIVE_STREAM,
        taskDetails: eO,
        location: L.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: h.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: q.ctas,
        children: [!eT && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: U.intl.string(U.t.LLLLPD),
            onClick: ef,
            fullWidth: !ej || k.config.features.includes(L.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eE,
            onClick: ed,
            loading: ei
          })]
        }), eT && !eg && es && (0, r.jsx)(C.Z, {
          color: u.TVs.colors.BG_BRAND,
          quest: k
        }), eT && !eg && !es && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: U.intl.string(U.t.VN1Ajl),
          onClick: ep
        }), eg && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: U.intl.string(U.t.cfY4PE),
          onClick: em
        })]
      })]
    })]
  })
}

function k(e) {
  let t = l.useContext(m.h9),
    n = (0, a.e7)([S.Z], () => null != S.Z.questEnrollmentBlockedUntil, []),
    s = (0, a.e7)([S.Z], () => S.Z.quests),
    i = (0, g.Fy)(Array.from(s.values())),
    o = l.useMemo(() => (0, T.NI)(s, L.Lv), [s]),
    u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    d = (0, a.e7)([b.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var r, l, s;
        if (i.type === R.fO.STREAM) {
          let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
            s = (0, T.ZZ)(t, e);
          if (null != s && (null == (r = s.userStatus) ? true : r.claimedAt) == null) return s
        }
        for (let r of e)
          if (!(0, R.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, T.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(u, o, b.Z), [u, o, i, e.previewQuest]);
  return null == d || n ? null : (0, r.jsx)(x.A, {
    questOrQuests: d,
    overrideVisibility: !t,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(V, D(M({}, e), {
      quest: d
    }))
  })
}
let B = function(e) {
  let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
  return (0, a.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(k, M({}, e)) : null
}