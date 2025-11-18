/** Chunk was on 88742 **/
/** chunk id: 55121, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  M: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22928 = require("./22928.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk440995 = require("./440995.js");

function _(t) {
  let {
    sku: e,
    application: n,
    primaryCTAButtonProps: a,
    transitionState: s,
    onClose: l,
    hasAlreadyLinked: _,
    canStartAuthorization: x,
    bodyText: m,
    title: p
  } = t;
  return (0, i.jsxs)(o.IX, {
    transitionState: s,
    onClose: l,
    children: [(0, i.jsx)(r.y, {
      sku: e,
      title: p
    }), (0, i.jsxs)(o.fef, {
      children: [(0, i.jsxs)("div", {
        className: d.modalBody,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: d.modalBodyText,
          children: m
        }), (0, i.jsx)(f, {
          isConnected: _,
          application: n
        })]
      }), !x && !_ && (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        className: d.cannotLinkAccountWarning,
        color: "text-feedback-warning",
        children: u.intl.string(u.t.GDL8wb)
      }), !_ && (0, i.jsx)("div", {
        className: d.expirationWarningContainer,
        children: (0, i.jsx)(c.Text, {
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

function f(t) {
  let {
    isConnected: e,
    application: n
  } = t;
  return (0, i.jsx)("div", {
    className: d.statusContainer,
    children: (0, i.jsxs)("div", {
      className: d.statusRow,
      children: [(0, i.jsxs)("div", {
        className: d.statusLeft,
        children: [(0, i.jsx)("div", {
          className: s()(d.statusIcon, {
            [d.statusIconConnected]: e,
            [d.statusIconDisconnected]: !e
          }),
          children: e ? (0, i.jsx)(c.dz2, {
            size: "sm",
            color: "currentColor"
          }) : (0, i.jsx)(c.Dio, {
            size: "sm",
            color: "currentColor"
          })
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: d.statusText,
          color: "text-secondary",
          children: e ? u.intl.string(u.t["LV+CXH"]) : u.intl.string(u.t.Plv1Xk)
        })]
      }), (0, i.jsx)("div", {
        className: d.statusRight,
        children: (0, i.jsx)(l.h, {
          application: n,
          iconSize: 20
        })
      })]
    })
  })
}