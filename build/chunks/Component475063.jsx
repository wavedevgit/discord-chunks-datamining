/** Chunk was on web.js **/
/** chunk id: 475063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk841878 = require("./841878.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk377089 = require("./377089.js"),
  Chunk680874 = require("./680874.jsx"),
  Chunk231282 = require("./231282.js"),
  Chunk154257 = require("./154257.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = 10,
  v = 7.23;

function I(e) {
  var t, {
      value: n,
      placeholder: a = "",
      autoFocus: l = false,
      autosize: f = false,
      minLength: h,
      maxLength: g,
      error: y,
      defaultDirty: I,
      showCharacterCount: C,
      showRemainingCharacterCount: N = true,
      rows: R = 3,
      inputRef: P
    } = e,
    D = b(e, ["value", "placeholder", "autoFocus", "autosize", "minLength", "maxLength", "error", "defaultDirty", "showCharacterCount", "showRemainingCharacterCount", "rows", "inputRef"]);
  let {
    fieldProps: w,
    props: L
  } = (0, s.XF_)(D), {
    disabled: x
  } = w, M = (0, d.U)("UserSettingsDesignSystems"), j = (0, u.m)({
    validateOn: "change",
    error: y,
    value: n,
    minLength: h,
    maxLength: g,
    defaultDirty: I
  }), k = i.useMemo(() => {
    if (M) return;
    if (null == g) return O;
    let e = "".concat(g).length;
    return v * (e += "".concat(g, " / ").length) + O
  }, [M, g]), U = e => {
    let {
      onChange: t
    } = L;
    null == t || t(e.currentTarget.value), j.setShouldValidate(true)
  }, G = M && C ? (0, r.jsx)(c.H, {
    value: n,
    maxLength: N && null != g ? g : true
  }) : null;
  return (0, r.jsx)(s.gNt, E(m({}, w), {
    trailingAuxiliaryContent: G,
    errorMessage: j.hasError && null != (t = j.errorMessage) ? t : true,
    children: (0, r.jsxs)(s.UPk, {
      validation: j,
      disabled: x,
      children: [(0, r.jsx)(s.tEY, {
        children: (0, r.jsx)(T, E(m({
          autosize: f,
          className: o()(_.textArea, p.scrollbarDefault),
          style: {
            paddingRight: k
          },
          placeholder: a,
          value: n,
          autoFocus: l,
          minLength: h,
          maxLength: g,
          rows: R,
          disabled: x,
          "data-mana-component": "text-area"
        }, L), {
          onChange: U,
          ref: P
        }))
      }), M ? null : (0, r.jsxs)(r.Fragment, {
        children: [C ? (0, r.jsx)(S, {
          value: n,
          maxLength: g,
          hasError: j.hasError
        }) : null, C || false === N ? null : (0, r.jsx)(A, {
          value: n,
          maxLength: g
        })]
      })]
    })
  }))
}

function T(e) {
  var {
    "aria-labelledby": t,
    autosize: n
  } = e, a = b(e, ["aria-labelledby", "autosize"]);
  let o = (0, l.Gc)(),
    c = i.useContext(s.zbb),
    u = n ? f.l : "textarea";
  return (0, r.jsx)(u, E(m({}, a), {
    id: null == c ? true : c.controlId,
    "aria-labelledby": null != t ? t : o.titleId,
    "aria-describedby": null == c ? true : c.describedById,
    "aria-errormessage": null == c ? true : c.errorMessageId,
    "aria-invalid": (null == c ? true : c.errorMessageId) != null
  }))
}

function S(e) {
  var t;
  let {
    value: n,
    maxLength: i,
    hasError: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(_.maxLength, {
      [_.errorOverflow]: a
    }),
    "aria-hidden": "true",
    children: [null != (t = null == n ? true : n.length) ? t : 0, " ", null != i && "/ ".concat(i)]
  })
}

function A(e) {
  let {
    value: t,
    maxLength: n
  } = e, a = i.useMemo(() => null == n ? null : n - (null != t ? t.length : 0), [n, t]);
  return null == a ? null : (0, r.jsx)("div", {
    className: o()(_.maxLength, {
      [_.errorOverflow]: a < 0
    }),
    "aria-hidden": "true",
    children: a
  })
}