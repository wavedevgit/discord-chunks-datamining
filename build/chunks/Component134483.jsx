/** Chunk was on 64838 **/
/** chunk id: 134483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk5881 = require("./5881.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
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

function D(e) {
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

function k(e, t) {
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
  var t, n, s, m;
  let {
    channelId: C,
    quest: V,
    previewQuest: W,
    isParticipatingOverride: B
  } = e, z = (0, j.O5)(), [H, G] = l.useState(false), F = l.useCallback(() => G(true), []), K = l.useCallback(() => G(false), []), X = (0, a.e7)([E.default], () => E.default.getCurrentUser()), Y = (0, a.e7)([f.Z], () => f.Z.getState().theme), $ = (0, o.wj)(Y) ? R.BRd.DARK : R.BRd.LIGHT, J = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]), ee = (0, a.e7)([g.Z], () => (0, v.PM)(g.Z.quests, g.Z.questToDeliverForPlacement, h.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: et,
    isQuestInQuestBar: en
  } = (0, a.cj)([b.Z], () => {
    var e;
    return {
      isCurrentUserStreamingQuestApplication: null != V && null != X && (e = b.Z, J.some(t => {
        if (t.type !== q.fO.STREAM || t.user.id !== X.id) returnfalse;
        let n = (0, p.Um)(t.stream, e);
        return null != n && (0, v._D)(n, V)
      })),
      isQuestInQuestBar: (null == ee ? true : ee.id) === (null == V ? true : V.id)
    }
  }, [X, V, J, ee]), er = null != V ? A.r.build(V.config) : null, el = null == er ? true : er.application.id, es = (0, a.e7)([d.ZP, b.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, v.$H)(V) && e.includes(el)) returntrue;
    let t = null != X ? b.Z.findActivity(X.id, e => e.type !== R.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, v.$J)(V) && (0, v._D)(t, V))
  }, [V, el, X]), ei = true === B || et || es, ea = (0, a.e7)([g.Z], () => null != V && g.Z.isEnrolling(V.id), [V]), eo = (0, a.e7)([c.Z], () => ((null == X ? true : X.id) == null ? null : c.Z.getParticipant(C, X.id)) != null, [C, X]), eu = (0, S.B6)(null == V ? true : V.config.expiresAt), ec = (0, S.B6)(null == er ? true : er.rewardsExpireAt), ed = l.useCallback(() => {
    (0, T.AH)(V.id, {
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: j.jZ.ACCEPT_QUEST,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    })
  }, [V]), ep = l.useCallback(() => {
    z({
      questId: V.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: j.jZ.TRACK_PROGRESS,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: V.id
    })
  }, [V, z]), ef = l.useCallback(() => {
    z({
      questId: V.id,
      questContent: h.jn.QUEST_LIVE_STREAM,
      questContentCTA: j.jZ.LEARN_MORE,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    }), (0, I.navigateToQuestHome)({
      fromContent: h.jn.QUEST_LIVE_STREAM,
      questId: V.id
    })
  }, [V, z]), em = (0, Q.hf)({
    quest: V,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM
  }), eb = l.useMemo(() => (0, y.T)({
    quest: V,
    location: N.dr.QUEST_CHANNEL_CALL_HEADER
  }), [V]), eE = (0, x.CR)({
    quest: V
  }), ej = (0, v.Rt)(V), ev = (0, S.tP)(V), eT = (null == (t = V.userStatus) ? true : t.enrolledAt) != null, eS = (null == (n = V.userStatus) ? true : n.completedAt) != null, eg = null != V.userStatus && (0, v.zE)(V.userStatus, h.jn.QUEST_LIVE_STREAM), eh = null != V.userStatus && (0, v.zE)(V.userStatus, h.jn.QUEST_BAR), ey = en && !eh;
  eb.info({
    isQuestCallHeaderDismissed: eg,
    isQuestExpired: ev,
    isQuestBarShowing: ey,
    isCurrentUserCallParticipant: eo
  });
  let ex = null != W && (null == (s = V.userStatus) ? true : s.claimedAt) == null;
  if (!ex && (eg || ev || ey) || !ex && !eo) return null;
  let eO = (0, v.il)(V),
    eA = (0, r.jsx)(Z.Z, {
      className: M.rewardTile,
      autoplay: H,
      quest: V,
      questContent: h.jn.QUEST_LIVE_STREAM,
      location: N.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: h.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: i()(M.wrapper, {
      [M.wrapperAccepted]: eT
    }),
    onFocus: F,
    onMouseEnter: F,
    onBlur: K,
    onMouseLeave: K,
    children: [!eT && (0, r.jsxs)("div", {
      className: M.rewardTileWrapper,
      children: [eA, (0, r.jsx)(w.Z, {
        bgOpacity: .32,
        className: M.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: M.content,
      children: [(0, r.jsxs)("div", {
        className: M.heading,
        children: [eT && ei ? eA : (0, r.jsx)("img", {
          className: M.gameTile,
          alt: V.config.messages.gameTitle,
          src: (0, O.fh)(V, O.eC.GAME_TILE, $).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: M.headingWithSubmenu,
            children: [(0, r.jsx)(u.X6q, {
              className: M.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: ei ? (0, v.AV)({
                quest: V,
                taskDetails: eO
              }) : U.intl.formatToPlainString(U.t.EQa7oq, {
                questName: V.config.messages.questName
              })
            }), (0, r.jsx)(P.r, {
              questContent: h.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
              quest: V,
              preventIdle: true,
              shouldShowDisclosure: (null == (m = V.userStatus) ? true : m.enrolledAt) == null,
              children: e => (0, r.jsx)(u.P3F, k(D({}, e), {
                className: M.submenuWrapper,
                "aria-label": U.intl.string(U.t.DEoVWV),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: M.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: eS ? U.intl.formatToPlainString(U.t.APddvL, {
              expirationDate: ec
            }) : U.intl.formatToPlainString(U.t["pX+fmp"], {
              expirationDate: eu
            })
          })]
        })]
      }), eT && !eS && !ei && (0, r.jsx)(L.Z, {
        autoplay: H,
        quest: V,
        questContent: h.jn.QUEST_LIVE_STREAM,
        taskDetails: eO,
        location: N.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: h.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: M.ctas,
        children: [!eT && (0, r.jsxs)(u.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(u.zxk, {
            size: "sm",
            variant: "secondary",
            text: U.intl.string(U.t.LLLLPD),
            onClick: ef,
            fullWidth: !ej || V.config.features.includes(N.S7.CLOUD_GAMING_ACTIVITY)
          }), (0, r.jsx)(u.zxk, {
            size: "sm",
            variant: "primary",
            fullWidth: true,
            text: eE,
            onClick: ed,
            loading: ea
          })]
        }), eT && !eS && ei && (0, r.jsx)(_.Z, {
          color: u.TVs.colors.BG_BRAND,
          quest: V
        }), eT && !eS && !ei && (0, r.jsx)(u.zxk, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: U.intl.string(U.t.VN1Ajo),
          onClick: ep
        }), eS && (0, r.jsx)(u.zxk, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: U.intl.string(U.t.cfY4PD),
          onClick: em
        })]
      })]
    })]
  })
}

function W(e) {
  let t = l.useContext(m.h9),
    n = (0, a.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []),
    s = (0, a.e7)([g.Z], () => g.Z.quests),
    i = l.useMemo(() => (0, v.NI)(s, N.Lv), [s]),
    o = (0, a.e7)([c.Z], () => c.Z.getParticipants(e.channelId), [e.channelId]),
    u = (0, a.e7)([b.Z], () => null != e.previewQuest ? e.previewQuest : function(e, t, n) {
      for (let i of e) {
        var r, l, s;
        if (i.type === q.fO.STREAM) {
          let e = null != (l = (0, p.Um)(i.stream, n)) ? l : null,
            s = (0, v.ZZ)(t, e);
          if (null != s && (null == (r = s.userStatus) ? true : r.claimedAt) == null) return s
        }
        for (let r of e)
          if (!(0, q.I)(r))
            for (let e of n.getActivities(r.user.id)) {
              let n = (0, v.ZZ)(t, e);
              if (null != n && (null == (s = n.userStatus) ? true : s.claimedAt) == null) return n
            }
      }
      return null
    }(o, i, b.Z), [o, i, e.previewQuest]);
  return null == u || n ? null : (0, r.jsx)(C.A, {
    questOrQuests: u,
    overrideVisibility: !t,
    questContent: h.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: h.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(V, k(D({}, e), {
      quest: u
    }))
  })
}
let B = function(e) {
  let t = (0, a.e7)([E.default], () => E.default.getCurrentUser());
  return (0, a.e7)([c.Z], () => ((null == t ? true : t.id) == null ? null : c.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(W, D({}, e)) : null
}