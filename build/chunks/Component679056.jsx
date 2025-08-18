/** Chunk was on 91173 **/
/** chunk id: 679056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk846519 = require("./846519.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends(r = Chunk647438.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: false
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, n = this.state.hovered && module;
    exports || require || this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    let {
      props: n
    } = this, r = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), i = r(n, this.state), l = r(e, t);
    i && !l || e.interval !== n.interval ? this.startTimer() : !i && l && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: n
    } = this.props;
    require || this.timer.start(module, () => {
      exports()
    })
  }
  stopTimer() {
    this.timer.stop()
  }
  render() {
    var e, t;
    let {
      children: n,
      className: r,
      disable: l
    } = this.props, a = Chunk647438 ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, Chunk951288.jsx)("div", (e = function(e) {
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
    }({}, Chunk846519), t = t = {
      className: r,
      children: require
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(exports)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), module))
  }
  constructor(...e) {
    super(...e), o(this, "timer", new a.Xp), o(this, "state", {
      hovered: false
    }), o(this, "handlePause", () => {
      this.state.hovered || this.setState({
        hovered: true
      })
    }), o(this, "handleResume", () => {
      this.setState({
        hovered: false
      })
    })
  }
}
o(s, "defaultProps", {
  disable: false,
  pauseOnHover: false
});
let c = s