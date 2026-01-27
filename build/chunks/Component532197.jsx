/** Chunk was on 92917 **/
/** chunk id: 532197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk262633 = require("./262633.js");
let d = {
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    LEFT: "left"
  },
  p = {
    [d.UP]: "",
    [d.RIGHT]: Chunk262633.pG,
    [d.DOWN]: Chunk262633.TR,
    [d.LEFT]: Chunk262633.kb
  };
class m extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      direction: e,
      className: t
    } = this.props;
    return (0, l.jsx)(c.z$m, {
      size: "md",
      color: "currentColor",
      className: o()(t, {
        [p[e]]: true
      })
    })
  }
}(r = "Directions") in m ? Object.defineProperty(m, r, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : m[r] = d;
let f = m