/** Chunk was on web.js **/
/** chunk id: 469153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk807794 = require("./807794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749057 = require("./749057.js"),
  Chunk141291 = require("./141291.js");
let d = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk141291.toast,
    children: [(0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE_SIMPLE,
      className: Chunk749057.loadingSpinner
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      color: "text-strong",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["5z/hlE"])
    })]
  }),
  f = e => {
    let {
      shown: t,
      sent: n,
      className: c
    } = e, u = (0, a.e7)([s.Z], () => s.Z.useReducedMotion), f = (0, o.Yzy)(t, {
      from: {
        transform: u ? "translateY(0)" : "translateY(16px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1
      },
      leave: {
        transform: u ? "translateY(0)" : "translateY(16px)",
        opacity: 0
      },
      config: {
        mass: 1,
        tension: 500,
        friction: 18,
        clamp: true
      },
      delay: 200
    }, "animate-always");
    return (0, r.jsx)(r.Fragment, {
      children: f((e, t) => t && (0, r.jsx)(i.animated.div, {
        className: c,
        style: e,
        children: n ? (0, r.jsx)(o.FNi, {
          message: l.intl.string(l.t.fjcCk5),
          type: o.ToastType.SUCCESS,
          id: "success_message_toast"
        }) : (0, r.jsx)(o.FNi, {
          message: "",
          type: o.ToastType.CUSTOM,
          id: "custom_loading_message_toast",
          options: {
            component: (0, r.jsx)(d, {})
          }
        })
      }))
    })
  }