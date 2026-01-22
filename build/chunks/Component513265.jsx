/** Chunk was on 64228 **/
/** chunk id: 513265, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk845913 = require("./845913.js"),
  Chunk910200 = require("./910200.js");
let A = {
    [Chunk518477.jM.WIDGET_ADDED]: {
      message: Chunk985018.intl.string(Chunk985018.t.fFP1Uy),
      icon: (0, Chunk627968.jsx)(Chunk397927.A9s, {
        size: "sm",
        color: Chunk397927.LU0.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_added"
    },
    [Chunk518477.jM.WIDGET_REMOVED]: {
      message: Chunk985018.intl.string(Chunk985018.t.zzsK7h),
      icon: (0, Chunk627968.jsx)(Chunk397927.A9s, {
        size: "sm",
        color: Chunk397927.LU0.colors.STATUS_POSITIVE.css
      }),
      toast_id: "user_profile_widget_removed"
    },
    [Chunk518477.jM.WIDGET_SAVE_FAILURE]: {
      message: Chunk985018.intl.string(Chunk985018.t["84MExs"]),
      icon: (0, Chunk627968.jsx)(Chunk397927.d$L, {
        size: "sm",
        color: Chunk397927.LU0.colors.ICON_FEEDBACK_CRITICAL
      }),
      toast_id: "user_profile_widget_save_failure",
      type: Chunk397927.ToastType.FAILURE
    },
    [Chunk518477.jM.SOMETHING_WENT_WRONG]: {
      message: Chunk985018.intl.string(Chunk985018.t.F8FvUy),
      icon: (0, Chunk627968.jsx)(Chunk397927.d$L, {
        size: "sm",
        color: Chunk397927.LU0.colors.ICON_FEEDBACK_CRITICAL
      }),
      toast_id: "user_profile_something_went_wrong",
      type: Chunk397927.ToastType.FAILURE
    }
  },
  j = e => {
    let {
      message: l,
      icon: t,
      type: i
    } = e;
    return (0, n.jsxs)("div", {
      className: s()(x.oR, m.oR),
      "data-type": i,
      children: [(0, n.jsx)("div", {
        className: m.RC,
        children: t
      }), (0, n.jsx)(d.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: l
      })]
    })
  },
  h = e => {
    let {
      className: l,
      onAutoHide: t
    } = e, r = (0, u.fu)(), f = (0, o.bG)([c.A], () => c.A.useReducedMotion), [p, x] = i.useState(false), [h, g] = i.useState(null);
    i.useEffect(() => {
      null !== r ? (x(true), g(A[r]), d.ORC.announce(A[r].message)) : x(false)
    }, [r]);
    let v = (0, d.pnh)(p, {
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
    return i.useEffect(() => {
      if (p) {
        let e = setTimeout(() => {
          null == t || t()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [p, t]), (0, n.jsx)(n.Fragment, {
      children: v((e, t) => t && null !== h && (0, n.jsx)(a.animated.div, {
        className: s()(l, m.Jt),
        style: e,
        children: (0, n.jsx)(j, function(e) {
          for (var l = 1; l < arguments.length; l++) {
            var t = null != arguments[l] ? arguments[l] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(l) {
              var n;
              n = t[l], l in e ? Object.defineProperty(e, l, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[l] = n
            })
          }
          return e
        }({}, h))
      }))
    })
  }