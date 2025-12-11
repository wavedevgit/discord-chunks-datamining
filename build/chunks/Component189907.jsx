/** Chunk was on web.js **/
/** chunk id: 189907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk190995 = require("./190995.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = e => {
    let {
      children: t,
      className: n,
      splashArtURL: r
    } = e;
    return (0, i.jsxs)(l.Z, {
      className: s()(c.header, n),
      align: l.Z.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: c.splashArt,
        style: null != r ? {
          backgroundImage: "url(".concat(r, ")")
        } : true
      }), t]
    })
  },
  f = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(c.body, n),
      children: t
    })
  };
class p extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: n,
      onMouseLeave: r
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: s()(Chunk190995.card, exports),
      onMouseEnter: require,
      onMouseLeave: r,
      children: module
    })
  }
}
u(p, "Header", d), u(p, "Body", f);
let _ = p