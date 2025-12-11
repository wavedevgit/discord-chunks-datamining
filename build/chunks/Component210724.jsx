/** Chunk was on 23736 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => B,
  Z: () => F
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
  Chunk748962 = require("./748962.js");

function M(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, C.qI)({
    mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
    questContent: v.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  }), null
}

function U() {
  return Chunk473749.useEffect(() => {
    Chunk284298.j.trigger()
  }, []), null
}

function B(e) {
  var t, n;
  let {
    quest: i
  } = e, p = (0, y.T)({
    quest: i,
    location: D.dr.QUESTS_BAR
  }), B = (0, j.Z)({
    location: D.dr.QUESTS_BAR
  }), F = (0, c.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: G,
    reason: V
  } = (0, O.qN)({
    quest: i,
    location: D.dr.QUESTS_BAR
  }), H = (0, c.e7)([m.Z], () => m.Z.useReducedMotion), W = (0, c.e7)([f.Z], () => f.Z.hasLayers()), z = r.useRef(null), q = r.useMemo(() => (0, _.q8)(i), [i]), K = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, Q = (0, u.Z)(K), Y = (null == (n = i.userStatus) ? true : n.completedAt) != null, {
    hasError: X,
    isLoading: J
  } = (0, S.kC)(), $ = r.useContext(R.T) || B && G && !J && !F, ee = r.useRef($), et = r.useRef(false), en = r.useRef(false), [ea, er] = r.useState(false), [ei, el] = r.useState(false), [es, eo] = r.useState(false), [ec, ed] = r.useState(true), [eu, em] = r.useState(true), ep = r.useRef(null), eh = r.useRef(null), ef = r.useRef(null), ex = (0, C.Rf)(i), eb = r.useCallback(e => {
    Y || (ed(false), eo(e))
  }, [Y]), eg = r.useCallback(() => {
    eb(true)
  }, [eb]), ev = r.useCallback(() => {
    er(true)
  }, []), ej = r.useCallback(() => {
    er(false), en.current || Y || eb(false)
  }, [Y, eb]), ey = r.useCallback(() => {
    er(false), Y || eb(false), en.current = false
  }, [Y, eb]), eC = r.useCallback(() => {
    el(true)
  }, []), e_ = r.useCallback(() => {
    el(false), eb(false)
  }, [eb]), eS = r.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (es) return;
    let {
      withDelay: t = false
    } = e;
    t ? et.current = window.setTimeout(eg, 75) : eg()
  }, [eg, es]), eE = r.useCallback(() => {
    eS()
  }, [eS]), eO = r.useCallback(() => {
    window.clearTimeout(et.current), ea || ei || en.current || eb(false)
  }, [ea, ei, eb]), eT = r.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: i.id,
      event: Z.rMx.QUEST_HOVER,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, x._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = z.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), en.current = true, eS({
      withDelay: true
    })
  }, [eS, i]), eN = r.useCallback(() => {
    var e;
    (0, x.dA)({
      questId: i.id,
      event: Z.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: v.jn.QUEST_BAR,
        content_name: (0, x._b)(v.jn.QUEST_BAR),
        impression_id: null == (e = z.current) ? true : e.getId()
      },
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), en.current = false, eO()
  }, [eO, i]);
  r.useEffect(() => {
    ei && eN()
  }, [ei, eN]), r.useLayoutEffect(() => {
    K && !Q && en.current && eg()
  }, [eg, K, Q]), r.useLayoutEffect(() => {
    Y || !K || Q || en.current || eb(false)
  }, [K, Y, Q, eb]), r.useLayoutEffect(() => {
    $ !== ee.current && em(false), ee.current = $
  }, [$]);
  let eP = K ? D.XZ : D.R4,
    [{
      expansionSpring: ew
    }, eI] = (0, d.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eP,
      onRest: () => {
        ed(true)
      },
      onStart: () => {
        ed(false)
      }
    }));
  r.useEffect(() => {
    eI({
      expansionSpring: +!!es,
      immediate: H
    })
  }, [es, eI, H]);
  let {
    visibilitySpring: ek
  } = (0, d.q_F)({
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
      em(true)
    },
    onStart: () => {
      em(false)
    }
  });
  if (r.useEffect(() => {
      q && (0, T.loadVideoQuestModal)()
    }, [q]), r.useEffect(() => {
      if (X) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: "asset_loading_error",
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        }), h.Z.increment({
          name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
          tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"]
        })
      }
    }, [X, i.id]), r.useEffect(() => {
      if (!B) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: "not_eligible_for_quest",
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })
      }
    }, [B, i.id]), r.useEffect(() => {
      if (!$ && eu && !J) {
        var e;
        (0, x.dA)({
          questId: i.id,
          event: Z.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: v.jn.QUEST_BAR,
            content_name: (0, x._b)(v.jn.QUEST_BAR),
            reason: V,
            impression_id: null == (e = z.current) ? true : e.getId()
          },
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })
      }
    }, [$, eu, J, i.id, V]), r.useEffect(() => {
      (!G || F) && b.Z.clearTracking(), $ && eu && !J && !X && B && b.Z.stopTracking(i.id)
    }, [G, F, $, eu, J, X, B, i.id]), !B || !$ && eu && !J || X) return X ? p.log("Not rendered due to asset error") : B || p.log("Not rendered due to ineligibility"), null;
  let eR = 70 + 78 * !!Y;
  return (0, a.jsx)(E.A, {
    questOrQuests: i,
    questContent: v.jn.QUEST_BAR_V2,
    overrideVisibility: !W && $,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    children: (e, t) => (z.current = t.current, (0, a.jsxs)("div", {
      className: L.mask,
      children: [$ && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(M, {
          questId: i.id,
          isExpanded: es
        }), (0, a.jsx)(U, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !$,
        onMouseLeave: eN,
        onMouseEnter: eT,
        onFocus: eE,
        onBlur: eO,
        className: l()(L.wrapper, {
          [L.wrapperInvisible]: !$,
          [L.wrapperVisible]: $ && eu
        }),
        style: {
          height: ek.to({
            range: [0, 1],
            output: [0, eR]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: l()(L.contentWrapper, {
            [L.contentWrapperExpanded]: es,
            [L.contentWrapperAccepted]: K
          }),
          children: (0, a.jsx)(k.t, {
            springConfig: eP,
            isExpanded: es,
            children: (0, a.jsxs)(P.iQ, {
              expandedContentRef: ep,
              collapsedContentRef: eh,
              expansionSpring: ew,
              children: [(0, a.jsx)(w.Z, {
                ref: eh,
                className: L.content,
                expansionSpring: ew,
                isExpanded: es,
                isExpansionAnimationComplete: ec,
                quest: i,
                useReducedMotion: H,
                taskDetails: ex,
                onCtxMenuOpen: ev,
                onCtxMenuClose: ej,
                onCtxMenuSelect: ey,
                overlayRef: ef
              }, Y ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(I.Z, {
                expansionSpring: ew,
                className: L.content,
                collapsedHeight: eR,
                onCtxMenuOpen: ev,
                onCtxMenuClose: ej,
                onCtxMenuSelect: ey,
                onGameSheetOpened: eC,
                onGameSheetClosed: e_,
                overlayRef: ef,
                isExpanded: es,
                isExpansionAnimationComplete: ec,
                quest: i,
                useReducedMotion: H,
                ref: ep,
                taskDetails: ex,
                children: (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(A.Z, {
                    expansionSpring: ew,
                    isExpanded: es
                  }), !K && (0, a.jsx)(N.Z, {
                    quest: i,
                    expansionSpring: ew,
                    useReducedMotion: H,
                    isExpanded: es,
                    isExpansionAnimationComplete: ec,
                    onCtxMenuOpen: ev,
                    onCtxMenuClose: ej,
                    onCtxMenuSelect: ey
                  })]
                })
              }), (0, a.jsx)("div", {
                ref: ef,
                className: L.overlay
              })]
            })
          })
        })
      })]
    }))
  })
}
let F = 12633 == require.j ? function() {
  let e = (0, Chunk659302.DH)();
  return null == module ? null : (0, Chunk54381.jsx)(Chunk455357.x8, {
    source: Chunk324805.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk54381.jsx)(B, {
      quest: module
    })
  }, module.id)
} : null