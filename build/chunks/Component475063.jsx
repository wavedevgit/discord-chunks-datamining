/** Chunk was on web.js **/
/** chunk id: 475063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => C
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk766646 = require("./766646.jsx"),
  Chunk557818 = require("./557818.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk377089 = require("./377089.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk83553 = require("./83553.js"),
  Chunk951173 = require("./951173.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = (0, Chunk772848.Z)(),
  T = (0, Chunk772848.Z)(),
  S = (0, Chunk772848.Z)(),
  A = 10,
  N = 7.23;

function C(e) {
  var t, {
      value: n,
      placeholder: o = "",
      autoFocus: s = false,
      minLength: g,
      maxLength: b,
      error: v,
      defaultDirty: C,
      showCharacterCountFullPadding: w,
      showCharacterCount: D,
      showRemainingCharacterCount: L = true,
      "aria-labelledby": x,
      rows: M = 3,
      disabled: j,
      helperText: k,
      successMessage: U
    } = e,
    G = O(e, ["value", "placeholder", "autoFocus", "minLength", "maxLength", "error", "defaultDirty", "showCharacterCountFullPadding", "showCharacterCount", "showRemainingCharacterCount", "aria-labelledby", "rows", "disabled", "helperText", "successMessage"]);
  let B = (0, _.U)("UserSettingsDesignSystems"),
    Z = (0, f.m)({
      validateOn: "change",
      error: v,
      value: n,
      minLength: g,
      maxLength: b,
      defaultDirty: C
    }),
    F = i.useContext(c.q3),
    V = null != x ? x : null == F ? true : F.titleId,
    H = i.useMemo(() => {
      let e = [],
        t = null == F ? true : F.errorId;
      return null != t && e.push(t), null != v ? e.push(I) : (null != b && e.push(S), null != g && e.push(T)), e.length > 0 ? e.join(" ") : true
    }, [v, null == F ? true : F.errorId, b, g]),
    Y = i.useMemo(() => {
      if (B) return;
      if (null == b) return A;
      let e = "".concat(b).length;
      return w && (e += "".concat(b, " / ").length), N * e + A
    }, [B, b, w]),
    W = e => {
      let {
        onChange: t
      } = G;
      null == t || t(e.currentTarget.value), Z.setShouldValidate(true)
    };
  return (0, r.jsxs)(d.J, {
    validation: Z,
    disabled: j,
    helperText: k,
    successMessage: U,
    characterCount: B && D ? null != (t = null == n ? true : n.length) ? t : 0 : true,
    characterCountMaxLength: B && L ? b : true,
    children: [(0, r.jsx)(l.t, {
      children: (0, r.jsx)("textarea", y(E({
        className: a()(h.textArea, m.scrollbarDefault),
        "aria-labelledby": V,
        "aria-describedby": H,
        "aria-invalid": Z.hasError,
        style: {
          paddingRight: Y
        },
        placeholder: o,
        value: n,
        autoFocus: s,
        minLength: g,
        maxLength: b,
        rows: M,
        disabled: j
      }, G), {
        onChange: W
      }))
    }), null != g && (0, r.jsx)(u.n, {
      id: T,
      children: p.intl.format(p.t["bmQU//"], {
        minLength: g
      })
    }), null != b && (0, r.jsx)(u.n, {
      id: S,
      children: p.intl.format(p.t["+DFxLS"], {
        maxLength: b
      })
    }), !B && D ? (0, r.jsx)(R, {
      value: n,
      maxLength: b,
      hasError: Z.hasError
    }) : null, B || D || false === L ? null : (0, r.jsx)(P, {
      value: n,
      maxLength: b
    })]
  })
}

function R(e) {
  var t;
  let {
    value: n,
    maxLength: i,
    hasError: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(h.maxLength, {
      [h.errorOverflow]: o
    }),
    "aria-hidden": "true",
    children: [null != (t = null == n ? true : n.length) ? t : 0, " ", null != i && "/ ".concat(i)]
  })
}

function P(e) {
  let {
    value: t,
    maxLength: n
  } = e, o = i.useMemo(() => null == n ? null : n - (null != t ? t.length : 0), [n, t]);
  return null == o ? null : (0, r.jsx)("div", {
    className: a()(h.maxLength, {
      [h.errorOverflow]: o < 0
    }),
    "aria-hidden": "true",
    children: o
  })
}