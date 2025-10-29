/** Chunk was on 63141 **/
/** chunk id: 518084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => Z,
  wB: () => O
}), require("./415506.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  O = 1,
  _ = Chunk647438.createContext({
    type: y,
    opacity: O
  }),
  v = Chunk647438.createContext(true),
  b = e => {
    var {
      children: t,
      className: n
    } = e, i = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          o = Object.keys(e);
        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["children", "className"]);
    return (0, r.jsx)(_.Consumer, {
      children: e => {
        let {
          type: o
        } = e;
        return (0, r.jsx)(v.Consumer, {
          children: e => {
            var l, a;
            return (0, r.jsx)("div", (l = function(e) {
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
              className: s()(f.bar, f[c()(o)], n),
              style: e
            }, i), a = a = {
              children: t
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(a)).forEach(function(e) {
              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
            }), l))
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
    return (0, Chunk951288.jsx)(v.Consumer, {
      children: i => (0, r.jsx)(_.Consumer, {
        children: o => {
          let l = s()(f.body, f[c()(o.type)], n);
          return e ? (0, r.jsx)("div", {
            className: l,
            style: i,
            children: t
          }) : (0, r.jsx)(h.Ttm, {
            fade: true,
            className: l,
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
let S = e => {
    let {
      type: t = y,
      width: n,
      height: i,
      children: o,
      className: l,
      opacity: a = O,
      onClick: d
    } = e;
    return (0, r.jsx)(_.Provider, {
      value: {
        type: t,
        opacity: a
      },
      children: (0, r.jsx)("div", {
        className: s()(f.widget, f[c()(t)], l),
        style: {
          width: n,
          height: i
        },
        onClick: d,
        children: o
      })
    })
  },
  x = e => {
    let {
      children: t,
      className: n,
      dynamicSize: i = false
    } = e;
    return (0, r.jsx)(v.Consumer, {
      children: e => (0, r.jsx)("div", {
        className: s()(f.content, {
          [f.staticSize]: !i
        }, n),
        style: e,
        children: t
      })
    })
  };
S.Background = e => {
  let {
    children: t,
    opacityOverride: n
  } = e;
  if (null == t) return null;
  let i = [b, E, x];
  return (0, r.jsx)(_.Consumer, {
    children: e => {
      let {
        opacity: l
      } = e, s = {
        backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : l), ")")
      };
      if ("string" == typeof t.type) return o.cloneElement(t, {
        style: s
      });
      {
        if (i.includes(t.type)) return (0, r.jsx)(v.Provider, {
          value: s,
          children: t
        });
        let e = t.type.displayName;
        throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
      }
    }
  })
}, S.Body = E, S.Content = x, S.Icon = e => {
  let {
    ref: t,
    icon: n,
    label: i,
    onClick: o,
    isActive: l,
    tooltipPosition: a = "top",
    size: c = 20,
    isTutorial: h = false
  } = e;
  return (0, r.jsx)(d.u, {
    __unsupportedReactNodeAsText: h ? (0, r.jsx)("div", {
      className: f.tutorialTip,
      children: i
    }) : i,
    "aria-label": i,
    position: a,
    forceOpen: h,
    children: (0, r.jsx)(u.zx, {
      buttonRef: t,
      look: u.zx.Looks.BLANK,
      size: u.zx.Sizes.NONE,
      onClick: o,
      className: s()(f.icon, {
        [f.toggledIconOn]: l
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
}, S.Bar = b;
let Z = S