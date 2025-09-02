/** Chunk was on 8188 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
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
    tags: n,
    isCurrentUser: l,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: O = false
  } = e, h = null != (t = null == n ? true : n.filter(e => null != (0, b.zK)(e))) ? t : [], _ = h.length > 0, P = Object.values(o._).length, w = l && !O && (0, f.M8)(c) && h.length < P, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), S = (0, i.useRef)(new Map), E = (0, i.useRef)(null), T = (0, i.useRef)(null), [N, C] = (0, i.useState)(0), [A, k] = (0, i.useState)(false), Z = v(E, T, h, S, C);
  if ((0, i.useEffect)(() => (Z(), window.addEventListener("resize", Z), () => {
      window.removeEventListener("resize", Z)
    }), [Z, null == h ? true : h.join("")]), !_ && !w) return null;
  let D = A ? h : h.slice(0, h.length - N);
  return (0, r.jsxs)("div", {
    className: a()(m.tagListContainer, u),
    children: [_ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: m.tagList,
        "aria-label": p.intl.string(p.t.EfjTi4),
        children: D.map(e => (0, r.jsx)(j, {
          tag: e,
          isCurrentUser: l,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && S.current.set(e, t)
          },
          disableInteraction: O
        }, e))
      }), N > 0 && (A ? (0, r.jsx)(x, {
        onClick: () => {
          k(false), I({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, r.jsx)(y, {
        numHidden: N,
        onClick: () => {
          k(true), I({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: E,
        disableInteraction: O
      }))]
    }), w && (0, r.jsx)(g.Z, {
      tags: n,
      widgetType: c,
      applicationId: s,
      ref: T
    })]
  })
}
let j = e => {
    let {
      tag: t,
      isCurrentUser: n,
      applicationId: i,
      widgetType: l,
      disableInteraction: a,
      ref: o
    } = e, {
      trackUserProfileAction: c
    } = (0, d.KZ)(), u = (0, b.zK)(t);
    if (null == u) return null;
    let {
      getText: g,
      icon: O
    } = u, j = () => {
      (0, f.RZ)(l, i, t), c({
        action: "EDIT_ACTION"
      })
    };
    return (0, r.jsxs)("li", {
      className: m.tag,
      ref: o,
      children: [(0, r.jsx)(O, {
        size: "xxs"
      }), (0, r.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: g()
      }), n && !a && (0, r.jsx)(s.ua7, {
        text: p.intl.string(p.t.Otv9fH),
        children: e => {
          var t, n;
          return (0, r.jsx)(s.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            onClick: j,
            className: m.removeButton,
            "aria-label": p.intl.formatToPlainString(p.t.GCn1nZ, {
              tag: g()
            }),
            children: (0, r.jsx)(s.Dio, {
              size: "xxs",
              color: "currentColor"
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }
      })]
    })
  },
  y = e => {
    let {
      numHidden: t,
      onClick: n,
      disableInteraction: i,
      ref: l
    } = e;
    return i ? (0, r.jsx)("div", {
      className: m.expandButton,
      children: (0, r.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "none",
        children: "+".concat(t)
      })
    }) : (0, r.jsx)(c.u, {
      asContainer: true,
      text: p.intl.string(p.t.mriLXF),
      children: (0, r.jsx)(s.P3F, {
        onClick: n,
        className: m.expandButton,
        innerRef: l,
        "aria-label": p.intl.string(p.t.mriLXF),
        children: (0, r.jsx)(s.Text, {
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
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: p.intl.string(p.t.z9VPra),
      children: (0, r.jsx)(s.P3F, {
        onClick: t,
        className: m.collapseButton,
        "aria-label": p.intl.string(p.t.z9VPra),
        children: (0, r.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: m.caret
        })
      })
    })
  },
  v = (e, t, n, r, l) => (0, i.useCallback)(() => {
    var i, a, o, c;
    if (null == n) return void l(0);
    let s = null != (o = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? o : 0,
      u = null != (c = null == (a = t.current) ? true : a.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      g = 0,
      b = r.current;
    for (let e = 0; e < n.length; e++) {
      let t = b.get(n[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    g = 0;
    for (let e = f; e < n.length; e++) {
      let t = b.get(n[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    l(n.length - f)
  }, [e, t, null == n ? true : n.join(""), r, l])