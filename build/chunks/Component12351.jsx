/** Chunk was on 32502 **/
/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var i, l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228763 = require("./228763.js");
let h = {
  BLOCK: Chunk228763.om,
  INLINE: Chunk228763.mG
};
class g extends(l = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: i = h.BLOCK,
      style: l
    } = this.props;
    return (0, s.jsxs)("div", {
      className: o()(t, i),
      style: l,
      children: [(0, s.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: u.AD,
        children: [d.intl.string(d.t["8tvIiN"]), ":"]
      }), (0, s.jsx)(c.Text, {
        className: o()(u.uN, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(i = "Types") in g ? Object.defineProperty(g, i, {
  value: h,
  enumerable: true,
  configurable: true,
  writable: true
}) : g[i] = h;
let x = g