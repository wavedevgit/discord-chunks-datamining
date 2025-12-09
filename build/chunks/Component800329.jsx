/** Chunk was on 73755 **/
/** chunk id: 800329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk218867 = require("./218867.jsx"),
  Chunk581857 = require("./581857.js");
let c = 16 / 9;

function u(e, t) {
  return Math.max(1, Math.floor((t - e) / (8 + e)) + 1)
}

function d(e, t, n) {
  let i = t - e;
  for (; i > 0;) {
    let t = e,
      r = Math.floor(i / 2);
    n(t += r) ? (e = t + 1, i -= r + 1) : i = r
  }
  return e
}

function p(e) {
  var t;
  let {
    className: n,
    children: l,
    keyExtractor: p,
    paddingTop: h = 0,
    paddingBottom: f = 0
  } = e, [m, g] = r.useState({
    width: 0,
    height: 0
  }), {
    width: b,
    height: C
  } = m, y = null != (t = null == l ? true : l.length) ? t : 0, _ = b - 16, v = C - (h + f), {
    tileStyle: O,
    tileWidth: x,
    rows: E,
    columns: j
  } = r.useMemo(() => (function(e, t, n) {
    let {
      rows: i,
      columns: r,
      tileWidth: l
    } = function(e, t, n) {
      let i, r = Math.floor(t / 25);
      i = e > 25 ? d(r, t, e => {
        let i = u(e, t);
        return i * function(e, t) {
          let n = e / c;
          return Math.ceil((t - n) / (8 + n)) + 1
        }(e, n) > 25
      }) : d(r, t, i => {
        let r = u(i, t);
        return r * function(e, t) {
          let n = e / c;
          return Math.floor((t - n) / (8 + n)) + 1
        }(i, n) >= e
      }) - 1;
      let l = u(i, t),
        a = Math.ceil(e / l);
      return {
        tileWidth: i,
        columns: Math.max(1, l),
        rows: a
      }
    }(e, t, n);
    return {
      tileStyle: {
        width: l
      },
      tileWidth: l,
      rows: i,
      columns: r
    }
  })(y, _, v), [y, _, v]), S = j + 1, P = S * x + (S - 1) * 8 <= b, I = Math.floor(x / c) + 8, Z = Math.max(0, v - I * E) / 2;
  return (0, i.jsx)(o.Z, {
    fade: true,
    className: n,
    listPadding: [h + Z, 0, f + Z - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * j;
      return (0, i.jsx)("div", {
        className: s.row,
        children: null == l || null == (t = l.slice(n, n + j)) ? true : t.map((e, t) => {
          var r;
          let l = n + t;
          return (0, i.jsx)("div", {
            style: O,
            className: a()(s.tile, {
              [s.padColumn]: P,
              [s.noVerticalMargin]: l >= (E - 1) * j,
              [s.noHorizontalMargin]: (l + 1) % j == 0 || l === y - 1
            }),
            children: (0, i.jsx)("div", {
              className: s.tileSizer,
              children: e(x)
            })
          }, null != (r = null == p ? true : p(l)) ? r : l)
        })
      }, e)
    },
    rowCount: E,
    rowCountBySection: [E],
    rowHeight: I,
    onResize: g
  })
}