/** Chunk was on 91819 **/
o.d(t, {
  Z: () => l
});
var n, r = o(200651),
  a = o(192379),
  i = o(846519),
  s = o(481060),
  d = o(572004),
  _ = o(388032);

function c(e, t, o) {
  return t in e ? Object.defineProperty(e, t, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = o, e
}
class b extends(n = a.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: o
    } = this.props, {
      mode: n
    } = this.state, a = n === s.kO8.Modes.SUCCESS ? _.NW.string(_.t["t5VZ8/"]) : o;
    return (0, r.jsx)(s.kO8, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable
        }))), n.forEach(function(t) {
          c(e, t, o[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: n,
      text: a,
      supportsCopy: d.wS
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        o.push.apply(o, n)
      }
      return o
    })(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
    }), e))
  }
  handleCopy(e) {
    let {
      onCopy: t,
      delay: o = 1e3
    } = this.props, n = (0, d.JG)(e);
    this.setState({
      mode: n ? s.kO8.Modes.SUCCESS : s.kO8.Modes.ERROR
    }), this._timeout.start(o, () => this.setState({
      mode: s.kO8.Modes.DEFAULT
    })), null == t || t(e)
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case s.kO8.Modes.SUCCESS:
        return s.zxk.Colors.GREEN;
      case s.kO8.Modes.ERROR:
        return s.zxk.Colors.RED;
      default:
        return s.zxk.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), c(this, "_timeout", void 0), this.state = {
      mode: s.kO8.Modes.DEFAULT
    }, this._timeout = new i.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
c(b, "defaultProps", {
  delay: 1e3
});
let l = b