/** Chunk was on 31453 **/
/** chunk id: 440934, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p,
  openInteractionModal: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk471073 = require("./471073.js"),
  Chunk293979 = require("./293979.js"),
  Chunk954654 = require("./954654.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk536289 = require("./536289.js");

function p(n) {
  let {
    title: e,
    onClose: t,
    transitionState: p
  } = n, {
    components: m,
    applicationIconURL: f,
    applicationName: b,
    submissionState: x,
    error: h,
    validators: j,
    validationErrors: g,
    setValidationErrors: y,
    onSubmit: I
  } = (0, l.X9)(n, t);
  return (0, i.jsx)("form", {
    onSubmit: n => {
      n.preventDefault(), I()
    },
    children: (0, i.jsxs)(a.IX, {
      transitionState: p,
      onClose: t,
      children: [(0, i.jsx)(a.xBx, {
        leading: (0, i.jsx)(r.qEK, {
          src: f,
          size: r.EFr.SIZE_24,
          "aria-label": b,
          className: u.applicationIcon
        }),
        title: e,
        titleTextVariant: "heading-xl/semibold"
      }), (0, i.jsxs)(a.fef, {
        children: [null != h && "" !== h ? (0, i.jsx)(r.Wn, {
          messageType: r.QYI.ERROR,
          className: u.submissionWarning,
          children: h
        }) : null, (0, i.jsx)(r.Wn, {
          messageType: r.QYI.WARNING,
          className: u.submissionWarning,
          children: d.intl.format(d.t["dSTy//"], {
            applicationName: b
          })
        }), (0, i.jsx)(r.hjN, {
          className: u.components,
          children: (0, i.jsx)(s.Il, {
            modal: n,
            validators: j,
            validationErrors: g,
            setValidationErrors: y,
            children: (0, c.xX)(m)
          })
        })]
      }), (0, i.jsx)(a.Go$, {
        actions: [{
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oK"]),
          onClick: t
        }, {
          variant: "primary",
          text: d.intl.string(d.t.geKm7u),
          loading: x === o.i.IN_FLIGHT,
          onClick: I
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function m(n) {
  (0, r.h7j)(e => (0, i.jsx)(p, function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable
      }))), i.forEach(function(e) {
        var i;
        i = t[e], e in n ? Object.defineProperty(n, e, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : n[e] = i
      })
    }
    return n
  }({}, e, n)), {
    stackNextByDefault: true
  })
}