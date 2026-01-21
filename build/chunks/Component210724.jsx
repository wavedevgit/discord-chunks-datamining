/** Chunk was on 22979 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => L,
  Z: () => U
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk284298 = require("./284298.js"),
  Chunk819640 = require("./819640.js"),
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
  Chunk934738 = require("./934738.js"),
  Chunk324805 = require("./324805.js"),
  Chunk748962 = require("./748962.js");

function D(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, x.qI)({
    mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
    questContent: p.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: p.jn.QUEST_BAR_V2
  }), null
}

function M() {
  return r.useEffect(() => {
    d.j.trigger()
  }, []), null
}

function L(e) {
  var t, n;
  let {
    quest: i
  } = e, d = (0, b.T)({
    quest: i,
    location: A.dr.QUESTS_BAR
  }), h = (0, f.Z)({
    location: A.dr.QUESTS_BAR
  }), L = (0, o.e7)([m.Z], () => null != m.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: U,
    reason: B
  } = (0, y.qN)({
    quest: i,
    location: A.dr.QUESTS_BAR
  }), F = (0, o.e7)([u.Z], () => u.Z.hasLayers()), G = r.useRef(null), V = r.useMemo(() => (0, g.q8)(i), [i]), W = (null == (t = i.userStatus) ? true : t.enrolledAt) != null, z = (0, c.Z)(W), H = (null == (n = i.userStatus) ? true : n.completedAt) != null, {
    hasError: q,
    isLoading: K
  } = (0, v.kC)(), Q = r.useContext(P.T) || h && U && !K && !L, {
    isExpanded: Y,
    setIsExpanded: X,
    expandQuestBar: J,
    isExpansionAnimationComplete: $,
    isVisibilityAnimationAtRest: ee,
    expansionSpring: et,
    visibilitySpring: en,
    springConfig: ea
  } = (0, I.a)({
    isQuestAccepted: W,
    isQuestCompleted: H,
    isQuestBarVisible: Q
  }), {
    handleCtxMenuOpened: er,
    handleCtxMenuClosed: ei,
    handleCtxMenuSelection: el,
    handleGameSheetOpened: es,
    handleGameSheetClosed: eo,
    handleFocusWithoutDelay: ec,
    handleBlur: ed,
    handleMouseEnter: eu,
    handleMouseLeave: em
  } = (0, k.t)({
    quest: i,
    isExpanded: Y,
    setIsExpanded: X,
    expandQuestBar: J,
    isQuestCompleted: H,
    isQuestAccepted: W,
    prevIsQuestAccepted: z,
    impressionRef: G
  });
  (0, R.R)({
    quest: i,
    hasAssetsError: q,
    isEligibleForQuests: h,
    isQuestBarVisible: Q,
    isVisibilityAnimationAtRest: ee,
    isLoadingAssets: K,
    currentQuestVisibleReason: B,
    shouldShowQuestBar: U,
    isQuestEnrollmentBlocked: L,
    impressionRef: G
  });
  let ep = r.useRef(null),
    eh = r.useRef(null),
    ef = r.useRef(null),
    eb = (0, x.Rf)(i);
  if (r.useEffect(() => {
      V && (0, C.loadVideoQuestModal)()
    }, [V]), !h || !Q && ee && !K || q) return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
  let ex = 70 + 78 * !!H;
  return (0, a.jsx)(j.A, {
    questOrQuests: i,
    questContent: p.jn.QUEST_BAR_V2,
    overrideVisibility: !F && Q,
    sourceQuestContent: p.jn.QUEST_BAR_V2,
    children: (e, t) => (G.current = t.current, (0, a.jsxs)("div", {
      className: Z.mask,
      children: [Q && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(D, {
          questId: i.id,
          isExpanded: Y
        }), (0, a.jsx)(M, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !Q,
        onMouseLeave: em,
        onMouseEnter: eu,
        onFocus: ec,
        onBlur: ed,
        className: l()(Z.wrapper, {
          [Z.wrapperInvisible]: !Q,
          [Z.wrapperVisible]: Q && ee
        }),
        style: {
          height: en.to({
            range: [0, 1],
            output: [0, ex]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: l()(Z.contentWrapper, {
            [Z.contentWrapperExpanded]: Y,
            [Z.contentWrapperAccepted]: W
          }),
          children: (0, a.jsx)(O.t, {
            springConfig: ea,
            isExpanded: Y,
            children: (0, a.jsx)(S.iQ, {
              expandedContentRef: ep,
              collapsedContentRef: eh,
              expansionSpring: et,
              children: (0, a.jsxs)(N.g, {
                quest: i,
                taskDetails: eb,
                isExpanded: Y,
                isExpansionAnimationComplete: $,
                onCtxMenuClose: ei,
                onCtxMenuOpen: er,
                onCtxMenuSelect: el,
                onGameSheetOpen: es,
                onGameSheetClose: eo,
                collapsedHeight: ex,
                children: [(0, a.jsx)(E.Z, {
                  ref: eh,
                  className: Z.content,
                  overlayRef: ef
                }, H ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(T.Z, {
                  className: Z.content,
                  overlayRef: ef,
                  ref: ep,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(w.Z, {}), !W && (0, a.jsx)(_.Z, {})]
                  })
                }), (0, a.jsx)("div", {
                  ref: ef,
                  className: Z.overlay
                })]
              })
            })
          })
        })
      })]
    }))
  })
}
let U = 12633 == require.j ? function() {
  let e = (0, y.DH)(),
    {
      enabled: t,
      variant: n
    } = h.nj.getConfig({
      location: A.dr.QUESTS_BAR
    });
  return null == e ? null : (0, a.jsx)(v.x8, {
    source: A.dr.QUESTS_BAR,
    questId: e.id,
    listenForSourceError: t,
    retrySourceLoadOnError: n === h.b2.LISTEN_AND_RETRY_LOADING,
    children: (0, a.jsx)(L, {
      quest: e
    })
  }, e.id)
} : null