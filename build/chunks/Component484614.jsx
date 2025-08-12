/** Chunk was on 77710 **/
/** chunk id: 484614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var o, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends(o = Chunk73800.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: n
    } = this.props, {
      mode: o
    } = this.state, r = o === Chunk481060.kO8.Modes.SUCCESS ? Chunk388032.intl.string(Chunk388032.t["t5VZ8/"]) : require;
    return (0, Chunk255367.jsx)(Chunk481060.kO8, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), o.forEach(function(t) {
          l(e, t, n[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: o,
      text: Chunk73800,
      supportsCopy: Chunk572004.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n.push.apply(n, o)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module))
  }
  handleCopy(e) {
    let {
      onCopy: t,
      delay: n = 1e3
    } = this.props;
    (0, d.JG)(e, () => this.setState({
      mode: c.kO8.Modes.SUCCESS
    }), () => this.setState({
      mode: c.kO8.Modes.ERROR
    })), this._timeout.start(n, () => this.setState({
      mode: c.kO8.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case c.kO8.Modes.SUCCESS:
        return _.zx.Colors.GREEN;
      case c.kO8.Modes.ERROR:
        return _.zx.Colors.RED;
      default:
        return _.zx.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), l(this, "_timeout", true), this.state = {
      mode: c.kO8.Modes.DEFAULT
    }, this._timeout = new a.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
l(b, "defaultProps", {
  delay: 1e3
});
let u = b