/** Chunk was on 71138 **/
/** chunk id: 307414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk974175 = require("./974175.jsx"),
  Chunk985018 = require("./985018.jsx");
class u extends Chunk64700.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == e) return (0, r.jsx)(s.y$y, {
      type: s.y$y.Type.SPINNING_CIRCLE
    });
    let t = l().map(e, (e, t) => {
      if (!(d.R[t] || true === e)) return (0, r.jsx)(d.q7, {
        label: t,
        value: e
      }, t)
    });
    return (0, r.jsxs)(s.BJc, {
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/medium",
        children: c.intl.string(c.t["gWbr/U"])
      }), (0, o.C6)(t)]
    })
  }
}
let m = u