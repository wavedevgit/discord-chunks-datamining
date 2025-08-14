/** Chunk was on web.js **/
/** chunk id: 406128, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk848673 = require("./848673.js");
class u extends Chunk73800.PureComponent {
  render() {
    let {
      note: e,
      title: t,
      action: n,
      className: i
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      className: a()(Chunk848673.wrapper, Chunk73800),
      children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk848673.flexWrapper,
        direction: Chunk600164.Z.Direction.VERTICAL,
        align: Chunk600164.Z.Align.CENTER,
        justify: Chunk600164.Z.Justify.CENTER,
        children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk848673.image
        }), (0, Chunk255367.jsxs)(Chunk600164.Z.Child, {
          grow: 0,
          className: Chunk848673.text,
          children: [(0, Chunk255367.jsx)(Chunk481060.H, {
            className: Chunk848673.title,
            children: exports
          }), null != module ? (0, Chunk255367.jsx)("div", {
            className: Chunk848673.note,
            children: module
          }) : null]
        }), require]
      })
    })
  }
}
let d = u