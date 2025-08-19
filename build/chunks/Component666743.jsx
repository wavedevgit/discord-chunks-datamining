/** Chunk was on 66181 **/
/** chunk id: 666743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk314897 = require("./314897.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  return class extends r.Component {
    componentDidMount() {
      s.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      s.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      var t, n;
      return (0, i.jsx)(e, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            a(e, t, n[t])
          })
        }
        return e
      }({}, this.props), n = n = {
        isAuthenticated: this.state.isAuthenticated
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
    constructor(...e) {
      super(...e), a(this, "state", {
        isAuthenticated: s.default.isAuthenticated()
      }), a(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: s.default.isAuthenticated()
        })
      })
    }
  }
}