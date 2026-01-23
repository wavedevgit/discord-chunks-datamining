/** Chunk was on 22477 **/
/** chunk id: 947926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => B,
  Y: () => U
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk676594 = require("./676594.js"),
  Chunk186111 = require("./186111.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk245853 = require("./245853.js"),
  Chunk677402 = require("./677402.js"),
  Chunk943849 = require("./943849.js"),
  Chunk890687 = require("./890687.js"),
  Chunk792620 = require("./792620.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk73473 = require("./73473.js"),
  Chunk201805 = require("./201805.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk139210 = require("./139210.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk818276 = require("./818276.jsx"),
  Chunk742860 = require("./742860.jsx"),
  Chunk783569 = require("./783569.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk717695 = require("./717695.jsx"),
  Chunk899592 = require("./899592.jsx"),
  Chunk546350 = require("./546350.js"),
  Chunk922532 = require("./922532.js"),
  Chunk20732 = require("./20732.js"),
  Chunk654487 = require("./654487.js"),
  Chunk419548 = require("./419548.js");

function M(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, f.H6)({
    mode: t ? R.fP.EXPANDED : R.fP.COLLAPSED,
    questContent: p.uF.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: p.uF.QUEST_BAR_V2
  }), null
}

function L() {
  return l.useEffect(() => {
    d.l.trigger()
  }, []), null
}

function U(e) {
  var t, n;
  let {
    quest: r
  } = e, d = (0, g.L)({
    quest: r,
    location: R.rE.QUESTS_BAR
  }), h = (0, x.H)({
    location: R.rE.QUESTS_BAR
  }), U = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil), {
    isQuestBarVisible: B,
    reason: G
  } = (0, _.TQ)({
    quest: r,
    location: R.rE.QUESTS_BAR
  }), F = (0, o.bG)([u.A], () => u.A.hasLayers()), V = l.useRef(null), W = l.useMemo(() => (0, b.vv)(r), [r]), H = (null == (t = r.userStatus) ? true : t.enrolledAt) != null, K = (0, c.A)(H), z = (null == (n = r.userStatus) ? true : n.completedAt) != null, {
    hasError: q,
    isLoading: Q
  } = (0, v.Gk)(), Y = l.useContext(N.Z) || h && B && !Q && !U, {
    isExpanded: J,
    setIsExpanded: X,
    expandQuestBar: Z,
    isExpansionAnimationComplete: $,
    isVisibilityAnimationAtRest: ee,
    expansionSpring: et,
    visibilitySpring: en,
    springConfig: ea
  } = (0, I.w)({
    isQuestAccepted: H,
    isQuestCompleted: z,
    isQuestBarVisible: Y
  }), {
    handleCtxMenuOpened: el,
    handleCtxMenuClosed: er,
    handleCtxMenuSelection: ei,
    handleGameSheetOpened: es,
    handleGameSheetClosed: eo,
    handleFocusWithoutDelay: ec,
    handleBlur: ed,
    handleMouseEnter: eu,
    handleMouseLeave: em
  } = (0, k.m)({
    quest: r,
    isExpanded: J,
    setIsExpanded: X,
    expandQuestBar: Z,
    isQuestCompleted: z,
    isQuestAccepted: H,
    prevIsQuestAccepted: K,
    impressionRef: V
  });
  (0, P.S)({
    quest: r,
    hasAssetsError: q,
    isEligibleForQuests: h,
    isQuestBarVisible: Y,
    isVisibilityAnimationAtRest: ee,
    isLoadingAssets: Q,
    currentQuestVisibleReason: G,
    shouldShowQuestBar: B,
    isQuestEnrollmentBlocked: U,
    impressionRef: V
  });
  let ep = l.useRef(null),
    eh = l.useRef(null),
    ex = l.useRef(null),
    eg = (0, f.fc)(r);
  if (l.useEffect(() => {
      W && (0, y.l9)()
    }, [W]), !h || !Y && ee && !Q || q) return q ? d.log("Not rendered due to asset error") : h || d.log("Not rendered due to ineligibility"), null;
  let ef = 70 + 78 * !!z;
  return (0, a.jsx)(j.R, {
    questOrQuests: r,
    questContent: p.uF.QUEST_BAR_V2,
    overrideVisibility: !F && Y,
    sourceQuestContent: p.uF.QUEST_BAR_V2,
    children: (e, t) => (V.current = t.current, (0, a.jsxs)("div", {
      className: D.dK,
      children: [Y && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(M, {
          questId: r.id,
          isExpanded: J
        }), (0, a.jsx)(L, {})]
      }), (0, a.jsx)(s.animated.div, {
        "aria-hidden": !Y,
        onMouseLeave: em,
        onMouseEnter: eu,
        onFocus: ec,
        onBlur: ed,
        className: i()(D.iE, {
          [D.Xc]: !Y,
          [D.uv]: Y && ee
        }),
        style: {
          height: en.to({
            range: [0, 1],
            output: [0, ef]
          })
        },
        children: (0, a.jsx)(s.animated.div, {
          className: i()(D.FG, {
            [D.E$]: J,
            [D.KA]: H
          }),
          children: (0, a.jsx)(E.R, {
            springConfig: ea,
            isExpanded: J,
            children: (0, a.jsx)(C.oK, {
              expandedContentRef: ep,
              collapsedContentRef: eh,
              expansionSpring: et,
              children: (0, a.jsxs)(T.C, {
                quest: r,
                taskDetails: eg,
                isExpanded: J,
                isExpansionAnimationComplete: $,
                onCtxMenuClose: er,
                onCtxMenuOpen: el,
                onCtxMenuSelect: ei,
                onGameSheetOpen: es,
                onGameSheetClose: eo,
                collapsedHeight: ef,
                children: [(0, a.jsx)(S.A, {
                  ref: eh,
                  className: D.Qs,
                  overlayRef: ex
                }, z ? "collapsed-with-rewards" : "collapsed-without-rewards"), (0, a.jsx)(O.A, {
                  className: D.Qs,
                  overlayRef: ex,
                  ref: ep,
                  children: (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(w.A, {}), !H && (0, a.jsx)(A.A, {})]
                  })
                }), (0, a.jsx)("div", {
                  ref: ex,
                  className: D.Lw
                })]
              })
            })
          })
        })
      })]
    }))
  })
}
let B = 21552 == require.j ? function() {
  let e = (0, _.dN)(),
    {
      enabled: t,
      variant: n
    } = h.qd.getConfig({
      location: R.rE.QUESTS_BAR
    });
  return null == e ? null : (0, a.jsx)(v.jY, {
    source: R.rE.QUESTS_BAR,
    questId: e.id,
    listenForSourceError: t,
    retrySourceLoadOnError: n === h.LO.LISTEN_AND_RETRY_LOADING,
    children: (0, a.jsx)(U, {
      quest: e
    })
  }, e.id)
} : null