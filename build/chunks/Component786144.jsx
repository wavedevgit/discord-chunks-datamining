/** Chunk was on web.js **/
/** chunk id: 786144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk235986 = require("./235986.jsx"),
  Chunk683754 = require("./683754.js");

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
    return (0, i.jsxs)(l.A, {
      className: o()(c.wx, n),
      align: l.A.Align.CENTER,
      children: [(0, i.jsx)("div", {
        className: c.Bn,
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
      className: o()(c.rf, n),
      children: t
    })
  };
class p extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: n,
      onMouseLeave: r
    } = this.props;
    return (0, i.jsx)("div", {
      className: o()(c.Nr, t),
      onMouseEnter: n,
      onMouseLeave: r,
      children: e
    })
  }
}
u(p, "Header", d), u(p, "Body", f);
let _ = p