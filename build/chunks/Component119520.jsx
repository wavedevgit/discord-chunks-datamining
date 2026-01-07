/** Chunk was on 1272 **/
/** chunk id: 119520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk558381 = require("./558381.js"),
  Chunk480916 = require("./480916.js"),
  Chunk986035 = require("./986035.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759731 = require("./759731.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk473749.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, r.jsx)("div", {
      className: c.matureListing,
      children: (0, r.jsx)(o.Z, {
        modalType: a.it.NSFW_APP_LISTING,
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: s.intl.formatToPlainString(s.t.n5PGEY, {
          name: e
        }),
        description: s.intl.string(s.t["bJx/aL"]),
        agreement: s.intl.string(s.t.odZq8d),
        disagreement: s.intl.string(s.t.hieTsG)
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleDisagree", () => {
      (0, l.M9)()
    }), u(this, "handleAgree", () => {
      (0, l.cj)()
    })
  }
}
let p = d