/** Chunk was on 37082 **/
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
  Chunk381176 = require("./381176.js"),
  Chunk373370 = require("./373370.js"),
  Chunk475595 = require("./475595.js"),
  Chunk720293 = require("./720293.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk693900 = require("./693900.jsx"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk205511 = require("./205511.jsx"),
  Chunk694802 = require("./694802.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk50476 = require("./50476.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk743294 = require("./743294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk921183 = require("./921183.js");

function Z(e) {
  var t, n;
  let {
    quest: o,
    onClick: i,
    reducedMotion: l,
    isExpanded: u
  } = e, [p, g] = s.useState(false), x = s.useRef(null), h = (0, E.fh)(o, E.eC.QUEST_BAR_HERO_VIDEO), j = (0, S.z0)(o, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL), _ = (0, C.km)(e => e.getVideoProgressState);
  s.useEffect(() => {
    null != x.current && (u && (!l || p) ? (x.current.currentTime = 0, x.current.play()) : x.current.pause())
  }, [x, p, l, u]);
  let b = _(o.id),
    v = (null == (t = o.userStatus) ? true : t.completedAt) != null && b === C.iw.COMPLETED,
    y = !v && (!l || p);
  return (0, r.jsxs)(m.P3F, {
    className: M.videoQuestPreviewCont,
    onClick: i,
    onMouseEnter: () => {
      l && !p && g(true)
    },
    onMouseLeave: () => {
      l && p && g(false)
    },
    children: [null != j && (0, r.jsx)("img", {
      alt: "",
      src: j.url,
      className: M.assetBodyVideoPreviewMedia
    }), null != h ? (0, r.jsx)(f.Z, {
      ref: x,
      autoPlay: false,
      poster: null == j ? true : j.url,
      loop: true,
      muted: true,
      playsInline: true,
      className: a()(M.assetBodyVideoPreviewVideo, {
        [M.assetBodyVideoPreviewVisible]: y
      }),
      controls: false,
      children: (0, r.jsx)("source", {
        src: h.url,
        type: null != (n = h.mimetype) ? n : true
      })
    }) : null, (0, r.jsx)("div", {
      className: M.previewPlayButtonCont,
      children: v ? (0, r.jsx)(m.Oe7, {
        color: d.Z.colors.WHITE,
        className: M.previewPlayButton
      }) : (0, r.jsx)(m.o1U, {
        color: d.Z.colors.WHITE,
        className: M.previewPlayButton
      })
    })]
  })
}

function W(e) {
  let {
    quest: t
  } = e;
  return (0, r.jsx)(T.Z, {
    className: a()(M.rewardTile, M.hiddenRewardTile),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.jn.QUEST_BAR_V2,
    location: Q.dr.QUESTS_BAR,
    sourceQuestContent: v.jn.QUEST_BAR_V2
  })
}

function U(e) {
  return (0, r.jsx)(m.Text, {
    className: M.description,
    variant: "text-xs/normal",
    children: (0, O.DD)({
      quest: e.quest,
      location: Q.dr.QUESTS_BAR,
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
  } = e, h = (0, u.e7)([b.Z], () => b.Z.isEnrolling(t.id), [t]), j = s.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]), _ = (0, O.CR)({
    quest: t
  }), v = (0, y.h)({
    location: Q.dr.QUESTS_BAR,
    questConfig: t.config
  }), C = s.useMemo(() => (0, E.fh)(t, E.eC.HERO_IMAGE), [t]), S = s.useMemo(() => null == C ? {} : {
    backgroundImage: "url(".concat(C.url, ")")
  }, [C]), T = (0, g.ZP)(), w = (0, p.wj)(T);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: M.questPromoContent,
        ref: d,
        children: [(0, r.jsxs)("div", {
          className: M.details,
          children: [(0, r.jsx)(W, {
            quest: t
          }), (0, r.jsx)(m.X6q, {
            className: M.title,
            color: "header-primary",
            variant: "heading-md/medium",
            children: L.intl.format(L.t.EQa7oq, {
              questName: t.config.messages.questName
            })
          }), (0, r.jsx)(U, {
            quest: t,
            taskDetails: n
          })]
        }), (0, r.jsx)("div", {
          className: M.cta,
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
      className: M.contentCollapsedBackgroundWrapper,
      style: {
        opacity: o.to([0, 1], [1, 0])
      },
      children: (0, r.jsx)("div", {
        className: M.contentCollapsedBackground,
        style: S
      })
    }), (0, r.jsxs)(i.animated.div, {
      className: M.heroAssetWrapper,
      style: {
        backdropFilter: o.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: o.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [!v && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.animated.div, {
          className: M.heroAssetDarken,
          style: {
            opacity: o.to([0, 1], [1, 0])
          }
        }), (0, r.jsx)(i.animated.div, {
          className: M.heroAssetTint,
          style: {
            backgroundColor: t.config.colors.primary,
            opacity: o.to([0, 1], [1, 0])
          }
        })]
      }), j.isAnimated ? (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, r.jsx)(z, {
          ref: e,
          asset: j,
          isExpanded: f,
          reducedMotion: c
        })
      }) : (0, r.jsx)(P.Fl, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, r.jsx)("img", {
          ref: e,
          alt: "",
          className: M.heroAsset,
          src: j.url
        })
      }), (0, r.jsx)("div", {
        className: a()(M.legibilityGradient, {
          [M.legibilityGradientDark]: w
        })
      })]
    })]
  })
}
let z = Chunk73800.forwardRef(function(e, t) {
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

function F(e) {
  var t;
  let {
    quest: n,
    taskDetails: o,
    expansionSpring: c,
    overlayRef: u,
    isExpanded: d,
    reducedMotion: p,
    containerRef: g,
    onCtxMenuOpen: f,
    onCtxMenuClose: j,
    onCtxMenuSelect: b
  } = e, C = (null == (t = n.userStatus) ? true : t.completedAt) != null, y = o.percentComplete > 0, O = (0, _.z)(n), [E, S, T] = (0, _.me)(n, o), P = s.useRef(null), W = (0, _.B6)(n.config.expiresAt), U = (0, _._s)({
    quest: n
  }), H = (0, h.q8)(n), z = (0, _.Jf)(n), F = s.useCallback(() => {
    (0, w.openVideoQuestModal)({
      quest: n,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [n]), X = null != z ? z.percentComplete : o.percentComplete;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.animated.div, {
      className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundCollapsed),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")"),
        opacity: c.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, r.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: g,
      children: [(0, r.jsxs)("div", {
        className: M.questAcceptedHeader,
        children: [(0, r.jsx)(m.Text, {
          variant: "text-xxs/medium",
          className: a()(M.flex, M.headerText),
          children: L.intl.format(L.t["pX+fmp"], {
            expirationDate: W
          })
        }), (0, r.jsx)(N.r, {
          onOpen: f,
          onClose: j,
          onSelect: b,
          questContent: v.jn.QUEST_BAR_V2,
          quest: n,
          shouldShowDisclosure: false,
          showShareLink: true,
          sourceQuestContent: v.jn.QUEST_BAR_V2,
          children: e => {
            var t, n;
            return (0, r.jsx)(m.P3F, (t = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, e), n = n = {
              className: M.submenuWrapper,
              "aria-label": L.intl.string(L.t.DEoVWV),
              children: (0, r.jsx)(m.xhG, {
                size: "md",
                color: "currentColor",
                className: a()(M.submenuIcon, M.interactiveNormal)
              })
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })]
      }), (0, r.jsx)("div", {
        className: M.divider
      }), (0, r.jsx)(B.Z, {
        expansionSpring: c,
        overlayRef: u,
        progressBarRef: P,
        quest: n,
        isExpanded: d
      }), (0, r.jsx)(q.Z, {
        contentLocation: "expanded",
        quest: n,
        progressBarRef: P,
        isExpanded: true,
        percentComplete: X,
        activeScreen: E
      }), (0, r.jsx)(A.n, {
        children: !C && !(0, h.Gd)(n) && (0, l.EQ)(E).with(v.LI.SELECT, () => (0, r.jsx)(D.Z, {
          onConsole: () => T(Q.cd.CONSOLE),
          onDesktop: () => T(Q.cd.DESKTOP)
        })).with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, {
          quest: n
        })).with(v.LI.CONSOLE, () => (0, r.jsx)(k.Z, {
          quest: n,
          taskDetails: o
        })).exhaustive()
      }), (0, r.jsxs)(A.n, {
        children: [H && (0, r.jsx)(Z, {
          isExpanded: d,
          quest: n,
          onClick: F,
          reducedMotion: p
        }), (0, r.jsx)(R.y, {
          quest: n,
          useReducedMotion: p,
          isExpanded: d,
          awaitingConsoleConnections: U,
          hasMadeProgress: y,
          isProgressing: O,
          activeScreen: E,
          showBackButton: E !== v.LI.SELECT && S.length > 1 && !y && !O,
          onBack: () => T(null),
          taskDetails: o,
          sourceQuestContent: v.jn.QUEST_BAR_V2
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundExpanded),
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
    overlayRef: b,
    quest: C,
    useReducedMotion: y,
    taskDetails: O
  } = e, E = (0, h.q8)(C), S = (0, h.Vl)(C), {
    launchInGameActivity: T
  } = (0, _.zB)(C), P = s.useCallback(() => {
    let e = C.config.features.includes(Q.S7.START_QUEST_CTA),
      t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
    (0, j.AH)(C.id, {
      questContent: v.jn.QUEST_BAR_V2,
      questContentCTA: t,
      sourceQuestContent: v.jn.QUEST_BAR_V2
    }), E && (0, w.openVideoQuestModal)({
      quest: C,
      questContent: v.jn.QUEST_BAR_V2,
      sourceQuestContent: v.jn.QUEST_BAR_V2,
      sourceQuestContentCTA: t
    }), S && e && T()
  }, [C, E, S, T]), N = (null == (n = C.userStatus) ? true : n.enrolledAt) != null, A = u && d;
  return (0, r.jsxs)(i.animated.div, {
    "aria-hidden": !A,
    className: a()(l, M.contentExpanded, {
      [M.contentInteractable]: A,
      [M.contentExpandedAccepted]: N
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
      children: N ? (0, r.jsx)(F, {
        quest: C,
        taskDetails: O,
        expansionSpring: p,
        overlayRef: b,
        isExpanded: u,
        reducedMotion: y,
        onCtxMenuOpen: m,
        onCtxMenuClose: g,
        onCtxMenuSelect: f,
        containerRef: t
      }) : (0, r.jsx)(H, {
        quest: C,
        taskDetails: O,
        expansionSpring: p,
        isInteractable: A,
        reducedMotion: y,
        containerRef: t,
        isExpanded: u,
        onAcceptQuest: P
      })
    })]
  })
})