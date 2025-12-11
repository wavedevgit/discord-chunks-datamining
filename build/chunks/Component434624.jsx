/** Chunk was on web.js **/
/** chunk id: 434624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk866442 = require("./866442.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk446489 = require("./446489.jsx"),
  Chunk56314 = require("./56314.js"),
  Chunk566006 = require("./566006.js"),
  Chunk287151 = require("./287151.jsx"),
  Chunk860302 = require("./860302.js"),
  Chunk378369 = require("./378369.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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
let v = Chunk473749.memo(function(e) {
  let t, n, {
      useChatFontScaling: i,
      hideEmoji: a,
      emoji: s,
      className: h,
      count: g,
      me: E,
      me_burst: b,
      burst_count: y,
      burst_colors: O,
      readOnly: v,
      isLurking: S,
      isGuest: I,
      isPendingMember: T,
      type: C,
      emojiSize: A
    } = e,
    N = C === f.O.BURST,
    P = (0, p.y4)(E, b, C),
    R = (0, d.v)(N && null != O ? O : []),
    w = i ? m : _,
    D = N ? y : g,
    x = (0, u.y)(D, p.aO),
    L = {};
  if (N && null != R) {
    var j;
    let {
      accentColor: e,
      backgroundColor: r,
      opacity: i
    } = R, a = null != (j = (0, l.wK)(null != r ? r : "", i)) ? j : "";
    P && (L.borderColor = r), L.background = a, t = e, n = e
  }
  let M = {
    minWidth: x,
    color: t,
    borderColor: n
  };
  return (0, r.jsxs)("div", {
    className: o()(w.reaction, w.reactionInner, h, {
      [w.reactionMe]: P,
      [w.reactionReadOnly]: v && !S && !T && !I
    }),
    style: L,
    children: [(0, r.jsx)(c.Z, {
      className: o()({
        [w.hideEmoji]: a
      }),
      emojiId: s.id,
      emojiName: s.name,
      size: A,
      animated: N && s.animated
    }), (0, r.jsx)("div", {
      className: w.reactionCount,
      style: M,
      children: D
    })]
  })
});

function S(e) {
  var t;
  return "".concat(e.type === f.O.BURST ? "burst:" : "").concat(null != (t = e.emoji.id) ? t : 0, ":").concat(e.emoji.name)
}
let I = Chunk473749.memo(function(e) {
  var {
    showImmediate: t,
    reactions: n
  } = e, a = y(e, ["showImmediate", "reactions"]);
  let [o, l] = i.useState(false), [c, u] = i.useTransition(), d = i.useCallback(e => {
    !e || o || c || u(() => {
      l(true)
    })
  }, [o, c]), f = (0, s.O)(d), _ = o && !c || t ? p.le : v;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: f
    }), n.map(e => (0, r.jsx)(_, b(g({}, a, e), {
      emojiSize: "reaction"
    }), S(e)))]
  })
})