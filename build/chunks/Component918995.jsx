/** Chunk was on 69417 **/
/** chunk id: 918995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk233787 = require("./233787.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk73800.Component {
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk233787.C, {
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
        } = await n.e("60827").then(n.bind(n, 324239));
        return t => (0, r.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              o(e, t, n[t])
            })
          }
          return e
        }({}, t))
      })
    })
  }
}
let u = l