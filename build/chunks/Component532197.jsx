/** Chunk was on 67851 **/
/** chunk id: 532197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var r, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk262633 = require("./262633.js");
let u = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  _ = {
    [u.UP]: "",
    [u.RIGHT]: Chunk262633.pG,
    [u.DOWN]: Chunk262633.TR,
    [u.LEFT]: Chunk262633.kb
  };
class m extends(l = Chunk64700.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, a.jsx)(c.z$m, {
      size: "md",
      color: "currentColor",
      className: s()(t, {
        [_[e]]: true
      })
    })
  }
}(r = "Directions") in m ? Object.defineProperty(m, r, {
  value: u,
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = u;
let b = m