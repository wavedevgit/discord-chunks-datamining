/** Chunk was on 9885 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => k,
  Z: () => q
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk819640 = require("./819640.js"),
  Chunk617136 = require("./617136.js"),
  Chunk823289 = require("./823289.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk381176 = require("./381176.js"),
  Chunk16868 = require("./16868.js"),
  Chunk977156 = require("./977156.js"),
  Chunk5881 = require("./5881.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk130653 = require("./130653.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");

function B(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, x.qI)({
    mode: t ? A.NH.EXPANDED : A.NH.COLLAPSED,
    questContent: j.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: j.jn.QUEST_BAR_V2
  }), null
}

function k(e) {
  var t, n;
  let {
    quest: o
  } = e, x = (0, C.T)({
    quest: o,
    location: A.dr.QUESTS_BAR
  }), k = (0, v.Zy)({
    location: A.dr.QUESTS_BAR
  }), q = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: I,
    reason: Q
  } = (0, S.qN)({
    quest: o,
    location: A.dr.QUESTS_BAR
  }), D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), V = (0, l.e7)([p.Z], () => p.Z.hasLayers()), M = s.useRef(null), L = s.useMemo(() => (0, f.q8)(o), [o]), Z = (null == (t = o.userStatus) ? true : t.enrolledAt) != null, W = (0, u.Z)(Z), U = (null == (n = o.userStatus) ? true : n.completedAt) != null, H = (0, u.Z)(U), {
    hasError: F,
    isLoading: z
  } = (0, E.d7)(), X = s.useContext(P.T) || k && I && !z && !q, K = s.useRef(X), Y = (0, w.B)(o, X && !F), G = s.useRef(false), J = s.useRef(false), $ = _.H.useConfig({
    location: A.dr.QUESTS_BAR
  }).enabled && U, [ee, et] = s.useState(false), [en, er] = s.useState(false), [es, eo] = s.useState(true), [ea, ei] = s.useState(true), [el, ec] = s.useState(Y.preEnrollmentExpandedHeight), eu = s.useRef(null), ed = s.useCallback(e => {
    $ || (eo(false), er(e))
  }, [$]), ep = s.useCallback(() => {
    var e, t;
    ec((null != (t = null == (e = eu.current) ? true : e.offsetHeight) ? t : 84) + 2 * Y.paddingVertical)
  }, [Y.paddingVertical]), em = s.useCallback(() => {
    ep(), ed(true)
  }, [ep, ed]), eg = s.useCallback(() => {
    et(true)
  }, []), ef = s.useCallback(() => {
    et(false), J.current || U || ed(false)
  }, [U, ed]), ex = s.useCallback(() => {
    et(false), U || ed(false), J.current = false
  }, [U, ed]), eh = s.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (en) return;
    let {
      withDelay: t = false
    } = e;
    t ? G.current = window.setTimeout(em, 75) : em()
  }, [em, en]), ej = s.useCallback(() => {
    eh()
  }, [eh]), eb = s.useCallback(() => {
    window.clearTimeout(G.current), Y.canCollapseOnBlur && !ee && (J.current || ed(false))
  }, [ee, Y, ed]), e_ = s.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_HOVER,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = M.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: Y.trackingCtx.content
    }), J.current = true, eh({
      withDelay: true
    })
  }, [eh, o, Y.trackingCtx.content]), ev = s.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = M.current) ? true : e.getId()
      },
      sourceQuestContent: Y.trackingCtx.content
    }), J.current = false, eb()
  }, [eb, o, Y.trackingCtx.content]);
  s.useLayoutEffect(() => {
    U && Y.shouldExpandOnQuestComplete && em()
  }, [em, U, Y.shouldExpandOnQuestComplete]), s.useLayoutEffect(() => {
    Z && !W && J.current && em()
  }, [em, Z, W]), s.useLayoutEffect(() => {
    U || !Z || W || J.current || ed(false)
  }, [Z, U, W, ed]), s.useLayoutEffect(() => {
    X !== K.current && ei(false), K.current = X
  }, [X]);
  let eC = Z ? A.XZ : A.R4,
    [{
      expansionSpring: ey
    }, eO] = (0, c.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eC,
      onRest: () => {
        eo(true)
      },
      onStart: () => {
        eo(false)
      }
    }));
  s.useEffect(() => {
    eO({
      expansionSpring: +!!en,
      immediate: D
    })
  }, [en, eO, D]);
  let {
    visibilitySpring: eE
  } = (0, c.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!X
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      ei(true)
    },
    onStart: () => {
      ei(false)
    }
  });
  s.useEffect(() => {
    L && (0, O.loadVideoQuestModal)()
  }, [L]), s.useLayoutEffect(() => {
    U && !H && Y.canCollapseOnBlur && ep()
  }, [U, em, Y.canCollapseOnBlur, ep, H]), s.useEffect(() => {
    var e, t;
    F && (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        reason: "asset_loading_error",
        impression_id: null == (e = M.current) ? true : e.getId()
      },
      sourceQuestContent: Y.trackingCtx.content
    }), k || (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        reason: "not_eligible_for_quest",
        impression_id: null == (t = M.current) ? true : t.getId()
      },
      sourceQuestContent: Y.trackingCtx.content
    })
  }, [F, k, o.id, Y.trackingCtx.content]), s.useEffect(() => {
    if (!X && ea && !z) {
      var e;
      (0, m.dA)({
        questId: o.id,
        event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: j.jn.QUEST_BAR,
          content_name: (0, m._b)(j.jn.QUEST_BAR),
          reason: Q,
          impression_id: null == (e = M.current) ? true : e.getId()
        },
        sourceQuestContent: Y.trackingCtx.content
      })
    }
  }, [X, ea, z, o.id, Q, Y.trackingCtx.content]), s.useEffect(() => {
    (!I || q) && g.Z.clearTracking(), X && ea && !z && !F && k && g.Z.stopTracking(o.id)
  }, [I, q, X, ea, z, F, k, o.id]);
  let eS = (0, b.h)({
    location: A.dr.QUESTS_BAR,
    questConfig: o.config
  });
  if (!k || !X && ea && !z || F) return F ? x.log("Not rendered due to asset error") : k || x.log("Not rendered due to ineligibility"), null;
  let eT = 70 + 78 * !!$;
  return (0, r.jsx)(y.A, {
    questOrQuests: o,
    questContent: Y.trackingCtx.content,
    overrideVisibility: !V && X,
    sourceQuestContent: Y.trackingCtx.content,
    children: (e, t) => {
      let n = Y.component;
      return M.current = t.current, (0, r.jsxs)("div", {
        className: R.mask,
        children: [X && (0, r.jsx)(B, {
          questId: o.id,
          isExpanded: en
        }), (0, r.jsx)(i.animated.div, {
          "aria-hidden": !X,
          onMouseLeave: ev,
          onMouseEnter: e_,
          onFocus: ej,
          onBlur: eb,
          className: a()(R.wrapper, {
            [R.wrapperInvisible]: !X,
            [R.wrapperVisible]: X && ea
          }),
          style: {
            color: eS ? true : o.config.colors.secondary,
            height: eE.to({
              range: [0, 1],
              output: [0, !Y.canCollapseOnBlur && en ? el : eT]
            })
          },
          children: (0, r.jsx)(i.animated.div, {
            className: a()(R.contentWrapper, {
              [R.contentWrapperExpanded]: en,
              [R.contentWrapperAccepted]: Z,
              [R.contentWrapperBrandColorRemoval]: eS
            }),
            style: {
              backgroundColor: eS ? true : Y.preEnrollmentBackgroundColor,
              backgroundImage: Z && !eS ? Y.postEnrollmentBackgroundImage : true
            },
            children: (0, r.jsx)(T.t, {
              springConfig: eC,
              isExpanded: en,
              children: (0, r.jsx)(n, {
                expandedContentRef: eu,
                expansionSpring: ey,
                isExpanded: en,
                isExpansionAnimationComplete: es,
                onCtxMenuClosed: ef,
                onCtxMenuOpened: eg,
                onCtxMenuSelection: ex,
                quest: o,
                useReducedMotion: D,
                collapsedHeight: eT,
                shouldShowRewardsCTAWhenCollapsed: $
              })
            })
          })
        })]
      })
    }
  })
}
let q = 12633 == require.j ? function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : (0, Chunk255367.jsx)(Chunk78826.p, {
    source: Chunk46140.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk255367.jsx)(k, {
      quest: module
    })
  }, module.id)
} : null