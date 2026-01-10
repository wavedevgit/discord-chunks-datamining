/** Chunk was on 81985 **/
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
  let r = t - e;
  for (; r > 0;) {
    let t = e,
      i = Math.floor(r / 2);
    n(t += i) ? (e = t + 1, r -= i + 1) : r = i
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
  } = e, [g, m] = i.useState({
    width: 0,
    height: 0
  }), {
    width: b,
    height: y
  } = g, v = null != (t = null == l ? true : l.length) ? t : 0, O = b - 16, j = y - (f + h), {
    tileStyle: x,
    tileWidth: C,
    rows: E,
    columns: S
  } = i.useMemo(() => (function(e, t, n) {
    let {
      rows: r,
      columns: i,
      tileWidth: l
    } = function(e, t, n) {
      let r, i = Math.floor(t / 25);
      r = e > 25 ? d(i, t, e => {
        let r = u(e, t);
        return r * function(e, t) {
          let n = e / c;
          return Math.ceil((t - n) / (8 + n)) + 1
        }(e, n) > 25
      }) : d(i, t, r => {
        let i = u(r, t);
        return i * function(e, t) {
          let n = e / c;
          return Math.floor((t - n) / (8 + n)) + 1
        }(r, n) >= e
      }) - 1;
      let l = u(r, t),
        a = Math.ceil(e / l);
      return {
        tileWidth: r,
        columns: Math.max(1, l),
        rows: a
      }
    }(e, t, n);
    return {
      tileStyle: {
        width: l
      },
      tileWidth: l,
      rows: r,
      columns: i
    }
  })(v, O, j), [v, O, j]), _ = S + 1, I = _ * C + (_ - 1) * 8 <= b, P = Math.floor(C / c) + 8, Z = Math.max(0, j - P * E) / 2;
  return (0, r.jsx)(o.Z, {
    fade: true,
    className: n,
    listPadding: [f + Z, 0, h + Z - 8, 8],
    renderRow: function(e) {
      var t;
      let n = e * S;
      return (0, r.jsx)("div", {
        className: s.row,
        children: null == l || null == (t = l.slice(n, n + S)) ? true : t.map((e, t) => {
          var i;
          let l = n + t;
          return (0, r.jsx)("div", {
            style: x,
            className: a()(s.tile, {
              [s.padColumn]: I,
              [s.noVerticalMargin]: l >= (E - 1) * S,
              [s.noHorizontalMargin]: (l + 1) % S == 0 || l === v - 1
            }),
            children: (0, r.jsx)("div", {
              className: s.tileSizer,
              children: e(C)
            })
          }, null != (i = null == p ? true : p(l)) ? i : l)
        })
      }, e)
    },
    rowCount: E,
    rowCountBySection: [E],
    rowHeight: P,
    onResize: m
  })
}