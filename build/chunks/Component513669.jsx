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

function f(e, t) {
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
let p = "custom-image",
  m = Chunk647438.forwardRef(function(e, t) {
    let {
      selectedImageName: A,
      onChange: n,
      disabled: a = false,
      name: i,
      alt: d,
      data: c
    } = e, p = i === A, m = (0, o.jm)({
      isSelected: p,
      label: d
    }), h = a ? true : () => {
      n(c, i)
    };
    return (0, r.jsx)(s.P3F, f(g({
      ref: t,
      className: l()(u.radioOption, {
        [u.selected]: p,
        [u.disabled]: a
      }),
      onClick: h,
      "aria-disabled": a
    }, m), {
      children: (0, r.jsx)("img", {
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
  } = e, j = a === p, [x, U] = n.useState(j ? A : null), [V, O] = n.useState(null), P = n.useRef(null), F = n.useRef(null);
  n.useEffect(() => {
    h !== p && (U(null), O(null))
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
    T = function(e, t) {
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
    }(I, ["ref"]);
  return n.useEffect(() => {
    if (j && null != V) {
      var e, t;
      null == (t = F.current) || null == (e = t.ref) || e.focus()
    }
  }, [j, V]), (0, r.jsxs)("div", {
    className: u.imageSelectionContainer,
    children: [(0, r.jsx)(s.tEY, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: l()(u.uploadButton, {
          [u.disabled]: C,
          [u.hidden]: null != x
        }),
        "aria-disabled": C,
        children: [(0, r.jsx)(s.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, r.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: q
        }), (0, r.jsx)(d.ZP, {
          ref: P,
          tabIndex: 0,
          onChange: (e, t) => {
            null != t && (O(t.name), U(e), v(e, p))
          },
          "aria-label": q
        })]
      })
    }), null != x && (0, r.jsxs)("div", {
      className: u.customImageActionContainer,
      children: [(0, r.jsx)(i.u, {
        asContainer: true,
        text: c.intl.string(c.t.AQYXMD),
        children: (0, r.jsx)(s.P3F, {
          className: u.customImageAction,
          onClick: () => {
            var e;
            return null == (e = P.current) ? true : e.activateUploadDialogue()
          },
          "aria-label": c.intl.formatToPlainString(c.t.Qc9Lg4, {
            filename: V
          }),
          children: (0, r.jsx)(s.vdY, {
            size: "xs",
            color: "currentColor",
            className: u.editIcon
          })
        })
      }), (0, r.jsx)(i.u, {
        asContainer: true,
        text: c.intl.string(c.t.WxqWU1),
        children: (0, r.jsx)(s.P3F, {
          className: u.customImageAction,
          onClick: () => {
            a === p && v(t[0].data, t[0].name), U(null), O(null)
          },
          "aria-label": c.intl.formatToPlainString(c.t.Z43V9f, {
            filename: V
          }),
          children: (0, r.jsx)(s.XHJ, {
            size: "md",
            color: "currentColor",
            className: u.deleteIcon
          })
        })
      })]
    }), (0, r.jsxs)("div", f(g({
      "aria-label": b,
      ref: N
    }, T), {
      className: u.radioGroup,
      children: [null != x && (0, r.jsx)(m, {
        ref: F,
        selectedImageName: a,
        onChange: v,
        disabled: C,
        name: p,
        alt: y,
        data: x
      }), t.map(e => (0, r.jsx)(m, g({
        selectedImageName: a,
        onChange: v,
        disabled: C
      }, e), e.name))]
    }))]
  })
}