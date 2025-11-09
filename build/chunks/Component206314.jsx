/** Chunk was on 80960 **/
/** chunk id: 206314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk4912 = require("./4912.jsx"),
  Chunk593235 = require("./593235.js");
let m = ["firCount", "nackCount"];
class p extends Chunk647438.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(module) ? (0, Chunk951288.jsx)(Chunk4912.Z, {
      color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css,
      className: Chunk593235.valueIcon
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
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: l()(Chunk593235.item, exports),
      direction: Chunk600164.Z.Direction.VERTICAL,
      basis: "50%",
      children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk593235.kvContainer,
        align: Chunk600164.Z.Align.START,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          children: (0, Chunk951288.jsx)(Chunk481060.H, {
            className: Chunk593235.title,
            children: module
          })
        }), Array.isArray(require) ? (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 1,
          children: require
        }) : (0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, Chunk951288.jsx)("span", {
            className: Chunk593235.itemValue,
            title: require,
            children: require
          })]
        })]
      }), null !== Chunk692547 && (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        className: Chunk593235.graph,
        children: Chunk692547
      }, null != Chunk647438 ? "".concat(Chunk647438, "-").concat(Chunk120356) : Chunk120356), (0, Chunk951288.jsx)(Chunk481060.izJ, {
        className: Chunk593235.divider
      })]
    })
  }
}