/** Chunk was on 83772 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk402275 = require("./402275.js"),
  Chunk535584 = require("./535584.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk862657 = require("./862657.js"),
  Chunk759479 = require("./759479.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk602667 = require("./602667.js"),
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

function q(e) {
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

function V(e) {
  var t, n, i, p, h;
  let {
    channelId: Z,
    quest: V,
    previewQuest: z,
    isParticipatingOverride: W
  } = e, K = (0, x.O5)(), [Y, X] = l.useState(false), J = l.useCallback(() => X(true), []), $ = l.useCallback(() => X(false), []), ee = (0, s.e7)([v.default], () => v.default.getCurrentUser()), et = (0, s.e7)([f.Z], () => f.Z.getState().theme), en = (0, o.wj)(et) ? Q.BRd.DARK : Q.BRd.LIGHT, er = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), el = (0, s.e7)([b.Z], () => (0, P.PM)(b.Z.quests, b.Z.questToDeliverForPlacement, j.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: ei,
    isQuestInQuestBar: ea
  } = (0, s.cj)([g.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != V && null != ee && (e = g.Z, er.some(t => {
        if (t.type !== H.fO.STREAM || t.user.id !== ee.id) returnfalse;
        let n = (0, m.Um)(t.stream, e);
        return null != n && (0, C._D)(n, V)
      })),
      isQuestInQuestBar: (null == el ? true : el.id) === (null == V ? true : V.id)
    }
  }, [ee, V, er, el]), es = null == (t = (0, _.vj)(V)) ? true : t[0], eo = (0, s.e7)([d.ZP, g.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, _.$H)(V) && null !== es && e.includes(es)) returntrue;
    let t = null != ee ? g.Z.findActivity(ee.id, e => e.type !== Q.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, _.$J)(V) && (0, C._D)(t, V))
  }, [V, ee, es]), eu = true === W || ei || eo, ec = (0, s.e7)([b.Z], () => null != V && b.Z.isEnrolling(V.id), [V]), ed = (0, s.e7)([c.Z], () => ((null == ee ? true : ee.id) == null ? null : c.Z.getParticipant(Z, ee.id)) != null, [Z, ee]), {
    launchInGameActivity: em
  } = (0, E.zB)(V), ef = (0, E.B6)(null == V ? true : V.config.expiresAt), ep = (0, E.B6)(null == V ? true : V.config.rewardsConfig.rewardsExpireAt), eg = l.useCallback(() => {
    (0, y.AH)(V.id, {
      questContent: j.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: j.jn.QUEST_LIVE_STREAM
    }), (0, I.Rt)(V) && em()
  }, [V, em]), ev = l.useCallback(() => {
    K({
      questId: V.id,
      questContent: j.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.TRACK_PROGRESS,
      sourceQuestContent: j.jn.QUEST_LIVE_STREAM
    }), (0, R.navigateToQuestHome)({
      fromContent: j.jn.QUEST_LIVE_STREAM,
      questId: V.id
    })
  }, [V, K]), ey = l.useCallback(() => {
    K({
      questId: V.id,
      questContent: j.jn.QUEST_LIVE_STREAM,
      questContentCTA: x.jZ.LEARN_MORE,
      sourceQuestContent: j.jn.QUEST_LIVE_STREAM
    }), (0, R.navigateToQuestHome)({
      fromContent: j.jn.QUEST_LIVE_STREAM,
      questId: V.id
    })
  }, [V, K]), ex = (0, A.hf)({
    quest: V,
    questContent: j.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: j.jn.QUEST_LIVE_STREAM
  }), eb = l.useMemo(() => (0, S.T)({
    quest: V,
    location: L.dr.QUEST_CHANNEL_CALL_HEADER
  }), [V]), ej = (0, O.CR)({
    quest: V
  }), eh = (0, I.Rt)(V), eS = (0, E.tP)(V), eO = (null == (n = V.userStatus) ? true : n.enrolledAt) != null, eE = (null == (i = V.userStatus) ? true : i.completedAt) != null, eT = null != V.userStatus && (0, P.zE)(V.userStatus, j.jn.QUEST_LIVE_STREAM), eN = null != V.userStatus && (0, P.zE)(V.userStatus, j.jn.QUEST_BAR), eP = ea && !eN;
  eb.info({
    isQuestCallHeaderDismissed: eT,
    isQuestExpired: eS,
    isQuestBarShowing: eP,
    isCurrentUserCallParticipant: ed
  });
  let eC = null != z && (null == (p = V.userStatus) ? true : p.claimedAt) == null;
  if (!eC && (eT || eS || eP) || !eC && !ed) return null;
  let e_ = (0, _.il)(V),
    eI = (0, r.jsx)(k.Z, {
      className: F.rewardTile,
      autoplay: Y,
      quest: V,
      questContent: j.jn.QUEST_LIVE_STREAM,
      sourceQuestContent: j.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: a()(F.wrapper, {
      [F.wrapperAccepted]: eO
    }),
    onFocus: J,
    onMouseEnter: J,
    onBlur: $,
    onMouseLeave: $,
    children: [!eO && (0, r.jsxs)("div", {
      className: F.rewardTileWrapper,
      children: [eI, (0, r.jsx)(U.Z, {
        bgOpacity: .32,
        className: F.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: F.content,
      children: [(0, r.jsxs)("div", {
        className: F.heading,
        children: [eO && eu ? eI : (0, r.jsx)("img", {
          className: F.gameTile,
          alt: V.config.messages.gameTitle,
          src: (0, T.fh)(V, T.eC.GAME_TILE, en).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: F.headingWithSubmenu,
            children: [(0, r.jsx)(u.Heading, {
              className: F.questTitle,
              variant: "heading-md/semibold",
              color: "text-strong",
              children: eu ? (0, N.AV)({
                quest: V,
                taskDetails: e_
              }) : G.intl.formatToPlainString(G.t.EQa7os, {
                questName: V.config.messages.questName
              })
            }), (0, r.jsx)(w.i, {
              questContent: j.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
              quest: V,
              preventIdle: true,
              shouldShowDisclosure: (null == (h = V.userStatus) ? true : h.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, B(q({}, e), {
                className: F.submenuWrapper,
                "aria-label": G.intl.string(G.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: F.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            children: eE ? G.intl.formatToPlainString(G.t.APddvF, {
              expirationDate: ep
            }) : G.intl.formatToPlainString(G.t["pX+fmn"], {
              expirationDate: ef
            })
          })]
        })]
      }), eO && !eE && !eu && (0, r.jsx)(D.Z, {
        autoplay: Y,
        quest: V,
        questContent: j.jn.QUEST_LIVE_STREAM,
        taskDetails: e_,
        location: L.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: j.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: F.ctas,
        children: [!eO && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.Button, {
            size: "sm",
            variant: "secondary",
            text: G.intl.string(G.t.LLLLPD),
            onClick: ey,
            fullWidth: !eh || V.config.features.includes(L.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.Button, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: ej,
            onClick: eg,
            loading: ec
          })]
        }), eO && !eE && eu && (0, r.jsx)(M.Z, {
          color: u.TVs.colors.BACKGROUND_BRAND,
          quest: V
        }), eO && !eE && !eu && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: G.intl.string(G.t.VN1Ajl),
          onClick: ev
        }), eE && (0, r.jsx)(u.Button, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: G.intl.string(G.t.cfY4PE),
          onClick: ex
        })]
      })]
    })]
  })
}

function z(e) {
  var t;
  let n = l.useContext(p.h9),
    i = (0, s.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil, []),
    {
      use_api_call: a
    } = h.w.getConfig({
      location: "QuestChannelCallHeader"
    }),
    o = (0, s.e7)([b.Z], () => b.Z.quests),
    u = (0, E.Fy)(Array.from(o.values())),
    d = l.useMemo(() => (0, I.NI)(o, L.Lv), [o]),
    f = (0, s.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    v = (0, s.e7)([g.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let a of e) {
        var r, l, i;
        if (a.type === H.fO.STREAM) {
          let e = null != (l = (0, m.Um)(a.stream, n)) ? l : null,
            i = (0, C.ZZ)(t, e);
          if (null != i && (null == (r = i.userStatus) ? true : r.claimedAt) == null) return i
        }
        for (let r of e)
          if (!(0, H.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, C.ZZ)(t, e);
              if (null != n && (null == (i = n.userStatus) ? true : i.claimedAt) == null) return n
            }
      }
      return null
    }(f, d, g.Z), [f, d, u, e.previewQuest]),
    [x, S] = l.useState(null);
  l.useEffect(() => {
    if (null == e.previewQuest && a) {
      if (null == v) return void S(null);
      S(v.id), (0, y._)([v.id], j.jn.QUEST_LIVE_STREAM)
    }
  }, [v, e.previewQuest, a]);
  let O = (0, s.e7)([b.Z], () => {
      var e;
      let t = b.Z.earnedQuestForPlacement.get(j.jn.QUEST_LIVE_STREAM);
      return null == t || null == x ? null : null != (e = t.quests.get(x)) ? e : null
    }, [x]),
    [T, N] = l.useState(null);
  l.useEffect(() => {
    null != O ? N(O) : null === x && N(null)
  }, [O, x]);
  let P = null != O ? O : T,
    _ = null != (t = e.previewQuest) ? t : a ? P : v;
  return null == _ || i ? null : (0, r.jsx)(Z.A, {
    questOrQuests: _,
    overrideVisibility: !n,
    questContent: j.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: j.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(V, B(q({}, e), {
      quest: _
    }))
  })
}
let W = function(e) {
  let t = (0, s.e7)([v.default], () => v.default.getCurrentUser());
  return (0, s.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(z, q({}, e)) : null
}