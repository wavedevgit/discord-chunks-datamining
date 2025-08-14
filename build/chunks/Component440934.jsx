/** Chunk was on 31453 **/
/** chunk id: 440934, original params: n,e,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f,
  openInteractionModal: () => h
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

function f(n) {
  let {
    title: e,
    onClose: t,
    transitionState: f
  } = n, {
    components: h,
    applicationIconURL: j,
    applicationName: x,
    submissionState: g,
    error: y,
    validators: I,
    validationErrors: v,
    setValidationErrors: E,
    onSubmit: O
  } = (0, u.X9)(n, t);
  return (0, i.jsx)("form", {
    onSubmit: n => {
      n.preventDefault(), O()
    },
    children: (0, i.jsxs)(r.I, {
      transitionState: f,
      onClose: t,
      children: [(0, i.jsx)(o.x, {
        leading: (0, i.jsx)(l.qEK, {
          src: j,
          size: l.EFr.SIZE_24,
          "aria-label": x,
          className: b.applicationIcon
        }),
        title: e,
        titleTextVariant: "heading-xl/semibold"
      }), (0, i.jsxs)(s.f, {
        children: [null != y && "" !== y ? (0, i.jsx)(l.Wn, {
          messageType: l.QYI.ERROR,
          className: b.submissionWarning,
          children: y
        }) : null, (0, i.jsx)(l.Wn, {
          messageType: l.QYI.WARNING,
          className: b.submissionWarning,
          children: m.intl.format(m.t["dSTy//"], {
            applicationName: x
          })
        }), (0, i.jsx)(l.hjN, {
          className: b.components,
          children: (0, i.jsx)(c.Il, {
            modal: n,
            validators: I,
            validationErrors: v,
            setValidationErrors: E,
            children: (0, p.xX)(h)
          })
        })]
      }), (0, i.jsx)(a.G, {
        actions: [{
          variant: "secondary",
          text: m.intl.string(m.t["ETE/oK"]),
          onClick: t
        }, {
          variant: "primary",
          text: m.intl.string(m.t.geKm7u),
          loading: g === d.i.IN_FLIGHT,
          onClick: O
        }],
        actionsFullWidth: true
      })]
    })
  })
}

function h(n) {
  (0, l.h7j)(e => (0, i.jsx)(f, function(n) {
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
  }({}, e, n)))
}