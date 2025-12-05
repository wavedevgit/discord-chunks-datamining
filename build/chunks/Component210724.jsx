/** Chunk was on 83615 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => V,
  Z: () => M
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
  Chunk130653 = require("./130653.jsx"),
  Chunk404672 = require("./404672.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");

function Q(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, C.qI)({
    mode: t ? I.NH.EXPANDED : I.NH.COLLAPSED,
    questContent: b.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: b.jn.QUEST_BAR_V2
  }), null
}

function L() {
  return Chunk473749.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function V(e) {
  var t, n;
  let {
    quest: o
  } = e, m = (0, v.T)({
    quest: o,
    location: I.dr.QUESTS_BAR
  }), V = (0, j.Z)({
    location: I.dr.QUESTS_BAR
  }), M = (0, c.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: W,
    reason: Z
  } = (0, S.qN)({
    quest: o,
    location: I.dr.QUESTS_BAR
  }), U = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), H = (0, c.e7)([g.Z], () => g.Z.hasLayers()), z = s.useRef(null), G = s.useMemo(() => (0, y.q8)(o), [o]), F = (null == (t = o.userStatus) ? true : t.enrolledAt) != null, K = (0, d.Z)(F), X = (null == (n = o.userStatus) ? true : n.completedAt) != null, {
    hasError: Y,
    isLoading: J
  } = (0, E.kC)(), $ = s.useContext(B.T) || V && W && !J && !M, ee = s.useRef($), et = s.useRef(false), en = s.useRef(false), [er, es] = s.useState(false), [eo, ea] = s.useState(false), [ei, el] = s.useState(false), [ec, eu] = s.useState(true), [ed, ep] = s.useState(true), em = s.useRef(null), ef = s.useRef(null), eg = s.useRef(null), ex = (0, C.Rf)(o), eh = s.useCallback(e => {
    X || (eu(false), el(e))
  }, [X]), e_ = s.useCallback(() => {
    eh(true)
  }, [eh]), eb = s.useCallback(() => {
    es(true)
  }, []), ej = s.useCallback(() => {
    es(false), en.current || X || eh(false)
  }, [X, eh]), ev = s.useCallback(() => {
    es(false), X || eh(false), en.current = false
  }, [X, eh]), eC = s.useCallback(() => {
    ea(true)
  }, []), ey = s.useCallback(() => {
    ea(false), eh(false)
  }, [eh]), eE = s.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ei) return;
    let {
      withDelay: t = false
    } = e;
    t ? et.current = window.setTimeout(e_, 75) : e_()
  }, [e_, ei]), eO = s.useCallback(() => {
    eE()
  }, [eE]), eS = s.useCallback(() => {
    window.clearTimeout(et.current), er || eo || en.current || eh(false)
  }, [er, eo, eh]), eT = s.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: o.id,
      event: D.rMx.QUEST_HOVER,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, x._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = z.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), en.current = true, eE({
      withDelay: true
    })
  }, [eE, o]), ew = s.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: o.id,
      event: D.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, x._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = z.current) ? true : e.getId()
      },
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), en.current = false, eS()
  }, [eS, o]);
  s.useEffect(() => {
    eo && ew()
  }, [eo, ew]), s.useLayoutEffect(() => {
    F && !K && en.current && e_()
  }, [e_, F, K]), s.useLayoutEffect(() => {
    X || !F || K || en.current || eh(false)
  }, [F, X, K, eh]), s.useLayoutEffect(() => {
    $ !== ee.current && ep(false), ee.current = $
  }, [$]);
  let eP = F ? I.XZ : I.R4,
    [{
      expansionSpring: eN
    }, eR] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eP,
      onRest: () => {
        eu(true)
      },
      onStart: () => {
        eu(false)
      }
    }));
  s.useEffect(() => {
    eR({
      expansionSpring: +!!ei,
      immediate: U
    })
  }, [ei, eR, U]);
  let {
    visibilitySpring: eA
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
      ep(true)
    },
    onStart: () => {
      ep(false)
    }
  });
  if (s.useEffect(() => {
      G && (0, T.loadVideoQuestModal)()
    }, [G]), s.useEffect(() => {
      if (Y) {
        var e;
        (0, x.dA)({
          questId: o.id,
          event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, x._b)(b.jn.QUEST_BAR),
            reason: "asset_loading_error",
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        }), f.Z.increment({
          name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
          tags: ["quest_id:".concat(o.id), "reason:asset_loading_error"]
        })
      }
    }, [Y, o.id]), s.useEffect(() => {
      if (!V) {
        var e;
        (0, x.dA)({
          questId: o.id,
          event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, x._b)(b.jn.QUEST_BAR),
            reason: "not_eligible_for_quest",
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        })
      }
    }, [V, o.id]), s.useEffect(() => {
      if (!$ && ed && !J) {
        var e;
        (0, x.dA)({
          questId: o.id,
          event: D.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, x._b)(b.jn.QUEST_BAR),
            reason: Z,
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        })
      }
    }, [$, ed, J, o.id, Z]), s.useEffect(() => {
      (!W || M) && h.Z.clearTracking(), $ && ed && !J && !Y && V && h.Z.stopTracking(o.id)
    }, [W, M, $, ed, J, Y, V, o.id]), !V || !$ && ed && !J || Y) return Y ? m.log("Not rendered due to asset error") : V || m.log("Not rendered due to ineligibility"), null;
  let eB = 70 + 78 * !!X;
  return (0, r.jsx)(O.A, {
    questOrQuests: o,
    questContent: b.jn.QUEST_BAR_V2,
    overrideVisibility: !H && $,
    sourceQuestContent: b.jn.QUEST_BAR_V2,
    children: (e, t) => (z.current = t.current, (0, r.jsxs)("div", {
      className: q.mask,
      children: [$ && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(Q, {
          questId: o.id,
          isExpanded: ei
        }), (0, r.jsx)(L, {})]
      }), (0, r.jsx)(i.animated.div, {
        "aria-hidden": !$,
        onMouseLeave: ew,
        onMouseEnter: eT,
        onFocus: eO,
        onBlur: eS,
        className: a()(q.wrapper, {
          [q.wrapperInvisible]: !$,
          [q.wrapperVisible]: $ && ed
        }),
        style: {
          height: eA.to({
            range: [0, 1],
            output: [0, eB]
          })
        },
        children: (0, r.jsx)(i.animated.div, {
          className: a()(q.contentWrapper, {
            [q.contentWrapperExpanded]: ei,
            [q.contentWrapperAccepted]: F
          }),
          children: (0, r.jsx)(A.t, {
            springConfig: eP,
            isExpanded: ei,
            children: (0, r.jsxs)(P.iQ, {
              expandedContentRef: em,
              collapsedContentRef: ef,
              expansionSpring: eN,
              children: [(0, r.jsx)(N.Z, {
                ref: ef,
                className: q.content,
                expansionSpring: eN,
                isExpanded: ei,
                isExpansionAnimationComplete: ec,
                quest: o,
                useReducedMotion: U,
                taskDetails: ex,
                onCtxMenuOpen: eb,
                onCtxMenuClose: ej,
                onCtxMenuSelect: ev,
                overlayRef: eg
              }, X ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, r.jsx)(R.Z, {
                expansionSpring: eN,
                className: q.content,
                collapsedHeight: eB,
                onCtxMenuOpen: eb,
                onCtxMenuClose: ej,
                onCtxMenuSelect: ev,
                onGameSheetOpened: eC,
                onGameSheetClosed: ey,
                overlayRef: eg,
                isExpanded: ei,
                isExpansionAnimationComplete: ec,
                quest: o,
                useReducedMotion: U,
                ref: em,
                taskDetails: ex,
                children: (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)(k.Z, {
                    expansionSpring: eN,
                    isExpanded: ei
                  }), !F && (0, r.jsx)(w.Z, {
                    quest: o,
                    expansionSpring: eN,
                    useReducedMotion: U,
                    isExpanded: ei,
                    isExpansionAnimationComplete: ec,
                    onCtxMenuOpen: eb,
                    onCtxMenuClose: ej,
                    onCtxMenuSelect: ev
                  })]
                })
              }), (0, r.jsx)("div", {
                ref: eg,
                className: q.overlay
              })]
            })
          })
        })
      })]
    }))
  })
}
let M = 12633 == require.j ? function() {
  let e = (0, Chunk659302.DH)();
  return null == module ? null : (0, Chunk54381.jsx)(Chunk455357.x8, {
    source: Chunk324805.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk54381.jsx)(V, {
      quest: module
    })
  }, module.id)
} : null