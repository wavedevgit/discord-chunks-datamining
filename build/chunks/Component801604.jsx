/** Chunk was on 83772 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function F(e) {
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

function q(e, t) {
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

function B(e) {
  var t, n, i, p, Z;
  let {
    channelId: B,
    quest: z,
    previewQuest: V,
    isParticipatingOverride: W
  } = e, K = (0, x.O5)(), [Y, X] = l.useState(false), J = l.useCallback(() => X(true), []), $ = l.useCallback(() => X(false), []), ee = (0, a.e7)([v.default], () => v.default.getCurrentUser()), et = (0, a.e7)([f.Z], () => f.Z.getState().theme), en = (0, o.wj)(et) ? L.BRd.DARK : L.BRd.LIGHT, er = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), el = (0, a.e7)([b.Z], () => (0, N.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: ei,
    isQuestInQuestBar: es
  } = (0, a.cj)([g.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != z && null != ee && (e = g.Z, er.some(t => {
        if (t.type !== Q.fO.STREAM || t.user.id !== ee.id) returnfalse;
        let n = (0, m.Um)(t.stream, e);
        return null != n && (0, P._D)(n, z)
      })),
      isQuestInQuestBar: (null == el ? true : el.id) === (null == z ? true : z.id)
    }
  }, [ee, z, er, el]), ea = null == (t = (0, C.vj)(z)) ? true : t[0], eo = (0, a.e7)([d.ZP, g.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, C.$H)(z) && null !== ea && e.includes(ea)) returntrue;
    let t = null != ee ? g.Z.findActivity(ee.id, e => e.type !== L.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, C.$J)(z) && (0, P._D)(t, z))
  }, [z, ee, ea]), eu = true === W || ei || eo, ec = (0, a.e7)([b.Z], () => null != z && b.Z.isEnrolling(z.id), [z]), ed = (0, a.e7)([c.Z], () => ((null == ee ? true : ee.id) == null ? null : c.Z.getParticipant(B, ee.id)) != null, [B, ee]), {
    launchInGameActivity: em
  } = (0, S.zB)(z), ef = (0, S.B6)(null == z ? true : z.config.expiresAt), ep = (0, S.B6)(null == z ? true : z.config.rewardsConfig.rewardsExpireAt), eg = l.useCallback(() => {
    (0, y.AH)(z.id, {
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, I.Rt)(z) && em()
  }, [z, em]), ev = l.useCallback(() => {
    K({
      questId: z.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.TRACK_PROGRESS,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, k.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, K]), ey = l.useCallback(() => {
    K({
      questId: z.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.LEARN_MORE,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, k.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, K]), ex = (0, w.hf)({
    quest: z,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM
  }), eb = l.useMemo(() => (0, j.T)({
    quest: z,
    location: R.dr.QUEST_CHANNEL_CALL_HEADER
  }), [z]), eh = (0, O.CR)({
    quest: z
  }), ej = (0, I.Rt)(z), eO = (0, S.tP)(z), eS = (null == (n = z.userStatus) ? true : n.enrolledAt) != null, eE = (null == (i = z.userStatus) ? true : i.completedAt) != null, eT = null != z.userStatus && (0, N.zE)(z.userStatus, h.jn.QUEST_LIVE_STREAM), eN = null != z.userStatus && (0, N.zE)(z.userStatus, h.jn.QUEST_BAR), eP = es && !eN;
  eb.info({
    isQuestCallHeaderDismissed: eT,
    isQuestExpired: eO,
    isQuestBarShowing: eP,
    isCurrentUserCallParticipant: ed
  });
  let eC = null != V && (null == (p = z.userStatus) ? true : p.claimedAt) == null;
  if (!eC && (eT || eO || eP) || !eC && !ed) return null;
  let eI = (0, C.il)(z),
    eZ = (0, r.jsx)(U.Z, {
      className: G.rewardTile,
      autoplay: Y,
      quest: z,
      questContent: h.jn.QUEST_LIVE_STREAM,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: s()(G.wrapper, {
      [G.wrapperAccepted]: eS
    }),
    onFocus: J,
    onMouseEnter: J,
    onBlur: $,
    onMouseLeave: $,
    children: [!eS && (0, r.jsxs)("div", {
      className: G.rewardTileWrapper,
      children: [eZ, (0, r.jsx)(M.Z, {
        bgOpacity: .32,
        className: G.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: G.content,
      children: [(0, r.jsxs)("div", {
        className: G.heading,
        children: [eS && eu ? eZ : (0, r.jsx)("img", {
          className: G.gameTile,
          alt: z.config.messages.gameTitle,
          src: (0, E.fh)(z, E.eC.GAME_TILE, en).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: G.headingWithSubmenu,
            children: [(0, r.jsx)(u.Heading, {
              className: G.questTitle,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: eu ? (0, T.AV)({
                quest: z,
                taskDetails: eI
              }) : H.intl.formatToPlainString(H.t.EQa7os, {
                questName: z.config.messages.questName
              })
            }), (0, r.jsx)(_.i, {
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              quest: z,
              preventIdle: true,
              shouldShowDisclosure: (null == (Z = z.userStatus) ? true : Z.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, q(F({}, e), {
                className: G.submenuWrapper,
                "aria-label": H.intl.string(H.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: G.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eE ? H.intl.formatToPlainString(H.t.APddvF, {
              expirationDate: ep
            }) : H.intl.formatToPlainString(H.t["pX+fmn"], {
              expirationDate: ef
            })
          })]
        })]
      }), eS && !eE && !eu && (0, r.jsx)(D.Z, {
        autoplay: Y,
        quest: z,
        questContent: h.jn.QUEST_LIVE_STREAM,
        taskDetails: eI,
        location: R.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: h.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: G.ctas,
        children: [!eS && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: H.intl.string(H.t.LLLLPD),
            onClick: ey,
            fullWidth: !ej || z.config.features.includes(R.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eh,
            onClick: eg,
            loading: ec
          })]
        }), eS && !eE && eu && (0, r.jsx)(A.Z, {
          color: u.TVs.colors.BACKGROUND_BRAND,
          quest: z
        }), eS && !eE && !eu && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: H.intl.string(H.t.VN1Ajl),
          onClick: ev
        }), eE && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: H.intl.string(H.t.cfY4PE),
          onClick: ex
        })]
      })]
    })]
  })
}

function z(e) {
  let t = l.useContext(p.h9),
    n = (0, a.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil, []),
    i = (0, a.e7)([b.Z], () => b.Z.quests),
    s = (0, S.Fy)(Array.from(i.values())),
    o = l.useMemo(() => (0, I.NI)(i, R.Lv), [i]),
    u = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    d = (0, a.e7)([g.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let s of e) {
        var r, l, i;
        if (s.type === Q.fO.STREAM) {
          let e = null != (l = (0, m.Um)(s.stream, n)) ? l : null,
            i = (0, P.ZZ)(t, e);
          if (null != i && (null == (r = i.userStatus) ? true : r.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, Q.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, P.ZZ)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(u, o, g.Z), [u, o, s, e.previewQuest]);
  return null == d || n ? null : (0, r.jsx)(Z.A, {
    questOrQuests: d,
    overrideVisibility: !t,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(B, q(F({}, e), {
      quest: d
    }))
  })
}
let V = function(e) {
  let t = (0, a.e7)([v.default], () => v.default.getCurrentUser());
  return (0, a.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(z, F({}, e)) : null
}