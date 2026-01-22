/** Chunk was on 94055 **/
/** chunk id: 121338, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f,
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

function f(e) {
  let {
    title: t,
    onClose: n,
    transitionState: f
  } = e, {
    components: p,
    applicationIconURL: m,
    applicationName: x,
    submissionState: b,
    error: h,
    validators: j,
    validationErrors: y,
    setValidationErrors: g,
    onSubmit: v
  } = (0, o.uD)(e, n);
  return (0, r.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), v()
    },
    children: (0, r.jsxs)(a.dWK, {
      transitionState: f,
      onClose: n,
      children: [(0, r.jsx)(a.rQ0, {
        leading: (0, r.jsx)(i.euF, {
          src: m,
          size: i._3J.SIZE_24,
          "aria-label": x,
          className: u.In
        }),
        title: t,
        titleTextVariant: "heading-xl/semibold"
      }), (0, r.jsxs)(a.cwr, {
        children: [null != h && "" !== h ? (0, r.jsx)(i.po8, {
          messageType: i.YCn.ERROR,
          className: u.$Q,
          children: h
        }) : null, (0, r.jsx)(i.po8, {
          messageType: i.YCn.WARNING,
          className: u.$Q,
          children: d.intl.format(d.t["dSTy/w"], {
            applicationName: x
          })
        }), (0, r.jsx)("div", {
          className: u.dK,
          children: (0, r.jsx)(s.f5, {
            modal: e,
            validators: j,
            validationErrors: y,
            setValidationErrors: g,
            children: (0, c.fD)(p)
          })
        })]
      }), (0, r.jsx)(a.H7u, {
        actions: [{
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oC"]),
          onClick: n
        }, {
          variant: "primary",
          text: d.intl.string(d.t.geKm7t),
          loading: b === l.Z.IN_FLIGHT,
          onClick: v
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function p(e) {
  (0, i.qfG)(t => (0, r.jsx)(f, function(e) {
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