/** Chunk was on 27069 **/
/** chunk id: 879877, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let {
    tags: t,
    isCurrentUser: r,
    widgetType: i,
    applicationId: a
  } = e, c = null == t ? true : t.filter(e => null != (0, d.zK)(e)), s = (0, l.useRef)(new Map), p = (0, l.useRef)(null), [j, v] = (0, l.useState)(0), [x, h] = (0, l.useState)(false), {
    trackUserProfileAction: E
  } = (0, o.KZ)(), P = y(p, c, s, v);
  if ((0, l.useEffect)(() => (P(), window.addEventListener("resize", P), () => {
      window.removeEventListener("resize", P)
    }), [P, null == c ? true : c.join("")]), null == c || 0 === c.length) return null;
  let w = x ? c : c.slice(0, c.length - j);
  return (0, n.jsxs)("div", {
    className: g.tagListContainer,
    children: [(0, n.jsx)("ul", {
      className: g.tagList,
      "aria-label": f.intl.string(f.t.EfjTi4),
      children: w.map(e => (0, n.jsx)(b, {
        tag: e,
        isCurrentUser: r,
        applicationId: a,
        widgetType: i,
        ref: t => {
          null != t && s.current.set(e, t)
        }
      }, e))
    }), j > 0 && (x ? (0, n.jsx)(m, {
      onClick: () => {
        h(false), E({
          action: "COLLAPSE_GAME_TAGS"
        })
      }
    }) : (0, n.jsx)(O, {
      numHidden: j,
      onClick: () => {
        h(true), E({
          action: "EXPAND_GAME_TAGS"
        })
      },
      ref: p
    })), r && (0, n.jsx)(u.Z, {
      tags: t,
      widgetType: i,
      applicationId: a
    })]
  })
}
let b = e => {
    let {
      tag: t,
      isCurrentUser: r,
      applicationId: l,
      widgetType: a,
      ref: o
    } = e, u = (0, d.zK)(t);
    if (null == u) return null;
    let {
      getText: p,
      icon: b
    } = u, O = () => {
      (0, s.RZ)(a, l, t), (0, c.pQ)({
        action: "REMOVE_GAME_TAGS"
      })
    };
    return (0, n.jsxs)("li", {
      className: g.tag,
      ref: o,
      children: [(0, n.jsx)(b, {
        size: "xxs"
      }), (0, n.jsx)(i.Text, {
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: p()
      }), r && (0, n.jsx)(i.ua7, {
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
            onClick: O,
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
      ref: l
    } = e;
    return (0, n.jsx)(i.DY3, {
      className: g.buttonContainer,
      text: f.intl.string(f.t.mriLXF),
      children: (0, n.jsx)(i.P3F, {
        onClick: r,
        className: g.expandButton,
        innerRef: l,
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
  y = (e, t, r, n) => (0, l.useCallback)(() => {
    var l, i;
    if (null == t) return void n(0);
    let a = null != (i = null == (l = e.current) ? true : l.getBoundingClientRect().width) ? i : 0,
      o = 0,
      c = 0,
      s = r.current;
    for (let e = 0; e < t.length; e++) {
      let r = s.get(t[e]);
      if (null != r) {
        if ((c += r.offsetWidth + 4) > 296) break;
        o++
      }
    }
    c = 0;
    for (let e = o; e < t.length; e++) {
      let r = s.get(t[e]);
      if (null != r) {
        if ((c += r.offsetWidth + 4) > 296 - a) break;
        o++
      }
    }
    n(t.length - o)
  }, [e, null == t ? true : t.join(""), r, n])