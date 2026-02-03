/** Chunk was on 86142 **/
/** chunk id: 414121, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => x,
  Lx: () => A,
  Zs: () => g
});
var r, i, s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk856033 = require("./856033.js"),
  Chunk264869 = require("./264869.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
var g = ((r = {}).SIZE_40 = "SIZE_40", r.SIZE_60 = "SIZE_60", r);
let f = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  Chunk906118 = require("./906118.js");
class m extends(i = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        className: t,
        text: n
      } = e,
      r = function(e, t) {
        if (null == e) return {};
        var n, r, i, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
          return s
        }
        if (s = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              s = Object.getOwnPropertyNames(e);
            for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        return s
      }(e, ["className", "text"]);
    return (0, l.jsx)("div", {
      style: {
        width: r.size,
        height: r.size,
        backgroundColor: r.bgColor
      },
      className: c()(d.qrCodeContainer, t),
      children: (0, l.jsx)(u.default, p({
        value: n,
        level: "M"
      }, r))
    })
  }
}
h(m, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class A extends(s = Chunk64700.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, t = f[null != e ? e : "SIZE_40"];
    return (0, l.jsxs)("div", {
      className: d.qrCodeOverlayContainer,
      children: [(0, l.jsx)(m, p({}, this.props)), (0, l.jsx)("div", {
        className: d.qrCodeOverlay,
        children: (0, l.jsx)("img", {
          className: d[t],
          src: _,
          alt: ""
        })
      })]
    })
  }
}
h(A, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
let x = m