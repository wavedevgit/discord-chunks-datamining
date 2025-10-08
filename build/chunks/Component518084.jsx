/** Chunk was on 63141 **/
/** chunk id: 518084, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => Z,
  wB: () => _
}), require("./415506.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk877921 = require("./877921.js"),
  c = require.n(Chunk877921),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk881266 = require("./881266.js"),
  Chunk149715 = require("./149715.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = Chunk981631.t_t.DEFAULT,
  _ = 1,
  O = Chunk647438.createContext({
    type: y,
    opacity: _
  }),
  b = Chunk647438.createContext(true),
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
    return (0, r.jsx)(O.Consumer, {
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
                  m(e, t, n[t])
                })
              }
              return e
            }({
              className: l()(f.bar, f[c()(s)], n),
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
class E extends(i = Chunk647438.PureComponent) {
  render() {
    let {
      disableScroll: e,
      children: t,
      className: n
    } = this.props;
    return (0, Chunk951288.jsx)(b.Consumer, {
      children: i => (0, r.jsx)(O.Consumer, {
        children: s => {
          let o = l()(f.body, f[c()(s.type)], n);
          return e ? (0, r.jsx)("div", {
            className: o,
            style: i,
            children: t
          }) : (0, r.jsx)(p.Ttm, {
            fade: true,
            className: o,
            children: t
          })
        }
      })
    })
  }
}
m(E, "defaultProps", {
  disableScroll: false
});
let x = e => {
    let {
      type: t = y,
      width: n,
      height: i,
      children: s,
      className: o,
      opacity: a = _,
      onClick: d
    } = e;
    return (0, r.jsx)(O.Provider, {
      value: {
        type: t,
        opacity: a
      },
      children: (0, r.jsx)("div", {
        className: l()(f.widget, f[c()(t)], o),
        style: {
          width: n,
          height: i
        },
        onClick: d,
        children: s
      })
    })
  },
  S = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = false
    } = e;
    return (0, r.jsx)(b.Consumer, {
      children: e => (0, r.jsx)("div", {
        className: l()(f.content, {
          [f.staticSize]: !i
        }, n),
        style: e,
        children: t
      })
    })
  };
x.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [v, E, S];
  return (0, r.jsx)(O.Consumer, {
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
}, x.Body = E, x.Content = S, x.Icon = e => {
  let {
    ref: t,
    icon: n,
    label: i,
    onClick: s,
    isActive: o,
    tooltipPosition: a = "top",
    size: c = 20,
    isTutorial: p = false
  } = e;
  return (0, r.jsx)(d.u, {
    __unsupportedReactNodeAsText: p ? (0, r.jsx)("div", {
      className: f.tutorialTip,
      children: i
    }) : i,
    "aria-label": i,
    position: a,
    forceOpen: p,
    children: (0, r.jsx)(u.zx, {
      buttonRef: t,
      look: u.zx.Looks.BLANK,
      size: u.zx.Sizes.NONE,
      onClick: s,
      className: l()(f.icon, {
        [f.toggledIconOn]: o
      }),
      innerClassName: g.flexCenter,
      "aria-label": i,
      children: (0, r.jsx)(n, {
        color: "currentColor",
        size: "custom",
        width: c,
        height: c,
        role: "img"
      })
    })
  })
}, x.Bar = v;
let Z = x