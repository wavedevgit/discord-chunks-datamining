/** Chunk was on 93979 **/
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
  Chunk361623 = require("./361623.js"),
  Chunk583140 = require("./583140.js");
let h = {
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
  b = e => {
    let {
      message: n,
      icon: t,
      type: o
    } = e;
    return (0, l.jsxs)("div", {
      className: i()(x.toast, p.toast),
      "data-type": o,
      children: [(0, l.jsx)("div", {
        className: p.toastIcon,
        children: t
      }), (0, l.jsx)(a.Text, {
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
    } = e, r = (0, u.be)(), m = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), [f, x] = o.useState(false), [j, v] = o.useState(null);
    o.useEffect(() => {
      null !== r ? (x(true), v(h[r]), a.uvj.announce(h[r].message)) : x(false)
    }, [r]);
    let g = (0, a.Yzy)(f, {
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
    return o.useEffect(() => {
      if (f) {
        let e = setTimeout(() => {
          null == t || t()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [f, t]), (0, l.jsx)(l.Fragment, {
      children: g((e, t) => t && null !== j && (0, l.jsx)(c.animated.div, {
        className: i()(n, p.toastContainer),
        style: e,
        children: (0, l.jsx)(b, function(e) {
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