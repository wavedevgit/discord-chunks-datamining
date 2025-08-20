/** Chunk was on web.js **/
/** chunk id: 189907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk803925 = require("./803925.js");

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
class _ extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: n,
      onMouseLeave: r
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: s()(Chunk803925.card, exports),
      onMouseEnter: require,
      onMouseLeave: r,
      children: module
    })
  }
}
u(_, "Header", d), u(_, "Body", f);
let p = _