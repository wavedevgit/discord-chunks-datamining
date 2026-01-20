/** Chunk was on 22979 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk184299 = require("./184299.js"),
  Chunk937797 = require("./937797.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk387745 = require("./387745.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk504411 = require("./504411.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk217599 = require("./217599.jsx"),
  Chunk373322 = require("./373322.jsx"),
  Chunk661578 = require("./661578.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk554768 = require("./554768.jsx"),
  Chunk167308 = require("./167308.jsx"),
  Chunk26275 = require("./26275.jsx"),
  Chunk676728 = require("./676728.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk945165 = require("./945165.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk413019 = require("./413019.js");
let H = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    isHovered: i,
    asset: l,
    poster: s,
    className: o,
    autoPlay: d = false
  } = e, {
    isExpanded: u
  } = r.useContext(L.A), m = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), p = r.useRef(null);
  return r.useEffect(() => {
    null != p.current && (u && (!m || i) ? (p.current.currentTime = 0, p.current.play()) : p.current.pause())
  }, [p, u, i, m]), (0, a.jsx)(f.Z, {
    ref: e => {
      p.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e)
    },
    autoPlay: d,
    poster: s,
    loop: true,
    muted: true,
    playsInline: true,
    className: o,
    controls: false,
    children: (0, a.jsx)("source", {
      src: l.url,
      type: null != (n = l.mimetype) ? n : true
    })
  })
});

function q(e) {
  var t;
  let {
    onClick: n
  } = e, {
    quest: i
  } = r.useContext(L.A), s = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [o, u] = r.useState(false), p = (0, S.fh)(i, S.eC.QUEST_BAR_HERO_VIDEO, true, false), f = (0, S.fh)(i, S.eC.VIDEO_PLAYER_THUMBNAIL, true, false), x = (0, j.km)(e => e.getVideoProgressState)(i.id), b = (null == (t = i.userStatus) ? true : t.completedAt) != null && x === j.iw.COMPLETED, g = !b && (!s || o);
  return (0, a.jsxs)(m.P3F, {
    className: W.videoQuestPreviewCont,
    onClick: n,
    onMouseEnter: () => {
      s && !o && u(true)
    },
    onMouseLeave: () => {
      s && o && u(false)
    },
    children: [null != f && (0, a.jsx)("img", {
      alt: "",
      src: f.url,
      className: W.assetBodyVideoPreviewMedia
    }), null != p ? (0, a.jsx)(H, {
      isHovered: o,
      autoPlay: false,
      asset: p,
      poster: null == f ? true : f.url,
      className: l()(W.assetBodyVideoPreviewVideo, {
        [W.assetBodyVideoPreviewVisible]: g
      })
    }) : null, (0, a.jsx)("div", {
      className: W.previewPlayButtonCont,
      children: b ? (0, a.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: W.previewPlayButton
      }) : (0, a.jsx)(m.o1U, {
        color: d.Z.colors.WHITE,
        className: W.previewPlayButton
      })
    })]
  })
}

function K(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)(w.Z, {
    className: l()(W.rewardTile, W.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function Q(e) {
  let {
    isInteractable: t,
    containerRef: n,
    onAcceptQuest: i
  } = e, {
    quest: o,
    onGameSheetOpen: d,
    onGameSheetClose: h,
    taskDetails: f
  } = r.useContext(L.A), {
    expansionSpring: x
  } = r.useContext(k.xo), b = r.useRef(null), j = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]), _ = r.useMemo(() => (0, S.fh)(o, S.eC.QUEST_BAR_HERO), [o]), E = (0, C.CR)({
    quest: o
  }), T = r.useMemo(() => (0, S.fh)(o, S.eC.HERO_IMAGE), [o]), O = r.useMemo(() => null == T ? {} : {
    backgroundImage: "url(".concat(T.url, ")")
  }, [T]), w = (0, p.ZP)(), R = (0, u.wj)(w), A = y.Cx.useConfig({
    location: G.dr.QUESTS_BAR
  }).enabled, Z = (0, C.DD)({
    quest: o,
    location: G.dr.QUESTS_BAR,
    questContent: v.jn.QUEST_BAR_V2,
    taskDetails: f,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    popoutTargetElementRef: b,
    onGameSheetOpened: d,
    onGameSheetClosed: h
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: b,
      children: (0, a.jsxs)("div", {
        className: W.questPromoContent,
        ref: n,
        children: [(0, a.jsxs)("div", {
          className: W.details,
          children: [(0, a.jsx)(K, {
            quest: o
          }), (0, a.jsx)(m.Heading, {
            className: W.title,
            color: "text-strong",
            variant: "heading-md/medium",
            children: z.intl.format(z.t.EQa7os, {
              questName: o.config.messages.questName
            })
          }), (0, a.jsx)(m.Text, {
            className: W.description,
            variant: "text-xs/normal",
            children: Z
          })]
        }), (0, a.jsx)("div", {
          className: W.cta,
          children: A ? (0, a.jsx)(P.Z, {
            quest: o,
            size: "sm",
            analyticsCtxQuestContent: v.jn.QUEST_BAR_V2,
            analyticsCtxSourceQuestContent: v.jn.QUEST_BAR_V2
          }) : (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? i : true,
            loading: j,
            text: E,
            size: "sm",
            icon: (0, I.getPrimaryCtaIcon)(o),
            fullWidth: true
          })
        })]
      })
    }), null != T && (0, a.jsx)(s.animated.div, {
      className: W.contentCollapsedBackgroundWrapper,
      style: {
        opacity: x.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: l()(W.contentCollapsedBackground, W.blur),
        style: O
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: W.heroAssetWrapper,
      style: {
        backdropFilter: x.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: x.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [_.isAnimated ? (0, a.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(H, {
          ref: e,
          autoPlay: true,
          asset: _,
          className: W.heroAsset
        })
      }) : (0, a.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: W.heroAsset,
          src: _.url
        })
      }), (0, a.jsx)("div", {
        className: l()(W.legibilityGradient, {
          [W.legibilityGradientDark]: R
        })
      })]
    })]
  })
}

function Y(e) {
  var t;
  let {
    overlayRef: n,
    containerRef: i
  } = e, {
    quest: c,
    taskDetails: d
  } = r.useContext(L.A), {
    expansionSpring: u
  } = r.useContext(k.xo), m = (null == (t = c.userStatus) ? true : t.completedAt) != null, p = d.percentComplete > 0, h = (0, _.z)(c), [f, x, g] = (0, _.me)(c, d), j = r.useRef(null), y = r.useRef(null), C = (0, _._s)({
    quest: c
  }), S = (0, T.q8)(c), O = (0, _.Jf)(c), N = r.useCallback(() => {
    (0, I.openVideoQuestModal)({
      quest: c,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), P = null != O ? O.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: l()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")"),
        opacity: u.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, a.jsxs)("div", {
      className: W.questAcceptedContent,
      ref: e => {
        "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (y.current = e)
      },
      children: [(0, a.jsx)(B.Z, {}), (0, a.jsx)("div", {
        className: W.divider
      }), (0, a.jsx)(A.Z, {
        overlayRef: n,
        progressBarRef: j,
        isHovered: false
      }), (0, a.jsx)(U.Z, {
        contentLocation: "expanded",
        progressBarRef: j,
        isExpanded: true,
        percentComplete: P,
        activeScreen: f,
        popoutTargetElementRef: y
      }), (0, a.jsx)(D.n, {
        children: !m && !(0, E.Gd)(c) && (0, o.EQ)(f).with(v.LI.SELECT, () => (0, a.jsx)(F.Z, {
          onConsole: () => g(G.cd.CONSOLE),
          onDesktop: () => g(G.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, a.jsx)(M.Z, {
          quest: c
        })).with(v.LI.CONSOLE, () => (0, a.jsx)(Z.Z, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(D.n, {
        children: [S && (0, a.jsx)(q, {
          onClick: N
        }), (0, a.jsx)(R.r, {
          awaitingConsoleConnections: C,
          hasMadeProgress: p,
          isProgressing: h,
          activeScreen: f,
          showBackButton: f !== v.LI.SELECT && x.length > 1 && !p && !h,
          onBack: () => g(null),
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: l()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")")
      }
    })]
  })
}
async function X(e, t, n, a) {
  return (0, T.q8)(e) ? void await (0, I.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, O.Rt)(e) ? void await (0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : void(0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  })
}
let J = Chunk473749.forwardRef(function(e, t) {
  var n;
  let {
    children: i,
    className: o,
    overlayRef: c
  } = e, {
    collapsedHeight: d,
    isExpanded: u,
    isExpansionAnimationComplete: m,
    quest: p
  } = r.useContext(L.A), {
    expansionSpring: h
  } = r.useContext(k.xo), {
    launchInGameActivity: f
  } = (0, _.zB)(p), x = (0, O.Rt)(p), g = r.useCallback(async () => {
    let e = x ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
    await X(p, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), x && f()
  }, [p, f, x]), j = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, y = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !y,
    className: l()(o, W.contentExpanded, {
      [W.contentInteractable]: y,
      [W.contentExpandedAccepted]: j
    }),
    style: {
      transform: (0, s.to)([h.to({
        range: [0, 1],
        output: [0, false]
      }), h.to({
        range: [0, 1],
        output: [0, d]
      })], (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"))
    },
    children: [i, (0, a.jsx)(s.animated.div, {
      style: {
        opacity: 1
      },
      children: j ? (0, a.jsx)(Y, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(Q, {
        isInteractable: y,
        containerRef: t,
        onAcceptQuest: g
      })
    })]
  })
})