/** Chunk was on 63141 **/
/** chunk id: 518084, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => x,
  wB: () => m
}), require("./415506.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk877921 = require("./877921.js"),
  c = require.n(Chunk877921),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk881266 = require("./881266.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk981631.t_t.DEFAULT,
  m = 1,
  y = Chunk473749.createContext({
    type: g,
    opacity: m
  }),
  b = Chunk473749.createContext(true),
  _ = e => {
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
        return (0, r.jsx)(b.Consumer, {
          children: e => {
            var o, a;
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
              className: l()(p.bar, p[c()(s)], n),
              style: e
            }, i), a = a = {
              children: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
            }), o))
          }
        })
      }
    })
  };
class v extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, Chunk54381.jsx)(b.Consumer, {
      children: i => (0, r.jsx)(y.Consumer, {
        children: s => {
          let o = l()(p.body, p[c()(s.type)], n);
          return e ? (0, r.jsx)("div", {
            className: o,
            style: i,
            children: t
          }) : (0, r.jsx)(u.Ttm, {
            fade: true,
            className: o,
            children: t
          })
        }
      })
    })
  }
}
f(v, "defaultProps", {
  disableScroll: false
});
let O = e => {
    let {
      type: t = g,
      width: n,
      height: i,
      children: s,
      className: o,
      opacity: a = m,
      onClick: d
    } = e;
    return (0, r.jsx)(y.Provider, {
      value: {
        type: t,
        opacity: a
      },
      children: (0, r.jsx)("div", {
        className: l()(p.widget, p[c()(t)], o),
        style: {
          width: n,
          height: i
        },
        onClick: d,
        children: s
      })
    })
  },
  E = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = false
    } = e;
    return (0, r.jsx)(b.Consumer, {
      children: e => (0, r.jsx)("div", {
        className: l()(p.content, {
          [p.staticSize]: !i
        }, n),
        style: e,
        children: t
      })
    })
  };
O.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [_, v, E];
  return (0, r.jsx)(y.Consumer, {
    children: e => {
      let {
        opacity: o
      } = e, l = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : o), ")")
      };
      if ("string" == typeof t.type) return s.cloneElement(t, {
        style: l
      });
      {
        if (i.includes(t.type)) return (0, r.jsx)(b.Provider, {
          value: l,
          children: t
        });
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, O.Body = v, O.Content = E, O.Icon = e => {
  let {
    ref: t,
    icon: n,
    label: i,
    onClick: s,
    tooltipPosition: o = "top",
    isTutorial: a = false,
    isActive: c,
    size: h = 20
  } = e;
  return (0, r.jsx)(d.u, {
    __unsupportedReactNodeAsText: a ? (0, r.jsx)("div", {
      className: p.tutorialTip,
      children: i
    }) : i,
    "aria-label": i,
    position: o,
    forceOpen: a,
    children: (0, r.jsx)(u.P3F, {
      onClick: s,
      className: l()(p.icon, {
        [p.toggledIconOn]: c
      }),
      innerRef: t,
      "aria-label": i,
      children: (0, r.jsx)(n, {
        color: "currentColor",
        size: "custom",
        width: h,
        height: h,
        role: "img"
      })
    })
  })
}, O.Bar = _;
let x = O