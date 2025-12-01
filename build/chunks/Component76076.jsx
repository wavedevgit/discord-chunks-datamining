/** Chunk was on 93979 **/
/** chunk id: 76076, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361623 = require("./361623.js"),
  Chunk583140 = require("./583140.js");
let h = {
    [Chunk228168.qb.WIDGET_ADDED]: {
      message: Chunk388032.intl.string(Chunk388032.t.fFP1Uy),
      icon: (0, Chunk54381.jsx)(Chunk481060.dz2, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_added"
    },
    [Chunk228168.qb.WIDGET_REMOVED]: {
      message: Chunk388032.intl.string(Chunk388032.t.zzsK7h),
      icon: (0, Chunk54381.jsx)(Chunk481060.dz2, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_removed"
    },
    [Chunk228168.qb.WIDGET_SAVE_FAILURE]: {
      message: Chunk388032.intl.string(Chunk388032.t["84MExs"]),
      icon: (0, Chunk54381.jsx)(Chunk481060.Uz9, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_DANGER.css
      }),
      toast_id: "user_profile_widget_save_failure",
      type: Chunk481060.ToastType.FAILURE
    },
    [Chunk228168.qb.SOMETHING_WENT_WRONG]: {
      message: Chunk388032.intl.string(Chunk388032.t.F8FvUy),
      icon: (0, Chunk54381.jsx)(Chunk481060.Uz9, {
        size: "sm",
        color: Chunk481060.TVs.colors.STATUS_DANGER.css
      }),
      toast_id: "user_profile_something_went_wrong",
      type: Chunk481060.ToastType.FAILURE
    }
  },
  v = e => {
    let {
      message: n,
      icon: t,
      type: i
    } = e;
    return (0, l.jsxs)("div", {
      className: r()(x.toast, f.toast),
      "data-type": i,
      children: [(0, l.jsx)("div", {
        className: f.toastIcon,
        children: t
      }), (0, l.jsx)(c.Text, {
        color: "header-primary",
        variant: "text-sm/semibold",
        children: n
      })]
    })
  },
  j = e => {
    let {
      className: n,
      onAutoHide: t
    } = e, o = (0, u.be)(), m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), [p, x] = i.useState(false), [j, g] = i.useState(null);
    i.useEffect(() => {
      null !== o ? (x(true), g(h[o]), c.uvj.announce(h[o].message)) : x(false)
    }, [o]);
    let b = (0, c.Yzy)(p, {
      from: {
        transform: m ? "translateY(0)" : "translateY(-12px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1
      },
      leave: {
        transform: m ? "translateY(0)" : "translateY(-12px)",
        opacity: 0
      },
      config: {
        mass: 1,
        tension: 200,
        friction: 18,
        clamp: true
      }
    }, "animate-always");
    return i.useEffect(() => {
      if (p) {
        let e = setTimeout(() => {
          null == t || t()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [p, t]), (0, l.jsx)(l.Fragment, {
      children: b((e, t) => t && null !== j && (0, l.jsx)(s.animated.div, {
        className: r()(n, f.toastContainer),
        style: e,
        children: (0, l.jsx)(v, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = l
            })
          }
          return e
        }({}, j))
      }))
    })
  }