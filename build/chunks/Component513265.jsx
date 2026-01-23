/** Chunk was on 64228 **/
/** chunk id: 513265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk384377 = require("./384377.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk845913 = require("./845913.js"),
  Chunk910200 = require("./910200.js");
let x = {
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
      message: t,
      icon: n,
      type: i
    } = e;
    return (0, l.jsxs)("div", {
      className: s()(A.oR, f.oR),
      "data-type": i,
      children: [(0, l.jsx)("div", {
        className: f.RC,
        children: n
      }), (0, l.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  h = e => {
    let {
      className: t,
      onAutoHide: n
    } = e, r = (0, u.fu)(), p = (0, a.bG)([d.A], () => d.A.useReducedMotion), [m, A] = i.useState(false), [h, g] = i.useState(null);
    i.useEffect(() => {
      null !== r ? (A(true), g(x[r]), c.ORC.announce(x[r].message)) : A(false)
    }, [r]);
    let v = (0, c.pnh)(m, {
      from: {
        transform: p ? "translateY(0)" : "translateY(-12px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1
      },
      leave: {
        transform: p ? "translateY(0)" : "translateY(-12px)",
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
      if (m) {
        let e = setTimeout(() => {
          null == n || n()
        }, 2e3);
        return () => clearTimeout(e)
      }
    }, [m, n]), (0, l.jsx)(l.Fragment, {
      children: v((e, n) => n && null !== h && (0, l.jsx)(o.animated.div, {
        className: s()(t, f.Jt),
        style: e,
        children: (0, l.jsx)(j, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, h))
      }))
    })
  }