/** Chunk was on 75708 **/
/** chunk id: 189907, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk559595 = require("./559595.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: n,
      onMouseLeave: i
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      className: l()(Chunk559595.card, exports),
      onMouseEnter: require,
      onMouseLeave: i,
      children: module
    })
  }
}
d(u, "Header", e => {
  let {
    children: t,
    className: n,
    splashArtURL: i
  } = e;
  return (0, r.jsxs)(o.Z, {
    className: l()(c.header, n),
    align: o.Z.Align.CENTER,
    children: [(0, r.jsx)("div", {
      className: c.splashArt,
      style: null != i ? {
        backgroundImage: "url(".concat(i, ")")
      } : true
    }), t]
  })
}), d(u, "Body", e => {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: l()(c.body, n),
    children: t
  })
});
let m = u