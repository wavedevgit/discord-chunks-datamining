/** Chunk was on 73628 **/
/** chunk id: 513669, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793156 = require("./793156.js");

function u(A) {
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

function g(A, e) {
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
let f = "custom-image",
  p = Chunk647438.forwardRef(function(A, e) {
    let {
      selectedImageName: t,
      onChange: r,
      disabled: l = false,
      name: s,
      alt: d,
      data: f
    } = A, p = s === t, m = (0, i.jm)({
      isSelected: p,
      label: d
    }), q = l ? true : () => {
      r(f, s)
    };
    return (0, n.jsx)(o.P3F, g(u({
      ref: e,
      className: a()(c.radioOption, {
        [c.selected]: p,
        [c.disabled]: l
      }),
      onClick: q,
      "aria-disabled": l
    }, m), {
      children: (0, n.jsx)("img", {
        src: f,
        alt: d,
        className: c.radioOptionImage
      })
    }))
  });

function m(A) {
  let {
    presetImages: e,
    image: t,
    imageName: l,
    savedImageName: m,
    onChange: q,
    uploadButtonLabel: h = d.intl.string(d.t["MsUY/f"]),
    radioGroupAriaLabel: b = d.intl.string(d.t["0Q0UJi"]),
    disabled: C = false
  } = A, v = l === f, [U, j] = r.useState(v ? t : null), [x, V] = r.useState(null), P = r.useRef(null), O = r.useRef(null);
  r.useEffect(() => {
    m !== f && (j(null), V(null))
  }, [m]);
  let F = null != x ? d.intl.formatToPlainString(d.t["Kw+5YW"], {
      filename: x
    }) : d.intl.string(d.t.SNPvSk),
    I = (0, i.Jb)({
      orientation: "horizontal",
      isDisabled: C
    }),
    {
      ref: K
    } = I,
    y = function(A, e) {
      if (null == A) return {};
      var t, n, r = function(A, e) {
        if (null == A) return {};
        var t, n, r = {},
          l = Object.keys(A);
        for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
        return r
      }(A, e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(A);
        for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
      }
      return r
    }(I, ["ref"]),
    N = () => {
      var A;
      return null == (A = P.current) ? true : A.activateUploadDialogue()
    },
    T = () => {
      l === f && q(e[0].data, e[0].name), j(null), V(null)
    };
  return r.useEffect(() => {
    if (v && null != x) {
      var A, e;
      null == (e = O.current) || null == (A = e.ref) || A.focus()
    }
  }, [v, x]), (0, n.jsxs)("div", {
    className: c.imageSelectionContainer,
    children: [(0, n.jsx)(o.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: a()(c.uploadButton, {
          [c.disabled]: C,
          [c.hidden]: null != U
        }),
        "aria-disabled": C,
        children: [(0, n.jsx)(o.FmF, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: h
        }), (0, n.jsx)(s.ZP, {
          ref: P,
          tabIndex: 0,
          onChange: (A, e) => {
            null != e && (V(e.name), j(A), q(A, f))
          },
          "aria-label": h
        })]
      })
    }), null != U && (0, n.jsxs)("div", {
      className: c.customImageActionContainer,
      children: [(0, n.jsx)(o.ua7, {
        text: d.intl.string(d.t.AQYXMD),
        hideOnClick: true,
        children: A => (0, n.jsx)(o.P3F, g(u({}, A), {
          className: c.customImageAction,
          onClick: N,
          "aria-label": d.intl.formatToPlainString(d.t.Qc9Lg4, {
            filename: x
          }),
          children: (0, n.jsx)(o.vdY, {
            size: "xs",
            color: "currentColor",
            className: c.editIcon
          })
        }))
      }), (0, n.jsx)(o.ua7, {
        text: d.intl.string(d.t.WxqWU1),
        hideOnClick: true,
        children: A => (0, n.jsx)(o.P3F, g(u({}, A), {
          className: c.customImageAction,
          onClick: T,
          "aria-label": d.intl.formatToPlainString(d.t.Z43V9f, {
            filename: x
          }),
          children: (0, n.jsx)(o.XHJ, {
            size: "md",
            color: "currentColor",
            className: c.deleteIcon
          })
        }))
      })]
    }), (0, n.jsxs)("div", g(u({
      "aria-label": b,
      ref: K
    }, y), {
      className: c.radioGroup,
      children: [null != U && (0, n.jsx)(p, {
        ref: O,
        selectedImageName: l,
        onChange: q,
        disabled: C,
        name: f,
        alt: F,
        data: U
      }), e.map(A => (0, n.jsx)(p, u({
        selectedImageName: l,
        onChange: q,
        disabled: C
      }, A), A.name))]
    }))]
  })
}