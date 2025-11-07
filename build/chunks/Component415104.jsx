/** Chunk was on 50433 **/
/** chunk id: 415104, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function _(e) {
  var t, n;
  let {
    quest: o,
    className: d,
    questContent: u,
    contentPosition: _,
    rowIndex: j,
    impressionRef: v,
    sourceQuestContent: C
  } = e, [y, E] = s.useState(false), [O, S] = s.useState([]), T = (0, c.qb)(o), w = s.useMemo(() => (0, l.q8)(o), [o]), P = (0, i._F)(), N = s.useCallback(() => {
    E(true), P({
      questId: o.id,
      event: x.rMx.QUEST_HOVER,
      properties: {
        content_id: u,
        content_name: (0, i._b)(u),
        content_position: _
      },
      sourceQuestContent: C
    }), w && (0, p.loadVideoQuestModal)()
  }, [P, o.id, u, w, C, _]), A = s.useCallback(() => {
    E(false), P({
      questId: o.id,
      event: x.rMx.QUEST_HOVER_OFF,
      properties: {
        content_id: u,
        content_name: (0, i._b)(u),
        content_position: _
      },
      sourceQuestContent: C
    })
  }, [P, o.id, u, C, _]), R = s.useContext(g.t), {
    visibilityElementRef: B,
    almostVisibleInViewport: k
  } = function(e) {
    let [t, n] = s.useState(false), r = s.useCallback(e => {
      e.isIntersecting && n(true)
    }, []);
    return {
      visibilityElementRef: (0, m.S)(r, {
        root: null != e ? e : null,
        threshold: 0,
        rootMargin: "900px 0px 900px 0px"
      }, true),
      almostVisibleInViewport: t
    }
  }(null != (n = null == R || null == (t = R.current) ? true : t.getScrollerNode()) ? n : null);
  return (0, r.jsxs)("div", {
    id: "quest-tile-".concat(o.id),
    ref: e => {
      v.current = e, B.current = e
    },
    className: a()(b.container, d),
    onMouseEnter: N,
    onMouseLeave: A,
    onFocus: N,
    onBlur: A,
    children: [(0, r.jsx)(f.Z, {
      quest: o,
      isHovering: y,
      errorHints: O,
      warningHints: T,
      isVisibleInViewport: k,
      sourceQuestContent: C
    }), (0, r.jsx)(h.Z, {
      quest: o,
      questContent: u,
      isHovering: y,
      contentPosition: _,
      rowIndex: j,
      onReceiveErrorHints: S,
      isVisibleInViewport: k,
      sourceQuestContent: C
    })]
  })
}

function j(e) {
  return (0, r.jsx)(u.A, {
    questOrQuests: e.quest,
    questContent: e.questContent,
    questContentPosition: e.contentPosition,
    questContentRowIndex: e.rowIndex,
    trackGuildAndChannelMetadata: e.questContent === d.jn.QUESTS_EMBED,
    sourceQuestContent: e.sourceQuestContent,
    children: t => {
      var n, s;
      return (0, r.jsx)(_, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), s = s = {
        impressionRef: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
      }), n))
    }
  })
}