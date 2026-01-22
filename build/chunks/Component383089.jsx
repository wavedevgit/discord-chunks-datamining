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
    canStartAuthorization: p,
    bodyText: f,
    title: m
  } = t;
  return (0, a.jsxs)(n.dWK, {
    transitionState: d,
    onClose: _,
    children: [(0, a.jsx)(r.z, {
      sku: e,
      title: m
    }), (0, a.jsxs)(n.cwr, {
      children: [(0, a.jsxs)("div", {
        className: o.S3,
        children: [(0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          className: o.jJ,
          children: f
        }), (0, a.jsx)(u, {
          isConnected: x,
          application: i
        })]
      }), !p && !x && (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        className: o.tl,
        color: "text-feedback-warning",
        children: c.intl.string(c.t.GDL8wb)
      }), !x && (0, a.jsx)("div", {
        className: o.ZT,
        children: (0, a.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-subtle",
          children: c.intl.formatToPlainString(c.t.TTj7ME, {
            numDays: 14
          })
        })
      })]
    }), (0, a.jsx)(n.H7u, {
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
  return e ? (0, a.jsx)("div", {
    className: o.II,
    children: (0, a.jsxs)("div", {
      className: o.jf,
      children: [(0, a.jsxs)("div", {
        className: o.iN,
        children: [(0, a.jsx)("div", {
          className: o.I8,
          children: (0, a.jsx)(n.Uzd, {
            size: "xs",
            color: "currentColor"
          })
        }), (0, a.jsx)(s.Text, {
          variant: "text-md/normal",
          className: o.qS,
          color: "text-subtle",
          children: c.intl.string(c.t["LV+CXH"])
        })]
      }), (0, a.jsx)("div", {
        className: o.vA,
        children: (0, a.jsx)(l.W, {
          application: i,
          iconSize: 20
        })
      })]
    })
  }) : (0, a.jsx)(n.wx6, {
    type: "warning",
    children: (0, a.jsx)(s.Text, {
      variant: "text-sm/medium",
      children: c.intl.string(c.t.Plv1Xk)
    })
  })
}