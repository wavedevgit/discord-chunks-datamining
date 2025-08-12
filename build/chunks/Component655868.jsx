/** Chunk was on 20501 **/
/** chunk id: 655868, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218872 = require("./218872.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = /[^0-9]/g;
class c extends Chunk73800.PureComponent {
  componentDidUpdate(e) {
    let t = this._inputRef;
    e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart)
  }
  render() {
    var e, t;
    return (0, Chunk255367.jsx)(Chunk481060.oil, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          l(e, t, n[t])
        })
      }
      return e
    }({}, this.props), t = t = {
      inputMode: "numeric",
      onChange: this.handleChange,
      inputRef: this.setRef
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
  constructor(...e) {
    super(...e), l(this, "_inputRef", true), l(this, "selectionStart", 0), l(this, "setRef", e => {
      let {
        inputRef: t
      } = this.props;
      this._inputRef = e, null != t && t(e)
    }), l(this, "handleChange", (e, t) => {
      let {
        value: n,
        onChange: i
      } = this.props, r = this._inputRef;
      if (e === n || null == r || null == n) return;
      let s = (0, a.M)(e),
        l = r.selectionStart;
      s === n && s.length <= 3 && n.includes("/") && !e.includes("/") ? s = s.replace(o, "") : s === n && e.includes("/") && !n.includes("/") && (s += "/"), s.length > e.length && (l += s.length - e.length), this.selectionStart = l, null != i && i(s, t)
    })
  }
}
let d = c