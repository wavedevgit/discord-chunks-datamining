/** Chunk was on 21425 **/
/** chunk id: 492684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk451988 = require("./451988.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  return "".concat(e).length < 13 ? 1e3 * e : e
}

function d(e) {
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
      return null != e.end ? this.getDiff(t, u(e.end) / 1e3) : null != e.start ? this.getDiff(u(e.start) / 1e3, t) : {
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
        i = function(e, t) {
          if (null == e) return {};
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }(t, ["timestamps"]),
        l = this.renderTime(this.state.hours, true),
        s = this.renderTime(this.state.minutes),
        u = this.renderTime(this.state.seconds),
        d = false === l ? "".concat(s, ":").concat(u) : "".concat(l, ":").concat(s, ":").concat(u);
      return null != n.end ? (0, r.jsx)(e, c(o({}, i), {
        message: a.intl.formatToPlainString(a.t["I/J7vI"], {
          duration: d
        })
      })) : null != n.start ? (0, r.jsx)(e, c(o({}, i), {
        message: a.intl.formatToPlainString(a.t.M9Fexd, {
          duration: d
        })
      })) : null
    }
    constructor(e) {
      super(e), s(this, "_interval", true), this._interval = new l.IX, this.state = o({}, this.getUpdatedTime())
    }
  }
}