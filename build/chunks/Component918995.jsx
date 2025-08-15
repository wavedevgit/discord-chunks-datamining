/** Chunk was on 69417 **/
/** chunk id: 918995, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk233787 = require("./233787.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class s extends Chunk647438.Component {
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk233787.C, {
      transitionState: module,
      onClose: async () => await this.cancel(),
      "aria-label": Chunk388032.intl.string(Chunk388032.t.Nn0Px8),
      title: Chunk388032.intl.string(Chunk388032.t.Nn0Px8),
      premiumModalType: Chunk233787.C.Types.UNCLAIMED,
      primary: {
        onClick: this.claimAccount,
        label: Chunk388032.intl.string(Chunk388032.t.fiNVio)
      },
      secondary: {
        onClick: this.cancel,
        label: Chunk388032.intl.string(Chunk388032.t.oEAioK)
      },
      children: Chunk388032.intl.string(Chunk388032.t["7btfmJ"])
    })
  }
  constructor(...e) {
    super(...e), o(this, "cancel", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e()
    }), o(this, "claimAccount", () => {
      let {
        onClose: e
      } = this.props;
      null == e || e(), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await r.e("60827").then(r.bind(r, 324239));
        return t => (0, n.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              o(e, t, r[t])
            })
          }
          return e
        }({}, t))
      })
    })
  }
}
let u = s