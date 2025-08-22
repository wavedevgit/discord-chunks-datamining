/** Chunk was on web.js **/
/** chunk id: 495722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk381176 = require("./381176.js"),
  Chunk111131 = require("./111131.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk720293 = require("./720293.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk205511 = require("./205511.jsx"),
  Chunk694802 = require("./694802.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk50476 = require("./50476.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk743294 = require("./743294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475832 = require("./475832.js");

function F(e) {
  var t, n;
  let {
    quest: a,
    onClick: s,
    reducedMotion: l,
    isExpanded: u
  } = e, [f, p] = i.useState(false), m = i.useRef(null), g = (0, A.fh)(a, A.eC.QUEST_BAR_HERO_VIDEO), E = (0, C.z0)(a, c.X.WATCH_VIDEO, C.n1.VIDEO, C.O.THUMBNAIL), b = (0, v.km)(e => e.getVideoProgressState);
  i.useEffect(() => {
    null != m.current && (u && (!l || f) ? (m.current.currentTime = 0, m.current.play()) : m.current.pause())
  }, [m, f, l, u]);
  let y = () => {
      l && !f && p(true)
    },
    O = () => {
      l && f && p(false)
    },
    I = b(a.id),
    T = (null == (t = a.userStatus) ? true : t.completedAt) != null && I === v.iw.COMPLETED,
    S = !T && (!l || f);
  return (0, r.jsxs)(_.P3F, {
    className: V.videoQuestPreviewCont,
    onClick: s,
    onMouseEnter: y,
    onMouseLeave: O,
    children: [null != E && (0, r.jsx)("img", {
      alt: "",
      src: E.url,
      className: V.assetBodyVideoPreviewMedia
    }), null != g ? (0, r.jsx)(h.Z, {
      ref: m,
      autoPlay: false,
      poster: null == E ? true : E.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: o()(V.assetBodyVideoPreviewVideo, {
        [V.assetBodyVideoPreviewVisible]: S
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: g.url,
        type: null != (n = g.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: V.previewPlayButtonCont,
      children: T ? (0, r.jsx)(_.Oe7, {
        color: d.Z.colors.WHITE,
        className: V.previewPlayButton
      }) : (0, r.jsx)(_.o1U, {
        color: d.Z.colors.WHITE,
        className: V.previewPlayButton
      })
    })]
  })
}

function H(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(N.Z, {
    className: o()(V.rewardTile, V.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: O.jn.QUEST_BAR_V2,
    location: G.dr.QUESTS_BAR,
    sourceQuestContent: O.jn.QUEST_BAR_V2
  })
}

function Y(e) {
  return (0, r.jsx)(_.Text, {
    className: V.description,
    variant: "text-xs/normal",
    children: (0, S.DD)({
      quest: e.quest,
      location: G.dr.QUESTS_BAR,
      questContent: O.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: O.jn.QUEST_BAR_V2
    })
  })
}

function W(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: a,
    isInteractable: l,
    reducedMotion: c,
    containerRef: d,
    isExpanded: h,
    onAcceptQuest: m
  } = e, g = (0, u.e7)([y.Z], () => y.Z.isEnrolling(t.id), [t]), E = i.useMemo(() => (0, A.fh)(t, A.eC.QUEST_BAR_HERO), [t]), b = (0, S.CR)({
    quest: t
  }), O = (0, I.h)({
    location: G.dr.QUESTS_BAR,
    questConfig: t.config
  }), v = i.useMemo(() => (0, A.fh)(t, A.eC.HERO_IMAGE), [t]), T = i.useMemo(() => null == v ? {} : {
    backgroundImage: "url(".concat(v.url, ")")
  }, [v]), C = (0, p.ZP)(), N = (0, f.wj)(C);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: V.questPromoContent,
        ref: d,
        children: [(0, r.jsxs)("div", {
          className: V.details,
          children: [(0, r.jsx)(H, {
            quest: t
          }), (0, r.jsx)(_.X6q, {
            className: V.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: Z.intl.format(Z.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(Y, {
            quest: t,
            taskDetails: n
          })]
        }), (0, r.jsx)("div", {
          className: V.cta,
          children: (0, r.jsx)(_.zxk, {
            variant: "primary",
            onClick: l ? m : true,
            loading: g,
            text: b,
            size: "sm",
            fullWidth: true
          })
        })]
      })
    }), O && null != v && (0, r.jsx)(s.animated.div, {
      className: V.contentCollapsedBackgroundWrapper,
      style: {
        opacity: a.to([0, 1], [1, 0])
      },
      children: (0, r.jsx)("div", {
        className: V.contentCollapsedBackground,
        style: T
      })
    }), (0, r.jsxs)(s.animated.div, {
      className: V.heroAssetWrapper,
      style: {
        backdropFilter: a.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: a.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!O && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.animated.div, {
          className: V.heroAssetDarken,
          style: {
            opacity: a.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(s.animated.div, {
          className: V.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: a.to([0, 1], [1, 0])
          }
        })]
      }), E.isAnimated ? (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(K, {
          ref: e,
          asset: E,
          isExpanded: h,
          reducedMotion: c
        })
      }) : (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: V.heroAsset,
          src: E.url
        })
      }), (0, r.jsx)("div", {
        className: o()(V.legibilityGradient, {
          [V.legibilityGradientDark]: N
        })
      })]
    })]
  })
}
let K = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    asset: a,
    isExpanded: o,
    reducedMotion: s
  } = e, l = i.useRef(null);
  return i.useEffect(() => {
    null != l.current && l.current.pause()
  }, []), i.useEffect(() => {
    null == l.current || s || (o ? (l.current.currentTime = 0, l.current.play()) : l.current.pause())
  }, [s, o]), (0, r.jsx)(h.Z, {
    ref: e => {
      null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: V.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: a.url,
      type: null != (n = a.mimetype) ? n : true
    })
  })
});

function z(e) {
  var t;
  let {
    quest: n,
    taskDetails: a,
    expansionSpring: c,
    overlayRef: u,
    isExpanded: d,
    reducedMotion: f,
    containerRef: _,
    onCtxMenuOpen: p,
    onCtxMenuClose: h,
    onCtxMenuSelect: E
  } = e, y = (null == (t = n.userStatus) ? true : t.completedAt) != null, v = a.percentComplete > 0, I = (0, b.z)(n), [T, S, A] = (0, b.me)(n, a), C = i.useRef(null), N = (0, b._s)({
    quest: n
  }), P = (0, g.q8)(n), Z = (0, b.Jf)(n), H = i.useCallback(() => {
    (0, R.openVideoQuestModal)({
      quest: n,
      questContent: O.jn.QUEST_BAR_V2,
      sourceQuestContent: O.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: m.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), Y = null != Z ? Z.percentComplete : a.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.animated.div, {
      className: o()(V.postEnrollmentBackground, V.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: V.questAcceptedContent,
      ref: _,
      children: [(0, r.jsx)(k.Z, {
        quest: n,
        onCtxMenuOpen: p,
        onCtxMenuClose: h,
        onCtxMenuSelect: E
      }), (0, r.jsx)("div", {
        className: V.divider
      }), (0, r.jsx)(x.Z, {
        expansionSpring: c,
        overlayRef: u,
        progressBarRef: C,
        quest: n,
        isExpanded: d,
        isHovered: false,
        shouldShowRewardsCTAWhenCollapsed: false
      }), (0, r.jsx)(M.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: C,
        isExpanded: true,
        percentComplete: Y,
        activeScreen: T
      }), (0, r.jsx)(w.n, {
        children: !y && !(0, g.Gd)(n) && (0, l.EQ)(T).with(O.LI.SELECT, () => (0, r.jsx)(U.Z, {
          onConsole: () => A(G.cd.CONSOLE),
          onDesktop: () => A(G.cd.DESKTOP)
        })).with(O.LI.DESKTOP, () => (0, r.jsx)(j.Z, {
          quest: n
        })).with(O.LI.CONSOLE, () => (0, r.jsx)(L.Z, {
          quest: n,
          taskDetails: a
        })).exhaustive()
      }), (0, r.jsxs)(w.n, {
        children: [P && (0, r.jsx)(F, {
          isExpanded: d,
          quest: n,
          onClick: H,
          reducedMotion: f
        }), (0, r.jsx)(D.y, {
          quest: n,
          useReducedMotion: f,
          isExpanded: d,
          awaitingConsoleConnections: N,
          hasMadeProgress: v,
          isProgressing: I,
          activeScreen: T,
          showBackButton: T !== O.LI.SELECT && S.length > 1 && !v && !I,
          onBack: () => A(null),
          taskDetails: a,
          sourceQuestContent: O.jn.QUEST_BAR_V2,
          shouldShowRewardsCTAWhenCollapsed: false
        })]
      })]
    }), (0, r.jsx)("div", {
      className: o()(V.postEnrollmentBackground, V.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")")
      }
    })]
  })
}
async function q(e, t, n, r) {
  let i = (0, g.q8)(e);
  if (i && (0, T.R)(G.dr.QUESTS_BAR)) return void await (0, R.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  });
  (0, E.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), i && (0, R.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  })
}
let X = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    children: a,
    className: l,
    collapsedHeight: c,
    isExpanded: u,
    isExpansionAnimationComplete: d,
    expansionSpring: f,
    onCtxMenuOpen: _,
    onCtxMenuClose: p,
    onCtxMenuSelect: h,
    overlayRef: E,
    quest: y,
    useReducedMotion: v,
    taskDetails: I
  } = e, T = (0, g.Vl)(y), {
    launchInGameActivity: S
  } = (0, b.zB)(y), A = i.useCallback(async () => {
    let e = y.config.features.includes(G.S7.START_QUEST_CTA),
      t = e ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST;
    await q(y, O.jn.QUEST_BAR_V2, t, O.jn.QUEST_BAR_V2), T && e && S()
  }, [y, T, S]), C = (null == (n = y.userStatus) ? true : n.enrolledAt) != null, N = u && d;
  return (0, r.jsxs)(s.animated.div, {
    "aria-hidden": !N,
    className: o()(l, V.contentExpanded, {
      [V.contentInteractable]: N,
      [V.contentExpandedAccepted]: C
    }),
    style: {
      transform: (0, s.to)([f.to({
        range: [0, 1],
        output: [0, false]
      }), f.to({
        range: [0, 1],
        output: [0, c]
      })], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
    },
    children: [a, (0, r.jsx)(s.animated.div, {
      style: {
        opacity: 1
      },
      children: C ? (0, r.jsx)(z, {
        quest: y,
        taskDetails: I,
        expansionSpring: f,
        overlayRef: E,
        isExpanded: u,
        reducedMotion: v,
        onCtxMenuOpen: _,
        onCtxMenuClose: p,
        onCtxMenuSelect: h,
        containerRef: t
      }) : (0, r.jsx)(W, {
        quest: y,
        taskDetails: I,
        expansionSpring: f,
        isInteractable: N,
        reducedMotion: v,
        containerRef: t,
        isExpanded: u,
        onAcceptQuest: A
      })
    })]
  })
})