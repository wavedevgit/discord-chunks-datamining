/** Chunk was on 79312 **/
/** chunk id: 768762, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var n, a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk192754 = require("./192754.js");
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  p = {
    [d.UP]: "",
    [d.RIGHT]: Chunk192754.right,
    [d.DOWN]: Chunk192754.down,
    [d.LEFT]: Chunk192754.left
  };
class f extends(a = Chunk647438.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.wj7, {
      size: "md",
      color: "currentColor",
      className: s()(exports, {
        [p[module]]: true
      })
    })
  }
}(n = "Directions") in f ? Object.defineProperty(f, n, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : f[n] = d;
let y = f