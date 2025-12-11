/** Chunk was on web.js **/
/** chunk id: 406128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk943182 = require("./943182.js");
class u extends Chunk473749.PureComponent {
  render() {
    let {
      note: e,
      title: t,
      action: n,
      className: i
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: o()(Chunk943182.wrapper, Chunk473749),
      children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
        className: Chunk943182.flexWrapper,
        direction: Chunk600164.Z.Direction.VERTICAL,
        align: Chunk600164.Z.Align.CENTER,
        justify: Chunk600164.Z.Justify.CENTER,
        children: [(0, Chunk54381.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk943182.image
        }), (0, Chunk54381.jsxs)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk943182.text,
          children: [(0, Chunk54381.jsx)(Chunk481060.H, {
            className: Chunk943182.title,
            children: exports
          }), null != module ? (0, Chunk54381.jsx)("div", {
            className: Chunk943182.note,
            children: module
          }) : null]
        }), require]
      })
    })
  }
}
let d = u