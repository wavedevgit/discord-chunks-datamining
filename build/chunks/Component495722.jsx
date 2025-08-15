/** Chunk was on 42521 **/
/** chunk id: 495722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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

function W(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: u
  } = e, [p, g] = s.useState(false), x = s.useRef(null), h = (0, O.fh)(o, O.eC.QUEST_BAR_HERO_VIDEO), b = (0, S.z0)(o, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL), _ = (0, C.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != x.current && (u && (!l || p) ? (x.current.currentTime = 0, x.current.play()) : x.current.pause())
  }, [x, p, l, u]);
  let j = _(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && j === C.iw.COMPLETED,
    y = !v && (!l || p);
  return (0, r.jsxs)(m.P3F, {
    className: L.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !p && g(true)
    },
    onMouseLeave: () => {
      l && p && g(false)
    },
    children: [null != b && (0, r.jsx)("img", {
      alt: "",
      src: b.url,
      className: L.assetBodyVideoPreviewMedia
    }), null != h ? (0, r.jsx)(f.Z, {
      ref: x,
      autoPlay: false,
      poster: null == b ? true : b.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(L.assetBodyVideoPreviewVideo, {
        [L.assetBodyVideoPreviewVisible]: y
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: h.url,
        type: null != (n = h.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: L.previewPlayButtonCont,
      children: v ? (0, r.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: L.previewPlayButton
      }) : (0, r.jsx)(m.o1U, {
        color: d.Z.colors.WHITE,
        className: L.previewPlayButton
      })
    })]
  })
}

function Z(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(T.Z, {
    className: a()(L.rewardTile, L.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    location: D.dr.QUESTS_BAR,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function U(e) {
  return (0, r.jsx)(m.Text, {
    className: L.description,
    variant: "text-xs/normal",
    children: (0, E.DD)({
      quest: e.quest,
      location: D.dr.QUESTS_BAR,
      questContent: v.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    })
  })
}

function H(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: o,
    isInteractable: l,
    reducedMotion: c,
    containerRef: d,
    isExpanded: f,
    onAcceptQuest: x
  } = e, h = (0, u.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]), b = s.useMemo(() => (0, O.fh)(t, O.eC.QUEST_BAR_HERO), [t]), _ = (0, E.CR)({
    quest: t
  }), v = (0, y.h)({
    location: D.dr.QUESTS_BAR,
    questConfig: t.config
  }), C = s.useMemo(() => (0, O.fh)(t, O.eC.HERO_IMAGE), [t]), S = s.useMemo(() => null == C ? {} : {
    backgroundImage: "url(".concat(C.url, ")")
  }, [C]), T = (0, g.ZP)(), w = (0, p.wj)(T);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: L.questPromoContent,
        ref: d,
        children: [(0, r.jsxs)("div", {
          className: L.details,
          children: [(0, r.jsx)(Z, {
            quest: t
          }), (0, r.jsx)(m.X6q, {
            className: L.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: M.intl.format(M.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(U, {
            quest: t,
            taskDetails: n
          })]
        }), (0, r.jsx)("div", {
          className: L.cta,
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
      className: L.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: (0, r.jsx)("div", {
        className: L.contentCollapsedBackground,
        style: S
      })
    }), (0, r.jsxs)(i.animated.div, {
      className: L.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!v && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.animated.div, {
          className: L.heroAssetDarken,
          style: {
            opacity: o.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(i.animated.div, {
          className: L.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: o.to([0, 1], [1, 0])
          }
        })]
      }), b.isAnimated ? (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(F, {
          ref: e,
          asset: b,
          isExpanded: f,
          reducedMotion: c
        })
      }) : (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: L.heroAsset,
          src: b.url
        })
      }), (0, r.jsx)("div", {
        className: a()(L.legibilityGradient, {
          [L.legibilityGradientDark]: w
        })
      })]
    })]
  })
}
let F = Chunk73800.forwardRef(function(e, t) {
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
  }, [i, a]), (0, r.jsx)(f.Z, {
    ref: e => {
      null != e && (l.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: L.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: o.url,
      type: null != (n = o.mimetype) ? n : true
    })
  })
});

function z(e) {
  var t;
  let {
    quest: n,
    taskDetails: o,
    expansionSpring: c,
    overlayRef: u,
    isExpanded: d,
    reducedMotion: p,
    containerRef: m,
    onCtxMenuOpen: g,
    onCtxMenuClose: f,
    onCtxMenuSelect: b
  } = e, j = (null == (t = n.userStatus) ? true : t.completedAt) != null, C = o.percentComplete > 0, y = (0, _.z)(n), [E, O, S] = (0, _.me)(n, o), T = s.useRef(null), P = (0, _._s)({
    quest: n
  }), M = (0, h.q8)(n), Z = (0, _.Jf)(n), U = s.useCallback(() => {
    (0, w.openVideoQuestModal)({
      quest: n,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), H = null != Z ? Z.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: L.questAcceptedContent,
      ref: m,
      children: [(0, r.jsx)(I.Z, {
        quest: n,
        onCtxMenuOpen: g,
        onCtxMenuClose: f,
        onCtxMenuSelect: b
      }), (0, r.jsx)("div", {
        className: L.divider
      }), (0, r.jsx)(R.Z, {
        expansionSpring: c,
        overlayRef: u,
        progressBarRef: T,
        quest: n,
        isExpanded: d,
        isHovered: false,
        shouldShowRewardsCTAWhenCollapsed: false
      }), (0, r.jsx)(q.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: T,
        isExpanded: true,
        percentComplete: H,
        activeScreen: E
      }), (0, r.jsx)(A.n, {
        children: !j && !(0, h.Gd)(n) && (0, l.EQ)(E).with(v.LI.SELECT, () => (0, r.jsx)(Q.Z, {
          onConsole: () => S(D.cd.CONSOLE),
          onDesktop: () => S(D.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, r.jsx)(k.Z, {
          quest: n
        })).with(v.LI.CONSOLE, () => (0, r.jsx)(B.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(A.n, {
        children: [M && (0, r.jsx)(W, {
          isExpanded: d,
          quest: n,
          onClick: U,
          reducedMotion: p
        }), (0, r.jsx)(N.y, {
          quest: n,
          useReducedMotion: p,
          isExpanded: d,
          awaitingConsoleConnections: P,
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
      className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")")
      }
    })]
  })
}
let X = Chunk73800.forwardRef(function(e, t) {
  var n;
  let {
    children: o,
    className: l,
    collapsedHeight: c,
    isExpanded: u,
    isExpansionAnimationComplete: d,
    expansionSpring: p,
    onCtxMenuOpen: m,
    onCtxMenuClose: g,
    onCtxMenuSelect: f,
    overlayRef: j,
    quest: C,
    useReducedMotion: y,
    taskDetails: E
  } = e, O = (0, h.q8)(C), S = (0, h.Vl)(C), {
    launchInGameActivity: T
  } = (0, _.zB)(C), P = s.useCallback(() => {
    let e = C.config.features.includes(D.S7.START_QUEST_CTA),
      t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
    (0, b.AH)(C.id, {
      questContent: v.jn.QUEST_BAR_V2,
      questContentCTA: t,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), O && (0, w.openVideoQuestModal)({
      quest: C,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: t
    }), S && e && T()
  }, [C, O, S, T]), A = (null == (n = C.userStatus) ? true : n.enrolledAt) != null, N = u && d;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !N,
    className: a()(l, L.contentExpanded, {
      [L.contentInteractable]: N,
      [L.contentExpandedAccepted]: A
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
      children: A ? (0, r.jsx)(z, {
        quest: C,
        taskDetails: E,
        expansionSpring: p,
        overlayRef: j,
        isExpanded: u,
        reducedMotion: y,
        onCtxMenuOpen: m,
        onCtxMenuClose: g,
        onCtxMenuSelect: f,
        containerRef: t
      }) : (0, r.jsx)(H, {
        quest: C,
        taskDetails: E,
        expansionSpring: p,
        isInteractable: N,
        reducedMotion: y,
        containerRef: t,
        isExpanded: u,
        onAcceptQuest: P
      })
    })]
  })
})