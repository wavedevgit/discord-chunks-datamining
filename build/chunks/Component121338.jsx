/** Chunk was on 89488 **/
/** chunk id: 121338, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => u,
  openInteractionModal: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk750128 = require("./750128.js"),
  Chunk969508 = require("./969508.js"),
  Chunk520586 = require("./520586.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308040 = require("./308040.js");

function u(e) {
  let {
    title: t,
    onClose: n,
    transitionState: u
  } = e, {
    components: p,
    applicationIconURL: f,
    applicationName: m,
    submissionState: g,
    error: h,
    validators: I,
    validationErrors: O,
    setValidationErrors: b,
    onSubmit: E
  } = (0, _.uD)(e, n);
  return (0, r.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), E()
    },
    children: (0, r.jsxs)(i.dWK, {
      transitionState: u,
      onClose: n,
      children: [(0, r.jsx)(i.rQ0, {
        leading: (0, r.jsx)(o.euF, {
          src: f,
          size: o._3J.SIZE_24,
          "aria-label": m,
          className: d.In
        }),
        title: t,
        titleTextVariant: "heading-xl/semibold"
      }), (0, r.jsxs)(i.cwr, {
        children: [null != h && "" !== h ? (0, r.jsx)(o.po8, {
          messageType: o.YCn.ERROR,
          className: d.$Q,
          children: h
        }) : null, (0, r.jsx)(o.po8, {
          messageType: o.YCn.WARNING,
          className: d.$Q,
          children: s.intl.format(s.t["dSTy/w"], {
            applicationName: m
          })
        }), (0, r.jsx)("div", {
          className: d.dK,
          children: (0, r.jsx)(a.f5, {
            modal: e,
            validators: I,
            validationErrors: O,
            setValidationErrors: b,
            children: (0, c.fD)(p)
          })
        })]
      }), (0, r.jsx)(i.H7u, {
        actions: [{
          variant: "secondary",
          text: s.intl.string(s.t["ETE/oC"]),
          onClick: n
        }, {
          variant: "primary",
          text: s.intl.string(s.t.geKm7t),
          loading: g === l.Z.IN_FLIGHT,
          onClick: E
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function p(e) {
  (0, o.qfG)(t => (0, r.jsx)(u, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, t, e)), {
    stackNextByDefault: true
  })
}