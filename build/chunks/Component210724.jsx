/** Chunk was on 83615 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => Z,
  Z: () => W
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
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
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk685138 = require("./685138.js"),
  Chunk787695 = require("./787695.js"),
  Chunk535584 = require("./535584.js"),
  Chunk968843 = require("./968843.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk551097 = require("./551097.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk800926 = require("./800926.jsx"),
  Chunk304083 = require("./304083.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk404672 = require("./404672.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk945165 = require("./945165.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");

function V(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, E.qI)({
    mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
    questContent: b.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: b.jn.QUEST_BAR_V2
  }), null
}

function M() {
  return Chunk473749.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function Z(e) {
  var t, n;
  let {
    quest: o
  } = e, m = (0, y.T)({
    quest: o,
    location: D.dr.QUESTS_BAR
  }), Z = (0, C.Z)({
    location: D.dr.QUESTS_BAR
  }), W = (0, c.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: U,
    reason: H
  } = (0, T.qN)({
    quest: o,
    location: D.dr.QUESTS_BAR
  }), F = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), z = (0, c.e7)([f.Z], () => f.Z.hasLayers()), G = s.useRef(null), K = s.useMemo(() => (0, j.q8)(o), [o]), X = (null == (t = o.userStatus) ? true : t.enrolledAt) != null, Y = (0, u.Z)(X), J = (null == (n = o.userStatus) ? true : n.completedAt) != null, {
    hasError: $,
    isLoading: ee
  } = (0, O.kC)(), et = s.useContext(k.T) || Z && U && !ee && !W, en = s.useRef(et), er = s.useRef(false), es = s.useRef(false), [eo, ea] = s.useState(false), [ei, el] = s.useState(false), [ec, ed] = s.useState(false), [eu, ep] = s.useState(true), [em, eg] = s.useState(true), ef = s.useRef(null), eh = s.useRef(null), ex = s.useRef(null), e_ = (0, E.Rf)(o), eb = s.useCallback(e => {
    J || (ep(false), ed(e))
  }, [J]), ej = s.useCallback(() => {
    eb(true)
  }, [eb]), ev = s.useCallback(() => {
    ea(true)
  }, []), eC = s.useCallback(() => {
    ea(false), es.current || J || eb(false)
  }, [J, eb]), ey = s.useCallback(() => {
    ea(false), J || eb(false), es.current = false
  }, [J, eb]), eE = s.useCallback(() => {
    el(true)
  }, []), eO = s.useCallback(() => {
    el(false), eb(false)
  }, [eb]), eS = s.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ec) return;
    let {
      withDelay: t = false
    } = e;
    t ? er.current = window.setTimeout(ej, 75) : ej()
  }, [ej, ec]), eT = s.useCallback(() => {
    eS()
  }, [eS]), ew = s.useCallback(() => {
    window.clearTimeout(er.current), eo || ei || es.current || eb(false)
  }, [eo, ei, eb]), eP = s.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: o.id,
      event: L.rMx.QUEST_HOVER,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, h._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = G.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), es.current = true, eS({
      withDelay: true
    })
  }, [eS, o]), eN = s.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: o.id,
      event: L.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, h._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = G.current) ? true : e.getId()
      },
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), es.current = false, ew()
  }, [ew, o]);
  s.useEffect(() => {
    ei && eN()
  }, [ei, eN]), s.useLayoutEffect(() => {
    X && !Y && es.current && ej()
  }, [ej, X, Y]), s.useLayoutEffect(() => {
    J || !X || Y || es.current || eb(false)
  }, [X, J, Y, eb]), s.useLayoutEffect(() => {
    et !== en.current && eg(false), en.current = et
  }, [et]);
  let eR = X ? D.XZ : D.R4,
    [{
      expansionSpring: eA
    }, eB] = (0, d.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eR,
      onRest: () => {
        ep(true)
      },
      onStart: () => {
        ep(false)
      }
    }));
  s.useEffect(() => {
    eB({
      expansionSpring: +!!ec,
      immediate: F
    })
  }, [ec, eB, F]);
  let {
    visibilitySpring: ek
  } = (0, d.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!et
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      eg(true)
    },
    onStart: () => {
      eg(false)
    }
  });
  s.useEffect(() => {
    K && (0, w.loadVideoQuestModal)()
  }, [K]), s.useEffect(() => {
    if ($) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: b.jn.QUEST_BAR,
          content_name: (0, h._b)(b.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = G.current) ? true : e.getId()
        },
        sourceQuestContent: b.jn.QUEST_BAR_V2
      }), g.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"]
      })
    }
  }, [$, o.id]), s.useEffect(() => {
    if (!Z) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: b.jn.QUEST_BAR,
          content_name: (0, h._b)(b.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = G.current) ? true : e.getId()
        },
        sourceQuestContent: b.jn.QUEST_BAR_V2
      })
    }
  }, [Z, o.id]), s.useEffect(() => {
    if (!et && em && !ee) {
      var e;
      (0, h.dA)({
        questId: o.id,
        event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: b.jn.QUEST_BAR,
          content_name: (0, h._b)(b.jn.QUEST_BAR),
          reason: H,
          impression_id: null == (e = G.current) ? true : e.getId()
        },
        sourceQuestContent: b.jn.QUEST_BAR_V2
      })
    }
  }, [et, em, ee, o.id, H]), s.useEffect(() => {
    (!U || W) && x.Z.clearTracking(), et && em && !ee && !$ && Z && x.Z.stopTracking(o.id)
  }, [U, W, et, em, ee, $, Z, o.id]);
  let {
    enabled: eI,
    status: eD
  } = (0, v.n)({
    location: D.dr.QUESTS_BAR,
    questConfig: o.config
  }), eq = (null == eD ? true : eD.progressBlur) && !X ? 88 : 70;
  if (!Z || !et && em && !ee || $) return $ ? m.log("Not rendered due to asset error") : Z || m.log("Not rendered due to ineligibility"), null;
  let eL = eq + 78 * !!J;
  return (0, r.jsx)(S.A, {
    questOrQuests: o,
    questContent: b.jn.QUEST_BAR_V2,
    overrideVisibility: !z && et,
    sourceQuestContent: b.jn.QUEST_BAR_V2,
    children: (e, t) => (G.current = t.current, (0, r.jsxs)("div", {
      className: Q.mask,
      children: [et && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(V, {
          questId: o.id,
          isExpanded: ec
        }), (0, r.jsx)(M, {})]
      }), (0, r.jsx)(i.animated.div, {
        "aria-hidden": !et,
        onMouseLeave: eN,
        onMouseEnter: eP,
        onFocus: eT,
        onBlur: ew,
        className: a()(Q.wrapper, {
          [Q.wrapperInvisible]: !et,
          [Q.wrapperVisible]: et && em
        }),
        style: {
          color: eI ? true : o.config.colors.secondary,
          height: ek.to({
            range: [0, 1],
            output: [0, eL]
          })
        },
        children: (0, r.jsx)(i.animated.div, {
          className: a()(Q.contentWrapper, {
            [Q.contentWrapperExpanded]: ec,
            [Q.contentWrapperAccepted]: X,
            [Q.contentWrapperBrandColorRemoval]: eI
          }),
          style: {
            backgroundColor: eI ? true : "var(--home-background)",
            backgroundImage: X && !eI ? "linear-gradient(90deg, ".concat(q.cd, ", ").concat(q.v$, ")") : true
          },
          children: (0, r.jsx)(B.t, {
            springConfig: eR,
            isExpanded: ec,
            children: (0, r.jsxs)(N.iQ, {
              expandedContentRef: ef,
              collapsedContentRef: eh,
              expansionSpring: eA,
              children: [(0, r.jsx)(R.Z, {
                ref: eh,
                className: Q.content,
                expansionSpring: eA,
                isExpanded: ec,
                isExpansionAnimationComplete: eu,
                quest: o,
                useReducedMotion: F,
                taskDetails: e_,
                onCtxMenuOpen: ev,
                onCtxMenuClose: eC,
                onCtxMenuSelect: ey,
                overlayRef: ex
              }, J ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(A.Z, {
                expansionSpring: eA,
                className: Q.content,
                collapsedHeight: eL,
                onCtxMenuOpen: ev,
                onCtxMenuClose: eC,
                onCtxMenuSelect: ey,
                onGameSheetOpened: eE,
                onGameSheetClosed: eO,
                overlayRef: ex,
                isExpanded: ec,
                isExpansionAnimationComplete: eu,
                quest: o,
                useReducedMotion: F,
                ref: ef,
                taskDetails: e_,
                children: (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(I.Z, {
                    expansionSpring: eA,
                    isExpanded: ec
                  }), !X && (0, r.jsx)(P.Z, {
                    quest: o,
                    expansionSpring: eA,
                    useReducedMotion: F,
                    isExpanded: ec,
                    isExpansionAnimationComplete: eu,
                    onCtxMenuOpen: ev,
                    onCtxMenuClose: eC,
                    onCtxMenuSelect: ey
                  })]
                })
              }), (0, r.jsx)("div", {
                ref: ex,
                className: Q.overlay
              })]
            })
          })
        })
      })]
    }))
  })
}
let W = 12633 == require.j ? function() {
  let e = (0, Chunk659302.DH)();
  return null == module ? null : (0, Chunk54381.jsx)(Chunk455357.x8, {
    source: Chunk324805.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk54381.jsx)(Z, {
      quest: module
    })
  }, module.id)
} : null