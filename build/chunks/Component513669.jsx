/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,t,A (module,exports,require) **/
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

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = A[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      A.push.apply(A, n)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let g = "custom-image",
  f = Chunk647438.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: r,
      disabled: a = false,
      name: o,
      alt: s,
      data: g
    } = e, f = o === A, p = (0, i.xUy)({
      isSelected: f,
      label: s
    }), h = a ? true : () => {
      r(g, o)
    };
    return (0, n.jsx)(i.P3F, u(d({
      ref: t,
      className: l()(c.radioOption, {
        [c.selected]: f,
        [c.disabled]: a
      }),
      onClick: h,
      "aria-disabled": a
    }, p), {
      children: (0, n.jsx)("img", {
        src: g,
        alt: s,
        className: c.radioOptionImage
      })
    }))
  });

function p(e) {
  let {
    presetImages: t,
    image: A,
    imageName: a,
    savedImageName: p,
    onChange: h,
    uploadButtonLabel: m = s.intl.string(s.t["MsUY/f"]),
    radioGroupAriaLabel: v = s.intl.string(s.t["0Q0UJi"]),
    disabled: b = false
  } = e, C = a === g, [q, x] = r.useState(C ? A : null), [j, U] = r.useState(null), O = r.useRef(null), V = r.useRef(null);
  r.useEffect(() => {
    p !== g && (x(null), U(null))
  }, [p]);
  let P = null != j ? s.intl.formatToPlainString(s.t["Kw+5YW"], {
      filename: j
    }) : s.intl.string(s.t.SNPvSk),
    y = (0, i.arW)({
      orientation: "horizontal",
      isDisabled: b
    }),
    {
      ref: N
    } = y,
    I = function(e, t) {
      if (null == e) return {};
      var A, n, r = function(e, t) {
        if (null == e) return {};
        var A, n, r = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) A = a[n], t.indexOf(A) >= 0 || (r[A] = e[A]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) A = a[n], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A])
      }
      return r
    }(y, ["ref"]),
    F = () => {
      var e;
      return null == (e = O.current) ? true : e.activateUploadDialogue()
    },
    T = () => {
      a === g && h(t[0].data, t[0].name), x(null), U(null)
    };
  return r.useEffect(() => {
    if (C && null != j) {
      var e, t;
      null == (t = V.current) || null == (e = t.ref) || e.focus()
    }
  }, [C, j]), (0, n.jsxs)("div", {
    className: c.imageSelectionContainer,
    children: [(0, n.jsx)(i.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: l()(c.uploadButton, {
          [c.disabled]: b,
          [c.hidden]: null != q
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
          children: m
        }), (0, n.jsx)(o.ZP, {
          ref: O,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (U(t.name), x(e), h(e, g))
          },
          "aria-label": m
        })]
      })
    }), null != q && (0, n.jsxs)("div", {
      className: c.customImageActionContainer,
      children: [(0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, n.jsx)(i.P3F, u(d({}, e), {
          className: c.customImageAction,
          onClick: F,
          "aria-label": s.intl.formatToPlainString(s.t.Qc9Lg4, {
            filename: j
          }),
          children: (0, n.jsx)(i.vdY, {
            size: "xs",
            color: "currentColor",
            className: c.editIcon
          })
        }))
      }), (0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.WxqWU1),
        hideOnClick: true,
        children: e => (0, n.jsx)(i.P3F, u(d({}, e), {
          className: c.customImageAction,
          onClick: T,
          "aria-label": s.intl.formatToPlainString(s.t.Z43V9f, {
            filename: j
          }),
          children: (0, n.jsx)(i.XHJ, {
            size: "md",
            color: "currentColor",
            className: c.deleteIcon
          })
        }))
      })]
    }), (0, n.jsxs)("div", u(d({
      "aria-label": v,
      ref: N
    }, I), {
      className: c.radioGroup,
      children: [null != q && (0, n.jsx)(f, {
        ref: V,
        selectedImageName: a,
        onChange: h,
        disabled: b,
        name: g,
        alt: P,
        data: q
      }), t.map(e => (0, n.jsx)(f, d({
        selectedImageName: a,
        onChange: h,
        disabled: b
      }, e), e.name))]
    }))]
  })
}