/** Chunk was on 90228 **/
/** chunk id: 439075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk792620 = require("./792620.js"),
  Chunk73473 = require("./73473.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk203879 = require("./203879.js"),
  Chunk321503 = require("./321503.js"),
  Chunk56853 = require("./56853.jsx"),
  Chunk515038 = require("./515038.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk348655 = require("./348655.js");

function j(e) {
  var t, n;
  let {
    quest: r,
    className: s,
    questContent: m,
    contentPosition: j,
    rowIndex: _,
    impressionRef: y,
    sourceQuestContent: A
  } = e, [C, S] = l.useState(false), [O, T] = l.useState([]), E = (0, o.aC)(r), N = l.useMemo(() => (0, u.vv)(r), [r]), w = (0, c.u0)(), I = l.useCallback(() => {
    S(true), w({
      questId: r.id,
      event: b.HAw.QUEST_HOVER,
      properties: {
        content_id: m,
        content_name: (0, d.jO)(m),
        content_position: j
      },
      sourceQuestContent: A
    }), N && (0, p.l9)()
  }, [w, r.id, m, N, A, j]), k = l.useCallback(() => {
    S(false), w({
      questId: r.id,
      event: b.HAw.QUEST_HOVER_OFF,
      properties: {
        content_id: m,
        content_name: (0, d.jO)(m),
        content_position: j
      },
      sourceQuestContent: A
    })
  }, [w, r.id, m, A, j]), P = l.useContext(x.X), {
    visibilityElementRef: R,
    almostVisibleInViewport: D
  } = function(e) {
    let [t, n] = l.useState(false), a = l.useCallback(e => {
      e.isIntersecting && n(true)
    }, []);
    return {
      visibilityElementRef: (0, h.B)(a, {
        root: null != e ? e : null,
        threshold: 0,
        rootMargin: "900px 0px 900px 0px"
      }, true),
      almostVisibleInViewport: t
    }
  }(null != (t = null == P || null == (n = P.current) ? true : n.getScrollerNode()) ? t : null);
  return (0, a.jsxs)("div", {
    id: "quest-tile-".concat(r.id),
    ref: e => {
      y.current = e, R.current = e
    },
    className: i()(v.k, s),
    onMouseEnter: I,
    onMouseLeave: k,
    onFocus: I,
    onBlur: k,
    children: [(0, a.jsx)(g.A, {
      quest: r,
      isHovering: C,
      errorHints: O,
      warningHints: E,
      isVisibleInViewport: D,
      sourceQuestContent: A
    }), (0, a.jsx)(f.A, {
      quest: r,
      questContent: m,
      isHovering: C,
      contentPosition: j,
      rowIndex: _,
      onReceiveErrorHints: T,
      isVisibleInViewport: D,
      sourceQuestContent: A
    })]
  })
}

function _(e) {
  return (0, a.jsx)(m.R, {
    questOrQuests: e.quest,
    questContent: e.questContent,
    questContentPosition: e.contentPosition,
    questContentRowIndex: e.rowIndex,
    trackGuildAndChannelMetadata: e.questContent === s.uF.QUESTS_EMBED,
    sourceQuestContent: e.sourceQuestContent,
    children: t => {
      var n, l;
      return (0, a.jsx)(j, (n = function(e) {
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
      }({}, e), l = l = {
        impressionRef: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }
  })
}