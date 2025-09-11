/** Chunk was on web.js **/
/** chunk id: 35215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk879048 = require("./879048.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = 8,
  T = 20,
  S = e => {
    let {
      quest: t,
      game: i,
      sourceQuestContent: s
    } = e, c = (0, p.O5)(), u = (0, a.e7)([l.Z], () => l.Z.getApplication(i.applicationId)), f = () => {
      c({
        questId: t.id,
        questContent: h.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: p.jZ.GAME_STORE_OPEN_GAME_LINK,
        sourceQuestContent: s
      })
    }, m = () => {
      c({
        questId: t.id,
        questContent: h.jn.SPONSORED_QUEST_SHEET,
        questContentCTA: p.jZ.GAME_PROFILE_OPEN,
        sourceQuestContent: s
      }), (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("89311"), n.e("83123")]).then(n.bind(n, 644941));
        return t => (0, r.jsx)(e, y({
          applicationId: i.applicationId,
          source: d.m1.GameSheet,
          trackExternalAction: f
        }, t))
      })
    };
    return (0, r.jsx)(o.ua7, {
      text: i.name,
      children: e => (0, r.jsx)(o.P3F, v(y({}, e), {
        className: E.gameClickable,
        onClick: m,
        children: (0, r.jsx)(_.C, {
          game: i,
          application: u,
          className: E.coverArt,
          size: _.Z.SMALL
        })
      }))
    })
  };

function A(e) {
  let {
    quest: t,
    applications: n,
    onClose: l,
    sourceQuestContent: d,
    impressionRef: _
  } = e;
  (0, c.Z)(n), i.useEffect(() => {
    n.length > 1 && s.Z.getDetectableGamesSupplemental(n)
  }, [n]);
  let p = (0, a.e7)([u.Z], () => n.some(e => u.Z.isFetching(e))),
    h = (0, a.e7)([u.Z], () => n.some(e => u.Z.didFetchingFail(e))),
    m = (0, a.Wu)([u.Z], () => n.map(e => u.Z.getGame(e)).filter(e => null != e).filter(e => (0, f.z6)(e.applicationId)).slice(0, I));
  return !p && 0 === m.length || h ? null : (0, r.jsxs)("div", {
    ref: e => {
      _.current = e
    },
    className: E.container,
    children: [(0, r.jsxs)("div", {
      className: E.headerContainer,
      children: [(0, r.jsxs)("div", {
        className: E.headerContent,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-primary",
          children: g.intl.string(g.t["D+DkEB"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "text-tertiary",
          children: g.intl.format(g.t.JhwFc3, {
            count: m.length
          })
        })]
      }), (0, r.jsx)(o.P3F, {
        className: E.closeButton,
        "aria-label": g.intl.string(g.t.cpT0Cg),
        onClick: l,
        children: (0, r.jsx)(o.Dio, {
          size: "md",
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)("div", {
      className: E.gameGrid,
      children: m.map(e => (0, r.jsx)(S, {
        quest: t,
        game: e,
        sourceQuestContent: d
      }, e.applicationId))
    })]
  })
}

function C(e) {
  let {
    targetElementRef: t,
    applications: n,
    children: a,
    onGameSheetOpened: s,
    onGameSheetClosed: l,
    quest: c,
    sourceQuestContent: u,
    impressionRef: d
  } = e, f = i.useRef(null), _ = (null == t ? true : t.current) != null, p = _ ? t : f, h = _ ? "right" : "top", m = _ ? "bottom" : true;
  return (0, r.jsx)(o.yRy, {
    targetElementRef: p,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(A, {
        quest: c,
        applications: n,
        onClose: t,
        sourceQuestContent: u,
        impressionRef: d
      })
    },
    onRequestOpen: s,
    onRequestClose: l,
    position: h,
    align: m,
    spacing: T,
    children: e => a(e, f)
  })
}
let N = function(e) {
  return null == e.quest || e.applications.length <= 1 ? null : (0, r.jsx)(m.A, {
    questOrQuests: e.quest,
    questContent: h.jn.SPONSORED_QUEST_SHEET,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(C, v(y({}, e), {
      impressionRef: t
    }))
  })
}