/** Chunk was on 99839 **/
r.d(t, {
  Z: () => d
});
var n, i = r(200651),
  l = r(192379),
  o = r(120356),
  a = r.n(o),
  c = r(392806);

function u(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
class s extends(n = l.PureComponent) {
  render() {
    var e, t;
    let r = this.props,
      {
        tag: n,
        children: l,
        hoverText: o,
        className: s,
        forceHover: d
      } = r,
      p = function(e, t) {
        if (null == e) return {};
        var r, n, i = function(e, t) {
          if (null == e) return {};
          var r, n, i = {},
            l = Object.keys(e);
          for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
        }
        return i
      }(r, ["tag", "children", "hoverText", "className", "forceHover"]);
    return (0, i.jsxs)("div", (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          u(e, t, r[t])
        })
      }
      return e
    }({}, p), t = t = {
      className: a()(s, c.hoverRoll, {
        [c.disabled]: null == o,
        [c.forceHover]: d
      }),
      children: [(0, i.jsx)(n, {
        className: c.hovered,
        children: o
      }), (0, i.jsx)(n, {
        className: c.default,
        children: l
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e))
  }
}
u(s, "defaultProps", {
  tag: "div",
  forceHover: !1
});
let d = s