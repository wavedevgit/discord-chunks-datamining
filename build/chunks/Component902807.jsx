/** Chunk was on 384 **/
/** chunk id: 902807, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk152406 = require("./152406.js");
class d extends Chunk473749.Component {
  render() {
    var e, t;
    let n = this.props,
      {
        icon: i
      } = require,
      l = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(require, ["icon"]);
    return (0, Chunk54381.jsx)(Chunk473749, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      size: "md"
    }, Chunk120356), t = t = {
      color: "currentColor"
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
}
let u = (0, Chunk467721.animated)(d),
  g = function(e) {
    let {
      className: t,
      name: n,
      icon: i,
      iconClassName: l
    } = e, s = (0, o.Yzy)({
      name: n,
      icon: i,
      iconClassName: l
    }, {
      key: e => e.name,
      initial: null,
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }, "animate-always");
    return (0, r.jsx)("div", {
      className: a()(c.crossfade, t),
      children: s((e, t) => {
        let {
          icon: n,
          iconClassName: i
        } = t;
        return (0, r.jsx)(u, {
          icon: n,
          className: a()(c.icon, i),
          style: e
        })
      })
    })
  }