/** Chunk was on web.js **/
/** chunk id: 576855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk216746 = require("./216746.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {
  BLOCK: Chunk216746.block,
  INLINE: Chunk216746.inline
};
class p extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = f.BLOCK,
      style: a
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: s()(exports, r),
      style: Chunk473749,
      children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: Chunk216746.pro,
        children: [Chunk388032.intl.string(Chunk388032.t["8tvIiN"]), ":"]
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: s()(Chunk216746.tip, require),
        variant: "text-sm/normal",
        children: module
      })]
    })
  }
}
d(p, "Types", f);
let _ = p