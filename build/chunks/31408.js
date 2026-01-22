/** Chunk was on web.js **/
/** chunk id: 31408, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  MO: () => f,
  dw: () => d,
  fZ: () => c,
  k: () => o,
  uD: () => l
}), require("./896048.js");
var o = function(e) {
    return e[e.CHAT_INPUT = 0] = "CHAT_INPUT", e[e.REACTION = 1] = "REACTION", e[e.MEMBER_USER = 2] = "MEMBER_USER", e[e.CALL_TILE = 3] = "CALL_TILE", e
  }({}),
  l = function(e) {
    return e[e.CHAT_INPUT = 0] = "CHAT_INPUT", e[e.VOICE_USER = 1] = "VOICE_USER", e[e.MENTION = 2] = "MENTION", e
  }({}),
  c = function(e) {
    return e[e.LEVEL_1 = 0] = "LEVEL_1", e[e.LEVEL_2 = 1] = "LEVEL_2", e[e.LEVEL_3 = 2] = "LEVEL_3", e[e.LEVEL_4 = 3] = "LEVEL_4", e[e.LEVEL_5 = 4] = "LEVEL_5", e
  }({});
let u = {
    0: [
      [1, 1e-4],
      [25, .05],
      [50, .1],
      [100, .5],
      [250, 1],
      [500, 2],
      [1e3, 3],
      [9001, 4]
    ],
    1: [
      [1, 1e-4],
      [25, .25],
      [50, .5],
      [100, 1],
      [250, 2.5],
      [500, 5],
      [1e3, 7.5],
      [9001, 10]
    ],
    2: [
      [1, .001],
      [25, .5],
      [50, 1],
      [100, 2],
      [250, 4],
      [500, 8],
      [1e3, 12],
      [9001, 16]
    ],
    3: [
      [1, .25],
      [25, .75],
      [50, 1],
      [100, 2],
      [250, 4],
      [500, 8],
      [1e3, 20],
      [9001, 50]
    ],
    4: [
      [1, .001],
      [25, .5],
      [50, 1],
      [100, 2],
      [250, 5],
      [500, 10],
      [1e3, 100],
      [9001, 1e4]
    ]
  },
  d = Object.keys(u).reduce((e, t) => s(i({}, e), {
    [t]: u[t].map(e => {
      let [t] = e;
      return t
    })
  }), {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  }),
  f = Object.keys(u).reduce((e, t) => s(i({}, e), {
    [t]: u[t].map(e => {
      let [t, n] = e;
      return n
    })
  }), {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  })