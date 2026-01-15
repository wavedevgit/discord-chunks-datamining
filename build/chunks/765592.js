/** Chunk was on web.js **/
/** chunk id: 765592, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk610388 = require("./610388.js"),
  Chunk822632 = require("./822632.js");
let a = 0,
  o = 1,
  s = 2,
  l = 3,
  c = 4,
  u = 5,
  d = 6,
  f = 7,
  p = 8,
  _ = 24,
  h = {
    2e3: {
      name: "PathInformation",
      description: m
    },
    2999: {
      name: "ClippingPathName",
      description(e) {
        let [, t] = (0, i.nk)(e, 0);
        return t
      }
    }
  };

function m(e) {
  let t = 2,
    n = {},
    i = [];
  for (let a = 0; a < e.byteLength; a += t + _) {
    let o = r.Z.getShortAt(e, a);
    g[o] && (n[o] || (n[o] = g[o].description), i.push({
      type: o,
      path: g[o].path(e, a + t)
    }))
  }
  return JSON.stringify({
    types: n,
    paths: i
  })
}
let g = {
  [a]: {
    description: "Closed subpath length",
    path: (e, t) => [r.Z.getShortAt(e, t)]
  },
  [o]: {
    description: "Closed subpath Bezier knot, linked",
    path: E
  },
  [s]: {
    description: "Closed subpath Bezier knot, unlinked",
    path: E
  },
  [l]: {
    description: "Open subpath length",
    path: (e, t) => [r.Z.getShortAt(e, t)]
  },
  [c]: {
    description: "Open subpath Bezier knot, linked",
    path: E
  },
  [u]: {
    description: "Open subpath Bezier knot, unlinked",
    path: E
  },
  [d]: {
    description: "Path fill rule",
    path: () => []
  },
  [p]: {
    description: "Initial fill rule",
    path: (e, t) => [r.Z.getShortAt(e, t)]
  },
  [f]: {
    description: "Clipboard",
    path: y
  }
};

function E(e, t) {
  let n = 8,
    r = [];
  for (let i = 0; i < _; i += n) r.push(b(e, t + i));
  return r
}

function b(e, t) {
  let n = O(e, t, 8);
  return [O(e, t + 4, 8), n]
}

function y(e, t) {
  return [
    [O(e, t, 8), O(e, t + 4, 8), O(e, t + 8, 8), O(e, t + 12, 8)], O(e, t + 16, 8)
  ]
}

function O(e, t, n) {
  let a = r.Z.getLongAt(e, t),
    o = a >>> 31 == 0 ? 1 : false,
    s = (0x7f000000 & a) >>> 32 - n,
    l = a & parseInt((0, i._f)("1", 32 - n), 2);
  return o * (0, i.HI)(s.toString(2) + "." + (0, i.Sk)(l.toString(2), 32 - n, "0"), 2)
}