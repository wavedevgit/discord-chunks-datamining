/** Chunk was on 80717 **/
/** chunk id: 121338, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p,
  openInteractionModal: () => m
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

function p(e) {
  let {
    title: t,
    onClose: n,
    transitionState: p
  } = e, {
    components: m,
    applicationIconURL: f,
    applicationName: g,
    submissionState: O,
    error: h,
    validators: E,
    validationErrors: _,
    setValidationErrors: T,
    onSubmit: y
  } = (0, s.uD)(e, n);
  return (0, r.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), y()
    },
    children: (0, r.jsxs)(i.dWK, {
      transitionState: p,
      onClose: n,
      children: [(0, r.jsx)(i.rQ0, {
        leading: (0, r.jsx)(l.euF, {
          src: f,
          size: l._3J.SIZE_24,
          "aria-label": g,
          className: d.In
        }),
        title: t,
        titleTextVariant: "heading-xl/semibold"
      }), (0, r.jsxs)(i.cwr, {
        children: [null != h && "" !== h ? (0, r.jsx)(l.po8, {
          messageType: l.YCn.ERROR,
          className: d.$Q,
          children: h
        }) : null, (0, r.jsx)(l.po8, {
          messageType: l.YCn.WARNING,
          className: d.$Q,
          children: u.intl.format(u.t["dSTy/w"], {
            applicationName: g
          })
        }), (0, r.jsx)("div", {
          className: d.dK,
          children: (0, r.jsx)(o.f5, {
            modal: e,
            validators: E,
            validationErrors: _,
            setValidationErrors: T,
            children: (0, c.fD)(m)
          })
        })]
      }), (0, r.jsx)(i.H7u, {
        actions: [{
          variant: "secondary",
          text: u.intl.string(u.t["ETE/oC"]),
          onClick: n
        }, {
          variant: "primary",
          text: u.intl.string(u.t.geKm7t),
          loading: O === a.Z.IN_FLIGHT,
          onClick: y
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function m(e) {
  (0, l.qfG)(t => (0, r.jsx)(p, function(e) {
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