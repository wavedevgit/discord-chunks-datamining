/** Chunk was on web.js **/
/** chunk id: 451834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk607070 = require("./607070.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk510659 = require("./510659.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882909 = require("./882909.js"),
  Chunk583140 = require("./583140.js");
let g = e => {
    let {
      message: t,
      userId: n,
      onClose: i
    } = e, {
      trackUserProfileAction: o
    } = (0, d.KZ)();
    return (0, r.jsxs)("div", {
      className: a()(h.toast, m.toastPadding),
      children: [(0, r.jsx)(l.dz2, {
        size: "sm",
        className: m.toastIcon,
        color: l.TVs.colors.STATUS_POSITIVE.css
      }), (0, r.jsxs)("div", {
        className: m.successToast,
        children: [(0, r.jsx)(l.Text, {
          color: "header-primary",
          variant: "text-sm/semibold",
          children: t
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/semibold",
          children: _.intl.format(_.t.QEW8Mq, {
            onClick: () => {
              o({
                action: "PRESS_REACT_REPLY_TOAST"
              }), null == i || i(), c.Z.openPrivateChannel({
                recipientIds: n
              })
            }
          })
        })]
      })]
    })
  },
  E = () => (0, Chunk54381.jsxs)("div", {
    className: a()(Chunk583140.toast, Chunk882909.toastPadding),
    children: [(0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.RAz.SPINNING_CIRCLE_SIMPLE,
      className: Chunk882909.toastIcon
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: Chunk388032.intl.string(Chunk388032.t.tcARX0)
    })]
  }),
  b = e => {
    let {
      userId: t,
      onClose: n,
      className: i
    } = e, {
      interactionTypeSent: c,
      showInteractionToast: d
    } = (0, f.Xo)(), h = c === p.P.REPLY ? _.intl.string(_.t.BPaiaa) : _.intl.string(_.t.Ry2EtG), b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), y = (0, l.Yzy)(d, {
      from: {
        transform: b ? "translateY(0)" : "translateY(16px)",
        opacity: 0
      },
      enter: {
        transform: "translateY(0)",
        opacity: 1
      },
      leave: {
        transform: b ? "translateY(0)" : "translateY(16px)",
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
      children: y((e, s) => s && (0, r.jsx)(o.animated.div, {
        className: a()(m.toastContainer, i),
        style: e,
        children: null != c ? (0, r.jsx)(l.FNi, {
          message: "",
          type: l.ToastType.CUSTOM,
          id: "react_reply_success_toast",
          options: {
            component: (0, r.jsx)(g, {
              userId: t,
              message: h,
              onClose: n
            })
          }
        }) : (0, r.jsx)(l.FNi, {
          message: "",
          type: l.ToastType.CUSTOM,
          id: "react_reply_loading_toast",
          options: {
            component: (0, r.jsx)(E, {})
          }
        })
      }))
    })
  }