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
    return (0, r.jsx)("div", {
      className: o()(c.wrapper, i),
      children: (0, r.jsxs)(l.Z, {
        className: c.flexWrapper,
        direction: l.Z.Direction.VERTICAL,
        align: l.Z.Align.CENTER,
        justify: l.Z.Justify.CENTER,
        children: [(0, r.jsx)(l.Z.Child, {
          grow: 0,
          className: c.image
        }), (0, r.jsxs)(l.Z.Child, {
          grow: 0,
          className: c.text,
          children: [(0, r.jsx)(s.H, {
            className: c.title,
            children: t
          }), null != e ? (0, r.jsx)("div", {
            className: c.note,
            children: e
          }) : null]
        }), n]
      })
    })
  }
}
let d = u