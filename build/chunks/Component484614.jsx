/** Chunk was on 81498 **/
/** chunk id: 484614, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(i = Chunk73800.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: n
    } = this.props, {
      mode: i
    } = this.state, s = i === Chunk481060.kO8.Modes.SUCCESS ? Chunk388032.intl.string(Chunk388032.t["t5VZ8/"]) : require;
    return (0, Chunk255367.jsx)(Chunk481060.kO8, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          d(e, t, n[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: i,
      text: Chunk73800,
      supportsCopy: Chunk572004.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
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
    (0, u.JG)(e, () => this.setState({
      mode: a.kO8.Modes.SUCCESS
    }), () => this.setState({
      mode: a.kO8.Modes.ERROR
    })), this._timeout.start(n, () => this.setState({
      mode: a.kO8.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case a.kO8.Modes.SUCCESS:
        return o.zx.Colors.GREEN;
      case a.kO8.Modes.ERROR:
        return o.zx.Colors.RED;
      default:
        return o.zx.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), d(this, "_timeout", true), this.state = {
      mode: a.kO8.Modes.DEFAULT
    }, this._timeout = new l.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
d(h, "defaultProps", {
  delay: 1e3
});
let p = h