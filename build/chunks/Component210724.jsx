/** Chunk was on web.js **/
/** chunk id: 210724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => U,
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js"),
  Chunk797614 = require("./797614.js"),
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
  Chunk602667 = require("./602667.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk130653 = require("./130653.jsx"),
  Chunk941348 = require("./941348.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk743294 = require("./743294.js"),
  Chunk981631 = require("./981631.js"),
  Chunk89855 = require("./89855.js");
let j = 75,
  M = 70;

function k(e) {
  let {
    isExpanded: t,
    questId: n
  } = e;
  return (0, E.qI)({
    mode: t ? w.NH.EXPANDED : w.NH.COLLAPSED,
    questContent: y.jn.QUEST_BAR_V2,
    questId: n,
    sourceQuestContent: y.jn.QUEST_BAR_V2
  }), null
}

function U(e) {
  var t, n;
  let {
    quest: a
  } = e, E = (0, I.T)({
    quest: a,
    location: w.dr.QUESTS_BAR
  }), U = (0, v.Z)({
    location: w.dr.QUESTS_BAR
  }), G = (0, c.e7)([b.Z], () => null != b.Z.questEnrollmentBlockedUntil), {
    isQuestBarVisible: B,
    reason: Z
  } = (0, C.qN)({
    quest: a,
    location: w.dr.QUESTS_BAR
  }), F = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), V = (0, c.e7)([p.Z], () => p.Z.hasLayers()), H = i.useRef(null), Y = i.useMemo(() => (0, g.q8)(a), [a]), W = (null == (t = a.userStatus) ? true : t.enrolledAt) != null, K = (0, d.Z)(W), z = (null == (n = a.userStatus) ? true : n.completedAt) != null, {
    hasError: q,
    isLoading: X
  } = (0, A.d7)(), Q = i.useContext(R.T) || U && B && !X && !G, J = i.useRef(Q), $ = i.useRef(false), ee = i.useRef(false), [et, en] = i.useState(false), [er, ei] = i.useState(false), [ea, eo] = i.useState(true), [es, el] = i.useState(true), ec = i.useRef(null), eu = i.useCallback(e => {
    z || (eo(false), ei(e))
  }, [z]), ed = i.useCallback(() => {
    eu(true)
  }, [eu]), ef = i.useCallback(() => {
    en(true)
  }, []), e_ = i.useCallback(() => {
    en(false), ee.current || z || eu(false)
  }, [z, eu]), ep = i.useCallback(() => {
    en(false), z || eu(false), ee.current = false
  }, [z, eu]), eh = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    if (er) return;
    let {
      withDelay: t = false
    } = e;
    t ? $.current = window.setTimeout(ed, j) : ed()
  }, [ed, er]), em = i.useCallback(() => {
    eh()
  }, [eh]), eg = i.useCallback(() => {
    window.clearTimeout($.current), !et && (ee.current || eu(false))
  }, [et, eu]), eE = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      shouldExtendSession: true,
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), ee.current = true, eh({
      withDelay: true
    })
  }, [eh, a]), eb = i.useCallback(() => {
    var e;
    (0, h.dA)({
      questId: a.id,
      event: x.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: y.jn.QUEST_BAR,
        content_name: (0, h._b)(y.jn.QUEST_BAR),
        impression_id: null == (e = H.current) ? true : e.getId()
      },
      sourceQuestContent: y.jn.QUEST_BAR_V2
    }), ee.current = false, eg()
  }, [eg, a]);
  i.useLayoutEffect(() => {
    W && !K && ee.current && ed()
  }, [ed, W, K]), i.useLayoutEffect(() => {
    z || !W || K || ee.current || eu(false)
  }, [W, z, K, eu]), i.useLayoutEffect(() => {
    Q !== J.current && el(false), J.current = Q
  }, [Q]);
  let ey = W ? w.XZ : w.R4,
    [{
      expansionSpring: eO
    }, ev] = (0, u.q_F)(() => ({
      from: {
        expansionSpring: 0
      },
      config: ey,
      onRest: () => {
        eo(true)
      },
      onStart: () => {
        eo(false)
      }
    }));
  i.useEffect(() => {
    ev({
      expansionSpring: +!!er,
      immediate: F
    })
  }, [er, ev, F]);
  let {
    visibilitySpring: eI
  } = (0, u.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!Q
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      el(true)
    },
    onStart: () => {
      el(false)
    }
  });
  i.useEffect(() => {
    Y && (0, S.loadVideoQuestModal)()
  }, [Y]), i.useEffect(() => {
    if (q) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "asset_loading_error",
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      }), _.Z.increment({
        name: l.V.QUEST_CONTENT_RENDERING_FAILURE,
        tags: ["quest_id:".concat(a.id), "reason:asset_loading_error"]
      })
    }
  }, [q, a.id]), i.useEffect(() => {
    if (!U) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: "not_eligible_for_quest",
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [U, a.id]), i.useEffect(() => {
    if (!Q && es && !X) {
      var e;
      (0, h.dA)({
        questId: a.id,
        event: x.rMx.QUEST_CONTENT_RENDERING_FAILURE,
        properties: {
          content_id: y.jn.QUEST_BAR,
          content_name: (0, h._b)(y.jn.QUEST_BAR),
          reason: Z,
          impression_id: null == (e = H.current) ? true : e.getId()
        },
        sourceQuestContent: y.jn.QUEST_BAR_V2
      })
    }
  }, [Q, es, X, a.id, Z]), i.useEffect(() => {
    (!B || G) && m.Z.clearTracking(), Q && es && !X && !q && U && m.Z.stopTracking(a.id)
  }, [B, G, Q, es, X, q, U, a.id]);
  let eT = (0, O.h)({
    location: w.dr.QUESTS_BAR,
    questConfig: a.config
  });
  if (!U || !Q && es && !X || q) return q ? E.log("Not rendered due to asset error") : U || E.log("Not rendered due to ineligibility"), null;
  let eS = M + 78 * !!z;
  return (0, r.jsx)(T.A, {
    questOrQuests: a,
    questContent: y.jn.QUEST_BAR_V2,
    overrideVisibility: !V && Q,
    sourceQuestContent: y.jn.QUEST_BAR_V2,
    children: (e, t) => (H.current = t.current, (0, r.jsxs)("div", {
      className: L.mask,
      children: [Q && (0, r.jsx)(k, {
        questId: a.id,
        isExpanded: er
      }), (0, r.jsx)(s.animated.div, {
        "aria-hidden": !Q,
        onMouseLeave: eb,
        onMouseEnter: eE,
        onFocus: em,
        onBlur: eg,
        className: o()(L.wrapper, {
          [L.wrapperInvisible]: !Q,
          [L.wrapperVisible]: Q && es
        }),
        style: {
          color: eT ? true : a.config.colors.secondary,
          height: eI.to({
            range: [0, 1],
            output: [0, eS]
          })
        },
        children: (0, r.jsx)(s.animated.div, {
          className: o()(L.contentWrapper, {
            [L.contentWrapperExpanded]: er,
            [L.contentWrapperAccepted]: W,
            [L.contentWrapperBrandColorRemoval]: eT
          }),
          style: {
            backgroundColor: eT ? true : "var(--home-background)",
            backgroundImage: W && !eT ? "linear-gradient(90deg, ".concat(D.aY, ", ").concat(D.v6, ")") : true
          },
          children: (0, r.jsx)(N.t, {
            springConfig: ey,
            isExpanded: er,
            children: (0, r.jsx)(P.Z, {
              expandedContentRef: ec,
              expansionSpring: eO,
              isExpanded: er,
              isExpansionAnimationComplete: ea,
              onCtxMenuClosed: e_,
              onCtxMenuOpened: ef,
              onCtxMenuSelection: ep,
              quest: a,
              useReducedMotion: F,
              collapsedHeight: eS
            })
          })
        })
      })]
    }))
  })
}
let G = function() {
  let e = (0, Chunk667105.DH)();
  return null == module ? null : (0, Chunk951288.jsx)(Chunk78826.p, {
    source: Chunk46140.dr.QUESTS_BAR,
    questId: module.id,
    children: (0, Chunk951288.jsx)(U, {
      quest: module
    })
  }, module.id)
}