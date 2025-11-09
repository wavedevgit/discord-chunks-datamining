/** Chunk was on web.js **/
/** chunk id: 576855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk25663 = require("./25663.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {
  BLOCK: Chunk25663.block,
  INLINE: Chunk25663.inline
};
class _ extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = f.BLOCK,
      style: a
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: s()(exports, r),
      style: Chunk647438,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: Chunk25663.pro,
        children: [Chunk388032.intl.string(Chunk388032.t["8tvIiN"]), ":"]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: s()(Chunk25663.tip, require),
        variant: "text-sm/normal",
        children: module
      })]
    })
  }
}
d(_, "Types", f);
let p = _