/** Chunk was on 83615 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => L,
  Z: () => Q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
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
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk685138 = require("./685138.js"),
  Chunk787695 = require("./787695.js"),
  Chunk535584 = require("./535584.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk941348 = require("./941348.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk743294 = require("./743294.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");

function D(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, _.qI)({
    mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
    questContent: j.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: j.jn.QUEST_BAR_V2
  }), null
}

function q() {
  return Chunk473749.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function L(e) {
  var t, n;
  let {
    quest: o
  } = e, m = (0, E.T)({
    quest: o,
    location: A.dr.QUESTS_BAR
  }), _ = (0, y.Z)({
    location: A.dr.QUESTS_BAR
  }), L = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: Q,
    reason: V
  } = (0, T.qN)({
    quest: o,
    location: A.dr.QUESTS_BAR
  }), M = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), Z = (0, c.e7)([f.Z], () => f.Z.hasLayers()), W = s.useRef(null), H = s.useMemo(() => (0, v.q8)(o), [o]), U = (null == (t = o.userStatus) ? true : t.enrolledAt) != null, F = (0, u.Z)(U), z = (null == (n = o.userStatus) ? true : n.completedAt) != null, {
    hasError: G,
    isLoading: K
  } = (0, O.kC)(), Y = s.useContext(N.T) || _ && Q && !K && !L, X = s.useRef(Y), J = s.useRef(false), $ = s.useRef(false), [ee, et] = s.useState(false), [en, er] = s.useState(false), [es, eo] = s.useState(false), [ea, ei] = s.useState(true), [el, ec] = s.useState(true), ed = s.useRef(null), eu = s.useCallback(e => {
    z || (ei(false), eo(e))
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
      questId: o.id,
      event: k.rMx.QUEST_HOVER,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, h._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = W.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: j.jn.QUEST_BAR_V2
    }), $.current = true, e_({
      withDelay: true
    })
  }, [e_, o]), eC = s.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: o.id,
      event: k.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, h._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = W.current) ? true : e.getId()
      },
      sourceQuestContent: j.jn.QUEST_BAR_V2
    }), $.current = false, ej()
  }, [ej, o]);
  s.useEffect(() => {
    en && eC()
  }, [en, eC]), s.useLayoutEffect(() => {
    U && !F && $.current && ep()
  }, [ep, U, F]), s.useLayoutEffect(() => {
    z || !U || F || $.current || eu(false)
  }, [U, z, F, eu]), s.useLayoutEffect(() => {
    Y !== X.current && ec(false), X.current = Y
  }, [Y]);
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
      visibilitySpring: +!!Y
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
    H && (0, w.loadVideoQuestModal)()
  }, [H]), s.useEffect(() => {
    if (G) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: j.jn.QUEST_BAR,
          content_name: (0, h._b)(j.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: j.jn.QUEST_BAR_V2
      }), g.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"]
      })
    }
  }, [G, o.id]), s.useEffect(() => {
    if (!_) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: j.jn.QUEST_BAR,
          content_name: (0, h._b)(j.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: j.jn.QUEST_BAR_V2
      })
    }
  }, [_, o.id]), s.useEffect(() => {
    if (!Y && el && !K) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: k.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: j.jn.QUEST_BAR,
          content_name: (0, h._b)(j.jn.QUEST_BAR),
          reason: V,
          impression_id: null == (e = W.current) ? true : e.getId()
        },
        sourceQuestContent: j.jn.QUEST_BAR_V2
      })
    }
  }, [Y, el, K, o.id, V]), s.useEffect(() => {
    (!Q || L) && x.Z.clearTracking(), Y && el && !K && !G && _ && x.Z.stopTracking(o.id)
  }, [Q, L, Y, el, K, G, _, o.id]);
  let {
    enabled: eT,
    status: ew
  } = (0, C.n)({
    location: A.dr.QUESTS_BAR,
    questConfig: o.config
  }), eP = (null == ew ? true : ew.progressBlur) && !U ? 88 : 70;
  if (!_ || !Y && el && !K || G) return G ? m.log("Not rendered due to asset error") : _ || m.log("Not rendered due to ineligibility"), null;
  let eN = eP + 78 * !!z;
  return (0, r.jsx)(S.A, {
    questOrQuests: o,
    questContent: j.jn.QUEST_BAR_V2,
    overrideVisibility: !Z && Y,
    sourceQuestContent: j.jn.QUEST_BAR_V2,
    children: (e, t) => (W.current = t.current, (0, r.jsxs)("div", {
      className: I.mask,
      children: [Y && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(D, {
          questId: o.id,
          isExpanded: es
        }), (0, r.jsx)(q, {})]
      }), (0, r.jsx)(i.animated.div, {
        "aria-hidden": !Y,
        onMouseLeave: eC,
        onMouseEnter: ev,
        onFocus: eb,
        onBlur: ej,
        className: a()(I.wrapper, {
          [I.wrapperInvisible]: !Y,
          [I.wrapperVisible]: Y && el
        }),
        style: {
          color: eT ? true : o.config.colors.secondary,
          height: eS.to({
            range: [0, 1],
            output: [0, eN]
          })
        },
        children: (0, r.jsx)(i.animated.div, {
          className: a()(I.contentWrapper, {
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
              isExpansionAnimationComplete: ea,
              onCtxMenuClosed: eg,
              onCtxMenuOpened: em,
              onCtxMenuSelection: ef,
              onGameSheetOpened: eh,
              onGameSheetClosed: ex,
              quest: o,
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
  let e = (0, Chunk659302.DH)();
  return null == module ? null : (0, Chunk54381.jsx)(Chunk455357.x8, {
    source: Chunk324805.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk54381.jsx)(L, {
      quest: module
    })
  }, module.id)
} : null