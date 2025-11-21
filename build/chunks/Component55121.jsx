/** Chunk was on 88742 **/
/** chunk id: 55121, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22928 = require("./22928.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475495 = require("./475495.js");

function u(t) {
  let {
    sku: e,
    application: n,
    primaryCTAButtonProps: o,
    transitionState: u,
    onClose: x,
    hasAlreadyLinked: f,
    canStartAuthorization: _,
    bodyText: m,
    title: g
  } = t;
  return (0, i.jsxs)(a.IX, {
    transitionState: u,
    onClose: x,
    children: [(0, i.jsx)(l.y, {
      sku: e,
      title: g
    }), (0, i.jsxs)(a.fef, {
      children: [(0, i.jsxs)("div", {
        className: c.modalBody,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          className: c.modalBodyText,
          children: m
        }), (0, i.jsx)(d, {
          isConnected: f,
          application: n
        })]
      }), !_ && !f && (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        className: c.cannotLinkAccountWarning,
        color: "text-feedback-warning",
        children: r.intl.string(r.t.GDL8wb)
      }), !f && (0, i.jsx)("div", {
        className: c.expirationWarningContainer,
        children: (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: r.intl.formatToPlainString(r.t.TTj7ME, {
            numDays: 14
          })
        })
      })]
    }), (0, i.jsx)(a.Go$, {
      actions: [o],
      actionsFullWidth: true
    })]
  })
}

function d(t) {
  let {
    isConnected: e,
    application: n
  } = t;
  return e ? (0, i.jsx)("div", {
    className: c.statusContainer,
    children: (0, i.jsxs)("div", {
      className: c.statusRow,
      children: [(0, i.jsxs)("div", {
        className: c.statusLeft,
        children: [(0, i.jsx)("div", {
          className: c.statusIcon,
          children: (0, i.jsx)(a.kmB, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, i.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.statusText,
          color: "text-secondary",
          children: r.intl.string(r.t["LV+CXH"])
        })]
      }), (0, i.jsx)("div", {
        className: c.statusRight,
        children: (0, i.jsx)(o.h, {
          application: n,
          iconSize: 20
        })
      })]
    })
  }) : (0, i.jsx)(a.M14, {
    type: "warning",
    children: (0, i.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: r.intl.string(r.t.Plv1Xk)
    })
  })
}