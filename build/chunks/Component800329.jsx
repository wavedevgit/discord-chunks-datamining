/** Chunk was on web.js **/
/** chunk id: 800329, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk218867 = require("./218867.jsx"),
  Chunk967207 = require("./967207.js");
let c = 16 / 9,
  u = 25,
  d = 8,
  f = 16;

function _(e, t) {
  return Math.ceil(t / e)
}

function p(e, t) {
  return Math.max(1, Math.floor((t - e) / (d + e)) + 1)
}

function h(e, t) {
  let n = e / c;
  return Math.floor((t - n) / (d + n)) + 1
}

function m(e, t) {
  let n = e / c;
  return Math.ceil((t - n) / (d + n)) + 1
}

function g(e, t, n) {
  let r = t - e;
  for (; r > 0;) {
    let t = e,
      i = Math.floor(r / 2);
    n(t += i) ? (e = t + 1, r -= i + 1) : r = i
  }
  return e
}

function E(e, t, n) {
  let r, i = Math.floor(t / u),
    o = t;
  r = e > u ? g(i, o, e => p(e, t) * m(e, n) > u) : g(i, o, r => p(r, t) * h(r, n) >= e) - 1;
  let a = p(r, t),
    s = _(a, e);
  return {
    tileWidth: r,
    columns: Math.max(1, a),
    rows: s
  }
}

function b(e, t, n) {
  let {
    rows: r,
    columns: i,
    tileWidth: o
  } = E(e, t, n);
  return {
    tileStyle: {
      width: o
    },
    tileWidth: o,
    rows: r,
    columns: i
  }
}

function y(e) {
  var t;
  let {
    className: n,
    children: o,
    keyExtractor: u,
    paddingTop: _ = 0,
    paddingBottom: p = 0
  } = e, [h, m] = i.useState({
    width: 0,
    height: 0
  }), {
    width: g,
    height: E
  } = h, y = null != (t = null == o ? true : o.length) ? t : 0, O = g - f, v = E - (_ + p), {
    tileStyle: I,
    tileWidth: T,
    rows: S,
    columns: A
  } = i.useMemo(() => b(y, O, v), [y, O, v]), N = A + 1, C = N * T + (N - 1) * d <= g, R = Math.floor(T / c) + d, P = Math.max(0, v - R * S) / 2;

  function w(e) {
    var t;
    let n = e * A;
    return (0, r.jsx)("div", {
      className: l.row,
      children: null == o || null == (t = o.slice(n, n + A)) ? true : t.map((e, t) => {
        var i;
        let o = n + t;
        return (0, r.jsx)("div", {
          style: I,
          className: a()(l.tile, {
            [l.padColumn]: C,
            [l.noVerticalMargin]: o >= (S - 1) * A,
            [l.noHorizontalMargin]: (o + 1) % A == 0 || o === y - 1
          }),
          children: (0, r.jsx)("div", {
            className: l.tileSizer,
            children: e(T)
          })
        }, null != (i = null == u ? true : u(o)) ? i : o)
      })
    }, e)
  }
  return (0, r.jsx)(s.Z, {
    fade: true,
    className: n,
    listPadding: [_ + P, 0, p + P - d, f / 2],
    renderRow: w,
    rowCount: S,
    rowCountBySection: [S],
    rowHeight: R,
    onResize: m
  })
}