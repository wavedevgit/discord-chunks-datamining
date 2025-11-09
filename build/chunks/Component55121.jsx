/** Chunk was on 88742 **/
/** chunk id: 55121, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  M: () => f
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
  Chunk440995 = require("./440995.js");

function f(t) {
  let {
    sku: n,
    application: e,
    primaryCTAButtonProps: a,
    transitionState: s,
    onClose: r,
    hasAlreadyLinked: f,
    canStartAuthorization: p,
    bodyText: g,
    title: m
  } = t;
  return (0, i.jsxs)(o.IX, {
    transitionState: s,
    onClose: r,
    children: [(0, i.jsx)(c.y, {
      sku: n,
      title: m
    }), (0, i.jsxs)(o.fef, {
      children: [(0, i.jsxs)("div", {
        className: d.modalBody,
        children: [(0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          className: d.modalBodyText,
          children: g
        }), (0, i.jsx)(x, {
          isConnected: f,
          application: e
        })]
      }), !p && !f && (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        className: d.cannotLinkAccountWarning,
        color: "text-feedback-warning",
        children: u.intl.string(u.t.GDL8wb)
      }), !f && (0, i.jsx)("div", {
        className: d.expirationWarningContainer,
        children: (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-secondary",
          children: u.intl.formatToPlainString(u.t.TTj7ME, {
            numDays: 14
          })
        })
      })]
    }), (0, i.jsx)(o.Go$, {
      actions: [a],
      actionsFullWidth: true
    })]
  })
}

function x(t) {
  let {
    isConnected: n,
    application: e
  } = t;
  return (0, i.jsx)("div", {
    className: d.statusContainer,
    children: (0, i.jsxs)("div", {
      className: d.statusRow,
      children: [(0, i.jsxs)("div", {
        className: d.statusLeft,
        children: [(0, i.jsx)("div", {
          className: s()(d.statusIcon, {
            [d.statusIconConnected]: n,
            [d.statusIconDisconnected]: !n
          }),
          children: n ? (0, i.jsx)(l.dz2, {
            size: "sm",
            color: "currentColor"
          }) : (0, i.jsx)(l.Dio, {
            size: "sm",
            color: "currentColor"
          })
        }), (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          className: d.statusText,
          color: "text-secondary",
          children: n ? u.intl.string(u.t["LV+CXH"]) : u.intl.string(u.t.Plv1Xk)
        })]
      }), (0, i.jsx)("div", {
        className: d.statusRight,
        children: (0, i.jsx)(r.h, {
          application: e,
          iconSize: 20
        })
      })]
    })
  })
}