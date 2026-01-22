/** Chunk was on web.js **/
/** chunk id: 899682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk798516 = require("./798516.js"),
  Chunk910200 = require("./910200.js");
let d = () => (0, r.jsxs)("div", {
    className: u.oR,
    children: [(0, r.jsx)(s.y$y, {
      type: s.tVU.SPINNING_CIRCLE_SIMPLE,
      className: c.S
    }), (0, r.jsx)(s.Text, {
      color: "text-strong",
      variant: "text-md/normal",
      children: l.intl.string(l.t["5z/hlE"])
    })]
  }),
  f = e => {
    let {
      shown: t,
      sent: n,
      className: c
    } = e, u = (0, a.bG)([o.A], () => o.A.useReducedMotion), f = (0, s.pnh)(t, {
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
        children: n ? (0, r.jsx)(s.y8, {
          message: l.intl.string(l.t.fjcCk5),
          type: s.ToastType.SUCCESS,
          id: "success_message_toast"
        }) : (0, r.jsx)(s.y8, {
          message: "",
          type: s.ToastType.CUSTOM,
          id: "custom_loading_message_toast",
          options: {
            component: (0, r.jsx)(d, {})
          }
        })
      }))
    })
  }