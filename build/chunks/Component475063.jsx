/** Chunk was on web.js **/
/** chunk id: 475063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => R
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk766646 = require("./766646.jsx"),
  Chunk557818 = require("./557818.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk377089 = require("./377089.js"),
  Chunk680874 = require("./680874.jsx"),
  Chunk388032 = require("./388032.jsx"),
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = (0, Chunk772848.Z)(),
  S = (0, Chunk772848.Z)(),
  A = (0, Chunk772848.Z)(),
  C = 10,
  N = 7.23;

function R(e) {
  var t, {
      value: n,
      placeholder: o = "",
      autoFocus: s = false,
      autosize: E = false,
      minLength: y,
      maxLength: I,
      error: R,
      defaultDirty: D,
      showCharacterCount: x,
      showRemainingCharacterCount: L = true,
      "aria-labelledby": j,
      rows: k = 3,
      disabled: M,
      helperText: U,
      successMessage: G,
      inputRef: B
    } = e,
    Z = v(e, ["value", "placeholder", "autoFocus", "autosize", "minLength", "maxLength", "error", "defaultDirty", "showCharacterCount", "showRemainingCharacterCount", "aria-labelledby", "rows", "disabled", "helperText", "successMessage", "inputRef"]);
  let F = (0, _.U)("UserSettingsDesignSystems"),
    V = F ? false !== x : x,
    H = (0, f.m)({
      validateOn: "change",
      error: R,
      value: n,
      minLength: y,
      maxLength: I,
      defaultDirty: D
    }),
    Y = i.useContext(c.q3),
    W = null != j ? j : null == Y ? true : Y.titleId,
    K = i.useMemo(() => {
      let e = [],
        t = null == Y ? true : Y.errorId;
      return null != t && e.push(t), null != R ? e.push(T) : (null != I && e.push(A), null != y && e.push(S)), e.length > 0 ? e.join(" ") : true
    }, [R, null == Y ? true : Y.errorId, I, y]),
    z = i.useMemo(() => {
      if (F) return;
      if (null == I) return C;
      let e = "".concat(I).length;
      return N * (e += "".concat(I, " / ").length) + C
    }, [F, I]),
    q = e => {
      let {
        onChange: t
      } = Z;
      null == t || t(e.currentTarget.value), H.setShouldValidate(true)
    },
    X = E ? p.l : "textarea";
  return (0, r.jsxs)(d.J, {
    validation: H,
    disabled: M,
    helperText: U,
    successMessage: G,
    characterCount: F && V ? null != (t = null == n ? true : n.length) ? t : 0 : true,
    characterCountMaxLength: F && null != I ? I : true,
    children: [(0, r.jsx)(l.t, {
      children: (0, r.jsx)(X, O(b({
        className: a()(m.textArea, g.scrollbarDefault),
        "aria-labelledby": W,
        "aria-describedby": K,
        "aria-invalid": H.hasError,
        style: {
          paddingRight: z
        },
        placeholder: o,
        value: n,
        autoFocus: s,
        minLength: y,
        maxLength: I,
        rows: k,
        disabled: M
      }, Z), {
        onChange: q,
        ref: B
      }))
    }), null != y && (0, r.jsx)(u.n, {
      id: S,
      children: h.intl.format(h.t["bmQU//"], {
        minLength: y
      })
    }), null != I && (0, r.jsx)(u.n, {
      id: A,
      children: h.intl.format(h.t["+DFxLS"], {
        maxLength: I
      })
    }), !F && V ? (0, r.jsx)(P, {
      value: n,
      maxLength: I,
      hasError: H.hasError
    }) : null, F || V || false === L ? null : (0, r.jsx)(w, {
      value: n,
      maxLength: I
    })]
  })
}

function P(e) {
  var t;
  let {
    value: n,
    maxLength: i,
    hasError: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(m.maxLength, {
      [m.errorOverflow]: o
    }),
    "aria-hidden": "true",
    children: [null != (t = null == n ? true : n.length) ? t : 0, " ", null != i && "/ ".concat(i)]
  })
}

function w(e) {
  let {
    value: t,
    maxLength: n
  } = e, o = i.useMemo(() => null == n ? null : n - (null != t ? t.length : 0), [n, t]);
  return null == o ? null : (0, r.jsx)("div", {
    className: a()(m.maxLength, {
      [m.errorOverflow]: o < 0
    }),
    "aria-hidden": "true",
    children: o
  })
}