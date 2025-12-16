/** Chunk was on 23736 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => G,
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk236726 = require("./236726.js"),
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
  Chunk937797 = require("./937797.js"),
  Chunk787695 = require("./787695.js"),
  Chunk535584 = require("./535584.js"),
  Chunk968843 = require("./968843.js"),
  Chunk254579 = require("./254579.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk551097 = require("./551097.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk800926 = require("./800926.jsx"),
  Chunk304083 = require("./304083.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk404672 = require("./404672.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk748962 = require("./748962.js");

function B(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, _.qI)({
    mode: t ? L.NH.EXPANDED : L.NH.COLLAPSED,
    questContent: v.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  }), null
}

function F() {
  return Chunk473749.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function G(e) {
  var t, n;
  let {
    quest: i
  } = e, p = (0, C.T)({
    quest: i,
    location: L.dr.QUESTS_BAR
  }), j = (0, y.Z)({
    location: L.dr.QUESTS_BAR
  }), G = (0, c.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: V,
    reason: H
  } = (0, O.qN)({
    quest: i,
    location: L.dr.QUESTS_BAR
  }), W = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), z = (0, c.e7)([f.Z], () => f.Z.hasLayers()), K = r.useRef(null), q = r.useMemo(() => (0, S.q8)(i), [i]), Y = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, Q = (0, u.Z)(Y), X = (null == (n = i.userStatus) ? true : n.completedAt) != null, {
    hasError: J,
    isLoading: $
  } = (0, E.kC)(), ee = r.useContext(D.T) || j && V && !$ && !G, et = r.useRef(ee), en = r.useRef(false), ea = r.useRef(false), [er, ei] = r.useState(false), [el, es] = r.useState(false), [eo, ec] = r.useState(false), [ed, eu] = r.useState(true), [em, ep] = r.useState(true), eh = r.useRef(null), ef = r.useRef(null), ex = r.useRef(null), eb = (0, _.Rf)(i), eg = r.useCallback(e => {
    X || (eu(false), ec(e))
  }, [X]), ev = r.useCallback(() => {
    eg(true)
  }, [eg]), ej = r.useCallback(() => {
    ei(true)
  }, []), ey = r.useCallback(() => {
    ei(false), ea.current || X || eg(false)
  }, [X, eg]), eC = r.useCallback(() => {
    ei(false), X || eg(false), ea.current = false
  }, [X, eg]), e_ = r.useCallback(() => {
    es(true)
  }, []), eS = r.useCallback(() => {
    es(false), eg(false)
  }, [eg]), eE = r.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (eo) return;
    let {
      withDelay: t = false
    } = e;
    t ? en.current = window.setTimeout(ev, 75) : ev()
  }, [ev, eo]), eT = r.useCallback(() => {
    eE()
  }, [eE]), eO = r.useCallback(() => {
    window.clearTimeout(en.current), er || el || ea.current || eg(false)
  }, [er, el, eg]), eN = r.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: i.id,
      event: M.rMx.QUEST_HOVER,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, x._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = K.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), ea.current = true, eE({
      withDelay: true
    })
  }, [eE, i]), eP = r.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: i.id,
      event: M.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, x._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = K.current) ? true : e.getId()
      },
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), ea.current = false, eO()
  }, [eO, i]);
  r.useEffect(() => {
    el && eP()
  }, [el, eP]), r.useLayoutEffect(() => {
    Y && !Q && ea.current && ev()
  }, [ev, Y, Q]), r.useLayoutEffect(() => {
    X || !Y || Q || ea.current || eg(false)
  }, [Y, X, Q, eg]), r.useLayoutEffect(() => {
    ee !== et.current && ep(false), et.current = ee
  }, [ee]);
  let ew = Y ? L.XZ : L.R4,
    [{
      expansionSpring: eI
    }, ek] = (0, d.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: ew,
      onRest: () => {
        eu(true)
      },
      onStart: () => {
        eu(false)
      }
    }));
  r.useEffect(() => {
    ek({
      expansionSpring: +!!eo,
      immediate: W
    })
  }, [eo, ek, W]);
  let {
    visibilitySpring: eR
  } = (0, d.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!ee
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      ep(true)
    },
    onStart: () => {
      ep(false)
    }
  });
  if (r.useEffect(() => {
      q && (0, N.loadVideoQuestModal)()
    }, [q]), r.useEffect(() => {
      if (J) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: "asset_loading_error",
            impression_id: null == (e = K.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        }), h.Z.increment({
          name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
          tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"]
        })
      }
    }, [J, i.id]), r.useEffect(() => {
      if (!j) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: "not_eligible_for_quest",
            impression_id: null == (e = K.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })
      }
    }, [j, i.id]), r.useEffect(() => {
      if (!ee && em && !$) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: H,
            impression_id: null == (e = K.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })
      }
    }, [ee, em, $, i.id, H]), r.useEffect(() => {
      (!V || G) && b.Z.clearTracking(), ee && em && !$ && !J && j && b.Z.stopTracking(i.id)
    }, [V, G, ee, em, $, J, j, i.id]), !j || !ee && em && !$ || J) return J ? p.log("Not rendered due to asset error") : j || p.log("Not rendered due to ineligibility"), null;
  let eA = 70 + 78 * !!X;
  return (0, a.jsx)(T.A, {
    questOrQuests: i,
    questContent: v.jn.QUEST_BAR_V2,
    overrideVisibility: !z && ee,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    children: (e, t) => (K.current = t.current, (0, a.jsxs)("div", {
      className: U.mask,
      children: [ee && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(B, {
          questId: i.id,
          isExpanded: eo
        }), (0, a.jsx)(F, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !ee,
        onMouseLeave: eP,
        onMouseEnter: eN,
        onFocus: eT,
        onBlur: eO,
        className: l()(U.wrapper, {
          [U.wrapperInvisible]: !ee,
          [U.wrapperVisible]: ee && em
        }),
        style: {
          height: eR.to({
            range: [0, 1],
            output: [0, eA]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: l()(U.contentWrapper, {
            [U.contentWrapperExpanded]: eo,
            [U.contentWrapperAccepted]: Y
          }),
          children: (0, a.jsx)(R.t, {
            springConfig: ew,
            isExpanded: eo,
            children: (0, a.jsx)(w.iQ, {
              expandedContentRef: eh,
              collapsedContentRef: ef,
              expansionSpring: eI,
              children: (0, a.jsxs)(A.g, {
                quest: i,
                taskDetails: eb,
                isExpanded: eo,
                isExpansionAnimationComplete: ed,
                onCtxMenuClose: ey,
                onCtxMenuOpen: ej,
                onCtxMenuSelect: eC,
                onGameSheetOpen: e_,
                onGameSheetClose: eS,
                collapsedHeight: eA,
                children: [(0, a.jsx)(I.Z, {
                  ref: ef,
                  className: U.content,
                  overlayRef: ex
                }, X ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(k.Z, {
                  className: U.content,
                  overlayRef: ex,
                  ref: eh,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(Z.Z, {}), !Y && (0, a.jsx)(P.Z, {})]
                  })
                }), (0, a.jsx)("div", {
                  ref: ex,
                  className: U.overlay
                })]
              })
            })
          })
        })
      })]
    }))
  })
}
let V = 12633 == require.j ? function() {
  let e = (0, Chunk659302.DH)(),
    {
      enabled: t
    } = Chunk937797.nj.getConfig({
      location: Chunk324805.dr.QUESTS_BAR
    });
  return null == module ? null : (0, Chunk54381.jsx)(Chunk455357.x8, {
    source: Chunk324805.dr.QUESTS_BAR,
    questId: module.id,
    listenForSourceError: exports,
    children: (0, Chunk54381.jsx)(G, {
      quest: module
    })
  }, module.id)
} : null