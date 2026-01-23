/** Chunk was on 36054 **/
/** chunk id: 742860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => $
}), require("./896048.js"), require("./228524.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
    isHovered: r,
    asset: i,
    poster: s,
    className: o,
    autoPlay: d = false
  } = e, {
    isExpanded: u
  } = l.useContext(L.T), m = (0, c.bG)([h.A], () => h.A.useReducedMotion), p = l.useRef(null);
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

function q(e) {
  var t;
  let {
    onClick: n
  } = e, {
    quest: r
  } = l.useContext(L.T), s = (0, c.bG)([h.A], () => h.A.useReducedMotion), [o, u] = l.useState(false), p = (0, A.tW)(r, A.fY.QUEST_BAR_HERO_VIDEO, true, false), x = (0, A.tW)(r, A.fY.VIDEO_PLAYER_THUMBNAIL, true, false), g = (0, v.Kr)(e => e.getVideoProgressState)(r.id), f = (null == (t = r.userStatus) ? true : t.completedAt) != null && g === v.K2.COMPLETED, b = !f && (!s || o);
  return (0, a.jsxs)(m.DUT, {
    className: K.QO,
    onClick: n,
    onMouseEnter: () => {
      s && !o && u(true)
    },
    onMouseLeave: () => {
      s && o && u(false)
    },
    children: [null != x && (0, a.jsx)(E.Sn, {
      id: "QuestBarContentExpanded_videoThumbnail",
      children: e => (0, a.jsx)("img", {
        ref: e,
        alt: "",
        src: x.url,
        className: K.Ue
      })
    }), null != p ? (0, a.jsx)(E.Sn, {
      id: "QuestBarContentExpanded_video",
      children: e => (0, a.jsx)(z, {
        ref: e,
        isHovered: o,
        autoPlay: false,
        asset: p,
        poster: null == x ? true : x.url,
        className: i()(K.NM, {
          [K.Gc]: b
        })
      })
    }) : null, (0, a.jsx)("div", {
      className: K.LT,
      children: f ? (0, a.jsx)(m.mqY, {
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
  return (0, a.jsx)(w.A, {
    className: i()(K.Qq, K.wq),
    learnMoreStyle: "text",
    quest: t,
    questContent: b.uF.QUEST_BAR_V2,
    sourceQuestContent: b.uF.QUEST_BAR_V2
  })
}

function Y(e) {
  let {
    isInteractable: t,
    containerRef: n,
    onAcceptQuest: r
  } = e, {
    quest: o,
    onGameSheetOpen: d,
    onGameSheetClose: h,
    taskDetails: x
  } = l.useContext(L.T), {
    expansionSpring: g
  } = l.useContext(k.PW), v = l.useRef(null), y = (0, c.bG)([f.A], () => f.A.isEnrolling(o.id), [o]), C = l.useMemo(() => (0, A.tW)(o, A.fY.QUEST_BAR_HERO), [o]), S = (0, _.NA)({
    quest: o
  }), O = l.useMemo(() => (0, A.tW)(o, A.fY.HERO_IMAGE), [o]), T = l.useMemo(() => null == O ? {} : {
    backgroundImage: "url(".concat(O.url, ")")
  }, [O]), w = (0, p.Ay)(), P = (0, u.Mw)(w), R = j.t$.useConfig({
    location: V.rE.QUESTS_BAR
  }).enabled, D = (0, _.mU)({
    quest: o,
    location: V.rE.QUESTS_BAR,
    questContent: b.uF.QUEST_BAR_V2,
    taskDetails: x,
    sourceQuestContent: b.uF.QUEST_BAR_V2,
    popoutTargetElementRef: v,
    onGameSheetOpened: d,
    onGameSheetClosed: h
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ref: v,
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
          children: R ? (0, a.jsx)(N.A, {
            quest: o,
            size: "sm",
            analyticsCtxQuestContent: b.uF.QUEST_BAR_V2,
            analyticsCtxSourceQuestContent: b.uF.QUEST_BAR_V2
          }) : (0, a.jsx)(m.Button, {
            variant: "primary",
            onClick: t ? r : true,
            loading: y,
            text: S,
            size: "sm",
            icon: (0, I.Oz)(o),
            fullWidth: true
          })
        })]
      })
    }), null != O && (0, a.jsx)(s.animated.div, {
      className: K.AK,
      style: {
        opacity: g.to([0, 1], [1, 0])
      },
      children: (0, a.jsx)("div", {
        className: i()(K.LC, K.Ge),
        style: T
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: K.IC,
      style: {
        backdropFilter: g.to([0, 1], [5, 0]).to(e => "blur(".concat(e, "px)")),
        filter: g.to([0, 1], [.8, 1]).to(e => "brightness(".concat(e, ")"))
      },
      children: [C.isAnimated ? (0, a.jsx)(E.Sn, {
        id: "QuestBarContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(z, {
          ref: e,
          autoPlay: true,
          asset: C,
          className: K.LO
        })
      }) : (0, a.jsx)(E.Sn, {
        id: "QuestBarContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: K.LO,
          src: C.url
        })
      }), (0, a.jsx)("div", {
        className: i()(K.tV, {
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
    containerRef: r
  } = e, {
    quest: c,
    taskDetails: d
  } = l.useContext(L.T), {
    expansionSpring: u
  } = l.useContext(k.PW), m = (null == (t = c.userStatus) ? true : t.completedAt) != null, p = d.percentComplete > 0, h = (0, y.Vn)(c), [x, g, f] = (0, y.Qo)(c, d), v = l.useRef(null), j = l.useRef(null), _ = (0, y.RR)({
    quest: c
  }), A = (0, O.vv)(c), T = (0, y.I3)(c), E = l.useCallback(() => {
    (0, I.d5)({
      quest: c,
      questContent: b.uF.QUEST_BAR_V2,
      sourceQuestContent: b.uF.QUEST_BAR_V2,
      sourceQuestContentCTA: C.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW
    })
  }, [c]), N = null != T ? T.percentComplete : d.percentComplete;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: i()(K.tv, K.ag),
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
        "function" == typeof r ? r(e) : null != r && (r.current = e), null != e && (j.current = e)
      },
      children: [(0, a.jsx)(G.A, {}), (0, a.jsx)("div", {
        className: K.yF
      }), (0, a.jsx)(R.A, {
        overlayRef: n,
        progressBarRef: v,
        isHovered: false
      }), (0, a.jsx)(B.A, {
        contentLocation: "expanded",
        progressBarRef: v,
        isExpanded: true,
        percentComplete: N,
        activeScreen: x,
        popoutTargetElementRef: j
      }), (0, a.jsx)(M.T, {
        children: !m && !(0, S.W1)(c) && (0, o.YW)(x).with(b.X0.SELECT, () => (0, a.jsx)(F.A, {
          onConsole: () => f(V.fO.CONSOLE),
          onDesktop: () => f(V.fO.DESKTOP)
        })).with(b.X0.DESKTOP, () => (0, a.jsx)(U.A, {
          quest: c
        })).with(b.X0.CONSOLE, () => (0, a.jsx)(D.A, {
          quest: c,
          taskDetails: d
        })).exhaustive()
      }), (0, a.jsxs)(M.T, {
        children: [A && (0, a.jsx)(q, {
          onClick: E
        }), (0, a.jsx)(P.f, {
          awaitingConsoleConnections: _,
          hasMadeProgress: p,
          isProgressing: h,
          activeScreen: x,
          showBackButton: x !== b.X0.SELECT && g.length > 1 && !p && !h,
          onBack: () => f(null),
          sourceQuestContent: b.uF.QUEST_BAR_V2
        })]
      })]
    }), (0, a.jsx)("div", {
      className: i()(K.tv, K.Sx),
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(W.V, ", ").concat(W.u, ")")
      }
    })]
  })
}
async function X(e, t, n, a) {
  (0, O.vv)(e) ? await (0, I.e0)(e, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a,
    sourceQuestContentCTA: n
  }) : (0, T.vA)(e) ? await (0, g.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  }) : (0, g.Oy)(e.id, {
    questContent: t,
    questContentCTA: n,
    sourceQuestContent: a
  })
}
let $ = Chunk64700.forwardRef(function(e, t) {
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
  } = l.useContext(L.T), {
    expansionSpring: h
  } = l.useContext(k.PW), {
    launchInGameActivity: x
  } = (0, y.zW)(p), g = (0, T.vA)(p), f = l.useCallback(async () => {
    let e = g ? C.Cy.START_QUEST : C.Cy.ACCEPT_QUEST;
    await X(p, b.uF.QUEST_BAR_V2, e, b.uF.QUEST_BAR_V2), g && x()
  }, [p, x, g]), v = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, j = u && m;
  return (0, a.jsxs)(s.animated.div, {
    "aria-hidden": !j,
    className: i()(o, K.Rh, {
      [K.Yd]: j,
      [K.iH]: v
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
      children: v ? (0, a.jsx)(J, {
        overlayRef: c,
        containerRef: t
      }) : (0, a.jsx)(Y, {
        isInteractable: j,
        containerRef: t,
        onAcceptQuest: f
      })
    })]
  })
})