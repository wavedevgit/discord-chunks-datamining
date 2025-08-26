/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793156 = require("./793156.js");

function c(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(A) {
      var n;
      n = t[A], A in e ? Object.defineProperty(e, A, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = n
    })
  }
  return e
}

function u(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let g = "custom-image",
  f = Chunk647438.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: r,
      disabled: a = false,
      name: o,
      alt: s,
      data: g
    } = e, f = o === t, p = (0, i.xUy)({
      isSelected: f,
      label: s
    }), m = a ? true : () => {
      r(g, o)
    };
    return (0, n.jsx)(i.P3F, u(c({
      ref: A,
      className: l()(d.radioOption, {
        [d.selected]: f,
        [d.disabled]: a
      }),
      onClick: m,
      "aria-disabled": a
    }, p), {
      children: (0, n.jsx)("img", {
        src: g,
        alt: s,
        className: d.radioOptionImage
      })
    }))
  });

function p(e) {
  let {
    presetImages: A,
    image: t,
    imageName: a,
    savedImageName: p,
    onChange: m,
    uploadButtonLabel: q = s.intl.string(s.t["MsUY/f"]),
    radioGroupAriaLabel: h = s.intl.string(s.t["0Q0UJi"]),
    disabled: C = false
  } = e, b = a === g, [v, U] = r.useState(b ? t : null), [j, x] = r.useState(null), V = r.useRef(null), P = r.useRef(null);
  r.useEffect(() => {
    p !== g && (U(null), x(null))
  }, [p]);
  let O = null != j ? s.intl.formatToPlainString(s.t["Kw+5YW"], {
      filename: j
    }) : s.intl.string(s.t.SNPvSk),
    F = (0, i.arW)({
      orientation: "horizontal",
      isDisabled: C
    }),
    {
      ref: I
    } = F,
    K = function(e, A) {
      if (null == e) return {};
      var t, n, r = function(e, A) {
        if (null == e) return {};
        var t, n, r = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) t = a[n], A.indexOf(t) >= 0 || (r[t] = e[t]);
        return r
      }(e, A);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) t = a[n], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
      }
      return r
    }(F, ["ref"]),
    y = () => {
      var e;
      return null == (e = V.current) ? true : e.activateUploadDialogue()
    },
    N = () => {
      a === g && m(A[0].data, A[0].name), U(null), x(null)
    };
  return r.useEffect(() => {
    if (b && null != j) {
      var e, A;
      null == (A = P.current) || null == (e = A.ref) || e.focus()
    }
  }, [b, j]), (0, n.jsxs)("div", {
    className: d.imageSelectionContainer,
    children: [(0, n.jsx)(i.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: l()(d.uploadButton, {
          [d.disabled]: C,
          [d.hidden]: null != v
        }),
        "aria-disabled": C,
        children: [(0, n.jsx)(i.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, n.jsx)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: q
        }), (0, n.jsx)(o.ZP, {
          ref: V,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (x(A.name), U(e), m(e, g))
          },
          "aria-label": q
        })]
      })
    }), null != v && (0, n.jsxs)("div", {
      className: d.customImageActionContainer,
      children: [(0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, n.jsx)(i.P3F, u(c({}, e), {
          className: d.customImageAction,
          onClick: y,
          "aria-label": s.intl.formatToPlainString(s.t.Qc9Lg4, {
            filename: j
          }),
          children: (0, n.jsx)(i.vdY, {
            size: "xs",
            color: "currentColor",
            className: d.editIcon
          })
        }))
      }), (0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.WxqWU1),
        hideOnClick: true,
        children: e => (0, n.jsx)(i.P3F, u(c({}, e), {
          className: d.customImageAction,
          onClick: N,
          "aria-label": s.intl.formatToPlainString(s.t.Z43V9f, {
            filename: j
          }),
          children: (0, n.jsx)(i.XHJ, {
            size: "md",
            color: "currentColor",
            className: d.deleteIcon
          })
        }))
      })]
    }), (0, n.jsxs)("div", u(c({
      "aria-label": h,
      ref: I
    }, K), {
      className: d.radioGroup,
      children: [null != v && (0, n.jsx)(f, {
        ref: P,
        selectedImageName: a,
        onChange: m,
        disabled: C,
        name: g,
        alt: O,
        data: v
      }), A.map(e => (0, n.jsx)(f, c({
        selectedImageName: a,
        onChange: m,
        disabled: C
      }, e), e.name))]
    }))]
  })
}