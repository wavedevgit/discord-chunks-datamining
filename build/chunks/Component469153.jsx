/** Chunk was on web.js **/
/** chunk id: 469153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk358458 = require("./358458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk630676 = require("./630676.js"),
  Chunk583140 = require("./583140.js");
let d = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk583140.toast,
    children: [(0, Chunk951288.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE_SIMPLE,
      className: Chunk630676.loadingSpinner
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      color: "header-primary",
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