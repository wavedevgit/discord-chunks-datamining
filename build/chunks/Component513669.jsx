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
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      var r;
      r = t[A], A in e ? Object.defineProperty(e, A, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = r
    })
  }
  return e
}

function u(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
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
      onChange: n,
      disabled: l = false,
      name: i,
      alt: s,
      data: f
    } = e, g = i === t, p = (0, o.xUy)({
      isSelected: g,
      label: s
    }), m = l ? true : () => {
      n(f, i)
    };
    return (0, r.jsx)(o.P3F, u(c({
      ref: A,
      className: a()(d.radioOption, {
        [d.selected]: g,
        [d.disabled]: l
      }),
      onClick: m,
      "aria-disabled": l
    }, p), {
      children: (0, r.jsx)("img", {
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
  } = e, C = l === f, [v, j] = n.useState(C ? t : null), [x, U] = n.useState(null), V = n.useRef(null), P = n.useRef(null);
  n.useEffect(() => {
    p !== f && (j(null), U(null))
  }, [p]);
  let O = null != x ? s.intl.formatToPlainString(s.t["Kw+5YW"], {
      filename: x
    }) : s.intl.string(s.t.SNPvSk),
    F = (0, o.arW)({
      orientation: "horizontal",
      isDisabled: h
    }),
    {
      ref: I
    } = F,
    y = function(e, A) {
      if (null == e) return {};
      var t, r, n = function(e, A) {
        if (null == e) return {};
        var t, r, n = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) t = l[r], A.indexOf(t) >= 0 || (n[t] = e[t]);
        return n
      }(e, A);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
      }
      return n
    }(F, ["ref"]),
    N = () => {
      var e;
      return null == (e = V.current) ? true : e.activateUploadDialogue()
    },
    K = () => {
      l === f && m(A[0].data, A[0].name), j(null), U(null)
    };
  return n.useEffect(() => {
    if (C && null != x) {
      var e, A;
      null == (A = P.current) || null == (e = A.ref) || e.focus()
    }
  }, [C, x]), (0, r.jsxs)("div", {
    className: d.imageSelectionContainer,
    children: [(0, r.jsx)(o.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: a()(d.uploadButton, {
          [d.disabled]: h,
          [d.hidden]: null != v
        }),
        "aria-disabled": h,
        children: [(0, r.jsx)(o.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: b
        }), (0, r.jsx)(i.ZP, {
          ref: V,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (U(A.name), j(e), m(e, f))
          },
          "aria-label": b
        })]
      })
    }), null != v && (0, r.jsxs)("div", {
      className: d.customImageActionContainer,
      children: [(0, r.jsx)(o.ua7, {
        text: s.intl.string(s.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, r.jsx)(o.P3F, u(c({}, e), {
          className: d.customImageAction,
          onClick: N,
          "aria-label": s.intl.formatToPlainString(s.t.Qc9Lg4, {
            filename: x
          }),
          children: (0, r.jsx)(o.vdY, {
            size: "xs",
            color: "currentColor",
            className: d.editIcon
          })
        }))
      }), (0, r.jsx)(o.ua7, {
        text: s.intl.string(s.t.WxqWU1),
        hideOnClick: true,
        children: e => (0, r.jsx)(o.P3F, u(c({}, e), {
          className: d.customImageAction,
          onClick: K,
          "aria-label": s.intl.formatToPlainString(s.t.Z43V9f, {
            filename: x
          }),
          children: (0, r.jsx)(o.XHJ, {
            size: "md",
            color: "currentColor",
            className: d.deleteIcon
          })
        }))
      })]
    }), (0, r.jsxs)("div", u(c({
      "aria-label": q,
      ref: I
    }, y), {
      className: d.radioGroup,
      children: [null != v && (0, r.jsx)(g, {
        ref: P,
        selectedImageName: l,
        onChange: m,
        disabled: h,
        name: f,
        alt: O,
        data: v
      }), A.map(e => (0, r.jsx)(g, c({
        selectedImageName: l,
        onChange: m,
        disabled: h
      }, e), e.name))]
    }))]
  })
}