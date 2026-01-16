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
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk607070 = require("./607070.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk510659 = require("./510659.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk570447 = require("./570447.js"),
  Chunk141291 = require("./141291.js");
let g = e => {
    let {
      message: t,
      userId: n,
      onClose: i
    } = e, {
      trackUserProfileAction: o
    } = (0, d.KZ)();
    return (0, r.jsxs)("div", {
      className: a()(m.toast, h.toastPadding),
      children: [(0, r.jsx)(l.dz2, {
        size: "sm",
        className: h.toastIcon,
        color: l.TVs.colors.STATUS_POSITIVE.css
      }), (0, r.jsxs)("div", {
        className: h.successToast,
        children: [(0, r.jsx)(l.Text, {
          color: "text-strong",
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
  E = () => (0, r.jsxs)("div", {
    className: a()(m.toast, h.toastPadding),
    children: [(0, r.jsx)(l.$jN, {
      type: l.RAz.SPINNING_CIRCLE_SIMPLE,
      className: h.toastIcon
    }), (0, r.jsx)(l.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: _.intl.string(_.t.tcARX0)
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
    } = (0, f.Xo)(), m = c === p.P.REPLY ? _.intl.string(_.t.BPaiaa) : _.intl.string(_.t.Ry2EtG), b = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), y = (0, l.Yzy)(d, {
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
        className: a()(h.toastContainer, i),
        style: e,
        children: null != c ? (0, r.jsx)(l.FNi, {
          message: "",
          type: l.ToastType.CUSTOM,
          id: "react_reply_success_toast",
          options: {
            component: (0, r.jsx)(g, {
              userId: t,
              message: m,
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