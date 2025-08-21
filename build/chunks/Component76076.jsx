/** Chunk was on 98360 **/
/** chunk id: 76076, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361623 = require("./361623.js"),
  Chunk583140 = require("./583140.js");
let x = {
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
  g = e => {
    let {
      message: n,
      icon: t,
      type: o
    } = e;
    return (0, r.jsxs)("div", {
      className: i()(b.toast, p.toast),
      "data-type": o,
      children: [(0, r.jsx)("div", {
        className: p.toastIcon,
        children: t
      }), (0, r.jsx)(s.Text, {
        color: "header-primary",
        variant: "text-sm/semibold",
        children: n
      })]
    })
  },
  h = e => {
    let {
      className: n,
      onAutoHide: t
    } = e, l = (0, u.be)(), f = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), [m, b] = o.useState(false), [h, j] = o.useState(null);
    o.useEffect(() => {
      null !== l ? (b(true), j(x[l]), s.uvj.announce(x[l].message)) : b(false)
    }, [l]);
    let v = (0, s.Yzy)(m, {
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
      if (m) {
        let e = setTimeout(() => {
          null == t || t()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [m, t]), (0, r.jsx)(r.Fragment, {
      children: v((e, t) => t && null !== h && (0, r.jsx)(c.animated.div, {
        className: i()(n, p.toastContainer),
        style: e,
        children: (0, r.jsx)(g, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({}, h))
      }))
    })
  }