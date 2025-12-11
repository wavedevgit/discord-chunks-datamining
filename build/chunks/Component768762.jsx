/** Chunk was on web.js **/
/** chunk id: 768762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk546610 = require("./546610.js");

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
    [d.RIGHT]: Chunk546610.right,
    [d.DOWN]: Chunk546610.down,
    [d.LEFT]: Chunk546610.left
  };
class p extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.wj7, {
      size: "md",
      color: "currentColor",
      className: s()(exports, {
        [f[module]]: true
      })
    })
  }
}
u(p, "Directions", d);
let _ = p