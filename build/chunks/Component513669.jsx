/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let f = "custom-image",
  g = Chunk647438.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: r,
      disabled: l = false,
      name: o,
      alt: s,
      data: f
    } = e, g = o === t, p = (0, i.xUy)({
      isSelected: g,
      label: s
    }), m = l ? true : () => {
      r(f, o)
    };
    return (0, n.jsx)(i.P3F, u(c({
      ref: A,
      className: a()(d.radioOption, {
        [d.selected]: g,
        [d.disabled]: l
      }),
      onClick: m,
      "aria-disabled": l
    }, p), {
      children: (0, n.jsx)("img", {
        src: f,
        alt: s,
        className: d.radioOptionImage
      })
    }))
  });

function p(e) {
  let {
    presetImages: A,
    image: t,
    imageName: l,
    savedImageName: p,
    onChange: m,
    uploadButtonLabel: b = s.intl.string(s.t["MsUY/f"]),
    radioGroupAriaLabel: q = s.intl.string(s.t["0Q0UJi"]),
    disabled: h = false
  } = e, C = l === f, [v, j] = r.useState(C ? t : null), [x, U] = r.useState(null), V = r.useRef(null), O = r.useRef(null);
  r.useEffect(() => {
    p !== f && (j(null), U(null))
  }, [p]);
  let P = null != x ? s.intl.formatToPlainString(s.t["Kw+5YW"], {
      filename: x
    }) : s.intl.string(s.t.SNPvSk),
    F = (0, i.arW)({
      orientation: "horizontal",
      isDisabled: h
    }),
    {
      ref: I
    } = F,
    y = function(e, A) {
      if (null == e) return {};
      var t, n, r = function(e, A) {
        if (null == e) return {};
        var t, n, r = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++) t = l[n], A.indexOf(t) >= 0 || (r[t] = e[t]);
        return r
      }(e, A);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) t = l[n], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
      }
      return r
    }(F, ["ref"]),
    N = () => {
      var e;
      return null == (e = V.current) ? true : e.activateUploadDialogue()
    },
    K = () => {
      l === f && m(A[0].data, A[0].name), j(null), U(null)
    };
  return r.useEffect(() => {
    if (C && null != x) {
      var e, A;
      null == (A = O.current) || null == (e = A.ref) || e.focus()
    }
  }, [C, x]), (0, n.jsxs)("div", {
    className: d.imageSelectionContainer,
    children: [(0, n.jsx)(i.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: a()(d.uploadButton, {
          [d.disabled]: h,
          [d.hidden]: null != v
        }),
        "aria-disabled": h,
        children: [(0, n.jsx)(i.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, n.jsx)(i.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: b
        }), (0, n.jsx)(o.ZP, {
          ref: V,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (U(A.name), j(e), m(e, f))
          },
          "aria-label": b
        })]
      })
    }), null != v && (0, n.jsxs)("div", {
      className: d.customImageActionContainer,
      children: [(0, n.jsx)(i.ua7, {
        text: s.intl.string(s.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, n.jsx)(i.P3F, u(c({}, e), {
          className: d.customImageAction,
          onClick: N,
          "aria-label": s.intl.formatToPlainString(s.t.Qc9Lg4, {
            filename: x
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
          onClick: K,
          "aria-label": s.intl.formatToPlainString(s.t.Z43V9f, {
            filename: x
          }),
          children: (0, n.jsx)(i.XHJ, {
            size: "md",
            color: "currentColor",
            className: d.deleteIcon
          })
        }))
      })]
    }), (0, n.jsxs)("div", u(c({
      "aria-label": q,
      ref: I
    }, y), {
      className: d.radioGroup,
      children: [null != v && (0, n.jsx)(g, {
        ref: O,
        selectedImageName: l,
        onChange: m,
        disabled: h,
        name: f,
        alt: P,
        data: v
      }), A.map(e => (0, n.jsx)(g, c({
        selectedImageName: l,
        onChange: m,
        disabled: h
      }, e), e.name))]
    }))]
  })
}