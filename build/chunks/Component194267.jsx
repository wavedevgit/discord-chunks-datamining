/** Chunk was on web.js **/
/** chunk id: 194267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
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
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk579473 = require("./579473.js"),
  Chunk73473 = require("./73473.js"),
  Chunk811500 = require("./811500.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk72011 = require("./72011.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
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

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 10,
  M = 20,
  k = 15,
  U = 4,
  G = 5,
  V = 8,
  F = 10;

function B(e) {
  var t;
  let n = {
      [C.Li.PACKAGE_ACTION_ADVENTURE]: w.t.PYFVdf,
      [C.Li.PACKAGE_RPG_MMO]: w.t.rFQo2F,
      [C.Li.PACKAGE_RACING_SPORTS]: w.t.zDRa6g,
      [C.Li.PACKAGE_SANDBOX_CREATIVE]: w.t.vz9U2Q,
      [C.Li.PACKAGE_FAMILY_FRIENDLY]: w.t.IOiAE0,
      [C.Li.PACKAGE_HOLIDAY_SEASON]: w.t.cJPqvD,
      [C.Li.PACKAGE_NEW_YEARS]: w.t.S0w2mv
    },
    r = e.config.features.find(e => e in n),
    i = null != (t = null != r ? n[r] : null) ? t : w.t["D+DkEH"];
  return w.intl.string(i)
}
let H = e => {
    let {
      quest: t,
      onClose: n
    } = e, i = (0, a.bG)([E.A], () => E.A.getState().theme), s = (0, l.Mw)(i) ? N.NJ8.DARK : N.NJ8.LIGHT;
    return (0, r.jsxs)("div", {
      className: R.N1,
      children: [(0, r.jsxs)("div", {
        className: R.VW,
        children: [(0, r.jsx)("img", {
          className: R.rC,
          alt: t.config.messages.gameTitle,
          src: (0, I.tW)(t, I.fY.GAME_TILE, s).url
        }), (0, r.jsxs)("div", {
          className: R.if,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "text-strong",
            children: B(t)
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: w.intl.string(w.t.VgN1Bn)
          })]
        })]
      }), (0, r.jsx)(c.DUT, {
        className: R.b,
        "aria-label": w.intl.string(w.t.cpT0Cq),
        onClick: n,
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  },
  Y = e => {
    let {
      quest: t,
      game: s,
      sourceQuestContent: l,
      onGameProfileModalOpen: u,
      onGameProfileModalClose: p
    } = e, _ = (0, v.Ut)(), m = (0, a.bG)([f.A], () => f.A.getApplication(s.applicationId)), E = (0, a.bG)([d.A], () => d.A.useReducedMotion), y = i.useRef(null), b = null != s.supplementalData, O = () => {
      _({
        questId: t.id,
        questContent: A.uF.SPONSORED_QUEST_SHEET,
        questContentCTA: v.Cy.GAME_STORE_OPEN_GAME_LINK,
        sourceQuestContent: l
      })
    }, I = async () => {
      b && (_({
        questId: t.id,
        questContent: A.uF.SPONSORED_QUEST_SHEET,
        questContentCTA: v.Cy.GAME_PROFILE_OPEN,
        sourceQuestContent: l
      }), await (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("13530").then(n.bind(n, 225732));
        return t => (0, r.jsx)(e, D({
          applicationId: s.applicationId,
          source: h.Ob.GameSheet,
          trackExternalAction: O
        }, t))
      }, {
        onCloseCallback: p
      }), u())
    }, S = i.useCallback(e => {
      if (null == y.current || E) return;
      let t = y.current.getBoundingClientRect(),
        n = e.clientX - t.left,
        r = e.clientY - t.top,
        i = t.width / 2,
        a = t.height / 2,
        s = -((r - a) / a * k),
        o = (n - i) / i * k;
      y.current.style.transform = "rotateX(".concat(s, "deg) rotateY(").concat(o, "deg)")
    }, [E]), T = i.useCallback(() => {
      null == y.current || E || (y.current.style.transform = "rotateX(0deg) rotateY(0deg)")
    }, [E]), C = () => null != s.supplementalData ? (0, r.jsx)(g.A, {
      game: s.supplementalData,
      application: m,
      className: R.xe,
      size: g.w.SMALL
    }) : null != s.fallbackCoverImageUrl ? (0, r.jsx)("img", {
      src: s.fallbackCoverImageUrl,
      alt: s.name,
      className: R.xe
    }) : null;
    return (0, r.jsx)(o.m, {
      text: s.name,
      children: (0, r.jsx)(c.DUT, {
        className: R.zR,
        onClick: I,
        onMouseMove: S,
        onMouseLeave: T,
        children: (0, r.jsx)("div", {
          ref: y,
          className: R._M,
          children: C()
        })
      })
    })
  },
  W = () => (0, r.jsxs)("svg", {
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

function K(e) {
  let {
    quest: t,
    applications: s,
    onClose: o,
    sourceQuestContent: l,
    impressionRef: d,
    onGameProfileModalOpen: f,
    onGameProfileModalClose: h
  } = e;
  (0, p.A)(s), i.useEffect(() => {
    s.length > 1 && u.A.getDetectableGamesSupplemental(s)
  }, [s]);
  let g = (0, a.bG)([_.A], () => s.some(e => _.A.isFetching(e))),
    E = (0, a.bG)([_.A], () => s.some(e => _.A.didFetchingFail(e))),
    v = (0, a.yK)([_.A], () => s.map(e => _.A.getGame(e)).filter(e => null != e).filter(e => (0, m.oS)(e.applicationId)).slice(0, j)),
    A = (0, a.bG)([y.A, _.A], () => {
      let e = new Set(v.map(e => e.applicationId));
      return s.filter(t => !e.has(t)).filter(e => null == _.A.getGame(e)).map(e => {
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
      return e <= U ? U - e : e === G ? 0 : e <= V ? V - e : F - e
    }, [I.length]),
    C = !g && 0 === I.length,
    w = E || C;
  if (i.useEffect(() => {
      if (w) {
        let e = E ? T.W.FETCH_FAILED : T.W.NO_GAMES_AVAILABLE;
        b.default.track(N.HAw.QUEST_GAME_SHEET_ERROR, {
          quest_id: t.id,
          error_type: e
        }), o(), (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("91646").then(n.bind(n, 659309));
          return t => (0, r.jsx)(e, D({}, t))
        })
      }
    }, [w, E, t.id, o]), g && !w) {
    let e = Math.min(s.length, j);
    return (0, r.jsxs)("div", {
      className: R.kL,
      children: [(0, r.jsx)(H, {
        quest: t,
        onClose: o
      }), (0, r.jsx)("div", {
        className: R.LA,
        children: s.slice(0, e).map(e => (0, r.jsx)("div", {
          className: R.Vj
        }, e))
      })]
    })
  }
  return w ? null : (0, r.jsxs)("div", {
    ref: e => {
      d.current = e
    },
    className: R.kL,
    children: [(0, r.jsx)(H, {
      quest: t,
      onClose: o
    }), (0, r.jsxs)("div", {
      className: R.LA,
      children: [I.map(e => (0, r.jsx)(Y, {
        quest: t,
        game: e,
        sourceQuestContent: l,
        onGameProfileModalOpen: f,
        onGameProfileModalClose: h
      }, e.applicationId)), Array.from({
        length: S
      }, (e, t) => (0, r.jsx)(W, {}, "placeholder-".concat(t)))]
    })]
  })
}

function z(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: o,
    onGameSheetClosed: l,
    quest: u,
    sourceQuestContent: d,
    impressionRef: f
  } = e, [p, _] = i.useState(false), h = (0, v.Ut)(), m = i.useRef(null), g = (null == t ? true : t.current) != null, E = g ? t : m, y = g ? "right" : "top", b = g ? "bottom" : true, O = () => {
    null == o || o(), h({
      questId: u.id,
      questContent: d,
      questContentCTA: v.Cy.SPONSORED_QUEST_SHEET,
      sourceQuestContent: d
    })
  }, A = () => {
    if (p) return s.o;
    null == l || l()
  }, I = () => {
    _(true)
  }, S = () => {
    _(false)
  };
  return (0, r.jsx)(c.YNO, {
    targetElementRef: E,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(K, {
        quest: u,
        applications: n,
        onClose: t,
        sourceQuestContent: d,
        impressionRef: f,
        onGameProfileModalOpen: I,
        onGameProfileModalClose: S
      })
    },
    onRequestOpen: O,
    onRequestClose: A,
    position: y,
    align: b,
    spacing: M,
    scrollBehavior: "close",
    ignoreModalClicks: true,
    children: e => a(e, m)
  })
}
let q = function(e) {
  return null == e.quest || e.applications.length <= 1 ? null : (0, r.jsx)(S.R, {
    questOrQuests: e.quest,
    questContent: A.uF.SPONSORED_QUEST_SHEET,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(z, L(D({}, e), {
      impressionRef: t
    }))
  })
}