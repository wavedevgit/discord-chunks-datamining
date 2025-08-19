/** Chunk was on 21046 **/
/** chunk id: 495722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
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
  Chunk192023 = require("./192023.js"),
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

function Z(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: d
  } = e, [p, f] = s.useState(false), x = s.useRef(null), h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO), b = (0, T.z0)(o, c.X.WATCH_VIDEO, T.n1.VIDEO, T.O.THUMBNAIL), _ = (0, C.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != x.current && (d && (!l || p) ? (x.current.currentTime = 0, x.current.play()) : x.current.pause())
  }, [x, p, l, d]);
  let j = _(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && j === C.iw.COMPLETED,
    y = !v && (!l || p);
  return (0, r.jsxs)(m.P3F, {
    className: W.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !p && f(true)
    },
    onMouseLeave: () => {
      l && p && f(false)
    },
    children: [null != b && (0, r.jsx)("img", {
      alt: "",
      src: b.url,
      className: W.assetBodyVideoPreviewMedia
    }), null != h ? (0, r.jsx)(g.Z, {
      ref: x,
      autoPlay: false,
      poster: null == b ? true : b.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(W.assetBodyVideoPreviewVideo, {
        [W.assetBodyVideoPreviewVisible]: y
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: h.url,
        type: null != (n = h.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: W.previewPlayButtonCont,
      children: v ? (0, r.jsx)(m.Oe7, {
        color: u.Z.colors.WHITE,
        className: W.previewPlayButton
      }) : (0, r.jsx)(m.o1U, {
        color: u.Z.colors.WHITE,
        className: W.previewPlayButton
      })
    })]
  })
}

function U(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(w.Z, {
    className: a()(W.rewardTile, W.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    location: V.dr.QUESTS_BAR,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function H(e) {
  return (0, r.jsx)(m.Text, {
    className: W.description,
    variant: "text-xs/normal",
    children: (0, O.DD)({
      quest: e.quest,
      location: V.dr.QUESTS_BAR,
      questContent: v.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    })
  })
}

function F(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: o,
    isInteractable: l,
    reducedMotion: c,
    containerRef: u,
    isExpanded: g,
    onAcceptQuest: x
  } = e, h = (0, d.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]), b = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]), _ = (0, O.CR)({
    quest: t
  }), v = (0, y.h)({
    location: V.dr.QUESTS_BAR,
    questConfig: t.config
  }), C = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]), E = s.useMemo(() => null == C ? {} : {
    backgroundImage: "url(".concat(C.url, ")")
  }, [C]), T = (0, f.ZP)(), w = (0, p.wj)(T);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: W.questPromoContent,
        ref: u,
        children: [(0, r.jsxs)("div", {
          className: W.details,
          children: [(0, r.jsx)(U, {
            quest: t
          }), (0, r.jsx)(m.X6q, {
            className: W.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: L.intl.format(L.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(H, {
            quest: t,
            taskDetails: n
          })]
        }), (0, r.jsx)("div", {
          className: W.cta,
          children: (0, r.jsx)(m.zxk, {
            variant: "primary",
            onClick: l ? x : true,
            loading: h,
            text: _,
            size: "sm",
            fullWidth: true
          })
        })]
      })
    }), v && null != C && (0, r.jsx)(i.animated.div, {
      className: W.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: (0, r.jsx)("div", {
        className: W.contentCollapsedBackground,
        style: E
      })
    }), (0, r.jsxs)(i.animated.div, {
      className: W.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!v && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.animated.div, {
          className: W.heroAssetDarken,
          style: {
            opacity: o.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(i.animated.div, {
          className: W.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: o.to([0, 1], [1, 0])
          }
        })]
      }), b.isAnimated ? (0, r.jsx)(A.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(z, {
          ref: e,
          asset: b,
          isExpanded: g,
          reducedMotion: c
        })
      }) : (0, r.jsx)(A.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: W.heroAsset,
          src: b.url
        })
      }), (0, r.jsx)("div", {
        className: a()(W.legibilityGradient, {
          [W.legibilityGradientDark]: w
        })
      })]
    })]
  })
}
let z = Chunk647438.forwardRef(function(e, t) {
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
  }, [i, a]), (0, r.jsx)(g.Z, {
    ref: e => {
      null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: W.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: o.url,
      type: null != (n = o.mimetype) ? n : true
    })
  })
});

function X(e) {
  var t;
  let {
    quest: n,
    taskDetails: o,
    expansionSpring: c,
    overlayRef: d,
    isExpanded: u,
    reducedMotion: p,
    containerRef: m,
    onCtxMenuOpen: f,
    onCtxMenuClose: g,
    onCtxMenuSelect: b
  } = e, j = (null == (t = n.userStatus) ? true : t.completedAt) != null, C = o.percentComplete > 0, y = (0, _.z)(n), [E, O, S] = (0, _.me)(n, o), T = s.useRef(null), w = (0, _._s)({
    quest: n
  }), A = (0, h.q8)(n), L = (0, _.Jf)(n), U = s.useCallback(() => {
    (0, P.openVideoQuestModal)({
      quest: n,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), H = null != L ? L.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(M.aY, ", ").concat(M.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: W.questAcceptedContent,
      ref: m,
      children: [(0, r.jsx)(Q.Z, {
        quest: n,
        onCtxMenuOpen: f,
        onCtxMenuClose: g,
        onCtxMenuSelect: b
      }), (0, r.jsx)("div", {
        className: W.divider
      }), (0, r.jsx)(B.Z, {
        expansionSpring: c,
        overlayRef: d,
        progressBarRef: T,
        quest: n,
        isExpanded: u,
        isHovered: false,
        shouldShowRewardsCTAWhenCollapsed: false
      }), (0, r.jsx)(q.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: T,
        isExpanded: true,
        percentComplete: H,
        activeScreen: E
      }), (0, r.jsx)(N.n, {
        children: !j && !(0, h.Gd)(n) && (0, l.EQ)(E).with(v.LI.SELECT, () => (0, r.jsx)(D.Z, {
          onConsole: () => S(V.cd.CONSOLE),
          onDesktop: () => S(V.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, {
          quest: n
        })).with(v.LI.CONSOLE, () => (0, r.jsx)(k.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(N.n, {
        children: [A && (0, r.jsx)(Z, {
          isExpanded: u,
          quest: n,
          onClick: U,
          reducedMotion: p
        }), (0, r.jsx)(R.y, {
          quest: n,
          useReducedMotion: p,
          isExpanded: u,
          awaitingConsoleConnections: w,
          hasMadeProgress: C,
          isProgressing: y,
          activeScreen: E,
          showBackButton: E !== v.LI.SELECT && O.length > 1 && !C && !y,
          onBack: () => S(null),
          taskDetails: o,
          sourceQuestContent: v.jn.QUEST_BAR_V2,
          shouldShowRewardsCTAWhenCollapsed: false
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(M.aY, ", ").concat(M.v6, ")")
      }
    })]
  })
}
async function K(e, t, n, r) {
  if ((0, h.q8)(e) && (0, E.R)(V.dr.QUESTS_BAR)) return void await (0, b.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  });
  (0, b.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  })
}
let Y = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    children: o,
    className: l,
    collapsedHeight: c,
    isExpanded: d,
    isExpansionAnimationComplete: u,
    expansionSpring: p,
    onCtxMenuOpen: m,
    onCtxMenuClose: f,
    onCtxMenuSelect: g,
    overlayRef: b,
    quest: j,
    useReducedMotion: C,
    taskDetails: y
  } = e, E = (0, h.q8)(j), O = (0, h.Vl)(j), {
    launchInGameActivity: S
  } = (0, _.zB)(j), T = s.useCallback(async () => {
    let e = j.config.features.includes(V.S7.START_QUEST_CTA),
      t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
    await K(j, v.jn.QUEST_BAR_V2, t, v.jn.QUEST_BAR_V2), E && (0, P.openVideoQuestModal)({
      quest: j,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: t
    }), O && e && S()
  }, [j, E, O, S]), w = (null == (n = j.userStatus) ? true : n.enrolledAt) != null, A = d && u;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !A,
    className: a()(l, W.contentExpanded, {
      [W.contentInteractable]: A,
      [W.contentExpandedAccepted]: w
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
      children: w ? (0, r.jsx)(X, {
        quest: j,
        taskDetails: y,
        expansionSpring: p,
        overlayRef: b,
        isExpanded: d,
        reducedMotion: C,
        onCtxMenuOpen: m,
        onCtxMenuClose: f,
        onCtxMenuSelect: g,
        containerRef: t
      }) : (0, r.jsx)(F, {
        quest: j,
        taskDetails: y,
        expansionSpring: p,
        isInteractable: A,
        reducedMotion: C,
        containerRef: t,
        isExpanded: d,
        onAcceptQuest: T
      })
    })]
  })
})