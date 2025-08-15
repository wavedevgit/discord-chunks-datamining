/** Chunk was on 44565 **/
/** chunk id: 576855, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var i, l, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574657 = require("./574657.js");
let u = {
  BLOCK: Chunk574657.block,
  INLINE: Chunk574657.inline
};
class h extends(l = Chunk73800.PureComponent) {
  render() {
    let {
      children: e,
      className: n,
      textClassName: t,
      type: i = u.BLOCK,
      style: l
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: a()(exports, i),
      style: l,
      children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: Chunk574657.pro,
        children: [Chunk388032.intl.string(Chunk388032.t["8tvIiI"]), ":"]
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: a()(Chunk574657.tip, require),
        variant: "text-sm/normal",
        children: module
      })]
    })
  }
}(i = "Types") in h ? Object.defineProperty(h, i, {
  value: u,
  enumerable: true,
  configurable: true,
  writable: true
}) : h[i] = u;
let _ = h