/** Chunk was on 88742 **/
/** chunk id: 55121, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  M: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22928 = require("./22928.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475495 = require("./475495.js");

function x(t) {
  let {
    sku: n,
    application: e,
    primaryCTAButtonProps: i,
    transitionState: s,
    onClose: c,
    hasAlreadyLinked: x,
    canStartAuthorization: m,
    bodyText: g,
    title: p
  } = t;
  return (0, a.jsxs)(o.IX, {
    transitionState: s,
    onClose: c,
    children: [(0, a.jsx)(l.y, {
      sku: n,
      title: p
    }), (0, a.jsxs)(o.fef, {
      children: [(0, a.jsxs)("div", {
        className: u.modalBody,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          className: u.modalBodyText,
          children: g
        }), (0, a.jsx)(f, {
          isConnected: x,
          application: e
        })]
      }), !m && !x && (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        className: u.cannotLinkAccountWarning,
        color: "text-feedback-warning",
        children: d.intl.string(d.t.GDL8wb)
      }), !x && (0, a.jsx)("div", {
        className: u.expirationWarningContainer,
        children: (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: d.intl.formatToPlainString(d.t.TTj7ME, {
            numDays: 14
          })
        })
      })]
    }), (0, a.jsx)(o.Go$, {
      actions: [i],
      actionsFullWidth: true
    })]
  })
}

function f(t) {
  let {
    isConnected: n,
    application: e
  } = t;
  return (0, a.jsx)("div", {
    className: u.statusContainer,
    children: (0, a.jsxs)("div", {
      className: u.statusRow,
      children: [(0, a.jsxs)("div", {
        className: u.statusLeft,
        children: [(0, a.jsx)("div", {
          className: s()(u.statusIcon, {
            [u.statusIconConnected]: n,
            [u.statusIconDisconnected]: !n
          }),
          children: n ? (0, a.jsx)(r.dz2, {
            size: "sm",
            color: "currentColor"
          }) : (0, a.jsx)(r.Dio, {
            size: "sm",
            color: "currentColor"
          })
        }), (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          className: u.statusText,
          color: "text-secondary",
          children: n ? d.intl.string(d.t["LV+CXH"]) : d.intl.string(d.t.Plv1Xk)
        })]
      }), (0, a.jsx)("div", {
        className: u.statusRight,
        children: (0, a.jsx)(c.h, {
          application: e,
          iconSize: 20
        })
      })]
    })
  })
}