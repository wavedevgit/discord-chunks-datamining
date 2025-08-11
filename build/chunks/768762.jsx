/** Chunk was on 72762 **/
/** chunk id: 768762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk974393 = require("./974393.js");
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  f = {
    [d.UP]: "",
    [d.RIGHT]: Chunk974393.right,
    [d.DOWN]: Chunk974393.down,
    [d.LEFT]: Chunk974393.left
  };
class p extends(i = Chunk73800.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return <Chunk481060.wj7 size={"md"} color={"currentColor"} className={a()(exports, {
        [f[module]]: true
      })} />
  }
}(r = "Directions") in p ? Object.defineProperty(p, r, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[r] = d;
let b = p