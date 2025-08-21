/** Chunk was on web.js **/
/** chunk id: 210724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => G,
  Z: () => B
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk797614 = require("./797614.js"),
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
let j = 84,
  M = 75,
  k = 70;

function U(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, E.qI)({
    mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
    questContent: y.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: y.jn.QUEST_BAR_V2
  }), null
}

function G(e) {
  var t, n;
  let {
    quest: a
  } = e, E = (0, T.T)({
    quest: a,
    location: D.dr.QUESTS_BAR
  }), G = (0, I.Zy)({
    location: D.dr.QUESTS_BAR
  }), B = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: Z,
    reason: V
  } = (0, N.qN)({
    quest: a,
    location: D.dr.QUESTS_BAR
  }), F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), H = (0, c.e7)([p.Z], () => p.Z.hasLayers()), Y = i.useRef(null), W = i.useMemo(() => (0, g.q8)(a), [a]), K = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, z = (0, d.Z)(K), q = (null == (n = a.userStatus) ? true : n.completedAt) != null, X = (0, d.Z)(q), {
    hasError: Q,
    isLoading: J
  } = (0, C.d7)(), $ = i.useContext(w.T) || G && Z && !J && !B, ee = i.useRef($), et = (0, P.B)(a, $ && !Q), en = i.useRef(false), er = i.useRef(false), ei = v.H.useConfig({
    location: D.dr.QUESTS_BAR
  }).enabled && q, [ea, eo] = i.useState(false), [es, el] = i.useState(false), [ec, eu] = i.useState(true), [ed, ef] = i.useState(true), [e_, ep] = i.useState(et.preEnrollmentExpandedHeight), eh = i.useRef(null), em = i.useCallback(e => {
    ei || (eu(false), el(e))
  }, [ei]), eg = i.useCallback(() => {
    var e, t;
    ep((null != (t = null == (e = eh.current) ? true : e.offsetHeight) ? t : j) + 2 * et.paddingVertical)
  }, [et.paddingVertical]), eE = i.useCallback(() => {
    eg(), em(true)
  }, [eg, em]), eb = i.useCallback(() => {
    eo(true)
  }, []), ey = i.useCallback(() => {
    eo(false), er.current || q || em(false)
  }, [q, em]), eO = i.useCallback(() => {
    eo(false), q || em(false), er.current = false
  }, [q, em]), ev = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (es) return;
    let {
      withDelay: t = false
    } = e;
    t ? en.current = window.setTimeout(eE, M) : eE()
  }, [eE, es]), eI = i.useCallback(() => {
    ev()
  }, [ev]), eT = i.useCallback(() => {
    window.clearTimeout(en.current), et.canCollapseOnBlur && !ea && (er.current || em(false))
  }, [ea, et, em]), eS = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = Y.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: et.trackingCtx.content
    }), er.current = true, ev({
      withDelay: true
    })
  }, [ev, a, et.trackingCtx.content]), eA = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = Y.current) ? true : e.getId()
      },
      sourceQuestContent: et.trackingCtx.content
    }), er.current = false, eT()
  }, [eT, a, et.trackingCtx.content]);
  i.useLayoutEffect(() => {
    q && et.shouldExpandOnQuestComplete && eE()
  }, [eE, q, et.shouldExpandOnQuestComplete]), i.useLayoutEffect(() => {
    K && !z && er.current && eE()
  }, [eE, K, z]), i.useLayoutEffect(() => {
    q || !K || z || er.current || em(false)
  }, [K, q, z, em]), i.useLayoutEffect(() => {
    $ !== ee.current && ef(false), ee.current = $
  }, [$]);
  let eC = K ? D.XZ : D.R4,
    [{
      expansionSpring: eN
    }, eR] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eC,
      onRest: () => {
        eu(true)
      },
      onStart: () => {
        eu(false)
      }
    }));
  i.useEffect(() => {
    eR({
      expansionSpring: +!!es,
      immediate: F
    })
  }, [es, eR, F]);
  let {
    visibilitySpring: eP
  } = (0, u.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!$
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      ef(true)
    },
    onStart: () => {
      ef(false)
    }
  });
  i.useEffect(() => {
    W && (0, A.loadVideoQuestModal)()
  }, [W]), i.useLayoutEffect(() => {
    q && !X && et.canCollapseOnBlur && eg()
  }, [q, eE, et.canCollapseOnBlur, eg, X]), i.useEffect(() => {
    if (Q) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: et.trackingCtx.content
      }), _.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [Q, a.id, et.trackingCtx.content]), i.useEffect(() => {
    if (!G) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: et.trackingCtx.content
      })
    }
  }, [G, a.id, et.trackingCtx.content]), i.useEffect(() => {
    if (!$ && ed && !J) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: V,
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: et.trackingCtx.content
      })
    }
  }, [$, ed, J, a.id, V, et.trackingCtx.content]), i.useEffect(() => {
    (!Z || B) && m.Z.clearTracking(), $ && ed && !J && !Q && G && m.Z.stopTracking(a.id)
  }, [Z, B, $, ed, J, Q, G, a.id]);
  let ew = (0, O.h)({
    location: D.dr.QUESTS_BAR,
    questConfig: a.config
  });
  if (!G || !$ && ed && !J || Q) return Q ? E.log("Not rendered due to asset error") : G || E.log("Not rendered due to ineligibility"), null;
  let eD = k + 78 * !!ei;
  return (0, r.jsx)(S.A, {
    questOrQuests: a,
    questContent: et.trackingCtx.content,
    overrideVisibility: !H && $,
    sourceQuestContent: et.trackingCtx.content,
    children: (e, t) => {
      let n = et.component;
      return Y.current = t.current, (0, r.jsxs)("div", {
        className: L.mask,
        children: [$ && (0, r.jsx)(U, {
          questId: a.id,
          isExpanded: es
        }), (0, r.jsx)(s.animated.div, {
          "aria-hidden": !$,
          onMouseLeave: eA,
          onMouseEnter: eS,
          onFocus: eI,
          onBlur: eT,
          className: o()(L.wrapper, {
            [L.wrapperInvisible]: !$,
            [L.wrapperVisible]: $ && ed
          }),
          style: {
            color: ew ? true : a.config.colors.secondary,
            height: eP.to({
              range: [0, 1],
              output: [0, !et.canCollapseOnBlur && es ? e_ : eD]
            })
          },
          children: (0, r.jsx)(s.animated.div, {
            className: o()(L.contentWrapper, {
              [L.contentWrapperExpanded]: es,
              [L.contentWrapperAccepted]: K,
              [L.contentWrapperBrandColorRemoval]: ew
            }),
            style: {
              backgroundColor: ew ? true : et.preEnrollmentBackgroundColor,
              backgroundImage: K && !ew ? et.postEnrollmentBackgroundImage : true
            },
            children: (0, r.jsx)(R.t, {
              springConfig: eC,
              isExpanded: es,
              children: (0, r.jsx)(n, {
                expandedContentRef: eh,
                expansionSpring: eN,
                isExpanded: es,
                isExpansionAnimationComplete: ec,
                onCtxMenuClosed: ey,
                onCtxMenuOpened: eb,
                onCtxMenuSelection: eO,
                quest: a,
                useReducedMotion: F,
                collapsedHeight: eD,
                shouldShowRewardsCTAWhenCollapsed: ei
              })
            })
          })
        })]
      })
    }
  })
}
let B = function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : (0, Chunk951288.jsx)(Chunk78826.p, {
    source: Chunk46140.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk951288.jsx)(G, {
      quest: module
    })
  }, module.id)
}