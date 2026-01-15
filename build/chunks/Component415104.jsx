/** Chunk was on 22979 **/
/** chunk id: 415104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk254579 = require("./254579.js"),
  Chunk602667 = require("./602667.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk672188 = require("./672188.js"),
  Chunk466962 = require("./466962.js"),
  Chunk439826 = require("./439826.jsx"),
  Chunk43779 = require("./43779.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk645455 = require("./645455.js");

function v(e) {
  var t, n;
  let {
    quest: i,
    className: o,
    questContent: u,
    contentPosition: v,
    rowIndex: j,
    impressionRef: y,
    sourceQuestContent: C
  } = e, [_, S] = r.useState(false), [E, T] = r.useState([]), O = (0, c.qb)(i), N = r.useMemo(() => (0, d.q8)(i), [i]), P = (0, s._F)(), w = r.useCallback(() => {
    S(true), P({
      questId: i.id,
      event: b.rMx.QUEST_HOVER,
      properties: {
        content_id: u,
        content_name: (0, s._b)(u),
        content_position: v
      },
      sourceQuestContent: C
    }), N && (0, m.loadVideoQuestModal)()
  }, [P, i.id, u, N, C, v]), I = r.useCallback(() => {
    S(false), P({
      questId: i.id,
      event: b.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: u,
        content_name: (0, s._b)(u),
        content_position: v
      },
      sourceQuestContent: C
    })
  }, [P, i.id, u, C, v]), k = r.useContext(h.t), {
    visibilityElementRef: R,
    almostVisibleInViewport: A
  } = function(e) {
    let [t, n] = r.useState(false), a = r.useCallback(e => {
      e.isIntersecting && n(true)
    }, []);
    return {
      visibilityElementRef: (0, p.S)(a, {
        root: null != e ? e : null,
        threshold: 0,
        rootMargin: "900px 0px 900px 0px"
      }, true),
      almostVisibleInViewport: t
    }
  }(null != (n = null == k || null == (t = k.current) ? true : t.getScrollerNode()) ? n : null);
  return (0, a.jsxs)("div", {
    id: "quest-tile-".concat(i.id),
    ref: e => {
      y.current = e, R.current = e
    },
    className: l()(g.container, o),
    onMouseEnter: w,
    onMouseLeave: I,
    onFocus: w,
    onBlur: I,
    children: [(0, a.jsx)(f.Z, {
      quest: i,
      isHovering: _,
      errorHints: E,
      warningHints: O,
      isVisibleInViewport: A,
      sourceQuestContent: C
    }), (0, a.jsx)(x.Z, {
      quest: i,
      questContent: u,
      isHovering: _,
      contentPosition: v,
      rowIndex: j,
      onReceiveErrorHints: T,
      isVisibleInViewport: A,
      sourceQuestContent: C
    })]
  })
}

function j(e) {
  return (0, a.jsx)(u.A, {
    questOrQuests: e.quest,
    questContent: e.questContent,
    questContentPosition: e.contentPosition,
    questContentRowIndex: e.rowIndex,
    trackGuildAndChannelMetadata: e.questContent === o.jn.QUESTS_EMBED,
    sourceQuestContent: e.sourceQuestContent,
    children: t => {
      var n, r;
      return (0, a.jsx)(v, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, e), r = r = {
        impressionRef: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}