/** Chunk was on web.js **/
/** chunk id: 415104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk672188 = require("./672188.js"),
  Chunk466962 = require("./466962.js"),
  Chunk439826 = require("./439826.jsx"),
  Chunk43779 = require("./43779.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk88036 = require("./88036.js");

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

function I(e) {
  let [t, n] = i.useState(false), r = i.useCallback(e => {
    e.isIntersecting && n(true)
  }, []);
  return {
    visibilityElementRef: (0, _.S)(r, {
      root: null != e ? e : null,
      threshold: 0,
      rootMargin: "900px 0px 900px 0px"
    }, true),
    almostVisibleInViewport: t
  }
}

function T(e) {
  var t, n;
  let {
    quest: o,
    className: u,
    questContent: d,
    contentPosition: _,
    rowIndex: b,
    impressionRef: y,
    sourceQuestContent: O
  } = e, [v, T] = i.useState(false), [S, A] = i.useState([]), C = (0, c.qb)(o), N = i.useMemo(() => (0, l.q8)(o), [o]), R = (0, s._F)(), P = i.useCallback(() => {
    T(true), R({
      questId: o.id,
      event: g.rMx.QUEST_HOVER,
      properties: {
        content_id: d,
        content_name: (0, s._b)(d),
        content_position: _
      },
      sourceQuestContent: O
    }), N && (0, f.loadVideoQuestModal)()
  }, [R, o.id, d, N, O, _]), w = i.useCallback(() => {
    T(false), R({
      questId: o.id,
      event: g.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: d,
        content_name: (0, s._b)(d),
        content_position: _
      },
      sourceQuestContent: O
    })
  }, [R, o.id, d, O, _]), D = i.useContext(p.t), {
    visibilityElementRef: x,
    almostVisibleInViewport: L
  } = I(null != (n = null == D || null == (t = D.current) ? true : t.getScrollerNode()) ? n : null);
  return (0, r.jsxs)("div", {
    id: "quest-tile-".concat(o.id),
    ref: e => {
      y.current = e, x.current = e
    },
    className: a()(E.container, u),
    onMouseEnter: P,
    onMouseLeave: w,
    onFocus: P,
    onBlur: w,
    children: [(0, r.jsx)(h.Z, {
      quest: o,
      isHovering: v,
      errorHints: S,
      warningHints: C,
      isVisibleInViewport: L,
      sourceQuestContent: O
    }), (0, r.jsx)(m.Z, {
      quest: o,
      questContent: d,
      isHovering: v,
      contentPosition: _,
      rowIndex: b,
      onReceiveErrorHints: A,
      isVisibleInViewport: L,
      sourceQuestContent: O
    })]
  })
}

function S(e) {
  return (0, r.jsx)(d.A, {
    questOrQuests: e.quest,
    questContent: e.questContent,
    questContentPosition: e.contentPosition,
    questContentRowIndex: e.rowIndex,
    trackGuildAndChannelMetadata: e.questContent === u.jn.QUESTS_EMBED,
    sourceQuestContent: e.sourceQuestContent,
    children: t => (0, r.jsx)(T, v(y({}, e), {
      impressionRef: t
    }))
  })
}