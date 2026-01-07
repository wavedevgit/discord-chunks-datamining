/** Chunk was on 80960 **/
/** chunk id: 206314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk4912 = require("./4912.jsx"),
  Chunk101713 = require("./101713.js");
let m = ["firCount", "nackCount"];
class p extends Chunk473749.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(e) ? (0, r.jsx)(d.Z, {
      color: o.Z.unsafe_rawColors.YELLOW_300.css,
      className: u.valueIcon
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: n,
      section: a,
      label: i,
      renderGraph: o
    } = this.props;
    return (0, r.jsxs)(c.Z, {
      className: l()(u.item, t),
      direction: c.Z.Direction.VERTICAL,
      basis: "50%",
      children: [(0, r.jsxs)(c.Z, {
        className: u.kvContainer,
        align: c.Z.Align.START,
        children: [(0, r.jsx)(c.Z.Child, {
          children: (0, r.jsx)(s.H, {
            className: u.title,
            children: e
          })
        }), Array.isArray(n) ? (0, r.jsx)(c.Z.Child, {
          grow: 1,
          children: n
        }) : (0, r.jsxs)(c.Z.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, r.jsx)("span", {
            className: u.itemValue,
            title: n,
            children: n
          })]
        })]
      }), null !== o && (0, r.jsx)(c.Z.Child, {
        className: u.graph,
        children: o
      }, null != a ? "".concat(a, "-").concat(i) : i), (0, r.jsx)(s.izJ, {
        className: u.divider
      })]
    })
  }
}