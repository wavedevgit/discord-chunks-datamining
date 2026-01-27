/** Chunk was on 92917 **/
/** chunk id: 133296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends(r = Chunk64700.Component) {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: false
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, n = this.state.hovered && e;
    t || n || this.startTimer()
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
    n || this.timer.start(e, () => {
      t()
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
    } = this.props, a = l ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, i.jsx)("div", (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          s(e, t, n[t])
        })
      }
      return e
    }({}, a), t = t = {
      className: r,
      children: n
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
  constructor(...e) {
    super(...e), s(this, "timer", new a.IX), s(this, "state", {
      hovered: false
    }), s(this, "handlePause", () => {
      this.state.hovered || this.setState({
        hovered: true
      })
    }), s(this, "handleResume", () => {
      this.setState({
        hovered: false
      })
    })
  }
}
s(o, "defaultProps", {
  disable: false,
  pauseOnHover: false
});
let c = o