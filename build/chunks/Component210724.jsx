/** Chunk was on 34297 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => L,
  Z: () => Q
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk284298 = require("./284298.js"),
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

function D(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, b.qI)({
    mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
    questContent: v.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  }), null
}

function q() {
  return Chunk647438.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function L(e) {
  var t, n;
  let {
    quest: a
  } = e, m = (0, E.T)({
    quest: a,
    location: A.dr.QUESTS_BAR
  }), b = (0, y.Z)({
    location: A.dr.QUESTS_BAR
  }), L = (0, c.e7)([j.Z], () => null != j.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: Q,
    reason: V
  } = (0, w.qN)({
    quest: a,
    location: A.dr.QUESTS_BAR
  }), M = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), Z = (0, c.e7)([f.Z], () => f.Z.hasLayers()), W = s.useRef(null), H = s.useMemo(() => (0, _.q8)(a), [a]), U = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, F = (0, u.Z)(U), z = (null == (n = a.userStatus) ? true : n.completedAt) != null, {
    hasError: K,
    isLoading: G
  } = (0, T.d7)(), X = s.useContext(N.T) || b && Q && !G && !L, Y = s.useRef(X), J = s.useRef(false), $ = s.useRef(false), [ee, et] = s.useState(false), [en, er] = s.useState(false), [es, ea] = s.useState(false), [eo, ei] = s.useState(true), [el, ec] = s.useState(true), ed = s.useRef(null), eu = s.useCallback(e => {
    z || (ei(false), ea(e))
  }, [z]), ep = s.useCallback(() => {
    eu(true)
  }, [eu]), em = s.useCallback(() => {
    et(true)
  }, []), eg = s.useCallback(() => {
    et(false), $.current || z || eu(false)
  }, [z, eu]), ef = s.useCallback(() => {
    et(false), z || eu(false), $.current = false
  }, [z, eu]), eh = s.useCallback(() => {
    er(true)
  }, []), ex = s.useCallback(() => {
    er(false), eu(false)
  }, [eu]), e_ = s.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (es) return;
    let {
      withDelay: t = false
    } = e;
    t ? J.current = window.setTimeout(ep, 75) : ep()
  }, [ep, es]), eb = s.useCallback(() => {
    e_()
  }, [e_]), ej = s.useCallback(() => {
    window.clearTimeout(J.current), ee || en || $.current || eu(false)
  }, [ee, en, eu]), ev = s.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: k.rMx.QUEST_HOVER,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, h._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = W.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), $.current = true, e_({
      withDelay: true
    })
  }, [e_, a]), eC = s.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: k.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, h._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = W.current) ? true : e.getId()
      },
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), $.current = false, ej()
  }, [ej, a]);
  s.useEffect(() => {
    en && eC()
  }, [en, eC]), s.useLayoutEffect(() => {
    U && !F && $.current && ep()
  }, [ep, U, F]), s.useLayoutEffect(() => {
    z || !U || F || $.current || eu(false)
  }, [U, z, F, eu]), s.useLayoutEffect(() => {
    X !== Y.current && ec(false), Y.current = X
  }, [X]);
  let ey = U ? A.XZ : A.R4,
    [{
      expansionSpring: eE
    }, eO] = (0, d.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: ey,
      onRest: () => {
        ei(true)
      },
      onStart: () => {
        ei(false)
      }
    }));
  s.useEffect(() => {
    eO({
      expansionSpring: +!!es,
      immediate: M
    })
  }, [es, eO, M]);
  let {
    visibilitySpring: eS
  } = (0, d.q_F)({
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
  s.useEffect(() => {
    H && (0, S.loadVideoQuestModal)()
  }, [H]), s.useEffect(() => {
    if (K) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: v.jn.QUEST_BAR,
          content_name: (0, h._b)(v.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: v.jn.QUEST_BAR_V2
      }), g.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [K, a.id]), s.useEffect(() => {
    if (!b) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: v.jn.QUEST_BAR,
          content_name: (0, h._b)(v.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: v.jn.QUEST_BAR_V2
      })
    }
  }, [b, a.id]), s.useEffect(() => {
    if (!X && el && !G) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: v.jn.QUEST_BAR,
          content_name: (0, h._b)(v.jn.QUEST_BAR),
          reason: V,
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: v.jn.QUEST_BAR_V2
      })
    }
  }, [X, el, G, a.id, V]), s.useEffect(() => {
    (!Q || L) && x.Z.clearTracking(), X && el && !G && !K && b && x.Z.stopTracking(a.id)
  }, [Q, L, X, el, G, K, b, a.id]);
  let {
    enabled: eT,
    status: ew
  } = (0, C.n)({
    location: A.dr.QUESTS_BAR,
    questConfig: a.config
  }), eP = (null == ew ? true : ew.progressBlur) && !U ? 88 : 70;
  if (!b || !X && el && !G || K) return K ? m.log("Not rendered due to asset error") : b || m.log("Not rendered due to ineligibility"), null;
  let eN = eP + 78 * !!z;
  return (0, r.jsx)(O.A, {
    questOrQuests: a,
    questContent: v.jn.QUEST_BAR_V2,
    overrideVisibility: !Z && X,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    children: (e, t) => (W.current = t.current, (0, r.jsxs)("div", {
      className: I.mask,
      children: [X && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          questId: a.id,
          isExpanded: es
        }), (0, r.jsx)(q, {})]
      }), (0, r.jsx)(i.animated.div, {
        "aria-hidden": !X,
        onMouseLeave: eC,
        onMouseEnter: ev,
        onFocus: eb,
        onBlur: ej,
        className: o()(I.wrapper, {
          [I.wrapperInvisible]: !X,
          [I.wrapperVisible]: X && el
        }),
        style: {
          color: eT ? true : a.config.colors.secondary,
          height: eS.to({
            range: [0, 1],
            output: [0, eN]
          })
        },
        children: (0, r.jsx)(i.animated.div, {
          className: o()(I.contentWrapper, {
            [I.contentWrapperExpanded]: es,
            [I.contentWrapperAccepted]: U,
            [I.contentWrapperBrandColorRemoval]: eT
          }),
          style: {
            backgroundColor: eT ? true : "var(--home-background)",
            backgroundImage: U && !eT ? "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")") : true
          },
          children: (0, r.jsx)(P.t, {
            springConfig: ey,
            isExpanded: es,
            children: (0, r.jsx)(R.Z, {
              expandedContentRef: ed,
              expansionSpring: eE,
              isExpanded: es,
              isExpansionAnimationComplete: eo,
              onCtxMenuClosed: eg,
              onCtxMenuOpened: em,
              onCtxMenuSelection: ef,
              onGameSheetOpened: eh,
              onGameSheetClosed: ex,
              quest: a,
              useReducedMotion: M,
              collapsedHeight: eN
            })
          })
        })
      })]
    }))
  })
}
let Q = 12633 == require.j ? function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : (0, Chunk951288.jsx)(Chunk78826.p, {
    source: Chunk46140.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk951288.jsx)(L, {
      quest: module
    })
  }, module.id)
} : null