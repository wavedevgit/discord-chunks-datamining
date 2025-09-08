/** Chunk was on 1267 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk44258 = require("./44258.js");

function y(e) {
  var t;
  let {
    tags: r,
    isCurrentUser: l,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: y = false
  } = e, h = null != (t = null == r ? true : r.filter(e => null != (0, b.zK)(e))) ? t : [], w = h.length > 0, P = a.qH, E = l && !y && (0, f.M8)(c) && h.length < P, {
    trackUserProfileAction: S
  } = (0, d.KZ)(), I = (0, i.useRef)(new Map), D = (0, i.useRef)(null), T = (0, i.useRef)(null), [N, k] = (0, i.useState)(0), [_, Z] = (0, i.useState)(false), A = x(D, T, h, I, k);
  if ((0, i.useEffect)(() => (A(), window.addEventListener("resize", A), () => {
      window.removeEventListener("resize", A)
    }), [A, null == h ? true : h.join("")]), !w && !E) return null;
  let R = _ ? h : h.slice(0, h.length - N);
  return (0, n.jsxs)("div", {
    className: o()(O.tagListContainer, u),
    children: [w && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("ul", {
        className: O.tagList,
        "aria-label": p.intl.string(p.t.EfjTi4),
        children: R.map(e => (0, n.jsx)(j, {
          tag: e,
          isCurrentUser: l,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && I.current.set(e, t)
          },
          disableInteraction: y
        }, e))
      }), N > 0 && (_ ? (0, n.jsx)(v, {
        onClick: () => {
          Z(false), S({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, n.jsx)(m, {
        numHidden: N,
        onClick: () => {
          Z(true), S({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: D,
        disableInteraction: y
      }))]
    }), E && (0, n.jsx)(g.Z, {
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
      disableInteraction: o,
      ref: a
    } = e, {
      trackUserProfileEditAction: c
    } = (0, d.KZ)(), u = (0, b.zK)(t);
    if (null == u) return null;
    let {
      getText: g,
      icon: y
    } = u, j = () => {
      (0, f.RZ)(l, i, t), c({
        action: "TAG_REMOVED",
        widgetEdited: l,
        gameId: i
      })
    };
    return (0, n.jsxs)("li", {
      className: O.tag,
      ref: a,
      children: [(0, n.jsx)(y, {
        size: "xxs"
      }), (0, n.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: g()
      }), r && !o && (0, n.jsx)(s.ua7, {
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
            onClick: j,
            className: O.removeButton,
            "aria-label": p.intl.formatToPlainString(p.t.GCn1nZ, {
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
  m = e => {
    let {
      numHidden: t,
      onClick: r,
      disableInteraction: i,
      ref: l
    } = e;
    return i ? (0, n.jsx)("div", {
      className: O.expandButton,
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
        className: O.expandButton,
        innerRef: l,
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
        className: O.collapseButton,
        "aria-label": p.intl.string(p.t.z9VPra),
        children: (0, n.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: O.caret
        })
      })
    })
  },
  x = (e, t, r, n, l) => (0, i.useCallback)(() => {
    var i, o, a, c;
    if (null == r) return void l(0);
    let s = null != (a = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? a : 0,
      u = null != (c = null == (o = t.current) ? true : o.getBoundingClientRect().width) ? c : 0,
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
    l(r.length - f)
  }, [e, t, null == r ? true : r.join(""), n, l])