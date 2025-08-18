/** Chunk was on 89035 **/
/** chunk id: 484614, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class p extends(n = Chunk647438.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: r
    } = this.props, {
      mode: n
    } = this.state, a = n === Chunk481060.kO8.Modes.SUCCESS ? Chunk388032.intl.string(Chunk388032.t["t5VZ8/"]) : require;
    return (0, Chunk951288.jsx)(Chunk481060.kO8, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          u(e, t, r[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: n,
      text: Chunk647438,
      supportsCopy: Chunk572004.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(exports)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), module))
  }
  handleCopy(e) {
    let {
      onCopy: t,
      delay: r = 1e3
    } = this.props;
    (0, c.JG)(e, () => this.setState({
      mode: l.kO8.Modes.SUCCESS
    }), () => this.setState({
      mode: l.kO8.Modes.ERROR
    })), this._timeout.start(r, () => this.setState({
      mode: l.kO8.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case l.kO8.Modes.SUCCESS:
        return i.zx.Colors.GREEN;
      case l.kO8.Modes.ERROR:
        return i.zx.Colors.RED;
      default:
        return i.zx.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), u(this, "_timeout", true), this.state = {
      mode: l.kO8.Modes.DEFAULT
    }, this._timeout = new s.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
u(p, "defaultProps", {
  delay: 1e3
});
let m = p