/** Chunk was on 84699 **/
n.d(t, {
  Z: () => b
});
var o, r = n(200651),
  a = n(192379),
  i = n(846519),
  c = n(481060),
  _ = n(572004),
  d = n(388032);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s extends(o = a.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: n
    } = this.props, {
      mode: o
    } = this.state, a = o === c.kO8.Modes.SUCCESS ? d.NW.string(d.t["t5VZ8/"]) : n;
    return (0, r.jsx)(c.kO8, (e = function(e) {
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
      text: a,
      supportsCopy: _.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        n.push.apply(n, o)
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
    } = this.props, o = (0, _.JG)(e);
    this.setState({
      mode: o ? c.kO8.Modes.SUCCESS : c.kO8.Modes.ERROR
    }), this._timeout.start(n, () => this.setState({
      mode: c.kO8.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case c.kO8.Modes.SUCCESS:
        return c.zxk.Colors.GREEN;
      case c.kO8.Modes.ERROR:
        return c.zxk.Colors.RED;
      default:
        return c.zxk.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), l(this, "_timeout", void 0), this.state = {
      mode: c.kO8.Modes.DEFAULT
    }, this._timeout = new i.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
l(s, "defaultProps", {
  delay: 1e3
});
let b = s