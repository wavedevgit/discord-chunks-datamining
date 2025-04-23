/** Chunk was on 90688 **/
t.d(r, {
  ZP: () => h,
  c2: () => g,
  cK: () => m
});
var n, o, s, a = t(200651),
  l = t(192379),
  i = t(120356),
  c = t.n(i),
  d = t(753240),
  u = t(634715);

function f(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let x = Object.freeze({
    SIZE_40: "size-40",
    SIZE_60: "size-60"
  }),
  p = t(515695);
class b extends(o = l.PureComponent) {
  render() {
    let e = this.props,
      {
        className: r,
        text: t
      } = e,
      n = function(e, r) {
        if (null == e) return {};
        var t, n, o = function(e, r) {
          if (null == e) return {};
          var t, n, o = {},
            s = Object.keys(e);
          for (n = 0; n < s.length; n++) t = s[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
          return o
        }(e, r);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++) t = s[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
        }
        return o
      }(e, ["className", "text"]);
    return (0, a.jsx)("div", {
      style: {
        width: n.size,
        height: n.size,
        backgroundColor: n.bgColor
      },
      className: c()(u.qrCodeContainer, r),
      children: (0, a.jsx)(d.default, C({
        value: t,
        level: "M"
      }, n))
    })
  }
}
f(b, "defaultProps", {
  size: 128,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
class g extends(s = l.PureComponent) {
  render() {
    let {
      overlaySize: e
    } = this.props, r = x[null != e ? e : "SIZE_40"];
    return (0, a.jsxs)("div", {
      className: u.qrCodeOverlayContainer,
      children: [(0, a.jsx)(b, C({}, this.props)), (0, a.jsx)("div", {
        className: u.qrCodeOverlay,
        children: (0, a.jsx)("img", {
          className: u[r],
          src: p,
          alt: ""
        })
      })]
    })
  }
}
f(g, "defaultProps", {
  size: 144,
  bgColor: "#ffffff",
  fgColor: "#000000"
});
let h = b