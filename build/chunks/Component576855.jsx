/** Chunk was on 45356 **/
/** chunk id: 576855, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var s, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk574657 = require("./574657.js");
let f = {
  BLOCK: Chunk574657.block,
  INLINE: Chunk574657.inline
};
class d extends(i = Chunk647438.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: s = f.BLOCK,
      style: i
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: o()(exports, s),
      style: i,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: Chunk574657.pro,
        children: [Chunk388032.intl.string(Chunk388032.t["8tvIiI"]), ":"]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: o()(Chunk574657.tip, require),
        variant: "text-sm/normal",
        children: module
      })]
    })
  }
}(s = "Types") in d ? Object.defineProperty(d, s, {
  value: f,
  enumerable: true,
  configurable: true,
  writable: true
}) : d[s] = f;
let g = d