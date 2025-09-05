/** Chunk was on 34712 **/
/** chunk id: 76076, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214906 = require("./214906.js"),
  Chunk74866 = require("./74866.js");
let b = {
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
      message: n,
      icon: t,
      type: l
    } = e;
    return (0, o.jsxs)("div", {
      className: i()(x.toast, m.toast),
      "data-type": l,
      children: [(0, o.jsx)("div", {
        className: m.toastIcon,
        children: t
      }), (0, o.jsx)(s.Text, {
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
    } = e, r = (0, u.be)(), f = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), [p, x] = l.useState(false), [j, g] = l.useState(null);
    l.useEffect(() => {
      null !== r ? (x(true), g(b[r]), s.uvj.announce(b[r].message)) : x(false)
    }, [r]);
    let v = (0, s.Yzy)(p, {
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
    return l.useEffect(() => {
      if (p) {
        let e = setTimeout(() => {
          null == t || t()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [p, t]), (0, o.jsx)(o.Fragment, {
      children: v((e, t) => t && null !== j && (0, o.jsx)(c.animated.div, {
        className: i()(n, m.toastContainer),
        style: e,
        children: (0, o.jsx)(h, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.forEach(function(n) {
              var o;
              o = t[n], n in e ? Object.defineProperty(e, n, {
                value: o,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = o
            })
          }
          return e
        }({}, j))
      }))
    })
  }