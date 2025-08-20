/** Chunk was on 27069 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function b(e) {
  let {
    tags: t,
    isCurrentUser: r,
    widgetType: i,
    applicationId: a,
    disableInteraction: c = false
  } = e, b = null == t ? true : t.filter(e => null != (0, d.zK)(e)), y = (0, l.useRef)(new Map), v = (0, l.useRef)(null), x = (0, l.useRef)(null), [h, P] = (0, l.useState)(0), [E, w] = (0, l.useState)(false), {
    trackUserProfileAction: S
  } = (0, o.KZ)(), I = r && !c && (0, s.M8)(i), _ = j(v, x, b, y, P);
  if ((0, l.useEffect)(() => (_(), window.addEventListener("resize", _), () => {
      window.removeEventListener("resize", _)
    }), [_, null == b ? true : b.join("")]), null == b || 0 === b.length) return I ? (0, n.jsx)("div", {
    className: g.tagListContainer,
    children: (0, n.jsx)(u.Z, {
      tags: t,
      widgetType: i,
      applicationId: a,
      ref: x
    })
  }) : null;
  let T = E ? b : b.slice(0, b.length - h);
  return (0, n.jsxs)("div", {
    className: g.tagListContainer,
    children: [(0, n.jsx)("ul", {
      className: g.tagList,
      "aria-label": f.intl.string(f.t.EfjTi4),
      children: T.map(e => (0, n.jsx)(p, {
        tag: e,
        isCurrentUser: r,
        applicationId: a,
        widgetType: i,
        ref: t => {
          null != t && y.current.set(e, t)
        },
        disableInteraction: c
      }, e))
    }), h > 0 && (E ? (0, n.jsx)(m, {
      onClick: () => {
        w(false), S({
          action: "COLLAPSE_GAME_TAGS"
        })
      }
    }) : (0, n.jsx)(O, {
      numHidden: h,
      onClick: () => {
        w(true), S({
          action: "EXPAND_GAME_TAGS"
        })
      },
      ref: v,
      disableInteraction: c
    })), r && !c && (0, n.jsx)(u.Z, {
      tags: t,
      widgetType: i,
      applicationId: a,
      ref: x
    })]
  })
}
let p = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: l,
      widgetType: a,
      disableInteraction: o,
      ref: u
    } = e, b = (0, d.zK)(t);
    if (null == b) return null;
    let {
      getText: p,
      icon: O
    } = b, m = () => {
      (0, s.RZ)(a, l, t), (0, c.pQ)({
        action: "REMOVE_GAME_TAGS"
      })
    };
    return (0, n.jsxs)("li", {
      className: g.tag,
      ref: u,
      children: [(0, n.jsx)(O, {
        size: "xxs"
      }), (0, n.jsx)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: p()
      }), r && !o && (0, n.jsx)(i.ua7, {
        text: f.intl.string(f.t.Otv9fH),
        children: e => {
          var t, r;
          return (0, n.jsx)(i.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, e), r = r = {
            onClick: m,
            className: g.removeButton,
            "aria-label": f.intl.formatToPlainString(f.t.GCn1nZ, {
              tag: p()
            }),
            children: (0, n.jsx)(i.Dio, {
              size: "xxs"
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }), t))
        }
      })]
    })
  },
  O = e => {
    let {
      numHidden: t,
      onClick: r,
      disableInteraction: l,
      ref: a
    } = e;
    return l ? (0, n.jsx)("div", {
      className: g.expandButton,
      children: (0, n.jsx)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: "+".concat(t)
      })
    }) : (0, n.jsx)(i.DY3, {
      className: g.buttonContainer,
      text: f.intl.string(f.t.mriLXF),
      children: (0, n.jsx)(i.P3F, {
        onClick: r,
        className: g.expandButton,
        innerRef: a,
        "aria-label": f.intl.string(f.t.mriLXF),
        children: (0, n.jsx)(i.Text, {
          variant: "text-xxs/medium",
          color: "text-secondary",
          children: "+".concat(t)
        })
      })
    })
  },
  m = e => {
    let {
      onClick: t
    } = e;
    return (0, n.jsx)(i.DY3, {
      className: g.buttonContainer,
      text: f.intl.string(f.t.z9VPra),
      children: (0, n.jsx)(i.P3F, {
        onClick: t,
        className: g.collapseButton,
        "aria-label": f.intl.string(f.t.z9VPra),
        children: (0, n.jsx)(a.Z, {
          direction: a.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: g.caret
        })
      })
    })
  },
  j = (e, t, r, n, i) => (0, l.useCallback)(() => {
    var l, a, o, c;
    if (null == r) return void i(0);
    let s = null != (o = null == (l = e.current) ? true : l.getBoundingClientRect().width) ? o : 0,
      u = null != (c = null == (a = t.current) ? true : a.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      g = 0,
      b = n.current;
    for (let e = 0; e < r.length; e++) {
      let t = b.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    g = 0;
    for (let e = f; e < r.length; e++) {
      let t = b.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    i(r.length - f)
  }, [e, t, null == r ? true : r.join(""), n, i])