/** Chunk was on 21738 **/
/** chunk id: 363994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk800342 = require("./800342.js"),
  Chunk847599 = require("./847599.js"),
  Chunk506164 = require("./506164.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk385288 = require("./385288.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk64700.PureComponent {
  render() {
    let {
      game: {
        name: e
      }
    } = this.props;
    return (0, r.jsx)("div", {
      className: c.J,
      children: (0, r.jsx)(s.A, {
        modalType: a.A5.NSFW_APP_LISTING,
        onAgree: this.handleAgree,
        onDisagree: this.handleDisagree,
        title: o.intl.formatToPlainString(o.t.n5PGEY, {
          name: e
        }),
        description: o.intl.string(o.t["bJx/aL"]),
        agreement: o.intl.string(o.t.odZq8d),
        disagreement: o.intl.string(o.t.hieTsG)
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "handleDisagree", () => {
      (0, l.bf)()
    }), u(this, "handleAgree", () => {
      (0, l.VD)()
    })
  }
}
let p = d