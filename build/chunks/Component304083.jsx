/** Chunk was on 83615 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
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
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk685138 = require("./685138.js"),
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

function U(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: c
  } = e, [u, m] = s.useState(false), g = s.useRef(null), h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO, true, false), x = (0, S.fh)(o, S.eC.VIDEO_PLAYER_THUMBNAIL, true, false), _ = (0, v.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != g.current && (c && (!l || u) ? (g.current.currentTime = 0, g.current.play()) : g.current.pause())
  }, [g, u, l, c]);
  let b = _(o.id),
    j = (null == (t = o.userStatus) ? true : t.completedAt) != null && b === v.iw.COMPLETED,
    C = !j && (!l || u);
  return (0, r.jsxs)(p.P3F, {
    className: H.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !u && m(true)
    },
    onMouseLeave: () => {
      l && u && m(false)
    },
    children: [null != x && (0, r.jsx)("img", {
      alt: "",
      src: x.url,
      className: H.assetBodyVideoPreviewMedia
    }), null != h ? (0, r.jsx)(f.Z, {
      ref: g,
      autoPlay: false,
      poster: null == x ? true : x.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(H.assetBodyVideoPreviewVideo, {
        [H.assetBodyVideoPreviewVisible]: C
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: h.url,
        type: null != (n = h.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: H.previewPlayButtonCont,
      children: j ? (0, r.jsx)(p.Oe7, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      }) : (0, r.jsx)(p.o1U, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      })
    })]
  })
}

function F(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(R.Z, {
    className: a()(H.rewardTile, H.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: j.jn.QUEST_BAR_V2,
    location: M.dr.QUESTS_BAR,
    sourceQuestContent: j.jn.QUEST_BAR_V2
  })
}

function z(e) {
  return (0, r.jsx)(p.Text, {
    className: H.description,
    variant: "text-xs/normal",
    children: (0, E.DD)({
      quest: e.quest,
      location: M.dr.QUESTS_BAR,
      questContent: j.jn.QUEST_BAR_V2,
      taskDetails: e.taskDetails,
      sourceQuestContent: j.jn.QUEST_BAR_V2,
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
    reducedMotion: d,
    containerRef: f,
    isExpanded: x,
    onAcceptQuest: _,
    onGameSheetOpened: j,
    onGameSheetClosed: v
  } = e, y = s.useRef(null), O = (0, c.e7)([b.Z], () => b.Z.isEnrolling(t.id), [t]), T = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]), w = (0, E.CR)({
    quest: t
  }), {
    enabled: P,
    status: R
  } = (0, C.n)({
    location: M.dr.QUESTS_BAR,
    questConfig: t.config
  }), B = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]), k = s.useMemo(() => null == B ? {} : {
    backgroundImage: "url(".concat(B.url, ")")
  }, [B]), I = (0, m.ZP)(), D = (0, u.wj)(I), q = (0, c.e7)([h.Z], () => h.Z.isFocused()), L = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: y,
      children: (0, r.jsxs)("div", {
        className: H.questPromoContent,
        ref: f,
        children: [(0, r.jsxs)("div", {
          className: H.details,
          children: [(0, r.jsx)(F, {
            quest: t
          }), (0, r.jsx)(p.Heading, {
            className: H.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: W.intl.format(W.t.EQa7os, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(z, {
            quest: t,
            taskDetails: n,
            popoutTargetElementRef: y,
            onGameSheetOpened: j,
            onGameSheetClosed: v
          })]
        }), (0, r.jsx)("div", {
          className: H.cta,
          children: (0, r.jsx)(p.Button, {
            variant: "primary",
            onClick: l ? _ : true,
            loading: O,
            text: w,
            size: "sm",
            icon: (0, A.getPrimaryCtaIcon)(t),
            fullWidth: true
          })
        })]
      })
    }), P && null != B && (0, r.jsxs)(i.animated.div, {
      className: H.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: [(null == R ? true : R.progressBlur) ? (0, r.jsxs)(r.Fragment, {
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
      }), (null == R ? true : R.shineWipe) && (0, r.jsx)(p.ZX5, {
        className: H.shine,
        "data-migration-pending": true,
        shineSize: p.rHe.DEFAULT,
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
      }), T.isAnimated ? (0, r.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(K, {
          ref: e,
          asset: T,
          isExpanded: x,
          reducedMotion: d
        })
      }) : (0, r.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: H.heroAsset,
          src: T.url
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
  }, [i, a]), (0, r.jsx)(f.Z, {
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
    onGameSheetClosed: b
  } = e, v = (null == (t = n.userStatus) ? true : t.completedAt) != null, C = o.percentComplete > 0, y = (0, O.z)(n), [E, S, P] = (0, O.me)(n, o), N = s.useRef(null), R = s.useRef(null), W = (0, O._s)({
    quest: n
  }), F = (0, w.q8)(n), z = (0, O.Jf)(n), G = s.useCallback(() => {
    (0, A.openVideoQuestModal)({
      quest: n,
      questContent: j.jn.QUEST_BAR_V2,
      sourceQuestContent: j.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), K = null != z ? z.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(Z.cd, ", ").concat(Z.v$, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: H.questAcceptedContent,
      ref: e => {
        "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (R.current = e)
      },
      children: [(0, r.jsx)(Q.Z, {
        quest: n,
        onCtxMenuOpen: g,
        onCtxMenuClose: f,
        onCtxMenuSelect: h
      }), (0, r.jsx)("div", {
        className: H.divider
      }), (0, r.jsx)(k.Z, {
        expansionSpring: c,
        overlayRef: d,
        progressBarRef: N,
        quest: n,
        isExpanded: u,
        isHovered: false
      }), (0, r.jsx)(L.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: N,
        isExpanded: true,
        percentComplete: K,
        activeScreen: E,
        popoutTargetElementRef: R,
        onGameSheetOpened: x,
        onGameSheetClosed: b
      }), (0, r.jsx)(D.n, {
        children: !v && !(0, T.Gd)(n) && (0, l.EQ)(E).with(j.LI.SELECT, () => (0, r.jsx)(V.Z, {
          onConsole: () => P(M.cd.CONSOLE),
          onDesktop: () => P(M.cd.DESKTOP)
        })).with(j.LI.DESKTOP, () => (0, r.jsx)(q.Z, {
          quest: n
        })).with(j.LI.CONSOLE, () => (0, r.jsx)(I.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(D.n, {
        children: [F && (0, r.jsx)(U, {
          isExpanded: u,
          quest: n,
          onClick: G,
          reducedMotion: p
        }), (0, r.jsx)(B.r, {
          quest: n,
          useReducedMotion: p,
          isExpanded: u,
          awaitingConsoleConnections: W,
          hasMadeProgress: C,
          isProgressing: y,
          activeScreen: E,
          showBackButton: E !== j.LI.SELECT && S.length > 1 && !C && !y,
          onBack: () => P(null),
          taskDetails: o,
          sourceQuestContent: j.jn.QUEST_BAR_V2,
          onGameSheetOpened: x,
          onGameSheetClosed: b
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(Z.cd, ", ").concat(Z.v$, ")")
      }
    })]
  })
}
async function Y(e, t, n, r) {
  let s = (0, w.q8)(e);
  return s && (0, y.R)(M.dr.QUESTS_BAR) ? void await (0, A.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r,
    sourceQuestContentCTA: n
  }) : (0, P.Rt)(e) && (0, y.R)(M.dr.QUESTS_BAR) ? void await (0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }) : void((0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: r
  }), s && (0, A.openVideoQuestModal)({
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
    overlayRef: b,
    quest: v,
    useReducedMotion: C,
    taskDetails: y
  } = e, {
    launchInGameActivity: E
  } = (0, O.zB)(v), S = (0, P.Rt)(v), T = s.useCallback(async () => {
    let e = S ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
    await Y(v, j.jn.QUEST_BAR_V2, e, j.jn.QUEST_BAR_V2), S && E()
  }, [v, E, S]), w = (null == (n = v.userStatus) ? true : n.enrolledAt) != null, N = d && u;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !N,
    className: a()(l, H.contentExpanded, {
      [H.contentInteractable]: N,
      [H.contentExpandedAccepted]: w
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
        quest: v,
        taskDetails: y,
        expansionSpring: p,
        overlayRef: b,
        isExpanded: d,
        reducedMotion: C,
        onCtxMenuOpen: m,
        onCtxMenuClose: g,
        onCtxMenuSelect: f,
        containerRef: t,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      }) : (0, r.jsx)(G, {
        quest: v,
        taskDetails: y,
        expansionSpring: p,
        isInteractable: N,
        reducedMotion: C,
        containerRef: t,
        isExpanded: d,
        onAcceptQuest: T,
        onGameSheetOpened: h,
        onGameSheetClosed: x
      })
    })]
  })
})