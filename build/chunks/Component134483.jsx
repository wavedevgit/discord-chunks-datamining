/** Chunk was on web.js **/
/** chunk id: 134483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk435413 = require("./435413.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e, t, n) {
  for (let o of e) {
    var r, i, a;
    if (o.type === M.fO.STREAM) {
      let e = null != (i = (0, f.Um)(o.stream, n)) ? i : null,
        a = (0, E.ZZ)(t, e);
      if (null != a && (null == (r = a.userStatus) ? true : r.claimedAt) == null) return a
    }
    for (let r of e)
      if (!(0, M.I)(r))
        for (let e of n.getActivities(r.user.id)) {
          let n = (0, E.ZZ)(t, e);
          if (null != n && (null == (a = n.userStatus) ? true : a.claimedAt) == null) return n
        }
  }
  return null
}

function H(e, t, n, r) {
  return e.some(e => {
    if (e.type !== M.fO.STREAM || e.user.id !== n.id) returnfalse;
    let i = (0, f.Um)(e.stream, r);
    return null != i && (0, E._D)(i, t)
  })
}

function Y(e) {
  var t, n, a, f;
  let {
    channelId: p,
    quest: A,
    previewQuest: M,
    isParticipatingOverride: G
  } = e, Z = (0, g.O5)(), [V, Y] = i.useState(false), W = i.useCallback(() => Y(true), []), K = i.useCallback(() => Y(false), []), z = (0, s.e7)([m.default], () => m.default.getCurrentUser()), q = (0, s.e7)([_.Z], () => _.Z.getState().theme), X = (0, l.wj)(q) ? j.BRd.DARK : j.BRd.LIGHT, Q = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]), J = (0, s.e7)([O.Z], () => (0, E.PM)(O.Z.quests, O.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA), []), {
    isCurrentUserStreamingQuestApplication: $,
    isQuestInQuestBar: ee
  } = (0, s.cj)([h.Z], () => ({
    isCurrentUserStreamingQuestApplication: null != A && null != z && H(Q, A, z, h.Z),
    isQuestInQuestBar: (null == J ? true : J.id) === (null == A ? true : A.id)
  }), [z, A, Q, J]), et = null != A ? T.r.build(A.config) : null, en = null == et ? true : et.application.id, er = (0, s.e7)([d.ZP, h.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, E.$H)(A) && e.includes(en)) returntrue;
    let t = null != z ? h.Z.findActivity(z.id, e => e.type !== j.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, E.$J)(A) && (0, E._D)(t, A))
  }, [A, en, z]), ei = true === G || $ || er, ea = (0, s.e7)([O.Z], () => null != A && O.Z.isEnrolling(A.id), [A]), eo = (0, s.e7)([u.Z], () => ((null == z ? true : z.id) == null ? null : u.Z.getParticipant(p, z.id)) != null, [p, z]), es = (0, y.B6)(null == A ? true : A.config.expiresAt), el = (0, y.B6)(null == et ? true : et.rewardsExpireAt), ec = i.useCallback(() => {
    (0, b.AH)(A.id, {
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: v.jn.QUEST_LIVE_STREAM
    })
  }, [A]), eu = i.useCallback(() => {
    Z({
      questId: A.id,
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: g.jZ.TRACK_PROGRESS,
      sourceQuestContent: v.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: v.jn.QUEST_LIVE_STREAM,
      questId: A.id
    })
  }, [A, Z]), ed = i.useCallback(() => {
    Z({
      questId: A.id,
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: g.jZ.LEARN_MORE,
      sourceQuestContent: v.jn.QUEST_LIVE_STREAM
    }), (0, P.navigateToQuestHome)({
      fromContent: v.jn.QUEST_LIVE_STREAM,
      questId: A.id
    })
  }, [A, Z]), ef = (0, D.hf)({
    quest: A,
    questContent: v.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: v.jn.QUEST_LIVE_STREAM
  }), e_ = i.useMemo(() => (0, I.T)({
    quest: A,
    location: L.dr.QUEST_CHANNEL_CALL_HEADER
  }), [A]), ep = (0, y.tP)(A), eh = (null == (t = A.userStatus) ? true : t.enrolledAt) != null, em = (null == (n = A.userStatus) ? true : n.completedAt) != null, eg = null != A.userStatus && (0, E.zE)(A.userStatus, v.jn.QUEST_LIVE_STREAM), eE = null != A.userStatus && (0, E.zE)(A.userStatus, v.jn.QUEST_BAR), eb = ee && !eE;
  e_.info({
    isQuestCallHeaderDismissed: eg,
    isQuestExpired: ep,
    isQuestBarShowing: eb,
    isCurrentUserCallParticipant: eo
  });
  let ey = null != M && (null == (a = A.userStatus) ? true : a.claimedAt) == null;
  if (!ey && (eg || ep || eb) || !ey && !eo) return null;
  let eO = (0, E.il)(A),
    ev = (0, r.jsx)(R.Z, {
      className: U.rewardTile,
      autoplay: V,
      quest: A,
      questContent: v.jn.QUEST_LIVE_STREAM,
      location: L.dr.QUEST_CHANNEL_CALL_HEADER,
      sourceQuestContent: v.jn.QUEST_LIVE_STREAM
    });
  return (0, r.jsxs)("div", {
    className: o()(U.wrapper, {
      [U.wrapperAccepted]: eh
    }),
    onFocus: W,
    onMouseEnter: W,
    onBlur: K,
    onMouseLeave: K,
    children: [!eh && (0, r.jsxs)("div", {
      className: U.rewardTileWrapper,
      children: [ev, (0, r.jsx)(N.Z, {
        bgOpacity: .32,
        className: U.promotedTag
      })]
    }), (0, r.jsxs)("div", {
      className: U.content,
      children: [(0, r.jsxs)("div", {
        className: U.heading,
        children: [eh && ei ? ev : (0, r.jsx)("img", {
          className: U.gameTile,
          alt: A.config.messages.gameTitle,
          src: (0, S.fh)(A, S.eC.GAME_TILE, X).url
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)("div", {
            className: U.headingWithSubmenu,
            children: [(0, r.jsx)(c.X6q, {
              className: U.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: ei ? (0, E.AV)({
                quest: A,
                taskDetails: eO
              }) : k.intl.formatToPlainString(k.t.EQa7oq, {
                questName: A.config.messages.questName
              })
            }), (0, r.jsx)(w.r, {
              questContent: v.jn.QUEST_LIVE_STREAM,
              sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
              quest: A,
              preventIdle: true,
              shouldShowDisclosure: (null == (f = A.userStatus) ? true : f.enrolledAt) == null,
              children: e => (0, r.jsx)(c.P3F, F(B({}, e), {
                className: U.submenuWrapper,
                "aria-label": k.intl.string(k.t.DEoVWV),
                children: (0, r.jsx)(c.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: U.submenuIcon
                })
              }))
            })]
          }), (0, r.jsx)(c.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: em ? k.intl.formatToPlainString(k.t.APddvL, {
              expirationDate: el
            }) : k.intl.formatToPlainString(k.t["pX+fmp"], {
              expirationDate: es
            })
          })]
        })]
      }), eh && !em && !ei && (0, r.jsx)(x.Z, {
        autoplay: V,
        quest: A,
        questContent: v.jn.QUEST_LIVE_STREAM,
        taskDetails: eO,
        location: L.dr.QUEST_CHANNEL_CALL_HEADER,
        sourceQuestContent: v.jn.QUEST_LIVE_STREAM
      }), (0, r.jsxs)("div", {
        className: U.ctas,
        children: [!eh && (0, r.jsxs)(c.hE2, {
          size: "sm",
          fullWidth: true,
          children: [(0, r.jsx)(c.zxk, {
            variant: "secondary",
            text: k.intl.string(k.t.LLLLPD),
            onClick: ed
          }), (0, r.jsx)(c.zxk, {
            variant: "primary",
            text: k.intl.string(k.t.l7E81t),
            onClick: ec,
            loading: ea
          })]
        }), eh && !em && ei && (0, r.jsx)(C.Z, {
          color: c.TVs.colors.BG_BRAND,
          quest: A
        }), eh && !em && !ei && (0, r.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: k.intl.string(k.t.VN1Ajo),
          onClick: eu
        }), em && (0, r.jsx)(c.zxk, {
          variant: "primary",
          size: "sm",
          fullWidth: true,
          text: k.intl.string(k.t.cfY4PD),
          onClick: ef
        })]
      })]
    })]
  })
}

function W(e) {
  let t = i.useContext(p.h9),
    n = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []),
    a = (0, s.e7)([O.Z], () => O.Z.quests),
    o = i.useMemo(() => (0, E.NI)(a, L.Lv), [a]),
    l = (0, s.e7)([u.Z], () => u.Z.getParticipants(e.channelId), [e.channelId]),
    c = (0, s.e7)([h.Z], () => null != e.previewQuest ? e.previewQuest : V(l, o, h.Z), [l, o, e.previewQuest]);
  return null == c || n ? null : (0, r.jsx)(A.A, {
    questOrQuests: c,
    overrideVisibility: !t,
    questContent: v.jn.QUEST_LIVE_STREAM,
    sourceQuestContent: v.jn.QUEST_LIVE_STREAM,
    children: () => (0, r.jsx)(Y, F(B({}, e), {
      quest: c
    }))
  })
}
let K = function(e) {
  let t = (0, s.e7)([m.default], () => m.default.getCurrentUser());
  return (0, s.e7)([u.Z], () => ((null == t ? true : t.id) == null ? null : u.Z.getParticipant(e.channelId, t.id)) != null, [e.channelId, t]) || null != e.previewQuest ? (0, r.jsx)(W, B({}, e)) : null
}