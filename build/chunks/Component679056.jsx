/** Chunk was on web.js **/
/** chunk id: 679056, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class d extends(r = Chunk473749.Component) {
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
    } = this, r = (e, t) => !e.disable && !(t.hovered && e.pauseOnHover), i = r(n, this.state), a = r(e, t);
    i && !a || e.interval !== n.interval ? this.startTimer() : !i && a && this.stopTimer()
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
    let {
      children: e,
      className: t,
      disable: n
    } = this.props, r = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, i.jsx)("div", u(l({}, r), {
      className: t,
      children: e
    }))
  }
  constructor(...e) {
    super(...e), s(this, "timer", new o.Xp), s(this, "state", {
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
s(d, "defaultProps", {
  disable: false,
  pauseOnHover: false
});
let f = d