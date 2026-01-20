/** Chunk was on 22979 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => G,
  Z: () => V
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
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
  Chunk940419 = require("./940419.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk748962 = require("./748962.js");

function B(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, y.qI)({
    mode: t ? M.NH.EXPANDED : M.NH.COLLAPSED,
    questContent: x.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: x.jn.QUEST_BAR_V2
  }), null
}

function F() {
  return r.useEffect(() => {
    u.j.trigger()
  }, []), null
}

function G(e) {
  var t, n;
  let {
    quest: i
  } = e, u = (0, j.T)({
    quest: i,
    location: M.dr.QUESTS_BAR
  }), g = (0, v.Z)({
    location: M.dr.QUESTS_BAR
  }), G = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: V,
    reason: W
  } = (0, E.qN)({
    quest: i,
    location: M.dr.QUESTS_BAR
  }), z = (0, c.e7)([p.Z], () => p.Z.hasLayers()), H = r.useRef(null), q = r.useMemo(() => (0, C.q8)(i), [i]), K = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, Q = (0, d.Z)(K), Y = (null == (n = i.userStatus) ? true : n.completedAt) != null, {
    hasError: X,
    isLoading: J
  } = (0, _.kC)(), $ = r.useContext(R.T) || g && V && !J && !G, {
    isExpanded: ee,
    setIsExpanded: et,
    expandQuestBar: en,
    isExpansionAnimationComplete: ea,
    isVisibilityAnimationAtRest: er,
    expansionSpring: ei,
    visibilitySpring: el,
    springConfig: es
  } = (0, Z.a)({
    isQuestAccepted: K,
    isQuestCompleted: Y,
    isQuestBarVisible: $
  }), {
    handleCtxMenuOpened: eo,
    handleCtxMenuClosed: ec,
    handleCtxMenuSelection: ed,
    handleGameSheetOpened: eu,
    handleGameSheetClosed: em,
    handleFocusWithoutDelay: ep,
    handleBlur: eh,
    handleMouseEnter: ef,
    handleMouseLeave: eb
  } = (0, D.t)({
    quest: i,
    isExpanded: ee,
    setIsExpanded: et,
    expandQuestBar: en,
    isQuestCompleted: Y,
    isQuestAccepted: K,
    prevIsQuestAccepted: Q,
    impressionRef: H
  }), ex = r.useRef(null), eg = r.useRef(null), ev = r.useRef(null), ej = (0, y.Rf)(i);
  if (r.useEffect(() => {
      q && (0, T.loadVideoQuestModal)()
    }, [q]), r.useEffect(() => {
      if (X) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: x.jn.QUEST_BAR,
            content_name: (0, h._b)(x.jn.QUEST_BAR),
            reason: "asset_loading_error",
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: x.jn.QUEST_BAR_V2
        }), m.Z.increment({
          name: o.V.QUEST_CONTENT_RENDERING_FAILURE,
          tags: ["quest_id:".concat(i.id), "reason:asset_loading_error"]
        })
      }
    }, [X, i.id]), r.useEffect(() => {
      if (!g) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: x.jn.QUEST_BAR,
            content_name: (0, h._b)(x.jn.QUEST_BAR),
            reason: "not_eligible_for_quest",
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: x.jn.QUEST_BAR_V2
        })
      }
    }, [g, i.id]), r.useEffect(() => {
      if (!$ && er && !J) {
        var e;
        (0, h.dA)({
          questId: i.id,
          event: L.rMx.QUEST_CONTENT_RENDERING_FAILURE,
          properties: {
            content_id: x.jn.QUEST_BAR,
            content_name: (0, h._b)(x.jn.QUEST_BAR),
            reason: W,
            impression_id: null == (e = H.current) ? true : e.getId()
          },
          sourceQuestContent: x.jn.QUEST_BAR_V2
        })
      }
    }, [$, er, J, i.id, W]), r.useEffect(() => {
      (!V || G) && f.Z.clearTracking(), $ && er && !J && !X && g && f.Z.stopTracking(i.id)
    }, [V, G, $, er, J, X, g, i.id]), !g || !$ && er && !J || X) return X ? u.log("Not rendered due to asset error") : g || u.log("Not rendered due to ineligibility"), null;
  let ey = 70 + 78 * !!Y;
  return (0, a.jsx)(S.A, {
    questOrQuests: i,
    questContent: x.jn.QUEST_BAR_V2,
    overrideVisibility: !z && $,
    sourceQuestContent: x.jn.QUEST_BAR_V2,
    children: (e, t) => (H.current = t.current, (0, a.jsxs)("div", {
      className: U.mask,
      children: [$ && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(B, {
          questId: i.id,
          isExpanded: ee
        }), (0, a.jsx)(F, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !$,
        onMouseLeave: eb,
        onMouseEnter: ef,
        onFocus: ep,
        onBlur: eh,
        className: l()(U.wrapper, {
          [U.wrapperInvisible]: !$,
          [U.wrapperVisible]: $ && er
        }),
        style: {
          height: el.to({
            range: [0, 1],
            output: [0, ey]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: l()(U.contentWrapper, {
            [U.contentWrapperExpanded]: ee,
            [U.contentWrapperAccepted]: K
          }),
          children: (0, a.jsx)(I.t, {
            springConfig: es,
            isExpanded: ee,
            children: (0, a.jsx)(N.iQ, {
              expandedContentRef: ex,
              collapsedContentRef: eg,
              expansionSpring: ei,
              children: (0, a.jsxs)(k.g, {
                quest: i,
                taskDetails: ej,
                isExpanded: ee,
                isExpansionAnimationComplete: ea,
                onCtxMenuClose: ec,
                onCtxMenuOpen: eo,
                onCtxMenuSelect: ed,
                onGameSheetOpen: eu,
                onGameSheetClose: em,
                collapsedHeight: ey,
                children: [(0, a.jsx)(P.Z, {
                  ref: eg,
                  className: U.content,
                  overlayRef: ev
                }, Y ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(w.Z, {
                  className: U.content,
                  overlayRef: ev,
                  ref: ex,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(A.Z, {}), !K && (0, a.jsx)(O.Z, {})]
                  })
                }), (0, a.jsx)("div", {
                  ref: ev,
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
  let e = (0, E.DH)(),
    {
      enabled: t,
      variant: n
    } = g.nj.getConfig({
      location: M.dr.QUESTS_BAR
    });
  return null == e ? null : (0, a.jsx)(_.x8, {
    source: M.dr.QUESTS_BAR,
    questId: e.id,
    listenForSourceError: t,
    retrySourceLoadOnError: n === g.b2.LISTEN_AND_RETRY_LOADING,
    children: (0, a.jsx)(G, {
      quest: e
    })
  }, e.id)
} : null