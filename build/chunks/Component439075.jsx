/** Chunk was on 22477 **/
/** chunk id: 439075, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk792620 = require("./792620.js"),
  Chunk73473 = require("./73473.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk203879 = require("./203879.js"),
  Chunk321503 = require("./321503.js"),
  Chunk56853 = require("./56853.jsx"),
  Chunk515038 = require("./515038.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk348655 = require("./348655.js");

function v(e) {
  var t, n;
  let {
    quest: i,
    className: o,
    questContent: u,
    contentPosition: v,
    rowIndex: j,
    impressionRef: y,
    sourceQuestContent: _
  } = e, [A, C] = l.useState(false), [S, O] = l.useState([]), E = (0, c.aC)(i), N = l.useMemo(() => (0, d.vv)(i), [i]), T = (0, s.u0)(), I = l.useCallback(() => {
    C(true), T({
      questId: i.id,
      event: b.HAw.QUEST_HOVER,
      properties: {
        content_id: u,
        content_name: (0, s.jO)(u),
        content_position: v
      },
      sourceQuestContent: _
    }), N && (0, m.l9)()
  }, [T, i.id, u, N, _, v]), w = l.useCallback(() => {
    C(false), T({
      questId: i.id,
      event: b.HAw.QUEST_HOVER_OFF,
      properties: {
        content_id: u,
        content_name: (0, s.jO)(u),
        content_position: v
      },
      sourceQuestContent: _
    })
  }, [T, i.id, u, _, v]), k = l.useContext(h.X), {
    visibilityElementRef: P,
    almostVisibleInViewport: R
  } = function(e) {
    let [t, n] = l.useState(false), a = l.useCallback(e => {
      e.isIntersecting && n(true)
    }, []);
    return {
      visibilityElementRef: (0, p.B)(a, {
        root: null != e ? e : null,
        threshold: 0,
        rootMargin: "900px 0px 900px 0px"
      }, true),
      almostVisibleInViewport: t
    }
  }(null != (t = null == k || null == (n = k.current) ? true : n.getScrollerNode()) ? t : null);
  return (0, a.jsxs)("div", {
    id: "quest-tile-".concat(i.id),
    ref: e => {
      y.current = e, P.current = e
    },
    className: r()(g.k, o),
    onMouseEnter: I,
    onMouseLeave: w,
    onFocus: I,
    onBlur: w,
    children: [(0, a.jsx)(f.A, {
      quest: i,
      isHovering: A,
      errorHints: S,
      warningHints: E,
      isVisibleInViewport: R,
      sourceQuestContent: _
    }), (0, a.jsx)(x.A, {
      quest: i,
      questContent: u,
      isHovering: A,
      contentPosition: v,
      rowIndex: j,
      onReceiveErrorHints: O,
      isVisibleInViewport: R,
      sourceQuestContent: _
    })]
  })
}

function j(e) {
  return (0, a.jsx)(u.R, {
    questOrQuests: e.quest,
    questContent: e.questContent,
    questContentPosition: e.contentPosition,
    questContentRowIndex: e.rowIndex,
    trackGuildAndChannelMetadata: e.questContent === o.uF.QUESTS_EMBED,
    sourceQuestContent: e.sourceQuestContent,
    children: t => {
      var n, l;
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