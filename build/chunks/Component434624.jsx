/** Chunk was on 91173 **/
/** chunk id: 434624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk434650 = require("./434650.js"),
  Chunk446489 = require("./446489.jsx"),
  Chunk56314 = require("./56314.js"),
  Chunk566006 = require("./566006.js"),
  Chunk287151 = require("./287151.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");
let _ = Chunk647438.memo(function(e) {
    let t, n, {
        useChatFontScaling: i,
        hideEmoji: l,
        emoji: c,
        className: _,
        count: h,
        me: b,
        me_burst: E,
        burst_count: C,
        burst_colors: O,
        readOnly: v,
        isLurking: y,
        isGuest: x,
        isPendingMember: j,
        type: I,
        emojiSize: S
      } = e,
      T = I === p.O.BURST,
      P = (0, m.y4)(b, E, I),
      N = (0, d.v)(T && null != O ? O : []),
      A = i ? g : f,
      w = T ? C : h,
      Z = (0, u.y)(w, m.aO),
      R = {};
    if (T && null != N) {
      var D;
      let {
        accentColor: e,
        backgroundColor: r,
        opacity: i
      } = N, l = null != (D = (0, a.wK)(null != r ? r : "", i)) ? D : "";
      P && (R.borderColor = r), R.background = l, t = e, n = e
    }
    let L = {
      minWidth: Z,
      color: t,
      borderColor: n
    };
    return (0, r.jsxs)("div", {
      className: o()(A.reaction, A.reactionInner, _, {
        [A.reactionMe]: P,
        [A.reactionReadOnly]: v && !y && !j && !x
      }),
      style: R,
      children: [(0, r.jsx)(s.Z, {
        className: o()({
          [A.hideEmoji]: l
        }),
        emojiId: c.id,
        emojiName: c.name,
        size: S,
        animated: T && c.animated
      }), (0, r.jsx)("div", {
        className: A.reactionCount,
        style: L,
        children: w
      })]
    })
  }),
  h = Chunk647438.memo(function(e) {
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
    let [o, a] = i.useState(false), [s, u] = i.useTransition(), d = i.useCallback(e => {
      !e || o || s || u(() => {
        a(true)
      })
    }, [o, s]), f = (0, c.O)(d), g = o && !s || t ? m.le : _;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        ref: f
      }), n.map(e => {
        var t, n, i;
        return (0, r.jsx)(g, (t = function(e) {
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