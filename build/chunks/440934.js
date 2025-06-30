/** Chunk was on 29971 **/
t.r(n), t.d(n, {
  default: () => u,
  openInteractionModal: () => m
});
var o = t(255367);
t(73800);
var i = t(481060),
  r = t(118012),
  a = t(970184),
  c = t(471073),
  l = t(293979),
  _ = t(954654),
  s = t(388032),
  d = t(994186);

function u(e) {
  let {
    title: n,
    onClose: t,
    transitionState: u
  } = e, {
    components: m,
    applicationIconURL: f,
    applicationName: p,
    submissionState: b,
    error: I,
    validators: h,
    onSubmit: x
  } = (0, l.X9)(e, t);
  return (0, o.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), x()
    },
    children: (0, o.jsxs)(i.Y0X, {
      transitionState: u,
      parentComponent: "InteractionModal",
      children: [(0, o.jsxs)(i.xBx, {
        separator: !1,
        children: [(0, o.jsx)(i.qEK, {
          src: f,
          size: i.EFr.SIZE_24,
          "aria-label": p,
          className: d.applicationIcon
        }), (0, o.jsx)(r.Z, {
          color: r.Z.Colors.HEADER_PRIMARY,
          size: r.Z.Sizes.SIZE_24,
          children: n
        }), (0, o.jsx)(i.olH, {
          onClick: t,
          className: d.closeButton
        })]
      }), (0, o.jsxs)(i.hzk, {
        children: [null != I && "" !== I ? (0, o.jsx)(i.Wn, {
          messageType: i.QYI.ERROR,
          className: d.submissionWarning,
          children: I
        }) : null, (0, o.jsx)(i.Wn, {
          messageType: i.QYI.WARNING,
          className: d.submissionWarning,
          children: s.intl.format(s.t["dSTy//"], {
            applicationName: p
          })
        }), (0, o.jsx)(i.hjN, {
          children: (0, o.jsx)(a.Il, {
            modal: e,
            validators: h,
            children: (0, _.xX)(m)
          })
        })]
      }), (0, o.jsxs)(i.mzw, {
        children: [(0, o.jsx)(i.zxk, {
          type: "submit",
          color: i.zxk.Colors.BRAND,
          size: i.zxk.Sizes.MEDIUM,
          submitting: b === c.i.IN_FLIGHT,
          children: s.intl.string(s.t.geKm7u)
        }), (0, o.jsx)(i.zxk, {
          look: i.zxk.Looks.LINK,
          color: i.zxk.Colors.PRIMARY,
          onClick: t,
          children: s.intl.string(s.t["ETE/oK"])
        })]
      })]
    })
  })
}

function m(e) {
  (0, i.h7j)(n => (0, o.jsx)(u, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        o = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), o.forEach(function(n) {
        var o;
        o = t[n], n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = o
      })
    }
    return e
  }({}, n, e)))
}