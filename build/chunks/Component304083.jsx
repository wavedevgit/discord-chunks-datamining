/** Chunk was on 75393 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function G(e) {
  var t, n;
  let {
    quest: i,
    onClick: s,
    reducedMotion: o,
    isExpanded: c
  } = e, [u, p] = r.useState(false), x = r.useRef(null), f = (0, C.fh)(i, C.eC.QUEST_BAR_HERO_VIDEO, true, false), g = (0, C.fh)(i, C.eC.VIDEO_PLAYER_THUMBNAIL, true, false), b = (0, v.km)(e => e.getVideoProgressState);
  r.useEffect(() => {
    null != x.current && (c && (!o || u) ? (x.current.currentTime = 0, x.current.play()) : x.current.pause())
  }, [x, u, o, c]);
  let j = b(i.id),
    _ = (null == (t = i.userStatus) ? true : t.completedAt) != null && j === v.iw.COMPLETED,
    y = !_ && (!o || u);
  return (0, a.jsxs)(m.P3F, {
    className: F.videoQuestPreviewCont,
    onClick: s,
    onMouseEnter: () => {
      o && !u && p(true)
    },
    onMouseLeave: () => {
      o && u && p(false)
    },
    children: [null != g && (0, a.jsx)("img", {
      alt: "",
      src: g.url,
      className: F.assetBodyVideoPreviewMedia
    }), null != f ? (0, a.jsx)(h.Z, {
      ref: x,
      autoPlay: false,
      poster: null == g ? true : g.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: l()(F.assetBodyVideoPreviewVideo, {
        [F.assetBodyVideoPreviewVisible]: y
      }),
      controls: false,
      children: (0, a.jsx)("source", {
        src: f.url,
        type: null != (n = f.mimetype) ? n : true
      })
    }) : null, (0, a.jsx)("div", {
      className: F.previewPlayButtonCont,
      children: _ ? (0, a.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: F.previewPlayButton
      }) : (0, a.jsx)(m.o1U, {
        color: d.Z.colors.WHITE,
        className: F.previewPlayButton
      })
    })]
  })
}

function V(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)(N.Z, {
    className: l()(F.rewardTile, F.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: b.jn.QUEST_BAR_V2,
    location: M.dr.QUESTS_BAR,
    sourceQuestContent: b.jn.QUEST_BAR_V2
  })
}

function H(e) {
  return (0, a.jsx)(m.Text, {
    className: F.description,
    variant: "text-xs/normal",
    children: (0, _.DD)({
      quest: e.quest,
      location: M.dr.QUESTS_BAR,
      questContent: b.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: b.jn.QUEST_BAR_V2,
      popoutTargetElementRef: e.popoutTargetElementRef,
      onGameSheetOpened: e.onGameSheetOpened,
      onGameSheetClosed: e.onGameSheetClosed
    })
  })
}

function W(e) {
  let {
    quest: t,
    taskDetails: n,
    expansionSpring: i,
    isInteractable: o,
    reducedMotion: d,
    containerRef: h,
    isExpanded: x,
    onAcceptQuest: f,
    onGameSheetOpened: b,
    onGameSheetClosed: v
  } = e, j = r.useRef(null), y = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]), S = r.useMemo(() => (0, C.fh)(t, C.eC.QUEST_BAR_HERO), [t]), E = (0, _.CR)({
    quest: t
  }), O = r.useMemo(() => (0, C.fh)(t, C.eC.HERO_IMAGE), [t]), N = r.useMemo(() => null == O ? {} : {
    backgroundImage: "url(".concat(O.url, ")")
  }, [O]), w = (0, p.ZP)(), I = (0, u.wj)(w);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: j,
      children: (0, a.jsxs)("div", {
        className: F.questPromoContent,
        ref: h,
        children: [(0, a.jsxs)("div", {
          className: F.details,
          children: [(0, a.jsx)(V, {
            quest: t
          }), (0, a.jsx)(m.Heading, {
            className: F.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: B.intl.format(B.t.EQa7os, {
              questName: t.config.messages.questName
            })
          }), (0, a.jsx)(H, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: j,
            onGameSheetOpened: b,
            onGameSheetClosed: v
          })]
        }), (0, a.jsx)("div", {
          className: F.cta,
          children: (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: o ? f : true,
            loading: y,
            text: E,
            size: "sm",
            icon: (0, P.getPrimaryCtaIcon)(t),
            fullWidth: true
          })
        })]
      })
    }), null != O && (0, a.jsx)(s.animated.div, {
      className: F.contentCollapsedBackgroundWrapper,
      style: {
        opacity: i.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: l()(F.contentCollapsedBackground, F.blur),
        style: N
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: F.heroAssetWrapper,
      style: {
        backdropFilter: i.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: i.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [S.isAnimated ? (0, a.jsx)(T.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(z, {
          ref: e,
          asset: S,
          isExpanded: x,
          reducedMotion: d
        })
      }) : (0, a.jsx)(T.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: F.heroAsset,
          src: S.url
        })
      }), (0, a.jsx)("div", {
        className: l()(F.legibilityGradient, {
          [F.legibilityGradientDark]: I
        })
      })]
    })]
  })
}
let z = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    asset: i,
    isExpanded: l,
    reducedMotion: s
  } = e, o = r.useRef(null);
  return r.useEffect(() => {
    null != o.current && o.current.pause()
  }, []), r.useEffect(() => {
    null == o.current || s || (l ? (o.current.currentTime = 0, o.current.play()) : o.current.pause())
  }, [s, l]), (0, a.jsx)(h.Z, {
    ref: e => {
      null != e && (o.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: F.heroAsset,
    controls: false,
    children: (0, a.jsx)("source", {
      src: i.url,
      type: null != (n = i.mimetype) ? n : true
    })
  })
});

function K(e) {
  var t;
  let {
    quest: n,
    taskDetails: i,
    expansionSpring: c,
    overlayRef: d,
    isExpanded: u,
    reducedMotion: m,
    containerRef: p,
    onCtxMenuOpen: h,
    onCtxMenuClose: x,
    onCtxMenuSelect: g,
    onGameSheetOpened: v,
    onGameSheetClosed: j
  } = e, _ = (null == (t = n.userStatus) ? true : t.completedAt) != null, C = i.percentComplete > 0, O = (0, y.z)(n), [T, N, B] = (0, y.me)(n, i), V = r.useRef(null), H = r.useRef(null), W = (0, y._s)({
    quest: n
  }), z = (0, E.q8)(n), K = (0, y.Jf)(n), q = r.useCallback(() => {
    (0, P.openVideoQuestModal)({
      quest: n,
      questContent: b.jn.QUEST_BAR_V2,
      sourceQuestContent: b.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: f.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), Q = null != K ? K.percentComplete : i.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: l()(F.postEnrollmentBackground, F.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(U.cd, ", ").concat(U.v$, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, a.jsxs)("div", {
      className: F.questAcceptedContent,
      ref: e => {
        "function" == typeof p ? p(e) : null != p && (p.current = e), null != e && (H.current = e)
      },
      children: [(0, a.jsx)(Z.Z, {
        quest: n,
        onCtxMenuOpen: h,
        onCtxMenuClose: x,
        onCtxMenuSelect: g
      }), (0, a.jsx)("div", {
        className: F.divider
      }), (0, a.jsx)(I.Z, {
        expansionSpring: c,
        overlayRef: d,
        progressBarRef: V,
        quest: n,
        isExpanded: u,
        isHovered: false
      }), (0, a.jsx)(D.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: V,
        isExpanded: true,
        percentComplete: Q,
        activeScreen: T,
        popoutTargetElementRef: H,
        onGameSheetOpened: v,
        onGameSheetClosed: j
      }), (0, a.jsx)(R.n, {
        children: !_ && !(0, S.Gd)(n) && (0, o.EQ)(T).with(b.LI.SELECT, () => (0, a.jsx)(L.Z, {
          onConsole: () => B(M.cd.CONSOLE),
          onDesktop: () => B(M.cd.DESKTOP)
        })).with(b.LI.DESKTOP, () => (0, a.jsx)(A.Z, {
          quest: n
        })).with(b.LI.CONSOLE, () => (0, a.jsx)(k.Z, {
          quest: n,
          taskDetails: i
        })).exhaustive()
      }), (0, a.jsxs)(R.n, {
        children: [z && (0, a.jsx)(G, {
          isExpanded: u,
          quest: n,
          onClick: q,
          reducedMotion: m
        }), (0, a.jsx)(w.r, {
          quest: n,
          useReducedMotion: m,
          isExpanded: u,
          awaitingConsoleConnections: W,
          hasMadeProgress: C,
          isProgressing: O,
          activeScreen: T,
          showBackButton: T !== b.LI.SELECT && N.length > 1 && !C && !O,
          onBack: () => B(null),
          taskDetails: i,
          sourceQuestContent: b.jn.QUEST_BAR_V2,
          onGameSheetOpened: v,
          onGameSheetClosed: j
        })]
      })]
    }), (0, a.jsx)("div", {
      className: l()(F.postEnrollmentBackground, F.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(U.cd, ", ").concat(U.v$, ")")
      }
    })]
  })
}
async function q(e, t, n, a) {
  let r = (0, E.q8)(e);
  return r && (0, j.R)(M.dr.QUESTS_BAR) ? void await (0, P.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, O.Rt)(e) && (0, j.R)(M.dr.QUESTS_BAR) ? void await (0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : void((0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }), r && (0, P.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }))
}
let Q = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    children: i,
    className: o,
    collapsedHeight: c,
    isExpanded: d,
    isExpansionAnimationComplete: u,
    expansionSpring: m,
    onCtxMenuOpen: p,
    onCtxMenuClose: h,
    onCtxMenuSelect: x,
    onGameSheetOpened: g,
    onGameSheetClosed: v,
    overlayRef: j,
    quest: _,
    useReducedMotion: C,
    taskDetails: S
  } = e, {
    launchInGameActivity: E
  } = (0, y.zB)(_), T = (0, O.Rt)(_), N = r.useCallback(async () => {
    let e = T ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
    await q(_, b.jn.QUEST_BAR_V2, e, b.jn.QUEST_BAR_V2), T && E()
  }, [_, E, T]), P = (null == (n = _.userStatus) ? true : n.enrolledAt) != null, w = d && u;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !w,
    className: l()(o, F.contentExpanded, {
      [F.contentInteractable]: w,
      [F.contentExpandedAccepted]: P
    }),
    style: {
      transform: (0, s.to)([m.to({
        range: [0, 1],
        output: [0, false]
      }), m.to({
        range: [0, 1],
        output: [0, c]
      })], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
    },
    children: [i, (0, a.jsx)(s.animated.div, {
      style: {
        opacity: 1
      },
      children: P ? (0, a.jsx)(K, {
        quest: _,
        taskDetails: S,
        expansionSpring: m,
        overlayRef: j,
        isExpanded: d,
        reducedMotion: C,
        onCtxMenuOpen: p,
        onCtxMenuClose: h,
        onCtxMenuSelect: x,
        containerRef: t,
        onGameSheetOpened: g,
        onGameSheetClosed: v
      }) : (0, a.jsx)(W, {
        quest: _,
        taskDetails: S,
        expansionSpring: m,
        isInteractable: w,
        reducedMotion: C,
        containerRef: t,
        isExpanded: d,
        onAcceptQuest: N,
        onGameSheetOpened: g,
        onGameSheetClosed: v
      })
    })]
  })
})