/** Chunk was on 66866 **/
/** chunk id: 434624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk434650 = require("./434650.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk56314 = require("./56314.js"),
  Chunk566006 = require("./566006.js"),
  Chunk287151 = require("./287151.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");
let g = Chunk73800.memo(function(e) {
    let t, n, {
        useChatFontScaling: i,
        hideEmoji: l,
        emoji: c,
        className: g,
        count: h,
        me: b,
        me_burst: E,
        burst_count: C,
        burst_colors: v,
        readOnly: O,
        isLurking: y,
        isGuest: x,
        isPendingMember: j,
        type: I,
        emojiSize: S
      } = e,
      T = I === p.O.BURST,
      P = (0, m.y4)(b, E, I),
      N = (0, d.v)(T && null != v ? v : []),
      A = i ? _ : f,
      w = T ? C : h,
      Z = (0, u.y)(w, m.aO),
      R = {};
    if (T && null != N) {
      var L;
      let {
        accentColor: e,
        backgroundColor: r,
        opacity: i
      } = N, l = null != (L = (0, o.wK)(null != r ? r : "", i)) ? L : "";
      P && (R.borderColor = r), R.background = l, t = e, n = e
    }
    let D = {
      minWidth: Z,
      color: t,
      borderColor: n
    };
    return (0, r.jsxs)("div", {
      className: a()(A.reaction, A.reactionInner, g, {
        [A.reactionMe]: P,
        [A.reactionReadOnly]: O && !y && !j && !x
      }),
      style: R,
      children: [(0, r.jsx)(s.Z, {
        className: a()({
          [A.hideEmoji]: l
        }),
        emojiId: c.id,
        emojiName: c.name,
        size: S,
        animated: T && c.animated
      }), (0, r.jsx)("div", {
        className: A.reactionCount,
        style: D,
        children: w
      })]
    })
  }),
  h = Chunk73800.memo(function(e) {
    var {
      showImmediate: t,
      reactions: n
    } = e, l = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["showImmediate", "reactions"]);
    let [a, o] = i.useState(false), [s, u] = i.useTransition(), d = i.useCallback(e => {
      !e || a || s || u(() => {
        o(true)
      })
    }, [a, s]), f = (0, c.O)(d), _ = a && !s || t ? m.le : g;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        ref: f
      }), n.map(e => {
        var t, n, i;
        return (0, r.jsx)(_, (t = function(e) {
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
        }({}, l, e), n = n = {
          emojiSize: "reaction"
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), "".concat(e.type === p.O.BURST ? "burst:" : "").concat(null != (i = e.emoji.id) ? i : 0, ":").concat(e.emoji.name))
      })]
    })
  })