/** Chunk was on 83615 **/
/** chunk id: 495722, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
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
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk184299 = require("./184299.js"),
  Chunk685138 = require("./685138.js"),
  Chunk111131 = require("./111131.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk720293 = require("./720293.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk205511 = require("./205511.jsx"),
  Chunk694802 = require("./694802.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk50476 = require("./50476.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk743294 = require("./743294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475832 = require("./475832.js");

function U(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: d
  } = e, [p, g] = s.useState(false), f = s.useRef(null), x = (0, w.fh)(o, w.eC.QUEST_BAR_HERO_VIDEO), _ = (0, P.z0)(o, c.X.WATCH_VIDEO, P.n1.VIDEO, P.O.THUMBNAIL), b = (0, E.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != f.current && (d && (!l || p) ? (f.current.currentTime = 0, f.current.play()) : f.current.pause())
  }, [f, p, l, d]);
  let j = b(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && j === E.iw.COMPLETED,
    C = !v && (!l || p);
  return (0, r.jsxs)(m.P3F, {
    className: H.videoQuestPreviewCont,
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
      className: H.assetBodyVideoPreviewMedia
    }), null != x ? (0, r.jsx)(h.Z, {
      ref: f,
      autoPlay: false,
      poster: null == _ ? true : _.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(H.assetBodyVideoPreviewVideo, {
        [H.assetBodyVideoPreviewVisible]: C
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: x.url,
        type: null != (n = x.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: H.previewPlayButtonCont,
      children: v ? (0, r.jsx)(m.Oe7, {
        color: u.Z.colors.WHITE,
        className: H.previewPlayButton
      }) : (0, r.jsx)(m.o1U, {
        color: u.Z.colors.WHITE,
        className: H.previewPlayButton
      })
    })]
  })
}

function F(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(A.Z, {
    className: a()(H.rewardTile, H.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: C.jn.QUEST_BAR_V2,
    location: M.dr.QUESTS_BAR,
    sourceQuestContent: C.jn.QUEST_BAR_V2
  })
}

function z(e) {
  return (0, r.jsx)(m.Text, {
    className: H.description,
    variant: "text-xs/normal",
    children: (0, T.DD)({
      quest: e.quest,
      location: M.dr.QUESTS_BAR,
      questContent: C.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: C.jn.QUEST_BAR_V2,
      popoutTargetElementRef: e.popoutTargetElementRef,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    })
  })
}

function G(e) {
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
  } = e, C = s.useRef(null), y = (0, d.e7)([v.Z], () => v.Z.isEnrolling(t.id), [t]), E = s.useMemo(() => (0, w.fh)(t, w.eC.QUEST_BAR_HERO), [t]), S = (0, T.CR)({
    quest: t
  }), {
    enabled: P,
    status: A
  } = (0, O.n)({
    location: M.dr.QUESTS_BAR,
    questConfig: t.config
  }), B = s.useMemo(() => (0, w.fh)(t, w.eC.HERO_IMAGE), [t]), k = s.useMemo(() => null == B ? {} : {
    backgroundImage: "url(".concat(B.url, ")")
  }, [B]), I = (0, g.ZP)(), D = (0, p.wj)(I), q = (0, d.e7)([x.Z], () => x.Z.isFocused()), L = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: C,
      children: (0, r.jsxs)("div", {
        className: H.questPromoContent,
        ref: u,
        children: [(0, r.jsxs)("div", {
          className: H.details,
          children: [(0, r.jsx)(F, {
            quest: t
          }), (0, r.jsx)(m.Heading, {
            className: H.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: W.intl.format(W.t.EQa7os, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(z, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: C,
            onGameSheetOpened: b,
            onGameSheetClosed: j
          })]
        }), (0, r.jsx)("div", {
          className: H.cta,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            onClick: l ? _ : true,
            loading: y,
            text: S,
            size: "sm",
            icon: (0, R.getPrimaryCtaIcon)(t),
            fullWidth: true
          })
        })]
      })
    }), P && null != B && (0, r.jsxs)(i.animated.div, {
      className: H.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: [(null == A ? true : A.progressBlur) ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: H.contentCollapsedBackground,
          style: k
        }), (0, r.jsx)("div", {
          className: a()(H.contentCollapsedBackground, H.blur30),
          style: k
        }), (0, r.jsx)("div", {
          className: a()(H.contentCollapsedBackground, H.blur60),
          style: k
        }), (0, r.jsx)("div", {
          className: a()(H.contentCollapsedBackground, H.blur100),
          style: k
        })]
      }) : (0, r.jsx)("div", {
        className: a()(H.contentCollapsedBackground, H.blur),
        style: k
      }), (null == A ? true : A.shineWipe) && (0, r.jsx)(m.ZX5, {
        className: H.shine,
        "data-migration-pending": true,
        shineSize: m.rHe.DEFAULT,
        shinePaused: !q || L
      })]
    }), (0, r.jsxs)(i.animated.div, {
      className: H.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.animated.div, {
          className: H.heroAssetDarken,
          style: {
            opacity: o.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(i.animated.div, {
          className: H.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: o.to([0, 1], [1, 0])
          }
        })]
      }), E.isAnimated ? (0, r.jsx)(N.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(K, {
          ref: e,
          asset: E,
          isExpanded: h,
          reducedMotion: c
        })
      }) : (0, r.jsx)(N.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: H.heroAsset,
          src: E.url
        })
      }), (0, r.jsx)("div", {
        className: a()(H.legibilityGradient, {
          [H.legibilityGradientDark]: D
        })
      })]
    })]
  })
}
let K = Chunk473749.forwardRef(function(e, t) {
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
    className: H.heroAsset,
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
    onCtxMenuOpen: g,
    onCtxMenuClose: f,
    onCtxMenuSelect: h,
    onGameSheetOpened: x,
    onGameSheetClosed: _
  } = e, v = (null == (t = n.userStatus) ? true : t.completedAt) != null, E = o.percentComplete > 0, O = (0, j.z)(n), [S, T, w] = (0, j.me)(n, o), P = s.useRef(null), N = s.useRef(null), A = (0, j._s)({
    quest: n
  }), W = (0, y.q8)(n), F = (0, j.Jf)(n), z = s.useCallback(() => {
    (0, R.openVideoQuestModal)({
      quest: n,
      questContent: C.jn.QUEST_BAR_V2,
      sourceQuestContent: C.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), G = null != F ? F.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(Z.aY, ", ").concat(Z.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: H.questAcceptedContent,
      ref: e => {
        "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (N.current = e)
      },
      children: [(0, r.jsx)(Q.Z, {
        quest: n,
        onCtxMenuOpen: g,
        onCtxMenuClose: f,
        onCtxMenuSelect: h
      }), (0, r.jsx)("div", {
        className: H.divider
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
        percentComplete: G,
        activeScreen: S,
        popoutTargetElementRef: N,
        onGameSheetOpened: x,
        onGameSheetClosed: _
      }), (0, r.jsx)(B.n, {
        children: !v && !(0, y.Gd)(n) && (0, l.EQ)(S).with(C.LI.SELECT, () => (0, r.jsx)(V.Z, {
          onConsole: () => w(M.cd.CONSOLE),
          onDesktop: () => w(M.cd.DESKTOP)
        })).with(C.LI.DESKTOP, () => (0, r.jsx)(q.Z, {
          quest: n
        })).with(C.LI.CONSOLE, () => (0, r.jsx)(D.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(B.n, {
        children: [W && (0, r.jsx)(U, {
          isExpanded: u,
          quest: n,
          onClick: z,
          reducedMotion: p
        }), (0, r.jsx)(k.y, {
          quest: n,
          useReducedMotion: p,
          isExpanded: u,
          awaitingConsoleConnections: A,
          hasMadeProgress: E,
          isProgressing: O,
          activeScreen: S,
          showBackButton: S !== C.LI.SELECT && T.length > 1 && !E && !O,
          onBack: () => w(null),
          taskDetails: o,
          sourceQuestContent: C.jn.QUEST_BAR_V2,
          onGameSheetOpened: x,
          onGameSheetClosed: _
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(Z.aY, ", ").concat(Z.v6, ")")
      }
    })]
  })
}
async function Y(e, t, n, r) {
  let s = (0, y.q8)(e);
  return s && (0, S.R)(M.dr.QUESTS_BAR) ? void await (0, R.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  }) : (0, y.Rt)(e) && (0, S.R)(M.dr.QUESTS_BAR) ? void await (0, _.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }) : void((0, _.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), s && (0, R.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  }))
}
let J = Chunk473749.forwardRef(function(e, t) {
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
    overlayRef: _,
    quest: v,
    useReducedMotion: E,
    taskDetails: O
  } = e, {
    launchInGameActivity: S
  } = (0, j.zB)(v), T = (0, y.Rt)(v), w = s.useCallback(async () => {
    let e = T ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
    await Y(v, C.jn.QUEST_BAR_V2, e, C.jn.QUEST_BAR_V2), T && S()
  }, [v, S, T]), P = (null == (n = v.userStatus) ? true : n.enrolledAt) != null, N = d && u;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !N,
    className: a()(l, H.contentExpanded, {
      [H.contentInteractable]: N,
      [H.contentExpandedAccepted]: P
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
      children: P ? (0, r.jsx)(X, {
        quest: v,
        taskDetails: O,
        expansionSpring: p,
        overlayRef: _,
        isExpanded: d,
        reducedMotion: E,
        onCtxMenuOpen: m,
        onCtxMenuClose: g,
        onCtxMenuSelect: f,
        containerRef: t,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      }) : (0, r.jsx)(G, {
        quest: v,
        taskDetails: O,
        expansionSpring: p,
        isInteractable: N,
        reducedMotion: E,
        containerRef: t,
        isExpanded: d,
        onAcceptQuest: w,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      })
    })]
  })
})