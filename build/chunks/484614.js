/** Chunk was on 72836 **/
n.d(t, {
  Z: () => u
});
var r, o = n(200651),
  i = n(192379),
  a = n(846519),
  s = n(481060),
  l = n(572004),
  _ = n(388032);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends(r = i.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    var e, t;
    let {
      text: n
    } = this.props, {
      mode: r
    } = this.state, i = r === s.kO8.Modes.SUCCESS ? _.NW.string(_.t["t5VZ8/"]) : n;
    return (0, o.jsx)(s.kO8, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          d(e, t, n[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      onCopy: this.handleCopy,
      mode: r,
      text: i,
      supportsCopy: l.wS
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
    } = this.props, r = (0, l.JG)(e);
    this.setState({
      mode: r ? s.kO8.Modes.SUCCESS : s.kO8.Modes.ERROR
    }), this._timeout.start(n, () => this.setState({
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
    super(e), d(this, "_timeout", void 0), this.state = {
      mode: s.kO8.Modes.DEFAULT
    }, this._timeout = new a.V7, this.handleCopy = this.handleCopy.bind(this)
  }
}
d(c, "defaultProps", {
  delay: 1e3
});
let u = c