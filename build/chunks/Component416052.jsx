/** Chunk was on 92779 **/
/** chunk id: 416052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends(r = Chunk64700.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: n
    } = this.props, {
      mode: r
    } = this.state, s = r === c.e2O.Modes.SUCCESS ? d.intl.string(d.t.t5VZ88) : n;
    return (0, o.jsx)(c.e2O, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          p(e, t, n[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: r,
      text: s,
      supportsCopy: l.p5
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }
  handleCopy(e) {
    let {
      onCopy: t,
      delay: n = 1e3
    } = this.props;
    (0, l.C)(e, () => this.setState({
      mode: c.e2O.Modes.SUCCESS
    }), () => this.setState({
      mode: c.e2O.Modes.ERROR
    })), this._timeout.start(n, () => this.setState({
      mode: c.e2O.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case c.e2O.Modes.SUCCESS:
        return a.$n.Colors.GREEN;
      case c.e2O.Modes.ERROR:
        return a.$n.Colors.RED;
      default:
        return a.$n.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), p(this, "_timeout", true), this.state = {
      mode: c.e2O.Modes.DEFAULT
    }, this._timeout = new i.Ep, this.handleCopy = this.handleCopy.bind(this)
  }
}
p(b, "defaultProps", {
  delay: 1e3
});
let u = b