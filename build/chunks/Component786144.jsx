/** Chunk was on 5606 **/
/** chunk id: 786144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk235986 = require("./235986.jsx"),
  Chunk683754 = require("./683754.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: n,
      onMouseLeave: r
    } = this.props;
    return (0, i.jsx)("div", {
      className: a()(c.Nr, t),
      onMouseEnter: n,
      onMouseLeave: r,
      children: e
    })
  }
}
d(u, "Header", e => {
  let {
    children: t,
    className: n,
    splashArtURL: r
  } = e;
  return (0, i.jsxs)(o.A, {
    className: a()(c.wx, n),
    align: o.A.Align.CENTER,
    children: [(0, i.jsx)("div", {
      className: c.Bn,
      style: null != r ? {
        backgroundImage: "url(".concat(r, ")")
      } : true
    }), t]
  })
}), d(u, "Body", e => {
  let {
    children: t,
    className: n
  } = e;
  return (0, i.jsx)("div", {
    className: a()(c.rf, n),
    children: t
  })
});
let p = u