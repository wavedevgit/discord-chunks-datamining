/** Chunk was on web.js **/
/** chunk id: 194267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Z
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk453903 = require("./453903.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk775602 = require("./775602.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk524799 = require("./524799.js"),
  Chunk409626 = require("./409626.js"),
  Chunk611656 = require("./611656.js"),
  Chunk459746 = require("./459746.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk760751 = require("./760751.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk341915 = require("./341915.js"),
  Chunk579473 = require("./579473.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk73473 = require("./73473.js"),
  Chunk811500 = require("./811500.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk72011 = require("./72011.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 10,
  k = 20,
  U = 15,
  G = 4,
  F = 5,
  V = 8,
  B = 10;

function H(e) {
  var t;
  let n = {
      [N.Li.PACKAGE_ACTION_ADVENTURE]: R.t.PYFVdf,
      [N.Li.PACKAGE_RPG_MMO]: R.t.rFQo2F,
      [N.Li.PACKAGE_RACING_SPORTS]: R.t.zDRa6g,
      [N.Li.PACKAGE_SANDBOX_CREATIVE]: R.t.vz9U2Q,
      [N.Li.PACKAGE_FAMILY_FRIENDLY]: R.t.IOiAE0,
      [N.Li.PACKAGE_HOLIDAY_SEASON]: R.t.cJPqvD,
      [N.Li.PACKAGE_NEW_YEARS]: R.t.S0w2mv
    },
    r = e.config.features.find(e => e in n),
    i = null != (t = null != r ? n[r] : null) ? t : R.t["D+DkEH"];
  return R.intl.string(i)
}
let Y = e => {
    let {
      quest: t,
      onClose: n
    } = e, i = (0, a.bG)([E.A], () => E.A.getState().theme), o = (0, l.Mw)(i) ? w.NJ8.DARK : w.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
      className: P.N1,
      children: [(0, r.jsxs)("div", {
        className: P.VW,
        children: [(0, r.jsx)("img", {
          className: P.rC,
          alt: t.config.messages.gameTitle,
          src: (0, A.tW)(t, A.fY.GAME_TILE, o).url
        }), (0, r.jsxs)("div", {
          className: P.if,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: H(t)
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.intl.string(R.t.VgN1Bn)
          })]
        })]
      }), (0, r.jsx)(c.DUT, {
        className: P.b,
        "aria-label": R.intl.string(R.t.cpT0Cq),
        onClick: n,
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  },
  W = e => {
    let {
      quest: t,
      game: o,
      sourceQuestContent: l,
      onGameProfileModalOpen: u,
      onGameProfileModalClose: p
    } = e, _ = (0, I.Ut)(), m = (0, a.bG)([f.A], () => f.A.getApplication(o.applicationId)), E = (0, a.bG)([d.A], () => d.A.useReducedMotion), y = i.useRef(null), b = null != o.supplementalData, O = () => {
      _({
        questId: t.id,
        questContent: v.uF.SPONSORED_QUEST_SHEET,
        questContentCTA: S.Cy.GAME_STORE_OPEN_GAME_LINK,
        sourceQuestContent: l
      })
    }, A = async () => {
      b && (_({
        questId: t.id,
        questContent: v.uF.SPONSORED_QUEST_SHEET,
        questContentCTA: S.Cy.GAME_PROFILE_OPEN,
        sourceQuestContent: l
      }), await (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("13530").then(n.bind(n, 225732));
        return t => (0, r.jsx)(e, L({
          applicationId: o.applicationId,
          source: h.Ob.GameSheet,
          trackExternalAction: O
        }, t))
      }, {
        onCloseCallback: p
      }), u())
    }, T = i.useCallback(e => {
      if (null == y.current || E) return;
      let t = y.current.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = t.width / 2,
        a = t.height / 2,
        o = -((r - a) / a * U),
        s = (n - i) / i * U;
      y.current.style.transform = "rotateX(".concat(o, "deg) rotateY(").concat(s, "deg)")
    }, [E]), C = i.useCallback(() => {
      null == y.current || E || (y.current.style.transform = "rotateX(0deg) rotateY(0deg)")
    }, [E]), N = () => null != o.supplementalData ? (0, r.jsx)(g.A, {
      game: o.supplementalData,
      application: m,
      className: P.xe,
      size: g.w.SMALL
    }) : null != o.fallbackCoverImageUrl ? (0, r.jsx)("img", {
      src: o.fallbackCoverImageUrl,
      alt: o.name,
      className: P.xe
    }) : null;
    return (0, r.jsx)(s.m, {
      text: o.name,
      children: (0, r.jsx)(c.DUT, {
        className: P.zR,
        onClick: A,
        onMouseMove: T,
        onMouseLeave: C,
        children: (0, r.jsx)("div", {
          ref: y,
          className: P._M,
          children: N()
        })
      })
    })
  },
  K = () => (0, r.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "75",
    height: "96",
    viewBox: "0 0 75 96",
    fill: "none",
    children: [(0, r.jsx)("rect", {
      x: "1",
      y: "1",
      width: "73",
      height: "94",
      rx: "8",
      fill: "var(--background-surface-high)"
    }), (0, r.jsx)("rect", {
      x: "0.5",
      y: "0.5",
      width: "74",
      height: "95",
      rx: "8.5",
      stroke: "var(--border-normal)",
      strokeOpacity: "0.2"
    }), (0, r.jsx)("path", {
      d: "M2.53418 3L73.0342 93.5",
      stroke: "var(--border-normal)",
      strokeOpacity: "0.2"
    })]
  });

function z(e) {
  let {
    quest: t,
    applications: o,
    onClose: s,
    sourceQuestContent: l,
    impressionRef: d,
    onGameProfileModalOpen: f,
    onGameProfileModalClose: h
  } = e;
  (0, p.A)(o), i.useEffect(() => {
    o.length > 1 && u.A.getDetectableGamesSupplemental(o)
  }, [o]);
  let g = (0, a.bG)([_.A], () => o.some(e => _.A.isFetching(e))),
    E = (0, a.bG)([_.A], () => o.some(e => _.A.didFetchingFail(e))),
    v = (0, a.yK)([_.A], () => o.map(e => _.A.getGame(e)).filter(e => null != e).filter(e => (0, m.oS)(e.applicationId)).slice(0, j)),
    A = (0, a.bG)([y.A, _.A], () => {
      let e = new Set(v.map(e => e.applicationId));
      return o.filter(t => !e.has(t)).filter(e => null == _.A.getGame(e)).map(e => {
        let t = y.A.getDetectableGame(e);
        if ((null == t ? true : t.cover_image_hash) == null) return null;
        let n = O.Ay.getApplicationIconURL({
          id: e,
          icon: t.cover_image_hash,
          size: 256,
          keepAspectRatio: true
        });
        return null == n ? null : {
          applicationId: e,
          name: t.name,
          coverImageUrl: n
        }
      }).filter(e => null != e).slice(0, j)
    }),
    I = i.useMemo(() => [...v.map(e => ({
      applicationId: e.applicationId,
      name: e.name,
      supplementalData: e,
      fallbackCoverImageUrl: null
    })), ...A.map(e => ({
      applicationId: e.applicationId,
      name: e.name,
      supplementalData: null,
      fallbackCoverImageUrl: e.coverImageUrl
    }))].slice(0, j), [v, A]),
    S = i.useMemo(() => {
      let e = I.length;
      return e <= G ? G - e : e === F ? 0 : e <= V ? V - e : B - e
    }, [I.length]),
    T = !g && 0 === I.length,
    N = E || T;
  if (i.useEffect(() => {
      if (N) {
        let e = E ? C.W.FETCH_FAILED : C.W.NO_GAMES_AVAILABLE;
        b.default.track(w.HAw.QUEST_GAME_SHEET_ERROR, {
          quest_id: t.id,
          error_type: e
        }), s(), (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("91646").then(n.bind(n, 659309));
          return t => (0, r.jsx)(e, L({}, t))
        })
      }
    }, [N, E, t.id, s]), g && !N) {
    let e = Math.min(o.length, j);
    return (0, r.jsxs)("div", {
      className: P.kL,
      children: [(0, r.jsx)(Y, {
        quest: t,
        onClose: s
      }), (0, r.jsx)("div", {
        className: P.LA,
        children: o.slice(0, e).map(e => (0, r.jsx)("div", {
          className: P.Vj
        }, e))
      })]
    })
  }
  return N ? null : (0, r.jsxs)("div", {
    ref: e => {
      d.current = e
    },
    className: P.kL,
    children: [(0, r.jsx)(Y, {
      quest: t,
      onClose: s
    }), (0, r.jsxs)("div", {
      className: P.LA,
      children: [I.map(e => (0, r.jsx)(W, {
        quest: t,
        game: e,
        sourceQuestContent: l,
        onGameProfileModalOpen: f,
        onGameProfileModalClose: h
      }, e.applicationId)), Array.from({
        length: S
      }, (e, t) => (0, r.jsx)(K, {}, "placeholder-".concat(t)))]
    })]
  })
}

function q(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: s,
    onGameSheetClosed: l,
    quest: u,
    sourceQuestContent: d,
    impressionRef: f
  } = e, [p, _] = i.useState(false), h = (0, I.Ut)(), m = i.useRef(null), g = (null == t ? true : t.current) != null, E = g ? t : m, y = g ? "right" : "top", b = g ? "bottom" : true, O = () => {
    null == s || s(), h({
      questId: u.id,
      questContent: d,
      questContentCTA: S.Cy.SPONSORED_QUEST_SHEET,
      sourceQuestContent: d
    })
  }, v = () => {
    if (p) return o.o;
    null == l || l()
  }, A = () => {
    _(true)
  }, T = () => {
    _(false)
  };
  return (0, r.jsx)(c.YNO, {
    targetElementRef: E,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(z, {
        quest: u,
        applications: n,
        onClose: t,
        sourceQuestContent: d,
        impressionRef: f,
        onGameProfileModalOpen: A,
        onGameProfileModalClose: T
      })
    },
    onRequestOpen: O,
    onRequestClose: v,
    position: y,
    align: b,
    spacing: k,
    scrollBehavior: "close",
    ignoreModalClicks: true,
    children: e => a(e, m)
  })
}
let Z = function(e) {
  return null == e.quest || e.applications.length <= 1 ? null : (0, r.jsx)(T.R, {
    questOrQuests: e.quest,
    questContent: v.uF.SPONSORED_QUEST_SHEET,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(q, M(L({}, e), {
      impressionRef: t
    }))
  })
}