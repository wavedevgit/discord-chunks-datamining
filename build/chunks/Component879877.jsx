/** Chunk was on 83789 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    isCurrentUser: l,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: O = false
  } = e, h = null != (t = null == r ? true : r.filter(e => null != (0, p.zK)(e))) ? t : [], _ = h.length > 0, w = Object.values(o._).length, P = l && !O && (0, f.M8)(c) && h.length < w, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [N, k] = (0, i.useState)(0), [C, A] = (0, i.useState)(false), D = v(E, T, h, S, k);
  if ((0, i.useEffect)(() => (D(), window.addEventListener("resize", D), () => {
      window.removeEventListener("resize", D)
    }), [D, null == h ? true : h.join("")]), !_ && !P) return null;
  let Z = C ? h : h.slice(0, h.length - N);
  return (0, n.jsxs)("div", {
    className: a()(m.tagListContainer, u),
    children: [_ && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("ul", {
        className: m.tagList,
        "aria-label": b.intl.string(b.t.EfjTi4),
        children: Z.map(e => (0, n.jsx)(j, {
          tag: e,
          isCurrentUser: l,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: O
        }, e))
      }), N > 0 && (C ? (0, n.jsx)(x, {
        onClick: () => {
          A(false), I({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, n.jsx)(y, {
        numHidden: N,
        onClick: () => {
          A(true), I({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: E,
        disableInteraction: O
      }))]
    }), P && (0, n.jsx)(g.Z, {
      tags: r,
      widgetType: c,
      applicationId: s,
      ref: T
    })]
  })
}
let j = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: i,
      widgetType: l,
      disableInteraction: a,
      ref: o
    } = e, {
      trackUserProfileAction: c
    } = (0, d.KZ)(), u = (0, p.zK)(t);
    if (null == u) return null;
    let {
      getText: g,
      icon: O
    } = u, j = () => {
      (0, f.RZ)(l, i, t), c({
        action: "EDIT_ACTION"
      })
    };
    return (0, n.jsxs)("li", {
      className: m.tag,
      ref: o,
      children: [(0, n.jsx)(O, {
        size: "xxs"
      }), (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: g()
      }), r && !a && (0, n.jsx)(s.ua7, {
        text: b.intl.string(b.t.Otv9fH),
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
            onClick: j,
            className: m.removeButton,
            "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, {
              tag: g()
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
  y = e => {
    let {
      numHidden: t,
      onClick: r,
      disableInteraction: i,
      ref: l
    } = e;
    return i ? (0, n.jsx)("div", {
      className: m.expandButton,
      children: (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, n.jsx)(c.u, {
      asContainer: true,
      text: b.intl.string(b.t.mriLXF),
      children: (0, n.jsx)(s.P3F, {
        onClick: r,
        className: m.expandButton,
        innerRef: l,
        "aria-label": b.intl.string(b.t.mriLXF),
        children: (0, n.jsx)(s.Text, {
          variant: "text-xxs/medium",
          color: "none",
          children: "+".concat(t)
        })
      })
    })
  },
  x = e => {
    let {
      onClick: t
    } = e;
    return (0, n.jsx)(c.u, {
      asContainer: true,
      text: b.intl.string(b.t.z9VPra),
      children: (0, n.jsx)(s.P3F, {
        onClick: t,
        className: m.collapseButton,
        "aria-label": b.intl.string(b.t.z9VPra),
        children: (0, n.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: m.caret
        })
      })
    })
  },
  v = (e, t, r, n, l) => (0, i.useCallback)(() => {
    var i, a, o, c;
    if (null == r) return void l(0);
    let s = null != (o = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? o : 0,
      u = null != (c = null == (a = t.current) ? true : a.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      g = 0,
      p = n.current;
    for (let e = 0; e < r.length; e++) {
      let t = p.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    g = 0;
    for (let e = f; e < r.length; e++) {
      let t = p.get(r[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    l(r.length - f)
  }, [e, t, null == r ? true : r.join(""), n, l])