/** Chunk was on 92869 **/
/** chunk id: 12351, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var s, r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk228763 = require("./228763.js");
let d = {
  BLOCK: Chunk228763.om,
  INLINE: Chunk228763.mG
};
class g extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = d.BLOCK,
      style: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: c()(t, s),
      style: r,
      children: [(0, a.jsxs)(o.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: p.AD,
        children: [u.intl.string(u.t["8tvIiN"]), ":"]
      }), (0, a.jsx)(o.Text, {
        className: c()(p.uN, n),
        variant: "text-sm/normal",
        children: e
      })]
    })
  }
}(s = "Types") in g ? Object.defineProperty(g, s, {
  value: d,
  enumerable: true,
  configurable: true,
  writable: true
}) : g[s] = d;
let f = g