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
  Chunk6383 = require("./6383.js"),
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
let M = 75;

function k(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, b.qI)({
    mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
    questContent: O.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: O.jn.QUEST_BAR_V2
  }), null
}

function U() {
  return Chunk647438.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function G(e) {
  var t, n;
  let {
    quest: a
  } = e, _ = (0, T.T)({
    quest: a,
    location: D.dr.QUESTS_BAR
  }), b = (0, I.Z)({
    location: D.dr.QUESTS_BAR
  }), G = (0, c.e7)([y.Z], () => null != y.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: B,
    reason: Z
  } = (0, N.qN)({
    quest: a,
    location: D.dr.QUESTS_BAR
  }), F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), V = (0, c.e7)([h.Z], () => h.Z.hasLayers()), H = i.useRef(null), Y = i.useMemo(() => (0, E.q8)(a), [a]), W = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, K = (0, d.Z)(W), z = (null == (n = a.userStatus) ? true : n.completedAt) != null, {
    hasError: q,
    isLoading: X
  } = (0, C.d7)(), Q = i.useContext(P.T) || b && B && !X && !G, J = i.useRef(Q), $ = i.useRef(false), ee = i.useRef(false), [et, en] = i.useState(false), [er, ei] = i.useState(false), [ea, eo] = i.useState(false), [es, el] = i.useState(true), [ec, eu] = i.useState(true), ed = i.useRef(null), ef = i.useCallback(e => {
    z || (el(false), eo(e))
  }, [z]), e_ = i.useCallback(() => {
    ef(true)
  }, [ef]), ep = i.useCallback(() => {
    en(true)
  }, []), eh = i.useCallback(() => {
    en(false), ee.current || z || ef(false)
  }, [z, ef]), em = i.useCallback(() => {
    en(false), z || ef(false), ee.current = false
  }, [z, ef]), eg = i.useCallback(() => {
    ei(true)
  }, []), eE = i.useCallback(() => {
    ei(false), ef(false)
  }, [ef]), eb = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ea) return;
    let {
      withDelay: t = false
    } = e;
    t ? $.current = window.setTimeout(e_, M) : e_()
  }, [e_, ea]), ey = i.useCallback(() => {
    eb()
  }, [eb]), eO = i.useCallback(() => {
    window.clearTimeout($.current), et || er || ee.current || ef(false)
  }, [et, er, ef]), ev = i.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: a.id,
      event: L.rMx.QUEST_HOVER,
      properties: {
        content_id: O.jn.QUEST_BAR,
        content_name: (0, m._b)(O.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: O.jn.QUEST_BAR_V2
    }), ee.current = true, eb({
      withDelay: true
    })
  }, [eb, a]), eI = i.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: a.id,
      event: L.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: O.jn.QUEST_BAR,
        content_name: (0, m._b)(O.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      sourceQuestContent: O.jn.QUEST_BAR_V2
    }), ee.current = false, eO()
  }, [eO, a]);
  i.useLayoutEffect(() => {
    W && !K && ee.current && e_()
  }, [e_, W, K]), i.useLayoutEffect(() => {
    z || !W || K || ee.current || ef(false)
  }, [W, z, K, ef]), i.useLayoutEffect(() => {
    Q !== J.current && eu(false), J.current = Q
  }, [Q]);
  let eT = W ? D.XZ : D.R4,
    [{
      expansionSpring: eS
    }, eA] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eT,
      onRest: () => {
        el(true)
      },
      onStart: () => {
        el(false)
      }
    }));
  i.useEffect(() => {
    eA({
      expansionSpring: +!!ea,
      immediate: F
    })
  }, [ea, eA, F]);
  let {
    visibilitySpring: eC
  } = (0, u.q_F)({
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
    Y && (0, A.loadVideoQuestModal)()
  }, [Y]), i.useEffect(() => {
    if (q) {
      var e;
      (0, m.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: O.jn.QUEST_BAR,
          content_name: (0, m._b)(O.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: O.jn.QUEST_BAR_V2
      }), p.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [q, a.id]), i.useEffect(() => {
    if (!b) {
      var e;
      (0, m.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: O.jn.QUEST_BAR,
          content_name: (0, m._b)(O.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: O.jn.QUEST_BAR_V2
      })
    }
  }, [b, a.id]), i.useEffect(() => {
    if (!Q && ec && !X) {
      var e;
      (0, m.dA)({
        questId: a.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: O.jn.QUEST_BAR,
          content_name: (0, m._b)(O.jn.QUEST_BAR),
          reason: Z,
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: O.jn.QUEST_BAR_V2
      })
    }
  }, [Q, ec, X, a.id, Z]), i.useEffect(() => {
    (!B || G) && g.Z.clearTracking(), Q && ec && !X && !q && b && g.Z.stopTracking(a.id)
  }, [B, G, Q, ec, X, q, b, a.id]);
  let {
    enabled: eN,
    status: eR
  } = (0, v.n)({
    location: D.dr.QUESTS_BAR,
    questConfig: a.config
  }), eP = (null == eR ? true : eR.progressBlur) && !W ? 88 : 70;
  if (!b || !Q && ec && !X || q) return q ? _.log("Not rendered due to asset error") : b || _.log("Not rendered due to ineligibility"), null;
  let ew = eP + 78 * !!z;
  return (0, r.jsx)(S.A, {
    questOrQuests: a,
    questContent: O.jn.QUEST_BAR_V2,
    overrideVisibility: !V && Q,
    sourceQuestContent: O.jn.QUEST_BAR_V2,
    children: (e, t) => (H.current = t.current, (0, r.jsxs)("div", {
      className: j.mask,
      children: [Q && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(k, {
          questId: a.id,
          isExpanded: ea
        }), (0, r.jsx)(U, {})]
      }), (0, r.jsx)(s.animated.div, {
        "aria-hidden": !Q,
        onMouseLeave: eI,
        onMouseEnter: ev,
        onFocus: ey,
        onBlur: eO,
        className: o()(j.wrapper, {
          [j.wrapperInvisible]: !Q,
          [j.wrapperVisible]: Q && ec
        }),
        style: {
          color: eN ? true : a.config.colors.secondary,
          height: eC.to({
            range: [0, 1],
            output: [0, ew]
          })
        },
        children: (0, r.jsx)(s.animated.div, {
          className: o()(j.contentWrapper, {
            [j.contentWrapperExpanded]: ea,
            [j.contentWrapperAccepted]: W,
            [j.contentWrapperBrandColorRemoval]: eN
          }),
          style: {
            backgroundColor: eN ? true : "var(--home-background)",
            backgroundImage: W && !eN ? "linear-gradient(90deg, ".concat(x.aY, ", ").concat(x.v6, ")") : true
          },
          children: (0, r.jsx)(R.t, {
            springConfig: eT,
            isExpanded: ea,
            children: (0, r.jsx)(w.Z, {
              expandedContentRef: ed,
              expansionSpring: eS,
              isExpanded: ea,
              isExpansionAnimationComplete: es,
              onCtxMenuClosed: eh,
              onCtxMenuOpened: ep,
              onCtxMenuSelection: em,
              onGameSheetOpened: eg,
              onGameSheetClosed: eE,
              quest: a,
              useReducedMotion: F,
              collapsedHeight: ew
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