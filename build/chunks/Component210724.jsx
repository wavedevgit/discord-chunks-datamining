/** Chunk was on 22979 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => F,
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
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
  Chunk602667 = require("./602667.js"),
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
  Chunk389012 = require("./389012.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk748962 = require("./748962.js");

function U(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, y.qI)({
    mode: t ? D.NH.EXPANDED : D.NH.COLLAPSED,
    questContent: b.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: b.jn.QUEST_BAR_V2
  }), null
}

function B() {
  return r.useEffect(() => {
    u.j.trigger()
  }, []), null
}

function F(e) {
  var t, n;
  let {
    quest: i
  } = e, u = (0, j.T)({
    quest: i,
    location: D.dr.QUESTS_BAR
  }), g = (0, v.Z)({
    location: D.dr.QUESTS_BAR
  }), F = (0, c.e7)([x.Z], () => null != x.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: G,
    reason: V
  } = (0, E.qN)({
    quest: i,
    location: D.dr.QUESTS_BAR
  }), z = (0, c.e7)([p.Z], () => p.Z.hasLayers()), H = r.useRef(null), W = r.useMemo(() => (0, C.q8)(i), [i]), K = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, q = (0, d.Z)(K), Q = (null == (n = i.userStatus) ? true : n.completedAt) != null, {
    hasError: Y,
    isLoading: X
  } = (0, _.kC)(), J = r.useContext(R.T) || g && G && !X && !F, {
    isExpanded: $,
    setIsExpanded: ee,
    expandQuestBar: et,
    isExpansionAnimationComplete: en,
    isVisibilityAnimationAtRest: ea,
    expansionSpring: er,
    visibilitySpring: ei,
    springConfig: el
  } = (0, Z.a)({
    isQuestAccepted: K,
    isQuestCompleted: Q,
    isQuestBarVisible: J
  }), es = r.useRef(false), eo = r.useRef(false), [ec, ed] = r.useState(false), [eu, em] = r.useState(false), ep = r.useRef(null), eh = r.useRef(null), ef = r.useRef(null), ex = (0, y.Rf)(i), eb = r.useCallback(() => {
    ed(true)
  }, []), eg = r.useCallback(() => {
    ed(false), eo.current || Q || ee(false)
  }, [Q, ee]), ev = r.useCallback(() => {
    ed(false), Q || ee(false), eo.current = false
  }, [Q, ee]), ej = r.useCallback(() => {
    em(true)
  }, []), ey = r.useCallback(() => {
    em(false), ee(false)
  }, [ee]), eC = r.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if ($) return;
    let {
      withDelay: t = false
    } = e;
    t ? es.current = window.setTimeout(et, 75) : et()
  }, [et, $]), e_ = r.useCallback(() => {
    eC()
  }, [eC]), eS = r.useCallback(() => {
    window.clearTimeout(es.current), ec || eu || eo.current || ee(false)
  }, [ec, eu, ee]), eE = r.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: i.id,
      event: L.rMx.QUEST_HOVER,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, h._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), eo.current = true, eC({
      withDelay: true
    })
  }, [eC, i]), eT = r.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: i.id,
      event: L.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: b.jn.QUEST_BAR,
        content_name: (0, h._b)(b.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      sourceQuestContent: b.jn.QUEST_BAR_V2
    }), eo.current = false, eS()
  }, [eS, i]);
  if (r.useEffect(() => {
      eu && eT()
    }, [eu, eT]), r.useLayoutEffect(() => {
      K && !q && eo.current && et()
    }, [et, K, q]), r.useLayoutEffect(() => {
      Q || !K || q || eo.current || ee(false)
    }, [K, Q, q, ee]), r.useEffect(() => {
      W && (0, T.loadVideoQuestModal)()
    }, [W]), r.useEffect(() => {
      if (Y) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, h._b)(b.jn.QUEST_BAR),
            reason: "asset_loading_error",
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        }), m.Z.increment({
          name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
          tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"]
        })
      }
    }, [Y, i.id]), r.useEffect(() => {
      if (!g) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, h._b)(b.jn.QUEST_BAR),
            reason: "not_eligible_for_quest",
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        })
      }
    }, [g, i.id]), r.useEffect(() => {
      if (!J && ea && !X) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: b.jn.QUEST_BAR,
            content_name: (0, h._b)(b.jn.QUEST_BAR),
            reason: V,
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: b.jn.QUEST_BAR_V2
        })
      }
    }, [J, ea, X, i.id, V]), r.useEffect(() => {
      (!G || F) && f.Z.clearTracking(), J && ea && !X && !Y && g && f.Z.stopTracking(i.id)
    }, [G, F, J, ea, X, Y, g, i.id]), !g || !J && ea && !X || Y) return Y ? u.log("Not rendered due to asset error") : g || u.log("Not rendered due to ineligibility"), null;
  let eO = 70 + 78 * !!Q;
  return (0, a.jsx)(S.A, {
    questOrQuests: i,
    questContent: b.jn.QUEST_BAR_V2,
    overrideVisibility: !z && J,
    sourceQuestContent: b.jn.QUEST_BAR_V2,
    children: (e, t) => (H.current = t.current, (0, a.jsxs)("div", {
      className: M.mask,
      children: [J && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(U, {
          questId: i.id,
          isExpanded: $
        }), (0, a.jsx)(B, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !J,
        onMouseLeave: eT,
        onMouseEnter: eE,
        onFocus: e_,
        onBlur: eS,
        className: l()(M.wrapper, {
          [M.wrapperInvisible]: !J,
          [M.wrapperVisible]: J && ea
        }),
        style: {
          height: ei.to({
            range: [0, 1],
            output: [0, eO]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: l()(M.contentWrapper, {
            [M.contentWrapperExpanded]: $,
            [M.contentWrapperAccepted]: K
          }),
          children: (0, a.jsx)(I.t, {
            springConfig: el,
            isExpanded: $,
            children: (0, a.jsx)(N.iQ, {
              expandedContentRef: ep,
              collapsedContentRef: eh,
              expansionSpring: er,
              children: (0, a.jsxs)(k.g, {
                quest: i,
                taskDetails: ex,
                isExpanded: $,
                isExpansionAnimationComplete: en,
                onCtxMenuClose: eg,
                onCtxMenuOpen: eb,
                onCtxMenuSelect: ev,
                onGameSheetOpen: ej,
                onGameSheetClose: ey,
                collapsedHeight: eO,
                children: [(0, a.jsx)(P.Z, {
                  ref: eh,
                  className: M.content,
                  overlayRef: ef
                }, Q ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(w.Z, {
                  className: M.content,
                  overlayRef: ef,
                  ref: ep,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(A.Z, {}), !K && (0, a.jsx)(O.Z, {})]
                  })
                }), (0, a.jsx)("div", {
                  ref: ef,
                  className: M.overlay
                })]
              })
            })
          })
        })
      })]
    }))
  })
}
let G = 12633 == require.j ? function() {
  let e = (0, E.DH)(),
    {
      enabled: t,
      variant: n
    } = g.nj.getConfig({
      location: D.dr.QUESTS_BAR
    });
  return null == e ? null : (0, a.jsx)(_.x8, {
    source: D.dr.QUESTS_BAR,
    questId: e.id,
    listenForSourceError: t,
    retrySourceLoadOnError: n === g.b2.LISTEN_AND_RETRY_LOADING,
    children: (0, a.jsx)(F, {
      quest: e
    })
  }, e.id)
} : null