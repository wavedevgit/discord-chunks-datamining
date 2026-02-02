/** Chunk was on 94544 **/
/** chunk id: 383089, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  m: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk665711 = require("./665711.jsx"),
  Chunk41032 = require("./41032.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk23337 = require("./23337.js");

function d(t) {
  let {
    sku: e,
    application: i,
    primaryCTAButtonProps: l,
    transitionState: d,
    onClose: _,
    hasAlreadyLinked: x,
    canStartAuthorization: m,
    bodyText: f,
    title: p
  } = t;
  return (0, n.jsxs)(a.dWK, {
    transitionState: d,
    onClose: _,
    children: [(0, n.jsx)(r.z, {
      sku: e,
      title: p
    }), (0, n.jsxs)(a.cwr, {
      children: [(0, n.jsxs)("div", {
        className: c.S3,
        children: [(0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          className: c.jJ,
          children: f
        }), (0, n.jsx)(u, {
          isConnected: x,
          application: i
        })]
      }), !m && !x && (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        className: c.tl,
        color: "text-feedback-warning",
        children: o.intl.string(o.t.GDL8wb)
      }), !x && (0, n.jsx)("div", {
        className: c.ZT,
        children: (0, n.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: o.intl.formatToPlainString(o.t.TTj7ME, {
            numDays: 14
          })
        })
      })]
    }), (0, n.jsx)(a.H7u, {
      actions: [l],
      actionsFullWidth: true
    })]
  })
}

function u(t) {
  let {
    isConnected: e,
    application: i
  } = t;
  return e ? (0, n.jsx)("div", {
    className: c.II,
    children: (0, n.jsxs)("div", {
      className: c.jf,
      children: [(0, n.jsxs)("div", {
        className: c.iN,
        children: [(0, n.jsx)("div", {
          className: c.I8,
          children: (0, n.jsx)(a.Uzd, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, n.jsx)(s.Text, {
          variant: "text-md/normal",
          className: c.qS,
          color: "text-subtle",
          children: o.intl.string(o.t["LV+CXH"])
        })]
      }), (0, n.jsx)("div", {
        className: c.vA,
        children: (0, n.jsx)(l.W, {
          application: i,
          iconSize: 20
        })
      })]
    })
  }) : (0, n.jsx)(a.wx6, {
    type: "warning",
    children: (0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: o.intl.string(o.t.Plv1Xk)
    })
  })
}