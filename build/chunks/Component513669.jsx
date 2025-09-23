/** Chunk was on 73628 **/
/** chunk id: 513669, original params: e,A,t (module,exports,require) **/
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
  Chunk288532 = require("./288532.js");

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

function g(e, A) {
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
  p = Chunk647438.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: r,
      disabled: l = false,
      name: s,
      alt: d,
      data: f
    } = e, p = s === t, m = (0, i.jm)({
      isSelected: p,
      label: d
    }), q = l ? true : () => {
      r(f, s)
    };
    return (0, n.jsx)(o.P3F, g(c({
      ref: A,
      className: a()(u.radioOption, {
        [u.selected]: p,
        [u.disabled]: l
      }),
      onClick: q,
      "aria-disabled": l
    }, m), {
      children: (0, n.jsx)("img", {
        src: f,
        alt: d,
        className: u.radioOptionImage
      })
    }))
  });

function m(e) {
  let {
    presetImages: A,
    image: t,
    imageName: l,
    savedImageName: m,
    onChange: q,
    uploadButtonLabel: h = d.intl.string(d.t["MsUY/f"]),
    radioGroupAriaLabel: v = d.intl.string(d.t["0Q0UJi"]),
    disabled: b = false
  } = e, C = l === f, [U, j] = r.useState(C ? t : null), [V, x] = r.useState(null), P = r.useRef(null), O = r.useRef(null);
  r.useEffect(() => {
    m !== f && (j(null), x(null))
  }, [m]);
  let F = null != V ? d.intl.formatToPlainString(d.t["Kw+5YW"], {
      filename: V
    }) : d.intl.string(d.t.SNPvSk),
    I = (0, i.Jb)({
      orientation: "horizontal",
      isDisabled: b
    }),
    {
      ref: K
    } = I,
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
    }(I, ["ref"]),
    N = () => {
      var e;
      return null == (e = P.current) ? true : e.activateUploadDialogue()
    },
    T = () => {
      l === f && q(A[0].data, A[0].name), j(null), x(null)
    };
  return r.useEffect(() => {
    if (C && null != V) {
      var e, A;
      null == (A = O.current) || null == (e = A.ref) || e.focus()
    }
  }, [C, V]), (0, n.jsxs)("div", {
    className: u.imageSelectionContainer,
    children: [(0, n.jsx)(o.tEY, {
      within: true,
      children: (0, n.jsxs)("div", {
        className: a()(u.uploadButton, {
          [u.disabled]: b,
          [u.hidden]: null != U
        }),
        "aria-disabled": b,
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
          onChange: (e, A) => {
            null != A && (x(A.name), j(e), q(e, f))
          },
          "aria-label": h
        })]
      })
    }), null != U && (0, n.jsxs)("div", {
      className: u.customImageActionContainer,
      children: [(0, n.jsx)(o.ua7, {
        text: d.intl.string(d.t.AQYXMD),
        hideOnClick: true,
        children: e => (0, n.jsx)(o.P3F, g(c({}, e), {
          className: u.customImageAction,
          onClick: N,
          "aria-label": d.intl.formatToPlainString(d.t.Qc9Lg4, {
            filename: V
          }),
          children: (0, n.jsx)(o.vdY, {
            size: "xs",
            color: "currentColor",
            className: u.editIcon
          })
        }))
      }), (0, n.jsx)(o.ua7, {
        text: d.intl.string(d.t.WxqWU1),
        hideOnClick: true,
        children: e => (0, n.jsx)(o.P3F, g(c({}, e), {
          className: u.customImageAction,
          onClick: T,
          "aria-label": d.intl.formatToPlainString(d.t.Z43V9f, {
            filename: V
          }),
          children: (0, n.jsx)(o.XHJ, {
            size: "md",
            color: "currentColor",
            className: u.deleteIcon
          })
        }))
      })]
    }), (0, n.jsxs)("div", g(c({
      "aria-label": v,
      ref: K
    }, y), {
      className: u.radioGroup,
      children: [null != U && (0, n.jsx)(p, {
        ref: O,
        selectedImageName: l,
        onChange: q,
        disabled: b,
        name: f,
        alt: F,
        data: U
      }), A.map(e => (0, n.jsx)(p, c({
        selectedImageName: l,
        onChange: q,
        disabled: b
      }, e), e.name))]
    }))]
  })
}