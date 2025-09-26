/** Chunk was on web.js **/
/** chunk id: 495722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk786920 = require("./786920.js"),
  Chunk278074 = require("./278074.js"),
  Chunk754700 = require("./754700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk184299 = require("./184299.js"),
  Chunk685138 = require("./685138.js"),
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

function Y(e) {
  var t, n;
  let {
    quest: a,
    onClick: s,
    reducedMotion: l,
    isExpanded: u
  } = e, [f, p] = i.useState(false), h = i.useRef(null), g = (0, N.fh)(a, N.eC.QUEST_BAR_HERO_VIDEO), E = (0, R.z0)(a, c.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL), b = (0, T.km)(e => e.getVideoProgressState);
  i.useEffect(() => {
    null != h.current && (u && (!l || f) ? (h.current.currentTime = 0, h.current.play()) : h.current.pause())
  }, [h, f, l, u]);
  let y = () => {
      l && !f && p(true)
    },
    O = () => {
      l && f && p(false)
    },
    v = b(a.id),
    I = (null == (t = a.userStatus) ? true : t.completedAt) != null && v === T.iw.COMPLETED,
    S = !I && (!l || f);
  return (0, r.jsxs)(_.P3F, {
    className: H.videoQuestPreviewCont,
    onClick: s,
    onMouseEnter: y,
    onMouseLeave: O,
    children: [null != E && (0, r.jsx)("img", {
      alt: "",
      src: E.url,
      className: H.assetBodyVideoPreviewMedia
    }), null != g ? (0, r.jsx)(m.Z, {
      ref: h,
      autoPlay: false,
      poster: null == E ? true : E.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: o()(H.assetBodyVideoPreviewVideo, {
        [H.assetBodyVideoPreviewVisible]: S
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: g.url,
        type: null != (n = g.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: H.previewPlayButtonCont,
      children: I ? (0, r.jsx)(_.Oe7, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      }) : (0, r.jsx)(_.o1U, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      })
    })]
  })
}

function W(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(P.Z, {
    className: o()(H.rewardTile, H.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: I.jn.QUEST_BAR_V2,
    location: Z.dr.QUESTS_BAR,
    sourceQuestContent: I.jn.QUEST_BAR_V2
  })
}

function K(e) {
  return (0, r.jsx)(_.Text, {
    className: H.description,
    variant: "text-xs/normal",
    children: (0, C.DD)({
      quest: e.quest,
      location: Z.dr.QUESTS_BAR,
      questContent: I.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: I.jn.QUEST_BAR_V2,
      popoutTargetElementRef: e.popoutTargetElementRef,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    })
  })
}

function z(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: a,
    isInteractable: l,
    reducedMotion: c,
    containerRef: d,
    isExpanded: m,
    onAcceptQuest: E,
    onGameSheetOpened: b,
    onGameSheetClosed: y
  } = e, O = i.useRef(null), I = (0, u.e7)([v.Z], () => v.Z.isEnrolling(t.id), [t]), T = i.useMemo(() => (0, N.fh)(t, N.eC.QUEST_BAR_HERO), [t]), A = (0, C.CR)({
    quest: t
  }), {
    enabled: R,
    status: P
  } = (0, S.n)({
    location: Z.dr.QUESTS_BAR,
    questConfig: t.config
  }), w = i.useMemo(() => (0, N.fh)(t, N.eC.HERO_IMAGE), [t]), x = i.useMemo(() => null == w ? {} : {
    backgroundImage: "url(".concat(w.url, ")")
  }, [w]), L = (0, p.ZP)(), j = (0, f.wj)(L), M = (0, u.e7)([g.Z], () => g.Z.isFocused()), k = (0, u.e7)([h.Z], () => h.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: O,
      children: (0, r.jsxs)("div", {
        className: H.questPromoContent,
        ref: d,
        children: [(0, r.jsxs)("div", {
          className: H.details,
          children: [(0, r.jsx)(W, {
            quest: t
          }), (0, r.jsx)(_.X6q, {
            className: H.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: V.intl.format(V.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(K, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: O,
            onGameSheetOpened: b,
            onGameSheetClosed: y
          })]
        }), (0, r.jsx)("div", {
          className: H.cta,
          children: (0, r.jsx)(_.zxk, {
            variant: "primary",
            onClick: l ? E : true,
            loading: I,
            text: A,
            size: "sm",
            icon: t.config.features.includes(Z.S7.CLOUD_GAMING_ACTIVITY) ? _.v3n : true,
            fullWidth: true
          })
        })]
      })
    }), R && null != w && (0, r.jsxs)(s.animated.div, {
      className: H.contentCollapsedBackgroundWrapper,
      style: {
        opacity: a.to([0, 1], [1, 0])
      },
      children: [(null == P ? true : P.progressBlur) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: H.contentCollapsedBackground,
          style: x
        }), (0, r.jsx)("div", {
          className: o()(H.contentCollapsedBackground, H.blur30),
          style: x
        }), (0, r.jsx)("div", {
          className: o()(H.contentCollapsedBackground, H.blur60),
          style: x
        }), (0, r.jsx)("div", {
          className: o()(H.contentCollapsedBackground, H.blur100),
          style: x
        })]
      }) : (0, r.jsx)("div", {
        className: o()(H.contentCollapsedBackground, H.blur),
        style: x
      }), (null == P ? true : P.shineWipe) && (0, r.jsx)(_.ZX5, {
        className: H.shine,
        shineSize: _.rHe.DEFAULT,
        shinePaused: !M || k
      })]
    }), (0, r.jsxs)(s.animated.div, {
      className: H.heroAssetWrapper,
      style: {
        backdropFilter: a.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: a.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!R && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.animated.div, {
          className: H.heroAssetDarken,
          style: {
            opacity: a.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(s.animated.div, {
          className: H.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: a.to([0, 1], [1, 0])
          }
        })]
      }), T.isAnimated ? (0, r.jsx)(D.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(q, {
          ref: e,
          asset: T,
          isExpanded: m,
          reducedMotion: c
        })
      }) : (0, r.jsx)(D.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: H.heroAsset,
          src: T.url
        })
      }), (0, r.jsx)("div", {
        className: o()(H.legibilityGradient, {
          [H.legibilityGradientDark]: j
        })
      })]
    })]
  })
}
let q = Chunk647438.forwardRef(function(e, t) {
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
  }, [s, o]), (0, r.jsx)(m.Z, {
    ref: e => {
      null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: H.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: a.url,
      type: null != (n = a.mimetype) ? n : true
    })
  })
});

function X(e) {
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
    onCtxMenuSelect: m,
    onGameSheetOpened: g,
    onGameSheetClosed: y
  } = e, v = (null == (t = n.userStatus) ? true : t.completedAt) != null, T = a.percentComplete > 0, S = (0, O.z)(n), [A, C, N] = (0, O.me)(n, a), R = i.useRef(null), P = i.useRef(null), D = (0, O._s)({
    quest: n
  }), V = (0, b.q8)(n), W = (0, O.Jf)(n), K = i.useCallback(() => {
    (0, w.openVideoQuestModal)({
      quest: n,
      questContent: I.jn.QUEST_BAR_V2,
      sourceQuestContent: I.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: E.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), z = null != W ? W.percentComplete : a.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.animated.div, {
      className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(F.aY, ", ").concat(F.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: H.questAcceptedContent,
      ref: e => {
        "function" == typeof _ ? _(e) : null != _ && (_.current = e), null != e && (P.current = e)
      },
      children: [(0, r.jsx)(G.Z, {
        quest: n,
        onCtxMenuOpen: p,
        onCtxMenuClose: h,
        onCtxMenuSelect: m
      }), (0, r.jsx)("div", {
        className: H.divider
      }), (0, r.jsx)(j.Z, {
        expansionSpring: c,
        overlayRef: u,
        progressBarRef: R,
        quest: n,
        isExpanded: d,
        isHovered: false
      }), (0, r.jsx)(U.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: R,
        isExpanded: true,
        percentComplete: z,
        activeScreen: A,
        popoutTargetElementRef: P,
        onGameSheetOpened: g,
        onGameSheetClosed: y
      }), (0, r.jsx)(x.n, {
        children: !v && !(0, b.Gd)(n) && (0, l.EQ)(A).with(I.LI.SELECT, () => (0, r.jsx)(B.Z, {
          onConsole: () => N(Z.cd.CONSOLE),
          onDesktop: () => N(Z.cd.DESKTOP)
        })).with(I.LI.DESKTOP, () => (0, r.jsx)(k.Z, {
          quest: n
        })).with(I.LI.CONSOLE, () => (0, r.jsx)(M.Z, {
          quest: n,
          taskDetails: a
        })).exhaustive()
      }), (0, r.jsxs)(x.n, {
        children: [V && (0, r.jsx)(Y, {
          isExpanded: d,
          quest: n,
          onClick: K,
          reducedMotion: f
        }), (0, r.jsx)(L.y, {
          quest: n,
          useReducedMotion: f,
          isExpanded: d,
          awaitingConsoleConnections: D,
          hasMadeProgress: T,
          isProgressing: S,
          activeScreen: A,
          showBackButton: A !== I.LI.SELECT && C.length > 1 && !T && !S,
          onBack: () => N(null),
          taskDetails: a,
          sourceQuestContent: I.jn.QUEST_BAR_V2,
          onGameSheetOpened: g,
          onGameSheetClosed: y
        })]
      })]
    }), (0, r.jsx)("div", {
      className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(F.aY, ", ").concat(F.v6, ")")
      }
    })]
  })
}
async function Q(e, t, n, r) {
  let i = (0, b.q8)(e);
  if (i && (0, A.R)(Z.dr.QUESTS_BAR)) return void await (0, w.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  });
  (0, y.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), i && (0, w.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  })
}
let J = Chunk647438.forwardRef(function(e, t) {
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
    onGameSheetOpened: m,
    onGameSheetClosed: g,
    overlayRef: y,
    quest: v,
    useReducedMotion: T,
    taskDetails: S
  } = e, {
    launchInGameActivity: A
  } = (0, O.zB)(v), C = (0, b.Rt)(v), N = i.useCallback(async () => {
    let e = C ? E.jZ.START_QUEST : E.jZ.ACCEPT_QUEST;
    await Q(v, I.jn.QUEST_BAR_V2, e, I.jn.QUEST_BAR_V2), C && A()
  }, [v, A, C]), R = (null == (n = v.userStatus) ? true : n.enrolledAt) != null, P = u && d;
  return (0, r.jsxs)(s.animated.div, {
    "aria-hidden": !P,
    className: o()(l, H.contentExpanded, {
      [H.contentInteractable]: P,
      [H.contentExpandedAccepted]: R
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
      children: R ? (0, r.jsx)(X, {
        quest: v,
        taskDetails: S,
        expansionSpring: f,
        overlayRef: y,
        isExpanded: u,
        reducedMotion: T,
        onCtxMenuOpen: _,
        onCtxMenuClose: p,
        onCtxMenuSelect: h,
        containerRef: t,
        onGameSheetOpened: m,
        onGameSheetClosed: g
      }) : (0, r.jsx)(z, {
        quest: v,
        taskDetails: S,
        expansionSpring: f,
        isInteractable: P,
        reducedMotion: T,
        containerRef: t,
        isExpanded: u,
        onAcceptQuest: N,
        onGameSheetOpened: m,
        onGameSheetClosed: g
      })
    })]
  })
})