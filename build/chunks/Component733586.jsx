/** Chunk was on 1113 **/
/** chunk id: 733586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk962125 = require("./962125.jsx"),
  Chunk591329 = require("./591329.js");
let c = 16 / 9;

function u(e, t) {
  return Math.max(1, Math.floor((t - e) / (8 + e)) + 1)
}

function d(e, t, n) {
  let r = t - e;
  for (; r > 0;) {
    let t = e,
      l = Math.floor(r / 2);
    n(t += l) ? (e = t + 1, r -= l + 1) : r = l
  }
  return e
}

function h(e) {
  var t;
  let {
    className: n,
    children: i,
    keyExtractor: h,
    paddingTop: p = 0,
    paddingBottom: g = 0
  } = e, [f, m] = l.useState({
    width: 0,
    height: 0
  }), {
    width: b,
    height: A
  } = f, y = null != (t = null == i ? true : i.length) ? t : 0, O = b - 16, _ = A - (p + g), {
    tileStyle: j,
    tileWidth: x,
    rows: v,
    columns: E
  } = l.useMemo(() => (function(e, t, n) {
    var r, l, i;
    let s, a, o, h, {
      rows: p,
      columns: g,
      tileWidth: f
    } = (r = e, l = t, i = n, a = Math.floor(l / 25), s = r > 25 ? d(a, l, e => {
      let t;
      return u(e, l) * (Math.ceil((i - (t = e / c)) / (8 + t)) + 1) > 25
    }) : d(a, l, e => {
      let t;
      return u(e, l) * (Math.floor((i - (t = e / c)) / (8 + t)) + 1) >= r
    }) - 1, h = Math.ceil(r / (o = u(s, l))), {
      tileWidth: s,
      columns: Math.max(1, o),
      rows: h
    });
    return {
      tileStyle: {
        width: f
      },
      tileWidth: f,
      rows: p,
      columns: g
    }
  })(y, O, _), [y, O, _]), C = E + 1, S = C * x + (C - 1) * 8 <= b, I = Math.floor(x / c) + 8, N = Math.max(0, _ - I * v) / 2;
  return (0, r.jsx)(a.A, {
    fade: true,
    className: n,
    listPadding: [p + N, 0, g + N - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * E;
      return (0, r.jsx)("div", {
        className: o.nM,
        children: null == i || null == (t = i.slice(n, n + E)) ? true : t.map((e, t) => {
          var l;
          let i = n + t;
          return (0, r.jsx)("div", {
            style: j,
            className: s()(o.Vs, {
              [o.E3]: S,
              [o.k4]: i >= (v - 1) * E,
              [o.Kk]: (i + 1) % E == 0 || i === y - 1
            }),
            children: (0, r.jsx)("div", {
              className: o.eP,
              children: e(x)
            })
          }, null != (l = null == h ? true : h(i)) ? l : i)
        })
      }, e)
    },
    rowCount: v,
    rowCountBySection: [v],
    rowHeight: I,
    onResize: m
  })
}