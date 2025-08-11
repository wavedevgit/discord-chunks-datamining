/** Chunk was on web.js **/
/** chunk id: 469153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk719142 = require("./719142.js"),
  Chunk986449 = require("./986449.js");
let d = () => <div className={Chunk986449.toast}>{<Chunk481060.$jN type={Chunk481060.RAz.SPINNING_CIRCLE_SIMPLE} className={Chunk719142.loadingSpinner} />}{<Chunk481060.Text color={"header-primary"} variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t["5z/hlJ"])}</Chunk481060.Text>}</div>,
  f = e => {
    let {
      shown: t,
      sent: n,
      className: c
    } = e, u = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), f = (0, a.Yzy)(t, {
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
    return <r.Fragment>{f((e, t) => t && (0, r.jsx)(i.animated.div, {
        className: c,
        style: e,
        children: n ? (0, r.jsx)(a.FNi, {
          message: l.intl.string(l.t.fjcCk5),
          type: a.ToastType.SUCCESS,
          id: "success_message_toast"
        }) : (0, r.jsx)(a.FNi, {
          message: "",
          type: a.ToastType.CUSTOM,
          id: "custom_loading_message_toast",
          options: {
            component: (0, r.jsx)(d, {})
          }
        })
      }))}</r.Fragment>
  }