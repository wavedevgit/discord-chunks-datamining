/** Chunk was on 40184 **/
/** chunk id: 800329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk218867 = require("./218867.jsx"),
  Chunk817754 = require("./817754.js");
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
    paddingTop: f = 0,
    paddingBottom: h = 0
  } = e, [m, g] = r.useState({
    width: 0,
    height: 0
  }), {
    width: b,
    height: C
  } = m, y = null != (t = null == l ? true : l.length) ? t : 0, v = b - 16, O = C - (f + h), {
    tileStyle: x,
    tileWidth: E,
    rows: j,
    columns: S
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
  })(y, v, O), [y, v, O]), _ = S + 1, P = _ * E + (_ - 1) * 8 <= b, I = Math.floor(E / c) + 8, Z = Math.max(0, O - I * j) / 2;
  return (0, i.jsx)(o.Z, {
    fade: true,
    className: n,
    listPadding: [f + Z, 0, h + Z - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * S;
      return (0, i.jsx)("div", {
        className: s.row,
        children: null == l || null == (t = l.slice(n, n + S)) ? true : t.map((e, t) => {
          var r;
          let l = n + t;
          return (0, i.jsx)("div", {
            style: x,
            className: a()(s.tile, {
              [s.padColumn]: P,
              [s.noVerticalMargin]: l >= (j - 1) * S,
              [s.noHorizontalMargin]: (l + 1) % S == 0 || l === y - 1
            }),
            children: (0, i.jsx)("div", {
              className: s.tileSizer,
              children: e(E)
            })
          }, null != (r = null == p ? true : p(l)) ? r : l)
        })
      }, e)
    },
    rowCount: j,
    rowCountBySection: [j],
    rowHeight: I,
    onResize: g
  })
}