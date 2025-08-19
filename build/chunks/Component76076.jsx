/** Chunk was on 99799 **/
/** chunk id: 76076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361623 = require("./361623.js"),
  Chunk583140 = require("./583140.js");
let g = {
    [Chunk228168.qb.WIDGET_ADDED]: {
      message: Chunk388032.intl.string(Chunk388032.t.fFP1U1),
      icon: (0, Chunk951288.jsx)(Chunk481060.dz2, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_added"
    },
    [Chunk228168.qb.WIDGET_REMOVED]: {
      message: Chunk388032.intl.string(Chunk388032.t.zzsK7u),
      icon: (0, Chunk951288.jsx)(Chunk481060.dz2, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_removed"
    },
    [Chunk228168.qb.WIDGET_SAVE_FAILURE]: {
      message: Chunk388032.intl.string(Chunk388032.t["84MExs"]),
      icon: (0, Chunk951288.jsx)(Chunk481060.Uz9, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_DANGER.css
      }),
      toast_id: "user_profile_widget_save_failure",
      type: Chunk481060.ToastType.FAILURE
    }
  },
  h = e => {
    let {
      message: t,
      icon: n,
      type: o
    } = e;
    return (0, r.jsxs)("div", {
      className: l()(b.toast, m.toast),
      "data-type": o,
      children: [(0, r.jsx)("div", {
        className: m.toastIcon,
        children: n
      }), (0, r.jsx)(s.Text, {
        color: "header-primary",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  x = e => {
    let {
      className: t,
      onAutoHide: n
    } = e, i = (0, u.be)(), f = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), [p, b] = o.useState(false), [x, _] = o.useState(null);
    o.useEffect(() => {
      null !== i ? (b(true), _(g[i]), s.uvj.announce(g[i].message)) : b(false)
    }, [i]);
    let j = (0, s.Yzy)(p, {
      from: {
        transform: f ? "translateY(0)" : "translateY(-12px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1
      },
      leave: {
        transform: f ? "translateY(0)" : "translateY(-12px)",
        opacity: 0
      },
      config: {
        mass: 1,
        tension: 200,
        friction: 18,
        clamp: true
      }
    }, "animate-always");
    return o.useEffect(() => {
      if (p) {
        let e = setTimeout(() => {
          null == n || n()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [p, n]), (0, r.jsx)(r.Fragment, {
      children: j((e, n) => n && null !== x && (0, r.jsx)(a.animated.div, {
        className: l()(t, m.toastContainer),
        style: e,
        children: (0, r.jsx)(h, function(e) {
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
        }({}, x))
      }))
    })
  }