/** Chunk was on web.js **/
/** chunk id: 35215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk723307 = require("./723307.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189730 = require("./189730.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = 10,
  N = 20,
  R = 4,
  P = 5,
  w = 8,
  D = 10,
  x = e => {
    let {
      gameCount: t,
      onClose: n
    } = e;
    return (0, r.jsxs)("div", {
      className: v.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: v.headerContent,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-primary",
          children: O.intl.string(O.t["D+DkEB"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-tertiary",
          children: O.intl.format(O.t.JhwFc3, {
            count: t
          })
        })]
      }), (0, r.jsx)(s.P3F, {
        className: v.closeButton,
        "aria-label": O.intl.string(O.t.cpT0Cg),
        onClick: n,
        children: (0, r.jsx)(s.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  },
  L = e => {
    let {
      quest: t,
      game: i,
      sourceQuestContent: o,
      onGameProfileModalOpen: l,
      onGameProfileModalClose: u
    } = e, d = (0, m.O5)(), _ = (0, a.e7)([c.Z], () => c.Z.getApplication(i.applicationId)), h = () => {
      d({
        questId: t.id,
        questContent: g.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: m.jZ.GAME_STORE_OPEN_GAME_LINK,
        sourceQuestContent: o
      })
    }, E = async () => {
      d({
        questId: t.id,
        questContent: g.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: m.jZ.GAME_PROFILE_OPEN,
        sourceQuestContent: o
      }), await (0, s.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("89311"), n.e("20074")]).then(n.bind(n, 644941));
        return t => (0, r.jsx)(e, T({
          applicationId: i.applicationId,
          source: f.m1.GameSheet,
          trackExternalAction: h
        }, t))
      }, {
        onCloseCallback: u
      }), l()
    };
    return (0, r.jsx)(s.ua7, {
      text: i.name,
      children: e => (0, r.jsx)(s.P3F, A(T({}, e), {
        className: v.gameClickable,
        onClick: E,
        children: (0, r.jsx)(p.C, {
          game: i,
          application: _,
          className: v.coverArt,
          size: p.Z.SMALL
        })
      }))
    })
  },
  j = () => (0, Chunk951288.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "75",
    height: "96",
    viewBox: "0 0 75 96",
    fill: "none",
    children: [(0, Chunk951288.jsx)("rect", {
      x: "1",
      y: "1",
      width: "73",
      height: "94",
      rx: "8",
      fill: "var(--background-surface-high)"
    }), (0, Chunk951288.jsx)("rect", {
      x: "0.5",
      y: "0.5",
      width: "74",
      height: "95",
      rx: "8.5",
      stroke: "var(--border-normal)",
      strokeOpacity: "0.2"
    }), (0, Chunk951288.jsx)("path", {
      d: "M2.53418 3L73.0342 93.5",
      stroke: "var(--border-normal)",
      strokeOpacity: "0.2"
    })]
  });

function M(e) {
  let {
    quest: t,
    applications: o,
    onClose: c,
    sourceQuestContent: f,
    impressionRef: p,
    onGameProfileModalOpen: m,
    onGameProfileModalClose: g
  } = e;
  (0, u.Z)(o), i.useEffect(() => {
    o.length > 1 && l.Z.getDetectableGamesSupplemental(o)
  }, [o]);
  let E = (0, a.e7)([d.Z], () => o.some(e => d.Z.isFetching(e))),
    O = (0, a.e7)([d.Z], () => o.some(e => d.Z.didFetchingFail(e))),
    I = (0, a.Wu)([d.Z], () => o.map(e => d.Z.getGame(e)).filter(e => null != e).filter(e => (0, _.z6)(e.applicationId)).slice(0, C)),
    S = i.useMemo(() => {
      let e = I.length;
      return e <= R ? R - e : e === P ? 0 : e <= w ? w - e : D - e
    }, [I.length]);
  if (i.useEffect(() => {
      O && (h.default.track(y.rMx.QUEST_GAME_SHEET_ERROR, {
        quest_id: t.id,
        error_type: b.n.FETCH_FAILED
      }), c(), (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("12198").then(n.bind(n, 521760));
        return t => (0, r.jsx)(e, T({}, t))
      }))
    }, [O, t.id, c]), E && !O) {
    let e = Math.min(o.length, C);
    return (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsx)(x, {
        gameCount: e,
        onClose: c
      }), (0, r.jsx)("div", {
        className: v.gameGrid,
        children: o.slice(0, e).map(e => (0, r.jsx)("div", {
          className: v.placeholderArt
        }, e))
      })]
    })
  }
  return O ? null : (0, r.jsxs)("div", {
    ref: e => {
      p.current = e
    },
    className: v.container,
    children: [(0, r.jsx)(x, {
      gameCount: I.length,
      onClose: c
    }), (0, r.jsxs)("div", {
      className: v.gameGrid,
      children: [I.map(e => (0, r.jsx)(L, {
        quest: t,
        game: e,
        sourceQuestContent: f,
        onGameProfileModalOpen: m,
        onGameProfileModalClose: g
      }, e.applicationId)), Array.from({
        length: S
      }, (e, t) => (0, r.jsx)(j, {}, "placeholder-".concat(t)))]
    })]
  })
}

function k(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: l,
    onGameSheetClosed: c,
    quest: u,
    sourceQuestContent: d,
    impressionRef: f
  } = e, [_, p] = i.useState(false), h = (0, m.O5)(), g = i.useRef(null), E = (null == t ? true : t.current) != null, b = E ? t : g, y = E ? "right" : "top", O = E ? "bottom" : true, v = () => {
    null == l || l(), h({
      questId: u.id,
      questContent: d,
      questContentCTA: m.jZ.SPONSORED_QUEST_SHEET,
      sourceQuestContent: d
    })
  }, I = () => {
    if (_) return o.F;
    null == c || c()
  }, T = () => {
    p(true)
  }, S = () => {
    p(false)
  };
  return (0, r.jsx)(s.yRy, {
    targetElementRef: b,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(M, {
        quest: u,
        applications: n,
        onClose: t,
        sourceQuestContent: d,
        impressionRef: f,
        onGameProfileModalOpen: T,
        onGameProfileModalClose: S
      })
    },
    onRequestOpen: v,
    onRequestClose: I,
    position: y,
    align: O,
    spacing: N,
    scrollBehavior: "close",
    ignoreModalClicks: true,
    children: e => a(e, g)
  })
}
let U = function(e) {
  return null == e.quest || e.applications.length <= 1 ? null : (0, r.jsx)(E.A, {
    questOrQuests: e.quest,
    questContent: g.jn.SPONSORED_QUEST_SHEET,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(k, A(T({}, e), {
      impressionRef: t
    }))
  })
}