/** Chunk was on 72450 **/
/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var i, r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228763 = require("./228763.js");
let h = {
  BLOCK: Chunk228763.om,
  INLINE: Chunk228763.mG
};
class p extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: i = h.BLOCK,
      style: r
    } = this.props;
    return (0, l.jsxs)("div", {
      className: a()(t, i),
      style: r,
      children: [(0, l.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: d.AD,
        children: [u.intl.string(u.t["8tvIiN"]), ":"]
      }), (0, l.jsx)(c.Text, {
        className: a()(d.uN, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(i = "Types") in p ? Object.defineProperty(p, i, {
  value: h,
  enumerable: true,
  configurable: true,
  writable: true
}) : p[i] = h;
let C = p