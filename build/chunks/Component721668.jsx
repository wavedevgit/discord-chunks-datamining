/** Chunk was on web.js **/
/** chunk id: 721668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk967626 = require("./967626.js");
class u extends Chunk64700.PureComponent {
  render() {
    let {
      note: e,
      title: t,
      action: n,
      className: i
    } = this.props;
    return (0, r.jsx)("div", {
      className: o()(c.iE, i),
      children: (0, r.jsxs)(l.A, {
        className: c.Bo,
        direction: l.A.Direction.VERTICAL,
        align: l.A.Align.CENTER,
        justify: l.A.Justify.CENTER,
        children: [(0, r.jsx)(l.A.Child, {
          grow: 0,
          className: c.Sl
        }), (0, r.jsxs)(l.A.Child, {
          grow: 0,
          className: c.Qq,
          children: [(0, r.jsx)(s.H, {
            className: c.DD,
            children: t
          }), null != e ? (0, r.jsx)("div", {
            className: c.N4,
            children: e
          }) : null]
        }), n]
      })
    })
  }
}
let d = u