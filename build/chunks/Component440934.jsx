/** Chunk was on 71088 **/
/** chunk id: 440934, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p,
  openInteractionModal: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk471073 = require("./471073.js"),
  Chunk293979 = require("./293979.js"),
  Chunk954654 = require("./954654.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk620309 = require("./620309.js");

function p(e) {
  let {
    title: n,
    onClose: t,
    transitionState: p
  } = e, {
    components: b,
    applicationIconURL: I,
    applicationName: h,
    submissionState: x,
    error: g,
    validators: C,
    validationErrors: y,
    setValidationErrors: B,
    onSubmit: T
  } = (0, d.X9)(e, t);
  return (0, o.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), T()
    },
    children: (0, o.jsxs)(i.I, {
      transitionState: p,
      onClose: t,
      children: [(0, o.jsx)(c.x, {
        leading: (0, o.jsx)(l.qEK, {
          src: I,
          size: l.EFr.SIZE_24,
          "aria-label": h,
          className: f.applicationIcon
        }),
        title: n,
        titleTextVariant: "heading-xl/semibold"
      }), (0, o.jsxs)(a.f, {
        children: [null != g && "" !== g ? (0, o.jsx)(l.Wn, {
          messageType: l.QYI.ERROR,
          className: f.submissionWarning,
          children: g
        }) : null, (0, o.jsx)(l.Wn, {
          messageType: l.QYI.WARNING,
          className: f.submissionWarning,
          children: m.intl.format(m.t["dSTy//"], {
            applicationName: h
          })
        }), (0, o.jsx)(l.hjN, {
          className: f.components,
          children: (0, o.jsx)(_.Il, {
            modal: e,
            validators: C,
            validationErrors: y,
            setValidationErrors: B,
            children: (0, u.xX)(b)
          })
        })]
      }), (0, o.jsx)(r.G, {
        actions: [{
          variant: "secondary",
          text: m.intl.string(m.t["ETE/oK"]),
          onClick: t
        }, {
          variant: "primary",
          text: m.intl.string(m.t.geKm7u),
          loading: x === s.i.IN_FLIGHT,
          onClick: T
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function b(e) {
  (0, l.h7j)(n => (0, o.jsx)(p, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        o = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), o.forEach(function(n) {
        var o;
        o = t[n], n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = o
      })
    }
    return e
  }({}, n, e)))
}