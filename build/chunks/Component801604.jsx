/** Chunk was on 35129 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
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
  Chunk141538 = require("./141538.js");

function B(e) {
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

function H(e, t) {
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

function W(e) {
  var t, n, s, p, Q;
  let {
    channelId: W,
    quest: z,
    previewQuest: G,
    isParticipatingOverride: F
  } = e, K = (0, S.O5)(), [X, Y] = r.useState(false), $ = r.useCallback(() => Y(true), []), J = r.useCallback(() => Y(false), []), ee = (0, o.e7)([j.default], () => j.default.getCurrentUser()), et = (0, o.e7)([m.Z], () => m.Z.getState().theme), en = (0, a.wj)(et) ? M.BRd.DARK : M.BRd.LIGHT, el = (0, o.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), er = (0, o.e7)([v.Z], () => (0, b.PM)(v.Z.quests, v.Z.questToDeliverForPlacement, x.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: es,
    isQuestInQuestBar: ei
  } = (0, o.cj)([f.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != z && null != ee && (e = f.Z, el.some(t => {
        if (t.type !== V.fO.STREAM || t.user.id !== ee.id) returnfalse;
        let n = (0, E.Um)(t.stream, e);
        return null != n && (0, y._D)(n, z)
      })),
      isQuestInQuestBar: (null == er ? true : er.id) === (null == z ? true : z.id)
    }
  }, [ee, z, el, er]), eo = null == (t = (0, Z.vj)(z)) ? true : t[0], ea = (0, o.e7)([d.ZP, f.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, Z.$H)(z) && null !== eo && e.includes(eo)) returntrue;
    let t = null != ee ? f.Z.findActivity(ee.id, e => e.type !== M.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, Z.$J)(z) && (0, y._D)(t, z))
  }, [z, ee, eo]), eu = true === F || es || ea, ec = (0, o.e7)([v.Z], () => null != z && v.Z.isEnrolling(z.id), [z]), ed = (0, o.e7)([c.Z], () => ((null == ee ? true : ee.id) == null ? null : c.Z.getParticipant(W, ee.id)) != null, [W, ee]), {
    launchInGameActivity: eE
  } = (0, _.zB)(z), em = (0, _.B6)(null == z ? true : z.config.expiresAt), ep = (0, _.B6)(null == z ? true : z.config.rewardsConfig.rewardsExpireAt), ef = r.useCallback(() => {
    (0, T.AH)(z.id, {
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.ACCEPT_QUEST,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, I.Rt)(z) && eE()
  }, [z, eE]), ej = r.useCallback(() => {
    K({
      questId: z.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.TRACK_PROGRESS,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, K]), eT = r.useCallback(() => {
    K({
      questId: z.id,
      questContent: x.jn.QUEST_LIVE_STREAM,
      questContentCTA: S.jZ.LEARN_MORE,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: x.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, K]), eS = (0, L.hf)({
    quest: z,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM
  }), ev = r.useMemo(() => (0, h.T)({
    quest: z,
    location: q.dr.QUEST_CHANNEL_CALL_HEADER
  }), [z]), ex = (0, A.CR)({
    quest: z
  }), eh = (0, I.Rt)(z), eA = (0, _.tP)(z), e_ = (null == (n = z.userStatus) ? true : n.enrolledAt) != null, eC = (null == (s = z.userStatus) ? true : s.completedAt) != null, eg = null != z.userStatus && (0, b.zE)(z.userStatus, x.jn.QUEST_LIVE_STREAM), eb = null != z.userStatus && (0, b.zE)(z.userStatus, x.jn.QUEST_BAR), ey = ei && !eb;
  ev.info({
    isQuestCallHeaderDismissed: eg,
    isQuestExpired: eA,
    isQuestBarShowing: ey,
    isCurrentUserCallParticipant: ed
  });
  let eZ = null != G && (null == (p = z.userStatus) ? true : p.claimedAt) == null;
  if (!eZ && (eg || eA || ey) || !eZ && !ed) return null;
  let eI = (0, Z.il)(z),
    eQ = (0, l.jsx)(w.Z, {
      className: k.rewardTile,
      autoplay: X,
      quest: z,
      questContent: x.jn.QUEST_LIVE_STREAM,
      location: q.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: x.jn.QUEST_LIVE_STREAM
    });
  return (0, l.jsxs)("div", {
    className: i()(k.wrapper, {
      [k.wrapperAccepted]: e_
    }),
    onFocus: $,
    onMouseEnter: $,
    onBlur: J,
    onMouseLeave: J,
    children: [!e_ && (0, l.jsxs)("div", {
      className: k.rewardTileWrapper,
      children: [eQ, (0, l.jsx)(N.Z, {
        bgOpacity: .32,
        className: k.promotedTag
      })]
    }), (0, l.jsxs)("div", {
      className: k.content,
      children: [(0, l.jsxs)("div", {
        className: k.heading,
        children: [e_ && eu ? eQ : (0, l.jsx)("img", {
          className: k.gameTile,
          alt: z.config.messages.gameTitle,
          src: (0, C.fh)(z, C.eC.GAME_TILE, en).url
        }), (0, l.jsxs)("div", {
          children: [(0, l.jsxs)("div", {
            className: k.headingWithSubmenu,
            children: [(0, l.jsx)(u.Heading, {
              className: k.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: eu ? (0, g.AV)({
                quest: z,
                taskDetails: eI
              }) : D.intl.formatToPlainString(D.t.EQa7os, {
                questName: z.config.messages.questName
              })
            }), (0, l.jsx)(O.i, {
              questContent: x.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
              quest: z,
              preventIdle: true,
              shouldShowDisclosure: (null == (Q = z.userStatus) ? true : Q.enrolledAt) == null,
              children: e => (0, l.jsx)(u.P3F, H(B({}, e), {
                className: k.submenuWrapper,
                "aria-label": D.intl.string(D.t.DEoVWZ),
                children: (0, l.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: k.submenuIcon
                })
              }))
            })]
          }), (0, l.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eC ? D.intl.formatToPlainString(D.t.APddvF, {
              expirationDate: ep
            }) : D.intl.formatToPlainString(D.t["pX+fmn"], {
              expirationDate: em
            })
          })]
        })]
      }), e_ && !eC && !eu && (0, l.jsx)(U.Z, {
        autoplay: X,
        quest: z,
        questContent: x.jn.QUEST_LIVE_STREAM,
        taskDetails: eI,
        location: q.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: x.jn.QUEST_LIVE_STREAM
      }), (0, l.jsxs)("div", {
        className: k.ctas,
        children: [!e_ && (0, l.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, l.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: D.intl.string(D.t.LLLLPD),
            onClick: eT,
            fullWidth: !eh || z.config.features.includes(q.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, l.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ex,
            onClick: ef,
            loading: ec
          })]
        }), e_ && !eC && eu && (0, l.jsx)(R.Z, {
          color: u.TVs.colors.BG_BRAND,
          quest: z
        }), e_ && !eC && !eu && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: D.intl.string(D.t.VN1Ajl),
          onClick: ej
        }), eC && (0, l.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: D.intl.string(D.t.cfY4PE),
          onClick: eS
        })]
      })]
    })]
  })
}

function z(e) {
  let t = r.useContext(p.h9),
    n = (0, o.e7)([v.Z], () => null != v.Z.questEnrollmentBlockedUntil, []),
    s = (0, o.e7)([v.Z], () => v.Z.quests),
    i = (0, _.Fy)(Array.from(s.values())),
    a = r.useMemo(() => (0, I.NI)(s, q.Lv), [s]),
    u = (0, o.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    d = (0, o.e7)([f.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var l, r, s;
        if (i.type === V.fO.STREAM) {
          let e = null != (r = (0, E.Um)(i.stream, n)) ? r : null,
            s = (0, y.ZZ)(t, e);
          if (null != s && (null == (l = s.userStatus) ? true : l.claimedAt) == null) return s
        }
        for (let l of e)
          if (!(0, V.I)(l))
            for (let e of n.getActivities(l.user.id)) {
              let n = (0, y.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(u, a, f.Z), [u, a, i, e.previewQuest]);
  return null == d || n ? null : (0, l.jsx)(Q.A, {
    questOrQuests: d,
    overrideVisibility: !t,
    questContent: x.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: x.jn.QUEST_LIVE_STREAM,
    children: () => (0, l.jsx)(W, H(B({}, e), {
      quest: d
    }))
  })
}
let G = function(e) {
  let t = (0, o.e7)([j.default], () => j.default.getCurrentUser());
  return (0, o.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, l.jsx)(z, B({}, e)) : null
}