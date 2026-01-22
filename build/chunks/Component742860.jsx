/** Chunk was on 22477 **/
/** chunk id: 742860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Z
}), require("./896048.js"), require("./228524.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk405670 = require("./405670.js"),
  Chunk245853 = require("./245853.js"),
  Chunk714510 = require("./714510.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk901406 = require("./901406.js"),
  Chunk792620 = require("./792620.js"),
  Chunk814793 = require("./814793.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk212614 = require("./212614.jsx"),
  Chunk646764 = require("./646764.jsx"),
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
let z = Chunk64700.forwardRef(function(e, t) {
  var n;
  let {
    isHovered: i,
    asset: r,
    poster: s,
    className: o,
    autoPlay: d = false
  } = e, {
    isExpanded: u
  } = l.useContext(L.T), m = (0, c.bG)([h.A], () => h.A.useReducedMotion), p = l.useRef(null);
  return l.useEffect(() => {
    null != p.current && (u && (!m || i) ? (p.current.currentTime = 0, p.current.play()) : p.current.pause())
  }, [p, u, i, m]), (0, a.jsx)(f.A, {
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
      src: r.url,
      type: null != (n = r.mimetype) ? n : true
    })
  })
});

function q(e) {
  var t;
  let {
    onClick: n
  } = e, {
    quest: i
  } = l.useContext(L.T), s = (0, c.bG)([h.A], () => h.A.useReducedMotion), [o, u] = l.useState(false), p = (0, C.tW)(i, C.fY.QUEST_BAR_HERO_VIDEO, true, false), f = (0, C.tW)(i, C.fY.VIDEO_PLAYER_THUMBNAIL, true, false), x = (0, j.Kr)(e => e.getVideoProgressState)(i.id), b = (null == (t = i.userStatus) ? true : t.completedAt) != null && x === j.K2.COMPLETED, g = !b && (!s || o);
  return (0, a.jsxs)(m.DUT, {
    className: K.QO,
    onClick: n,
    onMouseEnter: () => {
      s && !o && u(true)
    },
    onMouseLeave: () => {
      s && o && u(false)
    },
    children: [null != f && (0, a.jsx)(N.Sn, {
      id: "QuestBarContentExpanded_videoThumbnail",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: "",
        src: f.url,
        className: K.Ue
      })
    }), null != p ? (0, a.jsx)(N.Sn, {
      id: "QuestBarContentExpanded_video",
      children: e => (0, a.jsx)(z, {
        ref: e,
        isHovered: o,
        autoPlay: false,
        asset: p,
        poster: null == f ? true : f.url,
        className: r()(K.NM, {
          [K.Gc]: g
        })
      })
    }) : null, (0, a.jsx)("div", {
      className: K.LT,
      children: b ? (0, a.jsx)(m.mqY, {
        color: d.A.colors.WHITE,
        className: K.t
      }) : (0, a.jsx)(m.udU, {
        color: d.A.colors.WHITE,
        className: K.t
      })
    })]
  })
}

function Q(e) {
  let {
    quest: t
  } = e;
  return (0, a.jsx)(I.A, {
    className: r()(K.Qq, K.wq),
    learnMoreStyle: "text",
    quest: t,
    questContent: v.uF.QUEST_BAR_V2,
    sourceQuestContent: v.uF.QUEST_BAR_V2
  })
}

function Y(e) {
  let {
    isInteractable: t,
    containerRef: n,
    onAcceptQuest: i
  } = e, {
    quest: o,
    onGameSheetOpen: d,
    onGameSheetClose: h,
    taskDetails: f
  } = l.useContext(L.T), {
    expansionSpring: x
  } = l.useContext(w.PW), b = l.useRef(null), j = (0, c.bG)([g.A], () => g.A.isEnrolling(o.id), [o]), A = l.useMemo(() => (0, C.tW)(o, C.fY.QUEST_BAR_HERO), [o]), S = (0, _.NA)({
    quest: o
  }), O = l.useMemo(() => (0, C.tW)(o, C.fY.HERO_IMAGE), [o]), E = l.useMemo(() => null == O ? {} : {
    backgroundImage: "url(".concat(O.url, ")")
  }, [O]), I = (0, p.Ay)(), P = (0, u.Mw)(I), R = y.t$.useConfig({
    location: V.rE.QUESTS_BAR
  }).enabled, D = (0, _.mU)({
    quest: o,
    location: V.rE.QUESTS_BAR,
    questContent: v.uF.QUEST_BAR_V2,
    taskDetails: f,
    sourceQuestContent: v.uF.QUEST_BAR_V2,
    popoutTargetElementRef: b,
    onGameSheetOpened: d,
    onGameSheetClosed: h
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: b,
      children: (0, a.jsxs)("div", {
        className: K.do,
        ref: n,
        children: [(0, a.jsxs)("div", {
          className: K.zH,
          children: [(0, a.jsx)(Q, {
            quest: o
          }), (0, a.jsx)(m.Heading, {
            className: K.DD,
            color: "text-strong",
            variant: "heading-md/medium",
            children: H.intl.format(H.t.EQa7os, {
              questName: o.config.messages.questName
            })
          }), (0, a.jsx)(m.Text, {
            className: K.h_,
            variant: "text-xs/normal",
            children: D
          })]
        }), (0, a.jsx)("div", {
          className: K.lO,
          children: R ? (0, a.jsx)(T.A, {
            quest: o,
            size: "sm",
            analyticsCtxQuestContent: v.uF.QUEST_BAR_V2,
            analyticsCtxSourceQuestContent: v.uF.QUEST_BAR_V2
          }) : (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? i : true,
            loading: j,
            text: S,
            size: "sm",
            icon: (0, k.Oz)(o),
            fullWidth: true
          })
        })]
      })
    }), null != O && (0, a.jsx)(s.animated.div, {
      className: K.AK,
      style: {
        opacity: x.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: r()(K.LC, K.Ge),
        style: E
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: K.IC,
      style: {
        backdropFilter: x.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: x.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [A.isAnimated ? (0, a.jsx)(N.Sn, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(z, {
          ref: e,
          autoPlay: true,
          asset: A,
          className: K.LO
        })
      }) : (0, a.jsx)(N.Sn, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: K.LO,
          src: A.url
        })
      }), (0, a.jsx)("div", {
        className: r()(K.tV, {
          [K.tt]: P
        })
      })]
    })]
  })
}

function J(e) {
  var t;
  let {
    overlayRef: n,
    containerRef: i
  } = e, {
    quest: c,
    taskDetails: d
  } = l.useContext(L.T), {
    expansionSpring: u
  } = l.useContext(w.PW), m = (null == (t = c.userStatus) ? true : t.completedAt) != null, p = d.percentComplete > 0, h = (0, A.Vn)(c), [f, x, g] = (0, A.Qo)(c, d), j = l.useRef(null), y = l.useRef(null), _ = (0, A.RR)({
    quest: c
  }), C = (0, O.vv)(c), E = (0, A.I3)(c), N = l.useCallback(() => {
    (0, k.d5)({
      quest: c,
      questContent: v.uF.QUEST_BAR_V2,
      sourceQuestContent: v.uF.QUEST_BAR_V2,
      sourceQuestContentCTA: b.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), T = null != E ? E.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: r()(K.tv, K.ag),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(W.V, ", ").concat(W.u, ")"),
        opacity: u.to({
          range: [0, 1],
          output: [1, 0]
        })
      }
    }), (0, a.jsxs)("div", {
      className: K.Fe,
      ref: e => {
        "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (y.current = e)
      },
      children: [(0, a.jsx)(G.A, {}), (0, a.jsx)("div", {
        className: K.yF
      }), (0, a.jsx)(R.A, {
        overlayRef: n,
        progressBarRef: j,
        isHovered: false
      }), (0, a.jsx)(B.A, {
        contentLocation: "expanded",
        progressBarRef: j,
        isExpanded: true,
        percentComplete: T,
        activeScreen: f,
        popoutTargetElementRef: y
      }), (0, a.jsx)(M.T, {
        children: !m && !(0, S.W1)(c) && (0, o.YW)(f).with(v.X0.SELECT, () => (0, a.jsx)(F.A, {
          onConsole: () => g(V.fO.CONSOLE),
          onDesktop: () => g(V.fO.DESKTOP)
        })).with(v.X0.DESKTOP, () => (0, a.jsx)(U.A, {
          quest: c
        })).with(v.X0.CONSOLE, () => (0, a.jsx)(D.A, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(M.T, {
        children: [C && (0, a.jsx)(q, {
          onClick: N
        }), (0, a.jsx)(P.f, {
          awaitingConsoleConnections: _,
          hasMadeProgress: p,
          isProgressing: h,
          activeScreen: f,
          showBackButton: f !== v.X0.SELECT && x.length > 1 && !p && !h,
          onBack: () => g(null),
          sourceQuestContent: v.uF.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: r()(K.tv, K.Sx),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(W.V, ", ").concat(W.u, ")")
      }
    })]
  })
}
async function X(e, t, n, a) {
  (0, O.vv)(e) ? await (0, k.e0)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, E.vA)(e) ? await (0, x.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : (0, x.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  })
}
let Z = Chunk64700.forwardRef(function(e, t) {
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
  } = l.useContext(L.T), {
    expansionSpring: h
  } = l.useContext(w.PW), {
    launchInGameActivity: f
  } = (0, A.zW)(p), x = (0, E.vA)(p), g = l.useCallback(async () => {
    let e = x ? b.Cy.START_QUEST : b.Cy.ACCEPT_QUEST;
    await X(p, v.uF.QUEST_BAR_V2, e, v.uF.QUEST_BAR_V2), x && f()
  }, [p, f, x]), j = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, y = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !y,
    className: r()(o, K.Rh, {
      [K.Yd]: y,
      [K.iH]: j
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
      children: j ? (0, a.jsx)(J, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(Y, {
        isInteractable: y,
        containerRef: t,
        onAcceptQuest: g
      })
    })]
  })
})