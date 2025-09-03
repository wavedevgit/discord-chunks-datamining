/** Chunk was on 30397 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk379405 = require("./379405.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function O(e) {
  var t;
  let {
    tags: r,
    isCurrentUser: o,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: O = false
  } = e, h = null != (t = null == r ? true : r.filter(e => null != (0, g.zK)(e))) ? t : [], w = h.length > 0, P = Object.values(l._).length, _ = o && !O && (0, f.M8)(c) && h.length < P, {
    trackUserProfileAction: S
  } = (0, d.KZ)(), I = (0, a.useRef)(new Map), k = (0, a.useRef)(null), C = (0, a.useRef)(null), [E, N] = (0, a.useState)(0), [D, T] = (0, a.useState)(false), Z = x(k, C, h, I, N);
  if ((0, a.useEffect)(() => (Z(), window.addEventListener("resize", Z), () => {
      window.removeEventListener("resize", Z)
    }), [Z, null == h ? true : h.join("")]), !w && !_) return null;
  let R = D ? h : h.slice(0, h.length - E);
  return (0, n.jsxs)("div", {
    className: i()(m.tagListContainer, u),
    children: [w && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("ul", {
        className: m.tagList,
        "aria-label": p.intl.string(p.t.EfjTi4),
        children: R.map(e => (0, n.jsx)(y, {
          tag: e,
          isCurrentUser: o,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && I.current.set(e, t)
          },
          disableInteraction: O
        }, e))
      }), E > 0 && (D ? (0, n.jsx)(v, {
        onClick: () => {
          T(false), S({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, n.jsx)(j, {
        numHidden: E,
        onClick: () => {
          T(true), S({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: k,
        disableInteraction: O
      }))]
    }), _ && (0, n.jsx)(b.Z, {
      tags: r,
      widgetType: c,
      applicationId: s,
      ref: C
    })]
  })
}
let y = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: a,
      widgetType: o,
      disableInteraction: i,
      ref: l
    } = e, {
      trackUserProfileAction: c
    } = (0, d.KZ)(), u = (0, g.zK)(t);
    if (null == u) return null;
    let {
      getText: b,
      icon: O
    } = u, y = () => {
      (0, f.RZ)(o, a, t), c({
        action: "EDIT_ACTION"
      })
    };
    return (0, n.jsxs)("li", {
      className: m.tag,
      ref: l,
      children: [(0, n.jsx)(O, {
        size: "xxs"
      }), (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: b()
      }), r && !i && (0, n.jsx)(s.ua7, {
        text: p.intl.string(p.t.Otv9fH),
        children: e => {
          var t, r;
          return (0, n.jsx)(s.P3F, (t = function(e) {
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
            onClick: y,
            className: m.removeButton,
            "aria-label": p.intl.formatToPlainString(p.t.GCn1nZ, {
              tag: b()
            }),
            children: (0, n.jsx)(s.Dio, {
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
  j = e => {
    let {
      numHidden: t,
      onClick: r,
      disableInteraction: a,
      ref: o
    } = e;
    return a ? (0, n.jsx)("div", {
      className: m.expandButton,
      children: (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, n.jsx)(c.u, {
      asContainer: true,
      text: p.intl.string(p.t.mriLXF),
      children: (0, n.jsx)(s.P3F, {
        onClick: r,
        className: m.expandButton,
        innerRef: o,
        "aria-label": p.intl.string(p.t.mriLXF),
        children: (0, n.jsx)(s.Text, {
          variant: "text-xxs/medium",
          color: "none",
          children: "+".concat(t)
        })
      })
    })
  },
  v = e => {
    let {
      onClick: t
    } = e;
    return (0, n.jsx)(c.u, {
      asContainer: true,
      text: p.intl.string(p.t.z9VPra),
      children: (0, n.jsx)(s.P3F, {
        onClick: t,
        className: m.collapseButton,
        "aria-label": p.intl.string(p.t.z9VPra),
        children: (0, n.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: m.caret
        })
      })
    })
  },
  x = (e, t, r, n, o) => (0, a.useCallback)(() => {
    var a, i, l, c;
    if (null == r) return void o(0);
    let s = null != (l = null == (a = e.current) ? true : a.getBoundingClientRect().width) ? l : 0,
      u = null != (c = null == (i = t.current) ? true : i.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      b = 0,
      g = n.current;
    for (let e = 0; e < r.length; e++) {
      let t = g.get(r[e]);
      if (null != t) {
        if ((b += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    b = 0;
    for (let e = f; e < r.length; e++) {
      let t = g.get(r[e]);
      if (null != t) {
        if ((b += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    o(r.length - f)
  }, [e, t, null == r ? true : r.join(""), n, o])