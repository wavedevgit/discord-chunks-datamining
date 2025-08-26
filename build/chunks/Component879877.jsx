/** Chunk was on 21585 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk379405 = require("./379405.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk221292 = require("./221292.js"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function p(e) {
  var t;
  let {
    tags: r,
    isCurrentUser: l,
    widgetType: o,
    applicationId: s,
    disableInteraction: p = false
  } = e, v = null != (t = null == r ? true : r.filter(e => null != (0, f.zK)(e))) ? t : [], x = v.length > 0, h = Object.values(i._).length, _ = l && !p && (0, u.M8)(o) && v.length < h, {
    trackUserProfileAction: P
  } = (0, c.KZ)(), w = (0, a.useRef)(new Map), S = (0, a.useRef)(null), E = (0, a.useRef)(null), [I, T] = (0, a.useState)(0), [N, k] = (0, a.useState)(false), C = y(S, E, v, w, T);
  if ((0, a.useEffect)(() => (C(), window.addEventListener("resize", C), () => {
      window.removeEventListener("resize", C)
    }), [C, null == v ? true : v.join("")]), !x && !_) return null;
  let A = N ? v : v.slice(0, v.length - I);
  return (0, n.jsxs)("div", {
    className: b.tagListContainer,
    children: [x && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("ul", {
        className: b.tagList,
        "aria-label": g.intl.string(g.t.EfjTi4),
        children: A.map(e => (0, n.jsx)(m, {
          tag: e,
          isCurrentUser: l,
          applicationId: s,
          widgetType: o,
          ref: t => {
            null != t && w.current.set(e, t)
          },
          disableInteraction: p
        }, e))
      }), I > 0 && (N ? (0, n.jsx)(j, {
        onClick: () => {
          k(false), P({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, n.jsx)(O, {
        numHidden: I,
        onClick: () => {
          k(true), P({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: S,
        disableInteraction: p
      }))]
    }), _ && (0, n.jsx)(d.Z, {
      tags: r,
      widgetType: o,
      applicationId: s,
      ref: E
    })]
  })
}
let m = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: a,
      widgetType: i,
      disableInteraction: o,
      ref: c
    } = e, d = (0, f.zK)(t);
    if (null == d) return null;
    let {
      getText: p,
      icon: m
    } = d, O = () => {
      (0, u.RZ)(i, a, t), (0, s.pQ)({
        action: "REMOVE_GAME_TAGS"
      })
    };
    return (0, n.jsxs)("li", {
      className: b.tag,
      ref: c,
      children: [(0, n.jsx)(m, {
        size: "xxs"
      }), (0, n.jsx)(l.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: p()
      }), r && !o && (0, n.jsx)(l.ua7, {
        text: g.intl.string(g.t.Otv9fH),
        children: e => {
          var t, r;
          return (0, n.jsx)(l.P3F, (t = function(e) {
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
            onClick: O,
            className: b.removeButton,
            "aria-label": g.intl.formatToPlainString(g.t.GCn1nZ, {
              tag: p()
            }),
            children: (0, n.jsx)(l.Dio, {
              size: "xxs",
              color: "currentColor"
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
      disableInteraction: a,
      ref: i
    } = e;
    return a ? (0, n.jsx)("div", {
      className: b.expandButton,
      children: (0, n.jsx)(l.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, n.jsx)(l.DY3, {
      className: b.buttonContainer,
      text: g.intl.string(g.t.mriLXF),
      children: (0, n.jsx)(l.P3F, {
        onClick: r,
        className: b.expandButton,
        innerRef: i,
        "aria-label": g.intl.string(g.t.mriLXF),
        children: (0, n.jsx)(l.Text, {
          variant: "text-xxs/medium",
          color: "none",
          children: "+".concat(t)
        })
      })
    })
  },
  j = e => {
    let {
      onClick: t
    } = e;
    return (0, n.jsx)(l.DY3, {
      className: b.buttonContainer,
      text: g.intl.string(g.t.z9VPra),
      children: (0, n.jsx)(l.P3F, {
        onClick: t,
        className: b.collapseButton,
        "aria-label": g.intl.string(g.t.z9VPra),
        children: (0, n.jsx)(o.Z, {
          direction: o.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: b.caret
        })
      })
    })
  },
  y = (e, t, r, n, i) => (0, a.useCallback)(() => {
    var a, l, o, c;
    if (null == r) return void i(0);
    let s = null != (o = null == (a = e.current) ? true : a.getBoundingClientRect().width) ? o : 0,
      u = null != (c = null == (l = t.current) ? true : l.getBoundingClientRect().width) ? c : 0,
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