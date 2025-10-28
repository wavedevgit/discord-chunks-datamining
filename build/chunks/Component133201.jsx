/** Chunk was on 88742 **/
/** chunk id: 133201, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535139 = require("./535139.js"),
  Chunk22928 = require("./22928.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk261540 = require("./261540.js");

function x(t) {
  let {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    successStateButtonText: c,
    onSuccessButtonClick: u,
    isSuccessButtonLoading: x
  } = t, {
    hasAlreadyLinked: m,
    canStartAuthorization: h,
    startAuthorization: C,
    fetched: g
  } = (0, r.F)(e);
  if (!g) return (0, i.jsx)(l.IX, {
    transitionState: a,
    onClose: s,
    children: (0, i.jsx)(l.fef, {
      children: (0, i.jsx)("div", {
        className: p.loadingContainer,
        children: (0, i.jsx)(o.$jN, {})
      })
    })
  });
  let S = m ? {
    variant: "primary",
    text: c,
    onClick: u,
    loading: x
  } : {
    variant: "primary",
    text: d.intl.string(d.t["VDAhr+"]),
    onClick: C,
    icon: l.uIJ,
    disabled: !h
  };
  return (0, i.jsx)(f, {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    hasAlreadyLinked: m,
    canStartAuthorization: h,
    primaryCTAButtonProps: S,
    bodyText: d.intl.formatToPlainString(d.t.PaYE38, {
      applicationName: e.name
    }),
    title: d.intl.string(d.t["Bn1J+a"])
  })
}

function f(t) {
  let {
    sku: n,
    application: e,
    primaryCTAButtonProps: a,
    transitionState: s,
    onClose: r,
    hasAlreadyLinked: c,
    canStartAuthorization: x,
    bodyText: f,
    title: h
  } = t;
  return (0, i.jsxs)(l.IX, {
    transitionState: s,
    onClose: r,
    children: [(0, i.jsx)(u.y, {
      sku: n,
      title: h
    }), (0, i.jsxs)(l.fef, {
      children: [(0, i.jsxs)("div", {
        className: p.modalBody,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: p.modalBodyText,
          children: f
        }), (0, i.jsx)(m, {
          isConnected: c,
          application: e
        })]
      }), !x && !c && (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: p.cannotLinkAccountWarning,
        color: "text-feedback-warning",
        children: d.intl.string(d.t.GDL8wb)
      })]
    }), (0, i.jsx)(l.Go$, {
      actions: [a],
      actionsFullWidth: true
    })]
  })
}

function m(t) {
  let {
    isConnected: n,
    application: e
  } = t;
  return (0, i.jsx)("div", {
    className: p.statusContainer,
    children: (0, i.jsxs)("div", {
      className: p.statusRow,
      children: [(0, i.jsxs)("div", {
        className: p.statusLeft,
        children: [(0, i.jsx)("div", {
          className: s()(p.statusIcon, {
            [p.statusIconConnected]: n,
            [p.statusIconDisconnected]: !n
          }),
          children: n ? (0, i.jsx)(o.dz2, {
            size: "sm",
            color: "currentColor"
          }) : (0, i.jsx)(o.Dio, {
            size: "sm",
            color: "currentColor"
          })
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: p.statusText,
          color: "text-secondary",
          children: n ? d.intl.string(d.t["LV+CXH"]) : d.intl.string(d.t.Plv1Xk)
        })]
      }), (0, i.jsx)("div", {
        className: p.statusRight,
        children: (0, i.jsx)(c.h, {
          application: e,
          iconSize: 20
        })
      })]
    })
  })
}