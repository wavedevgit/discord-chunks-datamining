/** Chunk was on web.js **/
/** chunk id: 576855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk508759 = require("./508759.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = {
  BLOCK: Chunk508759.block,
  INLINE: Chunk508759.inline
};
class _ extends(r = Chunk73800.PureComponent) {
  render() {
    let {
      children: e,
      className: t,
      textClassName: n,
      type: r = f.BLOCK,
      style: o
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: s()(exports, r),
      style: Chunk73800,
      children: [(0, Chunk255367.jsxs)(Chunk481060.Text, {
        variant: "text-sm/bold",
        tag: "div",
        color: "text-feedback-positive",
        className: Chunk508759.pro,
        children: [Chunk388032.intl.string(Chunk388032.t["8tvIiI"]), ":"]
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: s()(Chunk508759.tip, require),
        variant: "text-sm/normal",
        children: module
      })]
    })
  }
}
d(_, "Types", f);
let p = _