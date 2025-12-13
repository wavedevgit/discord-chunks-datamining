/** Chunk was on 23736 **/
/** chunk id: 304083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./388685.js"), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk706619 = require("./706619.js"),
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

function W(e) {
  var t, n;
  let {
    onClick: i
  } = e, {
    quest: s,
    isExpanded: o
  } = r.useContext(Z.A), u = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [p, x] = r.useState(false), b = r.useRef(null), g = (0, S.fh)(s, S.eC.QUEST_BAR_HERO_VIDEO, true, false), v = (0, S.fh)(s, S.eC.VIDEO_PLAYER_THUMBNAIL, true, false), y = (0, j.km)(e => e.getVideoProgressState);
  r.useEffect(() => {
    null != b.current && (o && (!u || p) ? (b.current.currentTime = 0, b.current.play()) : b.current.pause())
  }, [b, p, u, o]);
  let C = y(s.id),
    _ = (null == (t = s.userStatus) ? true : t.completedAt) != null && C === j.iw.COMPLETED,
    E = !_ && (!u || p);
  return (0, a.jsxs)(m.P3F, {
    className: H.videoQuestPreviewCont,
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
      className: H.assetBodyVideoPreviewMedia
    }), null != g ? (0, a.jsx)(f.Z, {
      ref: b,
      autoPlay: false,
      poster: null == v ? true : v.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: l()(H.assetBodyVideoPreviewVideo, {
        [H.assetBodyVideoPreviewVisible]: E
      }),
      controls: false,
      children: (0, a.jsx)("source", {
        src: g.url,
        type: null != (n = g.mimetype) ? n : true
      })
    }) : null, (0, a.jsx)("div", {
      className: H.previewPlayButtonCont,
      children: _ ? (0, a.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      }) : (0, a.jsx)(m.o1U, {
        color: d.Z.colors.WHITE,
        className: H.previewPlayButton
      })
    })]
  })
}

function z(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)(P.Z, {
    className: l()(H.rewardTile, H.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    location: F.dr.QUESTS_BAR,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function K(e) {
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
  } = r.useContext(I.xo), y = r.useRef(null), _ = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]), E = r.useMemo(() => (0, S.fh)(o, S.eC.QUEST_BAR_HERO), [o]), T = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), O = (0, C.CR)({
    quest: o
  }), P = r.useMemo(() => (0, S.fh)(o, S.eC.HERO_IMAGE), [o]), k = r.useMemo(() => null == P ? {} : {
    backgroundImage: "url(".concat(P.url, ")")
  }, [P]), R = (0, p.ZP)(), A = (0, u.wj)(R), D = (0, C.DD)({
    quest: o,
    location: F.dr.QUESTS_BAR,
    questContent: v.jn.QUEST_BAR_V2,
    taskDetails: b,
    sourceQuestContent: v.jn.QUEST_BAR_V2,
    popoutTargetElementRef: y,
    onGameSheetOpened: f,
    onGameSheetClosed: x
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: y,
      children: (0, a.jsxs)("div", {
        className: H.questPromoContent,
        ref: n,
        children: [(0, a.jsxs)("div", {
          className: H.details,
          children: [(0, a.jsx)(z, {
            quest: o
          }), (0, a.jsx)(m.Heading, {
            className: H.title,
            color: "text-strong",
            variant: "heading-md/medium",
            children: V.intl.format(V.t.EQa7os, {
              questName: o.config.messages.questName
            })
          }), (0, a.jsx)(m.Text, {
            className: H.description,
            variant: "text-xs/normal",
            children: D
          })]
        }), (0, a.jsx)("div", {
          className: H.cta,
          children: (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? i : true,
            loading: _,
            text: O,
            size: "sm",
            icon: (0, w.getPrimaryCtaIcon)(o),
            fullWidth: true
          })
        })]
      })
    }), null != P && (0, a.jsx)(s.animated.div, {
      className: H.contentCollapsedBackgroundWrapper,
      style: {
        opacity: j.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: l()(H.contentCollapsedBackground, H.blur),
        style: k
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: H.heroAssetWrapper,
      style: {
        backdropFilter: j.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: j.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [E.isAnimated ? (0, a.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(q, {
          ref: e,
          asset: E,
          isExpanded: d,
          reducedMotion: T
        })
      }) : (0, a.jsx)(N.Fl, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: H.heroAsset,
          src: E.url
        })
      }), (0, a.jsx)("div", {
        className: l()(H.legibilityGradient, {
          [H.legibilityGradientDark]: A
        })
      })]
    })]
  })
}
let q = Chunk473749.forwardRef(function(e, t) {
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
    className: H.heroAsset,
    controls: false,
    children: (0, a.jsx)("source", {
      src: i.url,
      type: null != (n = i.mimetype) ? n : true
    })
  })
});

function Q(e) {
  var t;
  let {
    overlayRef: n,
    containerRef: i
  } = e, {
    quest: c,
    taskDetails: d,
    isExpanded: u
  } = r.useContext(Z.A), {
    expansionSpring: m
  } = r.useContext(I.xo), p = (null == (t = c.userStatus) ? true : t.completedAt) != null, h = d.percentComplete > 0, f = (0, _.z)(c), [x, g, j] = (0, _.me)(c, d), y = r.useRef(null), C = r.useRef(null), S = (0, _._s)({
    quest: c
  }), O = (0, T.q8)(c), N = (0, _.Jf)(c), P = r.useCallback(() => {
    (0, w.openVideoQuestModal)({
      quest: c,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), V = null != N ? N.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: l()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(G.cd, ", ").concat(G.v$, ")"),
        opacity: m.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, a.jsxs)("div", {
      className: H.questAcceptedContent,
      ref: e => {
        "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (C.current = e)
      },
      children: [(0, a.jsx)(U.Z, {}), (0, a.jsx)("div", {
        className: H.divider
      }), (0, a.jsx)(R.Z, {
        overlayRef: n,
        progressBarRef: y,
        isHovered: false
      }), (0, a.jsx)(M.Z, {
        contentLocation: "expanded",
        progressBarRef: y,
        isExpanded: true,
        percentComplete: V,
        activeScreen: x,
        popoutTargetElementRef: C
      }), (0, a.jsx)(D.n, {
        children: !p && !(0, E.Gd)(c) && (0, o.EQ)(x).with(v.LI.SELECT, () => (0, a.jsx)(B.Z, {
          onConsole: () => j(F.cd.CONSOLE),
          onDesktop: () => j(F.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, a.jsx)(L.Z, {
          quest: c
        })).with(v.LI.CONSOLE, () => (0, a.jsx)(A.Z, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(D.n, {
        children: [O && (0, a.jsx)(W, {
          onClick: P
        }), (0, a.jsx)(k.r, {
          isExpanded: u,
          awaitingConsoleConnections: S,
          hasMadeProgress: h,
          isProgressing: f,
          activeScreen: x,
          showBackButton: x !== v.LI.SELECT && g.length > 1 && !h && !f,
          onBack: () => j(null),
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: l()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(G.cd, ", ").concat(G.v$, ")")
      }
    })]
  })
}
async function Y(e, t, n, a) {
  let r = (0, T.q8)(e);
  return r && (0, y.R)(F.dr.QUESTS_BAR) ? void await (0, w.enrollAndStartVideoQuestWithErrorHandling)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, O.Rt)(e) && (0, y.R)(F.dr.QUESTS_BAR) ? void await (0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : void((0, x.AH)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }), r && (0, w.openVideoQuestModal)({
    quest: e,
    questContent: t,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }))
}
let X = Chunk473749.forwardRef(function(e, t) {
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
  } = r.useContext(I.xo), {
    launchInGameActivity: f
  } = (0, _.zB)(p), x = (0, O.Rt)(p), g = r.useCallback(async () => {
    let e = x ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
    await Y(p, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), x && f()
  }, [p, f, x]), j = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, y = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !y,
    className: l()(o, H.contentExpanded, {
      [H.contentInteractable]: y,
      [H.contentExpandedAccepted]: j
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
      children: j ? (0, a.jsx)(Q, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(K, {
        isInteractable: y,
        containerRef: t,
        onAcceptQuest: g
      })
    })]
  })
})