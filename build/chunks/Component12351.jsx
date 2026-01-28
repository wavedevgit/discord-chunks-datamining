/** Chunk was on 44384 **/
/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228763 = require("./228763.js");
let d = {
  BLOCK: Chunk228763.om,
  INLINE: Chunk228763.mG
};
class _ extends(i = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = d.BLOCK,
      style: i
    } = this.props;
    return (0, l.jsxs)("div", {
      className: s()(t, r),
      style: i,
      children: [(0, l.jsxs)(c.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: E.AD,
        children: [u.intl.string(u.t["8tvIiN"]), ":"]
      }), (0, l.jsx)(c.Text, {
        className: s()(E.uN, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(r = "Types") in _ ? Object.defineProperty(_, r, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : _[r] = d;
let A = _