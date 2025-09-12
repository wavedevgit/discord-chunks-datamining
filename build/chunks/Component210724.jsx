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
  Chunk938288 = require("./938288.js"),
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
  Chunk685138 = require("./685138.js"),
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
let j = 75;

function M(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, E.qI)({
    mode: t ? w.NH.EXPANDED : w.NH.COLLAPSED,
    questContent: y.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: y.jn.QUEST_BAR_V2
  }), null
}

function k(e) {
  var t, n;
  let {
    quest: a
  } = e, E = (0, I.T)({
    quest: a,
    location: w.dr.QUESTS_BAR
  }), k = (0, v.Z)({
    location: w.dr.QUESTS_BAR
  }), U = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: G,
    reason: B
  } = (0, C.qN)({
    quest: a,
    location: w.dr.QUESTS_BAR
  }), Z = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), F = (0, c.e7)([p.Z], () => p.Z.hasLayers()), V = i.useRef(null), H = i.useMemo(() => (0, g.q8)(a), [a]), Y = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, W = (0, d.Z)(Y), K = (null == (n = a.userStatus) ? true : n.completedAt) != null, {
    hasError: z,
    isLoading: q
  } = (0, A.d7)(), X = i.useContext(R.T) || k && G && !q && !U, Q = i.useRef(X), J = i.useRef(false), $ = i.useRef(false), [ee, et] = i.useState(false), [en, er] = i.useState(false), [ei, ea] = i.useState(false), [eo, es] = i.useState(true), [el, ec] = i.useState(true), eu = i.useRef(null), ed = i.useCallback(e => {
    K || (es(false), ea(e))
  }, [K]), ef = i.useCallback(() => {
    ed(true)
  }, [ed]), e_ = i.useCallback(() => {
    et(true)
  }, []), ep = i.useCallback(() => {
    et(false), $.current || K || ed(false)
  }, [K, ed]), eh = i.useCallback(() => {
    et(false), K || ed(false), $.current = false
  }, [K, ed]), em = i.useCallback(() => {
    er(true)
  }, []), eg = i.useCallback(() => {
    er(false), ed(false)
  }, [ed]), eE = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ei) return;
    let {
      withDelay: t = false
    } = e;
    t ? J.current = window.setTimeout(ef, j) : ef()
  }, [ef, ei]), eb = i.useCallback(() => {
    eE()
  }, [eE]), ey = i.useCallback(() => {
    window.clearTimeout(J.current), ee || en || $.current || ed(false)
  }, [ee, en, ed]), eO = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = V.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), $.current = true, eE({
      withDelay: true
    })
  }, [eE, a]), ev = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = V.current) ? true : e.getId()
      },
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), $.current = false, ey()
  }, [ey, a]);
  i.useLayoutEffect(() => {
    Y && !W && $.current && ef()
  }, [ef, Y, W]), i.useLayoutEffect(() => {
    K || !Y || W || $.current || ed(false)
  }, [Y, K, W, ed]), i.useLayoutEffect(() => {
    X !== Q.current && ec(false), Q.current = X
  }, [X]);
  let eI = Y ? w.XZ : w.R4,
    [{
      expansionSpring: eT
    }, eS] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eI,
      onRest: () => {
        es(true)
      },
      onStart: () => {
        es(false)
      }
    }));
  i.useEffect(() => {
    eS({
      expansionSpring: +!!ei,
      immediate: Z
    })
  }, [ei, eS, Z]);
  let {
    visibilitySpring: eA
  } = (0, u.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!X
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      ec(true)
    },
    onStart: () => {
      ec(false)
    }
  });
  i.useEffect(() => {
    H && (0, S.loadVideoQuestModal)()
  }, [H]), i.useEffect(() => {
    if (z) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = V.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      }), _.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [z, a.id]), i.useEffect(() => {
    if (!k) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = V.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [k, a.id]), i.useEffect(() => {
    if (!X && el && !q) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: B,
          impression_id: null == (e = V.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [X, el, q, a.id, B]), i.useEffect(() => {
    (!G || U) && m.Z.clearTracking(), X && el && !q && !z && k && m.Z.stopTracking(a.id)
  }, [G, U, X, el, q, z, k, a.id]);
  let {
    enabled: eC,
    status: eN
  } = (0, O.n)({
    location: w.dr.QUESTS_BAR,
    questConfig: a.config
  }), eR = (null == eN ? true : eN.progressBlur) ? 88 : 70;
  if (!k || !X && el && !q || z) return z ? E.log("Not rendered due to asset error") : k || E.log("Not rendered due to ineligibility"), null;
  let eP = eR + 78 * !!K;
  return (0, r.jsx)(T.A, {
    questOrQuests: a,
    questContent: y.jn.QUEST_BAR_V2,
    overrideVisibility: !F && X,
    sourceQuestContent: y.jn.QUEST_BAR_V2,
    children: (e, t) => (V.current = t.current, (0, r.jsxs)("div", {
      className: L.mask,
      children: [X && (0, r.jsx)(M, {
        questId: a.id,
        isExpanded: ei
      }), (0, r.jsx)(s.animated.div, {
        "aria-hidden": !X,
        onMouseLeave: ev,
        onMouseEnter: eO,
        onFocus: eb,
        onBlur: ey,
        className: o()(L.wrapper, {
          [L.wrapperInvisible]: !X,
          [L.wrapperVisible]: X && el
        }),
        style: {
          color: eC ? true : a.config.colors.secondary,
          height: eA.to({
            range: [0, 1],
            output: [0, eP]
          })
        },
        children: (0, r.jsx)(s.animated.div, {
          className: o()(L.contentWrapper, {
            [L.contentWrapperExpanded]: ei,
            [L.contentWrapperAccepted]: Y,
            [L.contentWrapperBrandColorRemoval]: eC
          }),
          style: {
            backgroundColor: eC ? true : "var(--home-background)",
            backgroundImage: Y && !eC ? "linear-gradient(90deg, ".concat(D.aY, ", ").concat(D.v6, ")") : true
          },
          children: (0, r.jsx)(N.t, {
            springConfig: eI,
            isExpanded: ei,
            children: (0, r.jsx)(P.Z, {
              expandedContentRef: eu,
              expansionSpring: eT,
              isExpanded: ei,
              isExpansionAnimationComplete: eo,
              onCtxMenuClosed: ep,
              onCtxMenuOpened: e_,
              onCtxMenuSelection: eh,
              onGameSheetOpened: em,
              onGameSheetClosed: eg,
              quest: a,
              useReducedMotion: Z,
              collapsedHeight: eP
            })
          })
        })
      })]
    }))
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