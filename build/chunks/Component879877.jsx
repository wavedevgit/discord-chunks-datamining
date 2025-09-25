/** Chunk was on 53714 **/
/** chunk id: 879877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk978369 = require("./978369.jsx"),
  Chunk286957 = require("./286957.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200344 = require("./200344.js");

function O(e) {
  var t;
  let {
    tags: n,
    isCurrentUser: o,
    widgetType: c,
    applicationId: s,
    className: u,
    disableInteraction: O = false
  } = e, x = null != (t = null == n ? true : n.filter(e => null != (0, p.zK)(e))) ? t : [], _ = x.length > 0, P = l.qH, w = o && !O && (0, f.M8)(c) && x.length < P, {
    trackUserProfileAction: I
  } = (0, d.KZ)(), E = (0, i.useRef)(new Map), S = (0, i.useRef)(null), T = (0, i.useRef)(null), [D, N] = (0, i.useState)(0), [A, k] = (0, i.useState)(false), C = h(S, T, x, E, N);
  if ((0, i.useEffect)(() => (C(), window.addEventListener("resize", C), () => {
      window.removeEventListener("resize", C)
    }), [C, null == x ? true : x.join("")]), !_ && !w) return null;
  let R = A ? x : x.slice(0, x.length - D);
  return (0, r.jsxs)("div", {
    className: a()(m.tagListContainer, u),
    children: [_ && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("ul", {
        className: m.tagList,
        "aria-label": b.intl.string(b.t.EfjTi4),
        children: R.map(e => (0, r.jsx)(y, {
          tag: e,
          isCurrentUser: o,
          applicationId: s,
          widgetType: c,
          ref: t => {
            null != t && E.current.set(e, t)
          },
          disableInteraction: O
        }, e))
      }), D > 0 && (A ? (0, r.jsx)(v, {
        onClick: () => {
          k(false), I({
            action: "COLLAPSE_GAME_TAGS"
          })
        }
      }) : (0, r.jsx)(j, {
        numHidden: D,
        onClick: () => {
          k(true), I({
            action: "EXPAND_GAME_TAGS"
          })
        },
        ref: S,
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
let y = e => {
    let {
      tag: t,
      isCurrentUser: n,
      applicationId: i,
      widgetType: o,
      disableInteraction: a,
      ref: l
    } = e, {
      trackUserProfileEditAction: c
    } = (0, d.KZ)(), u = (0, p.zK)(t);
    if (null == u) return null;
    let {
      getText: g,
      icon: O
    } = u, y = () => {
      (0, f.RZ)(o, i, t), c({
        action: "TAG_REMOVED",
        widgetEdited: o,
        gameId: i
      })
    };
    return (0, r.jsxs)("li", {
      className: m.tag,
      ref: l,
      children: [(0, r.jsx)(O, {
        size: "xxs"
      }), (0, r.jsx)(s.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: g()
      }), n && !a && (0, r.jsx)(s.ua7, {
        text: b.intl.string(b.t.Otv9fH),
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
            onClick: y,
            className: m.removeButton,
            "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, {
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
  j = e => {
    let {
      numHidden: t,
      onClick: n,
      disableInteraction: i,
      ref: o
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
      text: b.intl.string(b.t.mriLXF),
      children: (0, r.jsx)(s.P3F, {
        onClick: n,
        className: m.expandButton,
        innerRef: o,
        "aria-label": b.intl.string(b.t.mriLXF),
        children: (0, r.jsx)(s.Text, {
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
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: b.intl.string(b.t.z9VPra),
      children: (0, r.jsx)(s.P3F, {
        onClick: t,
        className: m.collapseButton,
        "aria-label": b.intl.string(b.t.z9VPra),
        children: (0, r.jsx)(u.Z, {
          direction: u.Z.Directions.LEFT,
          width: 12,
          height: 12,
          className: m.caret
        })
      })
    })
  },
  h = (e, t, n, r, o) => (0, i.useCallback)(() => {
    var i, a, l, c;
    if (null == n) return void o(0);
    let s = null != (l = null == (i = e.current) ? true : i.getBoundingClientRect().width) ? l : 0,
      u = null != (c = null == (a = t.current) ? true : a.getBoundingClientRect().width) ? c : 0,
      d = u > 0 ? 8 : 4,
      f = 0,
      g = 0,
      p = r.current;
    for (let e = 0; e < n.length; e++) {
      let t = p.get(n[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296) break;
        f++
      }
    }
    g = 0;
    for (let e = f; e < n.length; e++) {
      let t = p.get(n[e]);
      if (null != t) {
        if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
        f++
      }
    }
    o(n.length - f)
  }, [e, t, null == n ? true : n.join(""), r, o])