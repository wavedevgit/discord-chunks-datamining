/** Chunk was on 80960 **/
/** chunk id: 442580, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk388032 = require("./388032.jsx");
class u extends Chunk647438.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == module) return (0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    });
    let t = l().map(module, (e, t) => {
      if (!(c.al[t] || true === e)) return (0, n.jsx)(c.ck, {
        label: t,
        value: e
      }, t)
    });
    return (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H2,
      title: Chunk388032.intl.string(Chunk388032.t["gWbr/f"]),
      children: (0, Chunk481250.a)(exports)
    })
  }
}
let m = u