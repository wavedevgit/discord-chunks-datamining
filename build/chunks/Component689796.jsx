/** Chunk was on 1272 **/
/** chunk id: 689796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk77878 = require("./77878.jsx"),
  Chunk770146 = require("./770146.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709793 = require("./709793.js");
class d extends Chunk473749.PureComponent {
  renderContentRatingImage() {
    let {
      contentRating: e,
      contentRatingAgency: t
    } = this.props.sku;
    return null == module || null == exports ? null : (0, Chunk54381.jsx)(Chunk77878.Z, {
      className: Chunk709793.rating,
      agency: exports,
      rating: module.rating
    })
  }
  render() {
    let {
      sku: {
        contentRating: e,
        contentRatingAgency: t
      },
      className: n
    } = this.props;
    if (null == module || null == exports) return null;
    let i = {
        [Chunk981631.aIt.ESRB]: {
          1: Chunk388032.intl.string(Chunk388032.t.ErVezT),
          2: Chunk388032.intl.string(Chunk388032.t.xLyerM),
          3: Chunk388032.intl.string(Chunk388032.t.UmB6j4),
          4: Chunk388032.intl.string(Chunk388032.t.NHOQIx),
          5: Chunk388032.intl.string(Chunk388032.t.U6xTOx),
          6: Chunk388032.intl.string(Chunk388032.t["51xJIw"]),
          7: Chunk388032.intl.string(Chunk388032.t.uayp6o),
          8: Chunk388032.intl.string(Chunk388032.t.c1GtKm),
          9: Chunk388032.intl.string(Chunk388032.t.Hz8vrY),
          10: Chunk388032.intl.string(Chunk388032.t.qSyzdd),
          11: Chunk388032.intl.string(Chunk388032.t.K68q8V),
          12: Chunk388032.intl.string(Chunk388032.t.Yb0n6M),
          13: Chunk388032.intl.string(Chunk388032.t.IIFZqn),
          14: Chunk388032.intl.string(Chunk388032.t["NZ/JGV"]),
          15: Chunk388032.intl.string(Chunk388032.t["5qETTQ"]),
          16: Chunk388032.intl.string(Chunk388032.t.kJGLz1),
          17: Chunk388032.intl.string(Chunk388032.t.cB2QRG),
          18: Chunk388032.intl.string(Chunk388032.t["g9SiE+"]),
          19: Chunk388032.intl.string(Chunk388032.t.Xe0T58),
          20: Chunk388032.intl.string(Chunk388032.t["4k6sY/"]),
          21: Chunk388032.intl.string(Chunk388032.t.cxFiDC),
          22: Chunk388032.intl.string(Chunk388032.t.YvpQK9),
          23: Chunk388032.intl.string(Chunk388032.t.i2gbpb),
          24: Chunk388032.intl.string(Chunk388032.t["LooT/V"]),
          25: Chunk388032.intl.string(Chunk388032.t["/AIXhm"]),
          26: Chunk388032.intl.string(Chunk388032.t.oo09H9),
          27: Chunk388032.intl.string(Chunk388032.t.XCUBez),
          28: Chunk388032.intl.string(Chunk388032.t.g6dipd),
          29: Chunk388032.intl.string(Chunk388032.t.YYGUqs),
          30: Chunk388032.intl.string(Chunk388032.t.WsqFnB),
          31: Chunk388032.intl.string(Chunk388032.t.zePEol),
          32: Chunk388032.intl.string(Chunk388032.t.bGErw4),
          33: Chunk388032.intl.string(Chunk388032.t.imoY95),
          34: Chunk388032.intl.string(Chunk388032.t["Z+VBdp"]),
          35: Chunk388032.intl.string(Chunk388032.t.eBgo0A),
          36: Chunk388032.intl.string(Chunk388032.t["6SVTt7"]),
          37: Chunk388032.intl.string(Chunk388032.t["8Lme6b"]),
          38: Chunk388032.intl.string(Chunk388032.t.ettX4D),
          39: Chunk388032.intl.string(Chunk388032.t.nnVZF7),
          40: Chunk388032.intl.string(Chunk388032.t.TWlbXv),
          41: Chunk388032.intl.string(Chunk388032.t["CAGgE/"]),
          42: Chunk388032.intl.string(Chunk388032.t["jRZf+d"]),
          43: Chunk388032.intl.string(Chunk388032.t["4Vg0mm"])
        },
        [Chunk981631.aIt.PEGI]: {
          1: Chunk388032.intl.string(Chunk388032.t.VcO2U3),
          2: Chunk388032.intl.string(Chunk388032.t.wt264z),
          3: Chunk388032.intl.string(Chunk388032.t["5yzEJa"]),
          4: Chunk388032.intl.string(Chunk388032.t["NBQZX/"]),
          5: Chunk388032.intl.string(Chunk388032.t["4UG90a"]),
          6: Chunk388032.intl.string(Chunk388032.t.Cf5CtK),
          7: Chunk388032.intl.string(Chunk388032.t.ai9C3Q)
        }
      },
      l = module.descriptors.map(e => i[t][e]).join(", ");
    return (0, Chunk54381.jsxs)("div", {
      className: require,
      children: [(0, Chunk54381.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.q9Zqgl)
      }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
        className: Chunk709793.content,
        children: [this.renderContentRatingImage(), (0, Chunk54381.jsx)("div", {
          className: Chunk709793.__invalid_info,
          children: Chunk77878
        })]
      })]
    })
  }
}
let p = d