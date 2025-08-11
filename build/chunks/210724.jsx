/** Chunk was on 37082 **/
/** chunk id: 210724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => B,
  Z: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
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
  Chunk977156 = require("./977156.js"),
  Chunk5881 = require("./5881.js"),
  Chunk602667 = require("./602667.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk667105 = require("./667105.js"),
  Chunk693900 = require("./693900.js"),
  Chunk617889 = require("./617889.js"),
  Chunk130653 = require("./130653.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk414444 = require("./414444.js");

function R(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, x.qI)({
    mode: t ? P.NH.EXPANDED : P.NH.COLLAPSED,
    questContent: j.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: j.jn.QUEST_BAR_V2
  }), null
}

function B(e) {
  var t, n;
  let {
    quest: o
  } = e, x = (0, v.T)({
    quest: o,
    location: P.dr.QUESTS_BAR
  }), B = (0, b.Zy)({
    location: P.dr.QUESTS_BAR
  }), k = (0, l.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: I,
    reason: q
  } = (0, E.qN)({
    quest: o,
    location: P.dr.QUESTS_BAR
  }), D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), Q = (0, l.e7)([p.Z], () => p.Z.hasLayers()), V = s.useRef(null), L = s.useMemo(() => (0, f.q8)(o), [o]), M = (null == (t = o.userStatus) ? true : t.enrolledAt) != null, Z = (0, u.Z)(M), W = (null == (n = o.userStatus) ? true : n.completedAt) != null, U = (0, u.Z)(W), {
    hasError: H,
    isLoading: z
  } = (0, O.d7)(), F = s.useContext(w.T) || B && I && !z && !k, X = s.useRef(F), K = (0, T.B)(o, F && !H), Y = s.useRef(false), G = s.useRef(false), [J, $] = s.useState(false), [ee, et] = s.useState(false), [en, er] = s.useState(true), [es, eo] = s.useState(true), [ea, ei] = s.useState(K.preEnrollmentExpandedHeight), el = s.useRef(null), ec = s.useCallback(e => {
    er(false), et(e)
  }, []), eu = s.useCallback(() => {
    var e, t;
    ei((null != (t = null == (e = el.current) ? true : e.offsetHeight) ? t : 84) + 2 * K.paddingVertical)
  }, [K.paddingVertical]), ed = s.useCallback(() => {
    eu(), ec(true)
  }, [eu, ec]), ep = s.useCallback(() => {
    $(true)
  }, []), em = s.useCallback(() => {
    $(false), G.current || W || ec(false)
  }, [W, ec]), eg = s.useCallback(() => {
    $(false), W || ec(false), G.current = false
  }, [W, ec]), ef = s.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (ee) return;
    let {
      withDelay: t = false
    } = e;
    t ? Y.current = window.setTimeout(ed, 75) : ed()
  }, [ed, ee]), ex = s.useCallback(() => {
    ef()
  }, [ef]), eh = s.useCallback(() => {
    window.clearTimeout(Y.current), K.canCollapseOnBlur && !J && (G.current || ec(false))
  }, [J, K, ec]), ej = s.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_HOVER,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = V.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: K.trackingCtx.content
    }), G.current = true, ef({
      withDelay: true
    })
  }, [ef, o, K.trackingCtx.content]), e_ = s.useCallback(() => {
    var e;
    (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        impression_id: null == (e = V.current) ? true : e.getId()
      },
      sourceQuestContent: K.trackingCtx.content
    }), G.current = false, eh()
  }, [eh, o, K.trackingCtx.content]);
  s.useLayoutEffect(() => {
    W && K.shouldExpandOnQuestComplete && ed()
  }, [ed, W, K.shouldExpandOnQuestComplete]), s.useLayoutEffect(() => {
    M && !Z && G.current && ed()
  }, [ed, M, Z]), s.useLayoutEffect(() => {
    W || !M || Z || G.current || ec(false)
  }, [M, W, Z, ec]), s.useLayoutEffect(() => {
    F !== X.current && eo(false), X.current = F
  }, [F]);
  let eb = M ? P.XZ : P.R4,
    [{
      expansionSpring: ev
    }, eC] = (0, c.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: eb,
      onRest: () => {
        er(true)
      },
      onStart: () => {
        er(false)
      }
    }));
  s.useEffect(() => {
    eC({
      expansionSpring: +!!ee,
      immediate: D
    })
  }, [ee, eC, D]);
  let {
    visibilitySpring: ey
  } = (0, c.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!F
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      eo(true)
    },
    onStart: () => {
      eo(false)
    }
  });
  s.useEffect(() => {
    L && (0, y.loadVideoQuestModal)()
  }, [L]), s.useLayoutEffect(() => {
    W && !U && K.canCollapseOnBlur && eu()
  }, [W, ed, K.canCollapseOnBlur, eu, U]), s.useEffect(() => {
    var e, t;
    H && (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        reason: "asset_loading_error",
        impression_id: null == (e = V.current) ? true : e.getId()
      },
      sourceQuestContent: K.trackingCtx.content
    }), B || (0, m.dA)({
      questId: o.id,
      event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
      properties: {
        content_id: j.jn.QUEST_BAR,
        content_name: (0, m._b)(j.jn.QUEST_BAR),
        reason: "not_eligible_for_quest",
        impression_id: null == (t = V.current) ? true : t.getId()
      },
      sourceQuestContent: K.trackingCtx.content
    })
  }, [H, B, o.id, K.trackingCtx.content]), s.useEffect(() => {
    if (!F && es && !z) {
      var e;
      (0, m.dA)({
        questId: o.id,
        event: N.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: j.jn.QUEST_BAR,
          content_name: (0, m._b)(j.jn.QUEST_BAR),
          reason: q,
          impression_id: null == (e = V.current) ? true : e.getId()
        },
        sourceQuestContent: K.trackingCtx.content
      })
    }
  }, [F, es, z, o.id, q, K.trackingCtx.content]), s.useEffect(() => {
    (!I || k) && g.Z.clearTracking(), F && es && !z && !H && B && g.Z.stopTracking(o.id)
  }, [I, k, F, es, z, H, B, o.id]);
  let eO = (0, _.h)({
    location: P.dr.QUESTS_BAR,
    questConfig: o.config
  });
  return B && (F || !es || z) && !H ? <C.A questOrQuests={o} questContent={K.trackingCtx.content} overrideVisibility={!Q && F} sourceQuestContent={K.trackingCtx.content}>{(e, t) => {
      let n = K.component;
      return V.current = t.current, (0, r.jsxs)("div", {
        className: A.mask,
        children: [F && (0, r.jsx)(R, {
          questId: o.id,
          isExpanded: ee
        }), (0, r.jsx)(i.animated.div, {
          "aria-hidden": !F,
          onMouseLeave: e_,
          onMouseEnter: ej,
          onFocus: ex,
          onBlur: eh,
          className: a()(A.wrapper, {
            [A.wrapperInvisible]: !F,
            [A.wrapperVisible]: F && es
          }),
          style: {
            color: eO ? true : o.config.colors.secondary,
            height: ey.to({
              range: [0, 1],
              output: [0, !K.canCollapseOnBlur && ee ? ea : 70]
            })
          },
          children: (0, r.jsx)(i.animated.div, {
            className: a()(A.contentWrapper, {
              [A.contentWrapperExpanded]: ee,
              [A.contentWrapperAccepted]: M,
              [A.contentWrapperBrandColorRemoval]: eO
            }),
            style: {
              backgroundColor: eO ? true : K.preEnrollmentBackgroundColor,
              backgroundImage: M && !eO ? K.postEnrollmentBackgroundImage : true
            },
            children: (0, r.jsx)(S.t, {
              springConfig: eb,
              isExpanded: ee,
              children: (0, r.jsx)(n, {
                expandedContentRef: el,
                expansionSpring: ev,
                isExpanded: ee,
                isExpansionAnimationComplete: en,
                onCtxMenuClosed: em,
                onCtxMenuOpened: ep,
                onCtxMenuSelection: eg,
                quest: o,
                useReducedMotion: D,
                collapsedHeight: 70
              })
            })
          })
        })]
      })
    }}</C.A> : (H ? x.log("Not rendered due to asset error") : B || x.log("Not rendered due to ineligibility"), null)
}
let k = 12633 == require.j ? function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : <Chunk78826.p source={Chunk46140.dr.QUESTS_BAR} questId={module.id}><B quest={module} /></Chunk78826.p>
} : null