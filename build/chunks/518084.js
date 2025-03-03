/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  ZP: () => S,
  wB: () => m
}), n(411104);
var i, r = n(200651),
  s = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(877921),
  c = n.n(l),
  d = n(481060),
  u = n(981631),
  h = n(710135),
  p = n(612064);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = u.t_t.DEFAULT,
  m = 1,
  y = s.createContext({
    type: g,
    opacity: m
  }),
  _ = s.createContext(void 0),
  v = e => {
    var {
      children: t,
      className: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["children", "className"]);
    return (0, r.jsx)(y.Consumer, {
      children: e => {
        let {
          type: s
        } = e;
        return (0, r.jsx)(_.Consumer, {
          children: e => {
            var o, l;
            return (0, r.jsx)("div", (o = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  f(e, t, n[t])
                })
              }
              return e
            }({
              className: a()(h.bar, h[c()(s)], n),
              style: e
            }, i), l = l = {
              children: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
            }), o))
          }
        })
      }
    })
  };
class O extends(i = s.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, r.jsx)(_.Consumer, {
      children: i => (0, r.jsx)(y.Consumer, {
        children: s => {
          let o = a()(h.body, h[c()(s.type)], n);
          return e ? (0, r.jsx)("div", {
            className: o,
            style: i,
            children: t
          }) : (0, r.jsx)(d.Ttm, {
            fade: !0,
            className: o,
            children: t
          })
        }
      })
    })
  }
}
f(O, "defaultProps", {
  disableScroll: !1
});
let b = e => {
    let {
      type: t = g,
      width: n,
      height: i,
      children: s,
      className: o,
      opacity: l = m,
      onClick: d
    } = e;
    return (0, r.jsx)(y.Provider, {
      value: {
        type: t,
        opacity: l
      },
      children: (0, r.jsx)("div", {
        className: a()(h.widget, h[c()(t)], o),
        style: {
          width: n,
          height: i
        },
        onClick: d,
        children: s
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = !1
    } = e;
    return (0, r.jsx)(_.Consumer, {
      children: e => (0, r.jsx)("div", {
        className: a()(h.content, {
          [h.staticSize]: !i
        }, n),
        style: e,
        children: t
      })
    })
  };
b.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [v, O, x];
  return (0, r.jsx)(y.Consumer, {
    children: e => {
      let {
        opacity: o
      } = e, a = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : o), ")")
      };
      if ("string" == typeof t.type) return s.cloneElement(t, {
        style: a
      });
      if (i.includes(t.type)) return (0, r.jsx)(_.Provider, {
        value: a,
        children: t
      });
      {
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, b.Body = O, b.Content = x, b.Icon = e => {
  let {
    icon: t,
    label: n,
    onClick: i,
    isActive: s,
    tooltipPosition: o = "top",
    size: l = 20,
    isTutorial: c = !1
  } = e;
  return (0, r.jsx)(d.ua7, {
    text: c ? (0, r.jsx)("div", {
      className: h.tutorialTip,
      children: n
    }) : n,
    "aria-label": n,
    position: o,
    forceOpen: c,
    color: c ? d.ua7.Colors.BRAND : d.ua7.Colors.BLACK,
    children: e => {
      let {
        onMouseEnter: o,
        onMouseLeave: c
      } = e;
      return (0, r.jsx)(d.zxk, {
        look: d.zxk.Looks.BLANK,
        size: d.zxk.Sizes.NONE,
        onClick: i,
        onMouseEnter: o,
        onMouseLeave: c,
        className: a()(h.icon, {
          [h.toggledIconOn]: s
        }),
        innerClassName: p.flexCenter,
        "aria-label": n,
        children: (0, r.jsx)(t, {
          color: "currentColor",
          size: "custom",
          width: l,
          height: l,
          role: "img"
        })
      })
    }
  })
}, b.Bar = v;
let S = b