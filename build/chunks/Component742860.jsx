/** Chunk was on 90228 **/
/** chunk id: 742860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ee
}), require("./896048.js"), require("./228524.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk590202 = require("./590202.js"),
  Chunk901406 = require("./901406.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk646764 = require("./646764.jsx"),
  Chunk398025 = require("./398025.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk207869 = require("./207869.jsx"),
  Chunk158265 = require("./158265.jsx"),
  Chunk933378 = require("./933378.jsx"),
  Chunk783569 = require("./783569.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk883035 = require("./883035.jsx"),
  Chunk277928 = require("./277928.jsx"),
  Chunk783602 = require("./783602.jsx"),
  Chunk905586 = require("./905586.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk272111 = require("./272111.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993710 = require("./993710.js");
let Q = Chunk64700.forwardRef(function(e, t) {
  var n;
  let {
    isHovered: r,
    asset: i,
    poster: s,
    className: o,
    autoPlay: d = false
  } = e, {
    isExpanded: u
  } = l.useContext(B.T), m = (0, c.bG)([h.A], () => h.A.useReducedMotion), p = l.useRef(null);
  return l.useEffect(() => {
    null != p.current && (u && (!m || r) ? (p.current.currentTime = 0, p.current.play()) : p.current.pause())
  }, [p, u, r, m]), (0, a.jsx)(x.A, {
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
      src: i.url,
      type: null != (n = i.mimetype) ? n : true
    })
  })
});

function Y(e) {
  var t;
  let {
    onClick: n
  } = e, {
    quest: r
  } = l.useContext(B.T), s = (0, c.bG)([h.A], () => h.A.useReducedMotion), [o, u] = l.useState(false), p = (0, C.tW)(r, C.fY.QUEST_BAR_HERO_VIDEO, true, false), x = (0, C.tW)(r, C.fY.VIDEO_PLAYER_THUMBNAIL, true, false), g = (0, j.Kr)(e => e.getVideoProgressState)(r.id), f = (null == (t = r.userStatus) ? true : t.completedAt) != null && g === j.K2.COMPLETED, b = !f && (!s || o);
  return (0, a.jsxs)(m.DUT, {
    className: q.QO,
    onClick: n,
    onMouseEnter: () => {
      s && !o && u(true)
    },
    onMouseLeave: () => {
      s && o && u(false)
    },
    children: [null != x && (0, a.jsx)(N.Sn, {
      id: "QuestBarContentExpanded_videoThumbnail",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: "",
        src: x.url,
        className: q.Ue
      })
    }), null != p ? (0, a.jsx)(N.Sn, {
      id: "QuestBarContentExpanded_video",
      children: e => (0, a.jsx)(Q, {
        ref: e,
        isHovered: o,
        autoPlay: false,
        asset: p,
        poster: null == x ? true : x.url,
        className: i()(q.NM, {
          [q.Gc]: b
        })
      })
    }) : null, (0, a.jsx)("div", {
      className: q.LT,
      children: f ? (0, a.jsx)(m.mqY, {
        color: d.A.colors.WHITE,
        className: q.t
      }) : (0, a.jsx)(m.udU, {
        color: d.A.colors.WHITE,
        className: q.t
      })
    })]
  })
}

function J(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)(I.A, {
    className: i()(q.Qq, q.wq),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.uF.QUEST_BAR_V2,
    sourceQuestContent: v.uF.QUEST_BAR_V2
  })
}

function X(e) {
  let {
    isInteractable: t,
    containerRef: n,
    onAcceptQuest: r
  } = e, {
    quest: o,
    onGameSheetOpen: d,
    onGameSheetClose: h,
    taskDetails: x
  } = l.useContext(B.T), {
    expansionSpring: f
  } = l.useContext(R.PW), j = l.useRef(null), A = (0, c.bG)([b.A], () => b.A.isEnrolling(o.id), [o]), S = l.useMemo(() => (0, C.tW)(o, C.fY.QUEST_BAR_HERO), [o]), O = (0, y.NA)({
    quest: o
  }), T = l.useMemo(() => (0, C.tW)(o, C.fY.HERO_IMAGE), [o]), E = l.useMemo(() => null == T ? {} : {
    backgroundImage: "url(".concat(T.url, ")")
  }, [T]), I = (0, p.Ay)(), D = (0, u.Mw)(I), M = _.t$.useConfig({
    location: H.rE.QUESTS_BAR
  }).enabled, L = (0, y.mU)({
    quest: o,
    location: H.rE.QUESTS_BAR,
    questContent: v.uF.QUEST_BAR_V2,
    taskDetails: x,
    sourceQuestContent: v.uF.QUEST_BAR_V2,
    popoutTargetElementRef: j,
    onGameSheetOpened: d,
    onGameSheetClosed: h,
    gameProfileSource: g.Ob.QuestBar
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: j,
      children: (0, a.jsxs)("div", {
        className: q.do,
        ref: n,
        children: [(0, a.jsxs)("div", {
          className: q.zH,
          children: [(0, a.jsx)(J, {
            quest: o
          }), (0, a.jsx)(m.Heading, {
            className: q.DD,
            color: "text-strong",
            variant: "heading-md/medium",
            children: z.intl.format(z.t.EQa7os, {
              questName: o.config.messages.questName
            })
          }), (0, a.jsx)(m.Text, {
            className: q.h_,
            variant: "text-xs/normal",
            children: L
          })]
        }), (0, a.jsx)("div", {
          className: q.lO,
          children: M ? (0, a.jsx)(w.A, {
            quest: o,
            size: "sm",
            analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
            analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2
          }) : (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? r : true,
            loading: A,
            text: O,
            size: "sm",
            icon: (0, P.Oz)(o),
            fullWidth: true
          })
        })]
      })
    }), null != T && (0, a.jsx)(s.animated.div, {
      className: q.AK,
      style: {
        opacity: (0, k.a)(f.to([0, 1], [1, 0]))
      },
      children: (0, a.jsx)("div", {
        className: i()(q.LC, q.Ge),
        style: E
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: q.IC,
      style: {
        backdropFilter: (0, k.Q)(f.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)"))),
        filter: (0, k.Q)(f.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")")))
      },
      children: [S.isAnimated ? (0, a.jsx)(N.Sn, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(Q, {
          ref: e,
          autoPlay: true,
          asset: S,
          className: q.LO
        })
      }) : (0, a.jsx)(N.Sn, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: q.LO,
          src: S.url
        })
      }), (0, a.jsx)("div", {
        className: i()(q.tV, {
          [q.tt]: D
        })
      })]
    })]
  })
}

function $(e) {
  var t;
  let {
    overlayRef: n,
    containerRef: r
  } = e, {
    quest: c,
    taskDetails: d
  } = l.useContext(B.T), {
    expansionSpring: u
  } = l.useContext(R.PW), m = (null == (t = c.userStatus) ? true : t.completedAt) != null, p = d.percentComplete > 0, h = (0, A.Vn)(c), [x, g, f] = (0, A.Qo)(c, d), b = l.useRef(null), j = l.useRef(null), _ = (0, A.RR)({
    quest: c
  }), y = (0, T.vv)(c), C = (0, A.I3)(c), E = l.useCallback(() => {
    (0, P.d5)({
      quest: c,
      questContent: v.uF.QUEST_BAR_V2,
      sourceQuestContent: v.uF.QUEST_BAR_V2,
      sourceQuestContentCTA: S.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), N = null != C ? C.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: i()(q.tv, q.ag),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(K.V, ", ").concat(K.u, ")"),
        opacity: (0, k.a)(u.to({
          range: [0, 1],
          output: [1, 0]
        }))
      }
    }), (0, a.jsxs)("div", {
      className: q.Fe,
      ref: e => {
        "function" == typeof r ? r(e) : null != r && (r.current = e), null != e && (j.current = e)
      },
      children: [(0, a.jsx)(V.A, {}), (0, a.jsx)("div", {
        className: q.yF
      }), (0, a.jsx)(M.A, {
        overlayRef: n,
        progressBarRef: b,
        isHovered: false
      }), (0, a.jsx)(F.A, {
        contentLocation: "expanded",
        progressBarRef: b,
        isExpanded: true,
        percentComplete: N,
        activeScreen: x,
        popoutTargetElementRef: j
      }), (0, a.jsx)(U.T, {
        children: !m && !(0, O.W1)(c) && (0, o.YW)(x).with(v.X0.SELECT, () => (0, a.jsx)(W.A, {
          onConsole: () => f(H.fO.CONSOLE),
          onDesktop: () => f(H.fO.DESKTOP)
        })).with(v.X0.DESKTOP, () => (0, a.jsx)(G.A, {
          quest: c
        })).with(v.X0.CONSOLE, () => (0, a.jsx)(L.A, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(U.T, {
        children: [y && (0, a.jsx)(Y, {
          onClick: E
        }), (0, a.jsx)(D.f, {
          awaitingConsoleConnections: _,
          hasMadeProgress: p,
          isProgressing: h,
          activeScreen: x,
          showBackButton: x !== v.X0.SELECT && g.length > 1 && !p && !h,
          onBack: () => f(null),
          sourceQuestContent: v.uF.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i()(q.tv, q.Sx),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(K.V, ", ").concat(K.u, ")")
      }
    })]
  })
}
async function Z(e, t, n, a) {
  (0, T.vv)(e) ? await (0, P.e0)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, E.vA)(e) ? await (0, f.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : (0, f.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  })
}
let ee = Chunk64700.forwardRef(function(e, t) {
  var n;
  let {
    children: r,
    className: o,
    overlayRef: c
  } = e, {
    collapsedHeight: d,
    isExpanded: u,
    isExpansionAnimationComplete: m,
    quest: p
  } = l.useContext(B.T), {
    expansionSpring: h
  } = l.useContext(R.PW), {
    launchInGameActivity: x
  } = (0, A.zW)(p), g = (0, E.vA)(p), f = l.useCallback(async () => {
    let e = g ? S.Cy.START_QUEST : S.Cy.ACCEPT_QUEST;
    await Z(p, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), g && x()
  }, [p, x, g]), b = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, j = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !j,
    className: i()(o, q.Rh, {
      [q.Yd]: j,
      [q.iH]: b
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
    children: [r, (0, a.jsx)(s.animated.div, {
      style: {
        opacity: 1
      },
      children: b ? (0, a.jsx)($, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(X, {
        isInteractable: j,
        containerRef: t,
        onAcceptQuest: f
      })
    })]
  })
})