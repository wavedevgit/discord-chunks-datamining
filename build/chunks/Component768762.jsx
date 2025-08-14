/** Chunk was on 77512 **/
/** chunk id: 768762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192754 = require("./192754.js");
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [d.UP]: "",
    [d.RIGHT]: Chunk192754.right,
    [d.DOWN]: Chunk192754.down,
    [d.LEFT]: Chunk192754.left
  };
class p extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk481060.wj7, {
      size: "md",
      color: "currentColor",
      className: c()(exports, {
        [f[module]]: true
      })
    })
  }
}(r = "Directions") in p ? Object.defineProperty(p, r, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = d;
let b = p