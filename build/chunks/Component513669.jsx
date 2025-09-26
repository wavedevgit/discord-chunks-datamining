/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793156 = require("./793156.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var A = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(A);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = A[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var A = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      A.push.apply(A, r)
    }
    return A
  })(Object(t)).forEach(function(A) {
    Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A))
  }), e
}
let f = "custom-image",
  p = Chunk647438.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: n,
      disabled: a = false,
      name: s,
      alt: d,
      data: f
    } = e, p = s === A, m = (0, i.jm)({
      isSelected: p,
      label: d
    }), h = a ? true : () => {
      n(f, s)
    };
    return (0, r.jsx)(o.P3F, g(u({
      ref: t,
      className: l()(c.radioOption, {
        [c.selected]: p,
        [c.disabled]: a
      }),
      onClick: h,
      "aria-disabled": a
    }, m), {
      children: (0, r.jsx)("img", {
        src: f,
        alt: d,
        className: c.radioOptionImage
      })
    }))
  });

function m(e) {
  let {
    presetImages: t,
    image: A,
    imageName: a,
    savedImageName: m,
    onChange: h,
    uploadButtonLabel: v = d.intl.string(d.t["MsUY/f"]),
    radioGroupAriaLabel: q = d.intl.string(d.t["0Q0UJi"]),
    disabled: b = false
  } = e, C = a === f, [j, x] = n.useState(C ? A : null), [U, V] = n.useState(null), O = n.useRef(null), P = n.useRef(null);
  n.useEffect(() => {
    m !== f && (x(null), V(null))
  }, [m]);
  let F = null != U ? d.intl.formatToPlainString(d.t["Kw+5YW"], {
      filename: U
    }) : d.intl.string(d.t.SNPvSk),
    y = (0, i.Jb)({
      orientation: "horizontal",
      isDisabled: b
    }),
    {
      ref: I
    } = y,
    N = function(e, t) {
      if (null == e) return {};
      var A, r, n = function(e, t) {
        if (null == e) return {};
        var A, r, n = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) A = a[r], t.indexOf(A) >= 0 || (n[A] = e[A]);
        return n
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) A = a[r], !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (n[A] = e[A])
      }
      return n
    }(y, ["ref"]),
    T = () => {
      var e;
      return null == (e = O.current) ? true : e.activateUploadDialogue()
    },
    K = () => {
      a === f && h(t[0].data, t[0].name), x(null), V(null)
    };
  return n.useEffect(() => {
    if (C && null != U) {
      var e, t;
      null == (t = P.current) || null == (e = t.ref) || e.focus()
    }
  }, [C, U]), (0, r.jsxs)("div", {
    className: c.imageSelectionContainer,
    children: [(0, r.jsx)(o.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: l()(c.uploadButton, {
          [c.disabled]: b,
          [c.hidden]: null != j
        }),
        "aria-disabled": b,
        children: [(0, r.jsx)(o.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, r.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: v
        }), (0, r.jsx)(s.ZP, {
          ref: O,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (V(t.name), x(e), h(e, f))
          },
          "aria-label": v
        })]
      })
    }), null != j && (0, r.jsxs)("div", {
      className: c.customImageActionContainer,
      children: [(0, r.jsx)(o.ua7, {
        text: d.intl.string(d.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, r.jsx)(o.P3F, g(u({}, e), {
          className: c.customImageAction,
          onClick: T,
          "aria-label": d.intl.formatToPlainString(d.t.Qc9Lg4, {
            filename: U
          }),
          children: (0, r.jsx)(o.vdY, {
            size: "xs",
            color: "currentColor",
            className: c.editIcon
          })
        }))
      }), (0, r.jsx)(o.ua7, {
        text: d.intl.string(d.t.WxqWU1),
        hideOnClick: true,
        children: e => (0, r.jsx)(o.P3F, g(u({}, e), {
          className: c.customImageAction,
          onClick: K,
          "aria-label": d.intl.formatToPlainString(d.t.Z43V9f, {
            filename: U
          }),
          children: (0, r.jsx)(o.XHJ, {
            size: "md",
            color: "currentColor",
            className: c.deleteIcon
          })
        }))
      })]
    }), (0, r.jsxs)("div", g(u({
      "aria-label": q,
      ref: I
    }, N), {
      className: c.radioGroup,
      children: [null != j && (0, r.jsx)(p, {
        ref: P,
        selectedImageName: a,
        onChange: h,
        disabled: b,
        name: f,
        alt: F,
        data: j
      }), t.map(e => (0, r.jsx)(p, u({
        selectedImageName: a,
        onChange: h,
        disabled: b
      }, e), e.name))]
    }))]
  })
}