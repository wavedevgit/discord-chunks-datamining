/** Chunk was on 63141 **/
/** chunk id: 518084, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => S,
  wB: () => b
}), require("./415506.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk877921 = require("./877921.js"),
  c = require.n(Chunk877921),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk3649 = require("./3649.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = Chunk981631.t_t.DEFAULT,
  b = 1,
  m = Chunk473749.createContext({
    type: g,
    opacity: b
  }),
  y = Chunk473749.createContext(true),
  v = e => {
    var {
      children: t,
      className: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          a = Object.keys(e);
        for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["children", "className"]);
    return (0, r.jsx)(m.Consumer, {
      children: e => {
        let {
          type: a
        } = e;
        return (0, r.jsx)(y.Consumer, {
          children: e => {
            var s, l;
            return (0, r.jsx)("div", (s = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  p(e, t, n[t])
                })
              }
              return e
            }({
              className: o()(h.bar, h[c()(a)], n),
              style: e
            }, i), l = l = {
              children: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
            }), s))
          }
        })
      }
    })
  };
class O extends(i = Chunk473749.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, Chunk54381.jsx)(y.Consumer, {
      children: i => (0, r.jsx)(m.Consumer, {
        children: a => {
          let s = o()(h.body, h[c()(a.type)], n);
          return e ? (0, r.jsx)("div", {
            className: s,
            style: i,
            children: t
          }) : (0, r.jsx)(u.Ttm, {
            fade: true,
            className: s,
            children: t
          })
        }
      })
    })
  }
}
p(O, "defaultProps", {
  disableScroll: false
});
let E = e => {
    let {
      type: t = g,
      width: n,
      height: i,
      children: a,
      className: s,
      opacity: l = b,
      onClick: d
    } = e;
    return (0, r.jsx)(m.Provider, {
      value: {
        type: t,
        opacity: l
      },
      children: (0, r.jsx)("div", {
        className: o()(h.widget, h[c()(t)], s),
        style: {
          width: n,
          height: i
        },
        onClick: d,
        children: a
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = false
    } = e;
    return (0, r.jsx)(y.Consumer, {
      children: e => (0, r.jsx)("div", {
        className: o()(h.content, {
          [h.staticSize]: !i
        }, n),
        style: e,
        children: t
      })
    })
  };
E.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [v, O, x];
  return (0, r.jsx)(m.Consumer, {
    children: e => {
      let {
        opacity: s
      } = e, o = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : s), ")")
      };
      if ("string" == typeof t.type) return a.cloneElement(t, {
        style: o
      });
      {
        if (i.includes(t.type)) return (0, r.jsx)(y.Provider, {
          value: o,
          children: t
        });
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, E.Body = O, E.Content = x, E.Icon = e => {
  let {
    ref: t,
    icon: n,
    label: i,
    onClick: a,
    tooltipPosition: s = "top",
    isTutorial: l = false,
    isActive: c,
    size: f = 20
  } = e;
  return (0, r.jsx)(d.u, {
    __unsupportedReactNodeAsText: l ? (0, r.jsx)("div", {
      className: h.tutorialTip,
      children: i
    }) : i,
    "aria-label": i,
    position: s,
    forceOpen: l,
    children: (0, r.jsx)(u.P3F, {
      onClick: a,
      className: o()(h.icon, {
        [h.toggledIconOn]: c
      }),
      innerRef: t,
      "aria-label": i,
      children: (0, r.jsx)(n, {
        color: "currentColor",
        size: "custom",
        width: f,
        height: f,
        role: "img"
      })
    })
  })
}, E.Bar = v;
let S = E