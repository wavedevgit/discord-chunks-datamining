/** Chunk was on web.js **/
/** chunk id: 438139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk846519 = require("./846519.js"),
  Chunk388032 = require("./388032.jsx");

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

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = 13;

function p(e) {
  return "".concat(e).length < _ ? 1e3 * e : e
}

function h(e) {
  return class extends i.PureComponent {
    componentDidMount() {
      this._interval.start(1e3, () => this.setState(this.getUpdatedTime()))
    }
    componentWillUnmount() {
      this._interval.stop()
    }
    componentDidUpdate(e) {
      (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
    }
    getUpdatedTime() {
      let {
        timestamps: e
      } = this.props, t = Date.now() / 1e3;
      return null != e.end ? this.getDiff(t, p(e.end) / 1e3) : null != e.start ? this.getDiff(p(e.start) / 1e3, t) : {
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
    renderTime(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      return t && e <= 0 ? false : e < 10 ? "0".concat(e) : e
    }
    getDiff(e, t) {
      let n = Math.max(t - e, 0),
        r = Math.floor(n) % 60,
        i = Math.floor(n / 60) % 60;
      return {
        hours: Math.floor(n / 3600) % 24,
        minutes: i,
        seconds: r
      }
    }
    render() {
      let t = this.props,
        {
          timestamps: n
        } = t,
        i = d(t, ["timestamps"]),
        a = this.renderTime(this.state.hours, true),
        s = this.renderTime(this.state.minutes),
        c = this.renderTime(this.state.seconds),
        f = false === a ? "".concat(s, ":").concat(c) : "".concat(a, ":").concat(s, ":").concat(c);
      return null != n.end ? (0, r.jsx)(e, u(l({}, i), {
        message: o.intl.formatToPlainString(o.t["I/J7vI"], {
          duration: f,
          hours: a,
          minutes: s,
          seconds: c
        })
      })) : null != n.start ? (0, r.jsx)(e, u(l({}, i), {
        message: o.intl.formatToPlainString(o.t.M9Fexd, {
          duration: f,
          hours: a,
          minutes: s,
          seconds: c
        })
      })) : null
    }
    constructor(e) {
      super(e), s(this, "_interval", true), this._interval = new a.Xp, this.state = l({}, this.getUpdatedTime())
    }
  }
}