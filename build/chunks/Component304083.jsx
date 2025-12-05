/** Chunk was on 83615 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => K
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk111131 = require("./111131.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk387745 = require("./387745.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk217599 = require("./217599.jsx"),
  Chunk373322 = require("./373322.jsx"),
  Chunk661578 = require("./661578.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk554768 = require("./554768.jsx"),
  Chunk167308 = require("./167308.jsx"),
  Chunk26275 = require("./26275.jsx"),
  Chunk676728 = require("./676728.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk945165 = require("./945165.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk355488 = require("./355488.js");

function W(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: c
  } = e, [d, m] = s.useState(false), g = s.useRef(null), x = (0, y.fh)(o, y.eC.QUEST_BAR_HERO_VIDEO, true, false), h = (0, y.fh)(o, y.eC.VIDEO_PLAYER_THUMBNAIL, true, false), _ = (0, b.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != g.current && (c && (!l || d) ? (g.current.currentTime = 0, g.current.play()) : g.current.pause())
  }, [g, d, l, c]);
  let j = _(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && j === b.iw.COMPLETED,
    C = !v && (!l || d);
  return (0, r.jsxs)(p.P3F, {
    className: M.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !d && m(true)
    },
    onMouseLeave: () => {
      l && d && m(false)
    },
    children: [null != h && (0, r.jsx)("img", {
      alt: "",
      src: h.url,
      className: M.assetBodyVideoPreviewMedia
    }), null != x ? (0, r.jsx)(f.Z, {
      ref: g,
      autoPlay: false,
      poster: null == h ? true : h.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(M.assetBodyVideoPreviewVideo, {
        [M.assetBodyVideoPreviewVisible]: C
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: x.url,
        type: null != (n = x.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: M.previewPlayButtonCont,
      children: v ? (0, r.jsx)(p.Oe7, {
        color: u.Z.colors.WHITE,
        className: M.previewPlayButton
      }) : (0, r.jsx)(p.o1U, {
        color: u.Z.colors.WHITE,
        className: M.previewPlayButton
      })
    })]
  })
}

function Z(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(w.Z, {
    className: a()(M.rewardTile, M.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: _.jn.QUEST_BAR_V2,
    location: Q.dr.QUESTS_BAR,
    sourceQuestContent: _.jn.QUEST_BAR_V2
  })
}

function U(e) {
  return (0, r.jsx)(p.Text, {
    className: M.description,
    variant: "text-xs/normal",
    children: (0, v.DD)({
      quest: e.quest,
      location: Q.dr.QUESTS_BAR,
      questContent: _.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: _.jn.QUEST_BAR_V2,
      popoutTargetElementRef: e.popoutTargetElementRef,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    })
  })
}

function H(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: o,
    isInteractable: l,
    reducedMotion: u,
    containerRef: f,
    isExpanded: g,
    onAcceptQuest: x,
    onGameSheetOpened: _,
    onGameSheetClosed: b
  } = e, j = s.useRef(null), C = (0, c.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]), E = s.useMemo(() => (0, y.fh)(t, y.eC.QUEST_BAR_HERO), [t]), O = (0, v.CR)({
    quest: t
  }), S = s.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]), w = s.useMemo(() => null == S ? {} : {
    backgroundImage: "url(".concat(S.url, ")")
  }, [S]), N = (0, m.ZP)(), R = (0, d.wj)(N);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: j,
      children: (0, r.jsxs)("div", {
        className: M.questPromoContent,
        ref: f,
        children: [(0, r.jsxs)("div", {
          className: M.details,
          children: [(0, r.jsx)(Z, {
            quest: t
          }), (0, r.jsx)(p.Heading, {
            className: M.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: V.intl.format(V.t.EQa7os, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(U, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: j,
            onGameSheetOpened: _,
            onGameSheetClosed: b
          })]
        }), (0, r.jsx)("div", {
          className: M.cta,
          children: (0, r.jsx)(p.Button, {
            variant: "primary",
            onClick: l ? x : true,
            loading: C,
            text: O,
            size: "sm",
            icon: (0, P.getPrimaryCtaIcon)(t),
            fullWidth: true
          })
        })]
      })
    }), null != S && (0, r.jsx)(i.animated.div, {
      className: M.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: (0, r.jsx)("div", {
        className: a()(M.contentCollapsedBackground, M.blur),
        style: w
      })
    }), (0, r.jsxs)(i.animated.div, {
      className: M.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [E.isAnimated ? (0, r.jsx)(T.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(z, {
          ref: e,
          asset: E,
          isExpanded: g,
          reducedMotion: u
        })
      }) : (0, r.jsx)(T.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: M.heroAsset,
          src: E.url
        })
      }), (0, r.jsx)("div", {
        className: a()(M.legibilityGradient, {
          [M.legibilityGradientDark]: R
        })
      })]
    })]
  })
}
let z = Chunk473749.forwardRef(function(e, t) {
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
    className: M.heroAsset,
    controls: false,
    children: (0, r.jsx)("source", {
      src: o.url,
      type: null != (n = o.mimetype) ? n : true
    })
  })
});

function G(e) {
  var t;
  let {
    quest: n,
    taskDetails: o,
    expansionSpring: c,
    overlayRef: u,
    isExpanded: d,
    reducedMotion: p,
    containerRef: m,
    onCtxMenuOpen: f,
    onCtxMenuClose: g,
    onCtxMenuSelect: h,
    onGameSheetOpened: b,
    onGameSheetClosed: j
  } = e, v = (null == (t = n.userStatus) ? true : t.completedAt) != null, y = o.percentComplete > 0, S = (0, C.z)(n), [T, w, V] = (0, C.me)(n, o), Z = s.useRef(null), U = s.useRef(null), H = (0, C._s)({
    quest: n
  }), z = (0, O.q8)(n), G = (0, C.Jf)(n), F = s.useCallback(() => {
    (0, P.openVideoQuestModal)({
      quest: n,
      questContent: _.jn.QUEST_BAR_V2,
      sourceQuestContent: _.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), K = null != G ? G.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(L.cd, ", ").concat(L.v$, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: e => {
        "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (U.current = e)
      },
      children: [(0, r.jsx)(D.Z, {
        quest: n,
        onCtxMenuOpen: f,
        onCtxMenuClose: g,
        onCtxMenuSelect: h
      }), (0, r.jsx)("div", {
        className: M.divider
      }), (0, r.jsx)(R.Z, {
        expansionSpring: c,
        overlayRef: u,
        progressBarRef: Z,
        quest: n,
        isExpanded: d,
        isHovered: false
      }), (0, r.jsx)(I.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: Z,
        isExpanded: true,
        percentComplete: K,
        activeScreen: T,
        popoutTargetElementRef: U,
        onGameSheetOpened: b,
        onGameSheetClosed: j
      }), (0, r.jsx)(B.n, {
        children: !v && !(0, E.Gd)(n) && (0, l.EQ)(T).with(_.LI.SELECT, () => (0, r.jsx)(q.Z, {
          onConsole: () => V(Q.cd.CONSOLE),
          onDesktop: () => V(Q.cd.DESKTOP)
        })).with(_.LI.DESKTOP, () => (0, r.jsx)(k.Z, {
          quest: n
        })).with(_.LI.CONSOLE, () => (0, r.jsx)(A.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(B.n, {
        children: [z && (0, r.jsx)(W, {
          isExpanded: d,
          quest: n,
          onClick: F,
          reducedMotion: p
        }), (0, r.jsx)(N.r, {
          quest: n,
          useReducedMotion: p,
          isExpanded: d,
          awaitingConsoleConnections: H,
          hasMadeProgress: y,
          isProgressing: S,
          activeScreen: T,
          showBackButton: T !== _.LI.SELECT && w.length > 1 && !y && !S,
          onBack: () => V(null),
          taskDetails: o,
          sourceQuestContent: _.jn.QUEST_BAR_V2,
          onGameSheetOpened: b,
          onGameSheetClosed: j
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(L.cd, ", ").concat(L.v$, ")")
      }
    })]
  })
}
async function F(e, t, n, r) {
  let s = (0, O.q8)(e);
  return s && (0, j.R)(Q.dr.QUESTS_BAR) ? void await (0, P.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  }) : (0, S.Rt)(e) && (0, j.R)(Q.dr.QUESTS_BAR) ? void await (0, g.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }) : void((0, g.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), s && (0, P.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  }))
}
let K = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    children: o,
    className: l,
    collapsedHeight: c,
    isExpanded: u,
    isExpansionAnimationComplete: d,
    expansionSpring: p,
    onCtxMenuOpen: m,
    onCtxMenuClose: f,
    onCtxMenuSelect: g,
    onGameSheetOpened: h,
    onGameSheetClosed: b,
    overlayRef: j,
    quest: v,
    useReducedMotion: y,
    taskDetails: E
  } = e, {
    launchInGameActivity: O
  } = (0, C.zB)(v), T = (0, S.Rt)(v), w = s.useCallback(async () => {
    let e = T ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
    await F(v, _.jn.QUEST_BAR_V2, e, _.jn.QUEST_BAR_V2), T && O()
  }, [v, O, T]), P = (null == (n = v.userStatus) ? true : n.enrolledAt) != null, N = u && d;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !N,
    className: a()(l, M.contentExpanded, {
      [M.contentInteractable]: N,
      [M.contentExpandedAccepted]: P
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
      children: P ? (0, r.jsx)(G, {
        quest: v,
        taskDetails: E,
        expansionSpring: p,
        overlayRef: j,
        isExpanded: u,
        reducedMotion: y,
        onCtxMenuOpen: m,
        onCtxMenuClose: f,
        onCtxMenuSelect: g,
        containerRef: t,
        onGameSheetOpened: h,
        onGameSheetClosed: b
      }) : (0, r.jsx)(H, {
        quest: v,
        taskDetails: E,
        expansionSpring: p,
        isInteractable: N,
        reducedMotion: y,
        containerRef: t,
        isExpanded: u,
        onAcceptQuest: w,
        onGameSheetOpened: h,
        onGameSheetClosed: b
      })
    })]
  })
})