/** Chunk was on web.js **/
/** chunk id: 475063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => A
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk841878 = require("./841878.jsx"),
  Chunk74655 = require("./74655.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk440562 = require("./440562.js"),
  Chunk377089 = require("./377089.js"),
  Chunk680874 = require("./680874.jsx"),
  Chunk231282 = require("./231282.js"),
  Chunk154257 = require("./154257.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = 10,
  T = 7.23;

function A(e) {
  var t, {
      value: n,
      placeholder: a = "",
      autoFocus: l = false,
      autosize: _ = false,
      minLength: h,
      maxLength: E,
      error: y,
      defaultDirty: I,
      showCharacterCount: A,
      showRemainingCharacterCount: P = true,
      rows: w = 3,
      disabled: D,
      label: x,
      hideLabel: L,
      description: j,
      helperText: M,
      successMessage: k,
      inputRef: U
    } = e,
    G = v(e, ["value", "placeholder", "autoFocus", "autosize", "minLength", "maxLength", "error", "defaultDirty", "showCharacterCount", "showRemainingCharacterCount", "rows", "disabled", "label", "hideLabel", "description", "helperText", "successMessage", "inputRef"]);
  let B = (0, p.U)("UserSettingsDesignSystems"),
    Z = (0, d.m)({
      validateOn: "change",
      error: y,
      value: n,
      minLength: h,
      maxLength: E,
      defaultDirty: I
    }),
    F = i.useMemo(() => {
      if (B) return;
      if (null == E) return S;
      let e = "".concat(E).length;
      return T * (e += "".concat(E, " / ").length) + S
    }, [B, E]),
    V = e => {
      let {
        onChange: t
      } = G;
      null == t || t(e.currentTarget.value), Z.setShouldValidate(true)
    },
    H = B && A ? (0, r.jsx)(c.H, {
      value: n,
      maxLength: P && null != E ? E : true
    }) : null;
  return (0, r.jsx)(f.N, {
    label: x,
    hideLabel: L,
    description: j,
    helperText: M,
    successMessage: k,
    trailingContent: H,
    errorMessage: Z.hasError && null != (t = Z.errorMessage) ? t : true,
    children: (0, r.jsxs)(u.U, {
      validation: Z,
      disabled: D,
      children: [(0, r.jsx)(s.t, {
        children: (0, r.jsx)(C, O(b({
          autosize: _,
          className: o()(m.textArea, g.scrollbarDefault),
          style: {
            paddingRight: F
          },
          placeholder: a,
          value: n,
          autoFocus: l,
          minLength: h,
          maxLength: E,
          rows: w,
          disabled: D
        }, G), {
          onChange: V,
          ref: U
        }))
      }), B ? null : (0, r.jsxs)(r.Fragment, {
        children: [A ? (0, r.jsx)(N, {
          value: n,
          maxLength: E,
          hasError: Z.hasError
        }) : null, A || false === P ? null : (0, r.jsx)(R, {
          value: n,
          maxLength: E
        })]
      })]
    })
  })
}

function C(e) {
  var {
    "aria-labelledby": t,
    autosize: n
  } = e, a = v(e, ["aria-labelledby", "autosize"]);
  let o = (0, l.Gc)(),
    s = i.useContext(_.U),
    c = n ? h.l : "textarea";
  return (0, r.jsx)(c, O(b({}, a), {
    id: null == s ? true : s.controlId,
    "aria-labelledby": null != t ? t : o.titleId,
    "aria-describedby": null == s ? true : s.describedById,
    "aria-errormessage": null == s ? true : s.errorMessageId,
    "aria-invalid": (null == s ? true : s.errorMessageId) != null
  }))
}

function N(e) {
  var t;
  let {
    value: n,
    maxLength: i,
    hasError: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(m.maxLength, {
      [m.errorOverflow]: a
    }),
    "aria-hidden": "true",
    children: [null != (t = null == n ? true : n.length) ? t : 0, " ", null != i && "/ ".concat(i)]
  })
}

function R(e) {
  let {
    value: t,
    maxLength: n
  } = e, a = i.useMemo(() => null == n ? null : n - (null != t ? t.length : 0), [n, t]);
  return null == a ? null : (0, r.jsx)("div", {
    className: o()(m.maxLength, {
      [m.errorOverflow]: a < 0
    }),
    "aria-hidden": "true",
    children: a
  })
}