/** Chunk was on 82875 **/
/** chunk id: 484614, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
class _ extends(r = Chunk73800.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, n;
    let {
      text: t
    } = this.props, {
      mode: r
    } = this.state, i = r === Chunk481060.kO8.Modes.SUCCESS ? Chunk388032.intl.string(Chunk388032.t["t5VZ8/"]) : require;
    return (0, Chunk255367.jsx)(Chunk481060.kO8, (e = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          u(e, n, t[n])
        })
      }
      return e
    }({}, this.props), n = n = {
      onCopy: this.handleCopy,
      mode: r,
      text: Chunk73800,
      supportsCopy: Chunk572004.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(exports)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), module))
  }
  handleCopy(e) {
    let {
      onCopy: n,
      delay: t = 1e3
    } = this.props;
    (0, s.JG)(e, () => this.setState({
      mode: c.kO8.Modes.SUCCESS
    }), () => this.setState({
      mode: c.kO8.Modes.ERROR
    })), this._timeout.start(t, () => this.setState({
      mode: c.kO8.Modes.DEFAULT
    })), null == n || n(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case c.kO8.Modes.SUCCESS:
        return l.zx.Colors.GREEN;
      case c.kO8.Modes.ERROR:
        return l.zx.Colors.RED;
      default:
        return l.zx.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), u(this, "_timeout", true), this.state = {
      mode: c.kO8.Modes.DEFAULT
    }, this._timeout = new a.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
u(_, "defaultProps", {
  delay: 1e3
});
let b = _