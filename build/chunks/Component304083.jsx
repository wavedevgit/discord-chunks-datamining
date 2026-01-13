/** Chunk was on 22979 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
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
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk387745 = require("./387745.js"),
  Chunk254579 = require("./254579.js"),
  Chunk283689 = require("./283689.js"),
  Chunk455357 = require("./455357.jsx"),
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

function z(e) {
  var t, n;
  let {
    onClick: i
  } = e, {
    quest: s,
    isExpanded: o
  } = r.useContext(Z.A), u = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [p, x] = r.useState(false), b = r.useRef(null), g = (0, _.fh)(s, _.eC.QUEST_BAR_HERO_VIDEO, true, false), v = (0, _.fh)(s, _.eC.VIDEO_PLAYER_THUMBNAIL, true, false), y = (0, j.km)(e => e.getVideoProgressState);
  r.useEffect(() => {
    null != b.current && (o && (!u || p) ? (b.current.currentTime = 0, b.current.play()) : b.current.pause())
  }, [b, p, u, o]);
  let C = y(s.id),
    S = (null == (t = s.userStatus) ? true : t.completedAt) != null && C === j.iw.COMPLETED,
    E = !S && (!u || p);
  return (0, a.jsxs)(m.P3F, {
    className: V.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      u && !p && x(true)
    },
    onMouseLeave: () => {
      u && p && x(false)
    },
    children: [null != v && (0, a.jsx)("img", {
      alt: "",
      src: v.url,
      className: V.assetBodyVideoPreviewMedia
    }), null != g ? (0, a.jsx)(f.Z, {
      ref: b,
      autoPlay: false,
      poster: null == v ? true : v.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: l()(V.assetBodyVideoPreviewVideo, {
        [V.assetBodyVideoPreviewVisible]: E
      }),
      controls: false,
      children: (0, a.jsx)("source", {
        src: g.url,
        type: null != (n = g.mimetype) ? n : true
      })
    }) : null, (0, a.jsx)("div", {
      className: V.previewPlayButtonCont,
      children: S ? (0, a.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: V.previewPlayButton
      }) : (0, a.jsx)(m.o1U, {
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
  return (0, a.jsx)(N.Z, {
    className: l()(V.rewardTile, V.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function W(e) {
  let {
    isInteractable: t,
    containerRef: n,
    onAcceptQuest: i
  } = e, {
    quest: o,
    isExpanded: d,
    onGameSheetOpen: f,
    onGameSheetClose: x,
    taskDetails: b
  } = r.useContext(Z.A), {
    expansionSpring: j
  } = r.useContext(w.xo), C = r.useRef(null), S = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]), E = r.useMemo(() => (0, _.fh)(o, _.eC.QUEST_BAR_HERO), [o]), T = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), N = (0, y.CR)({
    quest: o
  }), I = r.useMemo(() => (0, _.fh)(o, _.eC.HERO_IMAGE), [o]), k = r.useMemo(() => null == I ? {} : {
    backgroundImage: "url(".concat(I.url, ")")
  }, [I]), R = (0, p.ZP)(), A = (0, u.wj)(R), D = (0, y.DD)({
    quest: o,
    location: B.dr.QUESTS_BAR,
    questContent: v.jn.QUEST_BAR_V2,
    taskDetails: b,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    popoutTargetElementRef: C,
    onGameSheetOpened: f,
    onGameSheetClosed: x
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: C,
      children: (0, a.jsxs)("div", {
        className: V.questPromoContent,
        ref: n,
        children: [(0, a.jsxs)("div", {
          className: V.details,
          children: [(0, a.jsx)(H, {
            quest: o
          }), (0, a.jsx)(m.Heading, {
            className: V.title,
            color: "text-strong",
            variant: "heading-md/medium",
            children: G.intl.format(G.t.EQa7os, {
              questName: o.config.messages.questName
            })
          }), (0, a.jsx)(m.Text, {
            className: V.description,
            variant: "text-xs/normal",
            children: D
          })]
        }), (0, a.jsx)("div", {
          className: V.cta,
          children: (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? i : true,
            loading: S,
            text: N,
            size: "sm",
            icon: (0, P.getPrimaryCtaIcon)(o),
            fullWidth: true
          })
        })]
      })
    }), null != I && (0, a.jsx)(s.animated.div, {
      className: V.contentCollapsedBackgroundWrapper,
      style: {
        opacity: j.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: l()(V.contentCollapsedBackground, V.blur),
        style: k
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: V.heroAssetWrapper,
      style: {
        backdropFilter: j.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: j.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [E.isAnimated ? (0, a.jsx)(O.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(K, {
          ref: e,
          asset: E,
          isExpanded: d,
          reducedMotion: T
        })
      }) : (0, a.jsx)(O.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: V.heroAsset,
          src: E.url
        })
      }), (0, a.jsx)("div", {
        className: l()(V.legibilityGradient, {
          [V.legibilityGradientDark]: A
        })
      })]
    })]
  })
}
let K = Chunk473749.forwardRef(function(e, t) {
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
  }, [s, l]), (0, a.jsx)(f.Z, {
    ref: e => {
      null != e && (o.current = e, null != t && ("function" == typeof t ? t(e) : t.current = e))
    },
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    className: V.heroAsset,
    controls: false,
    children: (0, a.jsx)("source", {
      src: i.url,
      type: null != (n = i.mimetype) ? n : true
    })
  })
});

function q(e) {
  var t;
  let {
    overlayRef: n,
    containerRef: i
  } = e, {
    quest: c,
    taskDetails: d
  } = r.useContext(Z.A), {
    expansionSpring: u
  } = r.useContext(w.xo), m = (null == (t = c.userStatus) ? true : t.completedAt) != null, p = d.percentComplete > 0, h = (0, C.z)(c), [f, x, g] = (0, C.me)(c, d), j = r.useRef(null), y = r.useRef(null), _ = (0, C._s)({
    quest: c
  }), T = (0, E.q8)(c), O = (0, C.Jf)(c), N = r.useCallback(() => {
    (0, P.openVideoQuestModal)({
      quest: c,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), G = null != O ? O.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: l()(V.postEnrollmentBackground, V.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")"),
        opacity: u.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, a.jsxs)("div", {
      className: V.questAcceptedContent,
      ref: e => {
        "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (y.current = e)
      },
      children: [(0, a.jsx)(M.Z, {}), (0, a.jsx)("div", {
        className: V.divider
      }), (0, a.jsx)(k.Z, {
        overlayRef: n,
        progressBarRef: j,
        isHovered: false
      }), (0, a.jsx)(L.Z, {
        contentLocation: "expanded",
        progressBarRef: j,
        isExpanded: true,
        percentComplete: G,
        activeScreen: f,
        popoutTargetElementRef: y
      }), (0, a.jsx)(A.n, {
        children: !m && !(0, S.Gd)(c) && (0, o.EQ)(f).with(v.LI.SELECT, () => (0, a.jsx)(U.Z, {
          onConsole: () => g(B.cd.CONSOLE),
          onDesktop: () => g(B.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, a.jsx)(D.Z, {
          quest: c
        })).with(v.LI.CONSOLE, () => (0, a.jsx)(R.Z, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(A.n, {
        children: [T && (0, a.jsx)(z, {
          onClick: N
        }), (0, a.jsx)(I.r, {
          awaitingConsoleConnections: _,
          hasMadeProgress: p,
          isProgressing: h,
          activeScreen: f,
          showBackButton: f !== v.LI.SELECT && x.length > 1 && !p && !h,
          onBack: () => g(null),
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: l()(V.postEnrollmentBackground, V.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")")
      }
    })]
  })
}
async function Y(e, t, n, a) {
  return (0, E.q8)(e) ? void await (0, P.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, T.Rt)(e) ? void await (0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : void(0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  })
}
let Q = Chunk473749.forwardRef(function(e, t) {
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
  } = r.useContext(Z.A), {
    expansionSpring: h
  } = r.useContext(w.xo), {
    launchInGameActivity: f
  } = (0, C.zB)(p), x = (0, T.Rt)(p), g = r.useCallback(async () => {
    let e = x ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
    await Y(p, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), x && f()
  }, [p, f, x]), j = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, y = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !y,
    className: l()(o, V.contentExpanded, {
      [V.contentInteractable]: y,
      [V.contentExpandedAccepted]: j
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
      children: j ? (0, a.jsx)(q, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(W, {
        isInteractable: y,
        containerRef: t,
        onAcceptQuest: g
      })
    })]
  })
})