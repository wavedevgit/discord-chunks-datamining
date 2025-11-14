/** Chunk was on web.js **/
/** chunk id: 434624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk866442 = require("./866442.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk446489 = require("./446489.jsx"),
  Chunk56314 = require("./56314.js"),
  Chunk566006 = require("./566006.js"),
  Chunk287151 = require("./287151.jsx"),
  Chunk127947 = require("./127947.js"),
  Chunk893973 = require("./893973.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = Chunk647438.memo(function(e) {
  let t, n, {
      useChatFontScaling: i,
      hideEmoji: a,
      emoji: s,
      className: m,
      count: g,
      me: E,
      me_burst: b,
      burst_count: y,
      burst_colors: O,
      readOnly: v,
      isLurking: I,
      isGuest: T,
      isPendingMember: S,
      type: A,
      emojiSize: C
    } = e,
    N = A === f.O.BURST,
    R = (0, _.y4)(E, b, A),
    P = (0, d.v)(N && null != O ? O : []),
    D = i ? h : p,
    w = N ? y : g,
    x = (0, u.y)(w, _.aO),
    L = {};
  if (N && null != P) {
    var M;
    let {
      accentColor: e,
      backgroundColor: r,
      opacity: i
    } = P, a = null != (M = (0, l.wK)(null != r ? r : "", i)) ? M : "";
    R && (L.borderColor = r), L.background = a, t = e, n = e
  }
  let k = {
    minWidth: x,
    color: t,
    borderColor: n
  };
  return (0, r.jsxs)("div", {
    className: o()(D.reaction, D.reactionInner, m, {
      [D.reactionMe]: R,
      [D.reactionReadOnly]: v && !I && !S && !T
    }),
    style: L,
    children: [(0, r.jsx)(c.Z, {
      className: o()({
        [D.hideEmoji]: a
      }),
      emojiId: s.id,
      emojiName: s.name,
      size: C,
      animated: N && s.animated
    }), (0, r.jsx)("div", {
      className: D.reactionCount,
      style: k,
      children: w
    })]
  })
});

function I(e) {
  var t;
  return "".concat(e.type === f.O.BURST ? "burst:" : "").concat(null != (t = e.emoji.id) ? t : 0, ":").concat(e.emoji.name)
}
let T = Chunk647438.memo(function(e) {
  var {
    showImmediate: t,
    reactions: n
  } = e, a = y(e, ["showImmediate", "reactions"]);
  let [o, l] = i.useState(false), [c, u] = i.useTransition(), d = i.useCallback(e => {
    !e || o || c || u(() => {
      l(true)
    })
  }, [o, c]), f = (0, s.O)(d), p = o && !c || t ? _.le : v;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: f
    }), n.map(e => (0, r.jsx)(p, b(g({}, a, e), {
      emojiSize: "reaction"
    }), I(e)))]
  })
})