/** Chunk was on 1272 **/
/** chunk id: 689796, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk77878 = require("./77878.jsx"),
  Chunk770146 = require("./770146.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk315208 = require("./315208.js");
class d extends Chunk647438.PureComponent {
  renderContentRatingImage() {
    let {
      contentRating: e,
      contentRatingAgency: t
    } = this.props.sku;
    return null == module || null == exports ? null : (0, Chunk951288.jsx)(Chunk77878.Z, {
      className: Chunk315208.rating,
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
          1: Chunk388032.intl.string(Chunk388032.t.ErVezc),
          2: Chunk388032.intl.string(Chunk388032.t.xLyerK),
          3: Chunk388032.intl.string(Chunk388032.t.UmB6j4),
          4: Chunk388032.intl.string(Chunk388032.t.NHOQIy),
          5: Chunk388032.intl.string(Chunk388032.t.U6xTOz),
          6: Chunk388032.intl.string(Chunk388032.t["51xJIy"]),
          7: Chunk388032.intl.string(Chunk388032.t.uayp6u),
          8: Chunk388032.intl.string(Chunk388032.t.c1GtKi),
          9: Chunk388032.intl.string(Chunk388032.t.Hz8vra),
          10: Chunk388032.intl.string(Chunk388032.t.qSyzdX),
          11: Chunk388032.intl.string(Chunk388032.t.K68q8f),
          12: Chunk388032.intl.string(Chunk388032.t.Yb0n6O),
          13: Chunk388032.intl.string(Chunk388032.t.IIFZqq),
          14: Chunk388032.intl.string(Chunk388032.t["NZ/JGR"]),
          15: Chunk388032.intl.string(Chunk388032.t["5qETTU"]),
          16: Chunk388032.intl.string(Chunk388032.t.kJGLz8),
          17: Chunk388032.intl.string(Chunk388032.t.cB2QRE),
          18: Chunk388032.intl.string(Chunk388032.t.g9SiEx),
          19: Chunk388032.intl.string(Chunk388032.t["Xe0T5+"]),
          20: Chunk388032.intl.string(Chunk388032.t["4k6sY2"]),
          21: Chunk388032.intl.string(Chunk388032.t.cxFiDA),
          22: Chunk388032.intl.string(Chunk388032.t.YvpQKy),
          23: Chunk388032.intl.string(Chunk388032.t.i2gbpa),
          24: Chunk388032.intl.string(Chunk388032.t["LooT/f"]),
          25: Chunk388032.intl.string(Chunk388032.t["/AIXho"]),
          26: Chunk388032.intl.string(Chunk388032.t.oo09Hx),
          27: Chunk388032.intl.string(Chunk388032.t.XCUBe3),
          28: Chunk388032.intl.string(Chunk388032.t.g6dipa),
          29: Chunk388032.intl.string(Chunk388032.t.YYGUqq),
          30: Chunk388032.intl.string(Chunk388032.t.WsqFnJ),
          31: Chunk388032.intl.string(Chunk388032.t.zePEoq),
          32: Chunk388032.intl.string(Chunk388032.t.bGErw8),
          33: Chunk388032.intl.string(Chunk388032.t["imoY9/"]),
          34: Chunk388032.intl.string(Chunk388032.t["Z+VBdn"]),
          35: Chunk388032.intl.string(Chunk388032.t.eBgo0N),
          36: Chunk388032.intl.string(Chunk388032.t["6SVTt7"]),
          37: Chunk388032.intl.string(Chunk388032.t["8Lme6e"]),
          38: Chunk388032.intl.string(Chunk388032.t.ettX4O),
          39: Chunk388032.intl.string(Chunk388032.t.nnVZFx),
          40: Chunk388032.intl.string(Chunk388032.t.TWlbXl),
          41: Chunk388032.intl.string(Chunk388032.t.CAGgEx),
          42: Chunk388032.intl.string(Chunk388032.t["jRZf+f"]),
          43: Chunk388032.intl.string(Chunk388032.t["4Vg0mp"])
        },
        [Chunk981631.aIt.PEGI]: {
          1: Chunk388032.intl.string(Chunk388032.t.VcO2U1),
          2: Chunk388032.intl.string(Chunk388032.t["wt264+"]),
          3: Chunk388032.intl.string(Chunk388032.t["5yzEJS"]),
          4: Chunk388032.intl.string(Chunk388032.t.NBQZX1),
          5: Chunk388032.intl.string(Chunk388032.t["4UG90d"]),
          6: Chunk388032.intl.string(Chunk388032.t.Cf5CtL),
          7: Chunk388032.intl.string(Chunk388032.t.ai9C3d)
        }
      },
      l = module.descriptors.map(e => i[t][e]).join(", ");
    return (0, Chunk951288.jsxs)("div", {
      className: require,
      children: [(0, Chunk951288.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.q9Zqgo)
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk315208.content,
        children: [this.renderContentRatingImage(), (0, Chunk951288.jsx)("div", {
          className: Chunk315208.__invalid_info,
          children: Chunk77878
        })]
      })]
    })
  }
}
let p = d