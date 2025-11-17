/** Chunk was on 80960 **/
/** chunk id: 442580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk388032 = require("./388032.jsx");
class u extends Chunk473749.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == module) return (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    });
    let t = l().map(module, (e, t) => {
      if (!(c.al[t] || true === e)) return (0, r.jsx)(c.ck, {
        label: t,
        value: e
      }, t)
    });
    return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t["gWbr/U"])
      }), (0, Chunk481250.VE)(exports)]
    })
  }
}
let m = u