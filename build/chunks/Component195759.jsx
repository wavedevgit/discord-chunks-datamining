/** Chunk was on 80388 **/
/** chunk id: 195759, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk885377 = require("./885377.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class s extends Chunk64700.Component {
  render() {
    let {
      transitionState: e
    } = this.props;
    return (0, n.jsx)(l.A, {
      transitionState: e,
      onClose: async () => await this.cancel(),
      "aria-label": a.intl.string(a.t.Nn0Px8),
      title: a.intl.string(a.t.Nn0Px8),
      premiumModalType: l.A.Types.UNCLAIMED,
      primary: {
        onClick: this.claimAccount,
        label: a.intl.string(a.t.fiNVin)
      },
      secondary: {
        onClick: this.cancel,
        label: a.intl.string(a.t.oEAioF)
      },
      children: a.intl.string(a.t["7btfmI"])
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
      null == e || e(), (0, i.mMO)(async () => {
        let {
          default: e
        } = await r.e("27672").then(r.bind(r, 888363));
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
let p = s