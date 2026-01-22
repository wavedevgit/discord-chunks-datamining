/** Chunk was on web.js **/
/** chunk id: 532197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk262633 = require("./262633.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [d.UP]: "",
    [d.RIGHT]: Chunk262633.pG,
    [d.DOWN]: Chunk262633.TR,
    [d.LEFT]: Chunk262633.kb
  };
class p extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, i.jsx)(l.z$m, {
      size: "md",
      color: "currentColor",
      className: o()(t, {
        [f[e]]: true
      })
    })
  }
}
u(p, "Directions", d);
let _ = p