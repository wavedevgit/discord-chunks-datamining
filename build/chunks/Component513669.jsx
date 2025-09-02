/** Chunk was on 73628 **/
/** chunk id: 513669, original params: A,e,t (module,exports,require) **/
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

function c(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}

function u(A, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : (function(A, e) {
    var t = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(A);
      t.push.apply(t, n)
    }
    return t
  })(Object(e)).forEach(function(t) {
    Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
  }), A
}
let g = "custom-image",
  f = Chunk647438.forwardRef(function(A, e) {
    let {
      selectedImageName: t,
      onChange: r,
      disabled: a = false,
      name: o,
      alt: s,
      data: g
    } = A, f = o === t, p = (0, i.xUy)({
      isSelected: f,
      label: s
    }), m = a ? true : () => {
      r(g, o)
    };
    return (0, n.jsx)(i.P3F, u(c({
      ref: e,
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

function p(A) {
  let {
    presetImages: e,
    image: t,
    imageName: a,
    savedImageName: p,
    onChange: m,
    uploadButtonLabel: q = s.intl.string(s.t["MsUY/f"]),
    radioGroupAriaLabel: h = s.intl.string(s.t["0Q0UJi"]),
    disabled: b = false
  } = A, C = a === g, [v, U] = r.useState(C ? t : null), [j, x] = r.useState(null), V = r.useRef(null), P = r.useRef(null);
  r.useEffect(() => {
    p !== g && (U(null), x(null))
  }, [p]);
  let O = null != j ? s.intl.formatToPlainString(s.t["Kw+5YW"], {
      filename: j
    }) : s.intl.string(s.t.SNPvSk),
    F = (0, i.arW)({
      orientation: "horizontal",
      isDisabled: b
    }),
    {
      ref: I
    } = F,
    K = function(A, e) {
      if (null == A) return {};
      var t, n, r = function(A, e) {
        if (null == A) return {};
        var t, n, r = {},
          a = Object.keys(A);
        for (n = 0; n < a.length; n++) t = a[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
        return r
      }(A, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(A);
        for (n = 0; n < a.length; n++) t = a[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
      }
      return r
    }(F, ["ref"]),
    y = () => {
      var A;
      return null == (A = V.current) ? true : A.activateUploadDialogue()
    },
    N = () => {
      a === g && m(e[0].data, e[0].name), U(null), x(null)
    };
  return r.useEffect(() => {
    if (C && null != j) {
      var A, e;
      null == (e = P.current) || null == (A = e.ref) || A.focus()
    }
  }, [C, j]), (0, n.jsxs)("div", {
    className: d.imageSelectionContainer,
    children: [(0, n.jsx)(i.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: l()(d.uploadButton, {
          [d.disabled]: b,
          [d.hidden]: null != v
        }),
        "aria-disabled": b,
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
          onChange: (A, e) => {
            null != e && (x(e.name), U(A), m(A, g))
          },
          "aria-label": q
        })]
      })
    }), null != v && (0, n.jsxs)("div", {
      className: d.customImageActionContainer,
      children: [(0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.AQYXMD),
        hideOnClick: true,
        children: A => (0, n.jsx)(i.P3F, u(c({}, A), {
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
        children: A => (0, n.jsx)(i.P3F, u(c({}, A), {
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
        disabled: b,
        name: g,
        alt: O,
        data: v
      }), e.map(A => (0, n.jsx)(f, c({
        selectedImageName: a,
        onChange: m,
        disabled: b
      }, A), A.name))]
    }))]
  })
}