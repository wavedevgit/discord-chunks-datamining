/** Chunk was on 76719 **/
/** chunk id: 532197, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var i, s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk262633 = require("./262633.js");
let c = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  h = {
    [c.UP]: "",
    [c.RIGHT]: Chunk262633.pG,
    [c.DOWN]: Chunk262633.TR,
    [c.LEFT]: Chunk262633.kb
  };
class p extends(s = Chunk64700.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, r.jsx)(d.z$m, {
      size: "md",
      color: "currentColor",
      className: a()(t, {
        [h[e]]: true
      })
    })
  }
}(i = "Directions") in p ? Object.defineProperty(p, i, {
  value: c,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[i] = c;
let g = p