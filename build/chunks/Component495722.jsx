/** Chunk was on 3408 **/
/** chunk id: 495722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
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
  Chunk990759 = require("./990759.js");

function H(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: d
  } = e, [p, g] = s.useState(false), f = s.useRef(null), x = (0, w.fh)(o, w.eC.QUEST_BAR_HERO_VIDEO), _ = (0, P.z0)(o, c.X.WATCH_VIDEO, P.n1.VIDEO, P.O.THUMBNAIL), b = (0, O.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != f.current && (d && (!l || p) ? (f.current.currentTime = 0, f.current.play()) : f.current.pause())
  }, [f, p, l, d]);
  let j = b(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && j === O.iw.COMPLETED,
    C = !v && (!l || p);
  return (0, r.jsxs)(m.P3F, {
    className: U.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !p && g(true)
    },
    onMouseLeave: () => {
      l && p && g(false)
    },
    children: [null != _ && (0, r.jsx)("img", {
      alt: "",
      src: _.url,
      className: U.assetBodyVideoPreviewMedia
    }), null != x ? (0, r.jsx)(h.Z, {
      ref: f,
      autoPlay: false,
      poster: null == _ ? true : _.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(U.assetBodyVideoPreviewVideo, {
        [U.assetBodyVideoPreviewVisible]: C
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: x.url,
        type: null != (n = x.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: U.previewPlayButtonCont,
      children: v ? (0, r.jsx)(m.Oe7, {
        color: u.Z.colors.WHITE,
        className: U.previewPlayButton
      }) : (0, r.jsx)(m.o1U, {
        color: u.Z.colors.WHITE,
        className: U.previewPlayButton
      })
    })]
  })
}

function F(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(N.Z, {
    className: a()(U.rewardTile, U.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: y.jn.QUEST_BAR_V2,
    location: M.dr.QUESTS_BAR,
    sourceQuestContent: y.jn.QUEST_BAR_V2
  })
}

function X(e) {
  return (0, r.jsx)(m.Text, {
    className: U.description,
    variant: "text-xs/normal",
    children: (0, T.DD)({
      quest: e.quest,
      location: M.dr.QUESTS_BAR,
      questContent: y.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: y.jn.QUEST_BAR_V2,
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
    expansionSpring: o,
    isInteractable: l,
    reducedMotion: c,
    containerRef: u,
    isExpanded: h,
    onAcceptQuest: _,
    onGameSheetOpened: b,
    onGameSheetClosed: j
  } = e, v = s.useRef(null), y = (0, d.e7)([C.Z], () => C.Z.isEnrolling(t.id), [t]), O = s.useMemo(() => (0, w.fh)(t, w.eC.QUEST_BAR_HERO), [t]), S = (0, T.CR)({
    quest: t
  }), {
    enabled: P,
    status: N
  } = (0, E.n)({
    location: M.dr.QUESTS_BAR,
    questConfig: t.config
  }), A = s.useMemo(() => (0, w.fh)(t, w.eC.HERO_IMAGE), [t]), B = s.useMemo(() => null == A ? {} : {
    backgroundImage: "url(".concat(A.url, ")")
  }, [A]), k = (0, g.ZP)(), I = (0, p.wj)(k), q = (0, d.e7)([x.Z], () => x.Z.isFocused()), D = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: v,
      children: (0, r.jsxs)("div", {
        className: U.questPromoContent,
        ref: u,
        children: [(0, r.jsxs)("div", {
          className: U.details,
          children: [(0, r.jsx)(F, {
            quest: t
          }), (0, r.jsx)(m.X6q, {
            className: U.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: Z.intl.format(Z.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(X, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: v,
            onGameSheetOpened: b,
            onGameSheetClosed: j
          })]
        }), (0, r.jsx)("div", {
          className: U.cta,
          children: (0, r.jsx)(m.zxk, {
            variant: "primary",
            onClick: l ? _ : true,
            loading: y,
            text: S,
            size: "sm",
            icon: t.config.features.includes(M.S7.CLOUD_GAMING_ACTIVITY) ? m.v3n : true,
            fullWidth: true
          })
        })]
      })
    }), P && null != A && (0, r.jsxs)(i.animated.div, {
      className: U.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: [(null == N ? true : N.progressBlur) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: U.contentCollapsedBackground,
          style: B
        }), (0, r.jsx)("div", {
          className: a()(U.contentCollapsedBackground, U.blur30),
          style: B
        }), (0, r.jsx)("div", {
          className: a()(U.contentCollapsedBackground, U.blur60),
          style: B
        }), (0, r.jsx)("div", {
          className: a()(U.contentCollapsedBackground, U.blur100),
          style: B
        })]
      }) : (0, r.jsx)("div", {
        className: a()(U.contentCollapsedBackground, U.blur),
        style: B
      }), (null == N ? true : N.shineWipe) && (0, r.jsx)(m.ZX5, {
        className: U.shine,
        "data-migration-pending": true,
        shineSize: m.rHe.DEFAULT,
        shinePaused: !q || D
      })]
    }), (0, r.jsxs)(i.animated.div, {
      className: U.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.animated.div, {
          className: U.heroAssetDarken,
          style: {
            opacity: o.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(i.animated.div, {
          className: U.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: o.to([0, 1], [1, 0])
          }
        })]
      }), O.isAnimated ? (0, r.jsx)(R.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(G, {
          ref: e,
          asset: O,
          isExpanded: h,
          reducedMotion: c
        })
      }) : (0, r.jsx)(R.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: U.heroAsset,
          src: O.url
        })
      }), (0, r.jsx)("div", {
        className: a()(U.legibilityGradient, {
          [U.legibilityGradientDark]: I
        })
      })]
    })]
  })
}
let G = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    asset: o,
    isExpanded: a,
    reducedMotion: i
  } = e, l = s.useRef(null);
  return s.useEffect(() => {
    null != l.current && l.current.pause()
  }, []), s.useEffect(() => {
    null == l.current || i || (a ? (l.current.currentTime = 0, l.current.play()) : l.current.pause())
  }, [i, a]), (0, r.jsx)(h.Z, {
    ref: e => {
      null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: U.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: o.url,
      type: null != (n = o.mimetype) ? n : true
    })
  })
});

function K(e) {
  var t;
  let {
    quest: n,
    taskDetails: o,
    expansionSpring: c,
    overlayRef: d,
    isExpanded: u,
    reducedMotion: p,
    containerRef: m,
    onCtxMenuOpen: g,
    onCtxMenuClose: f,
    onCtxMenuSelect: h,
    onGameSheetOpened: x,
    onGameSheetClosed: j
  } = e, C = (null == (t = n.userStatus) ? true : t.completedAt) != null, O = o.percentComplete > 0, E = (0, v.z)(n), [S, T, w] = (0, v.me)(n, o), P = s.useRef(null), N = s.useRef(null), R = (0, v._s)({
    quest: n
  }), Z = (0, b.q8)(n), F = (0, v.Jf)(n), X = s.useCallback(() => {
    (0, A.openVideoQuestModal)({
      quest: n,
      questContent: y.jn.QUEST_BAR_V2,
      sourceQuestContent: y.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), z = null != F ? F.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(W.aY, ", ").concat(W.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: U.questAcceptedContent,
      ref: e => {
        "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (N.current = e)
      },
      children: [(0, r.jsx)(V.Z, {
        quest: n,
        onCtxMenuOpen: g,
        onCtxMenuClose: f,
        onCtxMenuSelect: h
      }), (0, r.jsx)("div", {
        className: U.divider
      }), (0, r.jsx)(I.Z, {
        expansionSpring: c,
        overlayRef: d,
        progressBarRef: P,
        quest: n,
        isExpanded: u,
        isHovered: false
      }), (0, r.jsx)(L.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: P,
        isExpanded: true,
        percentComplete: z,
        activeScreen: S,
        popoutTargetElementRef: N,
        onGameSheetOpened: x,
        onGameSheetClosed: j
      }), (0, r.jsx)(B.n, {
        children: !C && !(0, b.Gd)(n) && (0, l.EQ)(S).with(y.LI.SELECT, () => (0, r.jsx)(Q.Z, {
          onConsole: () => w(M.cd.CONSOLE),
          onDesktop: () => w(M.cd.DESKTOP)
        })).with(y.LI.DESKTOP, () => (0, r.jsx)(D.Z, {
          quest: n
        })).with(y.LI.CONSOLE, () => (0, r.jsx)(q.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(B.n, {
        children: [Z && (0, r.jsx)(H, {
          isExpanded: u,
          quest: n,
          onClick: X,
          reducedMotion: p
        }), (0, r.jsx)(k.y, {
          quest: n,
          useReducedMotion: p,
          isExpanded: u,
          awaitingConsoleConnections: R,
          hasMadeProgress: O,
          isProgressing: E,
          activeScreen: S,
          showBackButton: S !== y.LI.SELECT && T.length > 1 && !O && !E,
          onBack: () => w(null),
          taskDetails: o,
          sourceQuestContent: y.jn.QUEST_BAR_V2,
          onGameSheetOpened: x,
          onGameSheetClosed: j
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(W.aY, ", ").concat(W.v6, ")")
      }
    })]
  })
}
async function Y(e, t, n, r) {
  let s = (0, b.q8)(e);
  if (s && (0, S.R)(M.dr.QUESTS_BAR)) return void await (0, A.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  });
  (0, j.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), s && (0, A.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  })
}
let J = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    children: o,
    className: l,
    collapsedHeight: c,
    isExpanded: d,
    isExpansionAnimationComplete: u,
    expansionSpring: p,
    onCtxMenuOpen: m,
    onCtxMenuClose: g,
    onCtxMenuSelect: f,
    onGameSheetOpened: h,
    onGameSheetClosed: x,
    overlayRef: j,
    quest: C,
    useReducedMotion: O,
    taskDetails: E
  } = e, {
    launchInGameActivity: S
  } = (0, v.zB)(C), T = (0, b.Rt)(C), w = s.useCallback(async () => {
    let e = T ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
    await Y(C, y.jn.QUEST_BAR_V2, e, y.jn.QUEST_BAR_V2), T && S()
  }, [C, S, T]), P = (null == (n = C.userStatus) ? true : n.enrolledAt) != null, N = d && u;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !N,
    className: a()(l, U.contentExpanded, {
      [U.contentInteractable]: N,
      [U.contentExpandedAccepted]: P
    }),
    style: {
      transform: (0, i.to)([p.to({
        range: [0, 1],
        output: [0, false]
      }), p.to({
        range: [0, 1],
        output: [0, c]
      })], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
    },
    children: [o, (0, r.jsx)(i.animated.div, {
      style: {
        opacity: 1
      },
      children: P ? (0, r.jsx)(K, {
        quest: C,
        taskDetails: E,
        expansionSpring: p,
        overlayRef: j,
        isExpanded: d,
        reducedMotion: O,
        onCtxMenuOpen: m,
        onCtxMenuClose: g,
        onCtxMenuSelect: f,
        containerRef: t,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      }) : (0, r.jsx)(z, {
        quest: C,
        taskDetails: E,
        expansionSpring: p,
        isInteractable: N,
        reducedMotion: O,
        containerRef: t,
        isExpanded: d,
        onAcceptQuest: w,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      })
    })]
  })
})