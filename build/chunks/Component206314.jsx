/** Chunk was on 80960 **/
/** chunk id: 206314, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk4912 = require("./4912.jsx"),
  Chunk312305 = require("./312305.js");
let m = ["firCount", "nackCount"];
class p extends Chunk73800.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(module) ? (0, Chunk255367.jsx)(Chunk4912.Z, {
      color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css,
      className: Chunk312305.valueIcon
    }) : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: r,
      section: a,
      label: i,
      renderGraph: o
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      className: l()(Chunk312305.item, exports),
      direction: Chunk600164.Z.Direction.VERTICAL,
      basis: "50%",
      children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk312305.kvContainer,
        align: Chunk600164.Z.Align.START,
        children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          children: (0, Chunk255367.jsx)(Chunk481060.H, {
            className: Chunk312305.title,
            children: module
          })
        }), Array.isArray(require) ? (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 1,
          children: require
        }) : (0, Chunk255367.jsxs)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: [this.renderValueIcon(), (0, Chunk255367.jsx)("span", {
            className: Chunk312305.itemValue,
            title: require,
            children: require
          })]
        })]
      }), null !== Chunk692547 && (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        className: Chunk312305.graph,
        children: (0, Chunk255367.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          children: Chunk692547
        })
      }, null != Chunk73800 ? "".concat(Chunk73800, "-").concat(Chunk120356) : Chunk120356), (0, Chunk255367.jsx)(Chunk481060.$i$, {
        className: Chunk312305.divider
      })]
    })
  }
}