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
  Chunk202841 = require("./202841.js"),
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
  Chunk130653 = require("./130653.jsx"),
  Chunk941348 = require("./941348.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk743294 = require("./743294.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");
let k = 75,
  M = 70;

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
  }), F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), H = (0, c.e7)([p.Z], () => p.Z.hasLayers()), Y = i.useRef(null), W = i.useMemo(() => (0, g.q8)(a), [a]), K = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, z = (0, d.Z)(K), q = (null == (n = a.userStatus) ? true : n.completedAt) != null, {
    hasError: X,
    isLoading: Q
  } = (0, C.d7)(), J = i.useContext(P.T) || G && Z && !Q && !B, $ = i.useRef(J), ee = i.useRef(false), et = i.useRef(false), en = v.H.useConfig({
    location: D.dr.QUESTS_BAR
  }).enabled && q, [er, ei] = i.useState(false), [ea, eo] = i.useState(false), [es, el] = i.useState(true), [ec, eu] = i.useState(true), ed = i.useRef(null), ef = i.useCallback(e => {
    en || (el(false), eo(e))
  }, [en]), e_ = i.useCallback(() => {
    ef(true)
  }, [ef]), ep = i.useCallback(() => {
    ei(true)
  }, []), eh = i.useCallback(() => {
    ei(false), et.current || q || ef(false)
  }, [q, ef]), em = i.useCallback(() => {
    ei(false), q || ef(false), et.current = false
  }, [q, ef]), eg = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ea) return;
    let {
      withDelay: t = false
    } = e;
    t ? ee.current = window.setTimeout(e_, k) : e_()
  }, [e_, ea]), eE = i.useCallback(() => {
    eg()
  }, [eg]), eb = i.useCallback(() => {
    window.clearTimeout(ee.current), !er && (et.current || ef(false))
  }, [er, ef]), ey = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: L.rMx.QUEST_HOVER,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = Y.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), et.current = true, eg({
      withDelay: true
    })
  }, [eg, a]), eO = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: L.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = Y.current) ? true : e.getId()
      },
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), et.current = false, eb()
  }, [eb, a]);
  i.useLayoutEffect(() => {
    K && !z && et.current && e_()
  }, [e_, K, z]), i.useLayoutEffect(() => {
    q || !K || z || et.current || ef(false)
  }, [K, q, z, ef]), i.useLayoutEffect(() => {
    J !== $.current && eu(false), $.current = J
  }, [J]);
  let ev = K ? D.XZ : D.R4,
    [{
      expansionSpring: eI
    }, eT] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: ev,
      onRest: () => {
        el(true)
      },
      onStart: () => {
        el(false)
      }
    }));
  i.useEffect(() => {
    eT({
      expansionSpring: +!!ea,
      immediate: F
    })
  }, [ea, eT, F]);
  let {
    visibilitySpring: eS
  } = (0, u.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!J
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
    W && (0, A.loadVideoQuestModal)()
  }, [W]), i.useEffect(() => {
    if (X) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      }), _.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [X, a.id]), i.useEffect(() => {
    if (!G) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [G, a.id]), i.useEffect(() => {
    if (!J && ec && !Q) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: V,
          impression_id: null == (e = Y.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [J, ec, Q, a.id, V]), i.useEffect(() => {
    (!Z || B) && m.Z.clearTracking(), J && ec && !Q && !X && G && m.Z.stopTracking(a.id)
  }, [Z, B, J, ec, Q, X, G, a.id]);
  let eA = (0, O.h)({
    location: D.dr.QUESTS_BAR,
    questConfig: a.config
  });
  if (!G || !J && ec && !Q || X) return X ? E.log("Not rendered due to asset error") : G || E.log("Not rendered due to ineligibility"), null;
  let eC = M + 78 * !!en;
  return (0, r.jsx)(S.A, {
    questOrQuests: a,
    questContent: y.jn.QUEST_BAR_V2,
    overrideVisibility: !H && J,
    sourceQuestContent: y.jn.QUEST_BAR_V2,
    children: (e, t) => (Y.current = t.current, (0, r.jsxs)("div", {
      className: j.mask,
      children: [J && (0, r.jsx)(U, {
        questId: a.id,
        isExpanded: ea
      }), (0, r.jsx)(s.animated.div, {
        "aria-hidden": !J,
        onMouseLeave: eO,
        onMouseEnter: ey,
        onFocus: eE,
        onBlur: eb,
        className: o()(j.wrapper, {
          [j.wrapperInvisible]: !J,
          [j.wrapperVisible]: J && ec
        }),
        style: {
          color: eA ? true : a.config.colors.secondary,
          height: eS.to({
            range: [0, 1],
            output: [0, eC]
          })
        },
        children: (0, r.jsx)(s.animated.div, {
          className: o()(j.contentWrapper, {
            [j.contentWrapperExpanded]: ea,
            [j.contentWrapperAccepted]: K,
            [j.contentWrapperBrandColorRemoval]: eA
          }),
          style: {
            backgroundColor: eA ? true : "var(--home-background)",
            backgroundImage: K && !eA ? "linear-gradient(90deg, ".concat(x.aY, ", ").concat(x.v6, ")") : true
          },
          children: (0, r.jsx)(R.t, {
            springConfig: ev,
            isExpanded: ea,
            children: (0, r.jsx)(w.Z, {
              expandedContentRef: ed,
              expansionSpring: eI,
              isExpanded: ea,
              isExpansionAnimationComplete: es,
              onCtxMenuClosed: eh,
              onCtxMenuOpened: ep,
              onCtxMenuSelection: em,
              quest: a,
              useReducedMotion: F,
              collapsedHeight: eC,
              shouldShowRewardsCTAWhenCollapsed: en
            })
          })
        })
      })]
    }))
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