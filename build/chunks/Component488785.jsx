/** Chunk was on web.js **/
/** chunk id: 488785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk134780 = require("./134780.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
let m = 50,
  g = [Chunk134780.emoji1, Chunk134780.emoji2, Chunk134780.emoji3, Chunk134780.emoji4],
  E = Chunk73800.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: o
    } = e, l = (0, s.sample)(g), c = i.useCallback(() => {
      o(n.key)
    }, [n.key, o]);
    return (0, r.jsx)("div", {
      className: a()(_.emoji, l),
      onAnimationEnd: c,
      children: (0, r.jsx)(d.Z, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null != (t = n.animated) && t
      })
    })
  });

function b(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, o = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), [a, s] = i.useState([]);
  i.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: r
      } = e;
      n !== t || o || null == r || s(e => [...e, h({
        key: (0, l.Z)()
      }, r)])
    }
    return u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, o]);
  let d = i.useCallback(e => {
    s(t => t.filter(t => t.key !== e))
  }, []);
  return o ? null : (0, r.jsx)("div", {
    className: _.container,
    style: {
      top: n - m,
      left: "52%"
    },
    "aria-hidden": true,
    children: a.map(e => (0, r.jsx)(E, {
      emoji: e,
      onAnimationEnd: d
    }, e.key))
  })
}