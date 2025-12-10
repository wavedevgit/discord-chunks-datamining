/** Chunk was on 90688 **/
/** chunk id: 198993, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  ZP: () => y,
  c2: () => b,
  cK: () => m
});
var n, o, l, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk814554 = require("./814554.js"),
  Chunk678249 = require("./678249.js");

function f(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e
}

function C(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      f(e, r, t[r])
    })
  }
  return e
}
var m = ((n = {}).SIZE_40 = "SIZE_40", n.SIZE_60 = "SIZE_60", n);
let p = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  Chunk515695 = require("./515695.js");
class v extends(o = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        className: r,
        text: t
      } = module,
      n = function(e, r) {
        if (null == e) return {};
        var t, n, o = function(e, r) {
          if (null == e) return {};
          var t, n, o = {},
            l = Object.keys(e);
          for (n = 0; n < l.length; n++) t = l[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
          return o
        }(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++) t = l[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
        }
        return o
      }(module, ["className", "text"]);
    return (0, Chunk54381.jsx)("div", {
      style: {
        width: n.size,
        height: n.size,
        backgroundColor: n.bgColor
      },
      className: c()(Chunk678249.qrCodeContainer, exports),
      children: (0, Chunk54381.jsx)(Chunk814554.default, C({
        value: require,
        level: "M"
      }, n))
    })
  }
}
f(v, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class b extends(l = Chunk473749.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, r = p[null != module ? module : "SIZE_40"];
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk678249.qrCodeOverlayContainer,
      children: [(0, Chunk54381.jsx)(v, C({}, this.props)), (0, Chunk54381.jsx)("div", {
        className: Chunk678249.qrCodeOverlay,
        children: (0, Chunk54381.jsx)("img", {
          className: Chunk678249[exports],
          src: Chunk515695,
          alt: ""
        })
      })]
    })
  }
}
f(b, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
let y = v