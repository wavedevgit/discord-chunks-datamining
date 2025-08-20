/** Chunk was on web.js **/
/** chunk id: 210724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => k,
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk617136 = require("./617136.js"),
  Chunk823289 = require("./823289.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk381176 = require("./381176.js"),
  Chunk16868 = require("./16868.js"),
  Chunk977156 = require("./977156.js"),
  Chunk5881 = require("./5881.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk130653 = require("./130653.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");
let x = 84,
  L = 75,
  j = 70;

function M(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, m.qI)({
    mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
    questContent: E.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: E.jn.QUEST_BAR_V2
  }), null
}

function k(e) {
  var t, n;
  let {
    quest: a
  } = e, m = (0, v.T)({
    quest: a,
    location: P.dr.QUESTS_BAR
  }), k = (0, O.Zy)({
    location: P.dr.QUESTS_BAR
  }), U = (0, l.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: G,
    reason: B
  } = (0, A.qN)({
    quest: a,
    location: P.dr.QUESTS_BAR
  }), Z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), V = (0, l.e7)([f.Z], () => f.Z.hasLayers()), F = i.useRef(null), H = i.useMemo(() => (0, h.q8)(a), [a]), Y = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, W = (0, u.Z)(Y), K = (null == (n = a.userStatus) ? true : n.completedAt) != null, z = (0, u.Z)(K), {
    hasError: q,
    isLoading: X
  } = (0, S.d7)(), Q = i.useContext(R.T) || k && G && !X && !U, J = i.useRef(Q), $ = (0, N.B)(a, Q && !q), ee = i.useRef(false), et = i.useRef(false), en = y.H.useConfig({
    location: P.dr.QUESTS_BAR
  }).enabled && K, [er, ei] = i.useState(false), [ea, eo] = i.useState(false), [es, el] = i.useState(true), [ec, eu] = i.useState(true), [ed, ef] = i.useState($.preEnrollmentExpandedHeight), e_ = i.useRef(null), ep = i.useCallback(e => {
    en || (el(false), eo(e))
  }, [en]), eh = i.useCallback(() => {
    var e, t;
    ef((null != (t = null == (e = e_.current) ? true : e.offsetHeight) ? t : x) + 2 * $.paddingVertical)
  }, [$.paddingVertical]), em = i.useCallback(() => {
    eh(), ep(true)
  }, [eh, ep]), eg = i.useCallback(() => {
    ei(true)
  }, []), eE = i.useCallback(() => {
    ei(false), et.current || K || ep(false)
  }, [K, ep]), eb = i.useCallback(() => {
    ei(false), K || ep(false), et.current = false
  }, [K, ep]), ey = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ea) return;
    let {
      withDelay: t = false
    } = e;
    t ? ee.current = window.setTimeout(em, L) : em()
  }, [em, ea]), eO = i.useCallback(() => {
    ey()
  }, [ey]), ev = i.useCallback(() => {
    window.clearTimeout(ee.current), $.canCollapseOnBlur && !er && (et.current || ep(false))
  }, [er, $, ep]), eI = i.useCallback(() => {
    var e;
    (0, _.dA)({
      questId: a.id,
      event: w.rMx.QUEST_HOVER,
      properties: {
        content_id: E.jn.QUEST_BAR,
        content_name: (0, _._b)(E.jn.QUEST_BAR),
        impression_id: null == (e = F.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: $.trackingCtx.content
    }), et.current = true, ey({
      withDelay: true
    })
  }, [ey, a, $.trackingCtx.content]), eT = i.useCallback(() => {
    var e;
    (0, _.dA)({
      questId: a.id,
      event: w.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: E.jn.QUEST_BAR,
        content_name: (0, _._b)(E.jn.QUEST_BAR),
        impression_id: null == (e = F.current) ? true : e.getId()
      },
      sourceQuestContent: $.trackingCtx.content
    }), et.current = false, ev()
  }, [ev, a, $.trackingCtx.content]);
  i.useLayoutEffect(() => {
    K && $.shouldExpandOnQuestComplete && em()
  }, [em, K, $.shouldExpandOnQuestComplete]), i.useLayoutEffect(() => {
    Y && !W && et.current && em()
  }, [em, Y, W]), i.useLayoutEffect(() => {
    K || !Y || W || et.current || ep(false)
  }, [Y, K, W, ep]), i.useLayoutEffect(() => {
    Q !== J.current && eu(false), J.current = Q
  }, [Q]);
  let eS = Y ? P.XZ : P.R4,
    [{
      expansionSpring: eA
    }, eC] = (0, c.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eS,
      onRest: () => {
        el(true)
      },
      onStart: () => {
        el(false)
      }
    }));
  i.useEffect(() => {
    eC({
      expansionSpring: +!!ea,
      immediate: Z
    })
  }, [ea, eC, Z]);
  let {
    visibilitySpring: eN
  } = (0, c.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!Q
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      eu(true)
    },
    onStart: () => {
      eu(false)
    }
  });
  i.useEffect(() => {
    H && (0, T.loadVideoQuestModal)()
  }, [H]), i.useLayoutEffect(() => {
    K && !z && $.canCollapseOnBlur && eh()
  }, [K, em, $.canCollapseOnBlur, eh, z]), i.useEffect(() => {
    var e, t;
    q && (0, _.dA)({
      questId: a.id,
      event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: E.jn.QUEST_BAR,
        content_name: (0, _._b)(E.jn.QUEST_BAR),
        reason: "asset_loading_error",
        impression_id: null == (e = F.current) ? true : e.getId()
      },
      sourceQuestContent: $.trackingCtx.content
    }), k || (0, _.dA)({
      questId: a.id,
      event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: E.jn.QUEST_BAR,
        content_name: (0, _._b)(E.jn.QUEST_BAR),
        reason: "not_eligible_for_quest",
        impression_id: null == (t = F.current) ? true : t.getId()
      },
      sourceQuestContent: $.trackingCtx.content
    })
  }, [q, k, a.id, $.trackingCtx.content]), i.useEffect(() => {
    if (!Q && ec && !X) {
      var e;
      (0, _.dA)({
        questId: a.id,
        event: w.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: E.jn.QUEST_BAR,
          content_name: (0, _._b)(E.jn.QUEST_BAR),
          reason: B,
          impression_id: null == (e = F.current) ? true : e.getId()
        },
        sourceQuestContent: $.trackingCtx.content
      })
    }
  }, [Q, ec, X, a.id, B, $.trackingCtx.content]), i.useEffect(() => {
    (!G || U) && p.Z.clearTracking(), Q && ec && !X && !q && k && p.Z.stopTracking(a.id)
  }, [G, U, Q, ec, X, q, k, a.id]);
  let eR = (0, b.h)({
    location: P.dr.QUESTS_BAR,
    questConfig: a.config
  });
  if (!k || !Q && ec && !X || q) return q ? m.log("Not rendered due to asset error") : k || m.log("Not rendered due to ineligibility"), null;
  let eP = j + 78 * !!en;
  return (0, r.jsx)(I.A, {
    questOrQuests: a,
    questContent: $.trackingCtx.content,
    overrideVisibility: !V && Q,
    sourceQuestContent: $.trackingCtx.content,
    children: (e, t) => {
      let n = $.component;
      return F.current = t.current, (0, r.jsxs)("div", {
        className: D.mask,
        children: [Q && (0, r.jsx)(M, {
          questId: a.id,
          isExpanded: ea
        }), (0, r.jsx)(s.animated.div, {
          "aria-hidden": !Q,
          onMouseLeave: eT,
          onMouseEnter: eI,
          onFocus: eO,
          onBlur: ev,
          className: o()(D.wrapper, {
            [D.wrapperInvisible]: !Q,
            [D.wrapperVisible]: Q && ec
          }),
          style: {
            color: eR ? true : a.config.colors.secondary,
            height: eN.to({
              range: [0, 1],
              output: [0, !$.canCollapseOnBlur && ea ? ed : eP]
            })
          },
          children: (0, r.jsx)(s.animated.div, {
            className: o()(D.contentWrapper, {
              [D.contentWrapperExpanded]: ea,
              [D.contentWrapperAccepted]: Y,
              [D.contentWrapperBrandColorRemoval]: eR
            }),
            style: {
              backgroundColor: eR ? true : $.preEnrollmentBackgroundColor,
              backgroundImage: Y && !eR ? $.postEnrollmentBackgroundImage : true
            },
            children: (0, r.jsx)(C.t, {
              springConfig: eS,
              isExpanded: ea,
              children: (0, r.jsx)(n, {
                expandedContentRef: e_,
                expansionSpring: eA,
                isExpanded: ea,
                isExpansionAnimationComplete: es,
                onCtxMenuClosed: eE,
                onCtxMenuOpened: eg,
                onCtxMenuSelection: eb,
                quest: a,
                useReducedMotion: Z,
                collapsedHeight: eP,
                shouldShowRewardsCTAWhenCollapsed: en
              })
            })
          })
        })]
      })
    }
  })
}
let U = function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : (0, Chunk951288.jsx)(Chunk78826.p, {
    source: Chunk46140.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk951288.jsx)(k, {
      quest: module
    })
  }, module.id)
}