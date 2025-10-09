/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793156 = require("./793156.js");

function g(e) {
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

function f(e, t) {
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
let p = "custom-image",
  m = Chunk647438.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: r,
      disabled: a = false,
      name: i,
      alt: d,
      data: c
    } = e, p = i === A, m = (0, o.jm)({
      isSelected: p,
      label: d
    }), h = a ? true : () => {
      r(c, i)
    };
    return (0, n.jsx)(s.P3F, f(g({
      ref: t,
      className: l()(u.radioOption, {
        [u.selected]: p,
        [u.disabled]: a
      }),
      onClick: h,
      "aria-disabled": a
    }, m), {
      children: (0, n.jsx)("img", {
        src: c,
        alt: d,
        className: u.radioOptionImage
      })
    }))
  });

function h(e) {
  let {
    presetImages: t,
    image: A,
    imageName: a,
    savedImageName: h,
    onChange: v,
    uploadButtonLabel: q = c.intl.string(c.t["MsUY/f"]),
    radioGroupAriaLabel: b = c.intl.string(c.t["0Q0UJi"]),
    disabled: C = false
  } = e, j = a === p, [U, x] = r.useState(j ? A : null), [V, O] = r.useState(null), P = r.useRef(null), F = r.useRef(null);
  r.useEffect(() => {
    h !== p && (x(null), O(null))
  }, [h]);
  let y = null != V ? c.intl.formatToPlainString(c.t["Kw+5YW"], {
      filename: V
    }) : c.intl.string(c.t.SNPvSk),
    I = (0, o.Jb)({
      orientation: "horizontal",
      isDisabled: C
    }),
    {
      ref: N
    } = I,
    K = function(e, t) {
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
    }(I, ["ref"]);
  return r.useEffect(() => {
    if (j && null != V) {
      var e, t;
      null == (t = F.current) || null == (e = t.ref) || e.focus()
    }
  }, [j, V]), (0, n.jsxs)("div", {
    className: u.imageSelectionContainer,
    children: [(0, n.jsx)(s.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: l()(u.uploadButton, {
          [u.disabled]: C,
          [u.hidden]: null != U
        }),
        "aria-disabled": C,
        children: [(0, n.jsx)(s.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, n.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: q
        }), (0, n.jsx)(d.ZP, {
          ref: P,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (O(t.name), x(e), v(e, p))
          },
          "aria-label": q
        })]
      })
    }), null != U && (0, n.jsxs)("div", {
      className: u.customImageActionContainer,
      children: [(0, n.jsx)(i.u, {
        asContainer: true,
        text: c.intl.string(c.t.AQYXMD),
        children: (0, n.jsx)(s.P3F, {
          className: u.customImageAction,
          onClick: () => {
            var e;
            return null == (e = P.current) ? true : e.activateUploadDialogue()
          },
          "aria-label": c.intl.formatToPlainString(c.t.Qc9Lg4, {
            filename: V
          }),
          children: (0, n.jsx)(s.vdY, {
            size: "xs",
            color: "currentColor",
            className: u.editIcon
          })
        })
      }), (0, n.jsx)(i.u, {
        asContainer: true,
        text: c.intl.string(c.t.WxqWU1),
        children: (0, n.jsx)(s.P3F, {
          className: u.customImageAction,
          onClick: () => {
            a === p && v(t[0].data, t[0].name), x(null), O(null)
          },
          "aria-label": c.intl.formatToPlainString(c.t.Z43V9f, {
            filename: V
          }),
          children: (0, n.jsx)(s.XHJ, {
            size: "md",
            color: "currentColor",
            className: u.deleteIcon
          })
        })
      })]
    }), (0, n.jsxs)("div", f(g({
      "aria-label": b,
      ref: N
    }, K), {
      className: u.radioGroup,
      children: [null != U && (0, n.jsx)(m, {
        ref: F,
        selectedImageName: a,
        onChange: v,
        disabled: C,
        name: p,
        alt: y,
        data: U
      }), t.map(e => (0, n.jsx)(m, g({
        selectedImageName: a,
        onChange: v,
        disabled: C
      }, e), e.name))]
    }))]
  })
}