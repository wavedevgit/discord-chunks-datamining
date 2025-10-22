/** Chunk was on 31453 **/
/** chunk id: 440934, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => p,
  openInteractionModal: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
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
    error: g,
    validators: h,
    validationErrors: j,
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
        leading: (0, i.jsx)(s.qEK, {
          src: f,
          size: s.EFr.SIZE_24,
          "aria-label": b,
          className: u.applicationIcon
        }),
        title: e,
        titleTextVariant: "heading-xl/semibold"
      }), (0, i.jsxs)(a.fef, {
        children: [null != g && "" !== g ? (0, i.jsx)(s.Wn, {
          messageType: s.QYI.ERROR,
          className: u.submissionWarning,
          children: g
        }) : null, (0, i.jsx)(s.Wn, {
          messageType: s.QYI.WARNING,
          className: u.submissionWarning,
          children: d.intl.format(d.t["dSTy/w"], {
            applicationName: b
          })
        }), (0, i.jsx)("div", {
          className: u.components,
          children: (0, i.jsx)(r.Il, {
            modal: n,
            validators: h,
            validationErrors: j,
            setValidationErrors: y,
            children: (0, c.xX)(m)
          })
        })]
      }), (0, i.jsx)(a.Go$, {
        actions: [{
          variant: "secondary",
          text: d.intl.string(d.t["ETE/oC"]),
          onClick: t
        }, {
          variant: "primary",
          text: d.intl.string(d.t.geKm7t),
          loading: x === o.i.IN_FLIGHT,
          onClick: I
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function m(n) {
  (0, s.h7j)(e => (0, i.jsx)(p, function(n) {
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