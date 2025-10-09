/** Chunk was on web.js **/
/** chunk id: 35215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk723307 = require("./723307.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk879048 = require("./879048.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = 10,
  D = 20,
  x = 4,
  L = 5,
  M = 8,
  k = 10;

function j(e) {
  var t;
  let n = {
      [I.S7.PACKAGE_ACTION_ADVENTURE]: S.t.PYFVdX,
      [I.S7.PACKAGE_RPG_MMO]: S.t.rFQo2N,
      [I.S7.PACKAGE_RACING_SPORTS]: S.t.zDRa6u,
      [I.S7.PACKAGE_SANDBOX_CREATIVE]: S.t.vz9U2d,
      [I.S7.PACKAGE_FAMILY_FRIENDLY]: S.t.IOiAEx,
      [I.S7.PACKAGE_HOLIDAY_SEASON]: S.t.cJPqvL,
      [I.S7.PACKAGE_NEW_YEARS]: S.t.S0w2mp
    },
    r = e.config.features.find(e => e in n),
    i = null != (t = null != r ? n[r] : null) ? t : S.t["D+DkEB"];
  return S.intl.string(i)
}
let U = e => {
    let {
      quest: t,
      onClose: n
    } = e, i = (0, a.e7)([m.Z], () => m.Z.getState().theme), o = (0, s.wj)(i) ? T.BRd.DARK : T.BRd.LIGHT;
    return (0, r.jsxs)("div", {
      className: A.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: A.headerContent,
        children: [(0, r.jsx)("img", {
          className: A.gameTile,
          alt: t.config.messages.gameTitle,
          src: (0, y.fh)(t, y.eC.GAME_TILE, o).url
        }), (0, r.jsxs)("div", {
          className: A.headerTextContainer,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-primary",
            children: j(t)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            color: "text-tertiary",
            children: S.intl.string(S.t.VgN1Bg)
          })]
        })]
      }), (0, r.jsx)(l.P3F, {
        className: A.closeButton,
        "aria-label": S.intl.string(S.t.cpT0Cg),
        onClick: n,
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    })
  },
  G = e => {
    let {
      quest: t,
      game: i,
      sourceQuestContent: o,
      onGameProfileModalOpen: s,
      onGameProfileModalClose: c
    } = e, d = (0, E.O5)(), f = (0, a.e7)([u.Z], () => u.Z.getApplication(i.applicationId)), p = () => {
      d({
        questId: t.id,
        questContent: b.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: E.jZ.GAME_STORE_OPEN_GAME_LINK,
        sourceQuestContent: o
      })
    }, m = async () => {
      d({
        questId: t.id,
        questContent: b.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: E.jZ.GAME_PROFILE_OPEN,
        sourceQuestContent: o
      }), await (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("89311"), n.e("83123")]).then(n.bind(n, 644941));
        return t => (0, r.jsx)(e, N({
          applicationId: i.applicationId,
          source: _.m1.GameSheet,
          trackExternalAction: p
        }, t))
      }, {
        onCloseCallback: c
      }), s()
    };
    return (0, r.jsx)(l.ua7, {
      "data-migration-pending": true,
      text: i.name,
      children: e => (0, r.jsx)(l.P3F, P(N({}, e), {
        className: A.gameClickable,
        onClick: m,
        children: (0, r.jsx)("div", {
          className: A.coverArtContainer,
          children: (0, r.jsx)(h.C, {
            game: i,
            application: f,
            className: A.coverArt,
            size: h.Z.SMALL
          })
        })
      }))
    })
  },
  B = () => (0, Chunk951288.jsxs)("svg", {
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

function Z(e) {
  let {
    quest: t,
    applications: o,
    onClose: s,
    sourceQuestContent: u,
    impressionRef: _,
    onGameProfileModalOpen: h,
    onGameProfileModalClose: m
  } = e;
  (0, d.Z)(o), i.useEffect(() => {
    o.length > 1 && c.Z.getDetectableGamesSupplemental(o)
  }, [o]);
  let E = (0, a.e7)([f.Z], () => o.some(e => f.Z.isFetching(e))),
    b = (0, a.e7)([f.Z], () => o.some(e => f.Z.didFetchingFail(e))),
    y = (0, a.Wu)([f.Z], () => o.map(e => f.Z.getGame(e)).filter(e => null != e).filter(e => (0, p.z6)(e.applicationId)).slice(0, w)),
    O = i.useMemo(() => {
      let e = y.length;
      return e <= x ? x - e : e === L ? 0 : e <= M ? M - e : k - e
    }, [y.length]);
  if (i.useEffect(() => {
      b && (g.default.track(T.rMx.QUEST_GAME_SHEET_ERROR, {
        quest_id: t.id,
        error_type: v.n.FETCH_FAILED
      }), s(), (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("12198").then(n.bind(n, 521760));
        return t => (0, r.jsx)(e, N({}, t))
      }))
    }, [b, t.id, s]), E && !b) {
    let e = Math.min(o.length, w);
    return (0, r.jsxs)("div", {
      className: A.container,
      children: [(0, r.jsx)(U, {
        quest: t,
        onClose: s
      }), (0, r.jsx)("div", {
        className: A.gameGrid,
        children: o.slice(0, e).map(e => (0, r.jsx)("div", {
          className: A.placeholderArt
        }, e))
      })]
    })
  }
  return b ? null : (0, r.jsxs)("div", {
    ref: e => {
      _.current = e
    },
    className: A.container,
    children: [(0, r.jsx)(U, {
      quest: t,
      onClose: s
    }), (0, r.jsxs)("div", {
      className: A.gameGrid,
      children: [y.map(e => (0, r.jsx)(G, {
        quest: t,
        game: e,
        sourceQuestContent: u,
        onGameProfileModalOpen: h,
        onGameProfileModalClose: m
      }, e.applicationId)), Array.from({
        length: O
      }, (e, t) => (0, r.jsx)(B, {}, "placeholder-".concat(t)))]
    })]
  })
}

function F(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: s,
    onGameSheetClosed: c,
    quest: u,
    sourceQuestContent: d,
    impressionRef: f
  } = e, [_, p] = i.useState(false), h = (0, E.O5)(), m = i.useRef(null), g = (null == t ? true : t.current) != null, b = g ? t : m, y = g ? "right" : "top", O = g ? "bottom" : true, v = () => {
    null == s || s(), h({
      questId: u.id,
      questContent: d,
      questContentCTA: E.jZ.SPONSORED_QUEST_SHEET,
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
  return (0, r.jsx)(l.yRy, {
    targetElementRef: b,
    clickTrap: true,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(Z, {
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
    spacing: D,
    scrollBehavior: "close",
    ignoreModalClicks: true,
    children: e => a(e, m)
  })
}
let V = function(e) {
  return null == e.quest || e.applications.length <= 1 ? null : (0, r.jsx)(O.A, {
    questOrQuests: e.quest,
    questContent: b.jn.SPONSORED_QUEST_SHEET,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(F, P(N({}, e), {
      impressionRef: t
    }))
  })
}